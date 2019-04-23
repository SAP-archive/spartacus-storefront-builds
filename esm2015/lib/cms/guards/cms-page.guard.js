/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsService, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { CmsGuardsService } from '../services/cms-guards.service';
import { CmsI18nService } from '../services/cms-i18n.service';
import { CmsRoutesService } from '../services/cms-routes.service';
export class CmsPageGuard {
    /**
     * @param {?} routingService
     * @param {?} cmsService
     * @param {?} cmsRoutes
     * @param {?} cmsI18n
     * @param {?} cmsGuards
     */
    constructor(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.routingService.getPageContext().pipe(switchMap(pageContext => this.cmsService.hasPage(pageContext).pipe(first(), withLatestFrom(of(pageContext)))), switchMap(([hasPage, pageContext]) => {
            if (hasPage) {
                return this.cmsService.getPageComponentTypes(pageContext).pipe(switchMap(componentTypes => this.cmsGuards
                    .cmsPageCanActivate(componentTypes, route, state)
                    .pipe(withLatestFrom(of(componentTypes)))), tap(([canActivate, componentTypes]) => {
                    if (canActivate === true) {
                        this.cmsI18n.loadChunksForComponents(componentTypes);
                    }
                }), map(([canActivate, componentTypes]) => {
                    if (canActivate === true &&
                        !route.data.cxCmsRouteContext &&
                        !this.cmsRoutes.cmsRouteExist(pageContext.id)) {
                        return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url);
                    }
                    return canActivate;
                }));
            }
            else {
                if (pageContext.id !== '/not-found') {
                    this.routingService.go(['/not-found']);
                }
                return of(false);
            }
        }));
    }
}
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService }
];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBRUwsVUFBVSxFQUNWLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHbEUsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7O0lBR3ZCLFlBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkI7UUFKM0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQzs7Ozs7O0lBRUosV0FBVyxDQUNULEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzlDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEtBQUssRUFBRSxFQUNQLGNBQWMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDaEMsQ0FDRixFQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDNUQsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQ3pCLElBQUksQ0FBQyxTQUFTO3FCQUNYLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO3FCQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQzVDLEVBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO3dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUN0RDtnQkFDSCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUNFLFdBQVcsS0FBSyxJQUFJO3dCQUNwQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCO3dCQUM3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFDN0M7d0JBQ0EsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUMxQyxXQUFXLEVBQ1gsY0FBYyxFQUNkLEtBQUssQ0FBQyxHQUFHLENBQ1YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLFdBQVcsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDeEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7QUF6RE0sc0JBQVMsR0FBRyxjQUFjLENBQUM7O1lBRm5DLFVBQVU7Ozs7WUFWVCxjQUFjO1lBRGQsVUFBVTtZQVNILGdCQUFnQjtZQURoQixjQUFjO1lBRGQsZ0JBQWdCOzs7O0lBTXZCLHVCQUFrQzs7Ozs7SUFHaEMsc0NBQXNDOzs7OztJQUN0QyxrQ0FBOEI7Ozs7O0lBQzlCLGlDQUFtQzs7Ozs7SUFDbkMsK0JBQStCOzs7OztJQUMvQixpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuY21zU2VydmljZS5oYXNQYWdlKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20ob2YocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKChbaGFzUGFnZSwgcGFnZUNvbnRleHRdKSA9PiB7XG4gICAgICAgIGlmIChoYXNQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoY29tcG9uZW50VHlwZXMgPT5cbiAgICAgICAgICAgICAgdGhpcy5jbXNHdWFyZHNcbiAgICAgICAgICAgICAgICAuY21zUGFnZUNhbkFjdGl2YXRlKGNvbXBvbmVudFR5cGVzLCByb3V0ZSwgc3RhdGUpXG4gICAgICAgICAgICAgICAgLnBpcGUod2l0aExhdGVzdEZyb20ob2YoY29tcG9uZW50VHlwZXMpKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0YXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY21zSTE4bi5sb2FkQ2h1bmtzRm9yQ29tcG9uZW50cyhjb21wb25lbnRUeXBlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGUgPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAhcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmNtc1JvdXRlcy5jbXNSb3V0ZUV4aXN0KHBhZ2VDb250ZXh0LmlkKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbXNSb3V0ZXMuaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZXMsXG4gICAgICAgICAgICAgICAgICBzdGF0ZS51cmxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjYW5BY3RpdmF0ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGFnZUNvbnRleHQuaWQgIT09ICcvbm90LWZvdW5kJykge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhbJy9ub3QtZm91bmQnXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19