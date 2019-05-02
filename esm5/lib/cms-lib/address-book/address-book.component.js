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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRTtJQWFFLDhCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUh2RCx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBRThCLENBQUM7Ozs7SUFFM0QsdUNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLENBQUMsT0FBTzthQUNULFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQSxFQUFFO1lBQ1gsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQscURBQXNCOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxzREFBdUI7Ozs7SUFBdkIsVUFBd0IsT0FBZ0I7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDNUIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN6QixPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixtMkVBQTRDO2lCQUM3Qzs7OztnQkFMUSwyQkFBMkI7O0lBOERwQywyQkFBQztDQUFBLEFBNURELElBNERDO1NBeERZLG9CQUFvQjs7O0lBQy9CLDBDQUFrQzs7SUFDbEMsc0RBQTRDOztJQUM1Qyw4Q0FBd0I7O0lBQ3hCLHNDQUFlOztJQUVmLGtEQUEyQjs7SUFDM0IsbURBQTRCOztJQUVoQix1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWJvb2snLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIGFkZHJlc3Nlc1N0YXRlTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGN1cnJlbnRBZGRyZXNzOiBBZGRyZXNzO1xuICB1c2VySWQ6IHN0cmluZztcblxuICBzaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzZXMkID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuYWRkcmVzc2VzU3RhdGVMb2FkaW5nJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTtcblxuICAgIHRoaXMuc2VydmljZVxuICAgICAgLmdldFVzZXJJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShpZCA9PiB7XG4gICAgICAgIHRoaXMudXNlcklkID0gaWQ7XG4gICAgICAgIHRoaXMuc2VydmljZS5sb2FkQWRkcmVzc2VzKGlkKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkQWRkcmVzc0J1dHRvbkhhbmRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IHRydWU7XG4gIH1cblxuICBlZGl0QWRkcmVzc0J1dHRvbkhhbmRsZShhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEFkZHJlc3MgPSBhZGRyZXNzO1xuICB9XG5cbiAgYWRkQWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkVXNlckFkZHJlc3ModGhpcy51c2VySWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgYWRkQWRkcmVzc0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NTdWJtaXQoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jdXJyZW50QWRkcmVzc1snaWQnXSxcbiAgICAgIGFkZHJlc3NcbiAgICApO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==