/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
var AppliedCouponsComponent = /** @class */ (function () {
    function AppliedCouponsComponent(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(AppliedCouponsComponent.prototype, "sortedVouchers", {
        get: /**
         * @return {?}
         */
        function () {
            this.vouchers = this.vouchers || [];
            return this.vouchers.slice().sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return a.code.localeCompare(b.code);
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} voucherId
     * @return {?}
     */
    AppliedCouponsComponent.prototype.removeVoucher = /**
     * @param {?} voucherId
     * @return {?}
     */
    function (voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    };
    AppliedCouponsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-applied-coupons',
                    template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\r\n  <div *ngIf=\"sortedVouchers.length > 0\">\r\n    <div class=\"cx-applied-coupon-title\">\r\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let voucher of sortedVouchers\"\r\n    class=\"coupon-summary cx-coupon-card textonly\"\r\n    role=\"filter\"\r\n  >\r\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #editableCoupons>\r\n  <div class=\"row\">\r\n    <div\r\n      *ngFor=\"let voucher of sortedVouchers\"\r\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\r\n      role=\"filter\"\r\n    >\r\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\r\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"removeVoucher(voucher.voucherCode)\"\r\n          [disabled]=\"cartIsLoading\"\r\n          [class.disabled]=\"cartIsLoading\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AppliedCouponsComponent.ctorParameters = function () { return [
        { type: CartVoucherService }
    ]; };
    AppliedCouponsComponent.propDecorators = {
        vouchers: [{ type: Input }],
        cartIsLoading: [{ type: Input }],
        isReadOnly: [{ type: Input }]
    };
    return AppliedCouponsComponent;
}());
export { AppliedCouponsComponent };
if (false) {
    /** @type {?} */
    AppliedCouponsComponent.prototype.vouchers;
    /** @type {?} */
    AppliedCouponsComponent.prototype.cartIsLoading;
    /** @type {?} */
    AppliedCouponsComponent.prototype.isReadOnly;
    /** @type {?} */
    AppliedCouponsComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    AppliedCouponsComponent.prototype.cartVoucherService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1jb3Vwb24vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBVyxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV2RTtJQWVFLGlDQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQU4xRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFFdUMsQ0FBQztJQUU5RCxzQkFBVyxtREFBYzs7OztRQUF6QjtZQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGswQ0FBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQaUIsa0JBQWtCOzs7MkJBU2pDLEtBQUs7Z0NBRUwsS0FBSzs2QkFFTCxLQUFLOztJQWlCUiw4QkFBQztDQUFBLEFBM0JELElBMkJDO1NBdEJZLHVCQUF1Qjs7O0lBQ2xDLDJDQUNvQjs7SUFDcEIsZ0RBQ3NCOztJQUN0Qiw2Q0FDbUI7O0lBRW5CLDRDQUFzQjs7Ozs7SUFFVixxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVm91Y2hlciwgQ2FydFZvdWNoZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFwcGxpZWQtY291cG9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwbGllZENvdXBvbnNDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB2b3VjaGVyczogVm91Y2hlcltdO1xuICBASW5wdXQoKVxuICBjYXJ0SXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0IHNvcnRlZFZvdWNoZXJzKCk6IFZvdWNoZXJbXSB7XG4gICAgdGhpcy52b3VjaGVycyA9IHRoaXMudm91Y2hlcnMgfHwgW107XG4gICAgcmV0dXJuIHRoaXMudm91Y2hlcnMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5jb2RlLmxvY2FsZUNvbXBhcmUoYi5jb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhcnRWb3VjaGVyU2VydmljZS5yZW1vdmVWb3VjaGVyKHZvdWNoZXJJZCk7XG4gIH1cbn1cbiJdfQ==