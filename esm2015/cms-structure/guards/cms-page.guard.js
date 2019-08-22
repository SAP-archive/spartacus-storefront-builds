/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CmsPageGuard {
    /**
     * @param {?} routingService
     * @param {?} cmsService
     * @param {?} cmsRoutes
     * @param {?} cmsI18n
     * @param {?} cmsGuards
     * @param {?} semanticPathService
     */
    constructor(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService) {
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
    canActivate(route, state) {
        return this.routingService.getNextPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext))))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([hasPage, pageContext]) => hasPage
            ? this.resolveCmsPageLogic(pageContext, route, state)
            : this.handleNotFoundPage(pageContext, route, state))));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolveCmsPageLogic(pageContext, route, state) {
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((/**
         * @param {?} componentTypes
         * @return {?}
         */
        componentTypes => this.cmsGuards
            .cmsPageCanActivate(componentTypes, route, state)
            .pipe(withLatestFrom(of(componentTypes))))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([canActivate, componentTypes]) => {
            if (canActivate === true) {
                this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([canActivate, componentTypes]) => {
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
            }
            return canActivate;
        })));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    handleNotFoundPage(pageContext, route, state) {
        /** @type {?} */
        const notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.hasPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} hasNotFoundPage
         * @return {?}
         */
        hasNotFoundPage => {
            if (hasNotFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                notFoundIndex => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                })), switchMap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                notFoundIndex => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter((/**
                 * @param {?} index
                 * @return {?}
                 */
                index => index === notFoundIndex))))), switchMap((/**
                 * @return {?}
                 */
                () => this.resolveCmsPageLogic(pageContext, route, state))));
            }
            return of(false);
        })));
    }
}
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService },
    { type: SemanticPathService }
];
/** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBRUwsVUFBVSxFQUVWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLbEUsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7OztJQUd2QixZQUNVLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQzNCLG1CQUF3QztRQUx4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7Ozs7OztJQUVKLFdBQVcsQ0FDVCxLQUFnQyxFQUNoQyxLQUEwQjtRQUUxQixPQUFPLElBQUks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QUk7Z0JBQzVDLHdDQUF3QztnQkFDeEMsTUFBTTs7OztnQkFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxhQUFhLEVBQUMsQ0FDekMsRUFDRixFQUNELFNBQVM7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBQyxDQUNyRSxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7QUE1Rk0sc0JBQVMsR0FBRyxjQUFjLENBQUM7O1lBSm5DLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXJCQyxjQUFjO1lBSGQsVUFBVTtZQW9CSCxnQkFBZ0I7WUFEaEIsY0FBYztZQURkLGdCQUFnQjtZQWR2QixtQkFBbUI7Ozs7O0lBc0JuQix1QkFBa0M7Ozs7O0lBR2hDLHNDQUFzQzs7Ozs7SUFDdEMsa0NBQThCOzs7OztJQUM5QixpQ0FBbUM7Ozs7O0lBQ25DLCtCQUErQjs7Ozs7SUFDL0IsaUNBQW1DOzs7OztJQUNuQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbWFudGljUGF0aFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIGZpcnN0LFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2UocGFnZUNvbnRleHQsIHRydWUpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtoYXNQYWdlLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgIGhhc1BhZ2VcbiAgICAgICAgICA/IHRoaXMucmVzb2x2ZUNtc1BhZ2VMb2dpYyhwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIDogdGhpcy5oYW5kbGVOb3RGb3VuZFBhZ2UocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ21zUGFnZUxvZ2ljKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudFR5cGVzID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbkFjdGl2YXRlID09PSB0cnVlICYmXG4gICAgICAgICAgIXJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiZcbiAgICAgICAgICAhdGhpcy5jbXNSb3V0ZXMuY21zUm91dGVFeGlzdChwYWdlQ29udGV4dC5pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgc3RhdGUudXJsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5vdEZvdW5kUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IG5vdEZvdW5kQ21zUGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0ge1xuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2Uobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChoYXNOb3RGb3VuZFBhZ2UgPT4ge1xuICAgICAgICBpZiAoaGFzTm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcChub3RGb3VuZEluZGV4ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIG5vdEZvdW5kSW5kZXgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAobm90Rm91bmRJbmRleCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gd2FpdCBmb3IgcGFnZSBpbmRleCB1cGRhdGVcbiAgICAgICAgICAgICAgICBmaWx0ZXIoaW5kZXggPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCByb3V0ZSwgc3RhdGUpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19