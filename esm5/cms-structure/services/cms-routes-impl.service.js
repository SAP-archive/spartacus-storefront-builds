import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
// This service should be exposed in public API only after the refactor planned in https://github.com/SAP/spartacus/issues/7070
var CmsRoutesImplService = /** @class */ (function () {
    function CmsRoutesImplService(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
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
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
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
        { type: CmsMappingService }
    ]; };
    CmsRoutesImplService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesImplService_Factory() { return new CmsRoutesImplService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesImplService, providedIn: "root" });
    CmsRoutesImplService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CmsRoutesImplService);
    return CmsRoutesImplService;
}());
export { CmsRoutesImplService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2Ntcy1yb3V0ZXMtaW1wbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUF5QixRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUxRCwrSEFBK0g7QUFFL0g7SUFDRSw4QkFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFckUsNkNBQWMsR0FBdEIsVUFBdUIsR0FBVztRQUNoQyxJQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkIsVUFBQyxLQUFlO2dCQUNkLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztZQUF0RSxDQUFzRSxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxxREFBc0IsR0FBdEIsVUFDRSxXQUF3QixFQUN4QixjQUF3QixFQUN4QixVQUFrQixFQUNsQixnQkFBd0I7UUFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQzVELGNBQWMsQ0FDZixDQUFDO1FBQ0YsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyw0Q0FBYSxHQUFyQixVQUNFLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQWU7UUFFZixJQUNFLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVk7WUFDMUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDekIsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BCO1lBQ0EsSUFBTSxRQUFRLEdBQWE7Z0JBQ3pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRTt3QkFDakIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO3dCQUN0QixFQUFFLEVBQUUsU0FBUztxQkFDZDtpQkFDRjthQUNGLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsV0FBRSxRQUFRLEdBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkE5RTJCLE1BQU07Z0JBQXNCLGlCQUFpQjs7O0lBRDlELG9CQUFvQjtRQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsb0JBQW9CLENBZ0ZoQzsrQkF4RkQ7Q0F3RkMsQUFoRkQsSUFnRkM7U0FoRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNSb3V0ZSwgUGFnZUNvbnRleHQsIFBhZ2VUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4vY21zLW1hcHBpbmcuc2VydmljZSc7XG5cbi8vIFRoaXMgc2VydmljZSBzaG91bGQgYmUgZXhwb3NlZCBpbiBwdWJsaWMgQVBJIG9ubHkgYWZ0ZXIgdGhlIHJlZmFjdG9yIHBsYW5uZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL1NBUC9zcGFydGFjdXMvaXNzdWVzLzcwNzBcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVzSW1wbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgY21zUm91dGVFeGlzdHModXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0Ntc0RyaXZlblJvdXRlID0gdXJsLnN0YXJ0c1dpdGgoJy8nKTtcblxuICAgIGlmICghaXNDbXNEcml2ZW5Sb3V0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHVybC5zdWJzdHIoMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgaXNDbXNEcml2ZW5Sb3V0ZSAmJlxuICAgICAgISF0aGlzLnJvdXRlci5jb25maWcuZmluZChcbiAgICAgICAgKHJvdXRlOiBDbXNSb3V0ZSkgPT5cbiAgICAgICAgICByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hDbXNSb3V0ZUNvbnRleHQgJiYgcm91dGUucGF0aCA9PT0gcm91dGVQYXRoXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWlucyBDbXMgZHJpdmVuIHJvdXRpbmcgbG9naWMgaW50ZW5kZWQgZm9yIHVzZSB1c2UgaW4gZ3VhcmRzLCBlc3BlY2lhbGx5IGluIGNhbkFjdGl2YXRlIG1ldGhvZC5cbiAgICpcbiAgICogV2lsbCByZXR1cm4gdHJ1ZSwgd2hlbiBsb2dpYyB3b250IGhhdmUgdG8gbW9kaWZ5IHJvdXRpbmcgKHNvIGNhbkFjdGl2YXRlIGNvdWxkIGJlIGVhc2lseSByZXNvbHZlZCB0byB0cnVlKVxuICAgKiBvciB3aWxsIHJldHVybiBmYWxzZSwgd2hlbiByb3V0aW5nIGNvbmZpZ3VyYXRpb24gd2FzIHVwZGF0ZWQgYW5kIHJlZGlyZWN0aW9uIHRvIG5ld2x5IGdlbmVyYXRlZCByb3V0ZSB3YXMgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICogQHBhcmFtIGN1cnJlbnRVcmxcbiAgICovXG4gIGhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICBjdXJyZW50VXJsOiBzdHJpbmcsXG4gICAgY3VycmVudFBhZ2VMYWJlbDogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNtc1JvdXRlRXhpc3RzKGN1cnJlbnRQYWdlTGFiZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRSb3V0ZXMgPSB0aGlzLmNtc01hcHBpbmcuZ2V0Um91dGVzRm9yQ29tcG9uZW50cyhcbiAgICAgIGNvbXBvbmVudFR5cGVzXG4gICAgKTtcbiAgICBpZiAoY29tcG9uZW50Um91dGVzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY3VycmVudFBhZ2VMYWJlbCwgY29tcG9uZW50Um91dGVzKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGN1cnJlbnRVcmwpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0aW5nKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBwYWdlTGFiZWw6IHN0cmluZyxcbiAgICByb3V0ZXM6IFJvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFICYmXG4gICAgICBwYWdlTGFiZWwuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgICBwYWdlTGFiZWwubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV3Um91dGU6IENtc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBwYWdlTGFiZWwuc3Vic3RyKDEpLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeENtc1JvdXRlQ29udGV4dDoge1xuICAgICAgICAgICAgdHlwZTogcGFnZUNvbnRleHQudHlwZSxcbiAgICAgICAgICAgIGlkOiBwYWdlTGFiZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==