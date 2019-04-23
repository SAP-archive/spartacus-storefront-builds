/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
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
        this.service
            .getUserId()
            .pipe(take(1))
            .subscribe(id => {
            this.userId = id;
            this.service.loadAddresses(id);
        });
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
        this.service.addUserAddress(this.userId, address);
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
        this.service.updateUserAddress(this.userId, this.currentAddress['id'], address);
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
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
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
    AddressBookComponent.prototype.userId;
    /** @type {?} */
    AddressBookComponent.prototype.showAddAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.showEditAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU0vRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBUy9CLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBSHZELHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7SUFFOEIsQ0FBQzs7OztJQUUzRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFdEUsSUFBSSxDQUFDLE9BQU87YUFDVCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDNUIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN6QixPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaXlFQUE0QzthQUM3Qzs7OztZQUxRLDJCQUEyQjs7OztJQU9sQywwQ0FBa0M7O0lBQ2xDLHNEQUE0Qzs7SUFDNUMsOENBQXdCOztJQUN4QixzQ0FBZTs7SUFFZixrREFBMkI7O0lBQzNCLG1EQUE0Qjs7SUFFaEIsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1ib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBhZGRyZXNzZXNTdGF0ZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjdXJyZW50QWRkcmVzczogQWRkcmVzcztcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIHNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc2VzJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLmFkZHJlc3Nlc1N0YXRlTG9hZGluZyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk7XG5cbiAgICB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRVc2VySWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoaWQgPT4ge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnNlcnZpY2UubG9hZEFkZHJlc3NlcyhpZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NCdXR0b25IYW5kbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NCdXR0b25IYW5kbGUoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRBZGRyZXNzID0gYWRkcmVzcztcbiAgfVxuXG4gIGFkZEFkZHJlc3NTdWJtaXQoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKHRoaXMudXNlcklkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY3VycmVudEFkZHJlc3NbJ2lkJ10sXG4gICAgICBhZGRyZXNzXG4gICAgKTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICB9XG59XG4iXX0=