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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWl0ZW0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBQcm9tb3Rpb25Mb2NhdGlvbiwgUHJvbW90aW9uUmVzdWx0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gICAgcHJvZHVjdD86IGFueTtcbiAgICBxdWFudGl0eT86IGFueTtcbiAgICBiYXNlUHJpY2U/OiBhbnk7XG4gICAgdG90YWxQcmljZT86IGFueTtcbiAgICB1cGRhdGVhYmxlPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zIHtcbiAgICBpc1NhdmVGb3JMYXRlcj86IGJvb2xlYW47XG4gICAgb3B0aW9uYWxCdG4/OiBhbnk7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPztcbiAgICBjb21wYWN0OiBib29sZWFuO1xuICAgIGl0ZW06IEl0ZW07XG4gICAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM6IGFueVtdO1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIHF1YW50aXR5Q29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgdmlldzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucztcbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogQWRkIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIGlzUHJvZHVjdE91dE9mU3RvY2socHJvZHVjdDogYW55KTogYm9vbGVhbjtcbiAgICByZW1vdmVJdGVtKCk6IHZvaWQ7XG4gICAgdmlld0l0ZW0oKTogdm9pZDtcbn1cbiJdfQ==