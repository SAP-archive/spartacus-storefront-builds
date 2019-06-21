/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserAddressService } from '@spartacus/core';
var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userAddressService) {
        this.userAddressService = userAddressService;
    }
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddresses = /**
     * @return {?}
     */
    function () {
        return this.userAddressService.getAddresses();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddressesStateLoading = /**
     * @return {?}
     */
    function () {
        return this.userAddressService.getAddressesLoading();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.loadAddresses = /**
     * @return {?}
     */
    function () {
        this.userAddressService.loadAddresses();
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.addUserAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.userAddressService.addUserAddress(address);
    };
    /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.updateUserAddress = /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
    };
    AddressBookComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserAddressService }
    ]; };
    return AddressBookComponentService;
}());
export { AddressBookComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userAddressService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFXLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUQ7SUFFRSxxQ0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBRyxDQUFDOzs7O0lBRTlELGtEQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCw4REFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELG9EQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELHVEQUFpQjs7Ozs7SUFBakIsVUFBa0IsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2dCQXRCRixVQUFVOzs7O2dCQUhPLGtCQUFrQjs7SUEwQnBDLGtDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksMkJBQTJCOzs7Ozs7SUFDMUIseURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UpIHt9XG5cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIGFkZFVzZXJBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5hZGRVc2VyQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UudXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgfVxufVxuIl19