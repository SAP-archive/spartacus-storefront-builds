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
    setRating(rating: number): void;
    submitReview(product: Product): void;
    addReview(product: Product): void;
    private resetReviewForm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReviewsComponent, "cx-product-reviews", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJldmlld3MuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICB0aXRsZUlucHV0OiBFbGVtZW50UmVmO1xuICAgIHdyaXRlUmV2aWV3QnV0dG9uOiBFbGVtZW50UmVmO1xuICAgIGlzV3JpdGluZ1JldmlldzogYm9vbGVhbjtcbiAgICBpbml0aWFsTWF4TGlzdEl0ZW1zOiBudW1iZXI7XG4gICAgbWF4TGlzdEl0ZW1zOiBudW1iZXI7XG4gICAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuICAgIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPjtcbiAgICBjb25zdHJ1Y3RvcihyZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSwgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQ7XG4gICAgY2FuY2VsV3JpdGVSZXZpZXcoKTogdm9pZDtcbiAgICBzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpOiB2b2lkO1xuICAgIHN1Ym1pdFJldmlldyhwcm9kdWN0OiBQcm9kdWN0KTogdm9pZDtcbiAgICBhZGRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSByZXNldFJldmlld0Zvcm07XG59XG4iXX0=