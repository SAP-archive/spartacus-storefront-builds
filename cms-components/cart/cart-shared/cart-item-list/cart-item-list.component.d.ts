import { FormGroup } from '@angular/forms';
import { CartService, FeatureConfigService, PromotionLocation, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartItemComponentOptions, Item } from '../cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class CartItemListComponent {
    protected cartService: CartService;
    protected selectiveCartService?: SelectiveCartService;
    private featureConfig?;
    readonly: boolean;
    hasHeader: boolean;
    options: CartItemComponentOptions;
    private _items;
    form: FormGroup;
    set items(items: Item[]);
    get items(): Item[];
    promotionLocation: PromotionLocation;
    set setLoading(value: boolean);
    constructor(cartService: CartService, selectiveCartService: SelectiveCartService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add selectiveCartService authService routingService and featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(cartService: CartService);
    isSaveForLaterEnabled(): boolean;
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    private resolveItems;
    private createForm;
    removeEntry(item: Item): void;
    getControl(item: Item): Observable<FormGroup>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemListComponent, "cx-cart-item-list", never, {
    "readonly": "readonly";
    "hasHeader": "hasHeader";
    "options": "options";
    "promotionLocation": "promotionLocation";
    "items": "items";
    "setLoading": "cartIsLoading";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZSwgUHJvbW90aW9uTG9jYXRpb24sIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucywgSXRlbSB9IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/O1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIGhhc0hlYWRlcjogYm9vbGVhbjtcbiAgICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfaXRlbXM7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKTtcbiAgICBnZXQgaXRlbXMoKTogSXRlbVtdO1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBzZXQgc2V0TG9hZGluZyh2YWx1ZTogYm9vbGVhbik7XG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICAgKiBBZGQgc2VsZWN0aXZlQ2FydFNlcnZpY2UgYXV0aFNlcnZpY2Ugcm91dGluZ1NlcnZpY2UgYW5kIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuICAgIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBpdGVtcyB3ZSdyZSBnZXR0aW5nIGZvcm0gdGhlIGlucHV0IGRvIG5vdCBoYXZlIGEgY29uc2lzdGVudCBtb2RlbC5cbiAgICAgKiBJbiBjYXNlIG9mIGEgYGNvbnNpZ25tZW50RW50cnlgLCB3ZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBmcm9tIHRoZSBvcmRlckVudHJ5LlxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzb2x2ZUl0ZW1zO1xuICAgIHByaXZhdGUgY3JlYXRlRm9ybTtcbiAgICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZDtcbiAgICBnZXRDb250cm9sKGl0ZW06IEl0ZW0pOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD47XG59XG4iXX0=