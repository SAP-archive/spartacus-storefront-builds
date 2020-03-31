import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap, tap, } from 'rxjs/operators';
import { CurrentProductService } from '../../current-product.service';
var ProductReviewsComponent = /** @class */ (function () {
    function ProductReviewsComponent(reviewService, currentProductService, fb, cd) {
        var _this = this;
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.cd = cd;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter(function (p) { return !!p; }), map(function (p) { return p.code; }), distinctUntilChanged(), switchMap(function (productCode) {
            return _this.reviewService.getByProductCode(productCode);
        }), tap(function () {
            _this.resetReviewForm();
            _this.maxListItems = _this.initialMaxListItems;
        }));
    }
    ProductReviewsComponent.prototype.initiateWriteReview = function () {
        this.isWritingReview = true;
        this.cd.detectChanges();
        if (this.titleInput && this.titleInput.nativeElement) {
            this.titleInput.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.cancelWriteReview = function () {
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.setRating = function (rating) {
        this.reviewForm.controls.rating.setValue(rating);
    };
    ProductReviewsComponent.prototype.markFormAsTouched = function () {
        var _this = this;
        Object.keys(this.reviewForm.controls).forEach(function (key) {
            _this.reviewForm.controls[key].markAsTouched();
        });
    };
    ProductReviewsComponent.prototype.submitReview = function (product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.markFormAsTouched();
        }
    };
    ProductReviewsComponent.prototype.addReview = function (product) {
        var reviewFormControls = this.reviewForm.controls;
        var review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    };
    ProductReviewsComponent.prototype.resetReviewForm = function () {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    };
    ProductReviewsComponent.ctorParameters = function () { return [
        { type: ProductReviewService },
        { type: CurrentProductService },
        { type: FormBuilder },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        ViewChild('titleInput', { static: false })
    ], ProductReviewsComponent.prototype, "titleInput", void 0);
    __decorate([
        ViewChild('writeReviewButton', { static: false })
    ], ProductReviewsComponent.prototype, "writeReviewButton", void 0);
    ProductReviewsComponent = __decorate([
        Component({
            selector: 'cx-product-reviews',
            template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n            [class.is-invalid]=\"\n              reviewForm.controls['title'].invalid &&\n              (reviewForm.controls['title'].touched ||\n                reviewForm.controls['title'].dirty)\n            \"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n            [class.is-invalid]=\"\n              reviewForm.controls['comment'].invalid &&\n              (reviewForm.controls['comment'].touched ||\n                reviewForm.controls['comment'].dirty)\n            \"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReviewsComponent);
    return ProductReviewsComponent;
}());
export { ProductReviewsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEU7SUEyQkUsaUNBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWUsRUFDYixFQUFxQjtRQUpqQyxpQkFLSTtRQUpRLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDYixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTFCakMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIscUJBQXFCO1FBQ3JCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUl4QixhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4RSxhQUFRLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMs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ZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGl0bGVJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnd3JpdGVSZXZpZXdCdXR0b24nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgd3JpdGVSZXZpZXdCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBmaWx0ZXIoKHApID0+ICEhcCksXG4gICAgbWFwKChwKSA9PiBwLmNvZGUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZSkgPT5cbiAgICAgIHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3RDb2RlKVxuICAgICksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gICAgICB0aGlzLm1heExpc3RJdGVtcyA9IHRoaXMuaW5pdGlhbE1heExpc3RJdGVtcztcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IHRydWU7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLnRpdGxlSW5wdXQgJiYgdGhpcy50aXRsZUlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGl0bGVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsV3JpdGVSZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy53cml0ZVJldmlld0J1dHRvbiAmJiB0aGlzLndyaXRlUmV2aWV3QnV0dG9uLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMud3JpdGVSZXZpZXdCdXR0b24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0uY29udHJvbHMucmF0aW5nLnNldFZhbHVlKHJhdGluZyk7XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JtQXNUb3VjaGVkKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucmV2aWV3Rm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLnJldmlld0Zvcm0uY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCkge1xuICAgIGlmICh0aGlzLnJldmlld0Zvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuYWRkUmV2aWV3KHByb2R1Y3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtGb3JtQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUmV2aWV3KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICBjb25zdCByZXZpZXdGb3JtQ29udHJvbHMgPSB0aGlzLnJldmlld0Zvcm0uY29udHJvbHM7XG4gICAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgICBoZWFkbGluZTogcmV2aWV3Rm9ybUNvbnRyb2xzLnRpdGxlLnZhbHVlLFxuICAgICAgY29tbWVudDogcmV2aWV3Rm9ybUNvbnRyb2xzLmNvbW1lbnQudmFsdWUsXG4gICAgICByYXRpbmc6IHJldmlld0Zvcm1Db250cm9scy5yYXRpbmcudmFsdWUsXG4gICAgICBhbGlhczogcmV2aWV3Rm9ybUNvbnRyb2xzLnJldmlld2VyTmFtZS52YWx1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZXZpZXdTZXJ2aWNlLmFkZChwcm9kdWN0LmNvZGUsIHJldmlldyk7XG5cbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLndyaXRlUmV2aWV3QnV0dG9uICYmIHRoaXMud3JpdGVSZXZpZXdCdXR0b24ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53cml0ZVJldmlld0J1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFJldmlld0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5yZXZpZXdGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICByYXRpbmc6IFswLCBbVmFsaWRhdG9ycy5taW4oMSksIFZhbGlkYXRvcnMubWF4KDUpXV0sXG4gICAgICByZXZpZXdlck5hbWU6ICcnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=