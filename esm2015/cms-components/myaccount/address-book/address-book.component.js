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
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFNL0UsTUFBTSxPQUFPLG9CQUFvQjs7OztJQVMvQixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUh2RCx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBRThCLENBQUM7Ozs7SUFFM0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRXRFLElBQUksQ0FBQyxPQUFPO2FBQ1QsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFnQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQzVCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFDekIsT0FBTyxDQUNSLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG0yRUFBNEM7YUFDN0M7Ozs7WUFMUSwyQkFBMkI7Ozs7SUFPbEMsMENBQWtDOztJQUNsQyxzREFBNEM7O0lBQzVDLDhDQUF3Qjs7SUFDeEIsc0NBQWU7O0lBRWYsa0RBQTJCOztJQUMzQixtREFBNEI7O0lBRWhCLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtYm9vaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgYWRkcmVzc2VzU3RhdGVMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY3VycmVudEFkZHJlc3M6IEFkZHJlc3M7XG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIHNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICBzaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NlcyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgdGhpcy5hZGRyZXNzZXNTdGF0ZUxvYWRpbmckID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpO1xuXG4gICAgdGhpcy5zZXJ2aWNlXG4gICAgICAuZ2V0VXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKGlkID0+IHtcbiAgICAgICAgdGhpcy51c2VySWQgPSBpZDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmxvYWRBZGRyZXNzZXMoaWQpO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGRBZGRyZXNzQnV0dG9uSGFuZGxlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQnV0dG9uSGFuZGxlKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50QWRkcmVzcyA9IGFkZHJlc3M7XG4gIH1cblxuICBhZGRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZS5hZGRVc2VyQWRkcmVzcyh0aGlzLnVzZXJJZCwgYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIH1cblxuICBlZGl0QWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVVzZXJBZGRyZXNzKFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmN1cnJlbnRBZGRyZXNzWydpZCddLFxuICAgICAgYWRkcmVzc1xuICAgICk7XG4gIH1cblxuICBlZGl0QWRkcmVzc0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxufVxuIl19