import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReviewsComponent {
    protected reviewService: ProductReviewService;
    protected currentProductService: CurrentProductService;
    private fb;
    isWritingReview: boolean;
    initialMaxListItems: number;
    maxListItems: number;
    reviewForm: FormGroup;
    product$: Observable<Product>;
    reviews$: Observable<Review[]>;
    constructor(reviewService: ProductReviewService, currentProductService: CurrentProductService, fb: FormBuilder);
    initiateWriteReview(): void;
    cancelWriteReview(): void;
    setRating(rating: any): void;
    submitReview(product: Product): void;
    private resetReviewForm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReviewsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductReviewsComponent, "cx-product-reviews", never, {}, {}, never>;
}

//# sourceMappingURL=product-reviews.component.d.ts.map