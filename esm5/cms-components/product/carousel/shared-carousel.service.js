/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            : fromEvent(window, 'resize').pipe(map(function () { return ((/** @type {?} */ (nativeElement))).clientWidth; }), startWith(((/** @type {?} */ (nativeElement))).clientWidth), 
            // avoid to much calls
            debounceTime(100), map(function (innerWidth) {
                /** @type {?} */
                var itemsPerPage = Math.round(innerWidth / _this.MAX_WIDTH);
                return itemsPerPage > 2 ? _this.MAX_ITEM_SIZE : itemsPerPage;
            }), 
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
        this.activeItem$ = this.itemSize$.pipe(map(function (itemSize) { return _this.setItem(newActiveItem, itemSize); }));
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.setPreviousItemAsActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), activeItem = _b[0], itemSize = _b[1];
            return _this.setItem(activeItem - itemSize, itemSize);
        }));
    };
    /**
     * @return {?}
     */
    SharedCarouselService.prototype.setNextItemAsActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), activeItem = _b[0], itemSize = _b[1];
            return _this.setItem(activeItem + itemSize, itemSize);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNhcm91c2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQVVFO1FBUkEsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRUosY0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFaEIsNkNBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzREFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7O0lBQ0gsMkNBQVc7Ozs7Ozs7OztJQUFYLFVBQVksTUFBTSxFQUFFLGFBQWE7UUFBakMsaUJBZUM7UUFkQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTTtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsY0FBTSxPQUFBLENBQUMsbUJBQUEsYUFBYSxFQUFlLENBQUMsQ0FBQyxXQUFXLEVBQTFDLENBQTBDLENBQUMsRUFDckQsU0FBUyxDQUFDLENBQUMsbUJBQUEsYUFBYSxFQUFlLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDckQsc0JBQXNCO1lBQ3RCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsR0FBRyxDQUFDLFVBQUMsVUFBZTs7b0JBQ1osWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzVELE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlELENBQUMsQ0FBQztZQUNGLDJDQUEyQztZQUMzQyxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLGFBQXFCO1FBQXJDLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1REFBdUI7OztJQUF2QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdEMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDOUIsR0FBRyxDQUFDLFVBQUMsRUFBd0M7Z0JBQXhDLDBCQUF3QyxFQUF2QyxrQkFBVSxFQUFFLGdCQUFRO1lBQ3hCLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUE3QyxDQUE2QyxDQUM5QyxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbURBQW1COzs7SUFBbkI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzlCLEdBQUcsQ0FBQyxVQUFDLEVBQXdDO2dCQUF4QywwQkFBd0MsRUFBdkMsa0JBQVUsRUFBRSxnQkFBUTtZQUN4QixPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFBN0MsQ0FBNkMsQ0FDOUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHVDQUFPOzs7Ozs7SUFBZixVQUFnQixhQUFxQixFQUFFLFFBQWdCO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNwQyxDQUFDO1FBQ0YsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sNkNBQWE7Ozs7O0lBQXJCLFVBQXNCLFFBQVE7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7O2dCQWhGRixVQUFVOzs7O0lBaUZYLDRCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0FoRlkscUJBQXFCOzs7SUFDaEMsMENBQWdCOztJQUNoQiw4Q0FBa0I7O0lBQ2xCLHNDQUFZOzs7OztJQUVaLDBDQUEyQzs7Ozs7SUFDM0MsNENBQTRCOzs7OztJQUM1QixxREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZWRDYXJvdXNlbFNlcnZpY2Uge1xuICBNQVhfV0lEVEggPSAzNjA7XG4gIE1BWF9JVEVNX1NJWkUgPSA0O1xuICBTUEVFRCA9IDI1MDtcblxuICBwcml2YXRlIGl0ZW1TaXplJCA9IG9mKHRoaXMuTUFYX0lURU1fU0laRSk7XG4gIHByaXZhdGUgYWN0aXZlSXRlbSQgPSBvZigwKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtV2l0aERlbGF5JCA9IG9mKDApO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBY3RpdmVJdGVtKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbSQ7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtV2l0aERlbGF5KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQ7XG4gIH1cblxuICBnZXRJdGVtU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1TaXplJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBjYW4gYmUgY2FsY3VsYXRlZFxuICAgKiB0aGUgc3RhbmRhcmQgaW1wbGVtZW5hdHRpb25zIHVzZXMgdGhlIGVsZW1lbnQgc2l6ZSB0byBjYWxjdWxhdGVcbiAgICogdGhlIGl0ZW1zIHRoYXQgZml0IGluIHRoZSBjYXJvdXNlbC5cbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGBuZ09uSW5pdGAuXG4gICAqL1xuICBzZXRJdGVtU2l6ZSh3aW5kb3csIG5hdGl2ZUVsZW1lbnQpIHtcbiAgICB0aGlzLml0ZW1TaXplJCA9ICF3aW5kb3dcbiAgICAgID8gb2YodGhpcy5NQVhfSVRFTV9TSVpFKVxuICAgICAgOiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICBzdGFydFdpdGgoKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICAvLyBhdm9pZCB0byBtdWNoIGNhbGxzXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgbWFwKChpbm5lcldpZHRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IE1hdGgucm91bmQoaW5uZXJXaWR0aCAvIHRoaXMuTUFYX1dJRFRIKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtc1BlclBhZ2UgPiAyID8gdGhpcy5NQVhfSVRFTV9TSVpFIDogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIG9ubHkgZW1pdCBuZXcgc2l6ZSB3aGVuIHRoZSBzaXplIGNoYW5nZWRcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gIH1cblxuICBzZXRJdGVtQXNBY3RpdmUobmV3QWN0aXZlSXRlbTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuaXRlbVNpemUkLnBpcGUoXG4gICAgICBtYXAoaXRlbVNpemUgPT4gdGhpcy5zZXRJdGVtKG5ld0FjdGl2ZUl0ZW0sIGl0ZW1TaXplKSlcbiAgICApO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gLSBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNldE5leHRJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gKyBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SXRlbShuZXdBY3RpdmVJdGVtOiBudW1iZXIsIGl0ZW1TaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YobmV3QWN0aXZlSXRlbSkucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkpXG4gICAgKTtcbiAgICByZXR1cm4gbmV3QWN0aXZlSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkge1xuICAgIHJldHVybiAoaXRlbVNpemUgLSAxKSAqIHRoaXMuU1BFRUQ7XG4gIH1cbn1cbiJdfQ==