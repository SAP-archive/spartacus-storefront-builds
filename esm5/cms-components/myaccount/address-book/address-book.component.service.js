/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
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
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressBookComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
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
    /**
     * @type {?}
     * @protected
     */
    AddressBookComponentService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFHekI7SUFnQkUscUNBQ1Usa0JBQXNDLEVBQ3BDLHVCQUFpRCxFQUNuRCxvQkFBMkM7UUFGM0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBQ25ELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7SUFDbEQsQ0FBQzs7OztJQUVKLGtEQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCw4REFBd0I7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELG1EQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELG9EQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELHVEQUFpQjs7Ozs7SUFBakIsVUFBa0IsU0FBaUIsRUFBRSxPQUFnQjtRQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlEOztXQUVHO1FBQ0gsSUFDRSxJQUFJLENBQUMsb0JBQW9CO1lBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7WUFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM3RDtJQUNILENBQUM7O2dCQWxERixVQUFVOzs7O2dCQUpULGtCQUFrQjtnQkFGbEIsdUJBQXVCO2dCQUN2QixvQkFBb0I7O0lBd0R0QixrQ0FBQztDQUFBLEFBbkRELElBbURDO1NBbERZLDJCQUEyQjs7Ozs7O0lBZ0JwQyx5REFBOEM7Ozs7O0lBQzlDLDhEQUEyRDs7Ozs7SUFDM0QsMkRBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMlxuICAgKiAgVXNlIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgKiAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAqICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpIGluc3RlYWRcbiAgICpcbiAgICogIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U/OiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXMoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc1N0YXRlTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGluZygpO1xuICB9XG5cbiAgbG9hZEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cblxuICBhZGRVc2VyQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuYWRkVXNlckFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICB1cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLnVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZCwgYWRkcmVzcyk7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UgJiZcbiAgICAgIHRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4yJykgJiZcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICApIHtcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpO1xuICAgIH1cbiAgfVxufVxuIl19