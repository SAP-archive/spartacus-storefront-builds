import { __awaiter, __decorate } from "tslib";
import { Compiler, Injectable, InjectFlags, Injector, NgModuleFactory, NgModuleRef, OnDestroy, } from '@angular/core';
import { CMSComponentConfig, CmsComponentMapping, CmsConfig, ConfigChunk, ConfigInitializerService, configurationFactory, DefaultConfigChunk, FeatureModuleConfig, } from '@spartacus/core';
import { combineLatest, defer, forkJoin, from, merge, of, queueScheduler, } from 'rxjs';
import { map, observeOn, pluck, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Service responsible for resolving cms config based feature modules.
 */
let FeatureModulesService = class FeatureModulesService {
    constructor(configInitializer, compiler, injector) {
        this.configInitializer = configInitializer;
        this.compiler = compiler;
        this.injector = injector;
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
                this.features.set(featureName, depsResolve.pipe(switchMap((deps) => this.resolveFeatureModule(featureConfig, deps)), shareReplay()));
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
        return configurationFactory(featureConfigChunks, featureDefaultConfigChunks);
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
    { type: Injector }
];
FeatureModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureModulesService_Factory() { return new FeatureModulesService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.INJECTOR)); }, token: FeatureModulesService, providedIn: "root" });
FeatureModulesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FeatureModulesService);
export { FeatureModulesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGFBQWEsRUFDYixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBRUwsRUFBRSxFQUNGLGNBQWMsR0FDZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7QUFReEI7O0dBRUc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWlCaEMsWUFDWSxpQkFBMkMsRUFDM0MsUUFBa0IsRUFDbEIsUUFBa0I7UUFGbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFkOUIsZ0NBQWdDO1FBQ3hCLHdCQUFtQixHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTdEOzs7V0FHRztRQUNLLGFBQVEsR0FBNkMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUUvRCxzQkFBaUIsR0FBRyxJ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QyxJQUFJLENBQzVCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ25CLE1BQU0sWUFBWSxlQUFlO1lBQy9CLENBQUMsQ0FBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQTZDO1lBQ25FLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ1oscUVBQXFFO2dCQUNyRSxrREFBa0Q7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ1gsQ0FBQyxDQUNQLEVBQ0QsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxvQ0FBb0M7UUFDcEMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSx3QkFDekUsZUFBZSxDQUFDLFNBQVMsMENBQUUsT0FBTyxLQUFFLENBQ3JDLENBQUM7UUFFRiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUNGLENBQUE7O1lBek5nQyx3QkFBd0I7WUFDakMsUUFBUTtZQUNSLFFBQVE7OztBQXBCbkIscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0EyT2pDO1NBM09ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RGbGFncyxcbiAgSW5qZWN0b3IsXG4gIE5nTW9kdWxlRmFjdG9yeSxcbiAgTmdNb2R1bGVSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDTVNDb21wb25lbnRDb25maWcsXG4gIENtc0NvbXBvbmVudE1hcHBpbmcsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnQ2h1bmssXG4gIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgY29uZmlndXJhdGlvbkZhY3RvcnksXG4gIERlZmF1bHRDb25maWdDaHVuayxcbiAgRmVhdHVyZU1vZHVsZUNvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlZmVyLFxuICBmb3JrSm9pbixcbiAgZnJvbSxcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBxdWV1ZVNjaGVkdWxlcixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG9ic2VydmVPbixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgRmVhdHVyZUluc3RhbmNlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZUNvbmZpZyB7XG4gIG1vZHVsZVJlZj86IE5nTW9kdWxlUmVmPGFueT47XG4gIGRlcHNNb2R1bGVzPzogYW55W107XG4gIGNvbXBvbmVudHNNYXBwaW5ncz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciByZXNvbHZpbmcgY21zIGNvbmZpZyBiYXNlZCBmZWF0dXJlIG1vZHVsZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTW9kdWxlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyBmZWF0dXJlIG1vZHVsZXMgY29uZmlndXJhdGlvblxuICBwcml2YXRlIGZlYXR1cmVNb2R1bGVzQ29uZmlnPzoge1xuICAgIFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmVhdHVyZU1vZHVsZUNvbmZpZztcbiAgfTtcblxuICAvLyBtYXBzIGNvbXBvbmVudFR5cGUgdG8gZmVhdHVyZVxuICBwcml2YXRlIGNvbXBvbmVudEZlYXR1cmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgLypcbiAgICogQ29udGFpbnMgZWl0aGVyIEZlYXR1cmVJbnN0YW5jZSBvciBGZWF0dXJlSW5zdGFuY2UgcmVzb2x2ZXIgZm9yIG5vdCB5ZXRcbiAgICogcmVzb2x2ZWQgZmVhdHVyZSBtb2R1bGVzXG4gICAqL1xuICBwcml2YXRlIGZlYXR1cmVzOiBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgZGVwZW5kZW5jeU1vZHVsZXMgPSBuZXcgTWFwPGFueSwgTmdNb2R1bGVSZWY8YW55Pj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnSW5pdGlhbGl6ZXI6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgdGhpcy5pbml0RmVhdHVyZU1hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RmVhdHVyZU1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWc6IENtc0NvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnSW5pdGlhbGl6ZXIuZ2V0U3RhYmxlQ29uZmlnKFxuICAgICAgJ2ZlYXR1cmVNb2R1bGVzJ1xuICAgICk7XG5cbiAgICB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnID0gY29uZmlnLmZlYXR1cmVNb2R1bGVzID8/IHt9O1xuXG4gICAgZm9yIChjb25zdCBbZmVhdHVyZU5hbWUsIGZlYXR1cmVDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1xuICAgICkpIHtcbiAgICAgIGlmIChmZWF0dXJlQ29uZmlnPy5jbXNDb21wb25lbnRzPy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgZmVhdHVyZUNvbmZpZy5jbXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLnNldChjb21wb25lbnQsIGZlYXR1cmVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBpcyBmZWF0dXJlIG1vZHVsZSBjb25maWd1cmF0aW9uIHRoYXQgY292ZXJzIHNwZWNpZmllZFxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgaGFzRmVhdHVyZUZvcihjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmhhcyhjb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZnVsbCBDbXNDb21wb25lbnQgbWFwcGluZyBkZWZpbmVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAqL1xuICBnZXRDbXNNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50TWFwcGluZz4ge1xuICAgIGNvbnN0IGZlYXR1cmUgPSB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuZ2V0KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUZlYXR1cmUoZmVhdHVyZSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKGZlYXR1cmVJbnN0YW5jZSkgPT4gZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBpbmplY3RvcnMgZm9yIGZlYXR1cmUgYW5kIGl0cyBkZXBlbmRlbmNpZXNcbiAgICpcbiAgICogQXMgaXQncyBhIHN5bmNocm9ub3VzIG1ldGhvZCwgaXQgd29ya3Mgb25seSBmb3IgYWxyZWFkeSByZXNvbHZlZCBmZWF0dXJlcyxcbiAgICogcmV0dXJuaW5nIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAgICovXG4gIGdldEluamVjdG9ycyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbmplY3RvcltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmdldChjb21wb25lbnRUeXBlKTtcbiAgICBsZXQgaW5qZWN0b3JzO1xuXG4gICAgLy8gd2UgYXJlIHJldHVybmluZyBpbmplY3RvcnMgb25seSBmb3IgYWxyZWFkeSByZXNvbHZlZCBmZWF0dXJlc1xuICAgIHRoaXMuZmVhdHVyZXNcbiAgICAgIC5nZXQoZmVhdHVyZSlcbiAgICAgID8uc3Vic2NyaWJlKChmZWF0dXJlSW5zdGFuY2UpID0+IHtcbiAgICAgICAgaW5qZWN0b3JzID0gW1xuICAgICAgICAgIC8vIGZlYXR1cmUgbW9kdWxlIGluamVjdG9yXG4gICAgICAgICAgZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZi5pbmplY3RvcixcbiAgICAgICAgICAvLyBpbmplY3RvcnMgZnJvbSBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICAgICAgICAuLi5mZWF0dXJlSW5zdGFuY2UuZGVwc01vZHVsZXMubWFwKFxuICAgICAgICAgICAgKG1vZHVsZSkgPT4gdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5nZXQobW9kdWxlKS5pbmplY3RvclxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIGluamVjdG9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGZlYXR1cmUgYmFzZWQgb24gZmVhdHVyZSBuYW1lLCBpZiBmZWF0dXJlIHdhcyBub3QgeWV0IHJlc29sdmVkXG4gICAqXG4gICAqIEl0IHdpbGwgZmlyc3QgcmVzb2x2ZSBhbGwgbW9kdWxlIGRlcGVuZGVuY2llcyBpZiBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlKGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZmVhdHVyZXMuaGFzKGZlYXR1cmVOYW1lKSkge1xuICAgICAgICBjb25zdCBmZWF0dXJlQ29uZmlnID0gdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1tmZWF0dXJlTmFtZV07XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlQ29uZmlnPy5tb2R1bGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gbW9kdWxlIGRlZmluZWQgZm9yIEZlYXR1cmUgTW9kdWxlICcgKyBmZWF0dXJlTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNvbHZlIGRlcGVuZGVuY2llcyBmaXJzdCAoaWYgYW55KVxuICAgICAgICBjb25zdCBkZXBzUmVzb2x2ZSA9IGZlYXR1cmVDb25maWcuZGVwZW5kZW5jaWVzPy5sZW5ndGhcbiAgICAgICAgICA/IGZvcmtKb2luKFxuICAgICAgICAgICAgICBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcy5tYXAoKGRlcE1vZHVsZUZ1bmMpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRGVwZW5kZW5jeU1vZHVsZShkZXBNb2R1bGVGdW5jKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBvZih1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc2V0KFxuICAgICAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgICAgIGRlcHNSZXNvbHZlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKGRlcHMpID0+IHRoaXMucmVzb2x2ZUZlYXR1cmVNb2R1bGUoZmVhdHVyZUNvbmZpZywgZGVwcykpLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuZ2V0KGZlYXR1cmVOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGZlYXR1cmUgbW9kdWxlIGJ5IHJldHVybmluZyBmZWF0dXJlIGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlTW9kdWxlKFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVNb2R1bGVDb25maWcsXG4gICAgZGVwc01vZHVsZXM6IGFueVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxGZWF0dXJlSW5zdGFuY2U+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTW9kdWxlRmFjdG9yeShmZWF0dXJlQ29uZmlnPy5tb2R1bGUpLnBpcGUoXG4gICAgICBtYXAoKFttb2R1bGVGYWN0b3J5XSkgPT4ge1xuICAgICAgICBjb25zdCBtb2R1bGVSZWYgPSBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgICBjb25zdCBmZWF0dXJlSW5zdGFuY2U6IEZlYXR1cmVJbnN0YW5jZSA9IHtcbiAgICAgICAgICAuLi5mZWF0dXJlQ29uZmlnLFxuICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICBkZXBzTW9kdWxlcyxcbiAgICAgICAgICBjb21wb25lbnRzTWFwcGluZ3M6IHt9LFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHJlc29sdmUgY29uZmlndXJhdGlvbiBmb3IgZmVhdHVyZSBtb2R1bGVcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWd1cmF0aW9uID0gdGhpcy5yZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgbW9kdWxlUmVmLmluamVjdG9yXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCBjbXMgY29tcG9uZW50cyBjb25maWd1cmF0aW9uIGZyb20gZmVhdHVyZSBjb25maWdcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGZlYXR1cmVJbnN0YW5jZS5jbXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXSA9XG4gICAgICAgICAgICByZXNvbHZlZENvbmZpZ3VyYXRpb24uY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmVhdHVyZUluc3RhbmNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oZmVhdHVyZUluamVjdG9yOiBJbmplY3Rvcik6IENtc0NvbmZpZyB7XG4gICAgLy8gZ2V0IGNvbmZpZyBjaHVua3MgZnJvbSBmZWF0dXJlIGxpYlxuICAgIGNvbnN0IGZlYXR1cmVDb25maWdDaHVua3MgPSBmZWF0dXJlSW5qZWN0b3IuZ2V0PGFueVtdPihcbiAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcbiAgICAvLyBnZXQgZGVmYXVsdCBjb25maWcgY2h1bmtzIGZyb20gZmVhdHVyZSBsaWJcbiAgICBjb25zdCBmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rcyA9IGZlYXR1cmVJbmplY3Rvci5nZXQ8YW55W10+KFxuICAgICAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcblxuICAgIHJldHVybiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgICAgIGZlYXR1cmVDb25maWdDaHVua3MsXG4gICAgICBmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rc1xuICAgICkgYXMgQ21zQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGRlcGVuZGVuY3kgbW9kdWxlIGFuZCBpbml0aWFsaXplcyBzaW5nbGUgbW9kdWxlIGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVEZXBlbmRlbmN5TW9kdWxlKFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIFdlIGdyYWIgbW9kdWxlRmFjdG9yeSBzeW1ib2wgZnJvbSBtb2R1bGUgZnVuY3Rpb24gYW5kIGlmIHRoZXJlIGlzIG5vXG4gICAgLy8gc3VjaCBhIG1vZHVsZSBjcmVhdGVkIHlldCwgd2UgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBhXG4gICAgLy8gZGVwZW5kZW5jeU1vZHVsZXMgbWFwXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkobW9kdWxlRnVuYykucGlwZShcbiAgICAgIHRhcCgoW21vZHVsZUZhY3RvcnksIG1vZHVsZV0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmhhcyhtb2R1bGUpKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICAgICAgdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5zZXQobW9kdWxlLCBtb2R1bGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGFueSBBbmd1bGFyIG1vZHVsZSBmcm9tIGFuIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIG1vZHVsZSBvciBtb2R1bGVGYWN0b3J5XG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVNb2R1bGVGYWN0b3J5KFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4ge1xuICAgIHJldHVybiBmcm9tKG1vZHVsZUZ1bmMoKSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgobW9kdWxlKSA9PlxuICAgICAgICBtb2R1bGUgaW5zdGFuY2VvZiBOZ01vZHVsZUZhY3RvcnlcbiAgICAgICAgICA/IChvZihbbW9kdWxlLCBtb2R1bGVdKSBhcyBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4pXG4gICAgICAgICAgOiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgLy8gdXNpbmcgY29tcGlsZXIgaGVyZSBpcyBmb3Igaml0IGNvbXBhdGliaWxpdHksIHRoZXJlIGlzIG5vIG92ZXJoZWFkXG4gICAgICAgICAgICAgIC8vIGZvciBhb3QgcHJvZHVjdGlvbiBidWlsZHMgYXMgaXQgd2lsbCBiZSBzdHViYmVkXG4gICAgICAgICAgICAgIGZyb20odGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlIGFzIGFueSkpLFxuICAgICAgICAgICAgICBvZihtb2R1bGUpLFxuICAgICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBmZWF0dXJlc1xuICAgIG1lcmdlKC4uLkFycmF5LmZyb20odGhpcy5mZWF0dXJlcy52YWx1ZXMoKSkpLnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PlxuICAgICAgZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZj8uZGVzdHJveSgpXG4gICAgKTtcblxuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmZvckVhY2goKGRlcGVuZGVuY3kpID0+IGRlcGVuZGVuY3kuZGVzdHJveSgpKTtcbiAgfVxufVxuIl19