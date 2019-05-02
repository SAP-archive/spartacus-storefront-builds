/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, } from '@spartacus/core';
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
    ngOnInit() {
        this.setTitle();
        this.setCrumbs();
    }
    /**
     * @private
     * @return {?}
     */
    setTitle() {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((meta) => meta.heading || meta.title));
    }
    /**
     * @private
     * @return {?}
     */
    setCrumbs() {
        this.crumbs$ = this.pageMetaService
            .getMeta()
            .pipe(map((meta) => meta.breadcrumbs ? meta.breadcrumbs : [{ label: 'Home', link: '/' }]));
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-breadcrumb',
                template: "<nav>\n  <span *ngFor=\"let crumb of (crumbs$ | async)\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUdMLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQ1MsU0FBb0QsRUFDakQsZUFBZ0M7UUFEbkMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDaEMsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNyRSxDQUNGLENBQUM7SUFDTixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw4TEFBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsZ0JBQWdCO1lBSnZCLGVBQWU7Ozs7SUFZZixxQ0FBMkI7O0lBQzNCLHNDQUEyQjs7SUFHekIsd0NBQTJEOzs7OztJQUMzRCw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0JyZWFkY3J1bWJzQ29tcG9uZW50LFxuICBQYWdlTWV0YSxcbiAgUGFnZU1ldGFTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNydW1icyQ6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSgpO1xuICAgIHRoaXMuc2V0Q3J1bWJzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5wYWdlTWV0YVNlcnZpY2UuZ2V0TWV0YSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKG1ldGE6IFBhZ2VNZXRhKSA9PiBtZXRhLmhlYWRpbmcgfHwgbWV0YS50aXRsZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDcnVtYnMoKTogdm9pZCB7XG4gICAgdGhpcy5jcnVtYnMkID0gdGhpcy5wYWdlTWV0YVNlcnZpY2VcbiAgICAgIC5nZXRNZXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG1ldGE6IFBhZ2VNZXRhKSA9PlxuICAgICAgICAgIG1ldGEuYnJlYWRjcnVtYnMgPyBtZXRhLmJyZWFkY3J1bWJzIDogW3sgbGFiZWw6ICdIb21lJywgbGluazogJy8nIH1dXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==