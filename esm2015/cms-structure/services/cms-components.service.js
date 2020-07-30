import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsComponentMapping, CmsConfig, deepMerge, DeferLoadingStrategy, } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import { defer, forkJoin, of } from 'rxjs';
import { mapTo, share, tap } from 'rxjs/operators';
import { FeatureModulesService } from './feature-modules.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./feature-modules.service";
let CmsComponentsService = class CmsComponentsService {
    /**
     * @deprecated since 2.1
     * constructor(config: CmsConfig, platformId: Object);
     */
    constructor(config, platformId, featureModules) {
        this.config = config;
        this.platformId = platformId;
        this.featureModules = featureModules;
        this.missingComponents = [];
        this.mappings = {};
        // contains
        this.mappingResolvers = new Map();
    }
    /**
     * Should be called to make sure all component mappings are determined,
     * especially lazy loaded ones.
     *
     * It's recommended way to make sure all other methods of CmsComponentService
     * will be able to work synchronously for asked component types and avoid risk
     * of potential errors that could be thrown otherwise.
     */
    determineMappings(componentTypes) {
        return defer(() => {
            // we use defer, to be sure the logic below used to compose final observable
            // will be executed at subscription time (with up to date state at the time,
            // when it will be needed)
            const featureResolvers = [];
            for (const componentType of componentTypes) {
                if (!this.mappings[componentType]) {
                    const staticConfig = this.config.cmsComponents[componentType];
                    // check if this component type is managed by feature module
                    if (this.featureModules.hasFeatureFor(componentType)) {
                        featureResolvers.push(
                        // we delegate populating this.mappings to feature resolver
                        this.getFeatureMappingResolver(componentType, staticConfig));
                    }
                    else {
                        // simply use only static config
                        this.mappings[componentType] = staticConfig;
                    }
                }
            }
            if (featureResolvers.length) {
                return forkJoin(featureResolvers).pipe(mapTo(componentTypes));
            }
            else {
                return of(componentTypes);
            }
        });
    }
    getFeatureMappingResolver(componentType, staticConfig) {
        if (!this.mappingResolvers.has(componentType)) {
            const mappingResolver$ = this.featureModules
                .getCmsMapping(componentType)
                .pipe(tap((featureComponentMapping) => {
                // We treat cms mapping configuration from a feature as a default,
                // that can be overridden by app/static configuration
                this.mappings[componentType] = deepMerge({}, featureComponentMapping, staticConfig);
                this.mappingResolvers.delete(componentType);
            }), share());
            this.mappingResolvers.set(componentType, mappingResolver$);
        }
        return this.mappingResolvers.get(componentType);
    }
    getInjectors(componentType) {
        var _a;
        return ((_a = (this.featureModules.hasFeatureFor(componentType) &&
            this.featureModules.getInjectors(componentType))) !== null && _a !== void 0 ? _a : []);
    }
    /**
     * Return collection of component mapping configuration for specified list of
     * component types.
     *
     * If component mapping can't be determined synchronously, for example, lazy
     * loaded one, it will throw an error.
     *
     * To make sure component mapping is available, determineMappings()
     * should be called and completed first.
     */
    getMapping(componentType) {
        var _a, _b;
        const componentConfig = (_a = this.mappings[componentType]) !== null && _a !== void 0 ? _a : (_b = this.config.cmsComponents) === null || _b === void 0 ? void 0 : _b[componentType];
        if (!componentConfig) {
            if (!this.missingComponents.includes(componentType)) {
                this.missingComponents.push(componentType);
                console.warn(`No component implementation found for the CMS component type '${componentType}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig;
    }
    /**
     * Checks, if component should be rendered as some components
     * could be disabled for server side renderings
     */
    shouldRender(componentType) {
        var _a;
        const isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
    }
    /**
     * Return DeferLoadingStrategy for component type.
     */
    getDeferLoadingStrategy(componentType) {
        var _a, _b;
        return (_b = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType]) === null || _b === void 0 ? void 0 : _b.deferLoading;
    }
    /**
     * Get cms driven child routes for components
     */
    getChildRoutes(componentTypes) {
        var _a, _b;
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                routes.push(...((_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : []));
            }
        }
        return routes;
    }
    /**
     * Get cms driven guards for components
     */
    getGuards(componentTypes) {
        var _a, _b;
        const guards = new Set();
        for (const componentType of componentTypes) {
            (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.guards) === null || _b === void 0 ? void 0 : _b.forEach((guard) => guards.add(guard));
        }
        return Array.from(guards);
    }
    /**
     * Get i18n keys associated with components
     */
    getI18nKeys(componentTypes) {
        var _a, _b;
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.i18nKeys) === null || _b === void 0 ? void 0 : _b.forEach((key) => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
};
CmsComponentsService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: FeatureModulesService }
];
CmsComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.FeatureModulesService)); }, token: CmsComponentsService, providedIn: "root" });
CmsComponentsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Inject(PLATFORM_ID))
], CmsComponentsService);
export { CmsComponentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVksV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFNBQVMsRUFDVCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFLbEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFVL0I7OztPQUdHO0lBQ0gsWUFDWSxNQUFpQixFQUNJLFVBQWtCLEVBQ3ZDLGNBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQWhCMUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLGFBQVEsR0FBcUQsRUFBRSxDQUFDO1FBRXhFLFdBQVc7UUFDSCxxQkFBZ0IsR0FHcEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQVVYLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsaUJBQWlCLENBQUMsY0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2hCLDRFQUE0RTtZ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RUc7SUFDSCxXQUFXLENBQUMsY0FBd0I7O1FBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbkMsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNwQyxZQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDBDQUFFLFFBQVEsMENBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDeEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDakI7YUFDSDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOztZQWxLcUIsU0FBUztZQUNnQixNQUFNLHVCQUFoRCxNQUFNLFNBQUMsV0FBVztZQUNRLHFCQUFxQjs7O0FBakJ2QyxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQWlCRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQWhCWCxvQkFBb0IsQ0FpTGhDO1NBakxZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIGRlZXBNZXJnZSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlLW1vZHVsZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWFwcGluZ3M6IHsgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmcgfSA9IHt9O1xuXG4gIC8vIGNvbnRhaW5zXG4gIHByaXZhdGUgbWFwcGluZ1Jlc29sdmVyczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMVxuICAgKiBjb25zdHJ1Y3Rvcihjb25maWc6IENtc0NvbmZpZywgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBmZWF0dXJlTW9kdWxlcz86IEZlYXR1cmVNb2R1bGVzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgdG8gbWFrZSBzdXJlIGFsbCBjb21wb25lbnQgbWFwcGluZ3MgYXJlIGRldGVybWluZWQsXG4gICAqIGVzcGVjaWFsbHkgbGF6eSBsb2FkZWQgb25lcy5cbiAgICpcbiAgICogSXQncyByZWNvbW1lbmRlZCB3YXkgdG8gbWFrZSBzdXJlIGFsbCBvdGhlciBtZXRob2RzIG9mIENtc0NvbXBvbmVudFNlcnZpY2VcbiAgICogd2lsbCBiZSBhYmxlIHRvIHdvcmsgc3luY2hyb25vdXNseSBmb3IgYXNrZWQgY29tcG9uZW50IHR5cGVzIGFuZCBhdm9pZCByaXNrXG4gICAqIG9mIHBvdGVudGlhbCBlcnJvcnMgdGhhdCBjb3VsZCBiZSB0aHJvd24gb3RoZXJ3aXNlLlxuICAgKi9cbiAgZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICAvLyB3ZSB1c2UgZGVmZXIsIHRvIGJlIHN1cmUgdGhlIGxvZ2ljIGJlbG93IHVzZWQgdG8gY29tcG9zZSBmaW5hbCBvYnNlcnZhYmxlXG4gICAgICAvLyB3aWxsIGJlIGV4ZWN1dGVkIGF0IHN1YnNjcmlwdGlvbiB0aW1lICh3aXRoIHVwIHRvIGRhdGUgc3RhdGUgYXQgdGhlIHRpbWUsXG4gICAgICAvLyB3aGVuIGl0IHdpbGwgYmUgbmVlZGVkKVxuICAgICAgY29uc3QgZmVhdHVyZVJlc29sdmVycyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGljQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgY29tcG9uZW50IHR5cGUgaXMgbWFuYWdlZCBieSBmZWF0dXJlIG1vZHVsZVxuICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgICAgIGZlYXR1cmVSZXNvbHZlcnMucHVzaChcbiAgICAgICAgICAgICAgLy8gd2UgZGVsZWdhdGUgcG9wdWxhdGluZyB0aGlzLm1hcHBpbmdzIHRvIGZlYXR1cmUgcmVzb2x2ZXJcbiAgICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTWFwcGluZ1Jlc29sdmVyKGNvbXBvbmVudFR5cGUsIHN0YXRpY0NvbmZpZylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpbXBseSB1c2Ugb25seSBzdGF0aWMgY29uZmlnXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gc3RhdGljQ29uZmlnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZVJlc29sdmVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGZlYXR1cmVSZXNvbHZlcnMpLnBpcGUobWFwVG8oY29tcG9uZW50VHlwZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihjb21wb25lbnRUeXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nLFxuICAgIHN0YXRpY0NvbmZpZz86IENtc0NvbXBvbmVudE1hcHBpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPiB7XG4gICAgaWYgKCF0aGlzLm1hcHBpbmdSZXNvbHZlcnMuaGFzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICBjb25zdCBtYXBwaW5nUmVzb2x2ZXIkID0gdGhpcy5mZWF0dXJlTW9kdWxlc1xuICAgICAgICAuZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGZlYXR1cmVDb21wb25lbnRNYXBwaW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSB0cmVhdCBjbXMgbWFwcGluZyBjb25maWd1cmF0aW9uIGZyb20gYSBmZWF0dXJlIGFzIGEgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgYXBwL3N0YXRpYyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gZGVlcE1lcmdlKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ1Jlc29sdmVycy5kZWxldGUoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLnNldChjb21wb25lbnRUeXBlLCBtYXBwaW5nUmVzb2x2ZXIkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwcGluZ1Jlc29sdmVycy5nZXQoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICBnZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW5qZWN0b3JbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkgJiZcbiAgICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlcy5nZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZSkpID8/XG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNvbGxlY3Rpb24gb2YgY29tcG9uZW50IG1hcHBpbmcgY29uZmlndXJhdGlvbiBmb3Igc3BlY2lmaWVkIGxpc3Qgb2ZcbiAgICogY29tcG9uZW50IHR5cGVzLlxuICAgKlxuICAgKiBJZiBjb21wb25lbnQgbWFwcGluZyBjYW4ndCBiZSBkZXRlcm1pbmVkIHN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlLCBsYXp5XG4gICAqIGxvYWRlZCBvbmUsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqXG4gICAqIFRvIG1ha2Ugc3VyZSBjb21wb25lbnQgbWFwcGluZyBpcyBhdmFpbGFibGUsIGRldGVybWluZU1hcHBpbmdzKClcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBhbmQgY29tcGxldGVkIGZpcnN0LlxuICAgKi9cbiAgZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPVxuICAgICAgdGhpcy5tYXBwaW5nc1tjb21wb25lbnRUeXBlXSA/P1xuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIGlmIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgc29tZSBjb21wb25lbnRzXG4gICAqIGNvdWxkIGJlIGRpc2FibGVkIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdzXG4gICAqL1xuICBzaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5kaXNhYmxlU1NSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gRGVmZXJMb2FkaW5nU3RyYXRlZ3kgZm9yIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV0/LmRlZmVyTG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY21zIGRyaXZlbiBjaGlsZCByb3V0ZXMgZm9yIGNvbXBvbmVudHNcbiAgICovXG4gIGdldENoaWxkUm91dGVzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKC4uLih0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmNoaWxkUm91dGVzID8/IFtdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gZ3VhcmRzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRHdWFyZHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHM/LmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaTE4biBrZXlzIGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnRzXG4gICAqL1xuICBnZXRJMThuS2V5cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmkxOG5LZXlzPy5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgaTE4bktleXMuYWRkKGtleSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaTE4bktleXMpO1xuICB9XG59XG4iXX0=