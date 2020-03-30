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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemListComponent, "cx-cart-item-list", never, { "readonly": "readonly"; "hasHeader": "hasHeader"; "options": "options"; "promotionLocation": "promotionLocation"; "items": "items"; "setLoading": "cartIsLoading"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlLCBQcm9tb3Rpb25Mb2NhdGlvbiwgU2VsZWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zLCBJdGVtIH0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIGhhc0hlYWRlcjogYm9vbGVhbjtcbiAgICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfaXRlbXM7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKTtcbiAgICBnZXQgaXRlbXMoKTogSXRlbVtdO1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBzZXQgc2V0TG9hZGluZyh2YWx1ZTogYm9vbGVhbik7XG4gICAgY29uc3RydWN0b3IoYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgaXRlbXMgd2UncmUgZ2V0dGluZyBmb3JtIHRoZSBpbnB1dCBkbyBub3QgaGF2ZSBhIGNvbnNpc3RlbnQgbW9kZWwuXG4gICAgICogSW4gY2FzZSBvZiBhIGBjb25zaWdubWVudEVudHJ5YCwgd2UgbmVlZCB0byBub3JtYWxpemUgdGhlIGRhdGEgZnJvbSB0aGUgb3JkZXJFbnRyeS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc29sdmVJdGVtcztcbiAgICBwcml2YXRlIGNyZWF0ZUZvcm07XG4gICAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQ7XG4gICAgZ2V0Q29udHJvbChpdGVtOiBJdGVtKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+O1xufVxuIl19