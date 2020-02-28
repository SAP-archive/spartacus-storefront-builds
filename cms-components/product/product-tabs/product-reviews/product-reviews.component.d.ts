import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReviewsComponent {
    protected reviewService: ProductReviewService;
    protected currentProductService: CurrentProductService;
    private fb;
    protected cd: ChangeDetectorRef;
    titleInput: ElementRef;
    writeReviewButton: ElementRef;
    isWritingReview: boolean;
    initialMaxListItems: number;
    maxListItems: number;
    reviewForm: FormGroup;
    product$: Observable<Product>;
    reviews$: Observable<Review[]>;
    constructor(reviewService: ProductReviewService, currentProductService: CurrentProductService, fb: FormBuilder, cd: ChangeDetectorRef);
    initiateWriteReview(): void;
    cancelWriteReview(): void;
    setRating(rating: any): void;
    private markFormAsTouched;
    submitReview(product: Product): void;
    addReview(product: Product): void;
    private resetReviewForm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReviewsComponent, "cx-product-reviews", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlld3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFJldmlld3NDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIHRpdGxlSW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgd3JpdGVSZXZpZXdCdXR0b246IEVsZW1lbnRSZWY7XG4gICAgaXNXcml0aW5nUmV2aWV3OiBib29sZWFuO1xuICAgIGluaXRpYWxNYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgICByZXZpZXdGb3JtOiBGb3JtR3JvdXA7XG4gICAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgcmV2aWV3cyQ6IE9ic2VydmFibGU8UmV2aWV3W10+O1xuICAgIGNvbnN0cnVjdG9yKHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSwgZmI6IEZvcm1CdWlsZGVyLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIGluaXRpYXRlV3JpdGVSZXZpZXcoKTogdm9pZDtcbiAgICBjYW5jZWxXcml0ZVJldmlldygpOiB2b2lkO1xuICAgIHNldFJhdGluZyhyYXRpbmc6IGFueSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBtYXJrRm9ybUFzVG91Y2hlZDtcbiAgICBzdWJtaXRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQ7XG4gICAgYWRkUmV2aWV3KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkO1xuICAgIHByaXZhdGUgcmVzZXRSZXZpZXdGb3JtO1xufVxuIl19