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

//# sourceMappingURL=cart-item-list.component.d.ts.map