import { FormGroup } from '@angular/forms';
import { CartService, FeatureConfigService, PromotionLocation, PromotionResult, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartItemComponentOptions, Item } from '../cart-item/cart-item.component';
export declare class CartItemListComponent {
    protected cartService: CartService;
    protected selectiveCartService?: SelectiveCartService;
    private featureConfig?;
    readonly: boolean;
    hasHeader: boolean;
    options: CartItemComponentOptions;
    private _items;
    form: FormGroup;
    items: Item[];
    potentialProductPromotions: PromotionResult[];
    promotionLocation: PromotionLocation;
    setLoading: boolean;
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
}
