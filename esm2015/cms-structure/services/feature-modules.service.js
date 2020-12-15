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
        this.configInitializer.getStable('featureModules').subscribe((config) => {
            var _a, _b;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsV0FBVyxHQUlaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFJTCxXQUFXLEVBQ1gsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxrQkFBa0IsRUFFbEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUTdEOztHQUVHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWVoQyxZQUNZLGlCQUEyQyxFQUMzQyxXQUErQjtRQUQvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVgzQyxnQ0FBZ0M7UUFDeEIsd0JBQW1CLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFN0Q7OztXQUdHO1FBQ0ssYUFBUSxHQUE2QyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBTXJFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O1lBQ3RFLElBQUksQ0FBQyxvQkFBb0IsU0FBRyxNQUFNLENBQUMsY0FBYyxtQ0FBSSxFQUFFLENBQUM7WUFFeEQsS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQ3ZELElBQUksQ0FBQyxvQkFBb0IsQ0FDMUIsRUFBRTtnQkFDRCxJQUFJLENBQUEsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLE1BQU0sWUFBSSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsYUFBYSwwQ0FBRSxNQUFNLENBQUEsRUFBRTtvQkFDakUsS0FBSyxNQUFNLFNBQVMsSUFBSSxhQUFhLENBQUMsYUFBYSxFQUFFO3dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDdEQ7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxhQUFxQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLGFBQXFCO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdEMsR0FBRyxDQUNELENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQ3ZFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLGFBQXFCOztRQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxDQUFDO1FBRVgsZ0VBQWdFO1FBQ2hFLE1BQUEsSUFBSSxDQUFDLFFBQVE7YUFDVixHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUNYLFNBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzlCLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQ3JDLENBQUMsRUFDQSxXQUFXLEdBQUc7UUFDakIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxjQUFjLENBQUMsV0FBbUI7UUFDeEMsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFOztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFN0QsSUFBSSxFQUFDLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxNQUFNLENBQUEsRUFBRTtvQkFDMUIsTUFBTSxJQUFJLEtBQUssQ0FDYix1Q0FBdUMsR0FBRyxXQUFXLENBQ3RELENBQUM7aUJBQ0g7Z0JBRUQsc0NBQXNDO2dCQUN0QyxNQUFNLFdBQVcsR0FBRyxPQUFBLGFBQWEsQ0FBQyxZQUFZLDBDQUFFLE1BQU0sRUFDcEQsQ0FBQyxDQUFDLFFBQVEsQ0FDTixhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsYUFBYSxDQUFDLENBQ2hFLENBQ0Y7b0JBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2YsV0FBVyxFQUNYLFdBQVcsQ0FBQyxJQUFJLENBQ2QsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQzVELEVBQ0QsV0FBVyxFQUFFLENBQ2QsQ0FDRixDQUFDO2FBQ0g7WUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0JBQW9CLENBQzFCLGFBQWtDLEVBQ2xDLHVCQUEyQyxFQUFFLEVBQzdDLE9BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxXQUFXO2FBQ3BCLHFCQUFxQixDQUNwQixhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxFQUNyQixPQUFPLEVBQ1Asb0JBQW9CLENBQ3JCO2FBQ0EsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sZUFBZSxtQ0FDaEIsYUFBYSxLQUNoQixTQUFTO2dCQUNULG9CQUFvQixFQUNwQixrQkFBa0IsRUFBRSxFQUFFLEdBQ3ZCLENBQUM7WUFFRiwyQ0FBMkM7WUFDM0MsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQzVELFNBQVMsQ0FBQyxRQUFRLENBQ25CLENBQUM7WUFFRiwyREFBMkQ7WUFDM0QsS0FBSyxNQUFNLGFBQWEsSUFBSSxlQUFlLENBQUMsYUFBYSxFQUFFO2dCQUN6RCxlQUFlLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO29CQUMvQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEQ7WUFDRCxPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkJBQTJCLENBQUMsZUFBeUI7UUFDM0QscUNBQXFDO1FBQ3JDLE1BQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FDN0MsV0FBVyxFQUNYLEVBQUUsRUFDRixXQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsNkNBQTZDO1FBQzdDLE1BQU0sMEJBQTBCLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FDcEQsa0JBQWtCLEVBQ2xCLEVBQUUsRUFDRixXQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBRUYsT0FBTyxTQUFTLENBQ2QsRUFBRSxFQUNGLEdBQUcsQ0FBQywwQkFBMEIsYUFBMUIsMEJBQTBCLGNBQTFCLDBCQUEwQixHQUFJLEVBQUUsQ0FBQyxFQUNyQyxHQUFHLENBQUMsbUJBQW1CLGFBQW5CLG1CQUFtQixjQUFuQixtQkFBbUIsR0FBSSxFQUFFLENBQUMsQ0FDbEIsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULG9DQUFvQztRQUNwQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLHdCQUN6RSxlQUFlLENBQUMsU0FBUywwQ0FBRSxPQUFPLEtBQUUsQ0FDckMsQ0FBQztJQUNKLENBQUM7Ozs7WUE1TEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFwQkMsd0JBQXdCO1lBSXhCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdEZsYWdzLFxuICBJbmplY3RvcixcbiAgTmdNb2R1bGVSZWYsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDTVNDb21wb25lbnRDb25maWcsXG4gIENtc0NvbXBvbmVudE1hcHBpbmcsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnQ2h1bmssXG4gIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgZGVlcE1lcmdlLFxuICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gIEZlYXR1cmVNb2R1bGVDb25maWcsXG4gIExhenlNb2R1bGVzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBGZWF0dXJlSW5zdGFuY2UgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlQ29uZmlnIHtcbiAgbW9kdWxlUmVmPzogTmdNb2R1bGVSZWY8YW55PjtcbiAgZGVwZW5kZW5jeU1vZHVsZVJlZnM/OiBOZ01vZHVsZVJlZjxhbnk+W107XG4gIGNvbXBvbmVudHNNYXBwaW5ncz86IENNU0NvbXBvbmVudENvbmZpZztcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciByZXNvbHZpbmcgY21zIGNvbmZpZyBiYXNlZCBmZWF0dXJlIG1vZHVsZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTW9kdWxlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyBmZWF0dXJlIG1vZHVsZXMgY29uZmlndXJhdGlvblxuICBwcml2YXRlIGZlYXR1cmVNb2R1bGVzQ29uZmlnPzoge1xuICAgIFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmVhdHVyZU1vZHVsZUNvbmZpZztcbiAgfTtcblxuICAvLyBtYXBzIGNvbXBvbmVudFR5cGUgdG8gZmVhdHVyZVxuICBwcml2YXRlIGNvbXBvbmVudEZlYXR1cmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgLypcbiAgICogQ29udGFpbnMgZWl0aGVyIEZlYXR1cmVJbnN0YW5jZSBvciBGZWF0dXJlSW5zdGFuY2UgcmVzb2x2ZXIgZm9yIG5vdCB5ZXRcbiAgICogcmVzb2x2ZWQgZmVhdHVyZSBtb2R1bGVzXG4gICAqL1xuICBwcml2YXRlIGZlYXR1cmVzOiBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYXp5TW9kdWxlczogTGF6eU1vZHVsZXNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaW5pdEZlYXR1cmVNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZlYXR1cmVNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdJbml0aWFsaXplci5nZXRTdGFibGUoJ2ZlYXR1cmVNb2R1bGVzJykuc3Vic2NyaWJlKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMuZmVhdHVyZU1vZHVsZXNDb25maWcgPSBjb25maWcuZmVhdHVyZU1vZHVsZXMgPz8ge307XG5cbiAgICAgIGZvciAoY29uc3QgW2ZlYXR1cmVOYW1lLCBmZWF0dXJlQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1xuICAgICAgKSkge1xuICAgICAgICBpZiAoZmVhdHVyZUNvbmZpZz8ubW9kdWxlICYmIGZlYXR1cmVDb25maWc/LmNtc0NvbXBvbmVudHM/Lmxlbmd0aCkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGZlYXR1cmVDb25maWcuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLnNldChjb21wb25lbnQsIGZlYXR1cmVOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBpcyBmZWF0dXJlIG1vZHVsZSBjb25maWd1cmF0aW9uIHRoYXQgY292ZXJzIHNwZWNpZmllZFxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKi9cbiAgaGFzRmVhdHVyZUZvcihjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmhhcyhjb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZnVsbCBDbXNDb21wb25lbnQgbWFwcGluZyBkZWZpbmVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAqL1xuICBnZXRDbXNNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50TWFwcGluZz4ge1xuICAgIGNvbnN0IGZlYXR1cmUgPSB0aGlzLmNvbXBvbmVudEZlYXR1cmVNYXAuZ2V0KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUZlYXR1cmUoZmVhdHVyZSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKGZlYXR1cmVJbnN0YW5jZSkgPT4gZmVhdHVyZUluc3RhbmNlLmNvbXBvbmVudHNNYXBwaW5nc1tjb21wb25lbnRUeXBlXVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgZmVhdHVyZSBtb2R1bGUgZm9yIHByb3ZpZGVkIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRUeXBlXG4gICAqL1xuICBnZXRNb2R1bGUoY29tcG9uZW50VHlwZTogc3RyaW5nKTogTmdNb2R1bGVSZWY8YW55PiB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5nZXQoY29tcG9uZW50VHlwZSk7XG4gICAgbGV0IG1vZHVsZTtcblxuICAgIC8vIHdlIGFyZSByZXR1cm5pbmcgaW5qZWN0b3JzIG9ubHkgZm9yIGFscmVhZHkgcmVzb2x2ZWQgZmVhdHVyZXNcbiAgICB0aGlzLmZlYXR1cmVzXG4gICAgICAuZ2V0KGZlYXR1cmUpXG4gICAgICA/LnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIG1vZHVsZSA9IGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWY7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIG1vZHVsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGZlYXR1cmUgYmFzZWQgb24gZmVhdHVyZSBuYW1lLCBpZiBmZWF0dXJlIHdhcyBub3QgeWV0IHJlc29sdmVkXG4gICAqXG4gICAqIEl0IHdpbGwgZmlyc3QgcmVzb2x2ZSBhbGwgbW9kdWxlIGRlcGVuZGVuY2llcyBpZiBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlKGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZmVhdHVyZXMuaGFzKGZlYXR1cmVOYW1lKSkge1xuICAgICAgICBjb25zdCBmZWF0dXJlQ29uZmlnID0gdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1tmZWF0dXJlTmFtZV07XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlQ29uZmlnPy5tb2R1bGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gbW9kdWxlIGRlZmluZWQgZm9yIEZlYXR1cmUgTW9kdWxlICcgKyBmZWF0dXJlTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNvbHZlIGRlcGVuZGVuY2llcyBmaXJzdCAoaWYgYW55KVxuICAgICAgICBjb25zdCBkZXBzUmVzb2x2ZSA9IGZlYXR1cmVDb25maWcuZGVwZW5kZW5jaWVzPy5sZW5ndGhcbiAgICAgICAgICA/IGZvcmtKb2luKFxuICAgICAgICAgICAgICBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcy5tYXAoKGRlcE1vZHVsZUZ1bmMpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5sYXp5TW9kdWxlcy5yZXNvbHZlRGVwZW5kZW5jeU1vZHVsZUluc3RhbmNlKGRlcE1vZHVsZUZ1bmMpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9mKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlcy5zZXQoXG4gICAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgICAgZGVwc1Jlc29sdmUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoZGVwcykgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRmVhdHVyZU1vZHVsZShmZWF0dXJlQ29uZmlnLCBkZXBzLCBmZWF0dXJlTmFtZSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5nZXQoZmVhdHVyZU5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZmVhdHVyZSBtb2R1bGUgYnkgcmV0dXJuaW5nIGZlYXR1cmUgaW5zdGFuY2VcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVNb2R1bGUoXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgICBkZXBlbmRlbmN5TW9kdWxlUmVmczogTmdNb2R1bGVSZWY8YW55PltdID0gW10sXG4gICAgZmVhdHVyZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eU1vZHVsZXNcbiAgICAgIC5yZXNvbHZlTW9kdWxlSW5zdGFuY2UoXG4gICAgICAgIGZlYXR1cmVDb25maWc/Lm1vZHVsZSxcbiAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgZGVwZW5kZW5jeU1vZHVsZVJlZnNcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG1vZHVsZVJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGZlYXR1cmVJbnN0YW5jZTogRmVhdHVyZUluc3RhbmNlID0ge1xuICAgICAgICAgICAgLi4uZmVhdHVyZUNvbmZpZyxcbiAgICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICAgIGRlcGVuZGVuY3lNb2R1bGVSZWZzLFxuICAgICAgICAgICAgY29tcG9uZW50c01hcHBpbmdzOiB7fSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gcmVzb2x2ZSBjb25maWd1cmF0aW9uIGZvciBmZWF0dXJlIG1vZHVsZVxuICAgICAgICAgIGNvbnN0IHJlc29sdmVkQ29uZmlndXJhdGlvbiA9IHRoaXMucmVzb2x2ZUZlYXR1cmVDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgbW9kdWxlUmVmLmluamVjdG9yXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIGV4dHJhY3QgY21zIGNvbXBvbmVudHMgY29uZmlndXJhdGlvbiBmcm9tIGZlYXR1cmUgY29uZmlnXG4gICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGZlYXR1cmVJbnN0YW5jZS5jbXNDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBmZWF0dXJlSW5zdGFuY2UuY29tcG9uZW50c01hcHBpbmdzW2NvbXBvbmVudFR5cGVdID1cbiAgICAgICAgICAgICAgcmVzb2x2ZWRDb25maWd1cmF0aW9uLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmZWF0dXJlSW5zdGFuY2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY29uZmlndXJhdGlvbiBwcm92aWRlZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oZmVhdHVyZUluamVjdG9yOiBJbmplY3Rvcik6IENtc0NvbmZpZyB7XG4gICAgLy8gZ2V0IGNvbmZpZyBjaHVua3MgZnJvbSBmZWF0dXJlIGxpYlxuICAgIGNvbnN0IGZlYXR1cmVDb25maWdDaHVua3MgPSBmZWF0dXJlSW5qZWN0b3IuZ2V0PGFueVtdPihcbiAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcbiAgICAvLyBnZXQgZGVmYXVsdCBjb25maWcgY2h1bmtzIGZyb20gZmVhdHVyZSBsaWJcbiAgICBjb25zdCBmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rcyA9IGZlYXR1cmVJbmplY3Rvci5nZXQ8YW55W10+KFxuICAgICAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgICAgW10sXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcblxuICAgIHJldHVybiBkZWVwTWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIC4uLihmZWF0dXJlRGVmYXVsdENvbmZpZ0NodW5rcyA/PyBbXSksXG4gICAgICAuLi4oZmVhdHVyZUNvbmZpZ0NodW5rcyA/PyBbXSlcbiAgICApIGFzIENtc0NvbmZpZztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBmZWF0dXJlc1xuICAgIG1lcmdlKC4uLkFycmF5LmZyb20odGhpcy5mZWF0dXJlcy52YWx1ZXMoKSkpLnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PlxuICAgICAgZmVhdHVyZUluc3RhbmNlLm1vZHVsZVJlZj8uZGVzdHJveSgpXG4gICAgKTtcbiAgfVxufVxuIl19