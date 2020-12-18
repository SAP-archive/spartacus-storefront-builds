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
     * Returns the static data for the component type.
     */
    getStaticData(componentType) {
        var _a;
        return (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFJTCxTQUFTLEVBQ1QsU0FBUyxHQUVWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRWxFOztHQUVHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQixZQUNZLE1BQWlCLEVBQ0ksVUFBa0IsRUFDdkMsY0FBc0M7UUFGdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBWjFDLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQXFELEVBQUUsQ0FBQztRQUV4RSxXQUFXO1FBQ0gscUJBQWdCLEdBR3BCLElBQUksR0FBRyxFQUFFLENBQUM7SUFNWCxDQUFDO0lBRUo7Ozs7Ozs7T0FPRztJQUNILGlCQUFpQixDQUFDLGNBQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNoQiw0RUFBNEU7WUFDNUUsNEVBQTRFO1lBQzVF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QUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O1lBdk5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBYkMsU0FBUztZQTBCb0MsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVc7WUFwQmQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgTmdNb2R1bGVSZWYsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudCxcbiAgQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcsXG4gIENtc0NvbXBvbmVudE1hcHBpbmcsXG4gIENtc0NvbmZpZyxcbiAgZGVlcE1lcmdlLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmVyLCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZXNTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlLW1vZHVsZXMuc2VydmljZSc7XG5cbi8qKlxuICogU2VydmljZSB3aXRoIGxvZ2ljIHJlbGF0ZWQgdG8gcmVzb2x2aW5nIGNvbXBvbmVudCBmcm9tIGNtcyBtYXBwaW5nXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgbWlzc2luZ0NvbXBvbmVudHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWFwcGluZ3M6IHsgW2NvbXBvbmVudFR5cGU6IHN0cmluZ106IENtc0NvbXBvbmVudE1hcHBpbmcgfSA9IHt9O1xuXG4gIC8vIGNvbnRhaW5zXG4gIHByaXZhdGUgbWFwcGluZ1Jlc29sdmVyczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVNb2R1bGVzPzogRmVhdHVyZU1vZHVsZXNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdWxkIGJlIGNhbGxlZCB0byBtYWtlIHN1cmUgYWxsIGNvbXBvbmVudCBtYXBwaW5ncyBhcmUgZGV0ZXJtaW5lZCxcbiAgICogZXNwZWNpYWxseSBsYXp5IGxvYWRlZCBvbmVzLlxuICAgKlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHdheSB0byBtYWtlIHN1cmUgYWxsIG90aGVyIG1ldGhvZHMgb2YgQ21zQ29tcG9uZW50U2VydmljZVxuICAgKiB3aWxsIGJlIGFibGUgdG8gd29yayBzeW5jaHJvbm91c2x5IGZvciBhc2tlZCBjb21wb25lbnQgdHlwZXMgYW5kIGF2b2lkIHJpc2tcbiAgICogb2YgcG90ZW50aWFsIGVycm9ycyB0aGF0IGNvdWxkIGJlIHRocm93biBvdGhlcndpc2UuXG4gICAqL1xuICBkZXRlcm1pbmVNYXBwaW5ncyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIC8vIHdlIHVzZSBkZWZlciwgdG8gYmUgc3VyZSB0aGUgbG9naWMgYmVsb3cgdXNlZCB0byBjb21wb3NlIGZpbmFsIG9ic2VydmFibGVcbiAgICAgIC8vIHdpbGwgYmUgZXhlY3V0ZWQgYXQgc3Vic2NyaXB0aW9uIHRpbWUgKHdpdGggdXAgdG8gZGF0ZSBzdGF0ZSBhdCB0aGUgdGltZSxcbiAgICAgIC8vIHdoZW4gaXQgd2lsbCBiZSBuZWVkZWQpXG4gICAgICBjb25zdCBmZWF0dXJlUmVzb2x2ZXJzID0gW107XG5cbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgICBpZiAoIXRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0pIHtcbiAgICAgICAgICBjb25zdCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBjb21wb25lbnQgdHlwZSBpcyBtYW5hZ2VkIGJ5IGZlYXR1cmUgbW9kdWxlXG4gICAgICAgICAgaWYgKHRoaXMuZmVhdHVyZU1vZHVsZXMuaGFzRmVhdHVyZUZvcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICAgICAgZmVhdHVyZVJlc29sdmVycy5wdXNoKFxuICAgICAgICAgICAgICAvLyB3ZSBkZWxlZ2F0ZSBwb3B1bGF0aW5nIHRoaXMubWFwcGluZ3MgdG8gZmVhdHVyZSByZXNvbHZlclxuICAgICAgICAgICAgICB0aGlzLmdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoY29tcG9uZW50VHlwZSwgc3RhdGljQ29uZmlnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2ltcGx5IHVzZSBvbmx5IHN0YXRpYyBjb25maWdcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPSBzdGF0aWNDb25maWc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlUmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZm9ya0pvaW4oZmVhdHVyZVJlc29sdmVycykucGlwZShtYXBUbyhjb21wb25lbnRUeXBlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZU1hcHBpbmdSZXNvbHZlcihcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmcsXG4gICAgc3RhdGljQ29uZmlnPzogQ21zQ29tcG9uZW50TWFwcGluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudE1hcHBpbmc+IHtcbiAgICBpZiAoIXRoaXMubWFwcGluZ1Jlc29sdmVycy5oYXMoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgIGNvbnN0IG1hcHBpbmdSZXNvbHZlciQgPSB0aGlzLmZlYXR1cmVNb2R1bGVzXG4gICAgICAgIC5nZXRDbXNNYXBwaW5nKGNvbXBvbmVudFR5cGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcCgoZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIFdlIHRyZWF0IGNtcyBtYXBwaW5nIGNvbmZpZ3VyYXRpb24gZnJvbSBhIGZlYXR1cmUgYXMgYSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBhcHAvc3RhdGljIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIHRoaXMubWFwcGluZ3NbY29tcG9uZW50VHlwZV0gPSBkZWVwTWVyZ2UoXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBmZWF0dXJlQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgICAgc3RhdGljQ29uZmlnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLmRlbGV0ZShjb21wb25lbnRUeXBlKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB0aGlzLm1hcHBpbmdSZXNvbHZlcnMuc2V0KGNvbXBvbmVudFR5cGUsIG1hcHBpbmdSZXNvbHZlciQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLmdldChjb21wb25lbnRUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmZWF0dXJlIG1vZHVsZSBmb3IgYSBjbXMgY29tcG9uZW50LlxuICAgKiBJdCB3aWxsIG9ubHkgd29yayBmb3IgY21zIGNvbXBvbmVudHMgcHJvdmlkZWQgYnkgZmVhdHVyZSBtb2R1bGVzLlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50VHlwZVxuICAgKi9cbiAgZ2V0TW9kdWxlKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IE5nTW9kdWxlUmVmPGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkgJiZcbiAgICAgIHRoaXMuZmVhdHVyZU1vZHVsZXMuZ2V0TW9kdWxlKGNvbXBvbmVudFR5cGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gY29sbGVjdGlvbiBvZiBjb21wb25lbnQgbWFwcGluZyBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZpZWQgbGlzdCBvZlxuICAgKiBjb21wb25lbnQgdHlwZXMuXG4gICAqXG4gICAqIElmIGNvbXBvbmVudCBtYXBwaW5nIGNhbid0IGJlIGRldGVybWluZWQgc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUsIGxhenlcbiAgICogbG9hZGVkIG9uZSwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICpcbiAgICogVG8gbWFrZSBzdXJlIGNvbXBvbmVudCBtYXBwaW5nIGlzIGF2YWlsYWJsZSwgZGV0ZXJtaW5lTWFwcGluZ3MoKVxuICAgKiBzaG91bGQgYmUgY2FsbGVkIGFuZCBjb21wbGV0ZWQgZmlyc3QuXG4gICAqL1xuICBnZXRNYXBwaW5nKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IENtc0NvbXBvbmVudE1hcHBpbmcge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9XG4gICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID8/XG4gICAgICB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIWNvbXBvbmVudENvbmZpZykge1xuICAgICAgaWYgKCF0aGlzLm1pc3NpbmdDb21wb25lbnRzLmluY2x1ZGVzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHRoaXMubWlzc2luZ0NvbXBvbmVudHMucHVzaChjb21wb25lbnRUeXBlKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBObyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gZm91bmQgZm9yIHRoZSBDTVMgY29tcG9uZW50IHR5cGUgJyR7Y29tcG9uZW50VHlwZX0nLlxcbmAsXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgaW1wbGVtZW50IGEgY29tcG9uZW50IGFuZCByZWdpc3RlciBpdCBpbiB0aGUgbWFwcGVyLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgaWYgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBhcyBzb21lIGNvbXBvbmVudHNcbiAgICogY291bGQgYmUgZGlzYWJsZWQgZm9yIHNlcnZlciBzaWRlIHJlbmRlcmluZ3NcbiAgICovXG4gIHNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICByZXR1cm4gIShpc1NTUiAmJiB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/LmRpc2FibGVTU1IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBEZWZlckxvYWRpbmdTdHJhdGVneSBmb3IgY29tcG9uZW50IHR5cGUuXG4gICAqL1xuICBnZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBEZWZlckxvYWRpbmdTdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHM/Lltjb21wb25lbnRUeXBlXT8uZGVmZXJMb2FkaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbXMgZHJpdmVuIGNoaWxkIHJvdXRlcyBmb3IgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0Q2hpbGRSb3V0ZXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcge1xuICAgIGNvbnN0IGNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjb21wb25lbnRUeXBlKSkge1xuICAgICAgICBjb25maWdzLnB1c2godGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5jaGlsZFJvdXRlcyA/PyBbXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcmRpemVDaGlsZFJvdXRlcyhjb25maWdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGF0aWMgZGF0YSBmb3IgdGhlIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgZ2V0U3RhdGljRGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50ID0gQ21zQ29tcG9uZW50PihcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmdcbiAgKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZGF0YSBhcyBUO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YW5kYXJkaXplcyB0aGUgZm9ybWF0IG9mIGBjaGlsZFJvdXRlc2AgY29uZmlnLlxuICAgKlxuICAgKiBTb21lIGBjaGlsZFJvdXRlc2AgY29uZmlncyBhcmUgc2ltcGxlIGFycmF5cyBvZiBSb3V0ZXMgKHdpdGhvdXQgdGhlIG5vdGlvbiBvZiB0aGUgcGFyZW50IHJvdXRlKS5cbiAgICogQnV0IHNvbWUgY29uZmlncyBjYW4gYmUgYW4gb2JqZWN0IHdpdGggY2hpbGRyZW4gcm91dGVzIGFuZCB0aGVpciBwYXJlbnQgZGVmaW5lZCBpbiBzZXBhcmF0ZSBwcm9wZXJ0eS5cbiAgICovXG4gIHByb3RlY3RlZCBzdGFuZGFyZGl6ZUNoaWxkUm91dGVzKFxuICAgIGNoaWxkUm91dGVzQ29uZmlnczogKFJvdXRlW10gfCBDbXNDb21wb25lbnRDaGlsZFJvdXRlc0NvbmZpZylbXVxuICApOiBDbXNDb21wb25lbnRDaGlsZFJvdXRlc0NvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0OiBDbXNDb21wb25lbnRDaGlsZFJvdXRlc0NvbmZpZyA9IHsgY2hpbGRyZW46IFtdIH07XG5cbiAgICAoY2hpbGRSb3V0ZXNDb25maWdzIHx8IFtdKS5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZykpIHtcbiAgICAgICAgcmVzdWx0LmNoaWxkcmVuLnB1c2goLi4uY29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5jaGlsZHJlbi5wdXNoKC4uLihjb25maWcuY2hpbGRyZW4gfHwgW10pKTtcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgICByZXN1bHQucGFyZW50ID0gY29uZmlnLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY21zIGRyaXZlbiBndWFyZHMgZm9yIGNvbXBvbmVudHNcbiAgICovXG4gIGdldEd1YXJkcyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgY29uc3QgZ3VhcmRzID0gbmV3IFNldDxhbnk+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICB0aGlzLmdldE1hcHBpbmcoY29tcG9uZW50VHlwZSk/Lmd1YXJkcz8uZm9yRWFjaCgoZ3VhcmQpID0+XG4gICAgICAgIGd1YXJkcy5hZGQoZ3VhcmQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShndWFyZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpMThuIGtleXMgYXNzb2NpYXRlZCB3aXRoIGNvbXBvbmVudHNcbiAgICovXG4gIGdldEkxOG5LZXlzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBpMThuS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uaTE4bktleXM/LmZvckVhY2goKGtleSkgPT5cbiAgICAgICAgICBpMThuS2V5cy5hZGQoa2V5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShpMThuS2V5cyk7XG4gIH1cbn1cbiJdfQ==