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
                template: "<ng-container *ngIf=\"!isWritingReview; else writeReview\">\n  <div class=\"header\">\n    <h3>{{ 'productReview.label.overallRating' | cxTranslate }}</h3>\n    <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n      {{ 'productReview.action.writeReview' | cxTranslate }}\n    </button>\n    <cx-star-rating\n      class=\"rating\"\n      [rating]=\"product.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n  </div>\n\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n      <div\n        class=\"review\"\n        tabindex=\"0\"\n        *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n      >\n        <div class=\"title\">{{ review.headline }}</div>\n        <cx-star-rating\n          [rating]=\"review.rating\"\n          [disabled]=\"true\"\n        ></cx-star-rating>\n        <div class=\"name\">\n          {{ review.alias ? review.alias : review.principal?.name }}\n        </div>\n        <div class=\"date\">{{ review.date | cxDate }}</div>\n        <div class=\"text\">{{ review.comment }}</div>\n      </div>\n      <div *ngIf=\"reviews.length > initialMaxListItems\">\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = reviews.length\"\n          *ngIf=\"maxListItems === initialMaxListItems\"\n        >\n          {{ 'productReview.action.more' | cxTranslate }}\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = initialMaxListItems\"\n          *ngIf=\"maxListItems !== initialMaxListItems\"\n        >\n          {{ 'productReview.action.less' | cxTranslate }}\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #writeReview>\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewTitle' | cxTranslate\n        }}</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.writeYourComments' | cxTranslate\n        }}</span>\n        <textarea\n          class=\"form-control\"\n          rows=\"3\"\n          formControlName=\"comment\"\n        ></textarea>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.rating' | cxTranslate\n        }}</span>\n        <cx-star-rating formControlName=\"rating\" [steps]=\"0.5\"></cx-star-rating>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewerName' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"reviewerName\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-secondary\"\n          (click)=\"cancelWriteReview()\"\n        >\n          {{ 'common.action.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-primary\"\n          [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          [disabled]=\"!reviewForm.valid\"\n        >\n          {{ 'common.action.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.header{display:flex;flex-wrap:wrap;border-bottom:var(--cx-border-bottom,1px solid var(--cx-g-color-light));padding:var(--cx-padding,0 15px 15px);margin:var(--cx-margin,0 -15px 40px -15px)}.header button{margin:var(--cx-margin,0 0 0 auto)}.header .rating{flex-basis:100%}.review{display:-ms-grid;display:grid;-ms-grid-columns:var(--cx-grid-template-columns,auto auto 10vw);grid-template-columns:var(--cx-grid-template-columns,auto auto 10vw);-ms-grid-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-template-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-column-gap:1vw;margin:1vh 0}.review .text,.review .title,.review cx-star-rating{grid-column:var(--cx-grid-column,1/span 2)}@media (max-width:991.98px){.review .text{grid-column:var(--cx-grid-column,1/span 3)}}.review .date{grid-column:var(--cx-grid-column,2/span 3)}.review .name{grid-column:var(--cx-grid-column,2/span 3);grid-row:var(--cx-grid-row,5)}.review .text{grid-row:var(--cx-grid-row,0);margin:.5vh 0}.review .title{font-weight:700}.review .date,.review .name{text-align:var(--cx-text-align,right)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQVV4RSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQXVCbEMsWUFDWSxhQUFtQyxFQUNyQyxFQUFlO1FBRGIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3JDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFqQnpCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNbkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDOztRQUdqQyx3QkFBbUIsR0FBRyxDQUFDLENBQUM7SUFTckIsQ0FBQzs7OztJQXZCSixJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFJRCxJQUFJLGVBQWUsQ0FBQyxHQUFHO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQWVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFROztjQUM3QyxNQUFNLEdBQVc7WUFDckIsUUFBUSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN6QyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDdkMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLO1NBQzdDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsc3RIQUErQztnQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVFEsb0JBQW9CO1lBRnBCLFdBQVc7OztzQkFhakIsS0FBSzs4QkFFTCxLQUFLO29DQUlMLE1BQU07Ozs7SUFOUCwwQ0FDaUI7O0lBS2pCLHdEQUMyQzs7Ozs7SUFNM0MsbURBQWlDOztJQUdqQyxzREFBd0I7O0lBQ3hCLCtDQUFxQjs7SUFDckIsNkNBQXNCOztJQUV0QiwyQ0FBK0I7Ozs7O0lBRzdCLGdEQUE2Qzs7Ozs7SUFDN0MscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3LCBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJldmlld3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgQElucHV0KClcbiAgZ2V0IGlzV3JpdGluZ1JldmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNXcml0aW5nUmV2aWV3O1xuICB9XG4gIEBPdXRwdXQoKVxuICBpc1dyaXRpbmdSZXZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2V0IGlzV3JpdGluZ1Jldmlldyh2YWwpIHtcbiAgICB0aGlzLl9pc1dyaXRpbmdSZXZpZXcgPSB2YWw7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXdDaGFuZ2UuZW1pdCh0aGlzLmlzV3JpdGluZ1Jldmlldyk7XG4gIH1cbiAgcHJpdmF0ZSBfaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubWF4TGlzdEl0ZW1zID0gdGhpcy5pbml0aWFsTWF4TGlzdEl0ZW1zO1xuXG4gICAgaWYgKHRoaXMucHJvZHVjdCkge1xuICAgICAgdGhpcy5yZXZpZXdzJCA9IHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHRoaXMucHJvZHVjdC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICB9XG5cbiAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IHRydWU7XG4gIH1cblxuICBjYW5jZWxXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgcmV2aWV3Rm9ybUNvbnRyb2xzID0gdGhpcy5yZXZpZXdGb3JtLmNvbnRyb2xzO1xuICAgIGNvbnN0IHJldmlldzogUmV2aWV3ID0ge1xuICAgICAgaGVhZGxpbmU6IHJldmlld0Zvcm1Db250cm9scy50aXRsZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IHJldmlld0Zvcm1Db250cm9scy5jb21tZW50LnZhbHVlLFxuICAgICAgcmF0aW5nOiByZXZpZXdGb3JtQ29udHJvbHMucmF0aW5nLnZhbHVlLFxuICAgICAgYWxpYXM6IHJldmlld0Zvcm1Db250cm9scy5yZXZpZXdlck5hbWUudmFsdWUsXG4gICAgfTtcblxuICAgIHRoaXMucmV2aWV3U2VydmljZS5hZGQodGhpcy5wcm9kdWN0LmNvZGUsIHJldmlldyk7XG5cbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UmV2aWV3Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJhdGluZzogWzAsIFtWYWxpZGF0b3JzLm1pbigxKSwgVmFsaWRhdG9ycy5tYXgoNSldXSxcbiAgICAgIHJldmlld2VyTmFtZTogJycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==