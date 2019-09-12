/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsConfig } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CmsMappingService {
    /**
     * @param {?} config
     * @param {?} platformId
     */
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @param {?} flexType
     * @return {?}
     */
    isComponentEnabled(flexType) {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getRoutesForComponents(componentTypes) {
        /** @type {?} */
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                routes.push(...this.getRoutesForComponent(componentType));
            }
        }
        return routes;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getGuardsForComponents(componentTypes) {
        /** @type {?} */
        const guards = new Set();
        for (const componentType of componentTypes) {
            this.getGuardsForComponent(componentType).forEach((/**
             * @param {?} guard
             * @return {?}
             */
            guard => guards.add(guard)));
        }
        return Array.from(guards);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getI18nKeysForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => i18nKeys.add(key)));
            }
        }
        return Array.from(i18nKeys);
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getRoutesForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getGuardsForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getI18nKeysForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    }
}
CmsMappingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsMappingService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ CmsMappingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsMappingService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CmsMappingService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1UsTUFBaUIsRUFDSSxVQUFrQjtRQUR2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM5QyxDQUFDOzs7OztJQUVKLGtCQUFrQixDQUFDLFFBQWdCOztjQUMzQixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Y0FDekMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekUsVUFBVTtRQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7O2NBQ3ZDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7O2NBQ3ZDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTztRQUM3QixLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtZQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ3hELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQ2xCLENBQUM7U0FDSDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLGNBQXdCOztjQUN6QyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVU7UUFDbEMsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ3hELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ2xCLENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLGFBQXFCOztjQUMzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxhQUFxQjs7Y0FDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRU8sdUJBQXVCLENBQUMsYUFBcUI7O2NBQzdDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDOUQsT0FBTyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pELENBQUM7OztZQTdERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxTQUFTO1lBVTJCLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztJQURuQixtQ0FBeUI7Ozs7O0lBQ3pCLHVDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc01hcHBpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgaXNDb21wb25lbnRFbmFibGVkKGZsZXhUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBjb25zdCBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IgPSAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tmbGV4VHlwZV0gfHwge30pXG4gICAgICAuZGlzYWJsZVNTUjtcbiAgICByZXR1cm4gIShpc1NTUiAmJiBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IpO1xuICB9XG5cbiAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi50aGlzLmdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goZ3VhcmQgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICBnZXRJMThuS2V5c0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbXBvbmVudEVuYWJsZWQoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IFJvdXRlW10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmNoaWxkUm91dGVzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGFueVtdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5ndWFyZHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuaTE4bktleXMpIHx8IFtdO1xuICB9XG59XG4iXX0=