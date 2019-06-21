/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AddressBookComponentService } from './address-book.component.service';
export class AddressBookComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    }
    /**
     * @return {?}
     */
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    }
    /**
     * @return {?}
     */
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    }
    /**
     * @return {?}
     */
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
}
AddressBookComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-book',
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AddressBookComponent.ctorParameters = () => [
    { type: AddressBookComponentService }
];
if (false) {
    /** @type {?} */
    AddressBookComponent.prototype.addresses$;
    /** @type {?} */
    AddressBookComponent.prototype.addressesStateLoading$;
    /** @type {?} */
    AddressBookComponent.prototype.currentAddress;
    /** @type {?} */
    AddressBookComponent.prototype.showAddAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.showEditAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU0vRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBUS9CLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBSHZELHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7SUFFOEIsQ0FBQzs7OztJQUUzRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFnQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG8wRUFBNEM7YUFDN0M7Ozs7WUFMUSwyQkFBMkI7Ozs7SUFPbEMsMENBQWtDOztJQUNsQyxzREFBNEM7O0lBQzVDLDhDQUF3Qjs7SUFFeEIsa0RBQTJCOztJQUMzQixtREFBNEI7O0lBRWhCLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1ib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBhZGRyZXNzZXNTdGF0ZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjdXJyZW50QWRkcmVzczogQWRkcmVzcztcblxuICBzaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzZXMkID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuYWRkcmVzc2VzU3RhdGVMb2FkaW5nJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTtcbiAgICB0aGlzLnNlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkQWRkcmVzc0J1dHRvbkhhbmRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IHRydWU7XG4gIH1cblxuICBlZGl0QWRkcmVzc0J1dHRvbkhhbmRsZShhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEFkZHJlc3MgPSBhZGRyZXNzO1xuICB9XG5cbiAgYWRkQWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkVXNlckFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIH1cblxuICBlZGl0QWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVVzZXJBZGRyZXNzKHRoaXMuY3VycmVudEFkZHJlc3NbJ2lkJ10sIGFkZHJlc3MpO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==