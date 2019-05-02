/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService) {
        this.component = component;
        this.pageMetaService = pageMetaService;
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
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map(function (meta) { return meta.heading || meta.title; }));
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
        this.crumbs$ = this.pageMetaService
            .getMeta()
            .pipe(map(function (meta) {
            return meta.breadcrumbs ? meta.breadcrumbs : [{ label: 'Home', link: '/' }];
        }));
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
        { type: PageMetaService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUdMLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBU0UsNkJBQ1MsU0FBb0QsRUFDakQsZUFBZ0M7UUFEbkMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7Ozs7SUFFSixzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sc0NBQVE7Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQUMsSUFBYyxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUExQixDQUEwQixDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHVDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZTthQUNoQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsSUFBYztZQUNqQixPQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFwRSxDQUFvRSxDQUNyRSxDQUNGLENBQUM7SUFDTixDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw4TEFBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxnQkFBZ0I7Z0JBSnZCLGVBQWU7O0lBeUNqQiwwQkFBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLG1CQUFtQjs7O0lBQzlCLHFDQUEyQjs7SUFDM0Isc0NBQTJCOztJQUd6Qix3Q0FBMkQ7Ozs7O0lBQzNELDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gIFBhZ2VNZXRhLFxuICBQYWdlTWV0YVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgY3J1bWJzJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCcmVhZGNydW1ic0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgdGhpcy5zZXRDcnVtYnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+IG1ldGEuaGVhZGluZyB8fCBtZXRhLnRpdGxlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENydW1icygpOiB2b2lkIHtcbiAgICB0aGlzLmNydW1icyQgPSB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+XG4gICAgICAgICAgbWV0YS5icmVhZGNydW1icyA/IG1ldGEuYnJlYWRjcnVtYnMgOiBbeyBsYWJlbDogJ0hvbWUnLCBsaW5rOiAnLycgfV1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufVxuIl19