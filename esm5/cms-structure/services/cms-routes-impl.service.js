import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsComponentsService } from './cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-components.service";
// This service should be exposed in public API only after the refactor planned in https://github.com/SAP/spartacus/issues/7070
var CmsRoutesImplService = /** @class */ (function () {
    function CmsRoutesImplService(router, cmsComponentsService) {
        this.router = router;
        this.cmsComponentsService = cmsComponentsService;
    }
    CmsRoutesImplService.prototype.cmsRouteExists = function (url) {
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
    CmsRoutesImplService.prototype.handleCmsRoutesInGuard = function (pageContext, componentTypes, currentUrl, currentPageLabel) {
        if (this.cmsRouteExists(currentPageLabel)) {
            return true;
        }
        var componentRoutes = this.cmsComponentsService.getChildRoutes(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    CmsRoutesImplService.prototype.updateRouting = function (pageContext, pageLabel, routes) {
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
    CmsRoutesImplService.ctorParameters = function () { return [
        { type: Router },
        { type: CmsComponentsService }
    ]; };
    CmsRoutesImplService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesImplService_Factory() { return new CmsRoutesImplService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsComponentsService)); }, token: CmsRoutesImplService, providedIn: "root" });
    CmsRoutesImplService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CmsRoutesImplService);
    return CmsRoutesImplService;
}());
export { CmsRoutesImplService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2Ntcy1yb3V0ZXMtaW1wbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUF5QixRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVoRSwrSEFBK0g7QUFFL0g7SUFDRSw4QkFDVSxNQUFjLEVBQ2Qsb0JBQTBDO1FBRDFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2pELENBQUM7SUFFSSw2Q0FBYyxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUNMLGdCQUFnQjtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN2QixVQUFDLEtBQWU7Z0JBQ2QsT0FBQSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTO1lBQXRFLENBQXNFLENBQ3pFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILHFEQUFzQixHQUF0QixVQUNFLFdBQXdCLEVBQ3hCLGNBQXdCLEVBQ3hCLFVBQWtCLEVBQ2xCLGdCQUF3QjtRQUV4QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDOUQsY0FBYyxDQUNmLENBQUM7UUFDRixJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLDRDQUFhLEdBQXJCLFVBQ0UsV0FBd0IsRUFDeEIsU0FBaUIsRUFDakIsTUFBZTtRQUVmLElBQ0UsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWTtZQUMxQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN6QixTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEI7WUFDQSxJQUFNLFFBQVEsR0FBYTtnQkFDekIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixTQUFTLEVBQUUsbUJBQW1CO2dCQUM5QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFO3dCQUNqQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7d0JBQ3RCLEVBQUUsRUFBRSxTQUFTO3FCQUNkO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxXQUFFLFFBQVEsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWhGaUIsTUFBTTtnQkFDUSxvQkFBb0I7OztJQUh6QyxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1GaEM7K0JBM0ZEO0NBMkZDLEFBbkZELElBbUZDO1NBbkZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUm91dGUsIFBhZ2VDb250ZXh0LCBQYWdlVHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG4vLyBUaGlzIHNlcnZpY2Ugc2hvdWxkIGJlIGV4cG9zZWQgaW4gcHVibGljIEFQSSBvbmx5IGFmdGVyIHRoZSByZWZhY3RvciBwbGFubmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9TQVAvc3BhcnRhY3VzL2lzc3Vlcy83MDcwXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENtc1JvdXRlc0ltcGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBjbXNSb3V0ZUV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQ21zRHJpdmVuUm91dGUgPSB1cmwuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgaWYgKCFpc0Ntc0RyaXZlblJvdXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVQYXRoID0gdXJsLnN1YnN0cigxKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpc0Ntc0RyaXZlblJvdXRlICYmXG4gICAgICAhIXRoaXMucm91dGVyLmNvbmZpZy5maW5kKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PlxuICAgICAgICAgIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJiByb3V0ZS5wYXRoID09PSByb3V0ZVBhdGhcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgKlxuICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgKi9cbiAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIGN1cnJlbnRVcmw6IHN0cmluZyxcbiAgICBjdXJyZW50UGFnZUxhYmVsOiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY21zUm91dGVFeGlzdHMoY3VycmVudFBhZ2VMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlcyA9IHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0Q2hpbGRSb3V0ZXMoXG4gICAgICBjb21wb25lbnRUeXBlc1xuICAgICk7XG4gICAgaWYgKGNvbXBvbmVudFJvdXRlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnVwZGF0ZVJvdXRpbmcocGFnZUNvbnRleHQsIGN1cnJlbnRQYWdlTGFiZWwsIGNvbXBvbmVudFJvdXRlcykpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGluZyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZUxhYmVsOiBzdHJpbmcsXG4gICAgcm91dGVzOiBSb3V0ZVtdXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgcGFnZUxhYmVsLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICAgcGFnZUxhYmVsLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1JvdXRlOiBDbXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcGFnZUxhYmVsLnN1YnN0cigxKSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogcm91dGVzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hDbXNSb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHBhZ2VDb250ZXh0LnR5cGUsXG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbbmV3Um91dGUsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=