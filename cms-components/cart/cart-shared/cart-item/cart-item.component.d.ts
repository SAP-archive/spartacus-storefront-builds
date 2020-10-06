import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemComponent, "cx-cart-item", never, { "compact": "compact"; "readonly": "readonly"; "promotionLocation": "promotionLocation"; "options": "options"; "item": "item"; "quantityControl": "quantityControl"; }, { "view": "view"; }, never, never>;
}

//# sourceMappingURL=cart-item.component.d.ts.map