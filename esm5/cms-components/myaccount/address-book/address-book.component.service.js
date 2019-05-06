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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxXQUFXLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFFN0Q7SUFFRSxxQ0FBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7O0lBRWhELGtEQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsOERBQXdCOzs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsK0NBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFhO2dCQUFYLFlBQUc7WUFBYSxPQUFBLEdBQUc7UUFBSCxDQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsbURBQWE7Ozs7SUFBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsb0RBQWM7Ozs7O0lBQWQsVUFBZSxNQUFjLEVBQUUsT0FBZ0I7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7Ozs7SUFFRCx1REFBaUI7Ozs7OztJQUFqQixVQUFrQixNQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0JBMUJGLFVBQVU7Ozs7Z0JBRkYsV0FBVzs7SUE2QnBCLGtDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksMkJBQTJCOzs7Ozs7SUFDMUIsa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSwgQWRkcmVzcywgVXNlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkaW5nKCk7XG4gIH1cblxuICBnZXRVc2VySWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXQoKS5waXBlKG1hcCgoeyB1aWQgfTogVXNlcikgPT4gdWlkKSk7XG4gIH1cblxuICBsb2FkQWRkcmVzc2VzKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKHVzZXJJZCk7XG4gIH1cblxuICBhZGRVc2VyQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlclNlcnZpY2UuYWRkVXNlckFkZHJlc3ModXNlcklkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlckFkZHJlc3ModXNlcklkLCBhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICB9XG59XG4iXX0=