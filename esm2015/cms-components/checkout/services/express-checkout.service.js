/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ExpressCheckoutService {
    /**
     * @param {?} userAddressService
     * @param {?} userPaymentService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     */
    constructor(userAddressService, userPaymentService, checkoutDeliveryService, checkoutPaymentService, checkoutDetailsService, checkoutConfigService) {
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
    setShippingAddress() {
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, addressesLoadedSuccess]) => {
            if (!addressesLoadedSuccess) {
                this.userAddressService.loadAddresses();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, addressesLoadedSuccess]) => addressesLoadedSuccess)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([addresses, , setDeliveryAddressProcess]) => {
            /** @type {?} */
            const defaultAddress = addresses.find((/**
             * @param {?} address
             * @return {?}
             */
            address => address.defaultAddress)) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                (setDeliveryAddressProcessState) => {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                })), switchMap((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                (setDeliveryAddressProcessState) => {
                    if (setDeliveryAddressProcessState.success) {
                        return this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => Boolean(data && Object.keys(data).length))));
            }
            return of(false);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    setPaymentMethod() {
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, paymentMethodsLoadedSuccess]) => {
            if (!paymentMethodsLoadedSuccess) {
                this.userPaymentService.loadPaymentMethods();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, success]) => success)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([payments, , setPaymentDetailsProcess]) => {
            /** @type {?} */
            const defaultPayment = payments.find((/**
             * @param {?} address
             * @return {?}
             */
            address => address.defaultPayment)) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                (setPaymentDetailsProcessState) => {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                })), switchMap((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                (setPaymentDetailsProcessState) => {
                    if (setPaymentDetailsProcessState.success) {
                        return this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => Boolean(data && Object.keys(data).length))));
            }
            return of(false);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    setDeliveryMode() {
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([addressSet, supportedDeliveryModes, setDeliveryModeStatusFlag, loadSupportedDeliveryModeStatus,]) => {
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([, , supportedDeliveryModeStatus]) => supportedDeliveryModeStatus.success)), switchMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([deliveryModes, setDeliveryModeStatus, ,]) => {
                    if (Boolean(deliveryModes.length)) {
                        /** @type {?} */
                        const preferredDeliveryMode = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([deliveryMode, deliveryModeLoadingStatus]) => {
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        })), filter((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([, deliveryModeLoadingStatus]) => {
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        })), switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([, deliveryModeLoadingStatus]) => {
                            if (deliveryModeLoadingStatus.success) {
                                return this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        })), map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => Boolean(data))));
                    }
                    return of(false);
                })));
            }
            else {
                return of(false);
            }
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    resetCheckoutProcesses() {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    }
    /**
     * @return {?}
     */
    trySetDefaultCheckoutDetails() {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([deliveryModeSet, paymentMethodSet]) => Boolean(deliveryModeSet && paymentMethodSet))));
    }
}
ExpressCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ExpressCheckoutService.ctorParameters = () => [
    { type: UserAddressService },
    { type: UserPaymentService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService }
];
/** @nocollapse */ ExpressCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(i0.ɵɵinject(i1.UserAddressService), i0.ɵɵinject(i1.UserPaymentService), i0.ɵɵinject(i1.CheckoutDeliveryService), i0.ɵɵinject(i1.CheckoutPaymentService), i0.ɵɵinject(i2.CheckoutDetailsService), i0.ɵɵinject(i3.CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvc2VydmljZXMvZXhwcmVzcy1jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBR2xCLHNCQUFzQixHQUV2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUtwRSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7SUFLakMsWUFDWSxrQkFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsc0JBQThDLEVBQzlDLHFCQUE0QztRQUw1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUV0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENB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T0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUyxzQkFBc0I7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEUsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQzFDLE9BQU8sQ0FBQyxlQUFlLElBQUksZ0JBQWdCLENBQUMsRUFDN0MsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbFFGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpDLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFGbEIsdUJBQXVCO1lBS3ZCLHNCQUFzQjtZQUlmLHNCQUFzQjtZQUR0QixxQkFBcUI7Ozs7Ozs7O0lBTzVCLHFEQUFpRDs7Ozs7SUFDakQsa0RBQThDOzs7OztJQUM5QyxtREFBK0M7Ozs7O0lBRzdDLG9EQUFnRDs7Ozs7SUFDaEQsb0RBQWdEOzs7OztJQUNoRCx5REFBMEQ7Ozs7O0lBQzFELHdEQUF3RDs7Ozs7SUFDeEQsd0RBQXdEOzs7OztJQUN4RCx1REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgTG9hZGVyU3RhdGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzaGlwcGluZ0FkZHJlc3NTZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIGRlbGl2ZXJ5TW9kZVNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByaXZhdGUgcGF5bWVudE1ldGhvZFNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNldFNoaXBwaW5nQWRkcmVzcygpO1xuICAgIHRoaXMuc2V0RGVsaXZlcnlNb2RlKCk7XG4gICAgdGhpcy5zZXRQYXltZW50TWV0aG9kKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0U2hpcHBpbmdBZGRyZXNzKCkge1xuICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzU2V0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0QWRkcmVzc2VzKCksXG4gICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRBZGRyZXNzZXNMb2FkZWRTdWNjZXNzKCksXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKSxcbiAgICBdKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgdGFwKFxuICAgICAgICAoWywgYWRkcmVzc2VzTG9hZGVkU3VjY2Vzc106IFtcbiAgICAgICAgICBBZGRyZXNzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgaWYgKCFhZGRyZXNzZXNMb2FkZWRTdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoWywgYWRkcmVzc2VzTG9hZGVkU3VjY2Vzc106IFtBZGRyZXNzW10sIGJvb2xlYW4sIExvYWRlclN0YXRlPHZvaWQ+XSkgPT5cbiAgICAgICAgICBhZGRyZXNzZXNMb2FkZWRTdWNjZXNzXG4gICAgICApLFxuICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAoW2FkZHJlc3NlcywgLCBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzXTogW1xuICAgICAgICAgIEFkZHJlc3NbXSxcbiAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZhdWx0QWRkcmVzcyA9XG4gICAgICAgICAgICBhZGRyZXNzZXMuZmluZChhZGRyZXNzID0+IGFkZHJlc3MuZGVmYXVsdEFkZHJlc3MpIHx8IGFkZHJlc3Nlc1swXTtcbiAgICAgICAgICBpZiAoZGVmYXVsdEFkZHJlc3MgJiYgT2JqZWN0LmtleXMoZGVmYXVsdEFkZHJlc3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3Muc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzLmxvYWRpbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uuc2V0RGVsaXZlcnlBZGRyZXNzKGRlZmF1bHRBZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZTogTG9hZGVyU3RhdGU8dm9pZD4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZS5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICFzZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzU3RhdGUubG9hZGluZ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NTdGF0ZTogTG9hZGVyU3RhdGU8dm9pZD4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0RGVsaXZlcnlBZGRyZXNzUHJvY2Vzc1N0YXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtYXAoZGF0YSA9PiBCb29sZWFuKGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFBheW1lbnRNZXRob2QoKSB7XG4gICAgdGhpcy5wYXltZW50TWV0aG9kU2V0JCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKSxcbiAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFNldFBheW1lbnREZXRhaWxzUmVzdWx0UHJvY2VzcygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB0YXAoXG4gICAgICAgIChbLCBwYXltZW50TWV0aG9kc0xvYWRlZFN1Y2Nlc3NdOiBbXG4gICAgICAgICAgUGF5bWVudERldGFpbHNbXSxcbiAgICAgICAgICBib29sZWFuLFxuICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBpZiAoIXBheW1lbnRNZXRob2RzTG9hZGVkU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoWywgc3VjY2Vzc106IFtQYXltZW50RGV0YWlsc1tdLCBib29sZWFuLCBMb2FkZXJTdGF0ZTx2b2lkPl0pID0+IHN1Y2Nlc3NcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoXG4gICAgICAgIChbcGF5bWVudHMsICwgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzXTogW1xuICAgICAgICAgIFBheW1lbnREZXRhaWxzW10sXG4gICAgICAgICAgYm9vbGVhbixcbiAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBheW1lbnQgPVxuICAgICAgICAgICAgcGF5bWVudHMuZmluZChhZGRyZXNzID0+IGFkZHJlc3MuZGVmYXVsdFBheW1lbnQpIHx8IHBheW1lbnRzWzBdO1xuICAgICAgICAgIGlmIChkZWZhdWx0UGF5bWVudCAmJiBPYmplY3Qua2V5cyhkZWZhdWx0UGF5bWVudCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgc2V0UGF5bWVudERldGFpbHNQcm9jZXNzLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MuZXJyb3IgfHxcbiAgICAgICAgICAgICAgICBzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MubG9hZGluZ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKGRlZmF1bHRQYXltZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MpLnBpcGUoXG4gICAgICAgICAgICAgIGZpbHRlcigoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGU6IExvYWRlclN0YXRlPHZvaWQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIChzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICAgICAgICAgIHNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLmVycm9yKSAmJlxuICAgICAgICAgICAgICAgICAgIXNldFBheW1lbnREZXRhaWxzUHJvY2Vzc1N0YXRlLmxvYWRpbmdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKChzZXRQYXltZW50RGV0YWlsc1Byb2Nlc3NTdGF0ZTogTG9hZGVyU3RhdGU8dm9pZD4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0UGF5bWVudERldGFpbHNQcm9jZXNzU3RhdGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWFwKGRhdGEgPT4gQm9vbGVhbihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREZWxpdmVyeU1vZGUoKSB7XG4gICAgdGhpcy5kZWxpdmVyeU1vZGVTZXQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc1NldCQsXG4gICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKSxcbiAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpLFxuICAgIF0pLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICBzd2l0Y2hNYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgYWRkcmVzc1NldCxcbiAgICAgICAgICBzdXBwb3J0ZWREZWxpdmVyeU1vZGVzLFxuICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1c0ZsYWcsXG4gICAgICAgICAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgXTogW2Jvb2xlYW4sIERlbGl2ZXJ5TW9kZVtdLCBMb2FkZXJTdGF0ZTx2b2lkPiwgTG9hZGVyU3RhdGU8dm9pZD5dKSA9PiB7XG4gICAgICAgICAgaWYgKGFkZHJlc3NTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBvZihbXG4gICAgICAgICAgICAgIHN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMsXG4gICAgICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1c0ZsYWcsXG4gICAgICAgICAgICAgIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVTdGF0dXMsXG4gICAgICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAgICAgKFssICwgc3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgXSkgPT4gc3VwcG9ydGVkRGVsaXZlcnlNb2RlU3RhdHVzLnN1Y2Nlc3NcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKFxuICAgICAgICAgICAgICAgIChbZGVsaXZlcnlNb2Rlcywgc2V0RGVsaXZlcnlNb2RlU3RhdHVzLCAsXTogW1xuICAgICAgICAgICAgICAgICAgRGVsaXZlcnlNb2RlW10sXG4gICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4oZGVsaXZlcnlNb2Rlcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZlcnJlZERlbGl2ZXJ5TW9kZSA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldFByZWZlcnJlZERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeU1vZGVzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkRGVsaXZlcnlNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIHNldERlbGl2ZXJ5TW9kZVN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoW2RlbGl2ZXJ5TW9kZSwgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5lcnJvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChbLCBkZWxpdmVyeU1vZGVMb2FkaW5nU3RhdHVzXTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlclN0YXRlPHZvaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGl2ZXJ5TW9kZUxvYWRpbmdTdGF0dXMuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5lcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoWywgZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1c106IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkZXJTdGF0ZTx2b2lkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsaXZlcnlNb2RlTG9hZGluZ1N0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZXRhaWxzU2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKGRhdGEgPT4gQm9vbGVhbihkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVzZXRDaGVja291dFByb2Nlc3NlcygpIHtcbiAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLnJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpO1xuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5yZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcygpO1xuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UucmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk7XG4gIH1cblxuICBwdWJsaWMgdHJ5U2V0RGVmYXVsdENoZWNrb3V0RGV0YWlscygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICB0aGlzLnJlc2V0Q2hlY2tvdXRQcm9jZXNzZXMoKTtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5kZWxpdmVyeU1vZGVTZXQkLCB0aGlzLnBheW1lbnRNZXRob2RTZXQkXSkucGlwZShcbiAgICAgIG1hcCgoW2RlbGl2ZXJ5TW9kZVNldCwgcGF5bWVudE1ldGhvZFNldF0pID0+XG4gICAgICAgIEJvb2xlYW4oZGVsaXZlcnlNb2RlU2V0ICYmIHBheW1lbnRNZXRob2RTZXQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19