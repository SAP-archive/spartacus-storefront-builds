import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeatureConfigService, PromotionLocation, PromotionResult } from '@spartacus/core';
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
    private featureConfig?;
    compact: boolean;
    item: Item;
    potentialProductPromotions: any[];
    readonly: boolean;
    quantityControl: FormControl;
    view: EventEmitter<any>;
    promotionLocation: PromotionLocation;
    options: CartItemComponentOptions;
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
    removeItem(): void;
    viewItem(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartItemComponent, "cx-cart-item", never, {
    "compact": "compact";
    "readonly": "readonly";
    "promotionLocation": "promotionLocation";
    "options": "options";
    "item": "item";
    "potentialProductPromotions": "potentialProductPromotions";
    "quantityControl": "quantityControl";
}, {
    "view": "view";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWl0ZW0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSwgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICAgIHByb2R1Y3Q/OiBhbnk7XG4gICAgcXVhbnRpdHk/OiBhbnk7XG4gICAgYmFzZVByaWNlPzogYW55O1xuICAgIHRvdGFsUHJpY2U/OiBhbnk7XG4gICAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgaXNTYXZlRm9yTGF0ZXI/OiBib29sZWFuO1xuICAgIG9wdGlvbmFsQnRuPzogYW55O1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz87XG4gICAgY29tcGFjdDogYm9vbGVhbjtcbiAgICBpdGVtOiBJdGVtO1xuICAgIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBhbnlbXTtcbiAgICByZWFkb25seTogYm9vbGVhbjtcbiAgICBxdWFudGl0eUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIHZpZXc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnM7XG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgY29uc3RydWN0b3IocHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIEFkZCBmZWF0dXJlQ29uZmlnIGZvciBzYXZlIGZvciBsYXRlci5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICBpc1Byb2R1Y3RPdXRPZlN0b2NrKHByb2R1Y3Q6IGFueSk6IGJvb2xlYW47XG4gICAgcmVtb3ZlSXRlbSgpOiB2b2lkO1xuICAgIHZpZXdJdGVtKCk6IHZvaWQ7XG59XG4iXX0=