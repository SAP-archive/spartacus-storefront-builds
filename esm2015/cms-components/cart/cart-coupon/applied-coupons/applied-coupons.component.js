import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
let AppliedCouponsComponent = class AppliedCouponsComponent {
    constructor(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    get sortedVouchers() {
        this.vouchers = this.vouchers || [];
        return this.vouchers.slice().sort((a, b) => {
            return a.code.localeCompare(b.code);
        });
    }
    removeVoucher(voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    }
};
AppliedCouponsComponent.ctorParameters = () => [
    { type: CartVoucherService }
];
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "vouchers", void 0);
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "cartIsLoading", void 0);
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "isReadOnly", void 0);
AppliedCouponsComponent = __decorate([
    Component({
        selector: 'cx-applied-coupons',
        template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\r\n  <div *ngIf=\"sortedVouchers.length > 0\">\r\n    <div class=\"cx-applied-coupon-title\">\r\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let voucher of sortedVouchers\"\r\n    class=\"coupon-summary cx-coupon-card textonly\"\r\n    role=\"filter\"\r\n  >\r\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #editableCoupons>\r\n  <div class=\"row\">\r\n    <div\r\n      *ngFor=\"let voucher of sortedVouchers\"\r\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\r\n      role=\"filter\"\r\n    >\r\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\r\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"removeVoucher(voucher.voucherCode)\"\r\n          [disabled]=\"cartIsLoading\"\r\n          [class.disabled]=\"cartIsLoading\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AppliedCouponsComponent);
export { AppliedCouponsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1jb3Vwb24vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFPNUUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFVbEMsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRXVDLENBQUM7SUFFOUQsSUFBVyxjQUFjO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQTs7WUFaeUMsa0JBQWtCOztBQVIxRDtJQURDLEtBQUssRUFBRTt5REFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTs4REFDYztBQUV0QjtJQURDLEtBQUssRUFBRTsyREFDVztBQU5SLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGswQ0FBK0M7UUFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHVCQUF1QixDQXNCbkM7U0F0QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZvdWNoZXIsIENhcnRWb3VjaGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFwcGxpZWQtY291cG9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwbGllZENvdXBvbnNDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB2b3VjaGVyczogVm91Y2hlcltdO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0IHNvcnRlZFZvdWNoZXJzKCk6IFZvdWNoZXJbXSB7XG4gICAgdGhpcy52b3VjaGVycyA9IHRoaXMudm91Y2hlcnMgfHwgW107XG4gICAgcmV0dXJuIHRoaXMudm91Y2hlcnMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5jb2RlLmxvY2FsZUNvbXBhcmUoYi5jb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZW1vdmVWb3VjaGVyKHZvdWNoZXJJZCk7XG4gIH1cbn1cbiJdfQ==