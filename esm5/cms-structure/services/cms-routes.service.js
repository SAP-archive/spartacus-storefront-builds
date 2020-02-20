import { __decorate, __read, __spread } from "tslib";
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
var CmsRoutesService = /** @class */ (function () {
    function CmsRoutesService(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    CmsRoutesService.prototype.cmsRouteExist = function (url) {
        var isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        var routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find(function (route) {
                return route.data && route.data.cxCmsRouteContext && route.path === routePath;
            }));
    };
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    CmsRoutesService.prototype.handleCmsRoutesInGuard = function (pageContext, componentTypes, currentUrl, currentPageLabel) {
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    CmsRoutesService.prototype.updateRouting = function (pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            var newRoute = {
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
            this.router.resetConfig(__spread([newRoute], this.router.config));
            return true;
        }
        return false;
    };
    CmsRoutesService.ctorParameters = function () { return [
        { type: Router },
        { type: CmsMappingService }
    ]; };
    CmsRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
    CmsRoutesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsRoutesService);
    return CmsRoutesService;
}());
export { CmsRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQXlCLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTFEOztLQUVLO0FBSUw7SUFDRSwwQkFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFN0Usd0NBQWEsR0FBYixVQUFjLEdBQVc7UUFDdkIsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQ0wsZ0JBQWdCO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZCLFVBQUMsS0FBZTtnQkFDZCxPQUFBLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBdEUsQ0FBc0UsQ0FDekUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsaURBQXNCLEdBQXRCLFVBQ0UsV0FBd0IsRUFDeEIsY0FBd0IsRUFDeEIsVUFBa0IsRUFDbEIsZ0JBQXdCO1FBRXhCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQzVELGNBQWMsQ0FDZixDQUFDO1FBQ0YsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyx3Q0FBYSxHQUFyQixVQUNFLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQWU7UUFFZixJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDekIsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BCO1lBQ0EsSUFBTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRTt3QkFDakIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO3dCQUN0QixFQUFFLEVBQUUsU0FBUztxQkFDZDtpQkFDRjthQUNGLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsV0FBRSxRQUFRLEdBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkExRTJCLE1BQU07Z0JBQXNCLGlCQUFpQjs7O0lBRDlELGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBNEU1QjsyQkF4RkQ7Q0F3RkMsQUE1RUQsSUE0RUM7U0E1RVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNSb3V0ZSwgUGFnZUNvbnRleHQsIFBhZ2VUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbi8qKlxuICogUGxlYXNlIGRvbid0IHB1dCB0aGF0IHNlcnZpY2UgaW4gcHVibGljIEFQSS5cbiAqICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UpIHt9XG5cbiAgY21zUm91dGVFeGlzdCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQ21zRHJpdmVuUm91dGUgPSB1cmwuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgaWYgKCFpc0Ntc0RyaXZlblJvdXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVQYXRoID0gdXJsLnN1YnN0cigxKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpc0Ntc0RyaXZlblJvdXRlICYmXG4gICAgICAhIXRoaXMucm91dGVyLmNvbmZpZy5maW5kKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PlxuICAgICAgICAgIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJiByb3V0ZS5wYXRoID09PSByb3V0ZVBhdGhcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgKlxuICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgKi9cbiAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIGN1cnJlbnRVcmw6IHN0cmluZyxcbiAgICBjdXJyZW50UGFnZUxhYmVsOiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcG9uZW50Um91dGVzID0gdGhpcy5jbXNNYXBwaW5nLmdldFJvdXRlc0ZvckNvbXBvbmVudHMoXG4gICAgICBjb21wb25lbnRUeXBlc1xuICAgICk7XG4gICAgaWYgKGNvbXBvbmVudFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQsIGN1cnJlbnRQYWdlTGFiZWwsIGNvbXBvbmVudFJvdXRlcykpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGluZyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZUxhYmVsOiBzdHJpbmcsXG4gICAgcm91dGVzOiBSb3V0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgcGFnZUxhYmVsLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICAgcGFnZUxhYmVsLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1JvdXRlOiBDbXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcGFnZUxhYmVsLnN1YnN0cigxKSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogcm91dGVzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hDbXNSb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHBhZ2VDb250ZXh0LnR5cGUsXG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbbmV3Um91dGUsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=