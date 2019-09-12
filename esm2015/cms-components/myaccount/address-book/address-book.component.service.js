/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutDeliveryService, FeatureConfigService, UserAddressService, } from '@spartacus/core';
export class AddressBookComponentService {
    /**
     * @param {?} userAddressService
     * @param {?=} checkoutDeliveryService
     * @param {?=} featureConfigService
     */
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
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
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFJekIsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBZXRDLFlBQ1Usa0JBQXNDLEVBQ3BDLHVCQUFpRCxFQUNuRCxvQkFBMkM7UUFGM0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNwQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTBCO1FBQ25ELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7SUFDbEQsQ0FBQzs7OztJQUVKLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxTQUFpQixFQUFFLE9BQWdCO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQ7O1dBRUc7UUFDSCxJQUNFLElBQUksQ0FBQyxvQkFBb0I7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLHVCQUF1QixFQUM1QjtZQUNBLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7O1lBbERGLFVBQVU7Ozs7WUFKVCxrQkFBa0I7WUFGbEIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjs7Ozs7OztJQXNCbEIseURBQThDOzs7OztJQUM5Qyw4REFBMkQ7Ozs7O0lBQzNELDJEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWdTZXJ2aWNlOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjJcbiAgICogIFVzZSBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICogIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgKiAgZmVhdHVyZUNvbmZpZ1NlcnZpY2U6IEZlYXR1cmVDb25maWdTZXJ2aWNlKSBpbnN0ZWFkXG4gICAqXG4gICAqICBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlPzogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBnZXRBZGRyZXNzZXMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3Nlc0xvYWRpbmcoKTtcbiAgfVxuXG4gIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcykge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmFkZFVzZXJBZGRyZXNzKGFkZHJlc3MpO1xuICB9XG5cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQsIGFkZHJlc3MpO1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlICYmXG4gICAgICB0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMicpICYmXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==