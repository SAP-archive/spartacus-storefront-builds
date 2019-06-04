/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserService } from '@spartacus/core';
export class AddressBookComponentService {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    getAddresses() {
        return this.userService.getAddresses();
    }
    /**
     * @return {?}
     */
    getAddressesStateLoading() {
        return this.userService.getAddressesLoading();
    }
    /**
     * @return {?}
     */
    loadAddresses() {
        this.userService.loadAddresses();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addUserAddress(address) {
        this.userService.addUserAddress(address);
    }
    /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(addressId, address) {
        this.userService.updateUserAddress(addressId, address);
    }
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXZELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFDdEMsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7O0lBRWhELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUhPLFdBQVc7Ozs7Ozs7SUFLZixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlclNlcnZpY2UuYWRkVXNlckFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICB1cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgfVxufVxuIl19