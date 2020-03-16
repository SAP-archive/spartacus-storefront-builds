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
    "quantityControl": "quantityControl";
}, {
    "view": "view";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWl0ZW0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSwgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICAgIHByb2R1Y3Q/OiBhbnk7XG4gICAgcXVhbnRpdHk/OiBhbnk7XG4gICAgYmFzZVByaWNlPzogYW55O1xuICAgIHRvdGFsUHJpY2U/OiBhbnk7XG4gICAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgaXNTYXZlRm9yTGF0ZXI/OiBib29sZWFuO1xuICAgIG9wdGlvbmFsQnRuPzogYW55O1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz87XG4gICAgY29tcGFjdDogYm9vbGVhbjtcbiAgICBpdGVtOiBJdGVtO1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIHF1YW50aXR5Q29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgdmlldzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucztcbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogQWRkIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIGlzUHJvZHVjdE91dE9mU3RvY2socHJvZHVjdDogYW55KTogYm9vbGVhbjtcbiAgICByZW1vdmVJdGVtKCk6IHZvaWQ7XG4gICAgdmlld0l0ZW0oKTogdm9pZDtcbn1cbiJdfQ==