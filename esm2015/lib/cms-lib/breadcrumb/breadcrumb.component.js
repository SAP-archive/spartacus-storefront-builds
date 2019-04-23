/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class BreadcrumbComponent {
    /**
     * @param {?} component
     * @param {?} pageMetaService
     */
    constructor(component, pageMetaService) {
        this.component = component;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    get title$() {
        return this.pageMetaService.getMeta().pipe(filter(Boolean), map((meta) => meta.heading || meta.title));
    }
    /**
     * @return {?}
     */
    get crumbs$() {
        // initial version for the breadcrumb
        // this must be done in such a way that
        // other pages can contribute to a stream of crumbs
        return of([{ label: 'Home', link: '/' }]);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-breadcrumb',
                template: "<nav>\n  <a *ngFor=\"let crumb of (crumbs$ | async)\" [routerLink]=\"crumb.link\">\n    {{ crumb.label }}\n  </a>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService }
];
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFHTCxlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQ1MsU0FBb0QsRUFDakQsZUFBZ0M7UUFEbkMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7Ozs7SUFFSixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxxQ0FBcUM7UUFDckMsdUNBQXVDO1FBQ3ZDLG1EQUFtRDtRQUNuRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHNLQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxnQkFBZ0I7WUFKdkIsZUFBZTs7OztJQWFiLHdDQUEyRDs7Ozs7SUFDM0QsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gIFBhZ2VNZXRhLFxuICBQYWdlTWV0YVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCcmVhZGNydW1ic0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlXG4gICkge31cblxuICBnZXQgdGl0bGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU1ldGFTZXJ2aWNlLmdldE1ldGEoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChtZXRhOiBQYWdlTWV0YSkgPT4gbWV0YS5oZWFkaW5nIHx8IG1ldGEudGl0bGUpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjcnVtYnMkKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBpbml0aWFsIHZlcnNpb24gZm9yIHRoZSBicmVhZGNydW1iXG4gICAgLy8gdGhpcyBtdXN0IGJlIGRvbmUgaW4gc3VjaCBhIHdheSB0aGF0XG4gICAgLy8gb3RoZXIgcGFnZXMgY2FuIGNvbnRyaWJ1dGUgdG8gYSBzdHJlYW0gb2YgY3J1bWJzXG4gICAgcmV0dXJuIG9mKFt7IGxhYmVsOiAnSG9tZScsIGxpbms6ICcvJyB9XSk7XG4gIH1cbn1cbiJdfQ==