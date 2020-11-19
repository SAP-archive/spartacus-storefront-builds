import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBZSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUdMLFNBQVMsRUFDVCxTQUFTLEdBRVYsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFbEU7O0dBRUc7QUFJSCxNQUFNLE9BQU8sb0JBQW9CO0lBVS9CLFlBQ1ksTUFBaUIsRUFDSSxVQUFrQixFQUN2QyxjQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFaMUMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLGFBQVEsR0FBcUQsRUFBRSxDQUFDO1FBRXhFLFdBQVc7UUFDSCxxQkFBZ0IsR0FHcEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU1YLENBQUM7SUFFSjs7Ozs7OztPQU9HO0lBQ0gsaUJBQWlCLENBQUMsY0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2hCLDRFQUE0RTtZQUM1RSw0RUFBNEU7WUFDNUUsMEJBQTBCO1lB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LE1BQU0sU0FBQyxXQUFXO1lBcEJkLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ01vZHVsZVJlZiwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnLFxuICBDbXNDb21wb25lbnRNYXBwaW5nLFxuICBDbXNDb25maWcsXG4gIGRlZXBNZXJnZSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZlciwgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGVzU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZS1tb2R1bGVzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2l0aCBsb2dpYyByZWxhdGVkIHRvIHJlc29sdmluZyBjb21wb25lbnQgZnJvbSBjbXMgbWFwcGluZ1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50c1NlcnZpY2Uge1xuICBwcml2YXRlIG1pc3NpbmdDb21wb25lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIG1hcHBpbmdzOiB7IFtjb21wb25lbnRUeXBlOiBzdHJpbmddOiBDbXNDb21wb25lbnRNYXBwaW5nIH0gPSB7fTtcblxuICAvLyBjb250YWluc1xuICBwcml2YXRlIG1hcHBpbmdSZXNvbHZlcnM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPlxuICA+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByb3RlY3RlZCBmZWF0dXJlTW9kdWxlcz86IEZlYXR1cmVNb2R1bGVzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBjYWxsZWQgdG8gbWFrZSBzdXJlIGFsbCBjb21wb25lbnQgbWFwcGluZ3MgYXJlIGRldGVybWluZWQsXG4gICAqIGVzcGVjaWFsbHkgbGF6eSBsb2FkZWQgb25lcy5cbiAgICpcbiAgICogSXQncyByZWNvbW1lbmRlZCB3YXkgdG8gbWFrZSBzdXJlIGFsbCBvdGhlciBtZXRob2RzIG9mIENtc0NvbXBvbmVudFNlcnZpY2VcbiAgICogd2lsbCBiZSBhYmxlIHRvIHdvcmsgc3luY2hyb25vdXNseSBmb3IgYXNrZWQgY29tcG9uZW50IHR5cGVzIGFuZCBhdm9pZCByaXNrXG4gICAqIG9mIHBvdGVudGlhbCBlcnJvcnMgdGhhdCBjb3VsZCBiZSB0aHJvd24gb3RoZXJ3aXNlLlxuICAgKi9cbiAgZGV0ZXJtaW5lTWFwcGluZ3MoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiB7XG4gICAgICAvLyB3ZSB1c2UgZGVmZXIsIHRvIGJlIHN1cmUgdGhlIGxvZ2ljIGJlbG93IHVzZWQgdG8gY29tcG9zZSBmaW5hbCBvYnNlcnZhYmxlXG4gICAgICAvLyB3aWxsIGJlIGV4ZWN1dGVkIGF0IHN1YnNjcmlwdGlvbiB0aW1lICh3aXRoIHVwIHRvIGRhdGUgc3RhdGUgYXQgdGhlIHRpbWUsXG4gICAgICAvLyB3aGVuIGl0IHdpbGwgYmUgbmVlZGVkKVxuICAgICAgY29uc3QgZmVhdHVyZVJlc29sdmVycyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGljQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgY29tcG9uZW50IHR5cGUgaXMgbWFuYWdlZCBieSBmZWF0dXJlIG1vZHVsZVxuICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVNb2R1bGVzLmhhc0ZlYXR1cmVGb3IoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgICAgIGZlYXR1cmVSZXNvbHZlcnMucHVzaChcbiAgICAgICAgICAgICAgLy8gd2UgZGVsZWdhdGUgcG9wdWxhdGluZyB0aGlzLm1hcHBpbmdzIHRvIGZlYXR1cmUgcmVzb2x2ZXJcbiAgICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTWFwcGluZ1Jlc29sdmVyKGNvbXBvbmVudFR5cGUsIHN0YXRpY0NvbmZpZylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNpbXBseSB1c2Ugb25seSBzdGF0aWMgY29uZmlnXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gc3RhdGljQ29uZmlnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZVJlc29sdmVycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKGZlYXR1cmVSZXNvbHZlcnMpLnBpcGUobWFwVG8oY29tcG9uZW50VHlwZXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihjb21wb25lbnRUeXBlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVNYXBwaW5nUmVzb2x2ZXIoXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nLFxuICAgIHN0YXRpY0NvbmZpZz86IENtc0NvbXBvbmVudE1hcHBpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRNYXBwaW5nPiB7XG4gICAgaWYgKCF0aGlzLm1hcHBpbmdSZXNvbHZlcnMuaGFzKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICBjb25zdCBtYXBwaW5nUmVzb2x2ZXIkID0gdGhpcy5mZWF0dXJlTW9kdWxlc1xuICAgICAgICAuZ2V0Q21zTWFwcGluZyhjb21wb25lbnRUeXBlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKGZlYXR1cmVDb21wb25lbnRNYXBwaW5nKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSB0cmVhdCBjbXMgbWFwcGluZyBjb25maWd1cmF0aW9uIGZyb20gYSBmZWF0dXJlIGFzIGEgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gYnkgYXBwL3N0YXRpYyBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzW2NvbXBvbmVudFR5cGVdID0gZGVlcE1lcmdlKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgZmVhdHVyZUNvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubWFwcGluZ1Jlc29sdmVycy5kZWxldGUoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgdGhpcy5tYXBwaW5nUmVzb2x2ZXJzLnNldChjb21wb25lbnRUeXBlLCBtYXBwaW5nUmVzb2x2ZXIkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwcGluZ1Jlc29sdmVycy5nZXQoY29tcG9uZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmVhdHVyZSBtb2R1bGUgZm9yIGEgY21zIGNvbXBvbmVudC5cbiAgICogSXQgd2lsbCBvbmx5IHdvcmsgZm9yIGNtcyBjb21wb25lbnRzIHByb3ZpZGVkIGJ5IGZlYXR1cmUgbW9kdWxlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudFR5cGVcbiAgICovXG4gIGdldE1vZHVsZShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBOZ01vZHVsZVJlZjxhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mZWF0dXJlTW9kdWxlcy5oYXNGZWF0dXJlRm9yKGNvbXBvbmVudFR5cGUpICYmXG4gICAgICB0aGlzLmZlYXR1cmVNb2R1bGVzLmdldE1vZHVsZShjb21wb25lbnRUeXBlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNvbGxlY3Rpb24gb2YgY29tcG9uZW50IG1hcHBpbmcgY29uZmlndXJhdGlvbiBmb3Igc3BlY2lmaWVkIGxpc3Qgb2ZcbiAgICogY29tcG9uZW50IHR5cGVzLlxuICAgKlxuICAgKiBJZiBjb21wb25lbnQgbWFwcGluZyBjYW4ndCBiZSBkZXRlcm1pbmVkIHN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlLCBsYXp5XG4gICAqIGxvYWRlZCBvbmUsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqXG4gICAqIFRvIG1ha2Ugc3VyZSBjb21wb25lbnQgbWFwcGluZyBpcyBhdmFpbGFibGUsIGRldGVybWluZU1hcHBpbmdzKClcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBhbmQgY29tcGxldGVkIGZpcnN0LlxuICAgKi9cbiAgZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPVxuICAgICAgdGhpcy5tYXBwaW5nc1tjb21wb25lbnRUeXBlXSA/P1xuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50cz8uW2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKCFjb21wb25lbnRDb25maWcpIHtcbiAgICAgIGlmICghdGhpcy5taXNzaW5nQ29tcG9uZW50cy5pbmNsdWRlcyhjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLm1pc3NpbmdDb21wb25lbnRzLnB1c2goY29tcG9uZW50VHlwZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgTm8gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciB0aGUgQ01TIGNvbXBvbmVudCB0eXBlICcke2NvbXBvbmVudFR5cGV9Jy5cXG5gLFxuICAgICAgICAgIGBNYWtlIHN1cmUgeW91IGltcGxlbWVudCBhIGNvbXBvbmVudCBhbmQgcmVnaXN0ZXIgaXQgaW4gdGhlIG1hcHBlci5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIGlmIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgYXMgc29tZSBjb21wb25lbnRzXG4gICAqIGNvdWxkIGJlIGRpc2FibGVkIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdzXG4gICAqL1xuICBzaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5kaXNhYmxlU1NSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gRGVmZXJMb2FkaW5nU3RyYXRlZ3kgZm9yIGNvbXBvbmVudCB0eXBlLlxuICAgKi9cbiAgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzPy5bY29tcG9uZW50VHlwZV0/LmRlZmVyTG9hZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY21zIGRyaXZlbiBjaGlsZCByb3V0ZXMgZm9yIGNvbXBvbmVudHNcbiAgICovXG4gIGdldENoaWxkUm91dGVzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnIHtcbiAgICBjb25zdCBjb25maWdzID0gW107XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgY29uZmlncy5wdXNoKHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uY2hpbGRSb3V0ZXMgPz8gW10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YW5kYXJkaXplQ2hpbGRSb3V0ZXMoY29uZmlncyk7XG4gIH1cblxuICAvKipcbiAgICogU3RhbmRhcmRpemVzIHRoZSBmb3JtYXQgb2YgYGNoaWxkUm91dGVzYCBjb25maWcuXG4gICAqXG4gICAqIFNvbWUgYGNoaWxkUm91dGVzYCBjb25maWdzIGFyZSBzaW1wbGUgYXJyYXlzIG9mIFJvdXRlcyAod2l0aG91dCB0aGUgbm90aW9uIG9mIHRoZSBwYXJlbnQgcm91dGUpLlxuICAgKiBCdXQgc29tZSBjb25maWdzIGNhbiBiZSBhbiBvYmplY3Qgd2l0aCBjaGlsZHJlbiByb3V0ZXMgYW5kIHRoZWlyIHBhcmVudCBkZWZpbmVkIGluIHNlcGFyYXRlIHByb3BlcnR5LlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YW5kYXJkaXplQ2hpbGRSb3V0ZXMoXG4gICAgY2hpbGRSb3V0ZXNDb25maWdzOiAoUm91dGVbXSB8IENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnKVtdXG4gICk6IENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnIHtcbiAgICBjb25zdCByZXN1bHQ6IENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnID0geyBjaGlsZHJlbjogW10gfTtcblxuICAgIChjaGlsZFJvdXRlc0NvbmZpZ3MgfHwgW10pLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgICAgICByZXN1bHQuY2hpbGRyZW4ucHVzaCguLi5jb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LmNoaWxkcmVuLnB1c2goLi4uKGNvbmZpZy5jaGlsZHJlbiB8fCBbXSkpO1xuICAgICAgICBpZiAoY29uZmlnLnBhcmVudCkge1xuICAgICAgICAgIHJlc3VsdC5wYXJlbnQgPSBjb25maWcucGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbXMgZHJpdmVuIGd1YXJkcyBmb3IgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0R3VhcmRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0TWFwcGluZyhjb21wb25lbnRUeXBlKT8uZ3VhcmRzPy5mb3JFYWNoKChndWFyZCkgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGkxOG4ga2V5cyBhc3NvY2lhdGVkIHdpdGggY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0STE4bktleXMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXIoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRNYXBwaW5nKGNvbXBvbmVudFR5cGUpPy5pMThuS2V5cz8uZm9yRWFjaCgoa2V5KSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxufVxuIl19