/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
export class ProductReviewsComponent {
    /**
     * @param {?} reviewService
     * @param {?} fb
     */
    constructor(reviewService, fb) {
        this.reviewService = reviewService;
        this.fb = fb;
        this.isWritingReviewChange = new EventEmitter();
        this._isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
    }
    /**
     * @return {?}
     */
    get isWritingReview() {
        return this._isWritingReview;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isWritingReview(val) {
        this._isWritingReview = val;
        this.isWritingReviewChange.emit(this.isWritingReview);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.maxListItems = this.initialMaxListItems;
        if (this.product) {
            this.reviews$ = this.reviewService.getByProductCode(this.product.code);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.resetReviewForm();
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
     * @return {?}
     */
    submitReview() {
        /** @type {?} */
        const reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        const review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(this.product.code, review);
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
                template: "<ng-container *ngIf=\"!isWritingReview; else writeReview\">\n  <div class=\"header\">\n    <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n    <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n      {{ 'productReview.writeReview' | cxTranslate }}\n    </button>\n    <cx-star-rating\n      class=\"rating\"\n      [rating]=\"product.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n  </div>\n\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n      <div\n        class=\"review\"\n        tabindex=\"0\"\n        *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n      >\n        <div class=\"title\">{{ review.headline }}</div>\n        <cx-star-rating\n          [rating]=\"review.rating\"\n          [disabled]=\"true\"\n        ></cx-star-rating>\n        <div class=\"name\">\n          {{ review.alias ? review.alias : review.principal?.name }}\n        </div>\n        <div class=\"date\">{{ review.date | cxDate }}</div>\n        <div class=\"text\">{{ review.comment }}</div>\n      </div>\n      <div *ngIf=\"reviews.length > initialMaxListItems\">\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = reviews.length\"\n          *ngIf=\"maxListItems === initialMaxListItems\"\n        >\n          {{ 'productReview.more' | cxTranslate }}\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = initialMaxListItems\"\n          *ngIf=\"maxListItems !== initialMaxListItems\"\n        >\n          {{ 'productReview.less' | cxTranslate }}\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #writeReview>\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.reviewTitle' | cxTranslate\n        }}</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.writeYourComments' | cxTranslate\n        }}</span>\n        <textarea\n          class=\"form-control\"\n          rows=\"3\"\n          formControlName=\"comment\"\n        ></textarea>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.rating' | cxTranslate\n        }}</span>\n        <cx-star-rating formControlName=\"rating\" [steps]=\"0.5\"></cx-star-rating>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.reviewerName' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"reviewerName\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-secondary\"\n          (click)=\"cancelWriteReview()\"\n        >\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-primary\"\n          [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          [disabled]=\"!reviewForm.valid\"\n        >\n          {{ 'common.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: FormBuilder }
];
ProductReviewsComponent.propDecorators = {
    product: [{ type: Input }],
    isWritingReview: [{ type: Input }],
    isWritingReviewChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProductReviewsComponent.prototype.product;
    /** @type {?} */
    ProductReviewsComponent.prototype.isWritingReviewChange;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsComponent.prototype._isWritingReview;
    /** @type {?} */
    ProductReviewsComponent.prototype.initialMaxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.maxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviewForm;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviews$;
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsComponent.prototype.reviewService;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBVyxvQkFBb0IsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBUXhFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBb0JsQyxZQUNZLGFBQW1DLEVBQ3JDLEVBQWU7UUFEYixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDckMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWpCZiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTdDLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7UUFHakMsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBU3JCLENBQUM7Ozs7SUFyQkosSUFBYSxlQUFlO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBR0QsSUFBSSxlQUFlLENBQUMsR0FBRztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFlRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTs7Y0FDN0MsTUFBTSxHQUFXO1lBQ3JCLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN4QyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSztTQUM3QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHFwSEFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUGlCLG9CQUFvQjtZQUQ3QixXQUFXOzs7c0JBVWpCLEtBQUs7OEJBQ0wsS0FBSztvQ0FHTCxNQUFNOzs7O0lBSlAsMENBQTBCOztJQUkxQix3REFBcUQ7Ozs7O0lBTXJELG1EQUFpQzs7SUFHakMsc0RBQXdCOztJQUN4QiwrQ0FBcUI7O0lBQ3JCLDZDQUFzQjs7SUFFdEIsMkNBQStCOzs7OztJQUc3QixnREFBNkM7Ozs7O0lBQzdDLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJldmlld3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0O1xuICBASW5wdXQoKSBnZXQgaXNXcml0aW5nUmV2aWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1dyaXRpbmdSZXZpZXc7XG4gIH1cbiAgQE91dHB1dCgpIGlzV3JpdGluZ1Jldmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXQgaXNXcml0aW5nUmV2aWV3KHZhbCkge1xuICAgIHRoaXMuX2lzV3JpdGluZ1JldmlldyA9IHZhbDtcbiAgICB0aGlzLmlzV3JpdGluZ1Jldmlld0NoYW5nZS5lbWl0KHRoaXMuaXNXcml0aW5nUmV2aWV3KTtcbiAgfVxuICBwcml2YXRlIF9pc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcblxuICAvLyBUT0RPOiBjb25maWd1cmFibGVcbiAgaW5pdGlhbE1heExpc3RJdGVtcyA9IDU7XG4gIG1heExpc3RJdGVtczogbnVtYmVyO1xuICByZXZpZXdGb3JtOiBGb3JtR3JvdXA7XG5cbiAgcmV2aWV3cyQ6IE9ic2VydmFibGU8UmV2aWV3W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5tYXhMaXN0SXRlbXMgPSB0aGlzLmluaXRpYWxNYXhMaXN0SXRlbXM7XG5cbiAgICBpZiAodGhpcy5wcm9kdWN0KSB7XG4gICAgICB0aGlzLnJldmlld3MkID0gdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEJ5UHJvZHVjdENvZGUodGhpcy5wcm9kdWN0LmNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbFdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHN1Ym1pdFJldmlldygpOiB2b2lkIHtcbiAgICBjb25zdCByZXZpZXdGb3JtQ29udHJvbHMgPSB0aGlzLnJldmlld0Zvcm0uY29udHJvbHM7XG4gICAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgICBoZWFkbGluZTogcmV2aWV3Rm9ybUNvbnRyb2xzLnRpdGxlLnZhbHVlLFxuICAgICAgY29tbWVudDogcmV2aWV3Rm9ybUNvbnRyb2xzLmNvbW1lbnQudmFsdWUsXG4gICAgICByYXRpbmc6IHJldmlld0Zvcm1Db250cm9scy5yYXRpbmcudmFsdWUsXG4gICAgICBhbGlhczogcmV2aWV3Rm9ybUNvbnRyb2xzLnJldmlld2VyTmFtZS52YWx1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZXZpZXdTZXJ2aWNlLmFkZCh0aGlzLnByb2R1Y3QuY29kZSwgcmV2aWV3KTtcblxuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRSZXZpZXdGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMucmV2aWV3Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdGl0bGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcmF0aW5nOiBbMCwgW1ZhbGlkYXRvcnMubWluKDEpLCBWYWxpZGF0b3JzLm1heCg1KV1dLFxuICAgICAgcmV2aWV3ZXJOYW1lOiAnJyxcbiAgICB9KTtcbiAgfVxufVxuIl19