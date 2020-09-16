import { ChangeDetectionStrategy, Component, ViewChild, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductReviewService } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap, tap, } from 'rxjs/operators';
import { CurrentProductService } from '../../current-product.service';
import { CustomFormValidators } from '../../../../shared/index';
export class ProductReviewsComponent {
    constructor(reviewService, currentProductService, fb, cd) {
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.cd = cd;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter((p) => !!p), map((p) => p.code), distinctUntilChanged(), switchMap((productCode) => this.reviewService.getByProductCode(productCode)), tap(() => {
            this.resetReviewForm();
            this.maxListItems = this.initialMaxListItems;
        }));
    }
    initiateWriteReview() {
        this.isWritingReview = true;
        this.cd.detectChanges();
        if (this.titleInput && this.titleInput.nativeElement) {
            this.titleInput.nativeElement.focus();
        }
    }
    cancelWriteReview() {
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    }
    setRating(rating) {
        this.reviewForm.controls.rating.setValue(rating);
    }
    submitReview(product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.reviewForm.markAllAsTouched();
        }
    }
    addReview(product) {
        const reviewFormControls = this.reviewForm.controls;
        const review = {
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
    }
    resetReviewForm() {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [null, CustomFormValidators.starRatingEmpty],
            reviewerName: '',
        });
    }
}
ProductReviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-reviews',
                template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form (ngSubmit)=\"submitReview(product)\" [formGroup]=\"reviewForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n          />\n          <cx-form-errors [control]=\"reviewForm.get('title')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n          <cx-form-errors\n            [control]=\"reviewForm.get('comment')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <input type=\"number\" formControlName=\"rating\" class=\"rating-input\" />\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n          <cx-form-errors [control]=\"reviewForm.get('rating')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: CurrentProductService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
ProductReviewsComponent.propDecorators = {
    titleInput: [{ type: ViewChild, args: ['titleInput', { static: false },] }],
    writeReviewButton: [{ type: ViewChild, args: ['writeReviewButton', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQVcsb0JBQW9CLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsU0FBUyxFQUNULEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT2hFLE1BQU0sT0FBTyx1QkFBdUI7SUEyQmxDLFlBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWUsRUFDYixFQUFxQjtRQUhyQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUExQmpDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLHFCQUFxQjtRQUNyQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFJeEIsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFeEUs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Q0FBQztZQUM5QixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsZUFBZSxDQUFDO1lBQ3BELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXBHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIscWlKQUErQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQWhCaUIsb0JBQW9CO1lBUzdCLHFCQUFxQjtZQVZyQixXQUFXO1lBRmxCLGlCQUFpQjs7O3lCQXFCaEIsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBQ3pDLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmV2aWV3U2VydmljZSwgUmV2aWV3IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZXZpZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmV2aWV3cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmV2aWV3c0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGl0bGVJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnd3JpdGVSZXZpZXdCdXR0b24nLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgd3JpdGVSZXZpZXdCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogY29uZmlndXJhYmxlXG4gIGluaXRpYWxNYXhMaXN0SXRlbXMgPSA1O1xuICBtYXhMaXN0SXRlbXM6IG51bWJlcjtcbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuXG4gIHJldmlld3MkOiBPYnNlcnZhYmxlPFJldmlld1tdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBmaWx0ZXIoKHApID0+ICEhcCksXG4gICAgbWFwKChwKSA9PiBwLmNvZGUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc3dpdGNoTWFwKChwcm9kdWN0Q29kZSkgPT5cbiAgICAgIHRoaXMucmV2aWV3U2VydmljZS5nZXRCeVByb2R1Y3RDb2RlKHByb2R1Y3RDb2RlKVxuICAgICksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG4gICAgICB0aGlzLm1heExpc3RJdGVtcyA9IHRoaXMuaW5pdGlhbE1heExpc3RJdGVtcztcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZXZpZXdTZXJ2aWNlOiBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgaW5pdGlhdGVXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IHRydWU7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLnRpdGxlSW5wdXQgJiYgdGhpcy50aXRsZUlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGl0bGVJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsV3JpdGVSZXZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5pc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2V0UmV2aWV3Rm9ybSgpO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy53cml0ZVJldmlld0J1dHRvbiAmJiB0aGlzLndyaXRlUmV2aWV3QnV0dG9uLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMud3JpdGVSZXZpZXdCdXR0b24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFJhdGluZyhyYXRpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmV2aWV3Rm9ybS5jb250cm9scy5yYXRpbmcuc2V0VmFsdWUocmF0aW5nKTtcbiAgfVxuXG4gIHN1Ym1pdFJldmlldyhwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgaWYgKHRoaXMucmV2aWV3Rm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5hZGRSZXZpZXcocHJvZHVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmV2aWV3Rm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkUmV2aWV3KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICBjb25zdCByZXZpZXdGb3JtQ29udHJvbHMgPSB0aGlzLnJldmlld0Zvcm0uY29udHJvbHM7XG4gICAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgICBoZWFkbGluZTogcmV2aWV3Rm9ybUNvbnRyb2xzLnRpdGxlLnZhbHVlLFxuICAgICAgY29tbWVudDogcmV2aWV3Rm9ybUNvbnRyb2xzLmNvbW1lbnQudmFsdWUsXG4gICAgICByYXRpbmc6IHJldmlld0Zvcm1Db250cm9scy5yYXRpbmcudmFsdWUsXG4gICAgICBhbGlhczogcmV2aWV3Rm9ybUNvbnRyb2xzLnJldmlld2VyTmFtZS52YWx1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5yZXZpZXdTZXJ2aWNlLmFkZChwcm9kdWN0LmNvZGUsIHJldmlldyk7XG5cbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLndyaXRlUmV2aWV3QnV0dG9uICYmIHRoaXMud3JpdGVSZXZpZXdCdXR0b24ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53cml0ZVJldmlld0J1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFJldmlld0Zvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5yZXZpZXdGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB0aXRsZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvbW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICByYXRpbmc6IFtudWxsLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5zdGFyUmF0aW5nRW1wdHldLFxuICAgICAgcmV2aWV3ZXJOYW1lOiAnJyxcbiAgICB9KTtcbiAgfVxufVxuIl19