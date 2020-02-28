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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlLCBQcm9tb3Rpb25Mb2NhdGlvbiwgUHJvbW90aW9uUmVzdWx0LCBTZWxlY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsIEl0ZW0gfSBmcm9tICcuLi9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPztcbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBoYXNIZWFkZXI6IGJvb2xlYW47XG4gICAgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zO1xuICAgIHByaXZhdGUgX2l0ZW1zO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzZXQgaXRlbXMoaXRlbXM6IEl0ZW1bXSk7XG4gICAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXTtcbiAgICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W107XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKTtcbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhdXRoU2VydmljZSByb3V0aW5nU2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG4gICAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgICAqIEluIGNhc2Ugb2YgYSBgY29uc2lnbm1lbnRFbnRyeWAsIHdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIG9yZGVyRW50cnkuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlSXRlbXM7XG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtO1xuICAgIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkO1xuICAgIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPjtcbiAgICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdO1xuICAgIHByaXZhdGUgaXNDb25zdW1lZEJ5RW50cnk7XG59XG4iXX0=