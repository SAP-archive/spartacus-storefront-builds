/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { CmsPageGuard } from '../../guards/cms-page.guard';
import { PageLayoutComponent } from '../../page/index';
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
    const result = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const router = injector.get(Router);
        router.config.push(cmsRoute);
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNtcy1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9jbXMtcm91dGUvYWRkLWNtcy1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7TUFFakQsUUFBUSxHQUFVO0lBQ3RCLElBQUksRUFBRSxJQUFJO0lBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Q0FDL0I7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQjs7VUFDdEMsTUFBTTs7O0lBQUcsR0FBRyxFQUFFOztjQUNaLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlL2luZGV4JztcblxuY29uc3QgY21zUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnKionLFxuICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbXNSb3V0ZShpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHJvdXRlci5jb25maWcucHVzaChjbXNSb3V0ZSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=