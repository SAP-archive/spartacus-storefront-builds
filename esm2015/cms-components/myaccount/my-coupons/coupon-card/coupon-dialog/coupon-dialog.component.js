import { __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
let CouponDialogComponent = class CouponDialogComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
};
CouponDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
__decorate([
    ViewChild('dialog', { read: ElementRef })
], CouponDialogComponent.prototype, "dialog", void 0);
CouponDialogComponent = __decorate([
    Component({
        selector: 'cx-coupon-dialog',
        template: "<div #dialog>\n  <!-- Modal Header -->\n\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'myCoupons.dialogTitle' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Modal Body -->\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n        <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n        <div class=\"cx-coupon-dialog-date\">\n          <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n          <div class=\"cx-coupon-date\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n\n        <div class=\"cx-coupon-dialog-status\">\n          <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n          <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n            {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CouponDialogComponent);
export { CouponDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9jb3Vwb24tY2FyZC9jb3Vwb24tZGlhbG9nL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU8xRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU9oQyxZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5oRCxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBTTZCLENBQUM7SUFFcEQsWUFBWSxDQUFDLE1BQVk7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTs7WUFMcUMsWUFBWTs7QUFGaEQ7SUFEQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO3FEQUN2QjtBQUxSLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLHVpREFBNkM7S0FDOUMsQ0FBQztHQUNXLHFCQUFxQixDQVlqQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25EaWFsb2dDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNvdXBvbjogQ3VzdG9tZXJDb3Vwb247XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGRpYWxvZzogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cbiAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24pO1xuICB9XG59XG4iXX0=