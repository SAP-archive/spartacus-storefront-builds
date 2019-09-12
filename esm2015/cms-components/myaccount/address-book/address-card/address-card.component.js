/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
export class AddressCardComponent {
    /**
     * @param {?} userAddressService
     * @param {?=} checkoutDeliveryService
     * @param {?=} featureConfigService
     */
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    openEditFormEvent() {
        this.editEvent.emit();
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
    }
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
}
AddressCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-card',
                template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AddressCardComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
AddressCardComponent.propDecorators = {
    address: [{ type: Input }],
    editEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddressCardComponent.prototype.editMode;
    /** @type {?} */
    AddressCardComponent.prototype.isDefault;
    /** @type {?} */
    AddressCardComponent.prototype.address;
    /** @type {?} */
    AddressCardComponent.prototype.editEvent;
    /**
     * @type {?}
     * @private
     */
    AddressCardComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    AddressCardComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    AddressCardComponent.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFNekIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBc0IvQixZQUNVLGtCQUFzQyxFQUNwQyx1QkFBaUQsRUFDbkQsb0JBQTJDO1FBRjNDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQUNuRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBbkIzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQW9CM0MsQ0FBQzs7OztJQUVKLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZEOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMsb0JBQW9CO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7WUFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRDs7V0FFRztRQUNILElBQ0UsSUFBSSxDQUFDLG9CQUFvQjtZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQzVCO1lBQ0EsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixFQUFFLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJxRUFBNEM7YUFDN0M7Ozs7WUFOQyxrQkFBa0I7WUFGbEIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjs7O3NCQVluQixLQUFLO3dCQUVMLE1BQU07Ozs7SUFMUCx3Q0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFFbkIsdUNBQTBCOztJQUUxQix5Q0FBOEM7Ozs7O0lBaUI1QyxrREFBOEM7Ozs7O0lBQzlDLHVEQUEyRDs7Ozs7SUFDM0Qsb0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NhcmRDb21wb25lbnQge1xuICBlZGl0TW9kZTogYm9vbGVhbjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgQE91dHB1dCgpIGVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAqICBVc2UgY29uc3RydWN0b3IodXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAqICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICogIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZSkgaW5zdGVhZFxuICAgKlxuICAgKiAgVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgKi9cbiAgY29uc3RydWN0b3IodXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZT86IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgb3BlbkVkaXRGb3JtRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0RXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gIH1cblxuICBzZXRFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5zZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZCk7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgJiZcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4yJykgJiZcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5kZWxldGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQpO1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlICYmXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMicpICYmXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==