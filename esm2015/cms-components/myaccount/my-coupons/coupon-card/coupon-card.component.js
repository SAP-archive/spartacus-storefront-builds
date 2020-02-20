import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalRef, ModalService, } from '../../../../shared/components/modal/index';
import { CouponDialogComponent } from './coupon-dialog/coupon-dialog.component';
import { MyCouponsComponentService } from '../my-coupons.component.service';
let CouponCardComponent = class CouponCardComponent {
    constructor(modalService, myCouponsComponentService) {
        this.modalService = modalService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.notificationChanged = new EventEmitter();
    }
    onSubscriptionChange() {
        this.notificationChanged.emit({
            couponId: this.coupon.couponId,
            notification: !this.coupon.notificationOn,
        });
    }
    readMore() {
        let modalInstance;
        this.modalRef = this.modalService.open(CouponDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.coupon = this.coupon;
    }
    findProducts() {
        this.myCouponsComponentService.launchSearchPage(this.coupon);
    }
};
CouponCardComponent.ctorParameters = () => [
    { type: ModalService },
    { type: MyCouponsComponentService }
];
__decorate([
    Input()
], CouponCardComponent.prototype, "coupon", void 0);
__decorate([
    Input()
], CouponCardComponent.prototype, "couponSubscriptionLoading$", void 0);
__decorate([
    Output()
], CouponCardComponent.prototype, "notificationChanged", void 0);
CouponCardComponent = __decorate([
    Component({
        selector: 'cx-coupon-card',
        template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CouponCardComponent);
export { CouponCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L215LWNvdXBvbnMvY291cG9uLWNhcmQvY291cG9uLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsWUFBWSxHQUNiLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPNUUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFXOUIsWUFDWSxZQUEwQixFQUMxQix5QkFBb0Q7UUFEcEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQVBoRSx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFHbEMsQ0FBQztJQUtGLENBQUM7SUFFSixvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksYUFBa0IsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzVELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFSCxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRixDQUFBOztZQXpCMkIsWUFBWTtZQUNDLHlCQUF5Qjs7QUFadkQ7SUFBUixLQUFLLEVBQUU7bURBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO3VFQUFpRDtBQUl6RDtJQURDLE1BQU0sRUFBRTtnRUFJSjtBQVRNLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHUvREFBMkM7S0FDNUMsQ0FBQztHQUNXLG1CQUFtQixDQXFDL0I7U0FyQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTW9kYWxSZWYsXG4gIE1vZGFsU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgQ291cG9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vwb24tZGlhbG9nL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9teS1jb3Vwb25zLmNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY291cG9uLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY291cG9uLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25DYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY291cG9uOiBDdXN0b21lckNvdXBvbjtcbiAgQElucHV0KCkgY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIG1vZGFsUmVmOiBNb2RhbFJlZjtcblxuICBAT3V0cHV0KClcbiAgbm90aWZpY2F0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGNvdXBvbklkOiBzdHJpbmc7XG4gICAgbm90aWZpY2F0aW9uOiBib29sZWFuO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXlDb3Vwb25zQ29tcG9uZW50U2VydmljZTogTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgb25TdWJzY3JpcHRpb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgY291cG9uSWQ6IHRoaXMuY291cG9uLmNvdXBvbklkLFxuICAgICAgbm90aWZpY2F0aW9uOiAhdGhpcy5jb3Vwb24ubm90aWZpY2F0aW9uT24sXG4gICAgfSk7XG4gIH1cblxuICByZWFkTW9yZSgpIHtcbiAgICBsZXQgbW9kYWxJbnN0YW5jZTogYW55O1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvdXBvbkRpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgbW9kYWxJbnN0YW5jZS5jb3Vwb24gPSB0aGlzLmNvdXBvbjtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0cygpOiB2b2lkIHtcbiAgICB0aGlzLm15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZSh0aGlzLmNvdXBvbik7XG4gIH1cbn1cbiJdfQ==