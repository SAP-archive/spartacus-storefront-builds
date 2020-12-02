import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, isDevMode, PLATFORM_ID, } from '@angular/core';
import { CmsConfig, deepMerge, } from '@spartacus/core';
import { defer, forkJoin, of } from 'rxjs';
import { mapTo, share, tap } from 'rxjs/operators';
import { FeatureModulesService } from './feature-modules.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./feature-modules.service";
/**
 * Service with logic related to resolving component from cms mapping
 */
export class CmsComponentsService {
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
    /**
     * Returns the feature module for a cms component.
     * It will only work for cms components provided by feature modules.
     *
     * @param componentType
     */
    getModule(componentType) {
        return (this.featureModules.hasFeatureFor(componentType) &&
            this.featureModules.getModule(componentType));
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
        if (isDevMode() && !componentConfig) {
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
        const configs = [];
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                configs.push((_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : []);
            }
        }
        return this.standardizeChildRoutes(configs);
    }
    /**
     * Standardizes the format of `childRoutes` config.
     *
     * Some `childRoutes` configs are simple arrays of Routes (without the notion of the parent route).
     * But some configs can be an object with children routes and their parent defined in separate property.
     */
    standardizeChildRoutes(childRoutesConfigs) {
        const result = { children: [] };
        (childRoutesConfigs || []).forEach((config) => {
            if (Array.isArray(config)) {
                result.children.push(...config);
            }
            else {
                result.children.push(...(config.children || []));
                if (config.parent) {
                    result.parent = config.parent;
                }
            }
        });
        return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFHTCxTQUFTLEVBQ1QsU0FBUyxHQUVWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRWxFOztHQUVHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQixZQUNZLE1BQWlCLEVBQ0ksVUFBa0IsRUFDdkMsY0FBc0M7UUFGdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBWjFDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQXFELEVBQUUsQ0FBQztRQUV4RSxXQUFXO1FBQ0gscUJBQWdCLEdBR3BCLElBQUksR0FBRyxFQUFFLENBQUM7SUFNWCxDQUFDO0lBRUo7Ozs7Ozs7T0FPRztJQUNILGlCQUFpQixDQUFDLGNBQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNoQiw0RUFBNEU7WUFDNUUsNEVBQTRFO1lBQzVF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QyxTQUFTO1lBMEJvQyxNQUFNLHVCQUFoRCxNQUFNLFNBQUMsV0FBVztZQXBCZCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBOZ01vZHVsZVJlZixcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcsXG4gIENtc0NvbXBvbmVudE1hcHBpbmcsXG4gIENtc0NvbmZpZyxcbiAgZGVlcE1lcmdlLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlLW1vZHVsZXMuc2VydmljZSc7XG5cbi8qKlxuICogU2VydmljZSB3aXRoIGxvZ2ljIHJlbGF0ZWQgdG8gcmVzb2x2aW5nIGNvbXBvbmVudCBmcm9tIGNtcyBtYXBwaW5nXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWFwcGluZ3M6IHsgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmcgfSA9IHt9O1xuXG4gIC8vIGNvbnRhaW5zXG4gIHByaXZhdGUgbWFwcGluZ1Jlc29sdmVyczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVNb2R1bGVzPzogRmVhdHVyZU1vZHVsZXNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdWxkIGJlIGNhbGxlZCB0byBtYWtlIHN1cmUgYWxsIGNvbXBvbmVudCBtYXBwaW5ncyBhcmUgZGV0ZXJtaW5lZCxcbiAgICogZXNwZWNpYWxseSBsYXp5IGxvYWRlZCBvbmVzLlxuICAgKlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHdheSB0byBtYWtlIHN1cmUgYWxsIG90aGVyIG1ldGhvZHMgb2YgQ21zQ29tcG9uZW50U2VydmljZVxuICAgKiB3aWxsIGJlIGFibGUgdG8gd29yayBzeW5jaHJvbm91c2x5IGZvciBhc2tlZCBjb21wb25lbnQgdHlwZXMgYW5kIGF2b2lkIHJpc2tcbiAgICogb2YgcG90ZW50aWFsIGVycm9ycyB0aGF0IGNvdWxkIGJlIHRocm93biBvdGhlcndpc2UuXG4gICAqL1xuICBkZXRlcm1pbmVNYXBwaW5ncyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIC8vIHdlIHVzZSBkZWZlciwgdG8gYmUgc3VyZSB0aGUgbG9naWMgYmVsb3cgdXNlZCB0byBjb21wb3NlIGZpbmFsIG9ic2VydmFibGVcbiAgICAgIC8vIHdpbGwgYmUgZXhlY3V0ZWQgYXQgc3Vic2NyaXB0aW9uIHRpbWUgKHdpdGggdXAgdG8gZGF0ZSBzdGF0ZSBhdCB0aGUgdGltZSxcbiAgICAgIC8vIHdoZW4gaXQgd2lsbCBiZSBuZWVkZWQpXG4gICAgICBjb25zdCBmZWF0dXJlUmVzb2x2ZXJzID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgICBpZiAoIXRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0pIHtcbiAgICAgICAgICBjb25zdCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBjb21wb25lbnQgdHlwZSBpcyBtYW5hZ2VkIGJ5IGZlYXR1cmUgbW9kdWxlXG4gICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZU1vZHVsZXMuaGFzRmVhdHVyZUZvcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICAgICAgZmVhdHVyZVJlc29sdmVycy5wdXNoKFxuICAgICAgICAgICAgICAvLyB3ZSBkZWxlZ2F0ZSBwb3B1bGF0aW5nIHRoaXMubWFwcGluZ3MgdG8gZmVhdHVyZSByZXNvbHZlclxuICAgICAgICAgICAgICB0aGlzLmdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoY29tcG9uZW50VHlwZSwgc3RhdGljQ29uZmlnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2ltcGx5IHVzZSBvbmx5IHN0YXRpYyBjb25maWdcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPSBzdGF0aWNDb25maWc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlUmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZm9ya0pvaW4oZmVhdHVyZVJlc29sdmVycykucGlwZShtYXBUbyhjb21wb25lbnRUeXBlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZU1hcHBpbmdSZXNvbHZlcihcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgc3RhdGljQ29uZmlnPzogQ21zQ29tcG9uZW50TWFwcGluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+IHtcbiAgICBpZiAoIXRoaXMubWFwcGluZ1Jlc29sdmVycy5oYXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIGNvbnN0IG1hcHBpbmdSZXNvbHZlciQgPSB0aGlzLmZlYXR1cmVNb2R1bGVzXG4gICAgICAgIC5nZXRDbXNNYXBwaW5nKGNvbXBvbmVudFR5cGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcCgoZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIFdlIHRyZWF0IGNtcyBtYXBwaW5nIGNvbmZpZ3VyYXRpb24gZnJvbSBhIGZlYXR1cmUgYXMgYSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBhcHAvc3RhdGljIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIHRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPSBkZWVwTWVyZ2UoXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBmZWF0dXJlQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgICAgc3RhdGljQ29uZmlnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLmRlbGV0ZShjb21wb25lbnRUeXBlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB0aGlzLm1hcHBpbmdSZXNvbHZlcnMuc2V0KGNvbXBvbmVudFR5cGUsIG1hcHBpbmdSZXNvbHZlciQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLmdldChjb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmZWF0dXJlIG1vZHVsZSBmb3IgYSBjbXMgY29tcG9uZW50LlxuICAgKiBJdCB3aWxsIG9ubHkgd29yayBmb3IgY21zIGNvbXBvbmVudHMgcHJvdmlkZWQgYnkgZmVhdHVyZSBtb2R1bGVzLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZVxuICAgKi9cbiAgZ2V0TW9kdWxlKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE5nTW9kdWxlUmVmPGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkgJiZcbiAgICAgIHRoaXMuZmVhdHVyZU1vZHVsZXMuZ2V0TW9kdWxlKGNvbXBvbmVudFR5cGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gY29sbGVjdGlvbiBvZiBjb21wb25lbnQgbWFwcGluZyBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZpZWQgbGlzdCBvZlxuICAgKiBjb21wb25lbnQgdHlwZXMuXG4gICAqXG4gICAqIElmIGNvbXBvbmVudCBtYXBwaW5nIGNhbid0IGJlIGRldGVybWluZWQgc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUsIGxhenlcbiAgICogbG9hZGVkIG9uZSwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICpcbiAgICogVG8gbWFrZSBzdXJlIGNvbXBvbmVudCBtYXBwaW5nIGlzIGF2YWlsYWJsZSwgZGV0ZXJtaW5lTWFwcGluZ3MoKVxuICAgKiBzaG91bGQgYmUgY2FsbGVkIGFuZCBjb21wbGV0ZWQgZmlyc3QuXG4gICAqL1xuICBnZXRNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IENtc0NvbXBvbmVudE1hcHBpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9XG4gICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID8/XG4gICAgICB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIWNvbXBvbmVudENvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLm1pc3NpbmdDb21wb25lbnRzLmluY2x1ZGVzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHRoaXMubWlzc2luZ0NvbXBvbmVudHMucHVzaChjb21wb25lbnRUeXBlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7Y29tcG9uZW50VHlwZX0nLlxcbmAsXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgaW1wbGVtZW50IGEgY29tcG9uZW50IGFuZCByZWdpc3RlciBpdCBpbiB0aGUgbWFwcGVyLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgaWYgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBhcyBzb21lIGNvbXBvbmVudHNcbiAgICogY291bGQgYmUgZGlzYWJsZWQgZm9yIHNlcnZlciBzaWRlIHJlbmRlcmluZ3NcbiAgICovXG4gIHNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICByZXR1cm4gIShpc1NTUiAmJiB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmRpc2FibGVTU1IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBEZWZlckxvYWRpbmdTdHJhdGVneSBmb3IgY29tcG9uZW50IHR5cGUuXG4gICAqL1xuICBnZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBEZWZlckxvYWRpbmdTdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHM/Lltjb21wb25lbnRUeXBlXT8uZGVmZXJMb2FkaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbXMgZHJpdmVuIGNoaWxkIHJvdXRlcyBmb3IgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0Q2hpbGRSb3V0ZXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcge1xuICAgIGNvbnN0IGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICBjb25maWdzLnB1c2godGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcmRpemVDaGlsZFJvdXRlcyhjb25maWdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFuZGFyZGl6ZXMgdGhlIGZvcm1hdCBvZiBgY2hpbGRSb3V0ZXNgIGNvbmZpZy5cbiAgICpcbiAgICogU29tZSBgY2hpbGRSb3V0ZXNgIGNvbmZpZ3MgYXJlIHNpbXBsZSBhcnJheXMgb2YgUm91dGVzICh3aXRob3V0IHRoZSBub3Rpb24gb2YgdGhlIHBhcmVudCByb3V0ZSkuXG4gICAqIEJ1dCBzb21lIGNvbmZpZ3MgY2FuIGJlIGFuIG9iamVjdCB3aXRoIGNoaWxkcmVuIHJvdXRlcyBhbmQgdGhlaXIgcGFyZW50IGRlZmluZWQgaW4gc2VwYXJhdGUgcHJvcGVydHkuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhbmRhcmRpemVDaGlsZFJvdXRlcyhcbiAgICBjaGlsZFJvdXRlc0NvbmZpZ3M6IChSb3V0ZVtdIHwgQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcpW11cbiAgKTogQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcge1xuICAgIGNvbnN0IHJlc3VsdDogQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcgPSB7IGNoaWxkcmVuOiBbXSB9O1xuXG4gICAgKGNoaWxkUm91dGVzQ29uZmlncyB8fCBbXSkuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcpKSB7XG4gICAgICAgIHJlc3VsdC5jaGlsZHJlbi5wdXNoKC4uLmNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQuY2hpbGRyZW4ucHVzaCguLi4oY29uZmlnLmNoaWxkcmVuIHx8IFtdKSk7XG4gICAgICAgIGlmIChjb25maWcucGFyZW50KSB7XG4gICAgICAgICAgcmVzdWx0LnBhcmVudCA9IGNvbmZpZy5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNtcyBkcml2ZW4gZ3VhcmRzIGZvciBjb21wb25lbnRzXG4gICAqL1xuICBnZXRHdWFyZHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5ndWFyZHM/LmZvckVhY2goKGd1YXJkKSA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaTE4biBrZXlzIGFzc29jaWF0ZWQgd2l0aCBjb21wb25lbnRzXG4gICAqL1xuICBnZXRJMThuS2V5cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmkxOG5LZXlzPy5mb3JFYWNoKChrZXkpID0+XG4gICAgICAgICAgaTE4bktleXMuYWRkKGtleSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaTE4bktleXMpO1xuICB9XG59XG4iXX0=