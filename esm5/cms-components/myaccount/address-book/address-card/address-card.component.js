/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserAddressService } from '@spartacus/core';
var AddressCardComponent = /** @class */ (function () {
    function AddressCardComponent(userAddressService) {
        this.userAddressService = userAddressService;
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
    };
    AddressCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-card',
                    template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddressCardComponent.ctorParameters = function () { return [
        { type: UserAddressService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFXLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQ7SUFZRSw4QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGaEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFZSxDQUFDOzs7O0lBRTlELGdEQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsa0RBQW1COzs7O0lBQW5CLFVBQW9CLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELDRDQUFhOzs7O0lBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwycUVBQTRDO2lCQUM3Qzs7OztnQkFMaUIsa0JBQWtCOzs7MEJBVWpDLEtBQUs7NEJBRUwsTUFBTTs7SUF1QlQsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSxvQkFBb0I7OztJQUMvQix3Q0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFFbkIsdUNBQTBCOztJQUUxQix5Q0FBOEM7Ozs7O0lBRWxDLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NhcmRDb21wb25lbnQge1xuICBlZGl0TW9kZTogYm9vbGVhbjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgQE91dHB1dCgpIGVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UpIHt9XG5cbiAgb3BlbkVkaXRGb3JtRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0RXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gIH1cblxuICBzZXRFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5zZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZCk7XG4gIH1cblxuICBkZWxldGVBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkKTtcbiAgfVxufVxuIl19