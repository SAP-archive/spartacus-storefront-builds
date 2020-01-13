/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
var CouponDialogComponent = /** @class */ (function () {
    function CouponDialogComponent(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    CouponDialogComponent.prototype.dismissModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    CouponDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-coupon-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'myCoupons.dialogTitle' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Modal Body -->\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n        <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n        <div class=\"cx-coupon-dialog-date\">\n          <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n          <div class=\"cx-coupon-date\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n\n        <div class=\"cx-coupon-dialog-status\">\n          <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n          <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n            {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CouponDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    CouponDialogComponent.propDecorators = {
        dialog: [{ type: ViewChild, args: ['dialog', { static: false, read: ElementRef },] }]
    };
    return CouponDialogComponent;
}());
export { CouponDialogComponent };
if (false) {
    /** @type {?} */
    CouponDialogComponent.prototype.iconTypes;
    /** @type {?} */
    CouponDialogComponent.prototype.coupon;
    /** @type {?} */
    CouponDialogComponent.prototype.dialog;
    /**
     * @type {?}
     * @protected
     */
    CouponDialogComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9jb3Vwb24tY2FyZC9jb3Vwb24tZGlhbG9nL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUcxRTtJQVdFLCtCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5oRCxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBTTZCLENBQUM7Ozs7O0lBRXBELDRDQUFZOzs7O0lBQVosVUFBYSxNQUFZO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHVpREFBNkM7aUJBQzlDOzs7O2dCQVBRLFlBQVk7Ozt5QkFZbEIsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7SUFRMUQsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVpZLHFCQUFxQjs7O0lBQ2hDLDBDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUV2Qix1Q0FDbUI7Ozs7O0lBRVAsNkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvdXBvbi1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY291cG9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvdXBvbkRpYWxvZ0NvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgY291cG9uOiBDdXN0b21lckNvdXBvbjtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge31cblxuICBkaXNtaXNzTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbik7XG4gIH1cbn1cbiJdfQ==