/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, PageType, RoutingService, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, first, map, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../services/cms-routes.service";
import * as i3 from "../services/cms-i18n.service";
import * as i4 from "../services/cms-guards.service";
var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        return this.routingService.getNextPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), hasPage = _b[0], pageContext = _b[1];
            return hasPage
                ? _this.resolveCmsPageLogic(pageContext, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        })));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.resolveCmsPageLogic = /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (pageContext, route, state) {
        var _this = this;
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((/**
         * @param {?} componentTypes
         * @return {?}
         */
        function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
            }
            return canActivate;
        })));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.handleNotFoundPage = /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (pageContext, route, state) {
        var _this = this;
        /** @type {?} */
        var notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.hasPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} hasNotFoundPage
         * @return {?}
         */
        function (hasNotFoundPage) {
            if (hasNotFoundPage) {
                return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                function (notFoundIndex) {
                    _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                })), switchMap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                function (notFoundIndex) {
                    return _this.cmsService.getPageIndex(pageContext).pipe(
                    // we have to wait for page index update
                    filter((/**
                     * @param {?} index
                     * @return {?}
                     */
                    function (index) { return index === notFoundIndex; })));
                })), switchMap((/**
                 * @return {?}
                 */
                function () { return _this.resolveCmsPageLogic(pageContext, route, state); })));
            }
            return of(false);
        })));
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
    return CmsPageGuard;
}());
export { CmsPageGuard };
if (false) {
    /** @type {?} */
    CmsPageGuard.guardName;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsRoutes;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsI18n;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsGuards;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUVMLFVBQVUsRUFFVixRQUFRLEVBQ1IsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRWxFO0lBTUUsc0JBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkIsRUFDM0IsbUJBQXdDO1FBTHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7Ozs7O0lBRUosa0NBQVc7Ozs7O0lBQVgsVUFDRSxLQUFnQyxFQUNoQyxLQUEwQjtRQUY1QixpQkFpQkM7UUFiQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ2xELFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVc7WUFDbkIsT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QyxLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hDO1FBSEQsQ0FHQyxFQUNGLEVBQ0QsU0FBUzs7OztRQUFDLFVBQUMsRUFBc0I7Z0JBQXRCLDBCQUFzQixFQUFyQixlQUFPLEVBQUUsbUJBQVc7WUFDOUIsT0FBQSxPQUFPO2dCQUNMLENBQUMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7UUFGdEQsQ0FFc0QsRUFDdkQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFFTywwQ0FBbUI7Ozs7Ozs7SUFBM0IsVUFDRSxXQUF3QixFQUN4QixLQUFnQyxFQUNoQyxLQUEwQjtRQUg1QixpQkFnQ0M7UUEzQkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVM7Ozs7UUFBQyxVQUFBLGNBQWM7WUFDdEIsT0FBQSxLQUFJLENBQUMsU0FBUztpQkFDWCxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztpQkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUYzQyxDQUUyQyxFQUM1QyxFQUNELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQTZCO2dCQUE3QiwwQkFBNkIsRUFBNUIsbUJBQVcsRUFBRSxzQkFBYztZQUMvQixJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEQ7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxFQUE2QjtnQkFBN0IsMEJBQTZCLEVBQTVCLG1CQUFXLEVBQUUsc0JBQWM7WUFDL0IsSUFDRSxXQUFXLEtBQUssSUFBSTtnQkFDcEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzdDO2dCQUNBLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDMUMsV0FBVyxFQUNYLGNBQWMsRUFDZCxLQUFLLENBQUMsR0FBRyxDQUNWLENBQUM7YUFDSDtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVPLHlDQUFrQjs7Ozs7OztJQUExQixVQUNFLFdBQXdCLEVBQ3hCLEtBQWdDLEVBQ2hDLEtBQTBCO1FBSDVCLGlCQTRCQzs7WUF2Qk8sc0JBQXNCLEdBQWdCO1lBQzFDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtZQUMzQixFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUN6RCxTQUFTOzs7O1FBQUMsVUFBQSxlQUFlO1lBQ3ZCLElBQUksZUFBZSxFQUFFO2dCQUNuQixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUM5RCxHQUFHOzs7O2dCQUFDLFVBQUEsYUFBYTtvQkFDZixLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztnQkFBQyxVQUFBLGFBQWE7b0JBQ3JCLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTtvQkFDNUMsd0NBQXdDO29CQUN4QyxNQUFNOzs7O29CQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLGFBQWEsRUFBdkIsQ0FBdUIsRUFBQyxDQUN6QztnQkFIRCxDQUdDLEVBQ0YsRUFDRCxTQUFTOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFuRCxDQUFtRCxFQUFDLENBQ3JFLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBNUZNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztnQkFKbkMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFyQkMsY0FBYztnQkFIZCxVQUFVO2dCQW9CSCxnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0JBRGQsZ0JBQWdCO2dCQWR2QixtQkFBbUI7Ozt1QkFUckI7Q0E0SEMsQUFqR0QsSUFpR0M7U0E5RlksWUFBWTs7O0lBQ3ZCLHVCQUFrQzs7Ozs7SUFHaEMsc0NBQXNDOzs7OztJQUN0QyxrQ0FBOEI7Ozs7O0lBQzlCLGlDQUFtQzs7Ozs7SUFDbkMsK0JBQStCOzs7OztJQUMvQixpQ0FBbUM7Ozs7O0lBQ25DLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUGFnZUNvbnRleHQsXG4gIFBhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgZmlyc3QsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgZ3VhcmROYW1lID0gJ0Ntc1BhZ2VHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLmNtc1NlcnZpY2UuaGFzUGFnZShwYWdlQ29udGV4dCwgdHJ1ZSkucGlwZShcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKG9mKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoW2hhc1BhZ2UsIHBhZ2VDb250ZXh0XSkgPT5cbiAgICAgICAgaGFzUGFnZVxuICAgICAgICAgID8gdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgOiB0aGlzLmhhbmRsZU5vdEZvdW5kUGFnZShwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDbXNQYWdlTG9naWMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICksXG4gICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VDb250ZXh0LmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICBzdGF0ZS51cmxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuaGFzUGFnZShub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGhhc05vdEZvdW5kUGFnZSA9PiB7XG4gICAgICAgIGlmIChoYXNOb3RGb3VuZFBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgdGFwKG5vdEZvdW5kSW5kZXggPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChub3RGb3VuZEluZGV4ID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byB3YWl0IGZvciBwYWdlIGluZGV4IHVwZGF0ZVxuICAgICAgICAgICAgICAgIGZpbHRlcihpbmRleCA9PiBpbmRleCA9PT0gbm90Rm91bmRJbmRleClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=