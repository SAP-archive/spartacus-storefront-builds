import { FormGroup } from '@angular/forms';
import { CartService, FeatureConfigService, PromotionLocation, PromotionResult, SelectiveCartService } from '@spartacus/core';
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
    potentialProductPromotions: PromotionResult[];
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
    getPotentialProductPromotionsForItem(item: Item): PromotionResult[];
    private isConsumedByEntry;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemListComponent, "cx-cart-item-list", never, {
    "readonly": "readonly";
    "hasHeader": "hasHeader";
    "options": "options";
    "potentialProductPromotions": "potentialProductPromotions";
    "promotionLocation": "promotionLocation";
    "items": "items";
    "setLoading": "cartIsLoading";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsIFByb21vdGlvbkxvY2F0aW9uLCBQcm9tb3Rpb25SZXN1bHQsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucywgSXRlbSB9IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/O1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIGhhc0hlYWRlcjogYm9vbGVhbjtcbiAgICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfaXRlbXM7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKTtcbiAgICBnZXQgaXRlbXMoKTogSXRlbVtdO1xuICAgIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb247XG4gICAgc2V0IHNldExvYWRpbmcodmFsdWU6IGJvb2xlYW4pO1xuICAgIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogQWRkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlIGF1dGhTZXJ2aWNlIHJvdXRpbmdTZXJ2aWNlIGFuZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcbiAgICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbXMgd2UncmUgZ2V0dGluZyBmb3JtIHRoZSBpbnB1dCBkbyBub3QgaGF2ZSBhIGNvbnNpc3RlbnQgbW9kZWwuXG4gICAgICogSW4gY2FzZSBvZiBhIGBjb25zaWdubWVudEVudHJ5YCwgd2UgbmVlZCB0byBub3JtYWxpemUgdGhlIGRhdGEgZnJvbSB0aGUgb3JkZXJFbnRyeS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc29sdmVJdGVtcztcbiAgICBwcml2YXRlIGNyZWF0ZUZvcm07XG4gICAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQ7XG4gICAgZ2V0Q29udHJvbChpdGVtOiBJdGVtKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+O1xuICAgIGdldFBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zRm9ySXRlbShpdGVtOiBJdGVtKTogUHJvbW90aW9uUmVzdWx0W107XG4gICAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeTtcbn1cbiJdfQ==