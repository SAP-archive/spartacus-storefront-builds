/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { PageLayoutComponent } from '../../cms-structure/page/index';
import { CmsPageGuard } from '../cms/guards/cms-page.guard';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNtcy1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtcm91dGUvYWRkLWNtcy1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFTLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFdEQsUUFBUSxHQUFVO0lBQ3RCLElBQUksRUFBRSxJQUFJO0lBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Q0FDL0I7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQjs7UUFDdEMsTUFBTSxHQUFHOztZQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5cbmNvbnN0IGNtc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJyoqJyxcbiAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ21zUm91dGUoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBpbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICByb3V0ZXIuY29uZmlnLnB1c2goY21zUm91dGUpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19