/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService, } from '../../../../shared/components/modal/index';
import { CouponDialogComponent } from './coupon-dialog/coupon-dialog.component';
import { MyCouponsComponentService } from '../my-coupons.component.service';
import { Observable } from 'rxjs';
var CouponCardComponent = /** @class */ (function () {
    function CouponCardComponent(modalService, myCouponsComponentService) {
        this.modalService = modalService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.notificationChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CouponCardComponent.prototype.onSubscriptionChange = /**
     * @return {?}
     */
    function () {
        this.notificationChanged.emit({
            couponId: this.coupon.couponId,
            notification: !this.coupon.notificationOn,
        });
    };
    /**
     * @return {?}
     */
    CouponCardComponent.prototype.readMore = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(CouponDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.coupon = this.coupon;
    };
    /**
     * @return {?}
     */
    CouponCardComponent.prototype.findProducts = /**
     * @return {?}
     */
    function () {
        this.myCouponsComponentService.launchSearchPage(this.coupon);
    };
    CouponCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-coupon-card',
                    template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CouponCardComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: MyCouponsComponentService }
    ]; };
    CouponCardComponent.propDecorators = {
        coupon: [{ type: Input }],
        couponSubscriptionLoading$: [{ type: Input }],
        notificationChanged: [{ type: Output }]
    };
    return CouponCardComponent;
}());
export { CouponCardComponent };
if (false) {
    /** @type {?} */
    CouponCardComponent.prototype.coupon;
    /** @type {?} */
    CouponCardComponent.prototype.couponSubscriptionLoading$;
    /** @type {?} */
    CouponCardComponent.prototype.modalRef;
    /** @type {?} */
    CouponCardComponent.prototype.notificationChanged;
    /**
     * @type {?}
     * @protected
     */
    CouponCardComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    CouponCardComponent.prototype.myCouponsComponentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L215LWNvdXBvbnMvY291cG9uLWNhcmQvY291cG9uLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFFTCxZQUFZLEdBQ2IsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDO0lBZUUsNkJBQ1ksWUFBMEIsRUFDMUIseUJBQW9EO1FBRHBELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFQaEUsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBR2xDLENBQUM7SUFLRixDQUFDOzs7O0lBRUosa0RBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1NBQzFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7O1lBQ00sYUFBa0I7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM1RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdS9EQUEyQztpQkFDNUM7Ozs7Z0JBVkMsWUFBWTtnQkFJTCx5QkFBeUI7Ozt5QkFRL0IsS0FBSzs2Q0FDTCxLQUFLO3NDQUdMLE1BQU07O0lBZ0NULDBCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FyQ1ksbUJBQW1COzs7SUFDOUIscUNBQWdDOztJQUNoQyx5REFBeUQ7O0lBQ3pELHVDQUFtQjs7SUFFbkIsa0RBSUs7Ozs7O0lBR0gsMkNBQW9DOzs7OztJQUNwQyx3REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBNb2RhbFJlZixcbiAgTW9kYWxTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBDb3Vwb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvdXBvbi1kaWFsb2cvY291cG9uLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vwb24tY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvdXBvbkNhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBjb3Vwb246IEN1c3RvbWVyQ291cG9uO1xuICBASW5wdXQoKSBjb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbW9kYWxSZWY6IE1vZGFsUmVmO1xuXG4gIEBPdXRwdXQoKVxuICBub3RpZmljYXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgY291cG9uSWQ6IHN0cmluZztcbiAgICBub3RpZmljYXRpb246IGJvb2xlYW47XG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICBvblN1YnNjcmlwdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICBjb3Vwb25JZDogdGhpcy5jb3Vwb24uY291cG9uSWQsXG4gICAgICBub3RpZmljYXRpb246ICF0aGlzLmNvdXBvbi5ub3RpZmljYXRpb25PbixcbiAgICB9KTtcbiAgfVxuXG4gIHJlYWRNb3JlKCkge1xuICAgIGxldCBtb2RhbEluc3RhbmNlOiBhbnk7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ291cG9uRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSk7XG5cbiAgICBtb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBtb2RhbEluc3RhbmNlLmNvdXBvbiA9IHRoaXMuY291cG9uO1xuICB9XG5cbiAgZmluZFByb2R1Y3RzKCk6IHZvaWQge1xuICAgIHRoaXMubXlDb3Vwb25zQ29tcG9uZW50U2VydmljZS5sYXVuY2hTZWFyY2hQYWdlKHRoaXMuY291cG9uKTtcbiAgfVxufVxuIl19