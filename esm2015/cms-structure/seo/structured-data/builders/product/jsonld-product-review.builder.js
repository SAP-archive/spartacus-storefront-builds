import { Injectable } from '@angular/core';
import { ProductReviewService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { SeoConfig } from '../../../config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../config/seo.config";
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
export class JsonLdProductReviewBuilder {
    constructor(reviewService, config) {
        this.reviewService = reviewService;
        this.config = config;
    }
    build(product) {
        return this.reviewService.getByProductCode(product.code).pipe(map((reviews) => (reviews === null || reviews === void 0 ? void 0 : reviews.length) > 0
            ? {
                aggregateRating: this.buildAggregatedReviews(product, reviews),
                review: reviews.map((review) => this.buildReviews(review)),
            }
            : {}));
    }
    buildAggregatedReviews(product, reviews) {
        const aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter((rev) => !!rev.rating).length;
            aggregated.reviewCount = reviews.filter((rev) => !!rev.comment).length;
        }
        return aggregated;
    }
    buildReviews(review) {
        const reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            const date = new Date(review.date);
            reviewSchema.datePublished = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
JsonLdProductReviewBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService), i0.ɵɵinject(i2.SeoConfig)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
JsonLdProductReviewBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService },
    { type: SeoConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxvQkFBb0IsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHNUM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUNZLGFBQW1DLEVBQ25DLE1BQWlCO1FBRGpCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7SUFFSixLQUFLLENBQUMsT0FBZ0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRSxDQUN4QixDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLElBQUcsQ0FBQztZQUNqQixDQUFDLENBQUM7Z0JBQ0UsZUFBZSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUM5RCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMzRDtZQUNILENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLHNCQUFzQixDQUFDLE9BQWdCLEVBQUUsT0FBaUI7UUFDbEUsTUFBTSxVQUFVLEdBQVE7WUFDdEIsT0FBTyxFQUFFLGlCQUFpQjtTQUMzQixDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUNoRDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN0RSxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVTLFlBQVksQ0FBQyxNQUFjO1FBQ25DLE1BQU0sWUFBWSxHQUFRO1lBQ3hCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDN0MsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QztRQUNELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxZQUFZLENBQUMsYUFBYSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUNoRCxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDckM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsWUFBWSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLFlBQVksQ0FBQyxZQUFZLEdBQUc7Z0JBQzFCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7YUFDdEMsQ0FBQztTQUNIO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7OztZQWhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVppQixvQkFBb0I7WUFHN0IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VvQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QgcmV2aWV3cywgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9SZXZpZXcuXG4gKiBUaGUgZGF0YSBpbmNsdWRlcyB0aGUgYWdncmVnYXRlZCBwcm9kdWN0IHJhdGluZyBhbmQgdGhlIGluZGl2aWR1YWwgcmV2aWV3cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZFByb2R1Y3RSZXZpZXdCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTZW9Db25maWdcbiAgKSB7fVxuXG4gIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0LmNvZGUpLnBpcGUoXG4gICAgICBtYXAoKHJldmlld3M6IFJldmlld1tdKSA9PlxuICAgICAgICByZXZpZXdzPy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZzogdGhpcy5idWlsZEFnZ3JlZ2F0ZWRSZXZpZXdzKHByb2R1Y3QsIHJldmlld3MpLFxuICAgICAgICAgICAgICByZXZpZXc6IHJldmlld3MubWFwKChyZXZpZXcpID0+IHRoaXMuYnVpbGRSZXZpZXdzKHJldmlldykpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGJ1aWxkQWdncmVnYXRlZFJldmlld3MocHJvZHVjdDogUHJvZHVjdCwgcmV2aWV3czogUmV2aWV3W10pIHtcbiAgICBjb25zdCBhZ2dyZWdhdGVkOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAnQWdncmVnYXRlUmF0aW5nJyxcbiAgICB9O1xuICAgIGlmIChwcm9kdWN0LmF2ZXJhZ2VSYXRpbmcpIHtcbiAgICAgIGFnZ3JlZ2F0ZWQucmF0aW5nVmFsdWUgPSBwcm9kdWN0LmF2ZXJhZ2VSYXRpbmc7XG4gICAgfVxuICAgIGlmIChyZXZpZXdzKSB7XG4gICAgICBhZ2dyZWdhdGVkLnJhdGluZ0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYucmF0aW5nKS5sZW5ndGg7XG4gICAgICBhZ2dyZWdhdGVkLnJldmlld0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYuY29tbWVudCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gYWdncmVnYXRlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBidWlsZFJldmlld3MocmV2aWV3OiBSZXZpZXcpIHtcbiAgICBjb25zdCByZXZpZXdTY2hlbWE6IGFueSA9IHtcbiAgICAgICdAdHlwZSc6ICdyZXZpZXcnLFxuICAgIH07XG5cbiAgICBpZiAocmV2aWV3LnByaW5jaXBhbCAmJiByZXZpZXcucHJpbmNpcGFsLm5hbWUpIHtcbiAgICAgIHJldmlld1NjaGVtYS5hdXRob3IgPSByZXZpZXcucHJpbmNpcGFsLm5hbWU7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuZGF0ZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJldmlldy5kYXRlKTtcbiAgICAgIHJldmlld1NjaGVtYS5kYXRlUHVibGlzaGVkID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1xuICAgICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICB9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcbiAgICB9XG4gICAgaWYgKHJldmlldy5oZWFkbGluZSkge1xuICAgICAgcmV2aWV3U2NoZW1hLm5hbWUgPSByZXZpZXcuaGVhZGxpbmU7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuY29tbWVudCkge1xuICAgICAgcmV2aWV3U2NoZW1hLmRlc2NyaXB0aW9uID0gcmV2aWV3LmNvbW1lbnQ7XG4gICAgfVxuICAgIGlmIChyZXZpZXcucmF0aW5nKSB7XG4gICAgICByZXZpZXdTY2hlbWEucmV2aWV3UmF0aW5nID0ge1xuICAgICAgICAnQHR5cGUnOiAnUmF0aW5nJyxcbiAgICAgICAgcmF0aW5nVmFsdWU6IHJldmlldy5yYXRpbmcudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldmlld1NjaGVtYTtcbiAgfVxufVxuIl19