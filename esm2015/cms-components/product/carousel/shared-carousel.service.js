/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, startWith, withLatestFrom, } from 'rxjs/operators';
export class SharedCarouselService {
    constructor() {
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
    getActiveItem() {
        return this.activeItem$;
    }
    /**
     * @return {?}
     */
    getActiveItemWithDelay() {
        return this.activeItemWithDelay$;
    }
    /**
     * @return {?}
     */
    getItemSize() {
        return this.itemSize$;
    }
    /**
     * The number of items shown in the carousel can be calculated
     * the standard implemenattions uses the element size to calculate
     * the items that fit in the carousel.
     * This method is called in `ngOnInit`.
     * @param {?} window
     * @param {?} nativeElement
     * @return {?}
     */
    setItemSize(window, nativeElement) {
        this.itemSize$ = !window
            ? of(this.MAX_ITEM_SIZE)
            : fromEvent(window, 'resize').pipe(map((/**
             * @return {?}
             */
            () => ((/** @type {?} */ (nativeElement))).clientWidth)), startWith(((/** @type {?} */ (nativeElement))).clientWidth), 
            // avoid to much calls
            debounceTime(100), map((/**
             * @param {?} innerWidth
             * @return {?}
             */
            (innerWidth) => {
                /** @type {?} */
                const itemsPerPage = Math.round(innerWidth / this.MAX_WIDTH);
                return itemsPerPage > 2 ? this.MAX_ITEM_SIZE : itemsPerPage;
            })), 
            // only emit new size when the size changed
            distinctUntilChanged());
    }
    /**
     * @param {?} newActiveItem
     * @return {?}
     */
    setItemAsActive(newActiveItem) {
        this.activeItem$ = this.itemSize$.pipe(map((/**
         * @param {?} itemSize
         * @return {?}
         */
        itemSize => this.setItem(newActiveItem, itemSize))));
    }
    /**
     * @return {?}
     */
    setPreviousItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([activeItem, itemSize]) => this.setItem(activeItem - itemSize, itemSize))));
    }
    /**
     * @return {?}
     */
    setNextItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([activeItem, itemSize]) => this.setItem(activeItem + itemSize, itemSize))));
    }
    /**
     * @private
     * @param {?} newActiveItem
     * @param {?} itemSize
     * @return {?}
     */
    setItem(newActiveItem, itemSize) {
        this.activeItemWithDelay$ = of(newActiveItem).pipe(delay(this.getDelayValue(itemSize)));
        return newActiveItem;
    }
    /**
     * @private
     * @param {?} itemSize
     * @return {?}
     */
    getDelayValue(itemSize) {
        return (itemSize - 1) * this.SPEED;
    }
}
SharedCarouselService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SharedCarouselService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNhcm91c2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEM7UUFSQSxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxHQUFHLENBQUM7UUFFSixjQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsQ0FBQzs7OztJQUVoQixhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7Ozs7OztJQVFELFdBQVcsQ0FBQyxNQUFNLEVBQUUsYUFBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTTtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFBLGFBQWEsRUFBZSxDQUFDLENBQUMsV0FBVyxFQUFDLEVBQ3JELFNBQVMsQ0FBQyxDQUFDLG1CQUFBLGFBQWEsRUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3JELHNCQUFzQjtZQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUc7Ozs7WUFBQyxDQUFDLFVBQWUsRUFBRSxFQUFFOztzQkFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzVELE9BQU8sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlELENBQUMsRUFBQztZQUNGLDJDQUEyQztZQUMzQyxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsYUFBcUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDcEMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdEMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDOUIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFtQixFQUFFLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUM5QyxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBbUIsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFDOUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLE9BQU8sQ0FBQyxhQUFxQixFQUFFLFFBQWdCO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNwQyxDQUFDO1FBQ0YsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFFBQVE7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7OztZQWhGRixVQUFVOzs7Ozs7SUFFVCwwQ0FBZ0I7O0lBQ2hCLDhDQUFrQjs7SUFDbEIsc0NBQVk7Ozs7O0lBRVosMENBQTJDOzs7OztJQUMzQyw0Q0FBNEI7Ozs7O0lBQzVCLHFEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNoYXJlZENhcm91c2VsU2VydmljZSB7XG4gIE1BWF9XSURUSCA9IDM2MDtcbiAgTUFYX0lURU1fU0laRSA9IDQ7XG4gIFNQRUVEID0gMjUwO1xuXG4gIHByaXZhdGUgaXRlbVNpemUkID0gb2YodGhpcy5NQVhfSVRFTV9TSVpFKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtJCA9IG9mKDApO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YoMCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldEFjdGl2ZUl0ZW0oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtJDtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW1XaXRoRGVsYXkoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtV2l0aERlbGF5JDtcbiAgfVxuXG4gIGdldEl0ZW1TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVNpemUkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgc2hvd24gaW4gdGhlIGNhcm91c2VsIGNhbiBiZSBjYWxjdWxhdGVkXG4gICAqIHRoZSBzdGFuZGFyZCBpbXBsZW1lbmF0dGlvbnMgdXNlcyB0aGUgZWxlbWVudCBzaXplIHRvIGNhbGN1bGF0ZVxuICAgKiB0aGUgaXRlbXMgdGhhdCBmaXQgaW4gdGhlIGNhcm91c2VsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgaW4gYG5nT25Jbml0YC5cbiAgICovXG4gIHNldEl0ZW1TaXplKHdpbmRvdywgbmF0aXZlRWxlbWVudCkge1xuICAgIHRoaXMuaXRlbVNpemUkID0gIXdpbmRvd1xuICAgICAgPyBvZih0aGlzLk1BWF9JVEVNX1NJWkUpXG4gICAgICA6IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiAobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIHN0YXJ0V2l0aCgobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIC8vIGF2b2lkIHRvIG11Y2ggY2FsbHNcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgICBtYXAoKGlubmVyV2lkdGg6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNQZXJQYWdlID0gTWF0aC5yb3VuZChpbm5lcldpZHRoIC8gdGhpcy5NQVhfV0lEVEgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zUGVyUGFnZSA+IDIgPyB0aGlzLk1BWF9JVEVNX1NJWkUgOiBpdGVtc1BlclBhZ2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gb25seSBlbWl0IG5ldyBzaXplIHdoZW4gdGhlIHNpemUgY2hhbmdlZFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgfVxuXG4gIHNldEl0ZW1Bc0FjdGl2ZShuZXdBY3RpdmVJdGVtOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5pdGVtU2l6ZSQucGlwZShcbiAgICAgIG1hcChpdGVtU2l6ZSA9PiB0aGlzLnNldEl0ZW0obmV3QWN0aXZlSXRlbSwgaXRlbVNpemUpKVxuICAgICk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSAtIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0TmV4dEl0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSArIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJdGVtKG5ld0FjdGl2ZUl0ZW06IG51bWJlciwgaXRlbVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQgPSBvZihuZXdBY3RpdmVJdGVtKS5waXBlKFxuICAgICAgZGVsYXkodGhpcy5nZXREZWxheVZhbHVlKGl0ZW1TaXplKSlcbiAgICApO1xuICAgIHJldHVybiBuZXdBY3RpdmVJdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWxheVZhbHVlKGl0ZW1TaXplKSB7XG4gICAgcmV0dXJuIChpdGVtU2l6ZSAtIDEpICogdGhpcy5TUEVFRDtcbiAgfVxufVxuIl19