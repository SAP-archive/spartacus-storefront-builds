import { __awaiter } from "tslib";
import { Compiler, Injectable, InjectFlags, Injector, NgModuleFactory, } from '@angular/core';
import { ConfigChunk, ConfigInitializerService, createFrom, deepMerge, DefaultConfigChunk, EventService, ModuleInitializedEvent, } from '@spartacus/core';
import { combineLatest, defer, forkJoin, from, merge, of, queueScheduler, } from 'rxjs';
import { map, observeOn, pluck, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Service responsible for resolving cms config based feature modules.
 */
export class FeatureModulesService {
    constructor(configInitializer, compiler, injector, events) {
        this.configInitializer = configInitializer;
        this.compiler = compiler;
        this.injector = injector;
        this.events = events;
        // maps componentType to feature
        this.componentFeatureMap = new Map();
        /*
         * Contains either FeatureInstance or FeatureInstance resolver for not yet
         * resolved feature modules
         */
        this.features = new Map();
        this.dependencyModules = new Map();
        this.initFeatureMap();
    }
    initFeatureMap() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configInitializer.getStableConfig('featureModules');
            this.featureModulesConfig = (_a = config.featureModules) !== null && _a !== void 0 ? _a : {};
            for (const [featureName, featureConfig] of Object.entries(this.featureModulesConfig)) {
                if ((_b = featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.cmsComponents) === null || _b === void 0 ? void 0 : _b.length) {
                    for (const component of featureConfig.cmsComponents) {
                        this.componentFeatureMap.set(component, featureName);
                    }
                }
            }
        });
    }
    /**
     * Check if there is feature module configuration that covers specified
     * component type
     */
    hasFeatureFor(componentType) {
        return this.componentFeatureMap.has(componentType);
    }
    /**
     * Return full CmsComponent mapping defined in feature module
     */
    getCmsMapping(componentType) {
        const feature = this.componentFeatureMap.get(componentType);
        return this.resolveFeature(feature).pipe(map((featureInstance) => featureInstance.componentsMappings[componentType]));
    }
    /**
     * Get all injectors for feature and its dependencies
     *
     * As it's a synchronous method, it works only for already resolved features,
     * returning undefined otherwise
     */
    getInjectors(componentType) {
        var _a;
        const feature = this.componentFeatureMap.get(componentType);
        let injectors;
        // we are returning injectors only for already resolved features
        (_a = this.features
            .get(feature)) === null || _a === void 0 ? void 0 : _a.subscribe((featureInstance) => {
            injectors = [
                // feature module injector
                featureInstance.moduleRef.injector,
                // injectors from dependency modules
                ...featureInstance.depsModules.map((module) => this.dependencyModules.get(module).injector),
            ];
        }).unsubscribe();
        return injectors;
    }
    /**
     * Resolve feature based on feature name, if feature was not yet resolved
     *
     * It will first resolve all module dependencies if defined
     */
    resolveFeature(featureName) {
        return defer(() => {
            var _a;
            if (!this.features.has(featureName)) {
                const featureConfig = this.featureModulesConfig[featureName];
                if (!(featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module)) {
                    throw new Error('No module defined for Feature Module ' + featureName);
                }
                // resolve dependencies first (if any)
                const depsResolve = ((_a = featureConfig.dependencies) === null || _a === void 0 ? void 0 : _a.length) ? forkJoin(featureConfig.dependencies.map((depModuleFunc) => this.resolveDependencyModule(depModuleFunc)))
                    : of(undefined);
                this.features.set(featureName, depsResolve.pipe(switchMap((deps) => this.resolveFeatureModule(featureConfig, deps)), tap((featureInstance) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
                    featureName,
                    moduleRef: featureInstance.moduleRef,
                }))), shareReplay()));
            }
            return this.features.get(featureName);
        });
    }
    /**
     * Initialize feature module by returning feature instance
     */
    resolveFeatureModule(featureConfig, depsModules = []) {
        return this.resolveModuleFactory(featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module).pipe(map(([moduleFactory]) => {
            const moduleRef = moduleFactory.create(this.injector);
            const featureInstance = Object.assign(Object.assign({}, featureConfig), { moduleRef,
                depsModules, componentsMappings: {} });
            // resolve configuration for feature module
            const resolvedConfiguration = this.resolveFeatureConfiguration(moduleRef.injector);
            // extract cms components configuration from feature config
            for (const componentType of featureInstance.cmsComponents) {
                featureInstance.componentsMappings[componentType] =
                    resolvedConfiguration.cmsComponents[componentType];
            }
            return featureInstance;
        }));
    }
    /**
     * Returns configuration provided in feature module
     */
    resolveFeatureConfiguration(featureInjector) {
        // get config chunks from feature lib
        const featureConfigChunks = featureInjector.get(ConfigChunk, [], InjectFlags.Self);
        // get default config chunks from feature lib
        const featureDefaultConfigChunks = featureInjector.get(DefaultConfigChunk, [], InjectFlags.Self);
        return deepMerge({}, ...(featureDefaultConfigChunks !== null && featureDefaultConfigChunks !== void 0 ? featureDefaultConfigChunks : []), ...(featureConfigChunks !== null && featureConfigChunks !== void 0 ? featureConfigChunks : []));
    }
    /**
     * Resolves dependency module and initializes single module instance
     */
    resolveDependencyModule(moduleFunc) {
        // We grab moduleFactory symbol from module function and if there is no
        // such a module created yet, we create it and store it in a
        // dependencyModules map
        return this.resolveModuleFactory(moduleFunc).pipe(tap(([moduleFactory, module]) => {
            if (!this.dependencyModules.has(module)) {
                const moduleRef = moduleFactory.create(this.injector);
                this.dependencyModules.set(module, moduleRef);
                this.events.dispatch(createFrom(ModuleInitializedEvent, {
                    moduleRef,
                }));
            }
        }), pluck(1));
    }
    /**
     * Resolve any Angular module from an function that return module or moduleFactory
     */
    resolveModuleFactory(moduleFunc) {
        return from(moduleFunc()).pipe(switchMap((module) => module instanceof NgModuleFactory
            ? of([module, module])
            : combineLatest([
                // using compiler here is for jit compatibility, there is no overhead
                // for aot production builds as it will be stubbed
                from(this.compiler.compileModuleAsync(module)),
                of(module),
            ])), observeOn(queueScheduler));
    }
    ngOnDestroy() {
        // clean up all initialized features
        merge(...Array.from(this.features.values())).subscribe((featureInstance) => { var _a; return (_a = featureInstance.moduleRef) === null || _a === void 0 ? void 0 : _a.destroy(); });
        // clean up all initialized dependency modules
        this.dependencyModules.forEach((dependency) => dependency.destroy());
    }
}
FeatureModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureModulesService_Factory() { return new FeatureModulesService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.EventService)); }, token: FeatureModulesService, providedIn: "root" });
FeatureModulesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FeatureModulesService.ctorParameters = () => [
    { type: ConfigInitializerService },
    { type: Compiler },
    { type: Injector },
    { type: EventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLGVBQWUsR0FHaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUlMLFdBQVcsRUFDWCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFNBQVMsRUFDVCxrQkFBa0IsRUFDbEIsWUFBWSxFQUVaLHNCQUFzQixHQUN2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxFQUVMLEVBQUUsRUFDRixjQUFjLEdBQ2YsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUXhCOztHQUVHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWlCaEMsWUFDWSxpQkFBMkMsRUFDM0MsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsTUFBb0I7UUFIcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQWZoQyxnQ0FBZ0M7UUFDeEIsd0JBQW1CLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Q7OztXQUdHO1FBQ0ssYUFBUSxHQUE2QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRS9ELHNCQUFpQixHQUFH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QUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztZQTdQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXRDQyx3QkFBd0I7WUFieEIsUUFBUTtZQUdSLFFBQVE7WUFjUixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcGlsZXIsXG4gIEluamVjdGFibGUsXG4gIEluamVjdEZsYWdzLFxuICBJbmplY3RvcixcbiAgTmdNb2R1bGVGYWN0b3J5LFxuICBOZ01vZHVsZVJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENNU0NvbXBvbmVudENvbmZpZyxcbiAgQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdDaHVuayxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBjcmVhdGVGcm9tLFxuICBkZWVwTWVyZ2UsXG4gIERlZmF1bHRDb25maWdDaHVuayxcbiAgRXZlbnRTZXJ2aWNlLFxuICBGZWF0dXJlTW9kdWxlQ29uZmlnLFxuICBNb2R1bGVJbml0aWFsaXplZEV2ZW50LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVmZXIsXG4gIGZvcmtKb2luLFxuICBmcm9tLFxuICBtZXJnZSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIHF1ZXVlU2NoZWR1bGVyLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBGZWF0dXJlSW5zdGFuY2UgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlQ29uZmlnIHtcbiAgbW9kdWxlUmVmPzogTmdNb2R1bGVSZWY8YW55PjtcbiAgZGVwc01vZHVsZXM/OiBhbnlbXTtcbiAgY29tcG9uZW50c01hcHBpbmdzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgcmVzcG9uc2libGUgZm9yIHJlc29sdmluZyBjbXMgY29uZmlnIGJhc2VkIGZlYXR1cmUgbW9kdWxlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNb2R1bGVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8vIGZlYXR1cmUgbW9kdWxlcyBjb25maWd1cmF0aW9uXG4gIHByaXZhdGUgZmVhdHVyZU1vZHVsZXNDb25maWc/OiB7XG4gICAgW2ZlYXR1cmVOYW1lOiBzdHJpbmddOiBGZWF0dXJlTW9kdWxlQ29uZmlnO1xuICB9O1xuXG4gIC8vIG1hcHMgY29tcG9uZW50VHlwZSB0byBmZWF0dXJlXG4gIHByaXZhdGUgY29tcG9uZW50RmVhdHVyZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICAvKlxuICAgKiBDb250YWlucyBlaXRoZXIgRmVhdHVyZUluc3RhbmNlIG9yIEZlYXR1cmVJbnN0YW5jZSByZXNvbHZlciBmb3Igbm90IHlldFxuICAgKiByZXNvbHZlZCBmZWF0dXJlIG1vZHVsZXNcbiAgICovXG4gIHByaXZhdGUgZmVhdHVyZXM6IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPj4gPSBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBkZXBlbmRlbmN5TW9kdWxlcyA9IG5ldyBNYXA8YW55LCBOZ01vZHVsZVJlZjxhbnk+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcm90ZWN0ZWQgZXZlbnRzOiBFdmVudFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0RmVhdHVyZU1hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RmVhdHVyZU1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWc6IENtc0NvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnSW5pdGlhbGl6ZXIuZ2V0U3RhYmxlQ29uZmlnKFxuICAgICAgJ2ZlYXR1cmVNb2R1bGVzJ1xuICAgICk7XG5cbiAgICB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnID0gY29uZmlnLmZlYXR1cmVNb2R1bGVzID8/IHt9O1xuXG4gICAgZm9yIChjb25zdCBbZmVhdHVyZU5hbWUsIGZlYXR1cmVDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1xuICAgICkpIHtcbiAgICAgIGlmIChmZWF0dXJlQ29uZmlnPy5jbXNDb21wb25lbnRzPy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgZmVhdHVyZUNvbmZpZy5jbXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLnNldChjb21wb25lbnQsIGZlYXR1cmVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBpcyBmZWF0dXJlIG1vZHVsZSBjb25maWd1cmF0aW9uIHRoYXQgY292ZXJzIHNwZWNpZmllZFxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgaGFzRmVhdHVyZUZvcihjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmhhcyhjb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZnVsbCBDbXNDb21wb25lbnQgbWFwcGluZyBkZWZpbmVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAqL1xuICBnZXRDbXNNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50TWFwcGluZz4ge1xuICAgIGNvbnN0IGZlYXR1cmUgPSB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuZ2V0KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUZlYXR1cmUoZmVhdHVyZSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKGZlYXR1cmVJbnN0YW5jZSkgPT4gZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBpbmplY3RvcnMgZm9yIGZlYXR1cmUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbiAgICpcbiAgICogQXMgaXQncyBhIHN5bmNocm9ub3VzIG1ldGhvZCwgaXQgd29ya3Mgb25seSBmb3IgYWxyZWFkeSByZXNvbHZlZCBmZWF0dXJlcyxcbiAgICogcmV0dXJuaW5nIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAgICovXG4gIGdldEluamVjdG9ycyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbmplY3RvcltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmdldChjb21wb25lbnRUeXBlKTtcbiAgICBsZXQgaW5qZWN0b3JzO1xuXG4gICAgLy8gd2UgYXJlIHJldHVybmluZyBpbmplY3RvcnMgb25seSBmb3IgYWxyZWFkeSByZXNvbHZlZCBmZWF0dXJlc1xuICAgIHRoaXMuZmVhdHVyZXNcbiAgICAgIC5nZXQoZmVhdHVyZSlcbiAgICAgID8uc3Vic2NyaWJlKChmZWF0dXJlSW5zdGFuY2UpID0+IHtcbiAgICAgICAgaW5qZWN0b3JzID0gW1xuICAgICAgICAgIC8vIGZlYXR1cmUgbW9kdWxlIGluamVjdG9yXG4gICAgICAgICAgZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZi5pbmplY3RvcixcbiAgICAgICAgICAvLyBpbmplY3RvcnMgZnJvbSBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICAgICAgICAuLi5mZWF0dXJlSW5zdGFuY2UuZGVwc01vZHVsZXMubWFwKFxuICAgICAgICAgICAgKG1vZHVsZSkgPT4gdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5nZXQobW9kdWxlKS5pbmplY3RvclxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIGluamVjdG9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGZlYXR1cmUgYmFzZWQgb24gZmVhdHVyZSBuYW1lLCBpZiBmZWF0dXJlIHdhcyBub3QgeWV0IHJlc29sdmVkXG4gICAqXG4gICAqIEl0IHdpbGwgZmlyc3QgcmVzb2x2ZSBhbGwgbW9kdWxlIGRlcGVuZGVuY2llcyBpZiBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlKGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZmVhdHVyZXMuaGFzKGZlYXR1cmVOYW1lKSkge1xuICAgICAgICBjb25zdCBmZWF0dXJlQ29uZmlnID0gdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1tmZWF0dXJlTmFtZV07XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlQ29uZmlnPy5tb2R1bGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gbW9kdWxlIGRlZmluZWQgZm9yIEZlYXR1cmUgTW9kdWxlICcgKyBmZWF0dXJlTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNvbHZlIGRlcGVuZGVuY2llcyBmaXJzdCAoaWYgYW55KVxuICAgICAgICBjb25zdCBkZXBzUmVzb2x2ZSA9IGZlYXR1cmVDb25maWcuZGVwZW5kZW5jaWVzPy5sZW5ndGhcbiAgICAgICAgICA/IGZvcmtKb2luKFxuICAgICAgICAgICAgICBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcy5tYXAoKGRlcE1vZHVsZUZ1bmMpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRGVwZW5kZW5jeU1vZHVsZShkZXBNb2R1bGVGdW5jKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBvZih1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc2V0KFxuICAgICAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgICAgIGRlcHNSZXNvbHZlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKGRlcHMpID0+IHRoaXMucmVzb2x2ZUZlYXR1cmVNb2R1bGUoZmVhdHVyZUNvbmZpZywgZGVwcykpLFxuICAgICAgICAgICAgdGFwKChmZWF0dXJlSW5zdGFuY2UpID0+XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRzLmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUZyb20oTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCwge1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgICAgICAgICAgICBtb2R1bGVSZWY6IGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWYsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmdldChmZWF0dXJlTmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBmZWF0dXJlIG1vZHVsZSBieSByZXR1cm5pbmcgZmVhdHVyZSBpbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZU1vZHVsZShcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlTW9kdWxlQ29uZmlnLFxuICAgIGRlcHNNb2R1bGVzOiBhbnlbXSA9IFtdXG4gICk6IE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPiB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkoZmVhdHVyZUNvbmZpZz8ubW9kdWxlKS5waXBlKFxuICAgICAgbWFwKChbbW9kdWxlRmFjdG9yeV0pID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICAgICAgY29uc3QgZmVhdHVyZUluc3RhbmNlOiBGZWF0dXJlSW5zdGFuY2UgPSB7XG4gICAgICAgICAgLi4uZmVhdHVyZUNvbmZpZyxcbiAgICAgICAgICBtb2R1bGVSZWYsXG4gICAgICAgICAgZGVwc01vZHVsZXMsXG4gICAgICAgICAgY29tcG9uZW50c01hcHBpbmdzOiB7fSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyByZXNvbHZlIGNvbmZpZ3VyYXRpb24gZm9yIGZlYXR1cmUgbW9kdWxlXG4gICAgICAgIGNvbnN0IHJlc29sdmVkQ29uZmlndXJhdGlvbiA9IHRoaXMucmVzb2x2ZUZlYXR1cmVDb25maWd1cmF0aW9uKFxuICAgICAgICAgIG1vZHVsZVJlZi5pbmplY3RvclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGV4dHJhY3QgY21zIGNvbXBvbmVudHMgY29uZmlndXJhdGlvbiBmcm9tIGZlYXR1cmUgY29uZmlnXG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBmZWF0dXJlSW5zdGFuY2UuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgIGZlYXR1cmVJbnN0YW5jZS5jb21wb25lbnRzTWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPVxuICAgICAgICAgICAgcmVzb2x2ZWRDb25maWd1cmF0aW9uLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZlYXR1cmVJbnN0YW5jZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgaW4gZmVhdHVyZSBtb2R1bGVcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVDb25maWd1cmF0aW9uKGZlYXR1cmVJbmplY3RvcjogSW5qZWN0b3IpOiBDbXNDb25maWcge1xuICAgIC8vIGdldCBjb25maWcgY2h1bmtzIGZyb20gZmVhdHVyZSBsaWJcbiAgICBjb25zdCBmZWF0dXJlQ29uZmlnQ2h1bmtzID0gZmVhdHVyZUluamVjdG9yLmdldDxhbnlbXT4oXG4gICAgICBDb25maWdDaHVuayxcbiAgICAgIFtdLFxuICAgICAgSW5qZWN0RmxhZ3MuU2VsZlxuICAgICk7XG4gICAgLy8gZ2V0IGRlZmF1bHQgY29uZmlnIGNodW5rcyBmcm9tIGZlYXR1cmUgbGliXG4gICAgY29uc3QgZmVhdHVyZURlZmF1bHRDb25maWdDaHVua3MgPSBmZWF0dXJlSW5qZWN0b3IuZ2V0PGFueVtdPihcbiAgICAgIERlZmF1bHRDb25maWdDaHVuayxcbiAgICAgIFtdLFxuICAgICAgSW5qZWN0RmxhZ3MuU2VsZlxuICAgICk7XG5cbiAgICByZXR1cm4gZGVlcE1lcmdlKFxuICAgICAge30sXG4gICAgICAuLi4oZmVhdHVyZURlZmF1bHRDb25maWdDaHVua3MgPz8gW10pLFxuICAgICAgLi4uKGZlYXR1cmVDb25maWdDaHVua3MgPz8gW10pXG4gICAgKSBhcyBDbXNDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgZGVwZW5kZW5jeSBtb2R1bGUgYW5kIGluaXRpYWxpemVzIHNpbmdsZSBtb2R1bGUgaW5zdGFuY2VcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZURlcGVuZGVuY3lNb2R1bGUoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gV2UgZ3JhYiBtb2R1bGVGYWN0b3J5IHN5bWJvbCBmcm9tIG1vZHVsZSBmdW5jdGlvbiBhbmQgaWYgdGhlcmUgaXMgbm9cbiAgICAvLyBzdWNoIGEgbW9kdWxlIGNyZWF0ZWQgeWV0LCB3ZSBjcmVhdGUgaXQgYW5kIHN0b3JlIGl0IGluIGFcbiAgICAvLyBkZXBlbmRlbmN5TW9kdWxlcyBtYXBcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTW9kdWxlRmFjdG9yeShtb2R1bGVGdW5jKS5waXBlKFxuICAgICAgdGFwKChbbW9kdWxlRmFjdG9yeSwgbW9kdWxlXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuaGFzKG1vZHVsZSkpIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGVSZWYgPSBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICAgICAgICB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLnNldChtb2R1bGUsIG1vZHVsZVJlZik7XG5cbiAgICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChcbiAgICAgICAgICAgIGNyZWF0ZUZyb20oTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCwge1xuICAgICAgICAgICAgICBtb2R1bGVSZWYsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgcGx1Y2soMSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYW55IEFuZ3VsYXIgbW9kdWxlIGZyb20gYW4gZnVuY3Rpb24gdGhhdCByZXR1cm4gbW9kdWxlIG9yIG1vZHVsZUZhY3RvcnlcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZU1vZHVsZUZhY3RvcnkoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+XG4gICk6IE9ic2VydmFibGU8W05nTW9kdWxlRmFjdG9yeTxhbnk+LCBhbnldPiB7XG4gICAgcmV0dXJuIGZyb20obW9kdWxlRnVuYygpKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChtb2R1bGUpID0+XG4gICAgICAgIG1vZHVsZSBpbnN0YW5jZW9mIE5nTW9kdWxlRmFjdG9yeVxuICAgICAgICAgID8gKG9mKFttb2R1bGUsIG1vZHVsZV0pIGFzIE9ic2VydmFibGU8W05nTW9kdWxlRmFjdG9yeTxhbnk+LCBhbnldPilcbiAgICAgICAgICA6IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAvLyB1c2luZyBjb21waWxlciBoZXJlIGlzIGZvciBqaXQgY29tcGF0aWJpbGl0eSwgdGhlcmUgaXMgbm8gb3ZlcmhlYWRcbiAgICAgICAgICAgICAgLy8gZm9yIGFvdCBwcm9kdWN0aW9uIGJ1aWxkcyBhcyBpdCB3aWxsIGJlIHN0dWJiZWRcbiAgICAgICAgICAgICAgZnJvbSh0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGUgYXMgYW55KSksXG4gICAgICAgICAgICAgIG9mKG1vZHVsZSksXG4gICAgICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gY2xlYW4gdXAgYWxsIGluaXRpYWxpemVkIGZlYXR1cmVzXG4gICAgbWVyZ2UoLi4uQXJyYXkuZnJvbSh0aGlzLmZlYXR1cmVzLnZhbHVlcygpKSkuc3Vic2NyaWJlKChmZWF0dXJlSW5zdGFuY2UpID0+XG4gICAgICBmZWF0dXJlSW5zdGFuY2UubW9kdWxlUmVmPy5kZXN0cm95KClcbiAgICApO1xuXG4gICAgLy8gY2xlYW4gdXAgYWxsIGluaXRpYWxpemVkIGRlcGVuZGVuY3kgbW9kdWxlc1xuICAgIHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuZm9yRWFjaCgoZGVwZW5kZW5jeSkgPT4gZGVwZW5kZW5jeS5kZXN0cm95KCkpO1xuICB9XG59XG4iXX0=