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
var JsonLdProductReviewBuilder = /** @class */ (function () {
    function JsonLdProductReviewBuilder(reviewService) {
        this.reviewService = reviewService;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    JsonLdProductReviewBuilder.prototype.build = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        var _this = this;
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map((/**
         * @param {?} reviews
         * @return {?}
         */
        function (reviews) {
            return {
                aggregateRating: _this.buildAggregatedReviews(product, reviews),
                review: reviews.map((/**
                 * @param {?} review
                 * @return {?}
                 */
                function (review) { return _this.buildReviews(review); })),
            };
        })));
    };
    /**
     * @private
     * @param {?} product
     * @param {?} reviews
     * @return {?}
     */
    JsonLdProductReviewBuilder.prototype.buildAggregatedReviews = /**
     * @private
     * @param {?} product
     * @param {?} reviews
     * @return {?}
     */
    function (product, reviews) {
        /** @type {?} */
        var aggregated = {
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
            function (rev) { return !!rev.rating; })).length;
            aggregated.reviewCount = reviews.filter((/**
             * @param {?} rev
             * @return {?}
             */
            function (rev) { return !!rev.comment; })).length;
        }
        return aggregated;
    };
    /**
     * @private
     * @param {?} review
     * @return {?}
     */
    JsonLdProductReviewBuilder.prototype.buildReviews = /**
     * @private
     * @param {?} review
     * @return {?}
     */
    function (review) {
        /** @type {?} */
        var reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            /** @type {?} */
            var date = new Date(review.date);
            reviewSchema.datePublished = date.getFullYear() + "-" + (date.getMonth() +
                1) + "-" + date.getDate();
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
    JsonLdProductReviewBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    JsonLdProductReviewBuilder.ctorParameters = function () { return [
        { type: ProductReviewService }
    ]; };
    /** @nocollapse */ JsonLdProductReviewBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(i0.ɵɵinject(i1.ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
    return JsonLdProductReviewBuilder;
}());
export { JsonLdProductReviewBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonLdProductReviewBuilder.prototype.reviewService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmxkLXByb2R1Y3QtcmV2aWV3LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvYnVpbGRlcnMvcHJvZHVjdC9qc29ubGQtcHJvZHVjdC1yZXZpZXcuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsb0JBQW9CLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBTzdDO0lBSUUsb0NBQW9CLGFBQW1DO1FBQW5DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUFHLENBQUM7Ozs7O0lBRTNELDBDQUFLOzs7O0lBQUwsVUFBTSxPQUFnQjtRQUF0QixpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLFVBQUMsT0FBaUI7WUFDcEIsT0FBTztnQkFDTCxlQUFlLEVBQUUsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0JBQzlELE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQXpCLENBQXlCLEVBQUM7YUFDekQsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sMkRBQXNCOzs7Ozs7SUFBOUIsVUFBK0IsT0FBZ0IsRUFBRSxPQUFpQjs7WUFDMUQsVUFBVSxHQUFRO1lBQ3RCLE9BQU8sRUFBRSxpQkFBaUI7U0FDM0I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBWixDQUFZLEVBQUMsQ0FBQyxNQUFNLENBQUM7WUFDcEUsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUFDLENBQUMsTUFBTSxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU8saURBQVk7Ozs7O0lBQXBCLFVBQXFCLE1BQWM7O1lBQzNCLFlBQVksR0FBUTtZQUN4QixPQUFPLEVBQUUsUUFBUTtTQUNsQjtRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUM3QyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFOztnQkFDVCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNsQyxZQUFZLENBQUMsYUFBYSxHQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuRSxDQUFDLFVBQUksSUFBSSxDQUFDLE9BQU8sRUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNyQztRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixZQUFZLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsWUFBWSxDQUFDLFlBQVksR0FBRztnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTthQUN0QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkEzREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYaUIsb0JBQW9COzs7cUNBRHRDO0NBc0VDLEFBNURELElBNERDO1NBekRZLDBCQUEwQjs7Ozs7O0lBQ3pCLG1EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBKc29uTGRCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbi8qKlxuICogQnVpbGRzIHRoZSBzdHJ1Y3R1cmVkIGRhdGEgZm9yIHRoZSBwcm9kdWN0IHJldmlld3MsIHNlZSBodHRwczovL3NjaGVtYS5vcmcvUmV2aWV3LlxuICogVGhlIGRhdGEgaW5jbHVkZXMgdGhlIGFnZ3JlZ2F0ZWQgcHJvZHVjdCByYXRpbmcgYW5kIHRoZSBpbmRpdmlkdWFsIHJldmlld3MuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGRQcm9kdWN0UmV2aWV3QnVpbGRlciBpbXBsZW1lbnRzIEpzb25MZEJ1aWxkZXI8UHJvZHVjdD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlKSB7fVxuXG4gIGJ1aWxkKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0LmNvZGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHJldmlld3M6IFJldmlld1tdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWdncmVnYXRlUmF0aW5nOiB0aGlzLmJ1aWxkQWdncmVnYXRlZFJldmlld3MocHJvZHVjdCwgcmV2aWV3cyksXG4gICAgICAgICAgcmV2aWV3OiByZXZpZXdzLm1hcChyZXZpZXcgPT4gdGhpcy5idWlsZFJldmlld3MocmV2aWV3KSksXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQWdncmVnYXRlZFJldmlld3MocHJvZHVjdDogUHJvZHVjdCwgcmV2aWV3czogUmV2aWV3W10pIHtcbiAgICBjb25zdCBhZ2dyZWdhdGVkOiBhbnkgPSB7XG4gICAgICAnQHR5cGUnOiAnQWdncmVnYXRlUmF0aW5nJyxcbiAgICB9O1xuICAgIGlmIChwcm9kdWN0LmF2ZXJhZ2VSYXRpbmcpIHtcbiAgICAgIGFnZ3JlZ2F0ZWQucmF0aW5nVmFsdWUgPSBwcm9kdWN0LmF2ZXJhZ2VSYXRpbmc7XG4gICAgfVxuICAgIGlmIChyZXZpZXdzKSB7XG4gICAgICBhZ2dyZWdhdGVkLnJhdGluZ0NvdW50ID0gcmV2aWV3cy5maWx0ZXIocmV2ID0+ICEhcmV2LnJhdGluZykubGVuZ3RoO1xuICAgICAgYWdncmVnYXRlZC5yZXZpZXdDb3VudCA9IHJldmlld3MuZmlsdGVyKHJldiA9PiAhIXJldi5jb21tZW50KS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBhZ2dyZWdhdGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJldmlld3MocmV2aWV3OiBSZXZpZXcpIHtcbiAgICBjb25zdCByZXZpZXdTY2hlbWE6IGFueSA9IHtcbiAgICAgICdAdHlwZSc6ICdyZXZpZXcnLFxuICAgIH07XG5cbiAgICBpZiAocmV2aWV3LnByaW5jaXBhbCAmJiByZXZpZXcucHJpbmNpcGFsLm5hbWUpIHtcbiAgICAgIHJldmlld1NjaGVtYS5hdXRob3IgPSByZXZpZXcucHJpbmNpcGFsLm5hbWU7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuZGF0ZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJldmlldy5kYXRlKTtcbiAgICAgIHJldmlld1NjaGVtYS5kYXRlUHVibGlzaGVkID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArXG4gICAgICAgIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcbiAgICB9XG4gICAgaWYgKHJldmlldy5oZWFkbGluZSkge1xuICAgICAgcmV2aWV3U2NoZW1hLm5hbWUgPSByZXZpZXcuaGVhZGxpbmU7XG4gICAgfVxuICAgIGlmIChyZXZpZXcuY29tbWVudCkge1xuICAgICAgcmV2aWV3U2NoZW1hLmRlc2NyaXB0aW9uID0gcmV2aWV3LmNvbW1lbnQ7XG4gICAgfVxuICAgIGlmIChyZXZpZXcucmF0aW5nKSB7XG4gICAgICByZXZpZXdTY2hlbWEucmV2aWV3UmF0aW5nID0ge1xuICAgICAgICAnQHR5cGUnOiAnUmF0aW5nJyxcbiAgICAgICAgcmF0aW5nVmFsdWU6IHJldmlldy5yYXRpbmcudG9TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldmlld1NjaGVtYTtcbiAgfVxufVxuIl19