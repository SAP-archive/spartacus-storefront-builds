/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { tap } from 'rxjs/operators';
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
    Object.defineProperty(CarouselComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            this.select();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.size$ = this.service
            .getSize(this.el.nativeElement, this.minItemPixelSize)
            .pipe(tap((/**
         * @return {?}
         */
        function () { return _this.select(); })));
    };
    /**
     * @param {?=} slide
     * @return {?}
     */
    CarouselComponent.prototype.select = /**
     * @param {?=} slide
     * @return {?}
     */
    function (slide) {
        if (slide === void 0) { slide = 0; }
        this.activeSlide = slide;
    };
    /**
     * @param {?} groupIndex
     * @param {?} itemIndex
     * @return {?}
     */
    CarouselComponent.prototype.onOpen = /**
     * @param {?} groupIndex
     * @param {?} itemIndex
     * @return {?}
     */
    function (groupIndex, itemIndex) {
        this.select(groupIndex);
        this.open.emit(this.items[groupIndex + itemIndex]);
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-carousel',
                    template: "<ng-container *ngIf=\"items && items.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">\n    {{ title }}\n  </h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"select(activeSlide - size)\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"groups\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"group\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of (items | slice: i:i + size); let j = index\"\n          >\n            <a\n              *ngIf=\"item && item.route; else noLink\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n              [class.activeItem]=\"j === activeItem - i\"\n              (focus)=\"onOpen(i, j)\"\n              tabindex=\"0\"\n              [routerLink]=\"item.route\"\n            >\n              <cx-media\n                [container]=\"item.media?.container\"\n                [format]=\"item.media?.format\"\n              >\n              </cx-media>\n\n              <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n              <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n            </a>\n            <ng-template #noLink>\n              <a\n                *ngIf=\"item\"\n                class=\"item\"\n                [class.active]=\"i === activeSlide\"\n                [class.activeItem]=\"j === activeItem - i\"\n                (focus)=\"onOpen(i, j)\"\n                tabindex=\"0\"\n              >\n                <cx-media\n                  [container]=\"item.media?.container\"\n                  [format]=\"item.media?.format\"\n                >\n                </cx-media>\n\n                <h4 *ngIf=\"item.title\">{{ item.title }}</h4>\n                <div *ngIf=\"item.price\" class=\"price\">{{ item.price }}</div>\n              </a>\n            </ng-template>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"select(activeSlide + size)\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (click)=\"select(i)\"\n        [disabled]=\"i === activeSlide\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CarouselService }
    ]; };
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
    return CarouselComponent;
}());
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQStDRSwyQkFBc0IsRUFBYyxFQUFZLE9BQXdCO1FBQWxELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFpQjs7Ozs7Ozs7UUFwQi9ELHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUV2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixrQkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakMsaUJBQVksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBRWhDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQzs7OztRQUtsRCxnQkFBVyxHQUFHLENBQUMsQ0FBQztJQU8yRCxDQUFDO0lBdkM1RSxzQkFDSSxvQ0FBSzs7OztRQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBUEQsVUFDVSxLQUFxQjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7Ozs7SUFxQ0Qsb0NBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDckQsSUFBSSxDQUFDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxLQUFTO1FBQVQsc0JBQUEsRUFBQSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsa0NBQU07Ozs7O0lBQU4sVUFBTyxVQUFrQixFQUFFLFNBQWlCO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwrdkZBQXdDO2lCQUN6Qzs7OztnQkFmQyxVQUFVO2dCQVVILGVBQWU7Ozt3QkFPckIsS0FBSzt3QkFHTCxLQUFLLFNBQUMsT0FBTzs2QkFVYixLQUFLO21DQVNMLEtBQUs7aUNBRUwsS0FBSztnQ0FFTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFFTCxNQUFNOztJQTRCVCx3QkFBQztDQUFBLEFBL0RELElBK0RDO1NBM0RZLGlCQUFpQjs7O0lBQzVCLGtDQUF1Qjs7Ozs7SUFFdkIsbUNBQStCOzs7OztJQVcvQix1Q0FBNEI7Ozs7Ozs7OztJQVM1Qiw2Q0FBZ0M7O0lBRWhDLDJDQUFnQzs7SUFFaEMsMENBQTBDOztJQUMxQyx5Q0FBNkM7O0lBQzdDLHFDQUEwQzs7SUFFMUMsaUNBQWtEOzs7OztJQUtsRCx3Q0FBZ0I7Ozs7O0lBS2hCLGtDQUEwQjs7Ozs7SUFFZCwrQkFBd0I7Ozs7O0lBQUUsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtIH0gZnJvbSAnLi9jYXJvdXNlbC5tb2RlbCc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBwcml2YXRlIF9pdGVtczogQ2Fyb3VzZWxJdGVtW107XG4gIEBJbnB1dCgnaXRlbXMnKVxuICBzZXQgaXRlbXModmFsdWU6IENhcm91c2VsSXRlbVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdCgpO1xuICB9XG4gIGdldCBpdGVtcygpOiBDYXJvdXNlbEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgLyoqIEluZGljYXRlcyB0aGUgY3VycmVudCBhY3RpdmUgaXRlbSBpbiBjYXJvdXNlbCAoaWYgYW55KSAgKi9cbiAgQElucHV0KCkgYWN0aXZlSXRlbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1pbiBwaXhlbCB1c2VkIHBlciBwcm9kdWN0LiBUaGlzIHZhbHVlIGlzIHVzZWRcbiAgICogdG8gY2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgaXRlbXMgd2UgY2FuIGZpdCBpbnRvIHRoZSBhdmFpbGFibGUgd2l0aFxuICAgKiBvZiB0aGUgaG9zdCBlbGVtZW50LiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGlzIG5vdCByZWxhdGVkIHRoZSBicmVha3BvaW50cyxcbiAgICogd2hpY2ggbWVhbnMgdGhhdCBhIGNhcm91c2VsIGNhbiBiZSBwbGFjZWQgaW4gZGlmZmVyZW50IGxheW91dHMsXG4gICAqIHJlZ2FyZGxlc3Mgb2YgdGhlIG92ZXJhbGwgc2l6ZS5cbiAgICovXG4gIEBJbnB1dCgpIG1pbkl0ZW1QaXhlbFNpemUgPSAzMDA7XG5cbiAgQElucHV0KCkgaGlkZUluZGljYXRvcnMgPSBmYWxzZTtcblxuICBASW5wdXQoKSBpbmRpY2F0b3JJY29uID0gSUNPTl9UWVBFLkNJUkNMRTtcbiAgQElucHV0KCkgcHJldmlvdXNJY29uID0gSUNPTl9UWVBFLkNBUkVUX0xFRlQ7XG4gIEBJbnB1dCgpIG5leHRJY29uID0gSUNPTl9UWVBFLkNBUkVUX1JJR0hUO1xuXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxDYXJvdXNlbEl0ZW0+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBncm91cCB3aXRoIGl0ZW1zIHdoaWNoIGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBhY3RpdmVTbGlkZSA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIGNhcm91c2VsLlxuICAgKi9cbiAgc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaXplJCA9IHRoaXMuc2VydmljZVxuICAgICAgLmdldFNpemUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLm1pbkl0ZW1QaXhlbFNpemUpXG4gICAgICAucGlwZSh0YXAoKCkgPT4gdGhpcy5zZWxlY3QoKSkpO1xuICB9XG5cbiAgc2VsZWN0KHNsaWRlID0gMCkge1xuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBzbGlkZTtcbiAgfVxuXG4gIG9uT3Blbihncm91cEluZGV4OiBudW1iZXIsIGl0ZW1JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QoZ3JvdXBJbmRleCk7XG4gICAgdGhpcy5vcGVuLmVtaXQodGhpcy5pdGVtc1tncm91cEluZGV4ICsgaXRlbUluZGV4XSk7XG4gIH1cbn1cbiJdfQ==