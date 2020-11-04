import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
/**
 * @deprecated since 3.0 - use `OrderEntry` instead
 */
import * as ɵngcc0 from '@angular/core';
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
    item: OrderEntry;
    readonly: boolean;
    quantityControl: FormControl;
    promotionLocation: PromotionLocation;
    options: CartItemComponentOptions;
    appliedProductPromotions$: Observable<PromotionResult[]>;
    constructor(promotionService: PromotionService);
    ngOnInit(): void;
    isProductOutOfStock(product: any): boolean;
    removeItem(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemComponent, "cx-cart-item", never, { "compact": "compact"; "readonly": "readonly"; "promotionLocation": "promotionLocation"; "options": "options"; "item": "item"; "quantityControl": "quantityControl"; }, {}, never, never>;
}

//# sourceMappingURL=cart-item.component.d.ts.map