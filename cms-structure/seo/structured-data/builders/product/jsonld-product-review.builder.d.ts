import { Product, ProductReviewService, Review } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SeoConfig } from '../../../config';
import { JsonLdBuilder } from '../schema.interface';
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
import * as ɵngcc0 from '@angular/core';
export declare class JsonLdProductReviewBuilder implements JsonLdBuilder<Product> {
    protected reviewService: ProductReviewService;
    protected config: SeoConfig;
    constructor(reviewService: ProductReviewService, config: SeoConfig);
    build(product: Product): Observable<any>;
    protected buildAggregatedReviews(product: Product, reviews: Review[]): any;
    protected buildReviews(review: Review): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JsonLdProductReviewBuilder, never>;
}

//# sourceMappingURL=jsonld-product-review.builder.d.ts.map