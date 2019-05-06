/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, startWith, withLatestFrom, } from 'rxjs/operators';
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
        this.items$ = this.component.data$.pipe(filter(data => data && !!data.productCodes), map(data => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxjQUFjLEdBRWYsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFXakMsWUFDWSxTQUF3RCxFQUMxRCxjQUE4QjtRQUQ1QixjQUFTLEdBQVQsU0FBUyxDQUErQztRQUMxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFaeEMsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR0osY0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFSixhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7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LElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBbUIsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDOUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLE9BQU8sQ0FBQyxhQUFxQixFQUFFLFFBQWdCO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNwQyxDQUFDO1FBQ0YsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFFBQVE7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7OztZQWpIRixVQUFVOzs7O1lBRkYsZ0JBQWdCO1lBYnZCLGNBQWM7Ozs7SUFpQmQsMkNBQWdCOztJQUNoQiwrQ0FBa0I7O0lBQ2xCLHVDQUFZOzs7OztJQUVaLHdDQUFvRDs7Ozs7SUFDcEQsMkNBQTJDOzs7OztJQUMzQyw2Q0FBNEI7Ozs7O0lBQzVCLHNEQUFxQzs7Ozs7SUFDckMsd0NBQW1DOzs7OztJQUdqQywyQ0FBa0U7Ozs7O0lBQ2xFLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFVJUHJvZHVjdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsU2VydmljZSB7XG4gIE1BWF9XSURUSCA9IDM2MDtcbiAgTUFYX0lURU1fU0laRSA9IDQ7XG4gIFNQRUVEID0gMjUwO1xuXG4gIHByaXZhdGUgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VUlQcm9kdWN0PltdPjtcbiAgcHJpdmF0ZSBpdGVtU2l6ZSQgPSBvZih0aGlzLk1BWF9JVEVNX1NJWkUpO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW0kID0gb2YoMCk7XG4gIHByaXZhdGUgYWN0aXZlSXRlbVdpdGhEZWxheSQgPSBvZigwKTtcbiAgcHJpdmF0ZSB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldEFjdGl2ZUl0ZW0oKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtJDtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW1XaXRoRGVsYXkoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtV2l0aERlbGF5JDtcbiAgfVxuXG4gIGdldFRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUkO1xuICB9XG5cbiAgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxVSVByb2R1Y3Q+W10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cblxuICBnZXRJdGVtU2l6ZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1TaXplJDtcbiAgfVxuICAvKipcbiAgICogTWFwcyB0aGUgaXRlbSBjb2RlcyBmcm9tIENNUyBjb21wb25lbnQgdG8gYW4gYXJyYXkgb2YgYFByb2R1Y3RgIG9ic2VydmFibGVzLlxuICAgKi9cbiAgc2V0SXRlbXMoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YSAmJiAhIWRhdGEucHJvZHVjdENvZGVzKSxcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdENvZGVzID0gZGF0YS5wcm9kdWN0Q29kZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RDb2Rlcy5tYXAoY29kZSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBpbiB0aGUgY2Fyb3VzZWwgY2FuIGJlIGNhbGN1bGF0ZWRcbiAgICogdGhlIHN0YW5kYXJkIGltcGxlbWVuYXR0aW9ucyB1c2VzIHRoZSBlbGVtZW50IHNpemUgdG8gY2FsY3VsYXRlXG4gICAqIHRoZSBpdGVtcyB0aGF0IGZpdCBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBpbiBgbmdPbkluaXRgLlxuICAgKi9cbiAgc2V0SXRlbVNpemUod2luZG93LCBuYXRpdmVFbGVtZW50KSB7XG4gICAgdGhpcy5pdGVtU2l6ZSQgPSAhd2luZG93XG4gICAgICA/IG9mKHRoaXMuTUFYX0lURU1fU0laRSlcbiAgICAgIDogZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICAgICAgc3RhcnRXaXRoKChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICAgICAgLy8gYXZvaWQgdG8gbXVjaCBjYWxsc1xuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICAgIG1hcCgoaW5uZXJXaWR0aDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSBNYXRoLnJvdW5kKGlubmVyV2lkdGggLyB0aGlzLk1BWF9XSURUSCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXNQZXJQYWdlID4gMiA/IHRoaXMuTUFYX0lURU1fU0laRSA6IGl0ZW1zUGVyUGFnZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBvbmx5IGVtaXQgbmV3IHNpemUgd2hlbiB0aGUgc2l6ZSBjaGFuZ2VkXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApO1xuICB9XG5cbiAgc2V0SXRlbUFzQWN0aXZlKG5ld0FjdGl2ZUl0ZW06IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlSXRlbSQgPSB0aGlzLml0ZW1TaXplJC5waXBlKFxuICAgICAgbWFwKGl0ZW1TaXplID0+IHRoaXMuc2V0SXRlbShuZXdBY3RpdmVJdGVtLCBpdGVtU2l6ZSkpXG4gICAgKTtcbiAgfVxuXG4gIHNldFByZXZpb3VzSXRlbUFzQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSXRlbSQgPSB0aGlzLmFjdGl2ZUl0ZW0kLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLml0ZW1TaXplJCksXG4gICAgICBtYXAoKFthY3RpdmVJdGVtLCBpdGVtU2l6ZV06IFtudW1iZXIsIG51bWJlcl0pID0+XG4gICAgICAgIHRoaXMuc2V0SXRlbShhY3RpdmVJdGVtIC0gaXRlbVNpemUsIGl0ZW1TaXplKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZXROZXh0SXRlbUFzQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlSXRlbSQgPSB0aGlzLmFjdGl2ZUl0ZW0kLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLml0ZW1TaXplJCksXG4gICAgICBtYXAoKFthY3RpdmVJdGVtLCBpdGVtU2l6ZV06IFtudW1iZXIsIG51bWJlcl0pID0+XG4gICAgICAgIHRoaXMuc2V0SXRlbShhY3RpdmVJdGVtICsgaXRlbVNpemUsIGl0ZW1TaXplKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldEl0ZW0obmV3QWN0aXZlSXRlbTogbnVtYmVyLCBpdGVtU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtV2l0aERlbGF5JCA9IG9mKG5ld0FjdGl2ZUl0ZW0pLnBpcGUoXG4gICAgICBkZWxheSh0aGlzLmdldERlbGF5VmFsdWUoaXRlbVNpemUpKVxuICAgICk7XG4gICAgcmV0dXJuIG5ld0FjdGl2ZUl0ZW07XG4gIH1cblxuICBwcml2YXRlIGdldERlbGF5VmFsdWUoaXRlbVNpemUpIHtcbiAgICByZXR1cm4gKGl0ZW1TaXplIC0gMSkgKiB0aGlzLlNQRUVEO1xuICB9XG59XG4iXX0=