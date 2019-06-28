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
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return (section ? of(section) : _this.templateName$); })), tap((/**
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
                    template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of (slots$ | async)\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-template>\n",
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
    PageLayoutComponent.prototype.templateName$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQTBCRSw2QkFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQW9DO1FBSDlDLGlCQUlJO1FBSE0sT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQXBCckMsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxrQkFBYSxHQUF1QixJQUFJLENBQUMsaUJBQWlCO2FBQ2hFLGFBQWEsQ0FBQztRQUVSLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsRUFDbEUsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7UUFFTyxXQUFNLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQy9ELENBQUM7SUFRQyxDQUFDO0lBeEJKLHNCQUFhLHdDQUFPOzs7OztRQUFwQixVQUFxQixLQUFhO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBd0JELHNCQUFJLDJDQUFVOzs7OztRQUFkLFVBQWUsR0FBVztZQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDZVQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpDLFVBQVU7Z0JBRVYsU0FBUztnQkFJRixpQkFBaUI7OzswQkFRdkIsS0FBSzs7SUFpQ1IsMEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSxtQkFBbUI7OztJQUk5Qix1Q0FBNEU7O0lBQzVFLDRDQUNpQjs7SUFFakIsMENBS0U7O0lBRUYscUNBRUU7Ozs7O0lBRUYsMkNBQXFCOzs7OztJQUduQixpQ0FBc0I7Ozs7O0lBQ3RCLHVDQUEyQjs7Ozs7SUFDM0IsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxheW91dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBzZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlY3Rpb24kLm5leHQodmFsdWUpO1xuICB9XG4gIHJlYWRvbmx5IHNlY3Rpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgcmVhZG9ubHkgdGVtcGxhdGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5wYWdlTGF5b3V0U2VydmljZVxuICAgIC50ZW1wbGF0ZU5hbWUkO1xuXG4gIHJlYWRvbmx5IGxheW91dE5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnNlY3Rpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHNlY3Rpb24gPT4gKHNlY3Rpb24gPyBvZihzZWN0aW9uKSA6IHRoaXMudGVtcGxhdGVOYW1lJCkpLFxuICAgIHRhcChuYW1lID0+IHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzcyA9IG5hbWU7XG4gICAgfSlcbiAgKTtcblxuICByZWFkb25seSBzbG90cyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zZWN0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChzZWN0aW9uID0+IHRoaXMucGFnZUxheW91dFNlcnZpY2UuZ2V0U2xvdHMoc2VjdGlvbikpXG4gICk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYWdlTGF5b3V0U2VydmljZTogUGFnZUxheW91dFNlcnZpY2VcbiAgKSB7fVxuXG4gIHNldCBzdHlsZUNsYXNzKGNsczogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB0aGlzLmN1cnJlbnRDbGFzcyA9IGNscztcbiAgfVxufVxuIl19