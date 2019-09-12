/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, debounceTime } from 'rxjs/operators';
import { CheckoutDeliveryService, UserAddressService, UserPaymentService, CheckoutPaymentService, } from '@spartacus/core';
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
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.setShippingAddress = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), addressesLoadedSuccess = _b[1];
            if (!addressesLoadedSuccess) {
                _this.userAddressService.loadAddresses();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), addressesLoadedSuccess = _b[1];
            return addressesLoadedSuccess;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), addresses = _b[0], setDeliveryAddressProcess = _b[2];
            /** @type {?} */
            var defaultAddress = addresses.find((/**
             * @param {?} address
             * @return {?}
             */
            function (address) { return address.defaultAddress; })) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    _this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                function (setDeliveryAddressProcessState) {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                })), switchMap((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                function (setDeliveryAddressProcessState) {
                    if (setDeliveryAddressProcessState.success) {
                        return _this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return Boolean(data && Object.keys(data).length); })));
            }
            return of(false);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.setPaymentMethod = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), paymentMethodsLoadedSuccess = _b[1];
            if (!paymentMethodsLoadedSuccess) {
                _this.userPaymentService.loadPaymentMethods();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), success = _b[1];
            return success;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 3), payments = _b[0], setPaymentDetailsProcess = _b[2];
            /** @type {?} */
            var defaultPayment = payments.find((/**
             * @param {?} address
             * @return {?}
             */
            function (address) { return address.defaultPayment; })) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    _this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                function (setPaymentDetailsProcessState) {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                })), switchMap((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                function (setPaymentDetailsProcessState) {
                    if (setPaymentDetailsProcessState.success) {
                        return _this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return Boolean(data && Object.keys(data).length); })));
            }
            return of(false);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.setDeliveryMode = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 4), addressSet = _b[0], supportedDeliveryModes = _b[1], setDeliveryModeStatusFlag = _b[2], loadSupportedDeliveryModeStatus = _b[3];
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 3), supportedDeliveryModeStatus = _b[2];
                    return supportedDeliveryModeStatus.success;
                })), switchMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 3), deliveryModes = _b[0], setDeliveryModeStatus = _b[1];
                    if (Boolean(deliveryModes.length)) {
                        /** @type {?} */
                        var preferredDeliveryMode = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = tslib_1.__read(_a, 2), deliveryMode = _b[0], deliveryModeLoadingStatus = _b[1];
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                _this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        })), filter((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = tslib_1.__read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        })), switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = tslib_1.__read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            if (deliveryModeLoadingStatus.success) {
                                return _this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        })), map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) { return Boolean(data); })));
                    }
                    return of(false);
                })));
            }
            else {
                return of(false);
            }
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.resetCheckoutProcesses = /**
     * @protected
     * @return {?}
     */
    function () {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    };
    /**
     * @return {?}
     */
    ExpressCheckoutService.prototype.trySetDefaultCheckoutDetails = /**
     * @return {?}
     */
    function () {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), deliveryModeSet = _b[0], paymentMethodSet = _b[1];
            return Boolean(deliveryModeSet && paymentMethodSet);
        })));
    };
    ExpressCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ExpressCheckoutService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: UserPaymentService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService }
    ]; };
    /** @nocollapse */ ExpressCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(i0.ɵɵinject(i1.UserAddressService), i0.ɵɵinject(i1.UserPaymentService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i2.CheckoutDetailsService), i0.ɵɵinject(i3.CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
    return ExpressCheckoutService;
}());
export { ExpressCheckoutService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.shippingAddressSet$;
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.deliveryModeSet$;
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.paymentMethodSet$;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.userPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUdsQixzQkFBc0IsR0FFdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFFcEU7SUFRRSxnQ0FDWSxrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsc0JBQThDLEVBQzlDLHFCQUE0QztRQUw1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUV0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIs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Q3hELHdEQUF3RDs7Ozs7SUFDeEQsdURBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxuICBEZWxpdmVyeU1vZGUsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIExvYWRlclN0YXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB7XG4gIHByaXZhdGUgc2hpcHBpbmdBZGRyZXNzU2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBkZWxpdmVyeU1vZGVTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIHBheW1lbnRNZXRob2RTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZXRTaGlwcGluZ0FkZHJlc3MoKTtcbiAgICB0aGlzLnNldERlbGl2ZXJ5TW9kZSgpO1xuICAgIHRoaXMuc2V0UGF5bWVudE1ldGhvZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNoaXBwaW5nQWRkcmVzcygpIHtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldEFkZHJlc3NlcygpLFxuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCksXG4gICAgXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHRhcChcbiAgICAgICAgKFssIGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NdOiBbXG4gICAgICAgICAgQWRkcmVzc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGlmICghYWRkcmVzc2VzTG9hZGVkU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFssIGFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3NdOiBbQWRkcmVzc1tdLCBib29sZWFuLCBMb2FkZXJTdGF0ZTx2b2lkPl0pID0+XG4gICAgICAgICAgYWRkcmVzc2VzTG9hZGVkU3VjY2Vzc1xuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgKFthZGRyZXNzZXMsICwgc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc106IFtcbiAgICAgICAgICBBZGRyZXNzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdEFkZHJlc3MgPVxuICAgICAgICAgICAgYWRkcmVzc2VzLmZpbmQoYWRkcmVzcyA9PiBhZGRyZXNzLmRlZmF1bHRBZGRyZXNzKSB8fCBhZGRyZXNzZXNbMF07XG4gICAgICAgICAgaWYgKGRlZmF1bHRBZGRyZXNzICYmIE9iamVjdC5rZXlzKGRlZmF1bHRBZGRyZXNzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzcy5sb2FkaW5nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5QWRkcmVzcyhkZWZhdWx0QWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2Yoc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcykucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKChzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGU6IExvYWRlclN0YXRlPHZvaWQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIChzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUuZXJyb3IpICYmXG4gICAgICAgICAgICAgICAgICAhc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1N0YXRlLmxvYWRpbmdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKChzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGU6IExvYWRlclN0YXRlPHZvaWQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWFwKGRhdGEgPT4gQm9vbGVhbihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRQYXltZW50TWV0aG9kKCkge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZFNldCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCksXG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKSxcbiAgICBdKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgdGFwKFxuICAgICAgICAoWywgcGF5bWVudE1ldGhvZHNMb2FkZWRTdWNjZXNzXTogW1xuICAgICAgICAgIFBheW1lbnREZXRhaWxzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgaWYgKCFwYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKFssIHN1Y2Nlc3NdOiBbUGF5bWVudERldGFpbHNbXSwgYm9vbGVhbiwgTG9hZGVyU3RhdGU8dm9pZD5dKSA9PiBzdWNjZXNzXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAoW3BheW1lbnRzLCAsIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc106IFtcbiAgICAgICAgICBQYXltZW50RGV0YWlsc1tdLFxuICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYXltZW50ID1cbiAgICAgICAgICAgIHBheW1lbnRzLmZpbmQoYWRkcmVzcyA9PiBhZGRyZXNzLmRlZmF1bHRQYXltZW50KSB8fCBwYXltZW50c1swXTtcbiAgICAgICAgICBpZiAoZGVmYXVsdFBheW1lbnQgJiYgT2JqZWN0LmtleXMoZGVmYXVsdFBheW1lbnQpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzcy5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzLmxvYWRpbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhkZWZhdWx0UGF5bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2Yoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlOiBMb2FkZXJTdGF0ZTx2b2lkPikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZS5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICFzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGU6IExvYWRlclN0YXRlPHZvaWQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1hcChkYXRhID0+IEJvb2xlYW4oZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGVsaXZlcnlNb2RlKCkge1xuICAgIHRoaXMuZGVsaXZlcnlNb2RlU2V0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NTZXQkLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCksXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVByb2Nlc3MoKSxcbiAgICBdKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIGFkZHJlc3NTZXQsXG4gICAgICAgICAgc3VwcG9ydGVkRGVsaXZlcnlNb2RlcyxcbiAgICAgICAgICBzZXREZWxpdmVyeU1vZGVTdGF0dXNGbGFnLFxuICAgICAgICAgIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVTdGF0dXMsXG4gICAgICAgIF06IFtib29sZWFuLCBEZWxpdmVyeU1vZGVbXSwgTG9hZGVyU3RhdGU8dm9pZD4sIExvYWRlclN0YXRlPHZvaWQ+XSkgPT4ge1xuICAgICAgICAgIGlmIChhZGRyZXNzU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAgICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzLFxuICAgICAgICAgICAgICBzZXREZWxpdmVyeU1vZGVTdGF0dXNGbGFnLFxuICAgICAgICAgICAgICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzLFxuICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgICAgIChbLCAsIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5TW9kZVtdLFxuICAgICAgICAgICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD4sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgIF0pID0+IHN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1cy5zdWNjZXNzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChcbiAgICAgICAgICAgICAgICAoW2RlbGl2ZXJ5TW9kZXMsIHNldERlbGl2ZXJ5TW9kZVN0YXR1cywgLF06IFtcbiAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5TW9kZVtdLFxuICAgICAgICAgICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD4sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKGRlbGl2ZXJ5TW9kZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmZXJyZWREZWxpdmVyeU1vZGUgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmVmZXJyZWREZWxpdmVyeU1vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2Rlc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZERlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXREZWxpdmVyeU1vZGVTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgdGFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKFtkZWxpdmVyeU1vZGUsIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXNdOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5zZXREZWxpdmVyeU1vZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoWywgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuZXJyb3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKFssIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXNdOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGVyU3RhdGU8dm9pZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IEJvb2xlYW4oZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc2V0Q2hlY2tvdXRQcm9jZXNzZXMoKSB7XG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5yZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTtcbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UucmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKTtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpO1xuICB9XG5cbiAgcHVibGljIHRyeVNldERlZmF1bHRDaGVja291dERldGFpbHMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5yZXNldENoZWNrb3V0UHJvY2Vzc2VzKCk7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMuZGVsaXZlcnlNb2RlU2V0JCwgdGhpcy5wYXltZW50TWV0aG9kU2V0JF0pLnBpcGUoXG4gICAgICBtYXAoKFtkZWxpdmVyeU1vZGVTZXQsIHBheW1lbnRNZXRob2RTZXRdKSA9PlxuICAgICAgICBCb29sZWFuKGRlbGl2ZXJ5TW9kZVNldCAmJiBwYXltZW50TWV0aG9kU2V0KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==