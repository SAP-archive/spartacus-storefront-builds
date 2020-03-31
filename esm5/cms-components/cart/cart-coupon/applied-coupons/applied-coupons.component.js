import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
var AppliedCouponsComponent = /** @class */ (function () {
    function AppliedCouponsComponent(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(AppliedCouponsComponent.prototype, "sortedVouchers", {
        get: function () {
            this.vouchers = this.vouchers || [];
            return this.vouchers.slice().sort(function (a, b) {
                return a.code.localeCompare(b.code);
            });
        },
        enumerable: true,
        configurable: true
    });
    AppliedCouponsComponent.prototype.removeVoucher = function (voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    };
    AppliedCouponsComponent.ctorParameters = function () { return [
        { type: CartVoucherService }
    ]; };
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
            template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\n  <div *ngIf=\"sortedVouchers.length > 0\">\n    <div class=\"cx-applied-coupon-title\">\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\n    </div>\n  </div>\n  <div\n    *ngFor=\"let voucher of sortedVouchers\"\n    class=\"coupon-summary cx-coupon-card textonly\"\n    role=\"filter\"\n  >\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\n  </div>\n</div>\n\n<ng-template #editableCoupons>\n  <div class=\"row\">\n    <div\n      *ngFor=\"let voucher of sortedVouchers\"\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\n      role=\"filter\"\n    >\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"removeVoucher(voucher.voucherCode)\"\n          [disabled]=\"cartIsLoading\"\n          [class.disabled]=\"cartIsLoading\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], AppliedCouponsComponent);
    return AppliedCouponsComponent;
}());
export { AppliedCouponsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1jb3Vwb24vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFPNUU7SUFVRSxpQ0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRXVDLENBQUM7SUFFOUQsc0JBQVcsbURBQWM7YUFBekI7WUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUVELCtDQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQVh1QyxrQkFBa0I7O0lBUjFEO1FBREMsS0FBSyxFQUFFOzZEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO2tFQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOytEQUNXO0lBTlIsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsa3ZDQUErQztZQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csdUJBQXVCLENBc0JuQztJQUFELDhCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0F0QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZvdWNoZXIsIENhcnRWb3VjaGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFwcGxpZWQtY291cG9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwbGllZENvdXBvbnNDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB2b3VjaGVyczogVm91Y2hlcltdO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0IHNvcnRlZFZvdWNoZXJzKCk6IFZvdWNoZXJbXSB7XG4gICAgdGhpcy52b3VjaGVycyA9IHRoaXMudm91Y2hlcnMgfHwgW107XG4gICAgcmV0dXJuIHRoaXMudm91Y2hlcnMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5jb2RlLmxvY2FsZUNvbXBhcmUoYi5jb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZW1vdmVWb3VjaGVyKHZvdWNoZXJJZCk7XG4gIH1cbn1cbiJdfQ==