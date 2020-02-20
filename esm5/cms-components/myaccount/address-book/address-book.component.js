import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AddressBookComponentService } from './address-book.component.service';
var AddressBookComponent = /** @class */ (function () {
    function AddressBookComponent(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    AddressBookComponent.prototype.ngOnInit = function () {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    };
    AddressBookComponent.prototype.addAddressButtonHandle = function () {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    };
    AddressBookComponent.prototype.editAddressButtonHandle = function (address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    };
    AddressBookComponent.prototype.addAddressSubmit = function (address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    };
    AddressBookComponent.prototype.addAddressCancel = function () {
        this.showAddAddressForm = false;
    };
    AddressBookComponent.prototype.editAddressSubmit = function (address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    };
    AddressBookComponent.prototype.editAddressCancel = function () {
        this.showEditAddressForm = false;
    };
    AddressBookComponent.ctorParameters = function () { return [
        { type: AddressBookComponentService }
    ]; };
    AddressBookComponent = __decorate([
        Component({
            selector: 'cx-address-book',
            template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
        })
    ], AddressBookComponent);
    return AddressBookComponent;
}());
export { AddressBookComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU0vRTtJQVFFLDhCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUh2RCx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBRThCLENBQUM7SUFFM0QsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHFEQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0RBQXVCLEdBQXZCLFVBQXdCLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELCtDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGdEQUFpQixHQUFqQixVQUFrQixPQUFnQjtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsZ0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztnQkFuQzJCLDJCQUEyQjs7SUFSNUMsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsazBFQUE0QztTQUM3QyxDQUFDO09BQ1csb0JBQW9CLENBNENoQztJQUFELDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRyZXNzLWJvb2snLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRyZXNzZXMkOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gIGFkZHJlc3Nlc1N0YXRlTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGN1cnJlbnRBZGRyZXNzOiBBZGRyZXNzO1xuXG4gIHNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICBzaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZHJlc3NlcyQgPSB0aGlzLnNlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gICAgdGhpcy5hZGRyZXNzZXNTdGF0ZUxvYWRpbmckID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpO1xuICAgIHRoaXMuc2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cblxuICBhZGRBZGRyZXNzQnV0dG9uSGFuZGxlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzQnV0dG9uSGFuZGxlKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50QWRkcmVzcyA9IGFkZHJlc3M7XG4gIH1cblxuICBhZGRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZS5hZGRVc2VyQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIGFkZEFkZHJlc3NDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxuXG4gIGVkaXRBZGRyZXNzU3VibWl0KGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3ModGhpcy5jdXJyZW50QWRkcmVzc1snaWQnXSwgYWRkcmVzcyk7XG4gIH1cblxuICBlZGl0QWRkcmVzc0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgfVxufVxuIl19