import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, debounceTime } from 'rxjs/operators';
import { Address, CheckoutDeliveryService, UserAddressService, UserPaymentService, PaymentDetails, DeliveryMode, CheckoutPaymentService, StateUtils, } from '@spartacus/core';
import { CheckoutConfigService } from './checkout-config.service';
import { CheckoutDetailsService } from './checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./checkout-details.service";
import * as i3 from "./checkout-config.service";
var ExpressCheckoutService = /** @class */ (function () {
    function ExpressCheckoutService(userAddressService, userPaymentService, checkoutDeliveryService, checkoutPaymentService, checkoutDetailsService, checkoutConfigService) {
        this.userAddressService = userAddressService;
        this.userPaymentService = userPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.setShippingAddress();
        this.setDeliveryMode();
        this.setPaymentMethod();
    }
    ExpressCheckoutService.prototype.setShippingAddress = function () {
        var _this = this;
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap(function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            if (!addressesLoadedSuccess) {
                _this.userAddressService.loadAddresses();
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            return addressesLoadedSuccess;
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), addresses = _b[0], setDeliveryAddressProcess = _b[2];
            var defaultAddress = addresses.find(function (address) { return address.defaultAddress; }) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    _this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter(function (setDeliveryAddressProcessState) {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                }), switchMap(function (setDeliveryAddressProcessState) {
                    if (setDeliveryAddressProcessState.success) {
                        return _this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                }), map(function (data) { return Boolean(data && Object.keys(data).length); }));
            }
            return of(false);
        }));
    };
    ExpressCheckoutService.prototype.setPaymentMethod = function () {
        var _this = this;
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap(function (_a) {
            var _b = __read(_a, 2), paymentMethodsLoadedSuccess = _b[1];
            if (!paymentMethodsLoadedSuccess) {
                _this.userPaymentService.loadPaymentMethods();
            }
        }), filter(function (_a) {
            var _b = __read(_a, 2), success = _b[1];
            return success;
        }), switchMap(function (_a) {
            var _b = __read(_a, 3), payments = _b[0], setPaymentDetailsProcess = _b[2];
            var defaultPayment = payments.find(function (address) { return address.defaultPayment; }) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    _this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter(function (setPaymentDetailsProcessState) {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                }), switchMap(function (setPaymentDetailsProcessState) {
                    if (setPaymentDetailsProcessState.success) {
                        return _this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                }), map(function (data) { return Boolean(data && Object.keys(data).length); }));
            }
            return of(false);
        }));
    };
    ExpressCheckoutService.prototype.setDeliveryMode = function () {
        var _this = this;
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap(function (_a) {
            var _b = __read(_a, 4), addressSet = _b[0], supportedDeliveryModes = _b[1], setDeliveryModeStatusFlag = _b[2], loadSupportedDeliveryModeStatus = _b[3];
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter(function (_a) {
                    var _b = __read(_a, 3), supportedDeliveryModeStatus = _b[2];
                    return supportedDeliveryModeStatus.success;
                }), switchMap(function (_a) {
                    var _b = __read(_a, 3), deliveryModes = _b[0], setDeliveryModeStatus = _b[1];
                    if (Boolean(deliveryModes.length)) {
                        var preferredDeliveryMode = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap(function (_a) {
                            var _b = __read(_a, 2), deliveryMode = _b[0], deliveryModeLoadingStatus = _b[1];
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                _this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        }), filter(function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        }), switchMap(function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            if (deliveryModeLoadingStatus.success) {
                                return _this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        }), map(function (data) { return Boolean(data); }));
                    }
                    return of(false);
                }));
            }
            else {
                return of(false);
            }
        }));
    };
    ExpressCheckoutService.prototype.resetCheckoutProcesses = function () {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    };
    ExpressCheckoutService.prototype.trySetDefaultCheckoutDetails = function () {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map(function (_a) {
            var _b = __read(_a, 2), deliveryModeSet = _b[0], paymentMethodSet = _b[1];
            return Boolean(deliveryModeSet && paymentMethodSet);
        }));
    };
    ExpressCheckoutService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: UserPaymentService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService }
    ]; };
    ExpressCheckoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(i0.ɵɵinject(i1.UserAddressService), i0.ɵɵinject(i1.UserPaymentService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i2.CheckoutDetailsService), i0.ɵɵinject(i3.CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
    ExpressCheckoutService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ExpressCheckoutService);
    return ExpressCheckoutService;
}());
export { ExpressCheckoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsWUFBWSxFQUNaLHNCQUFzQixFQUN0QixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFLcEU7SUFLRSxnQ0FDWSxrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsc0JBQThDLEVBQzlDLHFCQUE0QztRQUw1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUV0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztR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RixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLHVEQUFzQixHQUFoQztRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyx1QkFBdUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFTSw2REFBNEIsR0FBbkM7UUFDRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEUsR0FBRyxDQUFDLFVBQUMsRUFBbUM7Z0JBQW5DLGtCQUFtQyxFQUFsQyx1QkFBZSxFQUFFLHdCQUFnQjtZQUNyQyxPQUFBLE9BQU8sQ0FBQyxlQUFlLElBQUksZ0JBQWdCLENBQUM7UUFBNUMsQ0FBNEMsQ0FDN0MsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBclIrQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDYix1QkFBdUI7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsc0JBQXNCO2dCQUN2QixxQkFBcUI7OztJQVg3QyxzQkFBc0I7UUFIbEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHNCQUFzQixDQTRSbEM7aUNBaFREO0NBZ1RDLEFBNVJELElBNFJDO1NBNVJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxuICBQYXltZW50RGV0YWlscyxcbiAgRGVsaXZlcnlNb2RlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBTdGF0ZVV0aWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB7XG4gIHByaXZhdGUgc2hpcHBpbmdBZGRyZXNzU2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBkZWxpdmVyeU1vZGVTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHBheW1lbnRNZXRob2RTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZXRTaGlwcGluZ0FkZHJlc3MoKTtcbiAgICB0aGlzLnNldERlbGl2ZXJ5TW9kZSgpO1xuICAgIHRoaXMuc2V0UGF5bWVudE1ldGhvZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNoaXBwaW5nQWRkcmVzcygpIHtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpLFxuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCksXG4gICAgXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHRhcChcbiAgICAgICAgKFssIGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NdOiBbXG4gICAgICAgICAgQWRkcmVzc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgaWYgKCFhZGRyZXNzZXNMb2FkZWRTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoWywgYWRkcmVzc2VzTG9hZGVkU3VjY2Vzc106IFtcbiAgICAgICAgICBBZGRyZXNzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoXG4gICAgICAgIChbYWRkcmVzc2VzLCAsIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NdOiBbXG4gICAgICAgICAgQWRkcmVzc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdEFkZHJlc3MgPVxuICAgICAgICAgICAgYWRkcmVzc2VzLmZpbmQoKGFkZHJlc3MpID0+IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MpIHx8IGFkZHJlc3Nlc1swXTtcbiAgICAgICAgICBpZiAoZGVmYXVsdEFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVmYXVsdEFkZHJlc3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3Muc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzLmxvYWRpbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGRlZmF1bHRBZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1N0YXRlOiBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAoc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUuZXJyb3IpICYmXG4gICAgICAgICAgICAgICAgICAgICFzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGU6IFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1hcCgoZGF0YSkgPT4gQm9vbGVhbihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRQYXltZW50TWV0aG9kKCkge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZFNldCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCksXG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKSxcbiAgICBdKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgdGFwKFxuICAgICAgICAoWywgcGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzXTogW1xuICAgICAgICAgIFBheW1lbnREZXRhaWxzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBpZiAoIXBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoWywgc3VjY2Vzc106IFtcbiAgICAgICAgICBQYXltZW50RGV0YWlsc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiBzdWNjZXNzXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAoW3BheW1lbnRzLCAsIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc106IFtcbiAgICAgICAgICBQYXltZW50RGV0YWlsc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBheW1lbnQgPVxuICAgICAgICAgICAgcGF5bWVudHMuZmluZCgoYWRkcmVzcykgPT4gYWRkcmVzcy5kZWZhdWx0UGF5bWVudCkgfHwgcGF5bWVudHNbMF07XG4gICAgICAgICAgaWYgKGRlZmF1bHRQYXltZW50ICYmIE9iamVjdC5rZXlzKGRlZmF1bHRQYXltZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3Muc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzcy5lcnJvciB8fFxuICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzcy5sb2FkaW5nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMoZGVmYXVsdFBheW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKHNldFBheW1lbnREZXRhaWxzUHJvY2VzcykucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlOiBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLmVycm9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAhc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZTogU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG1hcCgoZGF0YSkgPT4gQm9vbGVhbihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREZWxpdmVyeU1vZGUoKSB7XG4gICAgdGhpcy5kZWxpdmVyeU1vZGVTZXQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQsXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICBzd2l0Y2hNYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc1NldCxcbiAgICAgICAgICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzLFxuICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1c0ZsYWcsXG4gICAgICAgICAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgXTogW1xuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPixcbiAgICAgICAgICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBpZiAoYWRkcmVzc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtcbiAgICAgICAgICAgICAgc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyxcbiAgICAgICAgICAgICAgc2V0RGVsaXZlcnlNb2RlU3RhdHVzRmxhZyxcbiAgICAgICAgICAgICAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICAgICAoWywgLCBzdXBwb3J0ZWREZWxpdmVyeU1vZGVTdGF0dXNdOiBbXG4gICAgICAgICAgICAgICAgICBEZWxpdmVyeU1vZGVbXSxcbiAgICAgICAgICAgICAgICAgIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD4sXG4gICAgICAgICAgICAgICAgICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgXSkgPT4gc3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzLnN1Y2Nlc3NcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAgICAgICAgIChbZGVsaXZlcnlNb2Rlcywgc2V0RGVsaXZlcnlNb2RlU3RhdHVzLCAsXTogW1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgICAgICAgICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPHZvaWQ+LFxuICAgICAgICAgICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKGRlbGl2ZXJ5TW9kZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmZXJyZWREZWxpdmVyeU1vZGUgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2Rlc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZERlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeU1vZGVTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgdGFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKFtkZWxpdmVyeU1vZGUsIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXNdOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChbLCBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzLmVycm9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChbLCBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcCgoZGF0YSkgPT4gQm9vbGVhbihkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzZXRDaGVja291dFByb2Nlc3NlcygpIHtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpO1xuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5yZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcygpO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UucmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk7XG4gIH1cblxuICBwdWJsaWMgdHJ5U2V0RGVmYXVsdENoZWNrb3V0RGV0YWlscygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICB0aGlzLnJlc2V0Q2hlY2tvdXRQcm9jZXNzZXMoKTtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5kZWxpdmVyeU1vZGVTZXQkLCB0aGlzLnBheW1lbnRNZXRob2RTZXQkXSkucGlwZShcbiAgICAgIG1hcCgoW2RlbGl2ZXJ5TW9kZVNldCwgcGF5bWVudE1ldGhvZFNldF0pID0+XG4gICAgICAgIEJvb2xlYW4oZGVsaXZlcnlNb2RlU2V0ICYmIHBheW1lbnRNZXRob2RTZXQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19