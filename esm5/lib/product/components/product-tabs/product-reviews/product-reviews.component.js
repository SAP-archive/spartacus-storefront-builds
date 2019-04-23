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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBVyxvQkFBb0IsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBR3hFO0lBeUJFLGlDQUNZLGFBQW1DLEVBQ3JDLEVBQWU7UUFEYixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDckMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWpCZiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTdDLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7UUFHakMsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBU3JCLENBQUM7SUFyQkosc0JBQWEsb0RBQWU7Ozs7UUFBNUI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7OztRQUdELFVBQW9CLEdBQUc7WUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FOQTs7OztJQXFCRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxxREFBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxtREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaOztZQUNRLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTs7WUFDN0MsTUFBTSxHQUFXO1lBQ3JCLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN4QyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSztTQUM3QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLGlEQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHN0SEFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQaUIsb0JBQW9CO2dCQUQ3QixXQUFXOzs7MEJBVWpCLEtBQUs7a0NBQ0wsS0FBSzt3Q0FHTCxNQUFNOztJQWdFVCw4QkFBQztDQUFBLEFBMUVELElBMEVDO1NBckVZLHVCQUF1Qjs7O0lBQ2xDLDBDQUEwQjs7SUFJMUIsd0RBQXFEOzs7OztJQU1yRCxtREFBaUM7O0lBR2pDLHNEQUF3Qjs7SUFDeEIsK0NBQXFCOztJQUNyQiw2Q0FBc0I7O0lBRXRCLDJDQUErQjs7Ozs7SUFHN0IsZ0RBQTZDOzs7OztJQUM3QyxxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDtcbiAgQElucHV0KCkgZ2V0IGlzV3JpdGluZ1JldmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNXcml0aW5nUmV2aWV3O1xuICB9XG4gIEBPdXRwdXQoKSBpc1dyaXRpbmdSZXZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2V0IGlzV3JpdGluZ1Jldmlldyh2YWwpIHtcbiAgICB0aGlzLl9pc1dyaXRpbmdSZXZpZXcgPSB2YWw7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXdDaGFuZ2UuZW1pdCh0aGlzLmlzV3JpdGluZ1Jldmlldyk7XG4gIH1cbiAgcHJpdmF0ZSBfaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmV2aWV3U2VydmljZTogUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubWF4TGlzdEl0ZW1zID0gdGhpcy5pbml0aWFsTWF4TGlzdEl0ZW1zO1xuXG4gICAgaWYgKHRoaXMucHJvZHVjdCkge1xuICAgICAgdGhpcy5yZXZpZXdzJCA9IHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHRoaXMucHJvZHVjdC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuICB9XG5cbiAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IHRydWU7XG4gIH1cblxuICBjYW5jZWxXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgcmV2aWV3Rm9ybUNvbnRyb2xzID0gdGhpcy5yZXZpZXdGb3JtLmNvbnRyb2xzO1xuICAgIGNvbnN0IHJldmlldzogUmV2aWV3ID0ge1xuICAgICAgaGVhZGxpbmU6IHJldmlld0Zvcm1Db250cm9scy50aXRsZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IHJldmlld0Zvcm1Db250cm9scy5jb21tZW50LnZhbHVlLFxuICAgICAgcmF0aW5nOiByZXZpZXdGb3JtQ29udHJvbHMucmF0aW5nLnZhbHVlLFxuICAgICAgYWxpYXM6IHJldmlld0Zvcm1Db250cm9scy5yZXZpZXdlck5hbWUudmFsdWUsXG4gICAgfTtcblxuICAgIHRoaXMucmV2aWV3U2VydmljZS5hZGQodGhpcy5wcm9kdWN0LmNvZGUsIHJldmlldyk7XG5cbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UmV2aWV3Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJhdGluZzogWzAsIFtWYWxpZGF0b3JzLm1pbigxKSwgVmFsaWRhdG9ycy5tYXgoNSldXSxcbiAgICAgIHJldmlld2VyTmFtZTogJycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==