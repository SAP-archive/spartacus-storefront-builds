import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export interface Item {
    entryNumber?: number;
    product?: any;
    quantity?: any;
    basePrice?: any;
    totalPrice?: any;
    updateable?: boolean;
}
export interface CartItemComponentOptions {
    isSaveForLater?: boolean;
    optionalBtn?: any;
}
export declare class CartItemComponent implements OnInit {
    protected promotionService: PromotionService;
    compact: boolean;
    item: Item;
    readonly: boolean;
    quantityControl: FormControl;
    view: EventEmitter<any>;
    promotionLocation: PromotionLocation;
    options: CartItemComponentOptions;
    appliedProductPromotions$: Observable<PromotionResult[]>;
    constructor(promotionService: PromotionService);
    ngOnInit(): void;
    isProductOutOfStock(product: any): boolean;
    removeItem(): void;
    viewItem(): void;
}
