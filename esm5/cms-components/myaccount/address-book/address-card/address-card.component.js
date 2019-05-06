/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '@spartacus/core';
var AddressCardComponent = /** @class */ (function () {
    function AddressCardComponent(userService) {
        this.userService = userService;
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
        if (this.userId) {
            this.userService.setAddressAsDefault(this.userId, addressId);
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
        if (this.userId) {
            this.userService.deleteUserAddress(this.userId, addressId);
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
        { type: UserService }
    ]; };
    AddressCardComponent.propDecorators = {
        userId: [{ type: Input }],
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
    AddressCardComponent.prototype.userId;
    /** @type {?} */
    AddressCardComponent.prototype.address;
    /** @type {?} */
    AddressCardComponent.prototype.editEvent;
    /**
     * @type {?}
     * @private
     */
    AddressCardComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZEO0lBY0UsOEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRmxDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRUMsQ0FBQzs7OztJQUVoRCxnREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGtEQUFtQjs7OztJQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFhOzs7O0lBQWIsVUFBYyxTQUFpQjtRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJxRUFBNEM7aUJBQzdDOzs7O2dCQUxpQixXQUFXOzs7eUJBVTFCLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxNQUFNOztJQTJCVCwyQkFBQztDQUFBLEFBdkNELElBdUNDO1NBbkNZLG9CQUFvQjs7O0lBQy9CLHdDQUFrQjs7SUFDbEIseUNBQW1COztJQUVuQixzQ0FBd0I7O0lBRXhCLHVDQUEwQjs7SUFFMUIseUNBQThDOzs7OztJQUVsQywyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NhcmRDb21wb25lbnQge1xuICBlZGl0TW9kZTogYm9vbGVhbjtcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHVzZXJJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgQE91dHB1dCgpIGVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIG9wZW5FZGl0Rm9ybUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gIH1cblxuICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldEFkZHJlc3NBc0RlZmF1bHQodGhpcy51c2VySWQsIGFkZHJlc3NJZCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5kZWxldGVVc2VyQWRkcmVzcyh0aGlzLnVzZXJJZCwgYWRkcmVzc0lkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==