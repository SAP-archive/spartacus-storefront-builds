/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CmsService, PageType, RoutingService, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, first, map, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
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
        return this.routingService.getNextPageContext().pipe(switchMap(function (pageContext) {
            return _this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
        }), switchMap(function (_a) {
            var _b = tslib_1.__read(_a, 2), hasPage = _b[0], pageContext = _b[1];
            return hasPage
                ? _this.resolveCmsPageLogic(pageContext, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        }));
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
        return this.cmsService.getPageComponentTypes(pageContext).pipe(switchMap(function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        }), tap(function (_a) {
            var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        }), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
            }
            return canActivate;
        }));
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
        return this.cmsService.hasPage(notFoundCmsPageContext).pipe(switchMap(function (hasNotFoundPage) {
            if (hasNotFoundPage) {
                return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap(function (notFoundIndex) {
                    _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap(function (notFoundIndex) {
                    return _this.cmsService.getPageIndex(pageContext).pipe(
                    // we have to wait for page index update
                    filter(function (index) { return index === notFoundIndex; }));
                }), switchMap(function () { return _this.resolveCmsPageLogic(pageContext, route, state); }));
            }
            return of(false);
        }));
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
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.inject(i1.RoutingService), i0.inject(i1.CmsService), i0.inject(i2.CmsRoutesService), i0.inject(i3.CmsI18nService), i0.inject(i4.CmsGuardsService), i0.inject(i1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUVMLFVBQVUsRUFFVixRQUFRLEVBQ1IsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFFbEU7SUFNRSxzQkFDVSxjQUE4QixFQUM5QixVQUFzQixFQUN0QixTQUEyQixFQUMzQixPQUF1QixFQUN2QixTQUEyQixFQUMzQixtQkFBd0M7UUFMeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDOzs7Ozs7SUFFSixrQ0FBVzs7Ozs7SUFBWCxVQUNFLEtBQWdDLEVBQ2hDLEtBQTBCO1FBRjVCLGlCQWlCQztRQWJDLE9BQU8sSUFBSSxDQUFDLGNBQWMs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LENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJO29CQUM1Qyx3Q0FBd0M7b0JBQ3hDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxhQUFhLEVBQXZCLENBQXVCLENBQUMsQ0FDekM7Z0JBSEQsQ0FHQyxDQUNGLEVBQ0QsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUNyRSxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTNGTSxzQkFBUyxHQUFHLGNBQWMsQ0FBQzs7Z0JBSm5DLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBcEJDLGNBQWM7Z0JBSGQsVUFBVTtnQkFtQkgsZ0JBQWdCO2dCQURoQixjQUFjO2dCQURkLGdCQUFnQjtnQkFidkIsbUJBQW1COzs7dUJBVHJCO0NBMEhDLEFBaEdELElBZ0dDO1NBN0ZZLFlBQVk7OztJQUN2Qix1QkFBa0M7Ozs7O0lBR2hDLHNDQUFzQzs7Ozs7SUFDdEMsa0NBQThCOzs7OztJQUM5QixpQ0FBbUM7Ozs7O0lBQ25DLCtCQUErQjs7Ozs7SUFDL0IsaUNBQW1DOzs7OztJQUNuQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIGZpcnN0LFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2UocGFnZUNvbnRleHQsIHRydWUpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtoYXNQYWdlLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgIGhhc1BhZ2VcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUNtc1BhZ2VMb2dpYyhwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIDogdGhpcy5oYW5kbGVOb3RGb3VuZFBhZ2UocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ21zUGFnZUxvZ2ljKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICksXG4gICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VDb250ZXh0LmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICBzdGF0ZS51cmxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuaGFzUGFnZShub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGhhc05vdEZvdW5kUGFnZSA9PiB7XG4gICAgICAgIGlmIChoYXNOb3RGb3VuZFBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgdGFwKG5vdEZvdW5kSW5kZXggPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChub3RGb3VuZEluZGV4ID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byB3YWl0IGZvciBwYWdlIGluZGV4IHVwZGF0ZVxuICAgICAgICAgICAgICAgIGZpbHRlcihpbmRleCA9PiBpbmRleCA9PT0gbm90Rm91bmRJbmRleClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=