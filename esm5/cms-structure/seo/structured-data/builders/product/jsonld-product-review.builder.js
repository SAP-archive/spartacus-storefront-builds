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
var JsonLdProductReviewBuilder = /** @class */ (function () {
    function JsonLdProductReviewBuilder(reviewService) {
        this.reviewService = reviewService;
    }
    JsonLdProductReviewBuilder.prototype.build = function (product) {
        var _this = this;
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map(function (reviews) {
            return {
                aggregateRating: _this.buildAggregatedReviews(product, reviews),
                review: reviews.map(function (review) { return _this.buildReviews(review); }),
            };
        }));
    };
    JsonLdProductReviewBuilder.prototype.buildAggregatedReviews = function (product, reviews) {
        var aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter(function (rev) { return !!rev.rating; }).length;
            aggregated.reviewCount = reviews.filter(function (rev) { return !!rev.comment; }).length;
        }
        return aggregated;
    };
    JsonLdProductReviewBuilder.prototype.buildReviews = function (review) {
        var reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            var date = new Date(review.date);
            reviewSchema.datePublished = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
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
    };
    JsonLdProductReviewBuilder.ctorParameters = function () { return [
        { type: ProductReviewService }
    ]; };
    JsonLdProductReviewBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
    JsonLdProductReviewBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JsonLdProductReviewBuilder);
    return JsonLdProductReviewBuilder;
}());
export { JsonLdProductReviewBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3Qzs7O0dBR0c7QUFJSDtJQUNFLG9DQUFvQixhQUFtQztRQUFuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFBRyxDQUFDO0lBRTNELDBDQUFLLEdBQUwsVUFBTSxPQUFnQjtRQUF0QixpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQUMsT0FBaUI7WUFDcEIsT0FBTztnQkFDTCxlQUFlLEVBQUUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0JBQzlELE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzthQUMzRCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTywyREFBc0IsR0FBOUIsVUFBK0IsT0FBZ0IsRUFBRSxPQUFpQjtRQUNoRSxJQUFNLFVBQVUsR0FBUTtZQUN0QixPQUFPLEVBQUUsaUJBQWlCO1NBQzNCLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdEUsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVPLGlEQUFZLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsSUFBTSxZQUFZLEdBQVE7WUFDeEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztRQUVGLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUM3QyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFlBQVksQ0FBQyxhQUFhLEdBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUNoRCxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUNqQixJQUFJLENBQUMsT0FBTyxFQUFJLENBQUM7U0FDdEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsWUFBWSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLFlBQVksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixZQUFZLENBQUMsWUFBWSxHQUFHO2dCQUMxQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2FBQ3RDLENBQUM7U0FDSDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQXhEa0Msb0JBQW9COzs7SUFENUMsMEJBQTBCO1FBSHRDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVywwQkFBMEIsQ0EwRHRDO3FDQXZFRDtDQXVFQyxBQTFERCxJQTBEQztTQTFEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSnNvbkxkQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEJ1aWxkcyB0aGUgc3RydWN0dXJlZCBkYXRhIGZvciB0aGUgcHJvZHVjdCByZXZpZXdzLCBzZWUgaHR0cHM6Ly9zY2hlbWEub3JnL1Jldmlldy5cbiAqIFRoZSBkYXRhIGluY2x1ZGVzIHRoZSBhZ2dyZWdhdGVkIHByb2R1Y3QgcmF0aW5nIGFuZCB0aGUgaW5kaXZpZHVhbCByZXZpZXdzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkUHJvZHVjdFJldmlld0J1aWxkZXIgaW1wbGVtZW50cyBKc29uTGRCdWlsZGVyPFByb2R1Y3Q+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSkge31cblxuICBidWlsZChwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEJ5UHJvZHVjdENvZGUocHJvZHVjdC5jb2RlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZXZpZXdzOiBSZXZpZXdbXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFnZ3JlZ2F0ZVJhdGluZzogdGhpcy5idWlsZEFnZ3JlZ2F0ZWRSZXZpZXdzKHByb2R1Y3QsIHJldmlld3MpLFxuICAgICAgICAgIHJldmlldzogcmV2aWV3cy5tYXAoKHJldmlldykgPT4gdGhpcy5idWlsZFJldmlld3MocmV2aWV3KSksXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWdncmVnYXRlZFJldmlld3MocHJvZHVjdDogUHJvZHVjdCwgcmV2aWV3czogUmV2aWV3W10pIHtcbiAgICBjb25zdCBhZ2dyZWdhdGVkOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAnQWdncmVnYXRlUmF0aW5nJyxcbiAgICB9O1xuICAgIGlmIChwcm9kdWN0LmF2ZXJhZ2VSYXRpbmcpIHtcbiAgICAgIGFnZ3JlZ2F0ZWQucmF0aW5nVmFsdWUgPSBwcm9kdWN0LmF2ZXJhZ2VSYXRpbmc7XG4gICAgfVxuICAgIGlmIChyZXZpZXdzKSB7XG4gICAgICBhZ2dyZWdhdGVkLnJhdGluZ0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYucmF0aW5nKS5sZW5ndGg7XG4gICAgICBhZ2dyZWdhdGVkLnJldmlld0NvdW50ID0gcmV2aWV3cy5maWx0ZXIoKHJldikgPT4gISFyZXYuY29tbWVudCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gYWdncmVnYXRlZDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZXZpZXdzKHJldmlldzogUmV2aWV3KSB7XG4gICAgY29uc3QgcmV2aWV3U2NoZW1hOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAncmV2aWV3JyxcbiAgICB9O1xuXG4gICAgaWYgKHJldmlldy5wcmluY2lwYWwgJiYgcmV2aWV3LnByaW5jaXBhbC5uYW1lKSB7XG4gICAgICByZXZpZXdTY2hlbWEuYXV0aG9yID0gcmV2aWV3LnByaW5jaXBhbC5uYW1lO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmRhdGUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyZXZpZXcuZGF0ZSk7XG4gICAgICByZXZpZXdTY2hlbWEuZGF0ZVB1Ymxpc2hlZCA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpICsgMVxuICAgICAgfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuaGVhZGxpbmUpIHtcbiAgICAgIHJldmlld1NjaGVtYS5uYW1lID0gcmV2aWV3LmhlYWRsaW5lO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmNvbW1lbnQpIHtcbiAgICAgIHJldmlld1NjaGVtYS5kZXNjcmlwdGlvbiA9IHJldmlldy5jb21tZW50O1xuICAgIH1cbiAgICBpZiAocmV2aWV3LnJhdGluZykge1xuICAgICAgcmV2aWV3U2NoZW1hLnJldmlld1JhdGluZyA9IHtcbiAgICAgICAgJ0B0eXBlJzogJ1JhdGluZycsXG4gICAgICAgIHJhdGluZ1ZhbHVlOiByZXZpZXcucmF0aW5nLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXZpZXdTY2hlbWE7XG4gIH1cbn1cbiJdfQ==