/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { CmsPageGuard } from '../cms/guards/cms-page.guard';
import { PageLayoutComponent } from '../cms/page-layout/page-layout.component';
/** @type {?} */
const cmsRoute = {
    path: '**',
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
};
/**
 * @param {?} injector
 * @return {?}
 */
export function addCmsRoute(injector) {
    /** @type {?} */
    const result = () => {
        /** @type {?} */
        const router = injector.get(Router);
        router.config.push(cmsRoute);
    };
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNtcy1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtcm91dGUvYWRkLWNtcy1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7TUFFekUsUUFBUSxHQUFVO0lBQ3RCLElBQUksRUFBRSxJQUFJO0lBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Q0FDL0I7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQjs7VUFDdEMsTUFBTSxHQUFHLEdBQUcsRUFBRTs7Y0FDWixNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi9jbXMvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcblxuY29uc3QgY21zUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnKionLFxuICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbXNSb3V0ZShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHJvdXRlci5jb25maWcucHVzaChjbXNSb3V0ZSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=