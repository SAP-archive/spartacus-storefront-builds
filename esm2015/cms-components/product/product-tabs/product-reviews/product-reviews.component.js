/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap, tap, } from 'rxjs/operators';
import { CurrentProductService } from '../../current-product.service';
export class ProductReviewsComponent {
    /**
     * @param {?} reviewService
     * @param {?} currentProductService
     * @param {?} fb
     */
    constructor(reviewService, currentProductService, fb) {
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
        p => !!p)), map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.code)), distinctUntilChanged(), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => this.reviewService.getByProductCode(productCode))), tap((/**
         * @return {?}
         */
        () => {
            this.resetReviewForm();
            this.maxListItems = this.initialMaxListItems;
        })));
    }
    /**
     * @return {?}
     */
    initiateWriteReview() {
        this.isWritingReview = true;
    }
    /**
     * @return {?}
     */
    cancelWriteReview() {
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    setRating(rating) {
        this.reviewForm.controls.rating.setValue(rating);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    submitReview(product) {
        /** @type {?} */
        const reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        const review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @private
     * @return {?}
     */
    resetReviewForm() {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    }
}
ProductReviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-reviews',
                template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: CurrentProductService },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFXLG9CQUFvQixFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU90RSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFxQmxDLFlBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWU7UUFGYixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBdkJ6QixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7UUFHeEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBSXhCLGFBQVEsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXhFLGFBQVEsR0FBeUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFDaEIsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUNoQixvQkFBb0IsRUFBRSxFQUN0QixTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQzFFLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7OztJQUVKLG1CQUFtQjtRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCOztjQUNyQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7O2NBQzdDLE1BQU0sR0FBVztZQUNyQixRQUFRLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDeEMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN2QyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDN0M7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDBzSUFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZmlCLG9CQUFvQjtZQVM3QixxQkFBcUI7WUFWckIsV0FBVzs7OztJQWtCbEIsa0RBQXdCOztJQUd4QixzREFBd0I7O0lBQ3hCLCtDQUFxQjs7SUFDckIsNkNBQXNCOztJQUV0QiwyQ0FBd0U7O0lBRXhFLDJDQVNFOzs7OztJQUdBLGdEQUE2Qzs7Ozs7SUFDN0Msd0RBQXNEOzs7OztJQUN0RCxxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmV2aWV3cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NDb21wb25lbnQge1xuICBpc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcblxuICAvLyBUT0RPOiBjb25maWd1cmFibGVcbiAgaW5pdGlhbE1heExpc3RJdGVtcyA9IDU7XG4gIG1heExpc3RJdGVtczogbnVtYmVyO1xuICByZXZpZXdGb3JtOiBGb3JtR3JvdXA7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG5cbiAgcmV2aWV3cyQ6IE9ic2VydmFibGU8UmV2aWV3W10+ID0gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgIGZpbHRlcihwID0+ICEhcCksXG4gICAgbWFwKHAgPT4gcC5jb2RlKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHN3aXRjaE1hcChwcm9kdWN0Q29kZSA9PiB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QnlQcm9kdWN0Q29kZShwcm9kdWN0Q29kZSkpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICAgICAgdGhpcy5tYXhMaXN0SXRlbXMgPSB0aGlzLmluaXRpYWxNYXhMaXN0SXRlbXM7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbFdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0uY29udHJvbHMucmF0aW5nLnNldFZhbHVlKHJhdGluZyk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHJldmlld0Zvcm1Db250cm9scyA9IHRoaXMucmV2aWV3Rm9ybS5jb250cm9scztcbiAgICBjb25zdCByZXZpZXc6IFJldmlldyA9IHtcbiAgICAgIGhlYWRsaW5lOiByZXZpZXdGb3JtQ29udHJvbHMudGl0bGUudmFsdWUsXG4gICAgICBjb21tZW50OiByZXZpZXdGb3JtQ29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIHJhdGluZzogcmV2aWV3Rm9ybUNvbnRyb2xzLnJhdGluZy52YWx1ZSxcbiAgICAgIGFsaWFzOiByZXZpZXdGb3JtQ29udHJvbHMucmV2aWV3ZXJOYW1lLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLnJldmlld1NlcnZpY2UuYWRkKHByb2R1Y3QuY29kZSwgcmV2aWV3KTtcblxuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSZXZpZXdGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMucmV2aWV3Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcmF0aW5nOiBbMCwgW1ZhbGlkYXRvcnMubWluKDEpLCBWYWxpZGF0b3JzLm1heCg1KV1dLFxuICAgICAgcmV2aWV3ZXJOYW1lOiAnJyxcbiAgICB9KTtcbiAgfVxufVxuIl19