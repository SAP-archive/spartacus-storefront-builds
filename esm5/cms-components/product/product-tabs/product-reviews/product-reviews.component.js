/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap, tap, } from 'rxjs/operators';
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
        function (p) { return !!p; })), map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.code; })), distinctUntilChanged(), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) { return _this.reviewService.getByProductCode(productCode); })), tap((/**
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
                    template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFXLG9CQUFvQixFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RTtJQTBCRSxpQ0FDWSxhQUFtQyxFQUNuQyxxQkFBNEMsRUFDOUMsRUFBZTtRQUh6QixpQkFJSTtRQUhRLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQWE7UUF2QnpCLG9CQUFlLEdBQUcsS0FBSyxDQUFDOztRQUd4Qix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFJeEIsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFeEUsYUFBUSxHQUF5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakQsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLEVBQUMsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLEVBQUMsRUFDaEIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBaEQsQ0FBZ0QsRUFBQyxFQUMxRSxHQUFHOzs7UUFBQztZQUNGLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7OztJQUVKLHFEQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG1EQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsOENBQVk7Ozs7SUFBWixVQUFhLE9BQWdCOztZQUNyQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7O1lBQzdDLE1BQU0sR0FBVztZQUNyQixRQUFRLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDeEMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN2QyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDN0M7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGlEQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDBzSUFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmaUIsb0JBQW9CO2dCQVM3QixxQkFBcUI7Z0JBVnJCLFdBQVc7O0lBZ0ZwQiw4QkFBQztDQUFBLEFBcEVELElBb0VDO1NBL0RZLHVCQUF1Qjs7O0lBQ2xDLGtEQUF3Qjs7SUFHeEIsc0RBQXdCOztJQUN4QiwrQ0FBcUI7O0lBQ3JCLDZDQUFzQjs7SUFFdEIsMkNBQXdFOztJQUV4RSwyQ0FTRTs7Ozs7SUFHQSxnREFBNkM7Ozs7O0lBQzdDLHdEQUFzRDs7Ozs7SUFDdEQscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJldmlld3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IHtcbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBmaWx0ZXIocCA9PiAhIXApLFxuICAgIG1hcChwID0+IHAuY29kZSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBzd2l0Y2hNYXAocHJvZHVjdENvZGUgPT4gdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEJ5UHJvZHVjdENvZGUocHJvZHVjdENvZGUpKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgICAgIHRoaXMubWF4TGlzdEl0ZW1zID0gdGhpcy5pbml0aWFsTWF4TGlzdEl0ZW1zO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IHRydWU7XG4gIH1cblxuICBjYW5jZWxXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBzZXRSYXRpbmcocmF0aW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXZpZXdGb3JtLmNvbnRyb2xzLnJhdGluZy5zZXRWYWx1ZShyYXRpbmcpO1xuICB9XG5cbiAgc3VibWl0UmV2aWV3KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICBjb25zdCByZXZpZXdGb3JtQ29udHJvbHMgPSB0aGlzLnJldmlld0Zvcm0uY29udHJvbHM7XG4gICAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgICBoZWFkbGluZTogcmV2aWV3Rm9ybUNvbnRyb2xzLnRpdGxlLnZhbHVlLFxuICAgICAgY29tbWVudDogcmV2aWV3Rm9ybUNvbnRyb2xzLmNvbW1lbnQudmFsdWUsXG4gICAgICByYXRpbmc6IHJldmlld0Zvcm1Db250cm9scy5yYXRpbmcudmFsdWUsXG4gICAgICBhbGlhczogcmV2aWV3Rm9ybUNvbnRyb2xzLnJldmlld2VyTmFtZS52YWx1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZXZpZXdTZXJ2aWNlLmFkZChwcm9kdWN0LmNvZGUsIHJldmlldyk7XG5cbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UmV2aWV3Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJhdGluZzogWzAsIFtWYWxpZGF0b3JzLm1pbigxKSwgVmFsaWRhdG9ycy5tYXgoNSldXSxcbiAgICAgIHJldmlld2VyTmFtZTogJycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==