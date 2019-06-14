/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CarouselService } from './carousel.service';
export class CarouselComponent {
    /**
     * @param {?} el
     * @param {?} service
     */
    constructor(el, service) {
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
        this.hideIndicators = false;
        this.indicatorIcon = ICON_TYPE.CIRCLE;
        this.previousIcon = ICON_TYPE.CARET_LEFT;
        this.nextIcon = ICON_TYPE.CARET_RIGHT;
        this.open = new EventEmitter();
        /**
         * The group with items which is currently active.
         */
        this.activeSlide = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._items = value;
        this.select();
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.size$ = this.service
            .getSize(this.el.nativeElement, this.minItemPixelSize)
            .pipe(tap((/**
         * @return {?}
         */
        () => this.select())));
    }
    /**
     * @param {?=} slide
     * @return {?}
     */
    select(slide = 0) {
        this.activeSlide = slide;
    }
    /**
     * @param {?} groupIndex
     * @param {?} itemIndex
     * @return {?}
     */
    onOpen(groupIndex, itemIndex) {
        this.select(groupIndex);
        this.open.emit(this.items[groupIndex + itemIndex]);
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-carousel',
                template: "<ng-container *ngIf=\"items && items.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">\n    {{ title }}\n  </h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"select(activeSlide - size)\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"group\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of (items | slice: i:i + size); let j = index\"\n          >\n            <a\n              *ngIf=\"item && item.route; else noLink\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n              [class.activeItem]=\"j === activeItem - i\"\n              (focus)=\"onOpen(i, j)\"\n              tabindex=\"0\"\n              [routerLink]=\"item.route\"\n            >\n              <cx-media\n                [container]=\"item.media?.container\"\n                [format]=\"item.media?.format\"\n              >\n              </cx-media>\n\n              <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n              <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n            </a>\n            <ng-template #noLink>\n              <a\n                *ngIf=\"item\"\n                class=\"item\"\n                [class.active]=\"i === activeSlide\"\n                [class.activeItem]=\"j === activeItem - i\"\n                (focus)=\"onOpen(i, j)\"\n                tabindex=\"0\"\n              >\n                <cx-media\n                  [container]=\"item.media?.container\"\n                  [format]=\"item.media?.format\"\n                >\n                </cx-media>\n\n                <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n                <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n              </a>\n            </ng-template>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"select(activeSlide + size)\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (click)=\"select(i)\"\n        [disabled]=\"i === activeSlide\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
CarouselComponent.propDecorators = {
    title: [{ type: Input }],
    items: [{ type: Input, args: ['items',] }],
    activeItem: [{ type: Input }],
    minItemPixelSize: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    indicatorIcon: [{ type: Input }],
    previousIcon: [{ type: Input }],
    nextIcon: [{ type: Input }],
    open: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype._items;
    /**
     * Indicates the current active item in carousel (if any)
     * @type {?}
     */
    CarouselComponent.prototype.activeItem;
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
    CarouselComponent.prototype.hideIndicators;
    /** @type {?} */
    CarouselComponent.prototype.indicatorIcon;
    /** @type {?} */
    CarouselComponent.prototype.previousIcon;
    /** @type {?} */
    CarouselComponent.prototype.nextIcon;
    /** @type {?} */
    CarouselComponent.prototype.open;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1yRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQTJDNUIsWUFBc0IsRUFBYyxFQUFZLE9BQXdCO1FBQWxELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFpQjs7Ozs7Ozs7UUFwQi9ELHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixrQkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakMsaUJBQVksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBRWhDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQzs7OztRQUtsRCxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQU8yRCxDQUFDOzs7OztJQXZDNUUsSUFDSSxLQUFLLENBQUMsS0FBcUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQWtDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTzthQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3JELElBQUksQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQWtCLEVBQUUsU0FBaUI7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLCt2RkFBd0M7YUFDekM7Ozs7WUFmQyxVQUFVO1lBVUgsZUFBZTs7O29CQU9yQixLQUFLO29CQUdMLEtBQUssU0FBQyxPQUFPO3lCQVViLEtBQUs7K0JBU0wsS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUVMLE1BQU07Ozs7SUE5QlAsa0NBQXVCOzs7OztJQUV2QixtQ0FBK0I7Ozs7O0lBVy9CLHVDQUE0Qjs7Ozs7Ozs7O0lBUzVCLDZDQUFnQzs7SUFFaEMsMkNBQWdDOztJQUVoQywwQ0FBMEM7O0lBQzFDLHlDQUE2Qzs7SUFDN0MscUNBQTBDOztJQUUxQyxpQ0FBa0Q7Ozs7O0lBS2xELHdDQUFnQjs7Ozs7SUFLaEIsa0NBQTBCOzs7OztJQUVkLCtCQUF3Qjs7Ozs7SUFBRSxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW0gfSBmcm9tICcuL2Nhcm91c2VsLm1vZGVsJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2l0ZW1zOiBDYXJvdXNlbEl0ZW1bXTtcbiAgQElucHV0KCdpdGVtcycpXG4gIHNldCBpdGVtcyh2YWx1ZTogQ2Fyb3VzZWxJdGVtW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IENhcm91c2VsSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICAvKiogSW5kaWNhdGVzIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtIGluIGNhcm91c2VsIChpZiBhbnkpICAqL1xuICBASW5wdXQoKSBhY3RpdmVJdGVtOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWluIHBpeGVsIHVzZWQgcGVyIHByb2R1Y3QuIFRoaXMgdmFsdWUgaXMgdXNlZFxuICAgKiB0byBjYWxjdWxhdGUgdGhlIGFtb3VudCBvZiBpdGVtcyB3ZSBjYW4gZml0IGludG8gdGhlIGF2YWlsYWJsZSB3aXRoXG4gICAqIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBudW1iZXIgb2YgaXRlbXMgaXMgbm90IHJlbGF0ZWQgdGhlIGJyZWFrcG9pbnRzLFxuICAgKiB3aGljaCBtZWFucyB0aGF0IGEgY2Fyb3VzZWwgY2FuIGJlIHBsYWNlZCBpbiBkaWZmZXJlbnQgbGF5b3V0cyxcbiAgICogcmVnYXJkbGVzcyBvZiB0aGUgb3ZlcmFsbCBzaXplLlxuICAgKi9cbiAgQElucHV0KCkgbWluSXRlbVBpeGVsU2l6ZSA9IDMwMDtcblxuICBASW5wdXQoKSBoaWRlSW5kaWNhdG9ycyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGluZGljYXRvckljb24gPSBJQ09OX1RZUEUuQ0lSQ0xFO1xuICBASW5wdXQoKSBwcmV2aW91c0ljb24gPSBJQ09OX1RZUEUuQ0FSRVRfTEVGVDtcbiAgQElucHV0KCkgbmV4dEljb24gPSBJQ09OX1RZUEUuQ0FSRVRfUklHSFQ7XG5cbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhcm91c2VsSXRlbT4oKTtcblxuICAvKipcbiAgICogVGhlIGdyb3VwIHdpdGggaXRlbXMgd2hpY2ggaXMgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGFjdGl2ZVNsaWRlID0gMDtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqL1xuICBzaXplJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHNlcnZpY2U6IENhcm91c2VsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNpemUkID0gdGhpcy5zZXJ2aWNlXG4gICAgICAuZ2V0U2l6ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMubWluSXRlbVBpeGVsU2l6ZSlcbiAgICAgIC5waXBlKHRhcCgoKSA9PiB0aGlzLnNlbGVjdCgpKSk7XG4gIH1cblxuICBzZWxlY3Qoc2xpZGUgPSAwKSB7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHNsaWRlO1xuICB9XG5cbiAgb25PcGVuKGdyb3VwSW5kZXg6IG51bWJlciwgaXRlbUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdChncm91cEluZGV4KTtcbiAgICB0aGlzLm9wZW4uZW1pdCh0aGlzLml0ZW1zW2dyb3VwSW5kZXggKyBpdGVtSW5kZXhdKTtcbiAgfVxufVxuIl19