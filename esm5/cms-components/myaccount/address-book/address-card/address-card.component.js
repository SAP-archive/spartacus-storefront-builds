/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
var AddressCardComponent = /** @class */ (function () {
    function AddressCardComponent(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.openEditFormEvent = /**
     * @return {?}
     */
    function () {
        this.editEvent.emit();
    };
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.cancelEdit = /**
     * @return {?}
     */
    function () {
        this.editMode = false;
    };
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.setEditMode = /**
     * @return {?}
     */
    function () {
        this.editMode = true;
    };
    /**
     * @param {?} addressId
     * @return {?}
     */
    AddressCardComponent.prototype.setAddressAsDefault = /**
     * @param {?} addressId
     * @return {?}
     */
    function (addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    /**
     * @param {?} addressId
     * @return {?}
     */
    AddressCardComponent.prototype.deleteAddress = /**
     * @param {?} addressId
     * @return {?}
     */
    function (addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-card',
                    template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddressCardComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
    ]; };
    AddressCardComponent.propDecorators = {
        address: [{ type: Input }],
        editEvent: [{ type: Output }]
    };
    return AddressCardComponent;
}());
export { AddressCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFFekI7SUEwQkUsOEJBQ1Usa0JBQXNDLEVBQ3BDLHVCQUFpRCxFQUNuRCxvQkFBMkM7UUFGM0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBQ25ELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFuQjNDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBb0IzQyxDQUFDOzs7O0lBRUosZ0RBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxrREFBbUI7Ozs7SUFBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZEOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMsb0JBQW9CO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7WUFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsNENBQWE7Ozs7SUFBYixVQUFjLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRDs7V0FFRztRQUNILElBQ0UsSUFBSSxDQUFDLG9CQUFvQjtZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQzVCO1lBQ0EsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDRCQUE0QixFQUFFLENBQUM7U0FDN0Q7SUFDSCxDQUFDOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJxRUFBNEM7aUJBQzdDOzs7O2dCQU5DLGtCQUFrQjtnQkFGbEIsdUJBQXVCO2dCQUN2QixvQkFBb0I7OzswQkFZbkIsS0FBSzs0QkFFTCxNQUFNOztJQTZEVCwyQkFBQztDQUFBLEFBdkVELElBdUVDO1NBbkVZLG9CQUFvQjs7O0lBQy9CLHdDQUFrQjs7SUFDbEIseUNBQW1COztJQUVuQix1Q0FBMEI7O0lBRTFCLHlDQUE4Qzs7Ozs7SUFpQjVDLGtEQUE4Qzs7Ozs7SUFDOUMsdURBQTJEOzs7OztJQUMzRCxvREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ2FyZENvbXBvbmVudCB7XG4gIGVkaXRNb2RlOiBib29sZWFuO1xuICBpc0RlZmF1bHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYWRkcmVzczogQWRkcmVzcztcblxuICBAT3V0cHV0KCkgZWRpdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjJcbiAgICogIFVzZSBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICogIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgKiAgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlPzogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBvcGVuRWRpdEZvcm1FdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRFdmVudC5lbWl0KCk7XG4gIH1cblxuICBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLnNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkKTtcbiAgICAvKipcbiAgICAgKiBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgaWYgKFxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZSAmJlxuICAgICAgdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjInKSAmJlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICkge1xuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5jbGVhckNoZWNrb3V0RGVsaXZlcnlEZXRhaWxzKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZCk7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgJiZcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4yJykgJiZcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICAgIH1cbiAgfVxufVxuIl19