/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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
    AddressBookComponentService.prototype.getUserId = /**
     * @return {?}
     */
    function () {
        return this.userService.get().pipe(map(function (_a) {
            var uid = _a.uid;
            return uid;
        }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    AddressBookComponentService.prototype.loadAddresses = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        this.userService.loadAddresses(userId);
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.addUserAddress = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        this.userService.addUserAddress(userId, address);
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.updateUserAddress = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        this.userService.updateUserAddress(userId, addressId, address);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RDtJQUVFLHFDQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFaEQsa0RBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCw4REFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCwrQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWE7Z0JBQVgsWUFBRztZQUFhLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxtREFBYTs7OztJQUFiLFVBQWMsTUFBYztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxvREFBYzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxPQUFnQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7OztJQUVELHVEQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLE1BQWMsRUFBRSxTQUFpQixFQUFFLE9BQWdCO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkExQkYsVUFBVTs7OztnQkFGRixXQUFXOztJQTZCcEIsa0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSwyQkFBMkI7Ozs7OztJQUMxQixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBBZGRyZXNzLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzU3RhdGVMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGdldFVzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnBpcGUobWFwKCh7IHVpZCB9OiBVc2VyKSA9PiB1aWQpKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXModXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRBZGRyZXNzZXModXNlcklkKTtcbiAgfVxuXG4gIGFkZFVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5hZGRVc2VyQWRkcmVzcyh1c2VySWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyh1c2VySWQsIGFkZHJlc3NJZCwgYWRkcmVzcyk7XG4gIH1cbn1cbiJdfQ==