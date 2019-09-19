/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CmsPageGuard {
    /**
     * @param {?} routingService
     * @param {?} cmsService
     * @param {?} cmsRoutes
     * @param {?} cmsI18n
     * @param {?} cmsGuards
     * @param {?} semanticPathService
     * @param {?=} protectedRoutesGuard
     */
    constructor(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
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
    canActivate(route, state) {
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
            result => result ? this.getCmsPage(route, state) : of(result))))
            : this.getCmsPage(route, state);
    }
    /**
     * @private
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    getCmsPage(route, state) {
        return this.routingService.getNextPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsService.getPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext))))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([pageData, pageContext]) => pageData
            ? this.resolveCmsPageLogic(pageContext, pageData, route, state)
            : this.handleNotFoundPage(pageContext, route, state))));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolveCmsPageLogic(pageContext, pageData, route, state) {
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
            /** @type {?} */
            const pageLabel = pageData.label || pageContext.id;
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
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
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} notFoundPage
         * @return {?}
         */
        notFoundPage => {
            if (notFoundPage) {
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
                () => this.resolveCmsPageLogic(pageContext, notFoundPage, route, state))));
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
    { type: SemanticPathService },
    { type: ProtectedRoutesGuard }
];
/** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.CmsRoutesService), i0.ɵɵinject(i3.CmsI18nService), i0.ɵɵinject(i4.CmsGuardsService), i0.ɵɵinject(i1.SemanticPathService), i0.ɵɵinject(i1.ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBRUwsVUFBVSxFQUdWLFFBQVEsRUFDUixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLG1CQUFtQixHQUNwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBS2xFLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7O0lBMkJ2QixZQUVZLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3hCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQ3pCLG1CQUF3QyxFQUN4QyxvQkFBMkM7UUFOM0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7OztJQUVKLFdBQVcsQ0FDVCxLQUFnQyxFQUNoQyxLQUEwQjtRQUUxQjs7V0FFRztRQUNILE9BQU8sSUFBSSxDQUFDLG9CQUFvQjtZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQjtpQkFDdEIsV0FBVyxDQUFDLEtBQUssQ0FBQztpQkFDbEIsSUFBSSxDQUNILFNBQVM7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRSxDQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQ3BELENBQ0Y7WUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7OztJQUVPLFVBQVUsQ0FDaEIsS0FBZ0MsRUFDaEMsS0FBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUNsRCxTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0MsS0FBSyxFQUFFLEVBQ1AsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNoQyxFQUNGLEVBQ0QsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUNwQyxRQUFRO1lBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUN2RCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFFTyxtQkFBbUIsQ0FDekIsV0FBd0IsRUFDeEIsUUFBYyxFQUNkLEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzVELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUUsQ0FDekIsSUFBSSxDQUFDLFNBQVM7YUFDWCxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzthQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQzVDLEVBQ0QsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEQ7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFOztrQkFDOUIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEVBQUU7WUFDbEQsSUFDRSxXQUFXLEtBQUssSUFBSTtnQkFDcEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtnQkFDN0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFDeEM7Z0JBQ0EsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUMxQyxXQUFXLEVBQ1gsY0FBYyxFQUNkLEtBQUssQ0FBQyxHQUFHLEVBQ1QsU0FBUyxDQUNWLENBQUM7YUFDSDtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQUVPLGtCQUFrQixDQUN4QixXQUF3QixFQUN4QixLQUFnQyxFQUNoQyxLQUEwQjs7Y0FFcEIsc0JBQXNCLEdBQWdCO1lBQzFDLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtZQUMzQixFQUFFLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUN6RCxTQUFTOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQzlELEdBQUc7Ozs7Z0JBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLEVBQUMsRUFDRixTQUFTOzs7O2dCQUFDLGFBQWEsQ0FBQyxFQUFFLENBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUk7Z0JBQzVDLHdDQUF3QztnQkFDeEMsTUFBTTs7OztnQkFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxhQUFhLEVBQUMsQ0FDekMsRUFDRixFQUNELFNBQVM7OztnQkFBQyxHQUFHLEVBQUUsQ0FDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQ2xFLENBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O0FBN0lNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztZQUpuQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFuQkMsY0FBYztZQUxkLFVBQVU7WUFvQkgsZ0JBQWdCO1lBRGhCLGNBQWM7WUFEZCxnQkFBZ0I7WUFadkIsbUJBQW1CO1lBRm5CLG9CQUFvQjs7Ozs7SUFzQnBCLHVCQUFrQzs7Ozs7SUE0QmhDLHNDQUF3Qzs7Ozs7SUFDeEMsa0NBQWdDOzs7OztJQUNoQyxpQ0FBbUM7Ozs7O0lBQ25DLCtCQUErQjs7Ozs7SUFDL0IsaUNBQW1DOzs7OztJQUNuQywyQ0FBa0Q7Ozs7O0lBQ2xELDRDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbiAgUHJvdGVjdGVkUm91dGVzR3VhcmQsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgZmlyc3QsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWRSb3V0ZXNHdWFyZDogUHJvdGVjdGVkUm91dGVzR3VhcmQgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMi4wXG4gICAqIFVzZSBjb25zdHJ1Y3RvciB3aXRoIG1vcmUgZGVwZW5kZW5jaWVzIGFuZCBtYWtlIHRoZW0gYWxsIHJlcXVpcmVkLlxuICAgKlxuICAgKiBUT0RPKGlzc3VlOjQ2NDYpIGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjIuMFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIGV4cG9zZSBhcyBgcHJvdGVjdGVkYCBvbmx5IHNlcnZpY2VzIGZyb20gcHVibGljIEFQSTpcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zUm91dGVzOiBDbXNSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zSTE4bjogQ21zSTE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNHdWFyZHM6IENtc0d1YXJkc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb3RlY3RlZFJvdXRlc0d1YXJkPzogUHJvdGVjdGVkUm91dGVzR3VhcmRcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOjQ2NDYpIEV4cGVjdCB0aGF0IGBQcm90ZWN0ZWRSb3V0ZXNHdWFyZGAgZGVwZW5kZW5jeSBpcyByZXF1aXJlZCAocmVtb3ZlIGBpZmAgbG9naWMpXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMucHJvdGVjdGVkUm91dGVzR3VhcmRcbiAgICAgID8gdGhpcy5wcm90ZWN0ZWRSb3V0ZXNHdWFyZFxuICAgICAgICAgIC5jYW5BY3RpdmF0ZShyb3V0ZSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChyZXN1bHQgPT5cbiAgICAgICAgICAgICAgcmVzdWx0ID8gdGhpcy5nZXRDbXNQYWdlKHJvdXRlLCBzdGF0ZSkgOiBvZihyZXN1bHQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgOiB0aGlzLmdldENtc1BhZ2Uocm91dGUsIHN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q21zUGFnZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShwYWdlQ29udGV4dCwgdHJ1ZSkucGlwZShcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKG9mKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoW3BhZ2VEYXRhLCBwYWdlQ29udGV4dF0pID0+XG4gICAgICAgIHBhZ2VEYXRhXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHBhZ2VEYXRhLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgOiB0aGlzLmhhbmRsZU5vdEZvdW5kUGFnZShwYWdlQ29udGV4dCwgcm91dGUsIHN0YXRlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDbXNQYWdlTG9naWMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VEYXRhOiBQYWdlLFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICksXG4gICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBwYWdlRGF0YS5sYWJlbCB8fCBwYWdlQ29udGV4dC5pZDsgLy8gZm9yIGNvbnRlbnQgcGFnZXMgdGhlIHBhZ2UgbGFiZWwgcmV0dXJuZWQgZnJvbSBiYWNrZW5kIGNhbiBiZSBkaWZmZXJlbnQgdGhhbiBJRCBpbml0aWFsbHkgYXNzdW1lZCBmcm9tIHJvdXRlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICFyb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmXG4gICAgICAgICAgIXRoaXMuY21zUm91dGVzLmNtc1JvdXRlRXhpc3QocGFnZUxhYmVsKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICBzdGF0ZS51cmwsXG4gICAgICAgICAgICBwYWdlTGFiZWxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTm90Rm91bmRQYWdlKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgY29uc3Qgbm90Rm91bmRDbXNQYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7XG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZShub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKG5vdEZvdW5kUGFnZSA9PiB7XG4gICAgICAgIGlmIChub3RGb3VuZFBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VJbmRleChub3RGb3VuZENtc1BhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgdGFwKG5vdEZvdW5kSW5kZXggPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2Uuc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgbm90Rm91bmRJbmRleCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChub3RGb3VuZEluZGV4ID0+XG4gICAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byB3YWl0IGZvciBwYWdlIGluZGV4IHVwZGF0ZVxuICAgICAgICAgICAgICAgIGZpbHRlcihpbmRleCA9PiBpbmRleCA9PT0gbm90Rm91bmRJbmRleClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgICB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIG5vdEZvdW5kUGFnZSwgcm91dGUsIHN0YXRlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19