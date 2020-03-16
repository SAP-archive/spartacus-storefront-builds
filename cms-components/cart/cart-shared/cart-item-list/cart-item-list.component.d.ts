import { FormGroup } from '@angular/forms';
import { ActiveCartService, FeatureConfigService, PromotionLocation, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartItemComponentOptions, Item } from '../cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class CartItemListComponent {
    protected activeCartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    protected featureConfig: FeatureConfigService;
    readonly: boolean;
    hasHeader: boolean;
    options: CartItemComponentOptions;
    private _items;
    form: FormGroup;
    set items(items: Item[]);
    get items(): Item[];
    promotionLocation: PromotionLocation;
    set setLoading(value: boolean);
    constructor(activeCartService: ActiveCartService, selectiveCartService: SelectiveCartService, featureConfig: FeatureConfigService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZSwgUHJvbW90aW9uTG9jYXRpb24sIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucywgSXRlbSB9IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRJdGVtTGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBoYXNIZWFkZXI6IGJvb2xlYW47XG4gICAgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zO1xuICAgIHByaXZhdGUgX2l0ZW1zO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzZXQgaXRlbXMoaXRlbXM6IEl0ZW1bXSk7XG4gICAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXTtcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb247XG4gICAgc2V0IHNldExvYWRpbmcodmFsdWU6IGJvb2xlYW4pO1xuICAgIGNvbnN0cnVjdG9yKGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSwgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgICAqIEluIGNhc2Ugb2YgYSBgY29uc2lnbm1lbnRFbnRyeWAsIHdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIG9yZGVyRW50cnkuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlSXRlbXM7XG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtO1xuICAgIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkO1xuICAgIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPjtcbn1cbiJdfQ==