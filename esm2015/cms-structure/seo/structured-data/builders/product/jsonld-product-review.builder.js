/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReviewService } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
export class JsonLdProductReviewBuilder {
    /**
     * @param {?} reviewService
     */
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    build(product) {
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map((/**
         * @param {?} reviews
         * @return {?}
         */
        (reviews) => {
            return {
                aggregateRating: this.buildAggregatedReviews(product, reviews),
                review: reviews.map((/**
                 * @param {?} review
                 * @return {?}
                 */
                review => this.buildReviews(review))),
            };
        })));
    }
    /**
     * @private
     * @param {?} product
     * @param {?} reviews
     * @return {?}
     */
    buildAggregatedReviews(product, reviews) {
        /** @type {?} */
        const aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter((/**
             * @param {?} rev
             * @return {?}
             */
            rev => !!rev.rating)).length;
            aggregated.reviewCount = reviews.filter((/**
             * @param {?} rev
             * @return {?}
             */
            rev => !!rev.comment)).length;
        }
        return aggregated;
    }
    /**
     * @private
     * @param {?} review
     * @return {?}
     */
    buildReviews(review) {
        /** @type {?} */
        const reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            /** @type {?} */
            const date = new Date(review.date);
            reviewSchema.datePublished = `${date.getFullYear()}-${date.getMonth() +
                1}-${date.getDate()}`;
        }
        if (review.headline) {
            reviewSchema.name = review.headline;
        }
        if (review.comment) {
            reviewSchema.description = review.comment;
        }
        if (review.rating) {
            reviewSchema.reviewRating = {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
            };
        }
        return reviewSchema;
    }
}
JsonLdProductReviewBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService }
];
/** @nocollapse */ JsonLdProductReviewBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonLdProductReviewBuilder.prototype.reviewService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsb0JBQW9CLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBVTdDLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFDckMsWUFBb0IsYUFBbUM7UUFBbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQUcsQ0FBQzs7Ozs7SUFFM0QsS0FBSyxDQUFDLE9BQWdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFO1lBQ3hCLE9BQU87Z0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUM5RCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUc7Ozs7Z0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDO2FBQ3pELENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHNCQUFzQixDQUFDLE9BQWdCLEVBQUUsT0FBaUI7O2NBQzFELFVBQVUsR0FBUTtZQUN0QixPQUFPLEVBQUUsaUJBQWlCO1NBQzNCO1FBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUNoRDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxNQUFNLENBQUM7WUFDcEUsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxNQUFNLENBQUM7U0FDdEU7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsTUFBYzs7Y0FDM0IsWUFBWSxHQUFRO1lBQ3hCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzdDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDN0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O2tCQUNULElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbkUsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNyQztRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixZQUFZLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsWUFBWSxDQUFDLFlBQVksR0FBRztnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTthQUN0QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUEzREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWGlCLG9CQUFvQjs7Ozs7Ozs7SUFheEIsbURBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QgcmV2aWV3cywgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9SZXZpZXcuXG4gKiBUaGUgZGF0YSBpbmNsdWRlcyB0aGUgYWdncmVnYXRlZCBwcm9kdWN0IHJhdGluZyBhbmQgdGhlIGluZGl2aWR1YWwgcmV2aWV3cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZFByb2R1Y3RSZXZpZXdCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UpIHt9XG5cbiAgYnVpbGQocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3QuY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmV2aWV3czogUmV2aWV3W10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhZ2dyZWdhdGVSYXRpbmc6IHRoaXMuYnVpbGRBZ2dyZWdhdGVkUmV2aWV3cyhwcm9kdWN0LCByZXZpZXdzKSxcbiAgICAgICAgICByZXZpZXc6IHJldmlld3MubWFwKHJldmlldyA9PiB0aGlzLmJ1aWxkUmV2aWV3cyhyZXZpZXcpKSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRBZ2dyZWdhdGVkUmV2aWV3cyhwcm9kdWN0OiBQcm9kdWN0LCByZXZpZXdzOiBSZXZpZXdbXSkge1xuICAgIGNvbnN0IGFnZ3JlZ2F0ZWQ6IGFueSA9IHtcbiAgICAgICdAdHlwZSc6ICdBZ2dyZWdhdGVSYXRpbmcnLFxuICAgIH07XG4gICAgaWYgKHByb2R1Y3QuYXZlcmFnZVJhdGluZykge1xuICAgICAgYWdncmVnYXRlZC5yYXRpbmdWYWx1ZSA9IHByb2R1Y3QuYXZlcmFnZVJhdGluZztcbiAgICB9XG4gICAgaWYgKHJldmlld3MpIHtcbiAgICAgIGFnZ3JlZ2F0ZWQucmF0aW5nQ291bnQgPSByZXZpZXdzLmZpbHRlcihyZXYgPT4gISFyZXYucmF0aW5nKS5sZW5ndGg7XG4gICAgICBhZ2dyZWdhdGVkLnJldmlld0NvdW50ID0gcmV2aWV3cy5maWx0ZXIocmV2ID0+ICEhcmV2LmNvbW1lbnQpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWQ7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmV2aWV3cyhyZXZpZXc6IFJldmlldykge1xuICAgIGNvbnN0IHJldmlld1NjaGVtYTogYW55ID0ge1xuICAgICAgJ0B0eXBlJzogJ3JldmlldycsXG4gICAgfTtcblxuICAgIGlmIChyZXZpZXcucHJpbmNpcGFsICYmIHJldmlldy5wcmluY2lwYWwubmFtZSkge1xuICAgICAgcmV2aWV3U2NoZW1hLmF1dGhvciA9IHJldmlldy5wcmluY2lwYWwubmFtZTtcbiAgICB9XG4gICAgaWYgKHJldmlldy5kYXRlKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocmV2aWV3LmRhdGUpO1xuICAgICAgcmV2aWV3U2NoZW1hLmRhdGVQdWJsaXNoZWQgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICtcbiAgICAgICAgMX0tJHtkYXRlLmdldERhdGUoKX1gO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmhlYWRsaW5lKSB7XG4gICAgICByZXZpZXdTY2hlbWEubmFtZSA9IHJldmlldy5oZWFkbGluZTtcbiAgICB9XG4gICAgaWYgKHJldmlldy5jb21tZW50KSB7XG4gICAgICByZXZpZXdTY2hlbWEuZGVzY3JpcHRpb24gPSByZXZpZXcuY29tbWVudDtcbiAgICB9XG4gICAgaWYgKHJldmlldy5yYXRpbmcpIHtcbiAgICAgIHJldmlld1NjaGVtYS5yZXZpZXdSYXRpbmcgPSB7XG4gICAgICAgICdAdHlwZSc6ICdSYXRpbmcnLFxuICAgICAgICByYXRpbmdWYWx1ZTogcmV2aWV3LnJhdGluZy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV2aWV3U2NoZW1hO1xuICB9XG59XG4iXX0=