/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, PageType, ProtectedRoutesGuard, RoutingService, SemanticPathService, } from '@spartacus/core';
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
    function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
        this.protectedRoutesGuard = protectedRoutesGuard;
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
        /**
         * TODO(issue:4646) Expect that `ProtectedRoutesGuard` dependency is required (remove `if` logic)
         */
        return this.protectedRoutesGuard
            ? this.protectedRoutesGuard
                .canActivate(route)
                .pipe(switchMap((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return result ? _this.getCmsPage(route, state) : of(result);
            })))
            : this.getCmsPage(route, state);
    };
    /**
     * @private
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.getCmsPage = /**
     * @private
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
            return _this.cmsService.getPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), pageData = _b[0], pageContext = _b[1];
            return pageData
                ? _this.resolveCmsPageLogic(pageContext, pageData, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        })));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.resolveCmsPageLogic = /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (pageContext, pageData, route, state) {
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
            /** @type {?} */
            var pageLabel = pageData.label || pageContext.id;
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
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
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} notFoundPage
         * @return {?}
         */
        function (notFoundPage) {
            if (notFoundPage) {
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
                function () {
                    return _this.resolveCmsPageLogic(pageContext, notFoundPage, route, state);
                })));
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
        { type: SemanticPathService },
        { type: ProtectedRoutesGuard }
    ]; };
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
    return CmsPageGuard;
}());
export { CmsPageGuard };
if (false) {
    /** @type {?} */
    CmsPageGuard.guardName;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.routingService;
    /**
     * @type {?}
     * @protected
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
     * @protected
     */
    CmsPageGuard.prototype.semanticPathService;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.protectedRoutesGuard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUVMLFVBQVUsRUFHVixRQUFRLEVBQ1Isb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLEdBQUcsRUFDSCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUVsRTtJQThCRSxzQkFFWSxjQUE4QixFQUM5QixVQUFzQixFQUN4QixTQUEyQixFQUMzQixPQUF1QixFQUN2QixTQUEyQixFQUN6QixtQkFBd0MsRUFDeEMsb0JBQTJDO1FBTjNDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ3pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtJQUNwRCxDQUFDOzs7Ozs7SUFFSixrQ0FBVzs7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QUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBN0lNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztnQkFKbkMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFuQkMsY0FBYztnQkFMZCxVQUFVO2dCQW9CSCxnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0JBRGQsZ0JBQWdCO2dCQVp2QixtQkFBbUI7Z0JBRm5CLG9CQUFvQjs7O3VCQVJ0QjtDQTRLQyxBQWxKRCxJQWtKQztTQS9JWSxZQUFZOzs7SUFDdkIsdUJBQWtDOzs7OztJQTRCaEMsc0NBQXdDOzs7OztJQUN4QyxrQ0FBZ0M7Ozs7O0lBQ2hDLGlDQUFtQzs7Ozs7SUFDbkMsK0JBQStCOzs7OztJQUMvQixpQ0FBbUM7Ozs7O0lBQ25DLDJDQUFrRDs7Ozs7SUFDbEQsNENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ21zU2VydmljZSxcbiAgUGFnZSxcbiAgUGFnZUNvbnRleHQsXG4gIFBhZ2VUeXBlLFxuICBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBmaXJzdCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0d1YXJkc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtZ3VhcmRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSTE4blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1JvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgZ3VhcmROYW1lID0gJ0Ntc1BhZ2VHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZFJvdXRlc0d1YXJkOiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yLjBcbiAgICogVXNlIGNvbnN0cnVjdG9yIHdpdGggbW9yZSBkZXBlbmRlbmNpZXMgYW5kIG1ha2UgdGhlbSBhbGwgcmVxdWlyZWQuXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6NDY0NikgZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gZXhwb3NlIGFzIGBwcm90ZWN0ZWRgIG9ubHkgc2VydmljZXMgZnJvbSBwdWJsaWMgQVBJOlxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvdGVjdGVkUm91dGVzR3VhcmQ/OiBQcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6NDY0NikgRXhwZWN0IHRoYXQgYFByb3RlY3RlZFJvdXRlc0d1YXJkYCBkZXBlbmRlbmN5IGlzIHJlcXVpcmVkIChyZW1vdmUgYGlmYCBsb2dpYylcbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5wcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICAgICAgPyB0aGlzLnByb3RlY3RlZFJvdXRlc0d1YXJkXG4gICAgICAgICAgLmNhbkFjdGl2YXRlKHJvdXRlKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHJlc3VsdCA9PlxuICAgICAgICAgICAgICByZXN1bHQgPyB0aGlzLmdldENtc1BhZ2Uocm91dGUsIHN0YXRlKSA6IG9mKHJlc3VsdClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICA6IHRoaXMuZ2V0Q21zUGFnZShyb3V0ZSwgc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNQYWdlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKHBhZ2VDb250ZXh0LCB0cnVlKS5waXBlKFxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20ob2YocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKChbcGFnZURhdGEsIHBhZ2VDb250ZXh0XSkgPT5cbiAgICAgICAgcGFnZURhdGFcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUNtc1BhZ2VMb2dpYyhwYWdlQ29udGV4dCwgcGFnZURhdGEsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICA6IHRoaXMuaGFuZGxlTm90Rm91bmRQYWdlKHBhZ2VDb250ZXh0LCByb3V0ZSwgc3RhdGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNtc1BhZ2VMb2dpYyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZURhdGE6IFBhZ2UsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRUeXBlcyA9PlxuICAgICAgICB0aGlzLmNtc0d1YXJkc1xuICAgICAgICAgIC5jbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXMsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbShvZihjb21wb25lbnRUeXBlcykpKVxuICAgICAgKSxcbiAgICAgIHRhcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jbXNJMThuLmxvYWRDaHVua3NGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IHBhZ2VEYXRhLmxhYmVsIHx8IHBhZ2VDb250ZXh0LmlkOyAvLyBmb3IgY29udGVudCBwYWdlcyB0aGUgcGFnZSBsYWJlbCByZXR1cm5lZCBmcm9tIGJhY2tlbmQgY2FuIGJlIGRpZmZlcmVudCB0aGFuIElEIGluaXRpYWxseSBhc3N1bWVkIGZyb20gcm91dGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbkFjdGl2YXRlID09PSB0cnVlICYmXG4gICAgICAgICAgIXJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiZcbiAgICAgICAgICAhdGhpcy5jbXNSb3V0ZXMuY21zUm91dGVFeGlzdChwYWdlTGFiZWwpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgIHN0YXRlLnVybCxcbiAgICAgICAgICAgIHBhZ2VMYWJlbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOb3RGb3VuZFBhZ2UoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICBjb25zdCBub3RGb3VuZENtc1BhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHtcbiAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIGlkOiB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UuZ2V0KCdub3RGb3VuZCcpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlKG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAobm90Rm91bmRQYWdlID0+IHtcbiAgICAgICAgaWYgKG5vdEZvdW5kUGFnZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KG5vdEZvdW5kQ21zUGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICB0YXAobm90Rm91bmRJbmRleCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5zZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0LCBub3RGb3VuZEluZGV4KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKG5vdEZvdW5kSW5kZXggPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHdhaXQgZm9yIHBhZ2UgaW5kZXggdXBkYXRlXG4gICAgICAgICAgICAgICAgZmlsdGVyKGluZGV4ID0+IGluZGV4ID09PSBub3RGb3VuZEluZGV4KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUNtc1BhZ2VMb2dpYyhwYWdlQ29udGV4dCwgbm90Rm91bmRQYWdlLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=