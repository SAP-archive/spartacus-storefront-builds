/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService) {
        this.component = component;
        this.pageMetaService = pageMetaService;
    }
    Object.defineProperty(BreadcrumbComponent.prototype, "title$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pageMetaService.getMeta().pipe(filter(Boolean), map(function (meta) { return meta.heading || meta.title; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbComponent.prototype, "crumbs$", {
        get: /**
         * @return {?}
         */
        function () {
            // initial version for the breadcrumb
            // this must be done in such a way that
            // other pages can contribute to a stream of crumbs
            return of([{ label: 'Home', link: '/' }]);
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-breadcrumb',
                    template: "<nav>\n  <a *ngFor=\"let crumb of (crumbs$ | async)\" [routerLink]=\"crumb.link\">\n    {{ crumb.label }}\n  </a>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService }
    ]; };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFHTCxlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBTUUsNkJBQ1MsU0FBb0QsRUFDakQsZUFBZ0M7UUFEbkMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7SUFFSixzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLElBQWMsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBMUIsQ0FBMEIsQ0FBQyxDQUNwRCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBTzs7OztRQUFYO1lBQ0UscUNBQXFDO1lBQ3JDLHVDQUF1QztZQUN2QyxtREFBbUQ7WUFDbkQsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsc0tBQTBDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUp2QixlQUFlOztJQThCakIsMEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQW5CWSxtQkFBbUI7OztJQUU1Qix3Q0FBMkQ7Ozs7O0lBQzNELDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0JyZWFkY3J1bWJzQ29tcG9uZW50LFxuICBQYWdlTWV0YSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHRpdGxlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+IG1ldGEuaGVhZGluZyB8fCBtZXRhLnRpdGxlKVxuICAgICk7XG4gIH1cblxuICBnZXQgY3J1bWJzJCgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgLy8gaW5pdGlhbCB2ZXJzaW9uIGZvciB0aGUgYnJlYWRjcnVtYlxuICAgIC8vIHRoaXMgbXVzdCBiZSBkb25lIGluIHN1Y2ggYSB3YXkgdGhhdFxuICAgIC8vIG90aGVyIHBhZ2VzIGNhbiBjb250cmlidXRlIHRvIGEgc3RyZWFtIG9mIGNydW1ic1xuICAgIHJldHVybiBvZihbeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiAnLycgfV0pO1xuICB9XG59XG4iXX0=