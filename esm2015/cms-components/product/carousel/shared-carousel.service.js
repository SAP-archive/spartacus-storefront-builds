/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            : fromEvent(window, 'resize').pipe(map(() => ((/** @type {?} */ (nativeElement))).clientWidth), startWith(((/** @type {?} */ (nativeElement))).clientWidth), 
            // avoid to much calls
            debounceTime(100), map((innerWidth) => {
                /** @type {?} */
                const itemsPerPage = Math.round(innerWidth / this.MAX_WIDTH);
                return itemsPerPage > 2 ? this.MAX_ITEM_SIZE : itemsPerPage;
            }), 
            // only emit new size when the size changed
            distinctUntilChanged());
    }
    /**
     * @param {?} newActiveItem
     * @return {?}
     */
    setItemAsActive(newActiveItem) {
        this.activeItem$ = this.itemSize$.pipe(map(itemSize => this.setItem(newActiveItem, itemSize)));
    }
    /**
     * @return {?}
     */
    setPreviousItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(([activeItem, itemSize]) => this.setItem(activeItem - itemSize, itemSize)));
    }
    /**
     * @return {?}
     */
    setNextItemAsActive() {
        this.activeItem$ = this.activeItem$.pipe(withLatestFrom(this.itemSize$), map(([activeItem, itemSize]) => this.setItem(activeItem + itemSize, itemSize)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNhcm91c2VsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3NoYXJlZC1jYXJvdXNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQ1osS0FBSyxFQUNMLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEM7UUFSQSxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxHQUFHLENBQUM7UUFFSixjQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsQ0FBQzs7OztJQUVoQixhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7Ozs7OztJQVFELFdBQVcsQ0FBQyxNQUFNLEVBQUUsYUFBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTTtZQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxTQUFTLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNyRCxzQkFBc0I7WUFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHLENBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRTs7c0JBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM1RCxPQUFPLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUM5RCxDQUFDLENBQUM7WUFDRiwyQ0FBMkM7WUFDM0Msb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGFBQXFCO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3BDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBbUIsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDOUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN0QyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUM5QixHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQW1CLEVBQUUsRUFBRSxDQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQzlDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxPQUFPLENBQUMsYUFBcUIsRUFBRSxRQUFnQjtRQUNyRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDcEMsQ0FBQztRQUNGLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUFRO1FBQzVCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7WUFoRkYsVUFBVTs7Ozs7O0lBRVQsMENBQWdCOztJQUNoQiw4Q0FBa0I7O0lBQ2xCLHNDQUFZOzs7OztJQUVaLDBDQUEyQzs7Ozs7SUFDM0MsNENBQTRCOzs7OztJQUM1QixxREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZWRDYXJvdXNlbFNlcnZpY2Uge1xuICBNQVhfV0lEVEggPSAzNjA7XG4gIE1BWF9JVEVNX1NJWkUgPSA0O1xuICBTUEVFRCA9IDI1MDtcblxuICBwcml2YXRlIGl0ZW1TaXplJCA9IG9mKHRoaXMuTUFYX0lURU1fU0laRSk7XG4gIHByaXZhdGUgYWN0aXZlSXRlbSQgPSBvZigwKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtV2l0aERlbGF5JCA9IG9mKDApO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBY3RpdmVJdGVtKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbSQ7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtV2l0aERlbGF5KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQ7XG4gIH1cblxuICBnZXRJdGVtU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1TaXplJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBjYW4gYmUgY2FsY3VsYXRlZFxuICAgKiB0aGUgc3RhbmRhcmQgaW1wbGVtZW5hdHRpb25zIHVzZXMgdGhlIGVsZW1lbnQgc2l6ZSB0byBjYWxjdWxhdGVcbiAgICogdGhlIGl0ZW1zIHRoYXQgZml0IGluIHRoZSBjYXJvdXNlbC5cbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGBuZ09uSW5pdGAuXG4gICAqL1xuICBzZXRJdGVtU2l6ZSh3aW5kb3csIG5hdGl2ZUVsZW1lbnQpIHtcbiAgICB0aGlzLml0ZW1TaXplJCA9ICF3aW5kb3dcbiAgICAgID8gb2YodGhpcy5NQVhfSVRFTV9TSVpFKVxuICAgICAgOiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICBzdGFydFdpdGgoKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICAvLyBhdm9pZCB0byBtdWNoIGNhbGxzXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgbWFwKChpbm5lcldpZHRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IE1hdGgucm91bmQoaW5uZXJXaWR0aCAvIHRoaXMuTUFYX1dJRFRIKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtc1BlclBhZ2UgPiAyID8gdGhpcy5NQVhfSVRFTV9TSVpFIDogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIG9ubHkgZW1pdCBuZXcgc2l6ZSB3aGVuIHRoZSBzaXplIGNoYW5nZWRcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gIH1cblxuICBzZXRJdGVtQXNBY3RpdmUobmV3QWN0aXZlSXRlbTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuaXRlbVNpemUkLnBpcGUoXG4gICAgICBtYXAoaXRlbVNpemUgPT4gdGhpcy5zZXRJdGVtKG5ld0FjdGl2ZUl0ZW0sIGl0ZW1TaXplKSlcbiAgICApO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gLSBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNldE5leHRJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gKyBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SXRlbShuZXdBY3RpdmVJdGVtOiBudW1iZXIsIGl0ZW1TaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YobmV3QWN0aXZlSXRlbSkucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkpXG4gICAgKTtcbiAgICByZXR1cm4gbmV3QWN0aXZlSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkge1xuICAgIHJldHVybiAoaXRlbVNpemUgLSAxKSAqIHRoaXMuU1BFRUQ7XG4gIH1cbn1cbiJdfQ==