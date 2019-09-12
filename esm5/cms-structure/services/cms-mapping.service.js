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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUVuRDtJQUlFLDJCQUNVLE1BQWlCLEVBQ0ksVUFBa0I7UUFEdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDOUMsQ0FBQzs7Ozs7SUFFSiw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsUUFBZ0I7O1lBQzNCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUN6Qyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6RSxVQUFVO1FBQ2IsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLHdCQUF3QixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxrREFBc0I7Ozs7SUFBdEIsVUFBdUIsY0FBd0I7OztZQUN2QyxNQUFNLEdBQUcsRUFBRTs7WUFDakIsS0FBNEIsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLEdBQUU7aUJBQzNEO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsa0RBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQXdCOzs7WUFDdkMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFPOztZQUM3QixLQUE0QixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLEtBQUs7b0JBQ3JELE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQWpCLENBQWlCLEVBQ2xCLENBQUM7YUFDSDs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsb0RBQXdCOzs7O0lBQXhCLFVBQXlCLGNBQXdCOzs7WUFDekMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFVOztZQUNsQyxLQUE0QixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQSxHQUFHO3dCQUNyRCxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO29CQUFqQixDQUFpQixFQUNsQixDQUFDO2lCQUNIO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxpREFBcUI7Ozs7O0lBQTdCLFVBQThCLGFBQXFCOztZQUMzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFTyxpREFBcUI7Ozs7O0lBQTdCLFVBQThCLGFBQXFCOztZQUMzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxtREFBdUI7Ozs7O0lBQS9CLFVBQWdDLGFBQXFCOztZQUM3QyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkE3REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxTQUFTO2dCQVUyQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7OzRCQVh2QjtDQW1FQyxBQTlERCxJQThEQztTQTNEWSxpQkFBaUI7Ozs7OztJQUUxQixtQ0FBeUI7Ozs7O0lBQ3pCLHVDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc01hcHBpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgaXNDb21wb25lbnRFbmFibGVkKGZsZXhUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBjb25zdCBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IgPSAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tmbGV4VHlwZV0gfHwge30pXG4gICAgICAuZGlzYWJsZVNTUjtcbiAgICByZXR1cm4gIShpc1NTUiAmJiBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IpO1xuICB9XG5cbiAgZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBSb3V0ZVtdIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50RW5hYmxlZChjb21wb25lbnRUeXBlKSkge1xuICAgICAgICByb3V0ZXMucHVzaCguLi50aGlzLmdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBnZXRHdWFyZHNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IGFueVtdIHtcbiAgICBjb25zdCBndWFyZHMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFR5cGUgb2YgY29tcG9uZW50VHlwZXMpIHtcbiAgICAgIHRoaXMuZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpLmZvckVhY2goZ3VhcmQgPT5cbiAgICAgICAgZ3VhcmRzLmFkZChndWFyZClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGd1YXJkcyk7XG4gIH1cblxuICBnZXRJMThuS2V5c0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGkxOG5LZXlzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbXBvbmVudEVuYWJsZWQoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKS5mb3JFYWNoKGtleSA9PlxuICAgICAgICAgIGkxOG5LZXlzLmFkZChrZXkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKGkxOG5LZXlzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IFJvdXRlW10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmNoaWxkUm91dGVzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3VhcmRzRm9yQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IGFueVtdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5ndWFyZHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuaTE4bktleXMpIHx8IFtdO1xuICB9XG59XG4iXX0=