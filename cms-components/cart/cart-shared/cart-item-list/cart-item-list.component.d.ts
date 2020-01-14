import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService, PromotionResult, PromotionLocation, SelectiveCartService, FeatureConfigService } from '@spartacus/core';
import { Item, CartItemComponentOptions } from '../cart-item/cart-item.component';
export declare class CartItemListComponent implements OnInit {
    protected cartService: CartService;
    protected fb: FormBuilder;
    protected selectiveCartService?: SelectiveCartService;
    private featureConfig?;
    isReadOnly: boolean;
    hasHeader: boolean;
    options: CartItemComponentOptions;
    potentialProductPromotions: PromotionResult[];
    promotionLocation: PromotionLocation;
    items: Item[];
    cartIsLoading: boolean;
    form: FormGroup;
    private _items;
    constructor(cartService: CartService, fb: FormBuilder, selectiveCartService: SelectiveCartService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add selectiveCartService authService routingService and featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    isSaveForLaterEnabled(): boolean;
    removeEntry(item: Item): void;
    updateEntry({ item, updatedQuantity, }: {
        item: any;
        updatedQuantity: number;
    }): void;
    private createEntryFormGroup;
    getPotentialProductPromotionsForItem(item: Item): PromotionResult[];
    private isConsumedByEntry;
}
