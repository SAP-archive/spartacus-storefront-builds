import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Address, CheckoutDeliveryService, UserAddressService, } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userAddressService, checkoutDeliveryService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
    }
    AddressBookComponentService.prototype.getAddresses = function () {
        return this.userAddressService.getAddresses();
    };
    AddressBookComponentService.prototype.getAddressesStateLoading = function () {
        return this.userAddressService.getAddressesLoading();
    };
    AddressBookComponentService.prototype.loadAddresses = function () {
        this.userAddressService.loadAddresses();
    };
    AddressBookComponentService.prototype.addUserAddress = function (address) {
        this.userAddressService.addUserAddress(address);
    };
    AddressBookComponentService.prototype.updateUserAddress = function (addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    };
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService }
    ]; };
    AddressBookComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddressBookComponentService_Factory() { return new AddressBookComponentService(i0.ɵɵinject(i1.UserAddressService), i0.ɵɵinject(i1.CheckoutDeliveryService)); }, token: AddressBookComponentService, providedIn: "root" });
    AddressBookComponentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AddressBookComponentService);
    return AddressBookComponentService;
}());
export { AddressBookComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7OztBQU16QjtJQUNFLHFDQUNZLGtCQUFzQyxFQUN0Qyx1QkFBZ0Q7UUFEaEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3pELENBQUM7SUFFSixrREFBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDhEQUF3QixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELG1EQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG9EQUFjLEdBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1REFBaUIsR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQzlELENBQUM7O2dCQXZCK0Isa0JBQWtCO2dCQUNiLHVCQUF1Qjs7O0lBSGpELDJCQUEyQjtRQUh2QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMkJBQTJCLENBMEJ2QztzQ0FyQ0Q7Q0FxQ0MsQUExQkQsSUEwQkM7U0ExQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICB9XG59XG4iXX0=