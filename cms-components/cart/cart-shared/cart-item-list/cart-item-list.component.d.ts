import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Item } from '../cart-item/cart-item.component';
export declare class CartItemListComponent implements OnInit {
    protected cartService: CartService;
    protected fb: FormBuilder;
    isReadOnly: boolean;
    hasHeader: boolean;
    potentialProductPromotions: PromotionResult[];
    promotionLocation: PromotionLocation;
    items: Item[];
    cartIsLoading: boolean;
    form: FormGroup;
    private _items;
    constructor(cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    removeEntry(item: Item): void;
    updateEntry({ item, updatedQuantity, }: {
        item: any;
        updatedQuantity: number;
    }): void;
    private createEntryFormGroup;
    getPotentialProductPromotionsForItem(item: Item): PromotionResult[];
    private isConsumedByEntry;
}
