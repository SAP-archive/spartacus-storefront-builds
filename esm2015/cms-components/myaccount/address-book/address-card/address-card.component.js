/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '@spartacus/core';
export class AddressCardComponent {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
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
        if (this.userId) {
            this.userService.setAddressAsDefault(this.userId, addressId);
        }
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    deleteAddress(addressId) {
        if (this.userId) {
            this.userService.deleteUserAddress(this.userId, addressId);
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
    { type: UserService }
];
AddressCardComponent.propDecorators = {
    userId: [{ type: Input }],
    address: [{ type: Input }],
    editEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXZELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFVL0IsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFQyxDQUFDOzs7O0lBRWhELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwycUVBQTRDO2FBQzdDOzs7O1lBTGlCLFdBQVc7OztxQkFVMUIsS0FBSztzQkFFTCxLQUFLO3dCQUVMLE1BQU07Ozs7SUFQUCx3Q0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFFbkIsc0NBQXdCOztJQUV4Qix1Q0FBMEI7O0lBRTFCLHlDQUE4Qzs7Ozs7SUFFbEMsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDYXJkQ29tcG9uZW50IHtcbiAgZWRpdE1vZGU6IGJvb2xlYW47XG4gIGlzRGVmYXVsdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSB1c2VySWQ6IHN0cmluZztcblxuICBASW5wdXQoKSBhZGRyZXNzOiBBZGRyZXNzO1xuXG4gIEBPdXRwdXQoKSBlZGl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBvcGVuRWRpdEZvcm1FdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRFdmVudC5lbWl0KCk7XG4gIH1cblxuICBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgfVxuXG4gIHNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5zZXRBZGRyZXNzQXNEZWZhdWx0KHRoaXMudXNlcklkLCBhZGRyZXNzSWQpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlVXNlckFkZHJlc3ModGhpcy51c2VySWQsIGFkZHJlc3NJZCk7XG4gICAgfVxuICB9XG59XG4iXX0=