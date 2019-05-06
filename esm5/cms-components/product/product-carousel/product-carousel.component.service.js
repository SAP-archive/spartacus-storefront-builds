/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, startWith, withLatestFrom, } from 'rxjs/operators';
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
        this.items$ = this.component.data$.pipe(filter(function (data) { return data && !!data.productCodes; }), map(function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsY0FBYyxHQUVmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBWUUsZ0NBQ1ksU0FBd0QsRUFDMUQsY0FBOEI7UUFENUIsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWnhDLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUdKLGNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU1sQyxDQUFDOzs7O0lBRUosOENBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx1REFBc0I7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OztJQUNwRCwyQ0FBMkM7Ozs7O0lBQzNDLDZDQUE0Qjs7Ozs7SUFDNUIsc0RBQXFDOzs7OztJQUNyQyx3Q0FBbUM7Ozs7O0lBR2pDLDJDQUFrRTs7Ozs7SUFDbEUsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUHJvZHVjdENhcm91c2VsQ29tcG9uZW50LFxuICBQcm9kdWN0U2VydmljZSxcbiAgVUlQcm9kdWN0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkZWxheSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIHtcbiAgTUFYX1dJRFRIID0gMzYwO1xuICBNQVhfSVRFTV9TSVpFID0gNDtcbiAgU1BFRUQgPSAyNTA7XG5cbiAgcHJpdmF0ZSBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxVSVByb2R1Y3Q+W10+O1xuICBwcml2YXRlIGl0ZW1TaXplJCA9IG9mKHRoaXMuTUFYX0lURU1fU0laRSk7XG4gIHByaXZhdGUgYWN0aXZlSXRlbSQgPSBvZigwKTtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtV2l0aERlbGF5JCA9IG9mKDApO1xuICBwcml2YXRlIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdENhcm91c2VsQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0QWN0aXZlSXRlbSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUl0ZW0kO1xuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbVdpdGhEZWxheSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUl0ZW1XaXRoRGVsYXkkO1xuICB9XG5cbiAgZ2V0VGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSQ7XG4gIH1cblxuICBzZXRUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0SXRlbXMoKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFVJUHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJDtcbiAgfVxuXG4gIGdldEl0ZW1TaXplKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVNpemUkO1xuICB9XG4gIC8qKlxuICAgKiBNYXBzIHRoZSBpdGVtIGNvZGVzIGZyb20gQ01TIGNvbXBvbmVudCB0byBhbiBhcnJheSBvZiBgUHJvZHVjdGAgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBzZXRJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhICYmICEhZGF0YS5wcm9kdWN0Q29kZXMpLFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0Q29kZXMgPSBkYXRhLnByb2R1Y3RDb2Rlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdENvZGVzLm1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBjYW4gYmUgY2FsY3VsYXRlZFxuICAgKiB0aGUgc3RhbmRhcmQgaW1wbGVtZW5hdHRpb25zIHVzZXMgdGhlIGVsZW1lbnQgc2l6ZSB0byBjYWxjdWxhdGVcbiAgICogdGhlIGl0ZW1zIHRoYXQgZml0IGluIHRoZSBjYXJvdXNlbC5cbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIGBuZ09uSW5pdGAuXG4gICAqL1xuICBzZXRJdGVtU2l6ZSh3aW5kb3csIG5hdGl2ZUVsZW1lbnQpIHtcbiAgICB0aGlzLml0ZW1TaXplJCA9ICF3aW5kb3dcbiAgICAgID8gb2YodGhpcy5NQVhfSVRFTV9TSVpFKVxuICAgICAgOiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICBzdGFydFdpdGgoKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgICAvLyBhdm9pZCB0byBtdWNoIGNhbGxzXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICAgbWFwKChpbm5lcldpZHRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IE1hdGgucm91bmQoaW5uZXJXaWR0aCAvIHRoaXMuTUFYX1dJRFRIKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtc1BlclBhZ2UgPiAyID8gdGhpcy5NQVhfSVRFTV9TSVpFIDogaXRlbXNQZXJQYWdlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIG9ubHkgZW1pdCBuZXcgc2l6ZSB3aGVuIHRoZSBzaXplIGNoYW5nZWRcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gIH1cblxuICBzZXRJdGVtQXNBY3RpdmUobmV3QWN0aXZlSXRlbTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuaXRlbVNpemUkLnBpcGUoXG4gICAgICBtYXAoaXRlbVNpemUgPT4gdGhpcy5zZXRJdGVtKG5ld0FjdGl2ZUl0ZW0sIGl0ZW1TaXplKSlcbiAgICApO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gLSBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNldE5leHRJdGVtQXNBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJdGVtJCA9IHRoaXMuYWN0aXZlSXRlbSQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuaXRlbVNpemUkKSxcbiAgICAgIG1hcCgoW2FjdGl2ZUl0ZW0sIGl0ZW1TaXplXTogW251bWJlciwgbnVtYmVyXSkgPT5cbiAgICAgICAgdGhpcy5zZXRJdGVtKGFjdGl2ZUl0ZW0gKyBpdGVtU2l6ZSwgaXRlbVNpemUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SXRlbShuZXdBY3RpdmVJdGVtOiBudW1iZXIsIGl0ZW1TaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1XaXRoRGVsYXkkID0gb2YobmV3QWN0aXZlSXRlbSkucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkpXG4gICAgKTtcbiAgICByZXR1cm4gbmV3QWN0aXZlSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVsYXlWYWx1ZShpdGVtU2l6ZSkge1xuICAgIHJldHVybiAoaXRlbVNpemUgLSAxKSAqIHRoaXMuU1BFRUQ7XG4gIH1cbn1cbiJdfQ==