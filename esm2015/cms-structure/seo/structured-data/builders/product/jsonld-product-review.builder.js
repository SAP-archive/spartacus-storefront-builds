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
}
JsonLdProductReviewBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
JsonLdProductReviewBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxvQkFBb0IsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUc3Qzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLGFBQW1DO1FBQW5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUFHLENBQUM7SUFFM0QsS0FBSyxDQUFDLE9BQWdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFO1lBQ3hCLE9BQU87Z0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUM5RCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMzRCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxPQUFnQixFQUFFLE9BQWlCO1FBQ2hFLE1BQU0sVUFBVSxHQUFRO1lBQ3RCLE9BQU8sRUFBRSxpQkFBaUI7U0FDM0IsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUN6QixVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDaEQ7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdEUsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN4RTtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxZQUFZLENBQUMsTUFBYztRQUNqQyxNQUFNLFlBQVksR0FBUTtZQUN4QixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO1FBRUYsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQzdDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDN0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsWUFBWSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFDaEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsWUFBWSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLFlBQVksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixZQUFZLENBQUMsWUFBWSxHQUFHO2dCQUMxQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2FBQ3RDLENBQUM7U0FDSDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFYaUIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEpzb25MZEJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCdWlsZHMgdGhlIHN0cnVjdHVyZWQgZGF0YSBmb3IgdGhlIHByb2R1Y3QgcmV2aWV3cywgc2VlIGh0dHBzOi8vc2NoZW1hLm9yZy9SZXZpZXcuXG4gKiBUaGUgZGF0YSBpbmNsdWRlcyB0aGUgYWdncmVnYXRlZCBwcm9kdWN0IHJhdGluZyBhbmQgdGhlIGluZGl2aWR1YWwgcmV2aWV3cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZFByb2R1Y3RSZXZpZXdCdWlsZGVyIGltcGxlbWVudHMgSnNvbkxkQnVpbGRlcjxQcm9kdWN0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UpIHt9XG5cbiAgYnVpbGQocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3QuY29kZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmV2aWV3czogUmV2aWV3W10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhZ2dyZWdhdGVSYXRpbmc6IHRoaXMuYnVpbGRBZ2dyZWdhdGVkUmV2aWV3cyhwcm9kdWN0LCByZXZpZXdzKSxcbiAgICAgICAgICByZXZpZXc6IHJldmlld3MubWFwKChyZXZpZXcpID0+IHRoaXMuYnVpbGRSZXZpZXdzKHJldmlldykpLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEFnZ3JlZ2F0ZWRSZXZpZXdzKHByb2R1Y3Q6IFByb2R1Y3QsIHJldmlld3M6IFJldmlld1tdKSB7XG4gICAgY29uc3QgYWdncmVnYXRlZDogYW55ID0ge1xuICAgICAgJ0B0eXBlJzogJ0FnZ3JlZ2F0ZVJhdGluZycsXG4gICAgfTtcbiAgICBpZiAocHJvZHVjdC5hdmVyYWdlUmF0aW5nKSB7XG4gICAgICBhZ2dyZWdhdGVkLnJhdGluZ1ZhbHVlID0gcHJvZHVjdC5hdmVyYWdlUmF0aW5nO1xuICAgIH1cbiAgICBpZiAocmV2aWV3cykge1xuICAgICAgYWdncmVnYXRlZC5yYXRpbmdDb3VudCA9IHJldmlld3MuZmlsdGVyKChyZXYpID0+ICEhcmV2LnJhdGluZykubGVuZ3RoO1xuICAgICAgYWdncmVnYXRlZC5yZXZpZXdDb3VudCA9IHJldmlld3MuZmlsdGVyKChyZXYpID0+ICEhcmV2LmNvbW1lbnQpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWQ7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmV2aWV3cyhyZXZpZXc6IFJldmlldykge1xuICAgIGNvbnN0IHJldmlld1NjaGVtYTogYW55ID0ge1xuICAgICAgJ0B0eXBlJzogJ3JldmlldycsXG4gICAgfTtcblxuICAgIGlmIChyZXZpZXcucHJpbmNpcGFsICYmIHJldmlldy5wcmluY2lwYWwubmFtZSkge1xuICAgICAgcmV2aWV3U2NoZW1hLmF1dGhvciA9IHJldmlldy5wcmluY2lwYWwubmFtZTtcbiAgICB9XG4gICAgaWYgKHJldmlldy5kYXRlKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocmV2aWV3LmRhdGUpO1xuICAgICAgcmV2aWV3U2NoZW1hLmRhdGVQdWJsaXNoZWQgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICAgIH0tJHtkYXRlLmdldERhdGUoKX1gO1xuICAgIH1cbiAgICBpZiAocmV2aWV3LmhlYWRsaW5lKSB7XG4gICAgICByZXZpZXdTY2hlbWEubmFtZSA9IHJldmlldy5oZWFkbGluZTtcbiAgICB9XG4gICAgaWYgKHJldmlldy5jb21tZW50KSB7XG4gICAgICByZXZpZXdTY2hlbWEuZGVzY3JpcHRpb24gPSByZXZpZXcuY29tbWVudDtcbiAgICB9XG4gICAgaWYgKHJldmlldy5yYXRpbmcpIHtcbiAgICAgIHJldmlld1NjaGVtYS5yZXZpZXdSYXRpbmcgPSB7XG4gICAgICAgICdAdHlwZSc6ICdSYXRpbmcnLFxuICAgICAgICByYXRpbmdWYWx1ZTogcmV2aWV3LnJhdGluZy50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV2aWV3U2NoZW1hO1xuICB9XG59XG4iXX0=