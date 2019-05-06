/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { AddressBookComponentService } from './address-book.component.service';
var AddressBookComponent = /** @class */ (function () {
    function AddressBookComponent(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service
            .getUserId()
            .pipe(take(1))
            .subscribe(function (id) {
            _this.userId = id;
            _this.service.loadAddresses(id);
        });
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressButtonHandle = /**
     * @return {?}
     */
    function () {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressButtonHandle = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressSubmit = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(this.userId, address);
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressCancel = /**
     * @return {?}
     */
    function () {
        this.showAddAddressForm = false;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressSubmit = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.userId, this.currentAddress['id'], address);
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressCancel = /**
     * @return {?}
     */
    function () {
        this.showEditAddressForm = false;
    };
    AddressBookComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-book',
                    template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    AddressBookComponent.ctorParameters = function () { return [
        { type: AddressBookComponentService }
    ]; };
    return AddressBookComponent;
}());
export { AddressBookComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0U7SUFhRSw4QkFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFIdkQsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztJQUU4QixDQUFDOzs7O0lBRTNELHVDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFdEUsSUFBSSxDQUFDLE9BQU87YUFDVCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLFVBQUEsRUFBRTtZQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHFEQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsc0RBQXVCOzs7O0lBQXZCLFVBQXdCLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELCtDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixPQUFnQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQzVCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFDekIsT0FBTyxDQUNSLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbTJFQUE0QztpQkFDN0M7Ozs7Z0JBTFEsMkJBQTJCOztJQThEcEMsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXhEWSxvQkFBb0I7OztJQUMvQiwwQ0FBa0M7O0lBQ2xDLHNEQUE0Qzs7SUFDNUMsOENBQXdCOztJQUN4QixzQ0FBZTs7SUFFZixrREFBMkI7O0lBQzNCLG1EQUE0Qjs7SUFFaEIsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkcmVzcy1ib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBhZGRyZXNzZXNTdGF0ZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjdXJyZW50QWRkcmVzczogQWRkcmVzcztcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIHNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkcmVzc2VzJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLmFkZHJlc3Nlc1N0YXRlTG9hZGluZyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk7XG5cbiAgICB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRVc2VySWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoaWQgPT4ge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnNlcnZpY2UubG9hZEFkZHJlc3NlcyhpZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NCdXR0b25IYW5kbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NCdXR0b25IYW5kbGUoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRBZGRyZXNzID0gYWRkcmVzcztcbiAgfVxuXG4gIGFkZEFkZHJlc3NTdWJtaXQoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKHRoaXMudXNlcklkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY3VycmVudEFkZHJlc3NbJ2lkJ10sXG4gICAgICBhZGRyZXNzXG4gICAgKTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICB9XG59XG4iXX0=