/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserService } from '@spartacus/core';
var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddresses = /**
     * @return {?}
     */
    function () {
        return this.userService.getAddresses();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddressesStateLoading = /**
     * @return {?}
     */
    function () {
        return this.userService.getAddressesLoading();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.loadAddresses = /**
     * @return {?}
     */
    function () {
        this.userService.loadAddresses();
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
        this.userService.addUserAddress(address);
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
        this.userService.updateUserAddress(addressId, address);
    };
    AddressBookComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserService }
    ]; };
    return AddressBookComponentService;
}());
export { AddressBookComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3ZEO0lBRUUscUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVoRCxrREFBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELDhEQUF3Qjs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsdURBQWlCOzs7OztJQUFqQixVQUFrQixTQUFpQixFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQXRCRixVQUFVOzs7O2dCQUhPLFdBQVc7O0lBMEI3QixrQ0FBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLDJCQUEyQjs7Ozs7O0lBQzFCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkZHJlc3MsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cblxuICBhZGRVc2VyQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5hZGRVc2VyQWRkcmVzcyhhZGRyZXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICB9XG59XG4iXX0=