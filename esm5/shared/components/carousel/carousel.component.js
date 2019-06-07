/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CarouselService } from './carousel.service';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, service) {
        this.el = el;
        this.service = service;
        /**
         * Specifies the min pixel used per product. This value is used
         * to calculate the amount of items we can fit into the available with
         * of the host element. The number of items is not related the breakpoints,
         * which means that a carousel can be placed in different layouts,
         * regardless of the overall size.
         */
        this.minItemPixelSize = 300;
        this.indicatorIcon = ICON_TYPE.CIRCLE;
        this.previousIcon = ICON_TYPE.CARET_LEFT;
        this.nextIcon = ICON_TYPE.CARET_RIGHT;
        /**
         * The group with items which is currently active.
         */
        this.activeSlide = 0;
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.size$ = this.service.getSize(this.el.nativeElement, this.minItemPixelSize);
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.select = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this.activeSlide = slide;
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-carousel',
                    template: "<ng-container *ngIf=\"items && items.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">\n    {{ title }}\n  </h3>\n\n  <div class=\"cx-carousel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"select(activeSlide - size)\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"group\" *ngIf=\"i % size === 0\">\n          <ng-container *ngFor=\"let item of (items | slice: i:i + size)\">\n            <a\n              *ngIf=\"item\"\n              class=\"product\"\n              [class.active]=\"i === activeSlide\"\n              [routerLink]=\"item.route\"\n            >\n              <cx-media\n                [container]=\"item.media?.container\"\n                [format]=\"item.media?.format\"\n              >\n              </cx-media>\n\n              <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n              <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n            </a>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"select(activeSlide + size)\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div class=\"indicators\" *ngIf=\"size < items.length\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (click)=\"select(i)\"\n        [disabled]=\"i === activeSlide\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CarouselService }
    ]; };
    CarouselComponent.propDecorators = {
        title: [{ type: Input }],
        items: [{ type: Input }],
        minItemPixelSize: [{ type: Input }],
        indicatorIcon: [{ type: Input }],
        previousIcon: [{ type: Input }],
        nextIcon: [{ type: Input }]
    };
    return CarouselComponent;
}());
export { CarouselComponent };
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.title;
    /** @type {?} */
    CarouselComponent.prototype.items;
    /**
     * Specifies the min pixel used per product. This value is used
     * to calculate the amount of items we can fit into the available with
     * of the host element. The number of items is not related the breakpoints,
     * which means that a carousel can be placed in different layouts,
     * regardless of the overall size.
     * @type {?}
     */
    CarouselComponent.prototype.minItemPixelSize;
    /** @type {?} */
    CarouselComponent.prototype.indicatorIcon;
    /** @type {?} */
    CarouselComponent.prototype.previousIcon;
    /** @type {?} */
    CarouselComponent.prototype.nextIcon;
    /**
     * The group with items which is currently active.
     * @type {?}
     */
    CarouselComponent.prototype.activeSlide;
    /**
     * The number of items that should be rendered in the carousel.
     * @type {?}
     */
    CarouselComponent.prototype.size$;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQWdDRSwyQkFBc0IsRUFBYyxFQUFZLE9BQXdCO1FBQWxELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFpQjs7Ozs7Ozs7UUFoQi9ELHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixrQkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakMsaUJBQVksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDOzs7O1FBSzFDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBTzJELENBQUM7Ozs7SUFFNUUsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMDJEQUF3QztpQkFDekM7Ozs7Z0JBVG1CLFVBQVU7Z0JBSXJCLGVBQWU7Ozt3QkFPckIsS0FBSzt3QkFFTCxLQUFLO21DQVNMLEtBQUs7Z0NBRUwsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBd0JSLHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F4Q1ksaUJBQWlCOzs7SUFDNUIsa0NBQXVCOztJQUV2QixrQ0FBK0I7Ozs7Ozs7OztJQVMvQiw2Q0FBZ0M7O0lBRWhDLDBDQUEwQzs7SUFDMUMseUNBQTZDOztJQUM3QyxxQ0FBMEM7Ozs7O0lBSzFDLHdDQUFnQjs7Ozs7SUFLaEIsa0NBQTBCOzs7OztJQUVkLCtCQUF3Qjs7Ozs7SUFBRSxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL2Nhcm91c2VsLm1vZGVsJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGl0ZW1zOiBDYXJvdXNlbEl0ZW1bXTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtaW4gcGl4ZWwgdXNlZCBwZXIgcHJvZHVjdC4gVGhpcyB2YWx1ZSBpcyB1c2VkXG4gICAqIHRvIGNhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIGl0ZW1zIHdlIGNhbiBmaXQgaW50byB0aGUgYXZhaWxhYmxlIHdpdGhcbiAgICogb2YgdGhlIGhvc3QgZWxlbWVudC4gVGhlIG51bWJlciBvZiBpdGVtcyBpcyBub3QgcmVsYXRlZCB0aGUgYnJlYWtwb2ludHMsXG4gICAqIHdoaWNoIG1lYW5zIHRoYXQgYSBjYXJvdXNlbCBjYW4gYmUgcGxhY2VkIGluIGRpZmZlcmVudCBsYXlvdXRzLFxuICAgKiByZWdhcmRsZXNzIG9mIHRoZSBvdmVyYWxsIHNpemUuXG4gICAqL1xuICBASW5wdXQoKSBtaW5JdGVtUGl4ZWxTaXplID0gMzAwO1xuXG4gIEBJbnB1dCgpIGluZGljYXRvckljb24gPSBJQ09OX1RZUEUuQ0lSQ0xFO1xuICBASW5wdXQoKSBwcmV2aW91c0ljb24gPSBJQ09OX1RZUEUuQ0FSRVRfTEVGVDtcbiAgQElucHV0KCkgbmV4dEljb24gPSBJQ09OX1RZUEUuQ0FSRVRfUklHSFQ7XG5cbiAgLyoqXG4gICAqIFRoZSBncm91cCB3aXRoIGl0ZW1zIHdoaWNoIGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBhY3RpdmVTbGlkZSA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIGNhcm91c2VsLlxuICAgKi9cbiAgc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaXplJCA9IHRoaXMuc2VydmljZS5nZXRTaXplKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5taW5JdGVtUGl4ZWxTaXplXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdChzbGlkZTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHNsaWRlO1xuICB9XG59XG4iXX0=