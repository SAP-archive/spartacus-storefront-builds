import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsConfig, deepMerge, } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import { defer, forkJoin, of } from 'rxjs';
import { mapTo, share, tap } from 'rxjs/operators';
import { FeatureModulesService } from './feature-modules.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./feature-modules.service";
export class CmsComponentsService {
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
}
CmsComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.FeatureModulesService)); }, token: CmsComponentsService, providedIn: "root" });
CmsComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CmsComponentsService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: FeatureModulesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBWSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUVMLFNBQVMsRUFDVCxTQUFTLEdBRVYsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFLbEUsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQjs7O09BR0c7SUFDSCxZQUNZLE1BQWlCLEVBQ0ksVUFBa0IsRUFDdkMsY0FBc0M7UUFGdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBaEIxQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFxRCxFQUFFLENBQUM7UUFFeEUsV0FBVztRQUNILHFCQUFnQixHQUdwQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBVVgsQ0FBQztJQUVKOzs7Ozs7O09BT0c7SUFDSCxpQkFBaUIsQ0FBQyxjQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDaEIsNEVBQTRFO1lBQzVFLDRFQUE0RTtZQUM1RSwwQkFBMEI7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UUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNuQyxLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BDLFlBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsMENBQUUsUUFBUSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUN4RCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNqQjthQUNIO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztZQW5MRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVpDLFNBQVM7WUE2Qm9DLE1BQU0sdUJBQWhELE1BQU0sU0FBQyxXQUFXO1lBckJkLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIGRlZXBNZXJnZSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlLW1vZHVsZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWFwcGluZ3M6IHsgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmcgfSA9IHt9O1xuXG4gIC8vIGNvbnRhaW5zXG4gIHByaXZhdGUgbWFwcGluZ1Jlc29sdmVyczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMVxuICAgKiBjb25zdHJ1Y3Rvcihjb25maWc6IENtc0NvbmZpZywgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBmZWF0dXJlTW9kdWxlcz86IEZlYXR1cmVNb2R1bGVzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgdG8gbWFrZSBzdXJlIGFsbCBjb21wb25lbnQgbWFwcGluZ3MgYXJlIGRldGVybWluZWQsXG4gICAqIGVzcGVjaWFsbHkgbGF6eSBsb2FkZWQgb25lcy5cbiAgICpcbiAgICogSXQncyByZWNvbW1lbmRlZCB3YXkgdG8gbWFrZSBzdXJlIGFsbCBvdGhlciBtZXRob2RzIG9mIENtc0NvbXBvbmVudFNlcnZpY2VcbiAgICogd2lsbCBiZSBhYmxlIHRvIHdvcmsgc3luY2hyb25vdXNseSBmb3IgYXNrZWQgY29tcG9uZW50IHR5cGVzIGFuZCBhdm9pZCByaXNrXG4gICAqIG9mIHBvdGVudGlhbCBlcnJvcnMgdGhhdCBjb3VsZCBiZSB0aHJvd24gb3RoZXJ3aXNlLlxuICAgKi9cbiAgZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICAvLyB3ZSB1c2UgZGVmZXIsIHRvIGJlIHN1cmUgdGhlIGxvZ2ljIGJlbG93IHVzZWQgdG8gY29tcG9zZSBmaW5hbCBvYnNlcnZhYmxlXG4gICAgICAvLyB3aWxsIGJlIGV4ZWN1dGVkIGF0IHN1YnNjcmlwdGlvbiB0aW1lICh3aXRoIHVwIHRvIGRhdGUgc3RhdGUgYXQgdGhlIHRpbWUsXG4gICAgICAvLyB3aGVuIGl0IHdpbGwgYmUgbmVlZGVkKVxuICAgICAgY29uc3QgZmVhdHVyZVJlc29sdmVycyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGljQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgY29tcG9uZW50IHR5cGUgaXMgbWFuYWdlZCBieSBmZWF0dXJlIG1vZHVsZVxuICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgICAgIGZlYXR1cmVSZXNvbHZlcnMucHVzaChcbiAgICAgICAgICAgICAgLy8gd2UgZGVsZWdhdGUgcG9wdWxhdGluZyB0aGlzLm1hcHBpbmdzIHRvIGZlYXR1cmUgcmVzb2x2ZXJcbiAgICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTWFwcGluZ1Jlc29sdmVyKGNvbXBvbmVudFR5cGUsIHN0YXRpY0NvbmZpZylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpbXBseSB1c2Ugb25seSBzdGF0aWMgY29uZmlnXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gc3RhdGljQ29uZmlnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZVJlc29sdmVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGZlYXR1cmVSZXNvbHZlcnMpLnBpcGUobWFwVG8oY29tcG9uZW50VHlwZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihjb21wb25lbnRUeXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nLFxuICAgIHN0YXRpY0NvbmZpZz86IENtc0NvbXBvbmVudE1hcHBpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPiB7XG4gICAgaWYgKCF0aGlzLm1hcHBpbmdSZXNvbHZlcnMuaGFzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICBjb25zdCBtYXBwaW5nUmVzb2x2ZXIkID0gdGhpcy5mZWF0dXJlTW9kdWxlc1xuICAgICAgICAuZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGZlYXR1cmVDb21wb25lbnRNYXBwaW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSB0cmVhdCBjbXMgbWFwcGluZyBjb25maWd1cmF0aW9uIGZyb20gYSBmZWF0dXJlIGFzIGEgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgYXBwL3N0YXRpYyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gZGVlcE1lcmdlKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ1Jlc29sdmVycy5kZWxldGUoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLnNldChjb21wb25lbnRUeXBlLCBtYXBwaW5nUmVzb2x2ZXIkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwcGluZ1Jlc29sdmVycy5nZXQoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICBnZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW5qZWN0b3JbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkgJiZcbiAgICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlcy5nZXRJbmplY3RvcnMoY29tcG9uZW50VHlwZSkpID8/XG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNvbGxlY3Rpb24gb2YgY29tcG9uZW50IG1hcHBpbmcgY29uZmlndXJhdGlvbiBmb3Igc3BlY2lmaWVkIGxpc3Qgb2ZcbiAgICogY29tcG9uZW50IHR5cGVzLlxuICAgKlxuICAgKiBJZiBjb21wb25lbnQgbWFwcGluZyBjYW4ndCBiZSBkZXRlcm1pbmVkIHN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlLCBsYXp5XG4gICAqIGxvYWRlZCBvbmUsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqXG4gICAqIFRvIG1ha2Ugc3VyZSBjb21wb25lbnQgbWFwcGluZyBpcyBhdmFpbGFibGUsIGRldGVybWluZU1hcHBpbmdzKClcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBhbmQgY29tcGxldGVkIGZpcnN0LlxuICAgKi9cbiAgZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPVxuICAgICAgdGhpcy5tYXBwaW5nc1tjb21wb25lbnRUeXBlXSA/P1xuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIGlmIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgc29tZSBjb21wb25lbnRzXG4gICAqIGNvdWxkIGJlIGRpc2FibGVkIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdzXG4gICAqL1xuICBzaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5kaXNhYmxlU1NSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gRGVmZXJMb2FkaW5nU3RyYXRlZ3kgZm9yIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV0/LmRlZmVyTG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY21zIGRyaXZlbiBjaGlsZCByb3V0ZXMgZm9yIGNvbXBvbmVudHNcbiAgICovXG4gIGdldENoaWxkUm91dGVzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKC4uLih0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmNoaWxkUm91dGVzID8/IFtdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gZ3VhcmRzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRHdWFyZHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHM/LmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaTE4biBrZXlzIGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnRzXG4gICAqL1xuICBnZXRJMThuS2V5cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmkxOG5LZXlzPy5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgaTE4bktleXMuYWRkKGtleSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaTE4bktleXMpO1xuICB9XG59XG4iXX0=