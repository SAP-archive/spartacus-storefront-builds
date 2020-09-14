import { ActivatedRoute } from '@angular/router';
import { DeliveryMode, RoutingConfigService } from '@spartacus/core';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStep, CheckoutStepType } from '../model/checkout-step.model';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutConfigService {
    private checkoutConfig;
    private routingConfigService;
    steps: CheckoutStep[];
    private express;
    private guest;
    private defaultDeliveryMode;
    constructor(checkoutConfig: CheckoutConfig, routingConfigService: RoutingConfigService);
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStep(currentStepType: CheckoutStepType): CheckoutStep;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCheckoutStepRoute(currentStepType: CheckoutStepType): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getFirstCheckoutStepRoute(): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getNextCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getPreviousCheckoutStepUrl(activatedRoute: ActivatedRoute): string;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    getCurrentStepIndex(activatedRoute: ActivatedRoute): number | null;
    protected compareDeliveryCost(deliveryMode1: DeliveryMode, deliveryMode2: DeliveryMode): number;
    protected findMatchingDeliveryMode(deliveryModes: DeliveryMode[], index?: number): string;
    getPreferredDeliveryMode(deliveryModes: DeliveryMode[]): string;
    isExpressCheckout(): boolean;
    isGuestCheckout(): boolean;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getStepUrlFromActivatedRoute;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getStepUrlFromStepRoute;
    /**
     * will be removed, there is same function in checkout-step.service
     */
    private getCheckoutStepIndex;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutConfigService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAsIENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0Q29uZmlnU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZztcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIHN0ZXBzOiBDaGVja291dFN0ZXBbXTtcbiAgICBwcml2YXRlIGV4cHJlc3M7XG4gICAgcHJpdmF0ZSBndWVzdDtcbiAgICBwcml2YXRlIGRlZmF1bHREZWxpdmVyeU1vZGU7XG4gICAgY29uc3RydWN0b3IoY2hlY2tvdXRDb25maWc6IENoZWNrb3V0Q29uZmlnLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICAgKi9cbiAgICBnZXRDaGVja291dFN0ZXAoY3VycmVudFN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogQ2hlY2tvdXRTdGVwO1xuICAgIC8qKlxuICAgICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICAgKi9cbiAgICBnZXRDaGVja291dFN0ZXBSb3V0ZShjdXJyZW50U3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgICAqL1xuICAgIGdldEZpcnN0Q2hlY2tvdXRTdGVwUm91dGUoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICAgKi9cbiAgICBnZXROZXh0Q2hlY2tvdXRTdGVwVXJsKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAgICovXG4gICAgZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHdpbGwgYmUgcmVtb3ZlZCwgdGhlcmUgaXMgc2FtZSBmdW5jdGlvbiBpbiBjaGVja291dC1zdGVwLnNlcnZpY2VcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3RlcEluZGV4KGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk6IG51bWJlciB8IG51bGw7XG4gICAgcHJvdGVjdGVkIGNvbXBhcmVEZWxpdmVyeUNvc3QoZGVsaXZlcnlNb2RlMTogRGVsaXZlcnlNb2RlLCBkZWxpdmVyeU1vZGUyOiBEZWxpdmVyeU1vZGUpOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGZpbmRNYXRjaGluZ0RlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVzOiBEZWxpdmVyeU1vZGVbXSwgaW5kZXg/OiBudW1iZXIpOiBzdHJpbmc7XG4gICAgZ2V0UHJlZmVycmVkRGVsaXZlcnlNb2RlKGRlbGl2ZXJ5TW9kZXM6IERlbGl2ZXJ5TW9kZVtdKTogc3RyaW5nO1xuICAgIGlzRXhwcmVzc0NoZWNrb3V0KCk6IGJvb2xlYW47XG4gICAgaXNHdWVzdENoZWNrb3V0KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogd2lsbCBiZSByZW1vdmVkLCB0aGVyZSBpcyBzYW1lIGZ1bmN0aW9uIGluIGNoZWNrb3V0LXN0ZXAuc2VydmljZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U3RlcFVybEZyb21BY3RpdmF0ZWRSb3V0ZTtcbiAgICAvKipcbiAgICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRTdGVwVXJsRnJvbVN0ZXBSb3V0ZTtcbiAgICAvKipcbiAgICAgKiB3aWxsIGJlIHJlbW92ZWQsIHRoZXJlIGlzIHNhbWUgZnVuY3Rpb24gaW4gY2hlY2tvdXQtc3RlcC5zZXJ2aWNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDaGVja291dFN0ZXBJbmRleDtcbn1cbiJdfQ==