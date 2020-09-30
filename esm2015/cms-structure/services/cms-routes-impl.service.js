import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { deepMerge, PageType, } from '@spartacus/core';
import { PageLayoutComponent } from '../page/page-layout/page-layout.component';
import { CmsComponentsService } from './cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./cms-components.service";
// This service should be exposed in public API only after the refactor planned in https://github.com/SAP/spartacus/issues/7070
export class CmsRoutesImplService {
    constructor(router, cmsComponentsService) {
        this.router = router;
        this.cmsComponentsService = cmsComponentsService;
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
        var _a;
        if (this.cmsRouteExists(currentPageLabel)) {
            return true;
        }
        const childRoutesConfig = this.cmsComponentsService.getChildRoutes(componentTypes);
        if ((_a = childRoutesConfig === null || childRoutesConfig === void 0 ? void 0 : childRoutesConfig.children) === null || _a === void 0 ? void 0 : _a.length) {
            if (this.updateRouting(pageContext, currentPageLabel, childRoutesConfig)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    updateRouting(pageContext, pageLabel, childRoutesConfig) {
        var _a, _b;
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            const newRoute = {
                path: pageLabel.substr(1),
                component: PageLayoutComponent,
                children: childRoutesConfig.children,
                data: deepMerge({}, (_b = (_a = childRoutesConfig === null || childRoutesConfig === void 0 ? void 0 : childRoutesConfig.parent) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {}, {
                    cxCmsRouteContext: {
                        type: pageContext.type,
                        id: pageLabel,
                    },
                }),
            };
            this.router.resetConfig([newRoute, ...this.router.config]);
            return true;
        }
        return false;
    }
}
CmsRoutesImplService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesImplService_Factory() { return new CmsRoutesImplService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CmsComponentsService)); }, token: CmsRoutesImplService, providedIn: "root" });
CmsRoutesImplService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CmsRoutesImplService.ctorParameters = () => [
    { type: Router },
    { type: CmsComponentsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3NlcnZpY2VzL2Ntcy1yb3V0ZXMtaW1wbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFHTCxTQUFTLEVBRVQsUUFBUSxHQUNULE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFaEUsK0hBQStIO0FBRS9ILE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDVSxNQUFjLEVBQ2Qsb0JBQTBDO1FBRDFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2pELENBQUM7SUFFSSxjQUFjLENBQUMsR0FBVztRQUNoQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sQ0FDTCxnQkFBZ0I7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdkIsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUNsQixLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQ3pFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILHNCQUFzQixDQUNwQixXQUF3QixFQUN4QixjQUF3QixFQUN4QixVQUFrQixFQUNsQixnQkFBd0I7O1FBRXhCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ2hFLGNBQWMsQ0FDZixDQUFDO1FBRUYsVUFBSSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxRQUFRLDBDQUFFLE1BQU0sRUFBRTtZQUN2QyxJQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLEVBQ3BFO2dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxhQUFhLENBQ25CLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLGlCQUFnRDs7UUFFaEQsSUFDRSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO1lBQzFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQjtZQUNBLE1BQU0sUUFBUSxHQUFhO2dCQUN6QixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2dCQUNwQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUUsY0FBRSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxNQUFNLDBDQUFFLElBQUksbUNBQUksRUFBRSxFQUFFO29CQUN6RCxpQkFBaUIsRUFBRTt3QkFDakIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO3dCQUN0QixFQUFFLEVBQUUsU0FBUztxQkFDZDtpQkFDRixDQUFDO2FBQ0gsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7WUF0RkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBWnpCLE1BQU07WUFTTixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcsXG4gIENtc1JvdXRlLFxuICBkZWVwTWVyZ2UsXG4gIFBhZ2VDb250ZXh0LFxuICBQYWdlVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5cbi8vIFRoaXMgc2VydmljZSBzaG91bGQgYmUgZXhwb3NlZCBpbiBwdWJsaWMgQVBJIG9ubHkgYWZ0ZXIgdGhlIHJlZmFjdG9yIHBsYW5uZWQgaW4gaHR0cHM6Ly9naXRodWIuY29tL1NBUC9zcGFydGFjdXMvaXNzdWVzLzcwNzBcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVzSW1wbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGNtc1JvdXRlRXhpc3RzKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNDbXNEcml2ZW5Sb3V0ZSA9IHVybC5zdGFydHNXaXRoKCcvJyk7XG5cbiAgICBpZiAoIWlzQ21zRHJpdmVuUm91dGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZVBhdGggPSB1cmwuc3Vic3RyKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGlzQ21zRHJpdmVuUm91dGUgJiZcbiAgICAgICEhdGhpcy5yb3V0ZXIuY29uZmlnLmZpbmQoXG4gICAgICAgIChyb3V0ZTogQ21zUm91dGUpID0+XG4gICAgICAgICAgcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Q21zUm91dGVDb250ZXh0ICYmIHJvdXRlLnBhdGggPT09IHJvdXRlUGF0aFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udGFpbnMgQ21zIGRyaXZlbiByb3V0aW5nIGxvZ2ljIGludGVuZGVkIGZvciB1c2UgdXNlIGluIGd1YXJkcywgZXNwZWNpYWxseSBpbiBjYW5BY3RpdmF0ZSBtZXRob2QuXG4gICAqXG4gICAqIFdpbGwgcmV0dXJuIHRydWUsIHdoZW4gbG9naWMgd29udCBoYXZlIHRvIG1vZGlmeSByb3V0aW5nIChzbyBjYW5BY3RpdmF0ZSBjb3VsZCBiZSBlYXNpbHkgcmVzb2x2ZWQgdG8gdHJ1ZSlcbiAgICogb3Igd2lsbCByZXR1cm4gZmFsc2UsIHdoZW4gcm91dGluZyBjb25maWd1cmF0aW9uIHdhcyB1cGRhdGVkIGFuZCByZWRpcmVjdGlvbiB0byBuZXdseSBnZW5lcmF0ZWQgcm91dGUgd2FzIGluaXRpYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqIEBwYXJhbSBjdXJyZW50VXJsXG4gICAqL1xuICBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jbXNSb3V0ZUV4aXN0cyhjdXJyZW50UGFnZUxhYmVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRSb3V0ZXNDb25maWcgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldENoaWxkUm91dGVzKFxuICAgICAgY29tcG9uZW50VHlwZXNcbiAgICApO1xuXG4gICAgaWYgKGNoaWxkUm91dGVzQ29uZmlnPy5jaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMudXBkYXRlUm91dGluZyhwYWdlQ29udGV4dCwgY3VycmVudFBhZ2VMYWJlbCwgY2hpbGRSb3V0ZXNDb25maWcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjdXJyZW50VXJsKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGluZyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgcGFnZUxhYmVsOiBzdHJpbmcsXG4gICAgY2hpbGRSb3V0ZXNDb25maWc6IENtc0NvbXBvbmVudENoaWxkUm91dGVzQ29uZmlnXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSAmJlxuICAgICAgcGFnZUxhYmVsLnN0YXJ0c1dpdGgoJy8nKSAmJlxuICAgICAgcGFnZUxhYmVsLmxlbmd0aCA+IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IG5ld1JvdXRlOiBDbXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogcGFnZUxhYmVsLnN1YnN0cigxKSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRSb3V0ZXNDb25maWcuY2hpbGRyZW4sXG4gICAgICAgIGRhdGE6IGRlZXBNZXJnZSh7fSwgY2hpbGRSb3V0ZXNDb25maWc/LnBhcmVudD8uZGF0YSA/PyB7fSwge1xuICAgICAgICAgIGN4Q21zUm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBwYWdlQ29udGV4dC50eXBlLFxuICAgICAgICAgICAgaWQ6IHBhZ2VMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtuZXdSb3V0ZSwgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==