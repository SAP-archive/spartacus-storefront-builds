/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.getGuardsForComponent(componentType).forEach(function (guard) {
                    return guards.add(guard);
                });
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
        var namespaces = new Set();
        try {
            for (var componentTypes_3 = tslib_1.__values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.isComponentEnabled(componentType)) {
                    this.getI18nKeysForComponent(componentType).forEach(function (namespace) {
                        return namespaces.add(namespace);
                    });
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
        return Array.from(namespaces);
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
    /** @nocollapse */ CmsMappingService.ngInjectableDef = i0.defineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(i0.inject(i1.CmsConfig), i0.inject(i0.PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW1hcHBpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUVuRDtJQUlFLDJCQUNVLE1BQWlCLEVBQ0ksVUFBa0I7UUFEdkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDOUMsQ0FBQzs7Ozs7SUFFSiw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsUUFBZ0I7O1lBQzNCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUN6Qyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6RSxVQUFVO1FBQ2IsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLHdCQUF3QixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxrREFBc0I7Ozs7SUFBdEIsVUFBdUIsY0FBd0I7OztZQUN2QyxNQUFNLEdBQUcsRUFBRTs7WUFDakIsS0FBNEIsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQXZDLElBQU0sYUFBYSwyQkFBQTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLEdBQUU7aUJBQzNEO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsa0RBQXNCOzs7O0lBQXRCLFVBQXVCLGNBQXdCOzs7WUFDdkMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFPOztZQUM3QixLQUE0QixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBdkMsSUFBTSxhQUFhLDJCQUFBO2dCQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFDckQsT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFBakIsQ0FBaUIsQ0FDbEIsQ0FBQzthQUNIOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxvREFBd0I7Ozs7SUFBeEIsVUFBeUIsY0FBd0I7OztZQUN6QyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQVU7O1lBQ3BDLEtBQTRCLElBQUEsbUJBQUEsaUJBQUEsY0FBYyxDQUFBLDhDQUFBLDBFQUFFO2dCQUF2QyxJQUFNLGFBQWEsMkJBQUE7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUzt3QkFDM0QsT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztvQkFBekIsQ0FBeUIsQ0FDMUIsQ0FBQztpQkFDSDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixhQUFxQjs7WUFDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUE4QixhQUFxQjs7WUFDM0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRU8sbURBQXVCOzs7OztJQUEvQixVQUFnQyxhQUFxQjs7WUFDN0MsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxPQUFPLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7Z0JBN0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsU0FBUztnQkFVMkIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Ozs0QkFYdkI7Q0FtRUMsQUE5REQsSUE4REM7U0EzRFksaUJBQWlCOzs7Ozs7SUFFMUIsbUNBQXlCOzs7OztJQUN6Qix1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNYXBwaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIGlzQ29tcG9uZW50RW5hYmxlZChmbGV4VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbZmxleFR5cGVdIHx8IHt9KVxuICAgICAgLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIGdldFJvdXRlc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdKTogUm91dGVbXSB7XG4gICAgY29uc3Qgcm91dGVzID0gW107XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbXBvbmVudEVuYWJsZWQoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgcm91dGVzLnB1c2goLi4udGhpcy5nZXRSb3V0ZXNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgZ2V0R3VhcmRzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlczogc3RyaW5nW10pOiBhbnlbXSB7XG4gICAgY29uc3QgZ3VhcmRzID0gbmV3IFNldDxhbnk+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICB0aGlzLmdldEd1YXJkc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKS5mb3JFYWNoKGd1YXJkID0+XG4gICAgICAgIGd1YXJkcy5hZGQoZ3VhcmQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShndWFyZHMpO1xuICB9XG5cbiAgZ2V0STE4bktleXNGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBuYW1lc3BhY2VzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRUeXBlIG9mIGNvbXBvbmVudFR5cGVzKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbXBvbmVudEVuYWJsZWQoY29tcG9uZW50VHlwZSkpIHtcbiAgICAgICAgdGhpcy5nZXRJMThuS2V5c0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlKS5mb3JFYWNoKG5hbWVzcGFjZSA9PlxuICAgICAgICAgIG5hbWVzcGFjZXMuYWRkKG5hbWVzcGFjZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmFtZXNwYWNlcyk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBSb3V0ZVtdIHtcbiAgICBjb25zdCBtYXBwaW5nQ29uZmlnID0gdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtcbiAgICByZXR1cm4gKG1hcHBpbmdDb25maWcgJiYgbWFwcGluZ0NvbmZpZy5jaGlsZFJvdXRlcykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIGdldEd1YXJkc0ZvckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgY29uc3QgbWFwcGluZ0NvbmZpZyA9IHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XG4gICAgcmV0dXJuIChtYXBwaW5nQ29uZmlnICYmIG1hcHBpbmdDb25maWcuZ3VhcmRzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0STE4bktleXNGb3JDb21wb25lbnQoY29tcG9uZW50VHlwZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1hcHBpbmdDb25maWcgPSB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xuICAgIHJldHVybiAobWFwcGluZ0NvbmZpZyAmJiBtYXBwaW5nQ29uZmlnLmkxOG5LZXlzKSB8fCBbXTtcbiAgfVxufVxuIl19