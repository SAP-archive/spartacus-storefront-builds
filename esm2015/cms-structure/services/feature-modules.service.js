import { __awaiter, __decorate } from "tslib";
import { Compiler, Injectable, InjectFlags, Injector, NgModuleFactory, NgModuleRef, OnDestroy, } from '@angular/core';
import { CMSComponentConfig, CmsComponentMapping, CmsConfig, ConfigChunk, ConfigInitializerService, createFrom, deepMerge, DefaultConfigChunk, EventService, FeatureModuleConfig, ModuleInitializedEvent, } from '@spartacus/core';
import { combineLatest, defer, forkJoin, from, merge, of, queueScheduler, } from 'rxjs';
import { map, observeOn, pluck, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Service responsible for resolving cms config based feature modules.
 */
let FeatureModulesService = class FeatureModulesService {
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
};
FeatureModulesService.ctorParameters = () => [
    { type: ConfigInitializerService },
    { type: Compiler },
    { type: Injector },
    { type: EventService }
];
FeatureModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureModulesService_Factory() { return new FeatureModulesService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.EventService)); }, token: FeatureModulesService, providedIn: "root" });
FeatureModulesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FeatureModulesService);
export { FeatureModulesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixTQUFTLEVBQ1Qsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsc0JBQXNCLEdBQ3ZCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGFBQWEsRUFDYixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBRUwsRUFBRSxFQUNGLGNBQWMsR0FDZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7QUFReEI7O0dBRUc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWlCaEMsWUFDWSxpQkFBMkMsRUFDM0MsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsTUFBb0I7UUFIcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQWZoQyxnQ0FBZ0M7UUFDeEIsd0JBQW1CLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7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ZUFBZSxDQUFDLFNBQVMsMENBQUUsT0FBTyxLQUFFLENBQ3JDLENBQUM7UUFFRiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUNGLENBQUE7O1lBek9nQyx3QkFBd0I7WUFDakMsUUFBUTtZQUNSLFFBQVE7WUFDVixZQUFZOzs7QUFyQnJCLHFCQUFxQjtJQUhqQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1cscUJBQXFCLENBMlBqQztTQTNQWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21waWxlcixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdG9yLFxuICBOZ01vZHVsZUZhY3RvcnksXG4gIE5nTW9kdWxlUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TQ29tcG9uZW50Q29uZmlnLFxuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ0NodW5rLFxuICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGNyZWF0ZUZyb20sXG4gIGRlZXBNZXJnZSxcbiAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICBFdmVudFNlcnZpY2UsXG4gIEZlYXR1cmVNb2R1bGVDb25maWcsXG4gIE1vZHVsZUluaXRpYWxpemVkRXZlbnQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBkZWZlcixcbiAgZm9ya0pvaW4sXG4gIGZyb20sXG4gIG1lcmdlLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgcXVldWVTY2hlZHVsZXIsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBvYnNlcnZlT24sXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIEZlYXR1cmVJbnN0YW5jZSBleHRlbmRzIEZlYXR1cmVNb2R1bGVDb25maWcge1xuICBtb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjxhbnk+O1xuICBkZXBzTW9kdWxlcz86IGFueVtdO1xuICBjb21wb25lbnRzTWFwcGluZ3M/OiBDTVNDb21wb25lbnRDb25maWc7XG59XG5cbi8qKlxuICogU2VydmljZSByZXNwb25zaWJsZSBmb3IgcmVzb2x2aW5nIGNtcyBjb25maWcgYmFzZWQgZmVhdHVyZSBtb2R1bGVzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLy8gZmVhdHVyZSBtb2R1bGVzIGNvbmZpZ3VyYXRpb25cbiAgcHJpdmF0ZSBmZWF0dXJlTW9kdWxlc0NvbmZpZz86IHtcbiAgICBbZmVhdHVyZU5hbWU6IHN0cmluZ106IEZlYXR1cmVNb2R1bGVDb25maWc7XG4gIH07XG5cbiAgLy8gbWFwcyBjb21wb25lbnRUeXBlIHRvIGZlYXR1cmVcbiAgcHJpdmF0ZSBjb21wb25lbnRGZWF0dXJlTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuXG4gIC8qXG4gICAqIENvbnRhaW5zIGVpdGhlciBGZWF0dXJlSW5zdGFuY2Ugb3IgRmVhdHVyZUluc3RhbmNlIHJlc29sdmVyIGZvciBub3QgeWV0XG4gICAqIHJlc29sdmVkIGZlYXR1cmUgbW9kdWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBmZWF0dXJlczogTWFwPHN0cmluZywgT2JzZXJ2YWJsZTxGZWF0dXJlSW5zdGFuY2U+PiA9IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGRlcGVuZGVuY3lNb2R1bGVzID0gbmV3IE1hcDxhbnksIE5nTW9kdWxlUmVmPGFueT4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbXBpbGVyOiBDb21waWxlcixcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBldmVudHM6IEV2ZW50U2VydmljZVxuICApIHtcbiAgICB0aGlzLmluaXRGZWF0dXJlTWFwKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRGZWF0dXJlTWFwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbmZpZzogQ21zQ29uZmlnID0gYXdhaXQgdGhpcy5jb25maWdJbml0aWFsaXplci5nZXRTdGFibGVDb25maWcoXG4gICAgICAnZmVhdHVyZU1vZHVsZXMnXG4gICAgKTtcblxuICAgIHRoaXMuZmVhdHVyZU1vZHVsZXNDb25maWcgPSBjb25maWcuZmVhdHVyZU1vZHVsZXMgPz8ge307XG5cbiAgICBmb3IgKGNvbnN0IFtmZWF0dXJlTmFtZSwgZmVhdHVyZUNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnXG4gICAgKSkge1xuICAgICAgaWYgKGZlYXR1cmVDb25maWc/LmNtc0NvbXBvbmVudHM/Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBmZWF0dXJlQ29uZmlnLmNtc0NvbXBvbmVudHMpIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuc2V0KGNvbXBvbmVudCwgZmVhdHVyZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGlzIGZlYXR1cmUgbW9kdWxlIGNvbmZpZ3VyYXRpb24gdGhhdCBjb3ZlcnMgc3BlY2lmaWVkXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqL1xuICBoYXNGZWF0dXJlRm9yKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuaGFzKGNvbXBvbmVudFR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBmdWxsIENtc0NvbXBvbmVudCBtYXBwaW5nIGRlZmluZWQgaW4gZmVhdHVyZSBtb2R1bGVcbiAgICovXG4gIGdldENtc01hcHBpbmcoY29tcG9uZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPiB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5nZXQoY29tcG9uZW50VHlwZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRmVhdHVyZShmZWF0dXJlKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoZmVhdHVyZUluc3RhbmNlKSA9PiBmZWF0dXJlSW5zdGFuY2UuY29tcG9uZW50c01hcHBpbmdzW2NvbXBvbmVudFR5cGVdXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGluamVjdG9ycyBmb3IgZmVhdHVyZSBhbmQgaXRzIGRlcGVuZGVuY2llc1xuICAgKlxuICAgKiBBcyBpdCdzIGEgc3luY2hyb25vdXMgbWV0aG9kLCBpdCB3b3JrcyBvbmx5IGZvciBhbHJlYWR5IHJlc29sdmVkIGZlYXR1cmVzLFxuICAgKiByZXR1cm5pbmcgdW5kZWZpbmVkIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0SW5qZWN0b3JzKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEluamVjdG9yW10gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGZlYXR1cmUgPSB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuZ2V0KGNvbXBvbmVudFR5cGUpO1xuICAgIGxldCBpbmplY3RvcnM7XG5cbiAgICAvLyB3ZSBhcmUgcmV0dXJuaW5nIGluamVjdG9ycyBvbmx5IGZvciBhbHJlYWR5IHJlc29sdmVkIGZlYXR1cmVzXG4gICAgdGhpcy5mZWF0dXJlc1xuICAgICAgLmdldChmZWF0dXJlKVxuICAgICAgPy5zdWJzY3JpYmUoKGZlYXR1cmVJbnN0YW5jZSkgPT4ge1xuICAgICAgICBpbmplY3RvcnMgPSBbXG4gICAgICAgICAgLy8gZmVhdHVyZSBtb2R1bGUgaW5qZWN0b3JcbiAgICAgICAgICBmZWF0dXJlSW5zdGFuY2UubW9kdWxlUmVmLmluamVjdG9yLFxuICAgICAgICAgIC8vIGluamVjdG9ycyBmcm9tIGRlcGVuZGVuY3kgbW9kdWxlc1xuICAgICAgICAgIC4uLmZlYXR1cmVJbnN0YW5jZS5kZXBzTW9kdWxlcy5tYXAoXG4gICAgICAgICAgICAobW9kdWxlKSA9PiB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmdldChtb2R1bGUpLmluamVjdG9yXG4gICAgICAgICAgKSxcbiAgICAgICAgXTtcbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gaW5qZWN0b3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgZmVhdHVyZSBiYXNlZCBvbiBmZWF0dXJlIG5hbWUsIGlmIGZlYXR1cmUgd2FzIG5vdCB5ZXQgcmVzb2x2ZWRcbiAgICpcbiAgICogSXQgd2lsbCBmaXJzdCByZXNvbHZlIGFsbCBtb2R1bGUgZGVwZW5kZW5jaWVzIGlmIGRlZmluZWRcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmUoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5mZWF0dXJlcy5oYXMoZmVhdHVyZU5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVDb25maWcgPSB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnW2ZlYXR1cmVOYW1lXTtcblxuICAgICAgICBpZiAoIWZlYXR1cmVDb25maWc/Lm1vZHVsZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdObyBtb2R1bGUgZGVmaW5lZCBmb3IgRmVhdHVyZSBNb2R1bGUgJyArIGZlYXR1cmVOYW1lXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc29sdmUgZGVwZW5kZW5jaWVzIGZpcnN0IChpZiBhbnkpXG4gICAgICAgIGNvbnN0IGRlcHNSZXNvbHZlID0gZmVhdHVyZUNvbmZpZy5kZXBlbmRlbmNpZXM/Lmxlbmd0aFxuICAgICAgICAgID8gZm9ya0pvaW4oXG4gICAgICAgICAgICAgIGZlYXR1cmVDb25maWcuZGVwZW5kZW5jaWVzLm1hcCgoZGVwTW9kdWxlRnVuYykgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVEZXBlbmRlbmN5TW9kdWxlKGRlcE1vZHVsZUZ1bmMpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9mKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlcy5zZXQoXG4gICAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgICAgZGVwc1Jlc29sdmUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoZGVwcykgPT4gdGhpcy5yZXNvbHZlRmVhdHVyZU1vZHVsZShmZWF0dXJlQ29uZmlnLCBkZXBzKSksXG4gICAgICAgICAgICB0YXAoKGZlYXR1cmVJbnN0YW5jZSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgY3JlYXRlRnJvbShNb2R1bGVJbml0aWFsaXplZEV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlTmFtZSxcbiAgICAgICAgICAgICAgICAgIG1vZHVsZVJlZjogZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuZ2V0KGZlYXR1cmVOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGZlYXR1cmUgbW9kdWxlIGJ5IHJldHVybmluZyBmZWF0dXJlIGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlTW9kdWxlKFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVNb2R1bGVDb25maWcsXG4gICAgZGVwc01vZHVsZXM6IGFueVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxGZWF0dXJlSW5zdGFuY2U+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTW9kdWxlRmFjdG9yeShmZWF0dXJlQ29uZmlnPy5tb2R1bGUpLnBpcGUoXG4gICAgICBtYXAoKFttb2R1bGVGYWN0b3J5XSkgPT4ge1xuICAgICAgICBjb25zdCBtb2R1bGVSZWYgPSBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgICBjb25zdCBmZWF0dXJlSW5zdGFuY2U6IEZlYXR1cmVJbnN0YW5jZSA9IHtcbiAgICAgICAgICAuLi5mZWF0dXJlQ29uZmlnLFxuICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICBkZXBzTW9kdWxlcyxcbiAgICAgICAgICBjb21wb25lbnRzTWFwcGluZ3M6IHt9LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHJlc29sdmUgY29uZmlndXJhdGlvbiBmb3IgZmVhdHVyZSBtb2R1bGVcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWd1cmF0aW9uID0gdGhpcy5yZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgbW9kdWxlUmVmLmluamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCBjbXMgY29tcG9uZW50cyBjb25maWd1cmF0aW9uIGZyb20gZmVhdHVyZSBjb25maWdcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGZlYXR1cmVJbnN0YW5jZS5jbXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXSA9XG4gICAgICAgICAgICByZXNvbHZlZENvbmZpZ3VyYXRpb24uY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmVhdHVyZUluc3RhbmNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oZmVhdHVyZUluamVjdG9yOiBJbmplY3Rvcik6IENtc0NvbmZpZyB7XG4gICAgLy8gZ2V0IGNvbmZpZyBjaHVua3MgZnJvbSBmZWF0dXJlIGxpYlxuICAgIGNvbnN0IGZlYXR1cmVDb25maWdDaHVua3MgPSBmZWF0dXJlSW5qZWN0b3IuZ2V0PGFueVtdPihcbiAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcbiAgICAvLyBnZXQgZGVmYXVsdCBjb25maWcgY2h1bmtzIGZyb20gZmVhdHVyZSBsaWJcbiAgICBjb25zdCBmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rcyA9IGZlYXR1cmVJbmplY3Rvci5nZXQ8YW55W10+KFxuICAgICAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcblxuICAgIHJldHVybiBkZWVwTWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIC4uLihmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rcyA/PyBbXSksXG4gICAgICAuLi4oZmVhdHVyZUNvbmZpZ0NodW5rcyA/PyBbXSlcbiAgICApIGFzIENtc0NvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBkZXBlbmRlbmN5IG1vZHVsZSBhbmQgaW5pdGlhbGl6ZXMgc2luZ2xlIG1vZHVsZSBpbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRGVwZW5kZW5jeU1vZHVsZShcbiAgICBtb2R1bGVGdW5jOiAoKSA9PiBQcm9taXNlPGFueT5cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBXZSBncmFiIG1vZHVsZUZhY3Rvcnkgc3ltYm9sIGZyb20gbW9kdWxlIGZ1bmN0aW9uIGFuZCBpZiB0aGVyZSBpcyBub1xuICAgIC8vIHN1Y2ggYSBtb2R1bGUgY3JlYXRlZCB5ZXQsIHdlIGNyZWF0ZSBpdCBhbmQgc3RvcmUgaXQgaW4gYVxuICAgIC8vIGRlcGVuZGVuY3lNb2R1bGVzIG1hcFxuICAgIHJldHVybiB0aGlzLnJlc29sdmVNb2R1bGVGYWN0b3J5KG1vZHVsZUZ1bmMpLnBpcGUoXG4gICAgICB0YXAoKFttb2R1bGVGYWN0b3J5LCBtb2R1bGVdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5oYXMobW9kdWxlKSkge1xuICAgICAgICAgIGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuc2V0KG1vZHVsZSwgbW9kdWxlUmVmKTtcblxuICAgICAgICAgIHRoaXMuZXZlbnRzLmRpc3BhdGNoKFxuICAgICAgICAgICAgY3JlYXRlRnJvbShNb2R1bGVJbml0aWFsaXplZEV2ZW50LCB7XG4gICAgICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBwbHVjaygxKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBhbnkgQW5ndWxhciBtb2R1bGUgZnJvbSBhbiBmdW5jdGlvbiB0aGF0IHJldHVybiBtb2R1bGUgb3IgbW9kdWxlRmFjdG9yeVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlTW9kdWxlRmFjdG9yeShcbiAgICBtb2R1bGVGdW5jOiAoKSA9PiBQcm9taXNlPGFueT5cbiAgKTogT2JzZXJ2YWJsZTxbTmdNb2R1bGVGYWN0b3J5PGFueT4sIGFueV0+IHtcbiAgICByZXR1cm4gZnJvbShtb2R1bGVGdW5jKCkpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG1vZHVsZSkgPT5cbiAgICAgICAgbW9kdWxlIGluc3RhbmNlb2YgTmdNb2R1bGVGYWN0b3J5XG4gICAgICAgICAgPyAob2YoW21vZHVsZSwgbW9kdWxlXSkgYXMgT2JzZXJ2YWJsZTxbTmdNb2R1bGVGYWN0b3J5PGFueT4sIGFueV0+KVxuICAgICAgICAgIDogY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgIC8vIHVzaW5nIGNvbXBpbGVyIGhlcmUgaXMgZm9yIGppdCBjb21wYXRpYmlsaXR5LCB0aGVyZSBpcyBubyBvdmVyaGVhZFxuICAgICAgICAgICAgICAvLyBmb3IgYW90IHByb2R1Y3Rpb24gYnVpbGRzIGFzIGl0IHdpbGwgYmUgc3R1YmJlZFxuICAgICAgICAgICAgICBmcm9tKHRoaXMuY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKG1vZHVsZSBhcyBhbnkpKSxcbiAgICAgICAgICAgICAgb2YobW9kdWxlKSxcbiAgICAgICAgICAgIF0pXG4gICAgICApLFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBhbGwgaW5pdGlhbGl6ZWQgZmVhdHVyZXNcbiAgICBtZXJnZSguLi5BcnJheS5mcm9tKHRoaXMuZmVhdHVyZXMudmFsdWVzKCkpKS5zdWJzY3JpYmUoKGZlYXR1cmVJbnN0YW5jZSkgPT5cbiAgICAgIGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWY/LmRlc3Ryb3koKVxuICAgICk7XG5cbiAgICAvLyBjbGVhbiB1cCBhbGwgaW5pdGlhbGl6ZWQgZGVwZW5kZW5jeSBtb2R1bGVzXG4gICAgdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5mb3JFYWNoKChkZXBlbmRlbmN5KSA9PiBkZXBlbmRlbmN5LmRlc3Ryb3koKSk7XG4gIH1cbn1cbiJdfQ==