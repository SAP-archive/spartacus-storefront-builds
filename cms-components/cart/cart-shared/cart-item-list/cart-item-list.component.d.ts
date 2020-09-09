import { FormGroup } from '@angular/forms';
import { ActiveCartService, PromotionLocation, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartItemComponentOptions, Item } from '../cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class CartItemListComponent {
    protected activeCartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    readonly: boolean;
    hasHeader: boolean;
    options: CartItemComponentOptions;
    private _items;
    form: FormGroup;
    set items(items: Item[]);
    get items(): Item[];
    promotionLocation: PromotionLocation;
    set setLoading(value: boolean);
    constructor(activeCartService: ActiveCartService, selectiveCartService: SelectiveCartService);
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    private resolveItems;
    private createForm;
    removeEntry(item: Item): void;
    getControl(item: Item): Observable<FormGroup>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemListComponent, "cx-cart-item-list", never, { "readonly": "readonly"; "hasHeader": "hasHeader"; "options": "options"; "promotionLocation": "promotionLocation"; "items": "items"; "setLoading": "cartIsLoading"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBQcm9tb3Rpb25Mb2NhdGlvbiwgU2VsZWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zLCBJdGVtIH0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcmVhZG9ubHk6IGJvb2xlYW47XG4gICAgaGFzSGVhZGVyOiBib29sZWFuO1xuICAgIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucztcbiAgICBwcml2YXRlIF9pdGVtcztcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgc2V0IGl0ZW1zKGl0ZW1zOiBJdGVtW10pO1xuICAgIGdldCBpdGVtcygpOiBJdGVtW107XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKTtcbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgICAqIEluIGNhc2Ugb2YgYSBgY29uc2lnbm1lbnRFbnRyeWAsIHdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIG9yZGVyRW50cnkuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlSXRlbXM7XG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtO1xuICAgIHJlbW92ZUVudHJ5KGl0ZW06IEl0ZW0pOiB2b2lkO1xuICAgIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPjtcbn1cbiJdfQ==