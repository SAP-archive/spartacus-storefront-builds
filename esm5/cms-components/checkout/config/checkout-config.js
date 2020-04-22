import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export var DeliveryModePreferences;
(function (DeliveryModePreferences) {
    DeliveryModePreferences["FREE"] = "FREE";
    DeliveryModePreferences["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
    DeliveryModePreferences["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
var CheckoutConfig = /** @class */ (function () {
    function CheckoutConfig() {
    }
    CheckoutConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: CheckoutConfig, providedIn: "root" });
    CheckoutConfig = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: Config,
        })
    ], CheckoutConfig);
    return CheckoutConfig;
}());
export { CheckoutConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29uZmlnL2NoZWNrb3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUV6QyxNQUFNLENBQU4sSUFBWSx1QkFJWDtBQUpELFdBQVksdUJBQXVCO0lBQ2pDLHdDQUFhLENBQUE7SUFDYiw4REFBbUMsQ0FBQTtJQUNuQyw0REFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUlsQztBQU1EO0lBQUE7S0FtQkM7O0lBbkJxQixjQUFjO1FBSm5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7T0FDb0IsY0FBYyxDQW1CbkM7eUJBakNEO0NBaUNDLEFBbkJELElBbUJDO1NBbkJxQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgZW51bSBEZWxpdmVyeU1vZGVQcmVmZXJlbmNlcyB7XG4gIEZSRUUgPSAnRlJFRScsXG4gIExFQVNUX0VYUEVOU0lWRSA9ICdMRUFTVF9FWFBFTlNJVkUnLCAvLyBidXQgbm90IGZyZWVcbiAgTU9TVF9FWFBFTlNJVkUgPSAnTU9TVF9FWFBFTlNJVkUnLFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXRDb25maWcge1xuICBjaGVja291dD86IHtcbiAgICAvKipcbiAgICAgKiBTZXQgY2hlY2tvdXQgc3RlcHMgYXMgb3JkZXJlZCBhcnJheSBvZiBwYWdlcy5cbiAgICAgKi9cbiAgICBzdGVwcz86IEFycmF5PENoZWNrb3V0U3RlcD47XG4gICAgLyoqXG4gICAgICogQWxsb3cgZm9yIGV4cHJlc3MgY2hlY2tvdXQgd2hlbiBkZWZhdWx0IHNoaXBwaW5nIG1ldGhvZCBhbmQgcGF5bWVudCBtZXRob2QgYXJlIGF2YWlsYWJsZS5cbiAgICAgKi9cbiAgICBleHByZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGRlbGl2ZXJ5IG1vZGUgZm9yIGkuYS4gZXhwcmVzcyBjaGVja291dC4gU2V0IHByZWZlcmVuY2VzIGluIG9yZGVyIHdpdGggZ2VuZXJhbCBwcmVmZXJlbmNlcyAoZWcuIERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzLkxFQVNUX0VYUEVOU0lWRSkgb3Igc3BlY2lmaWMgZGVsaXZlcnkgY29kZXMuXG4gICAgICovXG4gICAgZGVmYXVsdERlbGl2ZXJ5TW9kZT86IEFycmF5PERlbGl2ZXJ5TW9kZVByZWZlcmVuY2VzIHwgc3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBBbGxvdyBmb3IgZ3Vlc3QgY2hlY2tvdXQuXG4gICAgICovXG4gICAgZ3Vlc3Q/OiBib29sZWFuO1xuICB9O1xufVxuIl19