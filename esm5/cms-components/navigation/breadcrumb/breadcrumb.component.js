/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setTitle();
        this.setCrumbs();
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return meta.heading || meta.title; })));
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setCrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        this.crumbs$ = combineLatest(this.pageMetaService.getMeta(), this.translation.translate('common.home')).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), meta = _b[0], textHome = _b[1];
            return meta && meta.breadcrumbs
                ? meta.breadcrumbs
                : [{ label: textHome, link: '/' }];
        })));
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-breadcrumb',
                    template: "<nav>\n  <span *ngFor=\"let crumb of (crumbs$ | async)\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService },
        { type: TranslationService }
    ]; };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.title$;
    /** @type {?} */
    BreadcrumbComponent.prototype.crumbs$;
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFHTCxlQUFlLEVBQ2Ysa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBU0UsNkJBQ1MsU0FBb0QsRUFDakQsZUFBZ0MsRUFDbEMsV0FBK0I7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLHNDQUFROzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLElBQWMsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBMUIsQ0FBMEIsRUFBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1Q0FBUzs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxFQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FDMUMsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsRUFBZ0I7Z0JBQWhCLDBCQUFnQixFQUFmLFlBQUksRUFBRSxnQkFBUTtZQUNsQixPQUFBLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVztnQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRnBDLENBRW9DLEVBQ3JDLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDhMQUEwQztvQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGdCQUFnQjtnQkFMdkIsZUFBZTtnQkFDZixrQkFBa0I7O0lBNkNwQiwwQkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLG1CQUFtQjs7O0lBQzlCLHFDQUEyQjs7SUFDM0Isc0NBQTJCOztJQUd6Qix3Q0FBMkQ7Ozs7O0lBQzNELDhDQUEwQzs7Ozs7SUFDMUMsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgUGFnZU1ldGEsXG4gIFBhZ2VNZXRhU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNydW1icyQ6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICB0aGlzLnNldENydW1icygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMucGFnZU1ldGFTZXJ2aWNlLmdldE1ldGEoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChtZXRhOiBQYWdlTWV0YSkgPT4gbWV0YS5oZWFkaW5nIHx8IG1ldGEudGl0bGUpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3J1bWJzKCk6IHZvaWQge1xuICAgIHRoaXMuY3J1bWJzJCA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKVxuICAgICkucGlwZShcbiAgICAgIG1hcCgoW21ldGEsIHRleHRIb21lXSkgPT5cbiAgICAgICAgbWV0YSAmJiBtZXRhLmJyZWFkY3J1bWJzXG4gICAgICAgICAgPyBtZXRhLmJyZWFkY3J1bWJzXG4gICAgICAgICAgOiBbeyBsYWJlbDogdGV4dEhvbWUsIGxpbms6ICcvJyB9XVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==