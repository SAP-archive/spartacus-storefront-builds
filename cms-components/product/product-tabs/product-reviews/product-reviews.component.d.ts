import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductReviewService, Review, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../../current-product.service';
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
}
