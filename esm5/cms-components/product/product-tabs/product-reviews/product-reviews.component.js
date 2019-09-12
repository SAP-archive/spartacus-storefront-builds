/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
import { filter, switchMap, tap } from 'rxjs/operators';
import { CurrentProductService } from '../../current-product.service';
var ProductReviewsComponent = /** @class */ (function () {
    function ProductReviewsComponent(reviewService, currentProductService, fb) {
        var _this = this;
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return !!p; })), switchMap((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.reviewService.getByProductCode(product.code); })), tap((/**
         * @return {?}
         */
        function () {
            _this.resetReviewForm();
            _this.maxListItems = _this.initialMaxListItems;
        })));
    }
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.initiateWriteReview = /**
     * @return {?}
     */
    function () {
        this.isWritingReview = true;
    };
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.cancelWriteReview = /**
     * @return {?}
     */
    function () {
        this.isWritingReview = false;
        this.resetReviewForm();
    };
    /**
     * @param {?} rating
     * @return {?}
     */
    ProductReviewsComponent.prototype.setRating = /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        this.reviewForm.controls.rating.setValue(rating);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductReviewsComponent.prototype.submitReview = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        var review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
    };
    /**
     * @private
     * @return {?}
     */
    ProductReviewsComponent.prototype.resetReviewForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    };
    ProductReviewsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-reviews',
                    template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductReviewsComponent.ctorParameters = function () { return [
        { type: ProductReviewService },
        { type: CurrentProductService },
        { type: FormBuilder }
    ]; };
    return ProductReviewsComponent;
}());
export { ProductReviewsComponent };
if (false) {
    /** @type {?} */
    ProductReviewsComponent.prototype.isWritingReview;
    /** @type {?} */
    ProductReviewsComponent.prototype.initialMaxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.maxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviewForm;
    /** @type {?} */
    ProductReviewsComponent.prototype.product$;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviews$;
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsComponent.prototype.reviewService;
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFXLG9CQUFvQixFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUF3QkUsaUNBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWU7UUFIekIsaUJBSUk7UUFIUSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckJ6QixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7UUFHeEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBSXhCLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXhFLGFBQVEsR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxFQUFDLEVBQ2hCLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFqRCxDQUFpRCxFQUFDLEVBQ3ZFLEdBQUc7OztRQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7O0lBRUoscURBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsbURBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwyQ0FBUzs7OztJQUFULFVBQVUsTUFBTTtRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsT0FBZ0I7O1lBQ3JCLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTs7WUFDN0MsTUFBTSxHQUFXO1lBQ3JCLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN4QyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSztTQUM3QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8saURBQWU7Ozs7SUFBdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsNGhJQUErQztvQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVRpQixvQkFBb0I7Z0JBRzdCLHFCQUFxQjtnQkFKckIsV0FBVzs7SUF3RXBCLDhCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFksdUJBQXVCOzs7SUFDbEMsa0RBQXdCOztJQUd4QixzREFBd0I7O0lBQ3hCLCtDQUFxQjs7SUFDckIsNkNBQXNCOztJQUV0QiwyQ0FBd0U7O0lBRXhFLDJDQU9FOzs7OztJQUdBLGdEQUE2Qzs7Ozs7SUFDN0Msd0RBQXNEOzs7OztJQUN0RCxxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJldmlld3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IHtcbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBmaWx0ZXIocCA9PiAhIXApLFxuICAgIHN3aXRjaE1hcChwcm9kdWN0ID0+IHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3QuY29kZSkpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICAgICAgdGhpcy5tYXhMaXN0SXRlbXMgPSB0aGlzLmluaXRpYWxNYXhMaXN0SXRlbXM7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbFdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0uY29udHJvbHMucmF0aW5nLnNldFZhbHVlKHJhdGluZyk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHJldmlld0Zvcm1Db250cm9scyA9IHRoaXMucmV2aWV3Rm9ybS5jb250cm9scztcbiAgICBjb25zdCByZXZpZXc6IFJldmlldyA9IHtcbiAgICAgIGhlYWRsaW5lOiByZXZpZXdGb3JtQ29udHJvbHMudGl0bGUudmFsdWUsXG4gICAgICBjb21tZW50OiByZXZpZXdGb3JtQ29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIHJhdGluZzogcmV2aWV3Rm9ybUNvbnRyb2xzLnJhdGluZy52YWx1ZSxcbiAgICAgIGFsaWFzOiByZXZpZXdGb3JtQ29udHJvbHMucmV2aWV3ZXJOYW1lLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLnJldmlld1NlcnZpY2UuYWRkKHByb2R1Y3QuY29kZSwgcmV2aWV3KTtcblxuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSZXZpZXdGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMucmV2aWV3Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcmF0aW5nOiBbMCwgW1ZhbGlkYXRvcnMubWluKDEpLCBWYWxpZGF0b3JzLm1heCg1KV1dLFxuICAgICAgcmV2aWV3ZXJOYW1lOiAnJyxcbiAgICB9KTtcbiAgfVxufVxuIl19