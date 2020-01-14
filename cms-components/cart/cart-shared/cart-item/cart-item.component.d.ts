import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureConfigService } from '@spartacus/core';
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
export interface CartItemComponentOptions {
    isSaveForLater?: boolean;
    optionalBtn?: any;
}
export declare class CartItemComponent implements OnInit {
    protected promotionService: PromotionService;
    private featureConfig?;
    compact: boolean;
    item: Item;
    isReadOnly: boolean;
    cartIsLoading: boolean;
    options: CartItemComponentOptions;
    promotionLocation: PromotionLocation;
    potentialProductPromotions: any[];
    remove: EventEmitter<any>;
    update: EventEmitter<any>;
    view: EventEmitter<any>;
    parent: FormGroup;
    appliedProductPromotions$: Observable<PromotionResult[]>;
    constructor(promotionService: PromotionService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(promotionService: PromotionService);
    ngOnInit(): void;
    isSaveForLaterEnabled(): boolean;
    isProductOutOfStock(product: any): boolean;
    updateItem(updatedQuantity: number): void;
    removeItem(): void;
    viewItem(): void;
}
