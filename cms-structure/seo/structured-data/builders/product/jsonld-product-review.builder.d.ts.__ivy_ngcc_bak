import { Product, ProductReviewService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { JsonLdBuilder } from '../schema.interface';
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
export declare class JsonLdProductReviewBuilder implements JsonLdBuilder<Product> {
    private reviewService;
    constructor(reviewService: ProductReviewService);
    build(product: Product): Observable<any>;
    private buildAggregatedReviews;
    private buildReviews;
}
