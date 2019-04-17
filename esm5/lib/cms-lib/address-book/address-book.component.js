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
                    template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.action.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of (addresses$ | async)\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [userId]=\"userId\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.label.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'address.action.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'address.action.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.label.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'address.action.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'address.action.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-address-deck{padding:var(--cx-padding,1.25rem 0 0 0)}.cx-address-deck-spinner{padding:var(--cx-padding,5rem 0 5rem 0)}.cx-address-card{padding-bottom:var(--cx-padding,30px)}.cx-form{padding-top:var(--cx-padding,30px)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRTtJQWNFLDhCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUh2RCx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBRThCLENBQUM7Ozs7SUFFM0QsdUNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUV0RSxJQUFJLENBQUMsT0FBTzthQUNULFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsVUFBQSxFQUFFO1lBQ1gsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQscURBQXNCOzs7SUFBdEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxzREFBdUI7Ozs7SUFBdkIsVUFBd0IsT0FBZ0I7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDNUIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN6QixPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnMEVBQTRDOztpQkFFN0M7Ozs7Z0JBTlEsMkJBQTJCOztJQStEcEMsMkJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQXhEWSxvQkFBb0I7OztJQUMvQiwwQ0FBa0M7O0lBQ2xDLHNEQUE0Qzs7SUFDNUMsOENBQXdCOztJQUN4QixzQ0FBZTs7SUFFZixrREFBMkI7O0lBQzNCLG1EQUE0Qjs7SUFFaEIsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWJvb2snLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxBZGRyZXNzW10+O1xuICBhZGRyZXNzZXNTdGF0ZUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjdXJyZW50QWRkcmVzczogQWRkcmVzcztcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIHNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkcmVzc2VzJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgICB0aGlzLmFkZHJlc3Nlc1N0YXRlTG9hZGluZyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk7XG5cbiAgICB0aGlzLnNlcnZpY2VcbiAgICAgIC5nZXRVc2VySWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoaWQgPT4ge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IGlkO1xuICAgICAgICB0aGlzLnNlcnZpY2UubG9hZEFkZHJlc3NlcyhpZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NCdXR0b25IYW5kbGUoKSB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgZWRpdEFkZHJlc3NCdXR0b25IYW5kbGUoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRBZGRyZXNzID0gYWRkcmVzcztcbiAgfVxuXG4gIGFkZEFkZHJlc3NTdWJtaXQoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKHRoaXMudXNlcklkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NDYW5jZWwoKSB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY3VycmVudEFkZHJlc3NbJ2lkJ10sXG4gICAgICBhZGRyZXNzXG4gICAgKTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQ2FuY2VsKCkge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICB9XG59XG4iXX0=