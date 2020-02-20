import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
/**
 * Please don't put that service in public API.
 * */
let CmsRoutesService = class CmsRoutesService {
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    cmsRouteExist(url) {
        const isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        const routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((route) => route.data && route.data.cxCmsRouteContext && route.path === routePath));
    }
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl, currentPageLabel) {
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    updateRouting(pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            const newRoute = {
                path: pageLabel.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: {
                        type: pageContext.type,
                        id: pageLabel,
                    },
                },
            };
            this.router.resetConfig([newRoute, ...this.router.config]);
            return true;
        }
        return false;
    }
};
CmsRoutesService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
CmsRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
CmsRoutesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsRoutesService);
export { CmsRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEOztLQUVLO0FBSUwsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFN0UsYUFBYSxDQUFDLEdBQVc7UUFDdkIsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQ0wsZ0JBQWdCO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZCLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FDbEIsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBd0IsRUFDeEIsY0FBd0IsRUFDeEIsVUFBa0IsRUFDbEIsZ0JBQXdCO1FBRXhCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQzVELGNBQWMsQ0FDZixDQUFDO1FBQ0YsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxhQUFhLENBQ25CLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQWU7UUFFZixJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDekIsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BCO1lBQ0EsTUFBTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRTt3QkFDakIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO3dCQUN0QixFQUFFLEVBQUUsU0FBUztxQkFDZDtpQkFDRjthQUNGLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YsQ0FBQTs7WUEzRTZCLE1BQU07WUFBc0IsaUJBQWlCOzs7QUFEOUQsZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0E0RTVCO1NBNUVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUm91dGUsIFBhZ2VDb250ZXh0LCBQYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21zTWFwcGluZ1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG4vKipcbiAqIFBsZWFzZSBkb24ndCBwdXQgdGhhdCBzZXJ2aWNlIGluIHB1YmxpYyBBUEkuXG4gKiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1JvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlKSB7fVxuXG4gIGNtc1JvdXRlRXhpc3QodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0Ntc0RyaXZlblJvdXRlID0gdXJsLnN0YXJ0c1dpdGgoJy8nKTtcblxuICAgIGlmICghaXNDbXNEcml2ZW5Sb3V0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHVybC5zdWJzdHIoMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNDbXNEcml2ZW5Sb3V0ZSAmJlxuICAgICAgISF0aGlzLnJvdXRlci5jb25maWcuZmluZChcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT5cbiAgICAgICAgICByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiYgcm91dGUucGF0aCA9PT0gcm91dGVQYXRoXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICpcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSwgd2hlbiBsb2dpYyB3b250IGhhdmUgdG8gbW9kaWZ5IHJvdXRpbmcgKHNvIGNhbkFjdGl2YXRlIGNvdWxkIGJlIGVhc2lseSByZXNvbHZlZCB0byB0cnVlKVxuICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICovXG4gIGhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICBjdXJyZW50VXJsOiBzdHJpbmcsXG4gICAgY3VycmVudFBhZ2VMYWJlbDogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlcyA9IHRoaXMuY21zTWFwcGluZy5nZXRSb3V0ZXNGb3JDb21wb25lbnRzKFxuICAgICAgY29tcG9uZW50VHlwZXNcbiAgICApO1xuICAgIGlmIChjb21wb25lbnRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy51cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0LCBjdXJyZW50UGFnZUxhYmVsLCBjb21wb25lbnRSb3V0ZXMpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY3VycmVudFVybCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRpbmcoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VMYWJlbDogc3RyaW5nLFxuICAgIHJvdXRlczogUm91dGVbXVxuICApOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UgJiZcbiAgICAgIHBhZ2VMYWJlbC5zdGFydHNXaXRoKCcvJykgJiZcbiAgICAgIHBhZ2VMYWJlbC5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdSb3V0ZTogQ21zUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHBhZ2VMYWJlbC5zdWJzdHIoMSksXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4Q21zUm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBwYWdlQ29udGV4dC50eXBlLFxuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW25ld1JvdXRlLCAuLi50aGlzLnJvdXRlci5jb25maWddKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19