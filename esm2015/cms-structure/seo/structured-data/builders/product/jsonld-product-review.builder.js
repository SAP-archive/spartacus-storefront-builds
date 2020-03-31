import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
let JsonLdProductReviewBuilder = class JsonLdProductReviewBuilder {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    build(product) {
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map((reviews) => {
            return {
                aggregateRating: this.buildAggregatedReviews(product, reviews),
                review: reviews.map((review) => this.buildReviews(review)),
            };
        }));
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
};
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService }
];
JsonLdProductReviewBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
JsonLdProductReviewBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdProductReviewBuilder);
export { JsonLdProductReviewBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3Qzs7O0dBR0c7QUFJSCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUNyQyxZQUFvQixhQUFtQztRQUFuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFBRyxDQUFDO0lBRTNELEtBQUssQ0FBQyxPQUFnQjtRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRTtZQUN4QixPQUFPO2dCQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDOUQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0QsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sc0JBQXNCLENBQUMsT0FBZ0IsRUFBRSxPQUFpQjtRQUNoRSxNQUFNLFVBQVUsR0FBUTtZQUN0QixPQUFPLEVBQUUsaUJBQWlCO1NBQzNCLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RFLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDeEU7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWSxDQUFDLE1BQWM7UUFDakMsTUFBTSxZQUFZLEdBQVE7WUFDeEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztRQUVGLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUM3QyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFlBQVksQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQ2hELElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNyQztRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixZQUFZLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsWUFBWSxDQUFDLFlBQVksR0FBRztnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTthQUN0QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0YsQ0FBQTs7WUF6RG9DLG9CQUFvQjs7O0FBRDVDLDBCQUEwQjtJQUh0QyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csMEJBQTBCLENBMER0QztTQTFEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCByZXZpZXdzLCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL1Jldmlldy5cbiAqIFRoZSBkYXRhIGluY2x1ZGVzIHRoZSBhZ2dyZWdhdGVkIHByb2R1Y3QgcmF0aW5nIGFuZCB0aGUgaW5kaXZpZHVhbCByZXZpZXdzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkUHJvZHVjdFJldmlld0J1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSkge31cblxuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEJ5UHJvZHVjdENvZGUocHJvZHVjdC5jb2RlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZXZpZXdzOiBSZXZpZXdbXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZzogdGhpcy5idWlsZEFnZ3JlZ2F0ZWRSZXZpZXdzKHByb2R1Y3QsIHJldmlld3MpLFxuICAgICAgICAgIHJldmlldzogcmV2aWV3cy5tYXAoKHJldmlldykgPT4gdGhpcy5idWlsZFJldmlld3MocmV2aWV3KSksXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWdncmVnYXRlZFJldmlld3MocHJvZHVjdDogUHJvZHVjdCwgcmV2aWV3czogUmV2aWV3W10pIHtcbiAgICBjb25zdCBhZ2dyZWdhdGVkOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAnQWdncmVnYXRlUmF0aW5nJyxcbiAgICB9O1xuICAgIGlmIChwcm9kdWN0LmF2ZXJhZ2VSYXRpbmcpIHtcbiAgICAgIGFnZ3JlZ2F0ZWQucmF0aW5nVmFsdWUgPSBwcm9kdWN0LmF2ZXJhZ2VSYXRpbmc7XG4gICAgfVxuICAgIGlmIChyZXZpZXdzKSB7XG4gICAgICBhZ2dyZWdhdGVkLnJhdGluZ0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYucmF0aW5nKS5sZW5ndGg7XG4gICAgICBhZ2dyZWdhdGVkLnJldmlld0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYuY29tbWVudCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gYWdncmVnYXRlZDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXZpZXdzKHJldmlldzogUmV2aWV3KSB7XG4gICAgY29uc3QgcmV2aWV3U2NoZW1hOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAncmV2aWV3JyxcbiAgICB9O1xuXG4gICAgaWYgKHJldmlldy5wcmluY2lwYWwgJiYgcmV2aWV3LnByaW5jaXBhbC5uYW1lKSB7XG4gICAgICByZXZpZXdTY2hlbWEuYXV0aG9yID0gcmV2aWV3LnByaW5jaXBhbC5uYW1lO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmRhdGUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyZXZpZXcuZGF0ZSk7XG4gICAgICByZXZpZXdTY2hlbWEuZGF0ZVB1Ymxpc2hlZCA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpICsgMVxuICAgICAgfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuaGVhZGxpbmUpIHtcbiAgICAgIHJldmlld1NjaGVtYS5uYW1lID0gcmV2aWV3LmhlYWRsaW5lO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmNvbW1lbnQpIHtcbiAgICAgIHJldmlld1NjaGVtYS5kZXNjcmlwdGlvbiA9IHJldmlldy5jb21tZW50O1xuICAgIH1cbiAgICBpZiAocmV2aWV3LnJhdGluZykge1xuICAgICAgcmV2aWV3U2NoZW1hLnJldmlld1JhdGluZyA9IHtcbiAgICAgICAgJ0B0eXBlJzogJ1JhdGluZycsXG4gICAgICAgIHJhdGluZ1ZhbHVlOiByZXZpZXcucmF0aW5nLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXZpZXdTY2hlbWE7XG4gIH1cbn1cbiJdfQ==