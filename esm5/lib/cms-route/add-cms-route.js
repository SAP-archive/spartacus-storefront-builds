/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { CmsPageGuard } from '../cms/guards/cms-page.guard';
import { PageLayoutComponent } from '../cms/page-layout/page-layout.component';
/** @type {?} */
var cmsRoute = {
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
    var result = function () {
        /** @type {?} */
        var router = injector.get(Router);
        router.config.push(cmsRoute);
    };
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNtcy1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtcm91dGUvYWRkLWNtcy1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7SUFFekUsUUFBUSxHQUFVO0lBQ3RCLElBQUksRUFBRSxJQUFJO0lBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Q0FDL0I7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQjs7UUFDdEMsTUFBTSxHQUFHOztZQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuXG5jb25zdCBjbXNSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICcqKicsXG4gIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENtc1JvdXRlKGluamVjdG9yOiBJbmplY3Rvcikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgcm91dGVyLmNvbmZpZy5wdXNoKGNtc1JvdXRlKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==