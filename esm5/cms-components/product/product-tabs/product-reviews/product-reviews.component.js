import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { distinctUntilChanged, filter, map, switchMap, tap, } from 'rxjs/operators';
import { CurrentProductService } from '../../current-product.service';
import { CustomFormValidators } from '../../../../shared/index';
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
    ProductReviewsComponent.prototype.submitReview = function (product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.reviewForm.markAllAsTouched();
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
            rating: [null, CustomFormValidators.starRatingEmpty],
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
            template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form (ngSubmit)=\"submitReview(product)\" [formGroup]=\"reviewForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n          />\n          <cx-form-errors [control]=\"reviewForm.get('title')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n          <cx-form-errors\n            [control]=\"reviewForm.get('comment')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <input type=\"number\" formControlName=\"rating\" class=\"rating-input\" />\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n          <cx-form-errors [control]=\"reviewForm.get('rating')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReviewsComponent);
    return ProductReviewsComponent;
}());
export { ProductReviewsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxTQUFTLEVBQ1QsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPaEU7SUEyQkUsaUNBQ1ksYUFBbUMsRUFDbkMscUJBQTRDLEVBQzlDLEVBQWUsRUFDYixFQUFxQjtRQUpqQyxpQkFLSTtRQUpRLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDYixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTFCakMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIscUJBQXFCO1FBQ3JCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUl4QixhQUFRLEdBQXdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4RSxhQUFRLEdBQXlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqRCxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxFQUNsQixHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxFQUNsQixvQkFBb0IsRUFBRSxFQUN0QixTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFBaEQsQ0FBZ0QsQ0FDakQsRUFDRCxHQUFHLENBQUM7WUFDRixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU9DLENBQUM7SUFFSixxREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxtREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQsMkNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsOENBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELDJDQUFTLEdBQVQsVUFBVSxPQUFnQjtRQUN4QixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQU0sTUFBTSxHQUFXO1lBQ3JCLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN4QyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSztTQUM3QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRU8saURBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7WUFDcEQsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkUwQixvQkFBb0I7Z0JBQ1oscUJBQXFCO2dCQUMxQyxXQUFXO2dCQUNULGlCQUFpQjs7SUE5Qlc7UUFBM0MsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzsrREFBd0I7SUFFbkU7UUFEQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0VBQ3BCO0lBSG5CLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHFpSkFBK0M7WUFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHVCQUF1QixDQWdHbkM7SUFBRCw4QkFBQztDQUFBLEFBaEdELElBZ0dDO1NBaEdZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLCBSZXZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJldmlld3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZXZpZXdzQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgndGl0bGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0aXRsZUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd3cml0ZVJldmlld0J1dHRvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICB3cml0ZVJldmlld0J1dHRvbjogRWxlbWVudFJlZjtcblxuICBpc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcblxuICAvLyBUT0RPOiBjb25maWd1cmFibGVcbiAgaW5pdGlhbE1heExpc3RJdGVtcyA9IDU7XG4gIG1heExpc3RJdGVtczogbnVtYmVyO1xuICByZXZpZXdGb3JtOiBGb3JtR3JvdXA7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG5cbiAgcmV2aWV3cyQ6IE9ic2VydmFibGU8UmV2aWV3W10+ID0gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgIGZpbHRlcigocCkgPT4gISFwKSxcbiAgICBtYXAoKHApID0+IHAuY29kZSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICBzd2l0Y2hNYXAoKHByb2R1Y3RDb2RlKSA9PlxuICAgICAgdGhpcy5yZXZpZXdTZXJ2aWNlLmdldEJ5UHJvZHVjdENvZGUocHJvZHVjdENvZGUpXG4gICAgKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcbiAgICAgIHRoaXMubWF4TGlzdEl0ZW1zID0gdGhpcy5pbml0aWFsTWF4TGlzdEl0ZW1zO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJldmlld1NlcnZpY2U6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBpbml0aWF0ZVdyaXRlUmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gdHJ1ZTtcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMudGl0bGVJbnB1dCAmJiB0aGlzLnRpdGxlSW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy50aXRsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWxXcml0ZVJldmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRSZXZpZXdGb3JtKCk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLndyaXRlUmV2aWV3QnV0dG9uICYmIHRoaXMud3JpdGVSZXZpZXdCdXR0b24ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy53cml0ZVJldmlld0J1dHRvbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmF0aW5nKHJhdGluZzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXZpZXdGb3JtLmNvbnRyb2xzLnJhdGluZy5zZXRWYWx1ZShyYXRpbmcpO1xuICB9XG5cbiAgc3VibWl0UmV2aWV3KHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICBpZiAodGhpcy5yZXZpZXdGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmFkZFJldmlldyhwcm9kdWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXZpZXdGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZXZpZXcocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHJldmlld0Zvcm1Db250cm9scyA9IHRoaXMucmV2aWV3Rm9ybS5jb250cm9scztcbiAgICBjb25zdCByZXZpZXc6IFJldmlldyA9IHtcbiAgICAgIGhlYWRsaW5lOiByZXZpZXdGb3JtQ29udHJvbHMudGl0bGUudmFsdWUsXG4gICAgICBjb21tZW50OiByZXZpZXdGb3JtQ29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIHJhdGluZzogcmV2aWV3Rm9ybUNvbnRyb2xzLnJhdGluZy52YWx1ZSxcbiAgICAgIGFsaWFzOiByZXZpZXdGb3JtQ29udHJvbHMucmV2aWV3ZXJOYW1lLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLnJldmlld1NlcnZpY2UuYWRkKHByb2R1Y3QuY29kZSwgcmV2aWV3KTtcblxuICAgIHRoaXMuaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFJldmlld0Zvcm0oKTtcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMud3JpdGVSZXZpZXdCdXR0b24gJiYgdGhpcy53cml0ZVJldmlld0J1dHRvbi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLndyaXRlUmV2aWV3QnV0dG9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UmV2aWV3Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldmlld0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHRpdGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJhdGluZzogW251bGwsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnN0YXJSYXRpbmdFbXB0eV0sXG4gICAgICByZXZpZXdlck5hbWU6ICcnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=