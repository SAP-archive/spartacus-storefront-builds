import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService, PromotionResult } from '@spartacus/core';
import { Item } from '../../cart-shared/cart-item/cart-item.component';
export declare class CartItemListComponent implements OnInit {
    protected cartService: CartService;
    protected fb: FormBuilder;
    isReadOnly: boolean;
    hasHeader: boolean;
    items: Item[];
    potentialProductPromotions: PromotionResult[];
    cartIsLoading: boolean;
    form: FormGroup;
    constructor(cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    removeEntry(item: Item): void;
    updateEntry({ item, updatedQuantity, }: {
        item: any;
        updatedQuantity: number;
    }): void;
    getPotentialProductPromotionsForItem(item: Item): PromotionResult[];
    private createEntryFormGroup;
    private isConsumedByEntry;
}
