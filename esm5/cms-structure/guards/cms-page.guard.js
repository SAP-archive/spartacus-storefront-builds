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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUVMLFVBQVUsRUFHVixRQUFRLEVBQ1IsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRWxFO0lBTUUsc0JBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkIsRUFDM0IsbUJBQXdDO1FBTHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7Ozs7O0lBRUosa0NBQVc7Ozs7O0lBQVgsVUFDRSxLQUFnQyxFQUNoQyxLQUEwQjtRQUY1QixpQkFpQkM7UUFiQyxPQUFPLElBQUks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QyxVQUFBLGFBQWE7b0JBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQy9ELENBQUMsRUFBQyxFQUNGLFNBQVM7Ozs7Z0JBQUMsVUFBQSxhQUFhO29CQUNyQixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUk7b0JBQzVDLHdDQUF3QztvQkFDeEMsTUFBTTs7OztvQkFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxhQUFhLEVBQXZCLENBQXVCLEVBQUMsQ0FDekM7Z0JBSEQsQ0FHQyxFQUNGLEVBQ0QsU0FBUzs7O2dCQUFDO29CQUNSLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFBakUsQ0FBaUUsRUFDbEUsQ0FDRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQWpHTSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7Z0JBSm5DLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbkJDLGNBQWM7Z0JBSmQsVUFBVTtnQkFtQkgsZ0JBQWdCO2dCQURoQixjQUFjO2dCQURkLGdCQUFnQjtnQkFadkIsbUJBQW1COzs7dUJBVHJCO0NBK0hDLEFBdEdELElBc0dDO1NBbkdZLFlBQVk7OztJQUN2Qix1QkFBa0M7Ozs7O0lBR2hDLHNDQUFzQzs7Ozs7SUFDdEMsa0NBQThCOzs7OztJQUM5QixpQ0FBbUM7Ozs7O0lBQ25DLCtCQUErQjs7Ozs7SUFDL0IsaUNBQW1DOzs7OztJQUNuQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgZmlyc3QsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2UocGFnZUNvbnRleHQsIHRydWUpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtwYWdlRGF0YSwgcGFnZUNvbnRleHRdKSA9PlxuICAgICAgICBwYWdlRGF0YVxuICAgICAgICAgID8gdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCBwYWdlRGF0YSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIDogdGhpcy5oYW5kbGVOb3RGb3VuZFBhZ2UocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ21zUGFnZUxvZ2ljKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlRGF0YTogUGFnZSxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudFR5cGVzID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gcGFnZURhdGEubGFiZWwgfHwgcGFnZUNvbnRleHQuaWQ7IC8vIGZvciBjb250ZW50IHBhZ2VzIHRoZSBwYWdlIGxhYmVsIHJldHVybmVkIGZyb20gYmFja2VuZCBjYW4gYmUgZGlmZmVyZW50IHRoYW4gSUQgaW5pdGlhbGx5IGFzc3VtZWQgZnJvbSByb3V0ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VMYWJlbClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgc3RhdGUudXJsLFxuICAgICAgICAgICAgcGFnZUxhYmVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5vdEZvdW5kUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IG5vdEZvdW5kQ21zUGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0ge1xuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2Uobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChub3RGb3VuZFBhZ2UgPT4ge1xuICAgICAgICBpZiAobm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcChub3RGb3VuZEluZGV4ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIG5vdEZvdW5kSW5kZXgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAobm90Rm91bmRJbmRleCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gd2FpdCBmb3IgcGFnZSBpbmRleCB1cGRhdGVcbiAgICAgICAgICAgICAgICBmaWx0ZXIoaW5kZXggPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCBub3RGb3VuZFBhZ2UsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==