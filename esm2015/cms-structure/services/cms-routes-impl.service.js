import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PageType } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsMappingService } from './cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-mapping.service";
// This service should be exposed in public API only after the refactor planned in https://github.com/SAP/spartacus/issues/7070
let CmsRoutesImplService = class CmsRoutesImplService {
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    cmsRouteExists(url) {
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
        if (this.cmsRouteExists(currentPageLabel)) {
            return true;
        }
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
CmsRoutesImplService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
CmsRoutesImplService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesImplService_Factory() { return new CmsRoutesImplService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsMappingService)); }, token: CmsRoutesImplService, providedIn: "root" });
CmsRoutesImplService = __decorate([
    Injectable({ providedIn: 'root' })
], CmsRoutesImplService);
export { CmsRoutesImplService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3NlcnZpY2VzL2Ntcy1yb3V0ZXMtaW1wbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUF5QixRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUxRCwrSEFBK0g7QUFFL0gsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBb0IsTUFBYyxFQUFVLFVBQTZCO1FBQXJELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFckUsY0FBYyxDQUFDLEdBQVc7UUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQ0wsZ0JBQWdCO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3ZCLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FDbEIsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUN6RSxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxzQkFBc0IsQ0FDcEIsV0FBd0IsRUFDeEIsY0FBd0IsRUFDeEIsVUFBa0IsRUFDbEIsZ0JBQXdCO1FBRXhCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUM1RCxjQUFjLENBQ2YsQ0FBQztRQUNGLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxFQUFFO2dCQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sYUFBYSxDQUNuQixXQUF3QixFQUN4QixTQUFpQixFQUNqQixNQUFlO1FBRWYsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtZQUNBLE1BQU0sUUFBUSxHQUFhO2dCQUN6QixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUU7d0JBQ2pCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTt3QkFDdEIsRUFBRSxFQUFFLFNBQVM7cUJBQ2Q7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7O1lBL0U2QixNQUFNO1lBQXNCLGlCQUFpQjs7O0FBRDlELG9CQUFvQjtJQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsb0JBQW9CLENBZ0ZoQztTQWhGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1JvdXRlLCBQYWdlQ29udGV4dCwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi9jbXMtbWFwcGluZy5zZXJ2aWNlJztcblxuLy8gVGhpcyBzZXJ2aWNlIHNob3VsZCBiZSBleHBvc2VkIGluIHB1YmxpYyBBUEkgb25seSBhZnRlciB0aGUgcmVmYWN0b3IgcGxhbm5lZCBpbiBodHRwczovL2dpdGh1Yi5jb20vU0FQL3NwYXJ0YWN1cy9pc3N1ZXMvNzA3MFxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZXNJbXBsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBjbXNSb3V0ZUV4aXN0cyh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzQ21zRHJpdmVuUm91dGUgPSB1cmwuc3RhcnRzV2l0aCgnLycpO1xuXG4gICAgaWYgKCFpc0Ntc0RyaXZlblJvdXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVQYXRoID0gdXJsLnN1YnN0cigxKTtcblxuICAgIHJldHVybiAoXG4gICAgICBpc0Ntc0RyaXZlblJvdXRlICYmXG4gICAgICAhIXRoaXMucm91dGVyLmNvbmZpZy5maW5kKFxuICAgICAgICAocm91dGU6IENtc1JvdXRlKSA9PlxuICAgICAgICAgIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCAmJiByb3V0ZS5wYXRoID09PSByb3V0ZVBhdGhcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIENtcyBkcml2ZW4gcm91dGluZyBsb2dpYyBpbnRlbmRlZCBmb3IgdXNlIHVzZSBpbiBndWFyZHMsIGVzcGVjaWFsbHkgaW4gY2FuQWN0aXZhdGUgbWV0aG9kLlxuICAgKlxuICAgKiBXaWxsIHJldHVybiB0cnVlLCB3aGVuIGxvZ2ljIHdvbnQgaGF2ZSB0byBtb2RpZnkgcm91dGluZyAoc28gY2FuQWN0aXZhdGUgY291bGQgYmUgZWFzaWx5IHJlc29sdmVkIHRvIHRydWUpXG4gICAqIG9yIHdpbGwgcmV0dXJuIGZhbHNlLCB3aGVuIHJvdXRpbmcgY29uZmlndXJhdGlvbiB3YXMgdXBkYXRlZCBhbmQgcmVkaXJlY3Rpb24gdG8gbmV3bHkgZ2VuZXJhdGVkIHJvdXRlIHdhcyBpbml0aWF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKiBAcGFyYW0gY3VycmVudFVybFxuICAgKi9cbiAgaGFuZGxlQ21zUm91dGVzSW5HdWFyZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgY29tcG9uZW50VHlwZXM6IHN0cmluZ1tdLFxuICAgIGN1cnJlbnRVcmw6IHN0cmluZyxcbiAgICBjdXJyZW50UGFnZUxhYmVsOiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY21zUm91dGVFeGlzdHMoY3VycmVudFBhZ2VMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudFJvdXRlcyA9IHRoaXMuY21zTWFwcGluZy5nZXRSb3V0ZXNGb3JDb21wb25lbnRzKFxuICAgICAgY29tcG9uZW50VHlwZXNcbiAgICApO1xuICAgIGlmIChjb21wb25lbnRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy51cGRhdGVSb3V0aW5nKHBhZ2VDb250ZXh0LCBjdXJyZW50UGFnZUxhYmVsLCBjb21wb25lbnRSb3V0ZXMpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY3VycmVudFVybCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRpbmcoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIHBhZ2VMYWJlbDogc3RyaW5nLFxuICAgIHJvdXRlczogUm91dGVbXVxuICApOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UgJiZcbiAgICAgIHBhZ2VMYWJlbC5zdGFydHNXaXRoKCcvJykgJiZcbiAgICAgIHBhZ2VMYWJlbC5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdSb3V0ZTogQ21zUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IHBhZ2VMYWJlbC5zdWJzdHIoMSksXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4Q21zUm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBwYWdlQ29udGV4dC50eXBlLFxuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW25ld1JvdXRlLCAuLi50aGlzLnJvdXRlci5jb25maWddKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19