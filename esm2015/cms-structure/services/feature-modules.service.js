import { __awaiter } from "tslib";
import { Injectable, InjectFlags, } from '@angular/core';
import { ConfigChunk, ConfigInitializerService, deepMerge, DefaultConfigChunk, LazyModulesService, } from '@spartacus/core';
import { defer, forkJoin, merge, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Service responsible for resolving cms config based feature modules.
 */
export class FeatureModulesService {
    constructor(configInitializer, lazyModules) {
        this.configInitializer = configInitializer;
        this.lazyModules = lazyModules;
        // maps componentType to feature
        this.componentFeatureMap = new Map();
        /*
         * Contains either FeatureInstance or FeatureInstance resolver for not yet
         * resolved feature modules
         */
        this.features = new Map();
        this.initFeatureMap();
    }
    initFeatureMap() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configInitializer.getStableConfig('featureModules');
            this.featureModulesConfig = (_a = config.featureModules) !== null && _a !== void 0 ? _a : {};
            for (const [featureName, featureConfig] of Object.entries(this.featureModulesConfig)) {
                if ((featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module) && ((_b = featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.cmsComponents) === null || _b === void 0 ? void 0 : _b.length)) {
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
     * Resolves feature module for provided component type
     *
     * @param componentType
     */
    getModule(componentType) {
        var _a;
        const feature = this.componentFeatureMap.get(componentType);
        let module;
        // we are returning injectors only for already resolved features
        (_a = this.features
            .get(feature)) === null || _a === void 0 ? void 0 : _a.subscribe((featureInstance) => {
            module = featureInstance.moduleRef;
        }).unsubscribe();
        return module;
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
                const depsResolve = ((_a = featureConfig.dependencies) === null || _a === void 0 ? void 0 : _a.length) ? forkJoin(featureConfig.dependencies.map((depModuleFunc) => this.lazyModules.resolveDependencyModuleInstance(depModuleFunc)))
                    : of(undefined);
                this.features.set(featureName, depsResolve.pipe(switchMap((deps) => this.resolveFeatureModule(featureConfig, deps, featureName)), shareReplay()));
            }
            return this.features.get(featureName);
        });
    }
    /**
     * Initialize feature module by returning feature instance
     */
    resolveFeatureModule(featureConfig, dependencyModuleRefs = [], feature) {
        return this.lazyModules
            .resolveModuleInstance(featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module, feature, dependencyModuleRefs)
            .pipe(map((moduleRef) => {
            const featureInstance = Object.assign(Object.assign({}, featureConfig), { moduleRef,
                dependencyModuleRefs, componentsMappings: {} });
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
    ngOnDestroy() {
        // clean up all initialized features
        merge(...Array.from(this.features.values())).subscribe((featureInstance) => { var _a; return (_a = featureInstance.moduleRef) === null || _a === void 0 ? void 0 : _a.destroy(); });
    }
}
FeatureModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureModulesService_Factory() { return new FeatureModulesService(i0.ɵɵinject(i1.ConfigInitializerService), i0.ɵɵinject(i1.LazyModulesService)); }, token: FeatureModulesService, providedIn: "root" });
FeatureModulesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FeatureModulesService.ctorParameters = () => [
    { type: ConfigInitializerService },
    { type: LazyModulesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsR0FJWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBSUwsV0FBVyxFQUNYLHdCQUF3QixFQUN4QixTQUFTLEVBQ1Qsa0JBQWtCLEVBRWxCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVE3RDs7R0FFRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFlaEMsWUFDWSxpQkFBMkMsRUFDM0MsV0FBK0I7UUFEL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFYM0MsZ0NBQWdDO1FBQ3hCLHdCQUFtQixHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTdEOzs7V0FHRztRQUNLLGFBQVEsR0FBNkMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQU1yRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVhLGNBQWM7OztZQUMxQixNQUFNLE1BQU0sR0FBYyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ3BFLGdCQUFnQixDQUNqQixDQUFDO1lBRUYsSUFBSSxDQUFDLG9CQUFvQixTQUFHLE1BQU0sQ0FBQyxjQUFjLG1DQUFJLEVBQUUsQ0FBQztZQUV4RCxLQUFLLE1B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RyxDQUFDLDBCQUEwQixhQUExQiwwQkFBMEIsY0FBMUIsMEJBQTBCLEdBQUksRUFBRSxDQUFDLEVBQ3JDLEdBQUcsQ0FBQyxtQkFBbUIsYUFBbkIsbUJBQW1CLGNBQW5CLG1CQUFtQixHQUFJLEVBQUUsQ0FBQyxDQUNsQixDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1Qsb0NBQW9DO1FBQ3BDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsd0JBQ3pFLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLE9BQU8sS0FBRSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7OztZQTlMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCQyx3QkFBd0I7WUFJeEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdG9yLFxuICBOZ01vZHVsZVJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENNU0NvbXBvbmVudENvbmZpZyxcbiAgQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdDaHVuayxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBkZWVwTWVyZ2UsXG4gIERlZmF1bHRDb25maWdDaHVuayxcbiAgRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgTGF6eU1vZHVsZXNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIGZvcmtKb2luLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIEZlYXR1cmVJbnN0YW5jZSBleHRlbmRzIEZlYXR1cmVNb2R1bGVDb25maWcge1xuICBtb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjxhbnk+O1xuICBkZXBlbmRlbmN5TW9kdWxlUmVmcz86IE5nTW9kdWxlUmVmPGFueT5bXTtcbiAgY29tcG9uZW50c01hcHBpbmdzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgcmVzcG9uc2libGUgZm9yIHJlc29sdmluZyBjbXMgY29uZmlnIGJhc2VkIGZlYXR1cmUgbW9kdWxlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNb2R1bGVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8vIGZlYXR1cmUgbW9kdWxlcyBjb25maWd1cmF0aW9uXG4gIHByaXZhdGUgZmVhdHVyZU1vZHVsZXNDb25maWc/OiB7XG4gICAgW2ZlYXR1cmVOYW1lOiBzdHJpbmddOiBGZWF0dXJlTW9kdWxlQ29uZmlnO1xuICB9O1xuXG4gIC8vIG1hcHMgY29tcG9uZW50VHlwZSB0byBmZWF0dXJlXG4gIHByaXZhdGUgY29tcG9uZW50RmVhdHVyZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICAvKlxuICAgKiBDb250YWlucyBlaXRoZXIgRmVhdHVyZUluc3RhbmNlIG9yIEZlYXR1cmVJbnN0YW5jZSByZXNvbHZlciBmb3Igbm90IHlldFxuICAgKiByZXNvbHZlZCBmZWF0dXJlIG1vZHVsZXNcbiAgICovXG4gIHByaXZhdGUgZmVhdHVyZXM6IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhenlNb2R1bGVzOiBMYXp5TW9kdWxlc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0RmVhdHVyZU1hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RmVhdHVyZU1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWc6IENtc0NvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnSW5pdGlhbGl6ZXIuZ2V0U3RhYmxlQ29uZmlnKFxuICAgICAgJ2ZlYXR1cmVNb2R1bGVzJ1xuICAgICk7XG5cbiAgICB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnID0gY29uZmlnLmZlYXR1cmVNb2R1bGVzID8/IHt9O1xuXG4gICAgZm9yIChjb25zdCBbZmVhdHVyZU5hbWUsIGZlYXR1cmVDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1xuICAgICkpIHtcbiAgICAgIGlmIChmZWF0dXJlQ29uZmlnPy5tb2R1bGUgJiYgZmVhdHVyZUNvbmZpZz8uY21zQ29tcG9uZW50cz8ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGZlYXR1cmVDb25maWcuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5zZXQoY29tcG9uZW50LCBmZWF0dXJlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgZmVhdHVyZSBtb2R1bGUgY29uZmlndXJhdGlvbiB0aGF0IGNvdmVycyBzcGVjaWZpZWRcbiAgICogY29tcG9uZW50IHR5cGVcbiAgICovXG4gIGhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5oYXMoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZ1bGwgQ21zQ29tcG9uZW50IG1hcHBpbmcgZGVmaW5lZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+IHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmdldChjb21wb25lbnRUeXBlKTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVGZWF0dXJlKGZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChmZWF0dXJlSW5zdGFuY2UpID0+IGZlYXR1cmVJbnN0YW5jZS5jb21wb25lbnRzTWFwcGluZ3NbY29tcG9uZW50VHlwZV1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGZlYXR1cmUgbW9kdWxlIGZvciBwcm92aWRlZCBjb21wb25lbnQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZVxuICAgKi9cbiAgZ2V0TW9kdWxlKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE5nTW9kdWxlUmVmPGFueT4gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGZlYXR1cmUgPSB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuZ2V0KGNvbXBvbmVudFR5cGUpO1xuICAgIGxldCBtb2R1bGU7XG5cbiAgICAvLyB3ZSBhcmUgcmV0dXJuaW5nIGluamVjdG9ycyBvbmx5IGZvciBhbHJlYWR5IHJlc29sdmVkIGZlYXR1cmVzXG4gICAgdGhpcy5mZWF0dXJlc1xuICAgICAgLmdldChmZWF0dXJlKVxuICAgICAgPy5zdWJzY3JpYmUoKGZlYXR1cmVJbnN0YW5jZSkgPT4ge1xuICAgICAgICBtb2R1bGUgPSBmZWF0dXJlSW5zdGFuY2UubW9kdWxlUmVmO1xuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiBtb2R1bGU7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBmZWF0dXJlIGJhc2VkIG9uIGZlYXR1cmUgbmFtZSwgaWYgZmVhdHVyZSB3YXMgbm90IHlldCByZXNvbHZlZFxuICAgKlxuICAgKiBJdCB3aWxsIGZpcnN0IHJlc29sdmUgYWxsIG1vZHVsZSBkZXBlbmRlbmNpZXMgaWYgZGVmaW5lZFxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZShmZWF0dXJlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxGZWF0dXJlSW5zdGFuY2U+IHtcbiAgICByZXR1cm4gZGVmZXIoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmZlYXR1cmVzLmhhcyhmZWF0dXJlTmFtZSkpIHtcbiAgICAgICAgY29uc3QgZmVhdHVyZUNvbmZpZyA9IHRoaXMuZmVhdHVyZU1vZHVsZXNDb25maWdbZmVhdHVyZU5hbWVdO1xuXG4gICAgICAgIGlmICghZmVhdHVyZUNvbmZpZz8ubW9kdWxlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIG1vZHVsZSBkZWZpbmVkIGZvciBGZWF0dXJlIE1vZHVsZSAnICsgZmVhdHVyZU5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMgZmlyc3QgKGlmIGFueSlcbiAgICAgICAgY29uc3QgZGVwc1Jlc29sdmUgPSBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcz8ubGVuZ3RoXG4gICAgICAgICAgPyBmb3JrSm9pbihcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbmZpZy5kZXBlbmRlbmNpZXMubWFwKChkZXBNb2R1bGVGdW5jKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMubGF6eU1vZHVsZXMucmVzb2x2ZURlcGVuZGVuY3lNb2R1bGVJbnN0YW5jZShkZXBNb2R1bGVGdW5jKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBvZih1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZXMuc2V0KFxuICAgICAgICAgIGZlYXR1cmVOYW1lLFxuICAgICAgICAgIGRlcHNSZXNvbHZlLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKGRlcHMpID0+XG4gICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUZlYXR1cmVNb2R1bGUoZmVhdHVyZUNvbmZpZywgZGVwcywgZmVhdHVyZU5hbWUpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuZ2V0KGZlYXR1cmVOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGZlYXR1cmUgbW9kdWxlIGJ5IHJldHVybmluZyBmZWF0dXJlIGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlTW9kdWxlKFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVNb2R1bGVDb25maWcsXG4gICAgZGVwZW5kZW5jeU1vZHVsZVJlZnM6IE5nTW9kdWxlUmVmPGFueT5bXSA9IFtdLFxuICAgIGZlYXR1cmU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiB0aGlzLmxhenlNb2R1bGVzXG4gICAgICAucmVzb2x2ZU1vZHVsZUluc3RhbmNlKFxuICAgICAgICBmZWF0dXJlQ29uZmlnPy5tb2R1bGUsXG4gICAgICAgIGZlYXR1cmUsXG4gICAgICAgIGRlcGVuZGVuY3lNb2R1bGVSZWZzXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChtb2R1bGVSZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBmZWF0dXJlSW5zdGFuY2U6IEZlYXR1cmVJbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIC4uLmZlYXR1cmVDb25maWcsXG4gICAgICAgICAgICBtb2R1bGVSZWYsXG4gICAgICAgICAgICBkZXBlbmRlbmN5TW9kdWxlUmVmcyxcbiAgICAgICAgICAgIGNvbXBvbmVudHNNYXBwaW5nczoge30sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIHJlc29sdmUgY29uZmlndXJhdGlvbiBmb3IgZmVhdHVyZSBtb2R1bGVcbiAgICAgICAgICBjb25zdCByZXNvbHZlZENvbmZpZ3VyYXRpb24gPSB0aGlzLnJlc29sdmVGZWF0dXJlQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIG1vZHVsZVJlZi5pbmplY3RvclxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBleHRyYWN0IGNtcyBjb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gZnJvbSBmZWF0dXJlIGNvbmZpZ1xuICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBmZWF0dXJlSW5zdGFuY2UuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXSA9XG4gICAgICAgICAgICAgIHJlc29sdmVkQ29uZmlndXJhdGlvbi5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmVhdHVyZUluc3RhbmNlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgaW4gZmVhdHVyZSBtb2R1bGVcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVDb25maWd1cmF0aW9uKGZlYXR1cmVJbmplY3RvcjogSW5qZWN0b3IpOiBDbXNDb25maWcge1xuICAgIC8vIGdldCBjb25maWcgY2h1bmtzIGZyb20gZmVhdHVyZSBsaWJcbiAgICBjb25zdCBmZWF0dXJlQ29uZmlnQ2h1bmtzID0gZmVhdHVyZUluamVjdG9yLmdldDxhbnlbXT4oXG4gICAgICBDb25maWdDaHVuayxcbiAgICAgIFtdLFxuICAgICAgSW5qZWN0RmxhZ3MuU2VsZlxuICAgICk7XG4gICAgLy8gZ2V0IGRlZmF1bHQgY29uZmlnIGNodW5rcyBmcm9tIGZlYXR1cmUgbGliXG4gICAgY29uc3QgZmVhdHVyZURlZmF1bHRDb25maWdDaHVua3MgPSBmZWF0dXJlSW5qZWN0b3IuZ2V0PGFueVtdPihcbiAgICAgIERlZmF1bHRDb25maWdDaHVuayxcbiAgICAgIFtdLFxuICAgICAgSW5qZWN0RmxhZ3MuU2VsZlxuICAgICk7XG5cbiAgICByZXR1cm4gZGVlcE1lcmdlKFxuICAgICAge30sXG4gICAgICAuLi4oZmVhdHVyZURlZmF1bHRDb25maWdDaHVua3MgPz8gW10pLFxuICAgICAgLi4uKGZlYXR1cmVDb25maWdDaHVua3MgPz8gW10pXG4gICAgKSBhcyBDbXNDb25maWc7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBhbGwgaW5pdGlhbGl6ZWQgZmVhdHVyZXNcbiAgICBtZXJnZSguLi5BcnJheS5mcm9tKHRoaXMuZmVhdHVyZXMudmFsdWVzKCkpKS5zdWJzY3JpYmUoKGZlYXR1cmVJbnN0YW5jZSkgPT5cbiAgICAgIGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWY/LmRlc3Ryb3koKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==