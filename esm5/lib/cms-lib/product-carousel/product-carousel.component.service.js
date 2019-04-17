/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, startWith, delay, withLatestFrom, } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var ProductCarouselService = /** @class */ (function () {
    function ProductCarouselService(component, productService) {
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
    ProductCarouselService.prototype.getActiveItem = /**
     * @return {?}
     */
    function () {
        return this.activeItem$;
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getActiveItemWithDelay = /**
     * @return {?}
     */
    function () {
        return this.activeItemWithDelay$;
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        return this.title$;
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.setTitle = /**
     * @return {?}
     */
    function () {
        this.title$ = this.component.data$.pipe(map(function (data) {
            return data.title;
        }));
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return this.items$;
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getItemSize = /**
     * @return {?}
     */
    function () {
        return this.itemSize$;
    };
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     */
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    ProductCarouselService.prototype.setItems = /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    function () {
        var _this = this;
        this.items$ = this.component.data$.pipe(map(function (data) {
            /** @type {?} */
            var productCodes = data.productCodes.split(' ');
            return productCodes.map(function (code) { return _this.productService.get(code); });
        }));
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
    ProductCarouselService.prototype.setItemSize = /**
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
    ProductCarouselService.prototype.setItemAsActive = /**
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
    ProductCarouselService.prototype.setPreviousItemAsActive = /**
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
    ProductCarouselService.prototype.setNextItemAsActive = /**
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
    ProductCarouselService.prototype.setItem = /**
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
    ProductCarouselService.prototype.getDelayValue = /**
     * @private
     * @param {?} itemSize
     * @return {?}
     */
    function (itemSize) {
        return (itemSize - 1) * this.SPEED;
    };
    ProductCarouselService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductCarouselService.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService }
    ]; };
    return ProductCarouselService;
}());
export { ProductCarouselService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLGNBQWMsR0FHZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQ1osR0FBRyxFQUNILG9CQUFvQixFQUNwQixTQUFTLEVBQ1QsS0FBSyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBWUUsZ0NBQ1ksU0FBd0QsRUFDMUQsY0FBOEI7UUFENUIsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWnhDLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUdKLGNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU1sQyxDQUFDOzs7O0lBRUosOENBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx1REFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFB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Q29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0LFxuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgbWFwLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgc3RhcnRXaXRoLFxuICBkZWxheSxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIE1BWF9XSURUSCA9IDM2MDtcbiAgTUFYX0lURU1fU0laRSA9IDQ7XG4gIFNQRUVEID0gMjUwO1xuXG4gIHByaXZhdGUgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT47XG4gIHByaXZhdGUgaXRlbVNpemUkID0gb2YodGhpcy5NQVhfSVRFTV9TSVpFKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtJCA9IG9mKDApO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YoMCk7XG4gIHByaXZhdGUgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBnZXRBY3RpdmVJdGVtKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbSQ7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtV2l0aERlbGF5KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQ7XG4gIH1cblxuICBnZXRUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRpdGxlJDtcbiAgfVxuXG4gIHNldFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRJdGVtcygpOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJDtcbiAgfVxuXG4gIGdldEl0ZW1TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVNpemUkO1xuICB9XG4gIC8qKlxuICAgKiBNYXBzIHRoZSBpdGVtIGNvZGVzIGZyb20gQ01TIGNvbXBvbmVudCB0byBhbiBhcnJheSBvZiBgUHJvZHVjdGAgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBzZXRJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RDb2RlcyA9IGRhdGEucHJvZHVjdENvZGVzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0Q29kZXMubWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgc2hvd24gaW4gdGhlIGNhcm91c2VsIGNhbiBiZSBjYWxjdWxhdGVkXG4gICAqIHRoZSBzdGFuZGFyZCBpbXBsZW1lbmF0dGlvbnMgdXNlcyB0aGUgZWxlbWVudCBzaXplIHRvIGNhbGN1bGF0ZVxuICAgKiB0aGUgaXRlbXMgdGhhdCBmaXQgaW4gdGhlIGNhcm91c2VsLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgaW4gYG5nT25Jbml0YC5cbiAgICovXG4gIHNldEl0ZW1TaXplKHdpbmRvdywgbmF0aXZlRWxlbWVudCkge1xuICAgIHRoaXMuaXRlbVNpemUkID0gIXdpbmRvd1xuICAgICAgPyBvZih0aGlzLk1BWF9JVEVNX1NJWkUpXG4gICAgICA6IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiAobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIHN0YXJ0V2l0aCgobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICAgIC8vIGF2b2lkIHRvIG11Y2ggY2FsbHNcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgICBtYXAoKGlubmVyV2lkdGg6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNQZXJQYWdlID0gTWF0aC5yb3VuZChpbm5lcldpZHRoIC8gdGhpcy5NQVhfV0lEVEgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zUGVyUGFnZSA+IDIgPyB0aGlzLk1BWF9JVEVNX1NJWkUgOiBpdGVtc1BlclBhZ2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gb25seSBlbWl0IG5ldyBzaXplIHdoZW4gdGhlIHNpemUgY2hhbmdlZFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgfVxuXG4gIHNldEl0ZW1Bc0FjdGl2ZShuZXdBY3RpdmVJdGVtOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5pdGVtU2l6ZSQucGlwZShcbiAgICAgIG1hcChpdGVtU2l6ZSA9PiB0aGlzLnNldEl0ZW0obmV3QWN0aXZlSXRlbSwgaXRlbVNpemUpKVxuICAgICk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSAtIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0TmV4dEl0ZW1Bc0FjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kID0gdGhpcy5hY3RpdmVJdGVtJC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5pdGVtU2l6ZSQpLFxuICAgICAgbWFwKChbYWN0aXZlSXRlbSwgaXRlbVNpemVdOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxuICAgICAgICB0aGlzLnNldEl0ZW0oYWN0aXZlSXRlbSArIGl0ZW1TaXplLCBpdGVtU2l6ZSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJdGVtKG5ld0FjdGl2ZUl0ZW06IG51bWJlciwgaXRlbVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlSXRlbVdpdGhEZWxheSQgPSBvZihuZXdBY3RpdmVJdGVtKS5waXBlKFxuICAgICAgZGVsYXkodGhpcy5nZXREZWxheVZhbHVlKGl0ZW1TaXplKSlcbiAgICApO1xuICAgIHJldHVybiBuZXdBY3RpdmVJdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWxheVZhbHVlKGl0ZW1TaXplKSB7XG4gICAgcmV0dXJuIChpdGVtU2l6ZSAtIDEpICogdGhpcy5TUEVFRDtcbiAgfVxufVxuIl19