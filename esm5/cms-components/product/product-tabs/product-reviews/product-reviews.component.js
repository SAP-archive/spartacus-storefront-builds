/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.reviews$ = this.product$.pipe(filter(Boolean), switchMap((/**
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
                    template: "<div class=\"container\" *ngIf=\"(product$ | async) as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFXLG9CQUFvQixFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEU7SUF3QkUsaUNBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWU7UUFIekIsaUJBSUk7UUFIUSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckJ6QixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7UUFHeEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBSXhCLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXhFLGFBQVEsR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBakQsQ0FBaUQsRUFBQyxFQUN2RSxHQUFHOzs7UUFBQztZQUNGLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7OztJQUVKLHFEQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG1EQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsOENBQVk7Ozs7SUFBWixVQUFhLE9BQWdCOztZQUNyQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7O1lBQzdDLE1BQU0sR0FBVztZQUNyQixRQUFRLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDeEMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN2QyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDN0M7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGlEQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGtpSUFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFUaUIsb0JBQW9CO2dCQUc3QixxQkFBcUI7Z0JBSnJCLFdBQVc7O0lBd0VwQiw4QkFBQztDQUFBLEFBbEVELElBa0VDO1NBN0RZLHVCQUF1Qjs7O0lBQ2xDLGtEQUF3Qjs7SUFHeEIsc0RBQXdCOztJQUN4QiwrQ0FBcUI7O0lBQ3JCLDZDQUFzQjs7SUFFdEIsMkNBQXdFOztJQUV4RSwyQ0FPRTs7Ozs7SUFHQSxnREFBNkM7Ozs7O0lBQzdDLHdEQUFzRDs7Ozs7SUFDdEQscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB7XG4gIGlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuXG4gIC8vIFRPRE86IGNvbmZpZ3VyYWJsZVxuICBpbml0aWFsTWF4TGlzdEl0ZW1zID0gNTtcbiAgbWF4TGlzdEl0ZW1zOiBudW1iZXI7XG4gIHJldmlld0Zvcm06IEZvcm1Hcm91cDtcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcblxuICByZXZpZXdzJDogT2JzZXJ2YWJsZTxSZXZpZXdbXT4gPSB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIHN3aXRjaE1hcChwcm9kdWN0ID0+IHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3QuY29kZSkpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICAgICAgdGhpcy5tYXhMaXN0SXRlbXMgPSB0aGlzLmluaXRpYWxNYXhMaXN0SXRlbXM7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbFdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0uY29udHJvbHMucmF0aW5nLnNldFZhbHVlKHJhdGluZyk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHJldmlld0Zvcm1Db250cm9scyA9IHRoaXMucmV2aWV3Rm9ybS5jb250cm9scztcbiAgICBjb25zdCByZXZpZXc6IFJldmlldyA9IHtcbiAgICAgIGhlYWRsaW5lOiByZXZpZXdGb3JtQ29udHJvbHMudGl0bGUudmFsdWUsXG4gICAgICBjb21tZW50OiByZXZpZXdGb3JtQ29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIHJhdGluZzogcmV2aWV3Rm9ybUNvbnRyb2xzLnJhdGluZy52YWx1ZSxcbiAgICAgIGFsaWFzOiByZXZpZXdGb3JtQ29udHJvbHMucmV2aWV3ZXJOYW1lLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLnJldmlld1NlcnZpY2UuYWRkKHByb2R1Y3QuY29kZSwgcmV2aWV3KTtcblxuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSZXZpZXdGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMucmV2aWV3Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcmF0aW5nOiBbMCwgW1ZhbGlkYXRvcnMubWluKDEpLCBWYWxpZGF0b3JzLm1heCg1KV1dLFxuICAgICAgcmV2aWV3ZXJOYW1lOiAnJyxcbiAgICB9KTtcbiAgfVxufVxuIl19