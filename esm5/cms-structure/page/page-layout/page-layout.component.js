/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(el, renderer, pageLayoutService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            return section ? of(section) : _this.pageLayoutService.templateName$;
        })), tap((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.styleClass = name;
        })));
        this.slots$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return _this.pageLayoutService.getSlots(section); })));
    }
    Object.defineProperty(PageLayoutComponent.prototype, "section", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.section$.next(value);
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
                    template: "<!-- ???? {{ layoutName$ | async }} -->\n<ng-container *cxOutlet=\"(layoutName$ | async)\">\n  <ng-content></ng-content>\n\n  <!-- {{ slots$ | async }} -->\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-container>\n",
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
    PageLayoutComponent.prototype.section$;
    /** @type {?} */
    PageLayoutComponent.prototype.layoutName$;
    /** @type {?} */
    PageLayoutComponent.prototype.slots$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQTBCRSw2QkFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSDlDLGlCQUlJO1FBSE0sT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQXBCckMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuRSxnQkFBVyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNmLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1FBQTVELENBQTRELEVBQzdELEVBQ0QsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7UUFFTyxXQUFNLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQy9ELENBQUM7SUFRQyxDQUFDO0lBeEJKLHNCQUFhLHdDQUFPOzs7OztRQUFwQixVQUFxQixLQUFhO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBd0JELHNCQUFJLDJDQUFVOzs7OztRQUFkLFVBQWUsR0FBVztZQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHFTQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpDLFVBQVU7Z0JBRVYsU0FBUztnQkFJRixpQkFBaUI7OzswQkFRdkIsS0FBSzs7SUFpQ1IsMEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSxtQkFBbUI7OztJQUk5Qix1Q0FBNEU7O0lBRTVFLDBDQU9FOztJQUVGLHFDQUVFOzs7OztJQUVGLDJDQUFxQjs7Ozs7SUFHbkIsaUNBQXNCOzs7OztJQUN0Qix1Q0FBMkI7Ozs7O0lBQzNCLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4vcGFnZS1sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2UtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VMYXlvdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgc2VjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWN0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICByZWFkb25seSBzZWN0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgcmVhZG9ubHkgbGF5b3V0TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoc2VjdGlvbiA9PlxuICAgICAgc2VjdGlvbiA/IG9mKHNlY3Rpb24pIDogdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkXG4gICAgKSxcbiAgICB0YXAobmFtZSA9PiB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3MgPSBuYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2xvdHMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc2VjdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoc2VjdGlvbiA9PiB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLmdldFNsb3RzKHNlY3Rpb24pKVxuICApO1xuXG4gIHByaXZhdGUgY3VycmVudENsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICBzZXQgc3R5bGVDbGFzcyhjbHM6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBjbHM7XG4gIH1cbn1cbiJdfQ==