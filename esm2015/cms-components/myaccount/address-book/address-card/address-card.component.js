/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserAddressService } from '@spartacus/core';
export class AddressCardComponent {
    /**
     * @param {?} userAddressService
     */
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
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
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
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
    { type: UserAddressService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFXLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNOUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVEvQixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZoRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVlLENBQUM7Ozs7SUFFOUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUFpQjtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsU0FBaUI7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMnFFQUE0QzthQUM3Qzs7OztZQUxpQixrQkFBa0I7OztzQkFVakMsS0FBSzt3QkFFTCxNQUFNOzs7O0lBTFAsd0NBQWtCOztJQUNsQix5Q0FBbUI7O0lBRW5CLHVDQUEwQjs7SUFFMUIseUNBQThDOzs7OztJQUVsQyxrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDYXJkQ29tcG9uZW50IHtcbiAgZWRpdE1vZGU6IGJvb2xlYW47XG4gIGlzRGVmYXVsdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBhZGRyZXNzOiBBZGRyZXNzO1xuXG4gIEBPdXRwdXQoKSBlZGl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlKSB7fVxuXG4gIG9wZW5FZGl0Rm9ybUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdEV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gIH1cblxuICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2Uuc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQpO1xuICB9XG5cbiAgZGVsZXRlQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZCk7XG4gIH1cbn1cbiJdfQ==