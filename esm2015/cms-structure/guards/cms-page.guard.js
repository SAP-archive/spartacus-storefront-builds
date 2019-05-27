/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CmsService, RoutingService, SemanticPathService, } from '@spartacus/core';
import { of } from 'rxjs';
import { first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
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
        return this.routingService.getNextPageContext().pipe(switchMap(pageContext => this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)))), switchMap(([hasPage, pageContext]) => {
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
                if (pageContext.id !== this.semanticPathService.get('notFound')) {
                    this.routingService.go({ cxRoute: 'notFound' });
                }
                return of(false);
            }
        }));
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
/** @nocollapse */ CmsPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(i0.inject(i1.RoutingService), i0.inject(i1.CmsService), i0.inject(i2.CmsRoutesService), i0.inject(i3.CmsI18nService), i0.inject(i4.CmsGuardsService), i0.inject(i1.SemanticPathService)); }, token: CmsPageGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBRUwsVUFBVSxFQUNWLGNBQWMsRUFDZCxtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLbEUsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7OztJQUd2QixZQUNVLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLFNBQTJCLEVBQzNCLE9BQXVCLEVBQ3ZCLFNBQTJCLEVBQzNCLG1CQUF3QztRQUx4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7Ozs7OztJQUVKLFdBQVcsQ0FDVCxLQUFnQyxFQUNoQyxLQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ2xELFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QyxLQUFLLEVBQUUsRUFDUCxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ2hDLENBQ0YsRUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzVELFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUN6QixJQUFJLENBQUMsU0FBUztxQkFDWCxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztxQkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUM1QyxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDdEQ7Z0JBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFDRSxXQUFXLEtBQUssSUFBSTt3QkFDcEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQjt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzdDO3dCQUNBLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FDMUMsV0FBVyxFQUNYLGNBQWMsRUFDZCxLQUFLLENBQUMsR0FBRyxDQUNWLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxXQUFXLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7QUExRE0sc0JBQVMsR0FBRyxjQUFjLENBQUM7O1lBSm5DLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJDLGNBQWM7WUFEZCxVQUFVO1lBVUgsZ0JBQWdCO1lBRGhCLGNBQWM7WUFEZCxnQkFBZ0I7WUFOdkIsbUJBQW1COzs7OztJQWNuQix1QkFBa0M7Ozs7O0lBR2hDLHNDQUFzQzs7Ozs7SUFDdEMsa0NBQThCOzs7OztJQUM5QixpQ0FBbUM7Ozs7O0lBQ25DLCtCQUErQjs7Ozs7SUFDL0IsaUNBQW1DOzs7OztJQUNuQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENtc1NlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNHdWFyZHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWd1YXJkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXJvdXRlcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgc3RhdGljIGd1YXJkTmFtZSA9ICdDbXNQYWdlR3VhcmQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1JvdXRlczogQ21zUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0kxOG46IENtc0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zR3VhcmRzOiBDbXNHdWFyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2UocGFnZUNvbnRleHQsIHRydWUpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShvZihwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKFtoYXNQYWdlLCBwYWdlQ29udGV4dF0pID0+IHtcbiAgICAgICAgaWYgKGhhc1BhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChjb21wb25lbnRUeXBlcyA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc0d1YXJkc1xuICAgICAgICAgICAgICAgIC5jbXNQYWdlQ2FuQWN0aXZhdGUoY29tcG9uZW50VHlwZXMsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICAgICAgICAucGlwZSh3aXRoTGF0ZXN0RnJvbShvZihjb21wb25lbnRUeXBlcykpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRhcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhbkFjdGl2YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbXNJMThuLmxvYWRDaHVua3NGb3JDb21wb25lbnRzKGNvbXBvbmVudFR5cGVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKFtjYW5BY3RpdmF0ZSwgY29tcG9uZW50VHlwZXNdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZSA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICFyb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuY21zUm91dGVzLmNtc1JvdXRlRXhpc3QocGFnZUNvbnRleHQuaWQpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNtc1JvdXRlcy5oYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlcyxcbiAgICAgICAgICAgICAgICAgIHN0YXRlLnVybFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGNhbkFjdGl2YXRlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwYWdlQ29udGV4dC5pZCAhPT0gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbm90Rm91bmQnKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdub3RGb3VuZCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19