/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, startWith, withLatestFrom, } from 'rxjs/operators';
var SharedCarouselService = /** @class */ (function () {
    function SharedCarouselService() {
        this.MAX_WIDTH = 360;
        this.MAX_ITEM_SIZE = 4;
        this.SPEED = 250;
        this.itemSize$ = of(this.MAX_ITEM_SIZE);
        this.activeItem$ = of(0);
        this.activeItemWithDelay$ = of(0);
    }
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.getActiveItem = /**
     * @return {?}
     */
    function () {
        return this.activeItem$;
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.getActiveItemWithDelay = /**
     * @return {?}
     */
    function () {
        return this.activeItemWithDelay$;
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.getItemSize = /**
     * @return {?}
     */
    function () {
        return this.itemSize$;
    };
    /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     */
    /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     * @param {?} window
     * @param {?} nativeElement
     * @return {?}
     */
    SharedCarouselService.prototype.setItemSize = /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     * @param {?} window
     * @param {?} nativeElement
     * @return {?}
     */
    function (window, nativeElement) {
        var _this = this;
        this.itemSize$ = !window
            ? of(this.MAX_ITEM_SIZE)
            : fromEvent(window, 'resize').pipe(map((/**
             * @return {?}
             */
            function () { return ((/** @type {?} */ (nativeElement))).clientWidth; })), startWith(((/** @type {?} */ (nativeElement))).clientWidth), 
            // avoid to much calls
            debounceTime(100), map((/**
             * @param {?} innerWidth
             * @return {?}
             */
            function (innerWidth) {
                /** @type {?} */
                var itemsPerPage = Math.round(innerWidth / _this.MAX_WIDTH);
                return itemsPerPage > 2 ? _this.MAX_ITEM_SIZE : itemsPerPage;
            })), 
            // only emit new size when the size changed
            distinctUntilChanged());
    };
    /**
     * @param {?} newActiveItem
     * @return {?}
     */
    SharedCarouselService.prototype.setItemAsActive = /**
     * @param {?} newActiveItem
     * @return {?}
     */
    function (newActiveItem) {
        var _this = this;
        this.activeItem$ = this.itemSize$.pipe(map((/**
         * @param {?} itemSize
         * @return {?}
         */
        function (itemSize) { return _this.setItem(newActiveItem, itemSize); })));
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.setPreviousItemAsActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), activeItem = _b[0], itemSize = _b[1];
            return _this.setItem(activeItem - itemSize, itemSize);
        })));
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.setNextItemAsActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), activeItem = _b[0], itemSize = _b[1];
            return _this.setItem(activeItem + itemSize, itemSize);
        })));
    };
    /**
     * @private
     * @param {?} newActiveItem
     * @param {?} itemSize
     * @return {?}
     */
    SharedCarouselService.prototype.setItem = /**
     * @private
     * @param {?} newActiveItem
     * @param {?} itemSize
     * @return {?}
     */
    function (newActiveItem, itemSize) {
        this.activeItemWithDelay$ = of(newActiveItem).pipe(delay(this.getDelayValue(itemSize)));
        return newActiveItem;
    };
    /**
     * @private
     * @param {?} itemSize
     * @return {?}
     */
    SharedCarouselService.prototype.getDelayValue = /**
     * @private
     * @param {?} itemSize
     * @return {?}
     */
    function (itemSize) {
        return (itemSize - 1) * this.SPEED;
    };
    SharedCarouselService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SharedCarouselService.ctorParameters = function () { return []; };
    return SharedCarouselService;
}());
export { SharedCarouselService };
if (false) {
    /** @type {?} */
    SharedCarouselService.prototype.MAX_WIDTH;
    /** @type {?} */
    SharedCarouselService.prototype.MAX_ITEM_SIZE;
    /** @type {?} */
    SharedCarouselService.prototype.SPEED;
    /**
     * @type {?}
     * @private
     */
    SharedCarouselService.prototype.itemSize$;
    /**
     * @type {?}
     * @private
     */
    SharedCarouselService.prototype.activeItem$;
    /**
     * @type {?}
     * @private
     */
    SharedCarouselService.prototype.activeItemWithDelay$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNhcm91c2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQVVFO1FBUkEsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRUosY0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFaEIsNkNBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzREFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7O0lBQ0gsMkNBQVc7Ozs7Ozs7OztJQUFYLFVBQVksTUFBTSxFQUFFLGFBQWE7UUFBakMsaUJBZUM7UUFkQyxJQUFJLENBQUMs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b250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYXJlZENhcm91c2VsU2VydmljZSB7XG4gIE1BWF9XSURUSCA9IDM2MDtcbiAgTUFYX0lURU1fU0laRSA9IDQ7XG4gIFNQRUVEID0gMjUwO1xuXG4gIHByaXZhdGUgaXRlbVNpemUkID0gb2YodGhpcy5NQVhfSVRFTV9TSVpFKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtJCA9IG9mKDApO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YoMCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldEFjdGl2ZUl0ZW0oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtJDtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW1XaXRoRGVsYXkoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtV2l0aERlbGF5JDtcbiAgfVxuXG4gIGdldEl0ZW1TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVNpemUkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgc2hvd24gaW4gdGhlIGNhcm91c2VsIGNhbiBiZSBjYWxjdWxhdGVkXG4gICAqIHRoZSBzdGFuZGFyZCBpbXBsZW1lbmF0dGlvbnMgdXNlcyB0aGUgZWxlbWVudCBzaXplIHRvIGNhbGN1bGF0ZVxuICAgKiB0aGUgaXRlbXMgdGhhdCBmaXQgaW4gdGhlIGNhcm91c2VsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgaW4gYG5nT25Jbml0YC5cbiAgICovXG4gIHNldEl0ZW1TaXplKHdpbmRvdywgbmF0aXZlRWxlbWVudCkge1xuICAgIHRoaXMuaXRlbVNpemUkID0gIXdpbmRvd1xuICAgICAgPyBvZih0aGlzLk1BWF9JVEVNX1NJWkUpXG4gICAgICA6IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiAobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIHN0YXJ0V2l0aCgobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIC8vIGF2b2lkIHRvIG11Y2ggY2FsbHNcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgICBtYXAoKGlubmVyV2lkdGg6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNQZXJQYWdlID0gTWF0aC5yb3VuZChpbm5lcldpZHRoIC8gdGhpcy5NQVhfV0lEVEgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zUGVyUGFnZSA+IDIgPyB0aGlzLk1BWF9JVEVNX1NJWkUgOiBpdGVtc1BlclBhZ2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gb25seSBlbWl0IG5ldyBzaXplIHdoZW4gdGhlIHNpemUgY2hhbmdlZFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgfVxuXG4gIHNldEl0ZW1Bc0FjdGl2ZShuZXdBY3RpdmVJdGVtOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5pdGVtU2l6ZSQucGlwZShcbiAgICAgIG1hcChpdGVtU2l6ZSA9PiB0aGlzLnNldEl0ZW0obmV3QWN0aXZlSXRlbSwgaXRlbVNpemUpKVxuICAgICk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSAtIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0TmV4dEl0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSArIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJdGVtKG5ld0FjdGl2ZUl0ZW06IG51bWJlciwgaXRlbVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQgPSBvZihuZXdBY3RpdmVJdGVtKS5waXBlKFxuICAgICAgZGVsYXkodGhpcy5nZXREZWxheVZhbHVlKGl0ZW1TaXplKSlcbiAgICApO1xuICAgIHJldHVybiBuZXdBY3RpdmVJdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWxheVZhbHVlKGl0ZW1TaXplKSB7XG4gICAgcmV0dXJuIChpdGVtU2l6ZSAtIDEpICogdGhpcy5TUEVFRDtcbiAgfVxufVxuIl19