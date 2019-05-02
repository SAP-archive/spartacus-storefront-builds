/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
    }
    /**
     * @return {?}
     */
    PageLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.section) {
            this.styleClass = this.section;
        }
    };
    Object.defineProperty(PageLayoutComponent.prototype, "slots$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pageLayoutService.getSlots(this.section);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "templateName$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.pageLayoutService.templateName$.pipe(
            // intercept the observable to keep a clean DOM tree
            tap(function (name) {
                _this.styleClass = name;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
        set: /**
         * @param {?} cls
         * @return {?}
         */
        function (cls) {
            if (this.currentClass) {
                this.renderer.removeClass(this.el.nativeElement, this.currentClass);
            }
            this.renderer.addClass(this.el.nativeElement, cls);
            this.currentClass = cls;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-layout',
                    template: "<ng-container *cxOutlet=\"section || (templateName$ | async)\">\n  <ng-content></ng-content>\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: PageLayoutService }
    ]; };
    PageLayoutComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return PageLayoutComponent;
}());
export { PageLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQVVFLDZCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixpQkFBb0M7UUFGcEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhDQUFhOzs7O1FBQWpCO1lBQUEsaUJBT0M7WUFOQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSTtZQUM5QyxvREFBb0Q7WUFDcEQsR0FBRyxDQUFDLFVBQUEsSUFBSTtnQkFDTixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBVTs7Ozs7UUFBZCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckU7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixzT0FBMkM7b0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFiQyxVQUFVO2dCQUdWLFNBQVM7Z0JBSUYsaUJBQWlCOzs7MEJBUXZCLEtBQUs7O0lBb0NSLDBCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1ksbUJBQW1COzs7SUFDOUIsc0NBQXlCOzs7OztJQUV6QiwyQ0FBcUI7Ozs7O0lBR25CLGlDQUFzQjs7Ozs7SUFDdEIsdUNBQTJCOzs7OztJQUMzQixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2VjdGlvbjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudENsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWN0aW9uKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSB0aGlzLnNlY3Rpb247XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNsb3RzJCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHModGhpcy5zZWN0aW9uKTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJC5waXBlKFxuICAgICAgLy8gaW50ZXJjZXB0IHRoZSBvYnNlcnZhYmxlIHRvIGtlZXAgYSBjbGVhbiBET00gdHJlZVxuICAgICAgdGFwKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0IHN0eWxlQ2xhc3MoY2xzOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIHRoaXMuY3VycmVudENsYXNzID0gY2xzO1xuICB9XG59XG4iXX0=