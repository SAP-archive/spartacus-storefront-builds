/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return this.routingService.getNextPageContext().pipe(switchMap(pageContext => this.cmsService.hasPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)))), switchMap(([hasPage, pageContext]) => hasPage
            ? this.resolveCmsPageLogic(pageContext, route, state)
            : this.handleNotFoundPage(pageContext, route, state)));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolveCmsPageLogic(pageContext, route, state) {
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
        return this.cmsService.hasPage(notFoundCmsPageContext).pipe(switchMap(hasNotFoundPage => {
            if (hasNotFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap(notFoundIndex => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap(notFoundIndex => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter(index => index === notFoundIndex))), switchMap(() => this.resolveCmsPageLogic(pageContext, route, state)));
            }
            return of(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBRUwsVUFBVSxFQUVWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxHQUFHLEVBQ0gsU0FBUyxFQUNULEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUtsRSxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBR3ZCLFlBQ1UsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsU0FBMkIsRUFDM0IsT0FBdUIsRUFDdkIsU0FBMkIsRUFDM0IsbUJBQXdDO1FBTHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7Ozs7O0lBRUosV0FBVyxDQUNULEtBQWdDLEVBQ2hDLEtBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLGNBQWMs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QUssYUFBYSxDQUFDLENBQ3pDLENBQ0YsRUFDRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDckUsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O0FBM0ZNLHNCQUFTLEdBQUcsY0FBYyxDQUFDOztZQUpuQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFwQkMsY0FBYztZQUhkLFVBQVU7WUFtQkgsZ0JBQWdCO1lBRGhCLGNBQWM7WUFEZCxnQkFBZ0I7WUFidkIsbUJBQW1COzs7OztJQXFCbkIsdUJBQWtDOzs7OztJQUdoQyxzQ0FBc0M7Ozs7O0lBQ3RDLGtDQUE4Qjs7Ozs7SUFDOUIsaUNBQW1DOzs7OztJQUNuQywrQkFBK0I7Ozs7O0lBQy9CLGlDQUFtQzs7Ozs7SUFDbkMsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDbXNTZXJ2aWNlLFxuICBQYWdlQ29udGV4dCxcbiAgUGFnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBmaXJzdCxcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zR3VhcmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1ndWFyZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJMThuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUm91dGVzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1yb3V0ZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHN0YXRpYyBndWFyZE5hbWUgPSAnQ21zUGFnZUd1YXJkJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNSb3V0ZXM6IENtc1JvdXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbXNJMThuOiBDbXNJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNtc0d1YXJkczogQ21zR3VhcmRzU2VydmljZSxcbiAgICBwcml2YXRlIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuY21zU2VydmljZS5oYXNQYWdlKHBhZ2VDb250ZXh0LCB0cnVlKS5waXBlKFxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgICAgd2l0aExhdGVzdEZyb20ob2YocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKChbaGFzUGFnZSwgcGFnZUNvbnRleHRdKSA9PlxuICAgICAgICBoYXNQYWdlXG4gICAgICAgICAgPyB0aGlzLnJlc29sdmVDbXNQYWdlTG9naWMocGFnZUNvbnRleHQsIHJvdXRlLCBzdGF0ZSlcbiAgICAgICAgICA6IHRoaXMuaGFuZGxlTm90Rm91bmRQYWdlKHBhZ2VDb250ZXh0LCByb3V0ZSwgc3RhdGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNtc1BhZ2VMb2dpYyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbXBvbmVudFR5cGVzID0+XG4gICAgICAgIHRoaXMuY21zR3VhcmRzXG4gICAgICAgICAgLmNtc1BhZ2VDYW5BY3RpdmF0ZShjb21wb25lbnRUeXBlcywgcm91dGUsIHN0YXRlKVxuICAgICAgICAgIC5waXBlKHdpdGhMYXRlc3RGcm9tKG9mKGNvbXBvbmVudFR5cGVzKSkpXG4gICAgICApLFxuICAgICAgdGFwKChbY2FuQWN0aXZhdGUsIGNvbXBvbmVudFR5cGVzXSkgPT4ge1xuICAgICAgICBpZiAoY2FuQWN0aXZhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNtc0kxOG4ubG9hZENodW5rc0ZvckNvbXBvbmVudHMoY29tcG9uZW50VHlwZXMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoW2NhbkFjdGl2YXRlLCBjb21wb25lbnRUeXBlc10pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbkFjdGl2YXRlID09PSB0cnVlICYmXG4gICAgICAgICAgIXJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiZcbiAgICAgICAgICAhdGhpcy5jbXNSb3V0ZXMuY21zUm91dGVFeGlzdChwYWdlQ29udGV4dC5pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zUm91dGVzLmhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGVzLFxuICAgICAgICAgICAgc3RhdGUudXJsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5vdEZvdW5kUGFnZShcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcm91dGU6IENtc0FjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IG5vdEZvdW5kQ21zUGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0ge1xuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgaWQ6IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ25vdEZvdW5kJyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmhhc1BhZ2Uobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChoYXNOb3RGb3VuZFBhZ2UgPT4ge1xuICAgICAgICBpZiAoaGFzTm90Rm91bmRQYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRQYWdlSW5kZXgobm90Rm91bmRDbXNQYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgIHRhcChub3RGb3VuZEluZGV4ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIG5vdEZvdW5kSW5kZXgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAobm90Rm91bmRJbmRleCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0KS5waXBlKFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gd2FpdCBmb3IgcGFnZSBpbmRleCB1cGRhdGVcbiAgICAgICAgICAgICAgICBmaWx0ZXIoaW5kZXggPT4gaW5kZXggPT09IG5vdEZvdW5kSW5kZXgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5yZXNvbHZlQ21zUGFnZUxvZ2ljKHBhZ2VDb250ZXh0LCByb3V0ZSwgc3RhdGUpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19