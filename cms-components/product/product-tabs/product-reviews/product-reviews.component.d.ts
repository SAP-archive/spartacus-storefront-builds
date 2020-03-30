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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReviewsComponent, "cx-product-reviews", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlld3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgdGl0bGVJbnB1dDogRWxlbWVudFJlZjtcbiAgICB3cml0ZVJldmlld0J1dHRvbjogRWxlbWVudFJlZjtcbiAgICBpc1dyaXRpbmdSZXZpZXc6IGJvb2xlYW47XG4gICAgaW5pdGlhbE1heExpc3RJdGVtczogbnVtYmVyO1xuICAgIG1heExpc3RJdGVtczogbnVtYmVyO1xuICAgIHJldmlld0Zvcm06IEZvcm1Hcm91cDtcbiAgICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICByZXZpZXdzJDogT2JzZXJ2YWJsZTxSZXZpZXdbXT47XG4gICAgY29uc3RydWN0b3IocmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkO1xuICAgIGNhbmNlbFdyaXRlUmV2aWV3KCk6IHZvaWQ7XG4gICAgc2V0UmF0aW5nKHJhdGluZzogYW55KTogdm9pZDtcbiAgICBwcml2YXRlIG1hcmtGb3JtQXNUb3VjaGVkO1xuICAgIHN1Ym1pdFJldmlldyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZDtcbiAgICBhZGRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSByZXNldFJldmlld0Zvcm07XG59XG4iXX0=