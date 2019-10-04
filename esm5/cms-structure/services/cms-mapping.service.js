/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CmsConfig } from '@spartacus/core';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Please don't put that service in public API.
 *
 */
var CmsMappingService = /** @class */ (function () {
    function CmsMappingService(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @param {?} flexType
     * @return {?}
     */
    CmsMappingService.prototype.isComponentEnabled = /**
     * @param {?} flexType
     * @return {?}
     */
    function (flexType) {
        /** @type {?} */
        var isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        var isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getRoutesForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_1, _a;
        /** @type {?} */
        var routes = [];
        try {
            for (var componentTypes_1 = tslib_1.__values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                var componentType = componentTypes_1_1.value;
                if (this.isComponentEnabled(componentType)) {
                    routes.push.apply(routes, tslib_1.__spread(this.getRoutesForComponent(componentType)));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return)) _a.call(componentTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routes;
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getGuardsForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_2, _a;
        /** @type {?} */
        var guards = new Set();
        try {
            for (var componentTypes_2 = tslib_1.__values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                this.getGuardsForComponent(componentType).forEach((/**
                 * @param {?} guard
                 * @return {?}
                 */
                function (guard) {
                    return guards.add(guard);
                }));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return Array.from(guards);
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getI18nKeysForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_3, _a;
        /** @type {?} */
        var i18nKeys = new Set();
        try {
            for (var componentTypes_3 = tslib_1.__values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.isComponentEnabled(componentType)) {
                    this.getI18nKeysForComponent(componentType).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        return i18nKeys.add(key);
                    }));
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Array.from(i18nKeys);
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getRoutesForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getGuardsForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getI18nKeysForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    };
    CmsMappingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsMappingService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ CmsMappingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.ɵɵinject(i1.CmsConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
    return CmsMappingService;
}());
export { CmsMappingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFLbkQ7SUFJRSwyQkFDVSxNQUFpQixFQUNJLFVBQWtCO1FBRHZDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlDLENBQUM7Ozs7O0lBRUosOENBQWtCOzs7O0lBQWxCLFVBQW1CLFFBQWdCOztZQUMzQixLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7WUFDekMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekUsVUFBVTtRQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsa0RBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQXdCOzs7WUFDdkMsTUFBTSxHQUFHLEVBQUU7O1lBQ2pCLEtBQTRCLElBQUEsbUJBQUEsaUJBQUEsY0FBYyxDQUFBLDhDQUFBLDBFQUFFO2dCQUF2QyxJQUFNLGFBQWEsMkJBQUE7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUMxQyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sbUJBQVMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxHQUFFO2lCQUMzRDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGtEQUFzQjs7OztJQUF0QixVQUF1QixjQUF3Qjs7O1lBQ3ZDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTzs7WUFDN0IsS0FBNEIsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxLQUFLO29CQUNyRCxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUFqQixDQUFpQixFQUNsQixDQUFDO2FBQ0g7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELG9EQUF3Qjs7OztJQUF4QixVQUF5QixjQUF3Qjs7O1lBQ3pDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVTs7WUFDbEMsS0FBNEIsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsR0FBRzt3QkFDckQsT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFBakIsQ0FBaUIsRUFDbEIsQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixhQUFxQjs7WUFDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixhQUFxQjs7WUFDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRU8sbURBQXVCOzs7OztJQUEvQixVQUFnQyxhQUFxQjs7WUFDN0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7Z0JBN0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsU0FBUztnQkFhMkIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Ozs0QkFkdkI7Q0FzRUMsQUE5REQsSUE4REM7U0EzRFksaUJBQWlCOzs7Ozs7SUFFMUIsbUNBQXlCOzs7OztJQUN6Qix1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTWFwcGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBpc0NvbXBvbmVudEVuYWJsZWQoZmxleFR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIGNvbnN0IGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUiA9ICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2ZsZXhUeXBlXSB8fCB7fSlcbiAgICAgIC5kaXNhYmxlU1NSO1xuICAgIHJldHVybiAhKGlzU1NSICYmIGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUik7XG4gIH1cblxuICBnZXRSb3V0ZXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHJvdXRlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgaWYgKHRoaXMuaXNDb21wb25lbnRFbmFibGVkKGNvbXBvbmVudFR5cGUpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKC4uLnRoaXMuZ2V0Um91dGVzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIGdldEd1YXJkc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGd1YXJkcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50VHlwZSBvZiBjb21wb25lbnRUeXBlcykge1xuICAgICAgdGhpcy5nZXRHdWFyZHNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZSkuZm9yRWFjaChndWFyZCA9PlxuICAgICAgICBndWFyZHMuYWRkKGd1YXJkKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ3VhcmRzKTtcbiAgfVxuXG4gIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaTE4bktleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICB0aGlzLmdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goa2V5ID0+XG4gICAgICAgICAgaTE4bktleXMuYWRkKGtleSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaTE4bktleXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZXNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nKTogUm91dGVbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuY2hpbGRSb3V0ZXMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHdWFyZHNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nKTogYW55W10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmd1YXJkcykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIGdldEkxOG5LZXlzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5pMThuS2V5cykgfHwgW107XG4gIH1cbn1cbiJdfQ==