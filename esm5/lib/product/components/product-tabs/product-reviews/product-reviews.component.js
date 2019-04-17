/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
var ProductReviewsComponent = /** @class */ (function () {
    function ProductReviewsComponent(reviewService, fb) {
        this.reviewService = reviewService;
        this.fb = fb;
        this.isWritingReviewChange = new EventEmitter();
        this._isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
    }
    Object.defineProperty(ProductReviewsComponent.prototype, "isWritingReview", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isWritingReview;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._isWritingReview = val;
            this.isWritingReviewChange.emit(this.isWritingReview);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.maxListItems = this.initialMaxListItems;
        if (this.product) {
            this.reviews$ = this.reviewService.getByProductCode(this.product.code);
        }
    };
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.resetReviewForm();
    };
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
     * @return {?}
     */
    ProductReviewsComponent.prototype.submitReview = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        var review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(this.product.code, review);
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
                    template: "<ng-container *ngIf=\"!isWritingReview; else writeReview\">\n  <div class=\"header\">\n    <h3>{{ 'productReview.label.overallRating' | cxTranslate }}</h3>\n    <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n      {{ 'productReview.action.writeReview' | cxTranslate }}\n    </button>\n    <cx-star-rating\n      class=\"rating\"\n      [rating]=\"product.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n  </div>\n\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <ng-container *ngIf=\"(reviews$ | async) as reviews\">\n      <div\n        class=\"review\"\n        tabindex=\"0\"\n        *ngFor=\"let review of (reviews | slice: 0:maxListItems)\"\n      >\n        <div class=\"title\">{{ review.headline }}</div>\n        <cx-star-rating\n          [rating]=\"review.rating\"\n          [disabled]=\"true\"\n        ></cx-star-rating>\n        <div class=\"name\">\n          {{ review.alias ? review.alias : review.principal?.name }}\n        </div>\n        <div class=\"date\">{{ review.date | cxDate }}</div>\n        <div class=\"text\">{{ review.comment }}</div>\n      </div>\n      <div *ngIf=\"reviews.length > initialMaxListItems\">\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = reviews.length\"\n          *ngIf=\"maxListItems === initialMaxListItems\"\n        >\n          {{ 'productReview.action.more' | cxTranslate }}\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"maxListItems = initialMaxListItems\"\n          *ngIf=\"maxListItems !== initialMaxListItems\"\n        >\n          {{ 'productReview.action.less' | cxTranslate }}\n        </button>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #writeReview>\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview()\">\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewTitle' | cxTranslate\n        }}</span>\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.writeYourComments' | cxTranslate\n        }}</span>\n        <textarea\n          class=\"form-control\"\n          rows=\"3\"\n          formControlName=\"comment\"\n        ></textarea>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.rating' | cxTranslate\n        }}</span>\n        <cx-star-rating formControlName=\"rating\" [steps]=\"0.5\"></cx-star-rating>\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label>\n        <span class=\"label-content\">{{\n          'productReview.label.reviewerName' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"reviewerName\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-secondary\"\n          (click)=\"cancelWriteReview()\"\n        >\n          {{ 'common.action.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-block btn-primary\"\n          [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          [disabled]=\"!reviewForm.valid\"\n        >\n          {{ 'common.action.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.header{display:flex;flex-wrap:wrap;border-bottom:var(--cx-border-bottom,1px solid var(--cx-g-color-light));padding:var(--cx-padding,0 15px 15px);margin:var(--cx-margin,0 -15px 40px -15px)}.header button{margin:var(--cx-margin,0 0 0 auto)}.header .rating{flex-basis:100%}.review{display:-ms-grid;display:grid;-ms-grid-columns:var(--cx-grid-template-columns,auto auto 10vw);grid-template-columns:var(--cx-grid-template-columns,auto auto 10vw);-ms-grid-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-template-rows:var(--cx-grid-template-rows,repeat(3,minmax(10px,auto)) auto);grid-column-gap:1vw;margin:1vh 0}.review .text,.review .title,.review cx-star-rating{grid-column:var(--cx-grid-column,1/span 2)}@media (max-width:991.98px){.review .text{grid-column:var(--cx-grid-column,1/span 3)}}.review .date{grid-column:var(--cx-grid-column,2/span 3)}.review .name{grid-column:var(--cx-grid-column,2/span 3);grid-row:var(--cx-grid-row,5)}.review .text{grid-row:var(--cx-grid-row,0);margin:.5vh 0}.review .title{font-weight:700}.review .date,.review .name{text-align:var(--cx-text-align,right)}"]
                }] }
    ];
    /** @nocollapse */
    ProductReviewsComponent.ctorParameters = function () { return [
        { type: ProductReviewService },
        { type: FormBuilder }
    ]; };
    ProductReviewsComponent.propDecorators = {
        product: [{ type: Input }],
        isWritingReview: [{ type: Input }],
        isWritingReviewChange: [{ type: Output }]
    };
    return ProductReviewsComponent;
}());
export { ProductReviewsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUl4RTtJQTZCRSxpQ0FDWSxhQUFtQyxFQUNyQyxFQUFlO1FBRGIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3JDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFqQnpCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNbkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDOztRQUdqQyx3QkFBbUIsR0FBRyxDQUFDLENBQUM7SUFTckIsQ0FBQztJQXZCSixzQkFDSSxvREFBZTs7OztRQURuQjtZQUVFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBSUQsVUFBb0IsR0FBRztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQVBBOzs7O0lBc0JELDZDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHFEQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG1EQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7O1lBQ1Esa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFROztZQUM3QyxNQUFNLEdBQVc7WUFDckIsUUFBUSxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSztZQUN6QyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDdkMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLO1NBQzdDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU8saURBQWU7Ozs7SUFBdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsc3RIQUErQztvQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUUSxvQkFBb0I7Z0JBRnBCLFdBQVc7OzswQkFhakIsS0FBSztrQ0FFTCxLQUFLO3dDQUlMLE1BQU07O0lBaUVULDhCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0F4RVksdUJBQXVCOzs7SUFDbEMsMENBQ2lCOztJQUtqQix3REFDMkM7Ozs7O0lBTTNDLG1EQUFpQzs7SUFHakMsc0RBQXdCOztJQUN4QiwrQ0FBcUI7O0lBQ3JCLDZDQUFzQjs7SUFFdEIsMkNBQStCOzs7OztJQUc3QixnREFBNkM7Ozs7O0lBQzdDLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUHJvZHVjdFJldmlld1NlcnZpY2UsIFJldmlldywgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJldmlld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIEBJbnB1dCgpXG4gIGdldCBpc1dyaXRpbmdSZXZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzV3JpdGluZ1JldmlldztcbiAgfVxuICBAT3V0cHV0KClcbiAgaXNXcml0aW5nUmV2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNldCBpc1dyaXRpbmdSZXZpZXcodmFsKSB7XG4gICAgdGhpcy5faXNXcml0aW5nUmV2aWV3ID0gdmFsO1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3Q2hhbmdlLmVtaXQodGhpcy5pc1dyaXRpbmdSZXZpZXcpO1xuICB9XG4gIHByaXZhdGUgX2lzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuXG4gIC8vIFRPRE86IGNvbmZpZ3VyYWJsZVxuICBpbml0aWFsTWF4TGlzdEl0ZW1zID0gNTtcbiAgbWF4TGlzdEl0ZW1zOiBudW1iZXI7XG4gIHJldmlld0Zvcm06IEZvcm1Hcm91cDtcblxuICByZXZpZXdzJDogT2JzZXJ2YWJsZTxSZXZpZXdbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLm1heExpc3RJdGVtcyA9IHRoaXMuaW5pdGlhbE1heExpc3RJdGVtcztcblxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHtcbiAgICAgIHRoaXMucmV2aWV3cyQgPSB0aGlzLnJldmlld1NlcnZpY2UuZ2V0QnlQcm9kdWN0Q29kZSh0aGlzLnByb2R1Y3QuY29kZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgfVxuXG4gIGluaXRpYXRlV3JpdGVSZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXcgPSB0cnVlO1xuICB9XG5cbiAgY2FuY2VsV3JpdGVSZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICB9XG5cbiAgc3VibWl0UmV2aWV3KCk6IHZvaWQge1xuICAgIGNvbnN0IHJldmlld0Zvcm1Db250cm9scyA9IHRoaXMucmV2aWV3Rm9ybS5jb250cm9scztcbiAgICBjb25zdCByZXZpZXc6IFJldmlldyA9IHtcbiAgICAgIGhlYWRsaW5lOiByZXZpZXdGb3JtQ29udHJvbHMudGl0bGUudmFsdWUsXG4gICAgICBjb21tZW50OiByZXZpZXdGb3JtQ29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIHJhdGluZzogcmV2aWV3Rm9ybUNvbnRyb2xzLnJhdGluZy52YWx1ZSxcbiAgICAgIGFsaWFzOiByZXZpZXdGb3JtQ29udHJvbHMucmV2aWV3ZXJOYW1lLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLnJldmlld1NlcnZpY2UuYWRkKHRoaXMucHJvZHVjdC5jb2RlLCByZXZpZXcpO1xuXG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFJldmlld0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5yZXZpZXdGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICByYXRpbmc6IFswLCBbVmFsaWRhdG9ycy5taW4oMSksIFZhbGlkYXRvcnMubWF4KDUpXV0sXG4gICAgICByZXZpZXdlck5hbWU6ICcnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=