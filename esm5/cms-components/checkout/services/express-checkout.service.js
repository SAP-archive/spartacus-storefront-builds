import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, debounceTime } from 'rxjs/operators';
import { Address, CheckoutDeliveryService, UserAddressService, UserPaymentService, PaymentDetails, DeliveryMode, CheckoutPaymentService, LoaderState, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUNMLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsWUFBWSxFQUNaLHNCQUFzQixFQUN0QixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFLcEU7SUFLRSxnQ0FDWSxrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsc0JBQThDLEVBQzlDLHFCQUE0QztRQUw1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUV0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztR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LENBQUMsQ0FDRixDQUNGLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRVMsdURBQXNCLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVNLDZEQUE0QixHQUFuQztRQUNFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLE9BQU8sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN4RSxHQUFHLENBQUMsVUFBQyxFQUFtQztnQkFBbkMsa0JBQW1DLEVBQWxDLHVCQUFlLEVBQUUsd0JBQWdCO1lBQ3JDLE9BQUEsT0FBTyxDQUFDLGVBQWUsSUFBSSxnQkFBZ0IsQ0FBQztRQUE1QyxDQUE0QyxDQUM3QyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkF6UCtCLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNiLHVCQUF1QjtnQkFDeEIsc0JBQXNCO2dCQUN0QixzQkFBc0I7Z0JBQ3ZCLHFCQUFxQjs7O0lBWDdDLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBZ1FsQztpQ0FwUkQ7Q0FvUkMsQUFoUUQsSUFnUUM7U0FoUVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxuICBEZWxpdmVyeU1vZGUsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIExvYWRlclN0YXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB7XG4gIHByaXZhdGUgc2hpcHBpbmdBZGRyZXNzU2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBkZWxpdmVyeU1vZGVTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHBheW1lbnRNZXRob2RTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZXRTaGlwcGluZ0FkZHJlc3MoKTtcbiAgICB0aGlzLnNldERlbGl2ZXJ5TW9kZSgpO1xuICAgIHRoaXMuc2V0UGF5bWVudE1ldGhvZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNoaXBwaW5nQWRkcmVzcygpIHtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpLFxuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCksXG4gICAgXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHRhcChcbiAgICAgICAgKFssIGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NdOiBbXG4gICAgICAgICAgQWRkcmVzc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGlmICghYWRkcmVzc2VzTG9hZGVkU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFssIGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NdOiBbQWRkcmVzc1tdLCBib29sZWFuLCBMb2FkZXJTdGF0ZTx2b2lkPl0pID0+XG4gICAgICAgICAgYWRkcmVzc2VzTG9hZGVkU3VjY2Vzc1xuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgKFthZGRyZXNzZXMsICwgc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc106IFtcbiAgICAgICAgICBBZGRyZXNzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdEFkZHJlc3MgPVxuICAgICAgICAgICAgYWRkcmVzc2VzLmZpbmQoKGFkZHJlc3MpID0+IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MpIHx8IGFkZHJlc3Nlc1swXTtcbiAgICAgICAgICBpZiAoZGVmYXVsdEFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVmYXVsdEFkZHJlc3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3Muc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzLmxvYWRpbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGRlZmF1bHRBZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZTogTG9hZGVyU3RhdGU8dm9pZD4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZS5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICFzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZTogTG9hZGVyU3RhdGU8dm9pZD4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtYXAoKGRhdGEpID0+IEJvb2xlYW4oZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0UGF5bWVudE1ldGhvZCgpIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RTZXQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLFxuICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzKCksXG4gICAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0U2V0UGF5bWVudERldGFpbHNSZXN1bHRQcm9jZXNzKCksXG4gICAgXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHRhcChcbiAgICAgICAgKFssIHBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2Vzc106IFtcbiAgICAgICAgICBQYXltZW50RGV0YWlsc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGlmICghcGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbLCBzdWNjZXNzXTogW1BheW1lbnREZXRhaWxzW10sIGJvb2xlYW4sIExvYWRlclN0YXRlPHZvaWQ+XSkgPT4gc3VjY2Vzc1xuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgKFtwYXltZW50cywgLCBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NdOiBbXG4gICAgICAgICAgUGF5bWVudERldGFpbHNbXSxcbiAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0UGF5bWVudCA9XG4gICAgICAgICAgICBwYXltZW50cy5maW5kKChhZGRyZXNzKSA9PiBhZGRyZXNzLmRlZmF1bHRQYXltZW50KSB8fCBwYXltZW50c1swXTtcbiAgICAgICAgICBpZiAoZGVmYXVsdFBheW1lbnQgJiYgT2JqZWN0LmtleXMoZGVmYXVsdFBheW1lbnQpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzcy5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzLmxvYWRpbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhkZWZhdWx0UGF5bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2Yoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlOiBMb2FkZXJTdGF0ZTx2b2lkPikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZS5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICFzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGU6IExvYWRlclN0YXRlPHZvaWQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1hcCgoZGF0YSkgPT4gQm9vbGVhbihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREZWxpdmVyeU1vZGUoKSB7XG4gICAgdGhpcy5kZWxpdmVyeU1vZGVTZXQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQsXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICBzd2l0Y2hNYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc1NldCxcbiAgICAgICAgICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzLFxuICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1c0ZsYWcsXG4gICAgICAgICAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgXTogW2Jvb2xlYW4sIERlbGl2ZXJ5TW9kZVtdLCBMb2FkZXJTdGF0ZTx2b2lkPiwgTG9hZGVyU3RhdGU8dm9pZD5dKSA9PiB7XG4gICAgICAgICAgaWYgKGFkZHJlc3NTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBvZihbXG4gICAgICAgICAgICAgIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMsXG4gICAgICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1c0ZsYWcsXG4gICAgICAgICAgICAgIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVTdGF0dXMsXG4gICAgICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgICAgKFssICwgc3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgXSkgPT4gc3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzLnN1Y2Nlc3NcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAgICAgICAgIChbZGVsaXZlcnlNb2Rlcywgc2V0RGVsaXZlcnlNb2RlU3RhdHVzLCAsXTogW1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4oZGVsaXZlcnlNb2Rlcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZlcnJlZERlbGl2ZXJ5TW9kZSA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGVzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkRGVsaXZlcnlNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoW2RlbGl2ZXJ5TW9kZSwgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChbLCBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoWywgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKChkYXRhKSA9PiBCb29sZWFuKGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNldENoZWNrb3V0UHJvY2Vzc2VzKCkge1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UucmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk7XG4gICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLnJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKCk7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5yZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTtcbiAgfVxuXG4gIHB1YmxpYyB0cnlTZXREZWZhdWx0Q2hlY2tvdXREZXRhaWxzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMucmVzZXRDaGVja291dFByb2Nlc3NlcygpO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLmRlbGl2ZXJ5TW9kZVNldCQsIHRoaXMucGF5bWVudE1ldGhvZFNldCRdKS5waXBlKFxuICAgICAgbWFwKChbZGVsaXZlcnlNb2RlU2V0LCBwYXltZW50TWV0aG9kU2V0XSkgPT5cbiAgICAgICAgQm9vbGVhbihkZWxpdmVyeU1vZGVTZXQgJiYgcGF5bWVudE1ldGhvZFNldClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=