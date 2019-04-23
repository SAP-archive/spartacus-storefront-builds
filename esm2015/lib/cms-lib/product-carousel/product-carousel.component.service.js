/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, startWith, withLatestFrom, } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class ProductCarouselService {
    /**
     * @param {?} component
     * @param {?} productService
     */
    constructor(component, productService) {
        this.component = component;
        this.productService = productService;
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
    getTitle() {
        return this.title$;
    }
    /**
     * @return {?}
     */
    setTitle() {
        this.title$ = this.component.data$.pipe(map(data => {
            return data.title;
        }));
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.items$;
    }
    /**
     * @return {?}
     */
    getItemSize() {
        return this.itemSize$;
    }
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    setItems() {
        this.items$ = this.component.data$.pipe(map(data => {
            /** @type {?} */
            const productCodes = data.productCodes.split(' ');
            return productCodes.map(code => this.productService.get(code));
        }));
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
ProductCarouselService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductCarouselService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService }
];
if (false) {
    /** @type {?} */
    ProductCarouselService.prototype.MAX_WIDTH;
    /** @type {?} */
    ProductCarouselService.prototype.MAX_ITEM_SIZE;
    /** @type {?} */
    ProductCarouselService.prototype.SPEED;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.items$;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.itemSize$;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.activeItem$;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.activeItemWithDelay$;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.title$;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.component;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBRUwsY0FBYyxHQUVmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsb0JBQW9CLEVBQ3BCLEdBQUcsRUFDSCxTQUFTLEVBQ1QsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFXakMsWUFDWSxTQUF3RCxFQUMxRCxjQUE4QjtRQUQ1QixjQUFTLEdBQVQsU0FBUyxDQUErQztRQUMxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFaeEMsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR0osY0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFSixhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsT0FB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LENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFtQixFQUFFLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUM5QyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sT0FBTyxDQUFDLGFBQXFCLEVBQUUsUUFBZ0I7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ3BDLENBQUM7UUFDRixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsUUFBUTtRQUM1QixPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7O1lBaEhGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7WUFkdkIsY0FBYzs7OztJQWtCZCwyQ0FBZ0I7O0lBQ2hCLCtDQUFrQjs7SUFDbEIsdUNBQVk7Ozs7O0lBRVosd0NBQW9EOzs7OztJQUNwRCwyQ0FBMkM7Ozs7O0lBQzNDLDZDQUE0Qjs7Ozs7SUFDNUIsc0RBQXFDOzs7OztJQUNyQyx3Q0FBbUM7Ozs7O0lBR2pDLDJDQUFrRTs7Ozs7SUFDbEUsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBVSVByb2R1Y3QsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIE1BWF9XSURUSCA9IDM2MDtcbiAgTUFYX0lURU1fU0laRSA9IDQ7XG4gIFNQRUVEID0gMjUwO1xuXG4gIHByaXZhdGUgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VUlQcm9kdWN0PltdPjtcbiAgcHJpdmF0ZSBpdGVtU2l6ZSQgPSBvZih0aGlzLk1BWF9JVEVNX1NJWkUpO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW0kID0gb2YoMCk7XG4gIHByaXZhdGUgYWN0aXZlSXRlbVdpdGhEZWxheSQgPSBvZigwKTtcbiAgcHJpdmF0ZSB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldEFjdGl2ZUl0ZW0oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtJDtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW1XaXRoRGVsYXkoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtV2l0aERlbGF5JDtcbiAgfVxuXG4gIGdldFRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUkO1xuICB9XG5cbiAgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxVSVByb2R1Y3Q+W10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cblxuICBnZXRJdGVtU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1TaXplJDtcbiAgfVxuICAvKipcbiAgICogTWFwcyB0aGUgaXRlbSBjb2RlcyBmcm9tIENNUyBjb21wb25lbnQgdG8gYW4gYXJyYXkgb2YgYFByb2R1Y3RgIG9ic2VydmFibGVzLlxuICAgKi9cbiAgc2V0SXRlbXMoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0Q29kZXMgPSBkYXRhLnByb2R1Y3RDb2Rlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdENvZGVzLm1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBjYW4gYmUgY2FsY3VsYXRlZFxuICAgKiB0aGUgc3RhbmRhcmQgaW1wbGVtZW5hdHRpb25zIHVzZXMgdGhlIGVsZW1lbnQgc2l6ZSB0byBjYWxjdWxhdGVcbiAgICogdGhlIGl0ZW1zIHRoYXQgZml0IGluIHRoZSBjYXJvdXNlbC5cbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGBuZ09uSW5pdGAuXG4gICAqL1xuICBzZXRJdGVtU2l6ZSh3aW5kb3csIG5hdGl2ZUVsZW1lbnQpIHtcbiAgICB0aGlzLml0ZW1TaXplJCA9ICF3aW5kb3dcbiAgICAgID8gb2YodGhpcy5NQVhfSVRFTV9TSVpFKVxuICAgICAgOiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICBzdGFydFdpdGgoKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICAvLyBhdm9pZCB0byBtdWNoIGNhbGxzXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgbWFwKChpbm5lcldpZHRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IE1hdGgucm91bmQoaW5uZXJXaWR0aCAvIHRoaXMuTUFYX1dJRFRIKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtc1BlclBhZ2UgPiAyID8gdGhpcy5NQVhfSVRFTV9TSVpFIDogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIG9ubHkgZW1pdCBuZXcgc2l6ZSB3aGVuIHRoZSBzaXplIGNoYW5nZWRcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gIH1cblxuICBzZXRJdGVtQXNBY3RpdmUobmV3QWN0aXZlSXRlbTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuaXRlbVNpemUkLnBpcGUoXG4gICAgICBtYXAoaXRlbVNpemUgPT4gdGhpcy5zZXRJdGVtKG5ld0FjdGl2ZUl0ZW0sIGl0ZW1TaXplKSlcbiAgICApO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gLSBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNldE5leHRJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gKyBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SXRlbShuZXdBY3RpdmVJdGVtOiBudW1iZXIsIGl0ZW1TaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YobmV3QWN0aXZlSXRlbSkucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkpXG4gICAgKTtcbiAgICByZXR1cm4gbmV3QWN0aXZlSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkge1xuICAgIHJldHVybiAoaXRlbVNpemUgLSAxKSAqIHRoaXMuU1BFRUQ7XG4gIH1cbn1cbiJdfQ==