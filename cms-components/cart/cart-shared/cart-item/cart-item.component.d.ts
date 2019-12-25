import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export interface Item {
    product?: any;
    quantity?: any;
    basePrice?: any;
    totalPrice?: any;
    updateable?: boolean;
}
export declare class CartItemComponent implements OnInit {
    protected promotionService: PromotionService;
    compact: boolean;
    item: Item;
    isReadOnly: boolean;
    cartIsLoading: boolean;
    promotionLocation: PromotionLocation;
    potentialProductPromotions: any[];
    remove: EventEmitter<any>;
    update: EventEmitter<any>;
    view: EventEmitter<any>;
    parent: FormGroup;
    appliedProductPromotions$: Observable<PromotionResult[]>;
    constructor(promotionService: PromotionService);
    ngOnInit(): void;
    isProductOutOfStock(product: any): boolean;
    updateItem(updatedQuantity: number): void;
    removeItem(): void;
    viewItem(): void;
}
