/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
export class PageLayoutComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} pageLayoutService
     */
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.section) {
            this.styleClass = this.section;
        }
    }
    /**
     * @return {?}
     */
    get slots$() {
        return this.pageLayoutService.getSlots(this.section);
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.pageLayoutService.templateName$.pipe(
        // intercept the observable to keep a clean DOM tree
        tap(name => {
            this.styleClass = name;
        }));
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    set styleClass(cls) {
        if (this.currentClass) {
            this.renderer.removeClass(this.el.nativeElement, this.currentClass);
        }
        this.renderer.addClass(this.el.nativeElement, cls);
        this.currentClass = cls;
    }
}
PageLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-layout',
                template: "<ng-container *cxOutlet=\"section || (templateName$ | async)\">\n  <ng-content></ng-content>\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PageLayoutComponent.prototype.section;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.pageLayoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFLOUIsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRnBDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJO1FBQzlDLG9EQUFvRDtRQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxHQUFXO1FBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHNPQUEyQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFiQyxVQUFVO1lBR1YsU0FBUztZQUlGLGlCQUFpQjs7O3NCQVF2QixLQUFLOzs7O0lBQU4sc0NBQXlCOzs7OztJQUV6QiwyQ0FBcUI7Ozs7O0lBR25CLGlDQUFzQjs7Ozs7SUFDdEIsdUNBQTJCOzs7OztJQUMzQixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2VjdGlvbjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudENsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWN0aW9uKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSB0aGlzLnNlY3Rpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNsb3RzJCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHModGhpcy5zZWN0aW9uKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJC5waXBlKFxuICAgICAgLy8gaW50ZXJjZXB0IHRoZSBvYnNlcnZhYmxlIHRvIGtlZXAgYSBjbGVhbiBET00gdHJlZVxuICAgICAgdGFwKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0IHN0eWxlQ2xhc3MoY2xzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gY2xzO1xuICB9XG59XG4iXX0=