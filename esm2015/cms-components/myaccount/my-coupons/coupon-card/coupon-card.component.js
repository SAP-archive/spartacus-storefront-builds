import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService, } from '../../../../shared/components/modal/index';
import { CouponDialogComponent } from './coupon-dialog/coupon-dialog.component';
import { MyCouponsComponentService } from '../my-coupons.component.service';
export class CouponCardComponent {
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
}
CouponCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-coupon-card',
                template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
CouponCardComponent.ctorParameters = () => [
    { type: ModalService },
    { type: MyCouponsComponentService }
];
CouponCardComponent.propDecorators = {
    coupon: [{ type: Input }],
    couponSubscriptionLoading$: [{ type: Input }],
    notificationChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L215LWNvdXBvbnMvY291cG9uLWNhcmQvY291cG9uLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUVMLFlBQVksR0FDYixNQUFNLDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxtQkFBbUI7SUFXOUIsWUFDWSxZQUEwQixFQUMxQix5QkFBb0Q7UUFEcEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQVBoRSx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFHbEMsQ0FBQztJQUtGLENBQUM7SUFFSixvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksYUFBa0IsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzVELFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFSCxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRCxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsdS9EQUEyQzthQUM1Qzs7O1lBVkMsWUFBWTtZQUlMLHlCQUF5Qjs7O3FCQVEvQixLQUFLO3lDQUNMLEtBQUs7a0NBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE1vZGFsUmVmLFxuICBNb2RhbFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IENvdXBvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY291cG9uLWRpYWxvZy9jb3Vwb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vbXktY291cG9ucy5jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvdXBvbi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdXBvbi1jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ291cG9uQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvdXBvbjogQ3VzdG9tZXJDb3Vwb247XG4gIEBJbnB1dCgpIGNvdXBvblN1YnNjcmlwdGlvbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgQE91dHB1dCgpXG4gIG5vdGlmaWNhdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjb3Vwb25JZDogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U6IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIG9uU3Vic2NyaXB0aW9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uQ2hhbmdlZC5lbWl0KHtcbiAgICAgIGNvdXBvbklkOiB0aGlzLmNvdXBvbi5jb3Vwb25JZCxcbiAgICAgIG5vdGlmaWNhdGlvbjogIXRoaXMuY291cG9uLm5vdGlmaWNhdGlvbk9uLFxuICAgIH0pO1xuICB9XG5cbiAgcmVhZE1vcmUoKSB7XG4gICAgbGV0IG1vZGFsSW5zdGFuY2U6IGFueTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb3Vwb25EaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KTtcblxuICAgIG1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIG1vZGFsSW5zdGFuY2UuY291cG9uID0gdGhpcy5jb3Vwb247XG4gIH1cblxuICBmaW5kUHJvZHVjdHMoKTogdm9pZCB7XG4gICAgdGhpcy5teUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlLmxhdW5jaFNlYXJjaFBhZ2UodGhpcy5jb3Vwb24pO1xuICB9XG59XG4iXX0=