/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.getGuardsForComponent(componentType).forEach(guard => guards.add(guard));
        }
        return Array.from(guards);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getI18nKeysForComponents(componentTypes) {
        /** @type {?} */
        const namespaces = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach(namespace => namespaces.add(namespace));
            }
        }
        return Array.from(namespaces);
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
/** @nocollapse */ CmsMappingService.ngInjectableDef = i0.defineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.inject(i1.CmsConfig), i0.inject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1UsTUFBaUIsRUFDSSxVQUFrQjtRQUR2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM5QyxDQUFDOzs7OztJQUVKLGtCQUFrQixDQUFDLFFBQWdCOztjQUMzQixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Y0FDekMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekUsVUFBVTtRQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7O2NBQ3ZDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssTUFBTSxhQUFhLElBQUksY0FBYyxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBd0I7O2NBQ3ZDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTztRQUM3QixLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTtZQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ3hELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ2xCLENBQUM7U0FDSDtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLGNBQXdCOztjQUN6QyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVU7UUFDcEMsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDOUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FDMUIsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsYUFBcUI7O2NBQzNDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDOUQsT0FBTyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUFDLGFBQXFCOztjQUMzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxhQUFxQjs7Y0FDN0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7O1lBN0RGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFNBQVM7WUFVMkIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7O0lBRG5CLG1DQUF5Qjs7Ozs7SUFDekIsdUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTWFwcGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBpc0NvbXBvbmVudEVuYWJsZWQoZmxleFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIGNvbnN0IGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUiA9ICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2ZsZXhUeXBlXSB8fCB7fSlcbiAgICAgIC5kaXNhYmxlU1NSO1xuICAgIHJldHVybiAhKGlzU1NSICYmIGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUik7XG4gIH1cblxuICBnZXRSb3V0ZXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnRFbmFibGVkKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKC4uLnRoaXMuZ2V0Um91dGVzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIGdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRHdWFyZHNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZSkuZm9yRWFjaChndWFyZCA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbmFtZXNwYWNlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnRFbmFibGVkKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHRoaXMuZ2V0STE4bktleXNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZSkuZm9yRWFjaChuYW1lc3BhY2UgPT5cbiAgICAgICAgICBuYW1lc3BhY2VzLmFkZChuYW1lc3BhY2UpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKG5hbWVzcGFjZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZXNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nKTogUm91dGVbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuY2hpbGRSb3V0ZXMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHdWFyZHNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYW55W10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmd1YXJkcykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5pMThuS2V5cykgfHwgW107XG4gIH1cbn1cbiJdfQ==