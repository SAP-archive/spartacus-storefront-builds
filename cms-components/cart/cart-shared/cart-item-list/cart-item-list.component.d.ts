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

//# sourceMappingURL=cart-item-list.component.d.ts.map