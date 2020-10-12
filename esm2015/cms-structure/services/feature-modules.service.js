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
                ...featureInstance.dependencyModuleRefs.map((moduleRef) => moduleRef.injector),
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
            .resolveModuleInstance(featureConfig === null || featureConfig === void 0 ? void 0 : featureConfig.module, feature)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3NlcnZpY2VzL2ZlYXR1cmUtbW9kdWxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFdBQVcsR0FJWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBSUwsV0FBVyxFQUNYLHdCQUF3QixFQUN4QixTQUFTLEVBQ1Qsa0JBQWtCLEVBRWxCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVE3RDs7R0FFRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFlaEMsWUFDWSxpQkFBMkMsRUFDM0MsV0FBK0I7UUFEL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFYM0MsZ0NBQWdDO1FBQ3hCLHdCQUFtQixHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTdEOzs7V0FHRztRQUNLLGFBQVEsR0FBNkMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQU1yRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVhLGNBQWM7OztZQUMxQixNQUFNLE1BQU0sR0FBYyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQ3BFLGdCQUFnQixDQUNqQixDQUFDO1lBRUYsSUFBSSxDQUFDLG9CQUFvQixTQUFHLE1BQU0sQ0FBQyxjQUFjLG1DQUFJLEVBQUUsQ0FBQztZQUV4RCxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FDdkQsSUFBSSxDQUFDLG9CQUFvQixDQUMxQixFQUFFO2dCQUNELElBQUksQ0FBQSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxZQUFJLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxhQUFhLDBDQUFFLE1BQU0sQ0FBQSxFQUFFO29CQUNqRSxLQUFLLE1BQU0sU0FBUyxJQUFJLGFBQWEsQ0FBQyxhQUFhLEVBQUU7d0JBQ25ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3FCQUN0RDtpQkFDRjthQUNGOztLQUNGO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLGFBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhLENBQUMsYUFBcUI7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN0QyxHQUFHLENBQ0QsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FDdkUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLGFBQXFCOztRQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksU0FBUyxDQUFDO1FBRWQsZ0VBQWdFO1FBQ2hFLE1BQUEsSUFBSSxDQUFDLFFBQVE7YUFDVixHQUFHLENBQUMsT0FBTyxDQUFDLDBDQUNYLFNBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzlCLFNBQVMsR0FBRztnQkFDViwwQkFBMEI7Z0JBQzFCLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDbEMsb0NBQW9DO2dCQUNwQyxHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQ3pDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNsQzthQUNGLENBQUM7UUFDSixDQUFDLEVBQ0EsV0FBVyxHQUFHO1FBQ2pCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssY0FBYyxDQUFDLFdBQW1CO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTs7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTdELElBQUksRUFBQyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxDQUFBLEVBQUU7b0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQ2IsdUNBQXVDLEdBQUcsV0FBVyxDQUN0RCxDQUFDO2lCQUNIO2dCQUVELHNDQUFzQztnQkFDdEMsTUFBTSxXQUFXLEdBQUcsT0FBQSxhQUFhLENBQUMsWUFBWSwwQ0FBRSxNQUFNLEVBQ3BELENBQUMsQ0FBQyxRQUFRLENBQ04sYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxDQUNoRSxDQUNGO29CQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNmLFdBQVcsRUFDWCxXQUFXLENBQUMsSUFBSSxDQUNkLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUM1RCxFQUNELFdBQVcsRUFBRSxDQUNkLENBQ0YsQ0FBQzthQUNIO1lBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLG9CQUFvQixDQUMxQixhQUFrQyxFQUNsQyx1QkFBMkMsRUFBRSxFQUM3QyxPQUFlO1FBRWYsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixxQkFBcUIsQ0FBQyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUNyRCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxlQUFlLG1DQUNoQixhQUFhLEtBQ2hCLFNBQVM7Z0JBQ1Qsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUFFLEVBQUUsR0FDdkIsQ0FBQztZQUVGLDJDQUEyQztZQUMzQyxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FDNUQsU0FBUyxDQUFDLFFBQVEsQ0FDbkIsQ0FBQztZQUVGLDJEQUEyRDtZQUMzRCxLQUFLLE1BQU0sYUFBYSxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pELGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7b0JBQy9DLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN0RDtZQUNELE9BQU8sZUFBZSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0lBRUQ7O09BRUc7SUFDSywyQkFBMkIsQ0FBQyxlQUF5QjtRQUMzRCxxQ0FBcUM7UUFDckMsTUFBTSxtQkFBbUIsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUM3QyxXQUFXLEVBQ1gsRUFBRSxFQUNGLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLENBQUM7UUFDRiw2Q0FBNkM7UUFDN0MsTUFBTSwwQkFBMEIsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUNwRCxrQkFBa0IsRUFDbEIsRUFBRSxFQUNGLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLENBQUM7UUFFRixPQUFPLFNBQVMsQ0FDZCxFQUFFLEVBQ0YsR0FBRyxDQUFDLDBCQUEwQixhQUExQiwwQkFBMEIsY0FBMUIsMEJBQTBCLEdBQUksRUFBRSxDQUFDLEVBQ3JDLEdBQUcsQ0FBQyxtQkFBbUIsYUFBbkIsbUJBQW1CLGNBQW5CLG1CQUFtQixHQUFJLEVBQUUsQ0FBQyxDQUNsQixDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1Qsb0NBQW9DO1FBQ3BDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsd0JBQ3pFLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLE9BQU8sS0FBRSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7OztZQWxNRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCQyx3QkFBd0I7WUFJeEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdG9yLFxuICBOZ01vZHVsZVJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENNU0NvbXBvbmVudENvbmZpZyxcbiAgQ21zQ29tcG9uZW50TWFwcGluZyxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdDaHVuayxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBkZWVwTWVyZ2UsXG4gIERlZmF1bHRDb25maWdDaHVuayxcbiAgRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgTGF6eU1vZHVsZXNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIGZvcmtKb2luLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIEZlYXR1cmVJbnN0YW5jZSBleHRlbmRzIEZlYXR1cmVNb2R1bGVDb25maWcge1xuICBtb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjxhbnk+O1xuICBkZXBlbmRlbmN5TW9kdWxlUmVmcz86IE5nTW9kdWxlUmVmPGFueT5bXTtcbiAgY29tcG9uZW50c01hcHBpbmdzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgcmVzcG9uc2libGUgZm9yIHJlc29sdmluZyBjbXMgY29uZmlnIGJhc2VkIGZlYXR1cmUgbW9kdWxlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNb2R1bGVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8vIGZlYXR1cmUgbW9kdWxlcyBjb25maWd1cmF0aW9uXG4gIHByaXZhdGUgZmVhdHVyZU1vZHVsZXNDb25maWc/OiB7XG4gICAgW2ZlYXR1cmVOYW1lOiBzdHJpbmddOiBGZWF0dXJlTW9kdWxlQ29uZmlnO1xuICB9O1xuXG4gIC8vIG1hcHMgY29tcG9uZW50VHlwZSB0byBmZWF0dXJlXG4gIHByaXZhdGUgY29tcG9uZW50RmVhdHVyZU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICAvKlxuICAgKiBDb250YWlucyBlaXRoZXIgRmVhdHVyZUluc3RhbmNlIG9yIEZlYXR1cmVJbnN0YW5jZSByZXNvbHZlciBmb3Igbm90IHlldFxuICAgKiByZXNvbHZlZCBmZWF0dXJlIG1vZHVsZXNcbiAgICovXG4gIHByaXZhdGUgZmVhdHVyZXM6IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhenlNb2R1bGVzOiBMYXp5TW9kdWxlc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0RmVhdHVyZU1hcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0RmVhdHVyZU1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25maWc6IENtc0NvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnSW5pdGlhbGl6ZXIuZ2V0U3RhYmxlQ29uZmlnKFxuICAgICAgJ2ZlYXR1cmVNb2R1bGVzJ1xuICAgICk7XG5cbiAgICB0aGlzLmZlYXR1cmVNb2R1bGVzQ29uZmlnID0gY29uZmlnLmZlYXR1cmVNb2R1bGVzID8/IHt9O1xuXG4gICAgZm9yIChjb25zdCBbZmVhdHVyZU5hbWUsIGZlYXR1cmVDb25maWddIG9mIE9iamVjdC5lbnRyaWVzKFxuICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1xuICAgICkpIHtcbiAgICAgIGlmIChmZWF0dXJlQ29uZmlnPy5tb2R1bGUgJiYgZmVhdHVyZUNvbmZpZz8uY21zQ29tcG9uZW50cz8ubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGZlYXR1cmVDb25maWcuY21zQ29tcG9uZW50cykge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5zZXQoY29tcG9uZW50LCBmZWF0dXJlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgZmVhdHVyZSBtb2R1bGUgY29uZmlndXJhdGlvbiB0aGF0IGNvdmVycyBzcGVjaWZpZWRcbiAgICogY29tcG9uZW50IHR5cGVcbiAgICovXG4gIGhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5oYXMoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZ1bGwgQ21zQ29tcG9uZW50IG1hcHBpbmcgZGVmaW5lZCBpbiBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+IHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5jb21wb25lbnRGZWF0dXJlTWFwLmdldChjb21wb25lbnRUeXBlKTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVGZWF0dXJlKGZlYXR1cmUpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChmZWF0dXJlSW5zdGFuY2UpID0+IGZlYXR1cmVJbnN0YW5jZS5jb21wb25lbnRzTWFwcGluZ3NbY29tcG9uZW50VHlwZV1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaW5qZWN0b3JzIGZvciBmZWF0dXJlIGFuZCBpdHMgZGVwZW5kZW5jaWVzXG4gICAqXG4gICAqIEFzIGl0J3MgYSBzeW5jaHJvbm91cyBtZXRob2QsIGl0IHdvcmtzIG9ubHkgZm9yIGFscmVhZHkgcmVzb2x2ZWQgZmVhdHVyZXMsXG4gICAqIHJldHVybmluZyB1bmRlZmluZWQgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW5qZWN0b3JbXSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuY29tcG9uZW50RmVhdHVyZU1hcC5nZXQoY29tcG9uZW50VHlwZSk7XG4gICAgbGV0IGluamVjdG9ycztcblxuICAgIC8vIHdlIGFyZSByZXR1cm5pbmcgaW5qZWN0b3JzIG9ubHkgZm9yIGFscmVhZHkgcmVzb2x2ZWQgZmVhdHVyZXNcbiAgICB0aGlzLmZlYXR1cmVzXG4gICAgICAuZ2V0KGZlYXR1cmUpXG4gICAgICA/LnN1YnNjcmliZSgoZmVhdHVyZUluc3RhbmNlKSA9PiB7XG4gICAgICAgIGluamVjdG9ycyA9IFtcbiAgICAgICAgICAvLyBmZWF0dXJlIG1vZHVsZSBpbmplY3RvclxuICAgICAgICAgIGZlYXR1cmVJbnN0YW5jZS5tb2R1bGVSZWYuaW5qZWN0b3IsXG4gICAgICAgICAgLy8gaW5qZWN0b3JzIGZyb20gZGVwZW5kZW5jeSBtb2R1bGVzXG4gICAgICAgICAgLi4uZmVhdHVyZUluc3RhbmNlLmRlcGVuZGVuY3lNb2R1bGVSZWZzLm1hcChcbiAgICAgICAgICAgIChtb2R1bGVSZWYpID0+IG1vZHVsZVJlZi5pbmplY3RvclxuICAgICAgICAgICksXG4gICAgICAgIF07XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIGluamVjdG9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGZlYXR1cmUgYmFzZWQgb24gZmVhdHVyZSBuYW1lLCBpZiBmZWF0dXJlIHdhcyBub3QgeWV0IHJlc29sdmVkXG4gICAqXG4gICAqIEl0IHdpbGwgZmlyc3QgcmVzb2x2ZSBhbGwgbW9kdWxlIGRlcGVuZGVuY2llcyBpZiBkZWZpbmVkXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlKGZlYXR1cmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZlYXR1cmVJbnN0YW5jZT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZmVhdHVyZXMuaGFzKGZlYXR1cmVOYW1lKSkge1xuICAgICAgICBjb25zdCBmZWF0dXJlQ29uZmlnID0gdGhpcy5mZWF0dXJlTW9kdWxlc0NvbmZpZ1tmZWF0dXJlTmFtZV07XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlQ29uZmlnPy5tb2R1bGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gbW9kdWxlIGRlZmluZWQgZm9yIEZlYXR1cmUgTW9kdWxlICcgKyBmZWF0dXJlTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNvbHZlIGRlcGVuZGVuY2llcyBmaXJzdCAoaWYgYW55KVxuICAgICAgICBjb25zdCBkZXBzUmVzb2x2ZSA9IGZlYXR1cmVDb25maWcuZGVwZW5kZW5jaWVzPy5sZW5ndGhcbiAgICAgICAgICA/IGZvcmtKb2luKFxuICAgICAgICAgICAgICBmZWF0dXJlQ29uZmlnLmRlcGVuZGVuY2llcy5tYXAoKGRlcE1vZHVsZUZ1bmMpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5sYXp5TW9kdWxlcy5yZXNvbHZlRGVwZW5kZW5jeU1vZHVsZUluc3RhbmNlKGRlcE1vZHVsZUZ1bmMpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG9mKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlcy5zZXQoXG4gICAgICAgICAgZmVhdHVyZU5hbWUsXG4gICAgICAgICAgZGVwc1Jlc29sdmUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoZGVwcykgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRmVhdHVyZU1vZHVsZShmZWF0dXJlQ29uZmlnLCBkZXBzLCBmZWF0dXJlTmFtZSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5nZXQoZmVhdHVyZU5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZmVhdHVyZSBtb2R1bGUgYnkgcmV0dXJuaW5nIGZlYXR1cmUgaW5zdGFuY2VcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVNb2R1bGUoXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZU1vZHVsZUNvbmZpZyxcbiAgICBkZXBlbmRlbmN5TW9kdWxlUmVmczogTmdNb2R1bGVSZWY8YW55PltdID0gW10sXG4gICAgZmVhdHVyZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RmVhdHVyZUluc3RhbmNlPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eU1vZHVsZXNcbiAgICAgIC5yZXNvbHZlTW9kdWxlSW5zdGFuY2UoZmVhdHVyZUNvbmZpZz8ubW9kdWxlLCBmZWF0dXJlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobW9kdWxlUmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZUluc3RhbmNlOiBGZWF0dXJlSW5zdGFuY2UgPSB7XG4gICAgICAgICAgICAuLi5mZWF0dXJlQ29uZmlnLFxuICAgICAgICAgICAgbW9kdWxlUmVmLFxuICAgICAgICAgICAgZGVwZW5kZW5jeU1vZHVsZVJlZnMsXG4gICAgICAgICAgICBjb21wb25lbnRzTWFwcGluZ3M6IHt9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyByZXNvbHZlIGNvbmZpZ3VyYXRpb24gZm9yIGZlYXR1cmUgbW9kdWxlXG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWd1cmF0aW9uID0gdGhpcy5yZXNvbHZlRmVhdHVyZUNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICBtb2R1bGVSZWYuaW5qZWN0b3JcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gZXh0cmFjdCBjbXMgY29tcG9uZW50cyBjb25maWd1cmF0aW9uIGZyb20gZmVhdHVyZSBjb25maWdcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgZmVhdHVyZUluc3RhbmNlLmNtc0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZlYXR1cmVJbnN0YW5jZS5jb21wb25lbnRzTWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPVxuICAgICAgICAgICAgICByZXNvbHZlZENvbmZpZ3VyYXRpb24uY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZlYXR1cmVJbnN0YW5jZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGluIGZlYXR1cmUgbW9kdWxlXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlQ29uZmlndXJhdGlvbihmZWF0dXJlSW5qZWN0b3I6IEluamVjdG9yKTogQ21zQ29uZmlnIHtcbiAgICAvLyBnZXQgY29uZmlnIGNodW5rcyBmcm9tIGZlYXR1cmUgbGliXG4gICAgY29uc3QgZmVhdHVyZUNvbmZpZ0NodW5rcyA9IGZlYXR1cmVJbmplY3Rvci5nZXQ8YW55W10+KFxuICAgICAgQ29uZmlnQ2h1bmssXG4gICAgICBbXSxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIC8vIGdldCBkZWZhdWx0IGNvbmZpZyBjaHVua3MgZnJvbSBmZWF0dXJlIGxpYlxuICAgIGNvbnN0IGZlYXR1cmVEZWZhdWx0Q29uZmlnQ2h1bmtzID0gZmVhdHVyZUluamVjdG9yLmdldDxhbnlbXT4oXG4gICAgICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gICAgICBbXSxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuXG4gICAgcmV0dXJuIGRlZXBNZXJnZShcbiAgICAgIHt9LFxuICAgICAgLi4uKGZlYXR1cmVEZWZhdWx0Q29uZmlnQ2h1bmtzID8/IFtdKSxcbiAgICAgIC4uLihmZWF0dXJlQ29uZmlnQ2h1bmtzID8/IFtdKVxuICAgICkgYXMgQ21zQ29uZmlnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gY2xlYW4gdXAgYWxsIGluaXRpYWxpemVkIGZlYXR1cmVzXG4gICAgbWVyZ2UoLi4uQXJyYXkuZnJvbSh0aGlzLmZlYXR1cmVzLnZhbHVlcygpKSkuc3Vic2NyaWJlKChmZWF0dXJlSW5zdGFuY2UpID0+XG4gICAgICBmZWF0dXJlSW5zdGFuY2UubW9kdWxlUmVmPy5kZXN0cm95KClcbiAgICApO1xuICB9XG59XG4iXX0=