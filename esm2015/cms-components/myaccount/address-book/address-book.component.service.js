/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserAddressService } from '@spartacus/core';
export class AddressBookComponentService {
    /**
     * @param {?} userAddressService
     */
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
    }
    /**
     * @return {?}
     */
    getAddresses() {
        return this.userAddressService.getAddresses();
    }
    /**
     * @return {?}
     */
    getAddressesStateLoading() {
        return this.userAddressService.getAddressesLoading();
    }
    /**
     * @return {?}
     */
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addUserAddress(address) {
        this.userAddressService.addUserAddress(address);
    }
    /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
    }
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userAddressService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFXLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJOUQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7Ozs7SUFFOUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUhPLGtCQUFrQjs7Ozs7OztJQUt0Qix5REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICB9XG59XG4iXX0=