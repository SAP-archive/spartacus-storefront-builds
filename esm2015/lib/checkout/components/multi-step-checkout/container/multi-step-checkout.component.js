/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { CartDataService, CartService, CheckoutService, GlobalMessageService, GlobalMessageType, RoutingService, } from '@spartacus/core';
import { filter } from 'rxjs/operators';
export class MultiStepCheckoutComponent {
    /**
     * @param {?} checkoutService
     * @param {?} cartService
     * @param {?} cartDataService
     * @param {?} routingService
     * @param {?} globalMessageService
     * @param {?} cd
     */
    constructor(checkoutService, cartService, cartDataService, routingService, globalMessageService, cd) {
        this.checkoutService = checkoutService;
        this.cartService = cartService;
        this.cartDataService = cartDataService;
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.cd = cd;
        this.step = 1;
        this.done = false;
        this.subscriptions = [];
        this.tAndCToggler = false;
        this.navs = this.initializeCheckoutNavBar();
    }
    /**
     * @private
     * @return {?}
     */
    refreshCart() {
        this.cartService.loadDetails();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.cartDataService.getDetails) {
            this.cartService.loadDetails();
        }
        this.cart$ = this.cartService.getActive();
        this.processSteps();
    }
    /**
     * @return {?}
     */
    processSteps() {
        // step1: set delivery address
        this.subscriptions.push(this.checkoutService
            .getDeliveryAddress()
            .pipe(filter(deliveryAddress => Object.keys(deliveryAddress).length !== 0 && this.step === 1))
            .subscribe(deliveryAddress => {
            this.deliveryAddress = deliveryAddress;
            this.nextStep(2);
            this.refreshCart();
            this.cd.detectChanges();
        }));
        // step2: select delivery mode
        this.subscriptions.push(this.checkoutService
            .getSelectedDeliveryModeCode()
            .pipe(filter(selected => selected !== '' && this.step === 2))
            .subscribe(selectedMode => {
            this.nextStep(3);
            this.refreshCart();
            this.shippingMethod = selectedMode;
            this.cd.detectChanges();
        }));
        // step3: set payment information
        this.subscriptions.push(this.checkoutService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => Object.keys(paymentInfo).length !== 0 && this.step === 3))
            .subscribe(paymentInfo => {
            if (!paymentInfo['hasError']) {
                this.nextStep(4);
                this.paymentDetails = paymentInfo;
                this.cd.detectChanges();
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'InvalidField: ' + paymentInfo[key],
                        });
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        }));
        // step4: place order
        this.subscriptions.push(this.checkoutService
            .getOrderDetails()
            .pipe(filter(order => Object.keys(order).length !== 0 && this.step === 4))
            .subscribe(() => {
            // checkout steps are done
            this.done = true;
            this.routingService.go({ route: 'orderConfirmation' });
        }));
    }
    /**
     * @param {?} backStep
     * @return {?}
     */
    setStep(backStep) {
        this.nextStep(backStep);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextStep(step) {
        /** @type {?} */
        const previousStep = step - 1;
        this.navs.forEach(function (nav) {
            if (nav.id === previousStep) {
                nav.status.completed = true;
            }
            if (nav.id === step) {
                nav.status.active = true;
                nav.status.disabled = false;
            }
            else {
                nav.status.active = false;
            }
            nav.progressBar = nav.status.active || nav.status.completed;
        });
        this.step = step;
        this.tAndCToggler = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addAddress({ newAddress, address, }) {
        if (newAddress) {
            this.checkoutService.createAndSetAddress(address);
            return;
        }
        // if the selected address is the same as the cart's one
        if (this.deliveryAddress && address.id === this.deliveryAddress.id) {
            this.nextStep(2);
            return;
        }
        this.checkoutService.setDeliveryAddress(address);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setDeliveryMode({ deliveryModeId }) {
        // if the selected shipping method is the same as the cart's one
        if (this.shippingMethod && this.shippingMethod === deliveryModeId) {
            this.nextStep(3);
            return;
        }
        this.checkoutService.setDeliveryMode(deliveryModeId);
        return;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addPaymentInfo({ newPayment, payment, billingAddress, }) {
        payment.billingAddress = billingAddress
            ? billingAddress
            : this.deliveryAddress;
        if (newPayment) {
            this.checkoutService.createPaymentDetails(payment);
            return;
        }
        // if the selected payment is the same as the cart's one
        if (this.paymentDetails && this.paymentDetails.id === payment.id) {
            this.nextStep(4);
            return;
        }
        this.checkoutService.setPaymentDetails(payment);
    }
    /**
     * @return {?}
     */
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    /**
     * @return {?}
     */
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    /**
     * @return {?}
     */
    initializeCheckoutNavBar() {
        return [
            {
                id: 1,
                label: '1. Shipping Address',
                status: {
                    disabled: false,
                    completed: false,
                    active: true,
                },
                progressBar: true,
            },
            {
                id: 2,
                label: '2. Shipping Method',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 3,
                label: '3. Payment',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
            {
                id: 4,
                label: '4. Review',
                status: {
                    disabled: true,
                    completed: false,
                    active: false,
                },
                progressBar: false,
            },
        ];
    }
    /**
     * @return {?}
     */
    clearCheckoutNavBar() {
        this.navs = [];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        if (!this.done) {
            this.checkoutService.clearCheckoutData();
        }
        this.clearCheckoutNavBar();
    }
}
MultiStepCheckoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-multi-step-checkout',
                template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-8\">\n      <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n      <!-- Navigation -->\n      <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n        <ul class=\"cx-list\">\n          <li\n            *ngFor=\"let nav of navs\"\n            class=\"cx-item\"\n            [ngClass]=\"{\n              ' is-disabled': nav.status.disabled,\n              ' is-active': nav.status.active\n            }\"\n          >\n            <a\n              class=\"cx-link \"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n              (click)=\"nav.status.disabled === false ? setStep(nav.id) : false\"\n              >{{ nav.label }}</a\n            >\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"cx-media\">\n        <div class=\"cx-list-media\">\n          {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n          {{ cart.subTotal?.formattedValue }}\n        </div>\n\n        <div *ngFor=\"let nav of navs\">\n          <!-- Navigation -->\n          <div\n            class=\"cx-list-media\"\n            [ngClass]=\"{ ' is-active': nav.status.active }\"\n          >\n            <div>{{ nav.label }}</div>\n            <button\n              *ngIf=\"nav.status.completed && !nav.status.active\"\n              class=\"btn btn-link\"\n              (click)=\"setStep(nav.id)\"\n            >\n              {{ 'common.edit' | cxTranslate }}\n            </button>\n          </div>\n\n          <!-- Content -->\n          <div *ngIf=\"nav.status.active && step === 1\">\n            <cx-shipping-address\n              [selectedAddress]=\"deliveryAddress\"\n              (addAddress)=\"addAddress($event)\"\n            ></cx-shipping-address>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 2\">\n            <cx-delivery-mode\n              [selectedShippingMethod]=\"shippingMethod\"\n              (selectMode)=\"setDeliveryMode($event)\"\n              (backStep)=\"setStep(1)\"\n            ></cx-delivery-mode>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 3\">\n            <cx-payment-method\n              [selectedPayment]=\"paymentDetails\"\n              (addPaymentInfo)=\"addPaymentInfo($event)\"\n              (backStep)=\"setStep(2)\"\n            ></cx-payment-method>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 4\">\n            <cx-review-submit\n              [deliveryAddress]=\"deliveryAddress\"\n              [shippingMethod]=\"shippingMethod\"\n              [paymentDetails]=\"paymentDetails\"\n            >\n            </cx-review-submit>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ORDER SUMMARY SECTION -->\n    <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n      <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n      <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n        <div class=\"cx-place-order-form form-check\">\n          <label>\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              (change)=\"toggleTAndC()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n              <a\n                [routerLink]=\"{ route: 'termsAndConditions' } | cxTranslateUrl\"\n                class=\"cx-tc-link\"\n                target=\"_blank\"\n              >\n                {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n              </a>\n            </span>\n          </label>\n        </div>\n        <button\n          [disabled]=\"!tAndCToggler\"\n          (click)=\"placeOrder()\"\n          class=\"btn btn-primary btn-block\"\n        >\n          {{ 'checkoutReview.placeOrder' | cxTranslate }}\n        </button>\n        <button class=\"btn btn-action btn-block\" (click)=\"setStep(3)\">\n          {{ 'common.back' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-nav{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0)}.cx-nav .cx-list{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);list-style:var(--cx-list-style,none);padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.cx-nav .cx-item{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 1.375rem 0)}.cx-nav .cx-item.progressbar{border-bottom:5px solid;border-color:var(--cx-border-color,var(--cx-g-color-primary))}.cx-nav .cx-item.progressbar ::before{color:var(--cx-color,var(--cx-g-color-text))}.cx-nav .cx-item ::before{padding:var(--cx-padding,0 .5rem);content:var(--cx-content, \">\")}.cx-nav .cx-item:first-child ::before{padding:var(--cx-padding,0);content:var(--cx-content, \"\")}.cx-link,.cx-link:hover{cursor:var(--cx-cursor,pointer)}.cx-link.is-disabled,.cx-link:hover.is-disabled{color:var(--cx-color,var(--cx-g-color-light));cursor:var(--cx-cursor,not-allowed)}.cx-link.is-active,.cx-link:hover.is-active{color:var(--cx-color,var(--cx-g-color-primary))}.cx-link.is-active ::before,.cx-link:hover.is-active ::before{color:var(--cx-color,var(--cx-g-color-text))}@media (max-width:991.98px){:host{padding:var(--cx-padding,1.5rem 0)}.cx-media>:last-child{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}}.cx-media .cx-list-media{display:var(--cx-display,none);font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);line-height:var(--cx-line-height,4.75rem);min-width:var(--cx-min-width,100%);border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,0)}.cx-media .cx-list-media button{text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi))}@media (max-width:991.98px){.cx-media .cx-list-media{display:var(--cx-display,flex);padding:var(--cx-padding,0 3.5rem)}}@media (max-width:767.98px){.cx-media .cx-list-media{padding:var(--cx-padding,0 1.375rem)}}.cx-place-order{padding:var(--cx-padding,0 1rem)}.cx-place-order .cx-form{display:var(--cx-display,flex)}.cx-place-order .cx-form .form-check-input{min-height:var(--cx-min-height,1.375rem);min-width:var(--cx-min-width,1.375rem)}.cx-place-order button{margin:var(--cx-margin,1.25rem 0 0)}@media (max-width:991.98px){.col-md-12{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0 0 2rem)}.cx-list-media.is-active{background-color:var(--cx-background-color,var(--cx-g-color-background))}}"]
            }] }
];
/** @nocollapse */
MultiStepCheckoutComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: CartService },
    { type: CartDataService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.step;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.done;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.deliveryAddress;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.paymentDetails;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.shippingMethod;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.subscriptions;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.cart$;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.tAndCToggler;
    /** @type {?} */
    MultiStepCheckoutComponent.prototype.navs;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cartDataService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    MultiStepCheckoutComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBRWpCLGNBQWMsR0FFZixNQUFNLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVV4QyxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7Ozs7SUFjckMsWUFDWSxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsRUFBcUI7UUFMckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQW5CakMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHbkMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsU0FBSSxHQUF5QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQVMxRCxDQUFDOzs7OztJQUVJLFdBQVc7UUFDakIsSUFBSSxD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SUFDbEMscURBQTBDOzs7OztJQUMxQyxvREFBd0M7Ozs7O0lBQ3hDLDBEQUFvRDs7Ozs7SUFDcEQsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydERhdGFTZXJ2aWNlLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVUlDYXJ0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXROYXZCYXJJdGVtIH0gZnJvbSAnLi9jaGVja291dC1uYXZpZ2F0aW9uLWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW11bHRpLXN0ZXAtY2hlY2tvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpLXN0ZXAtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGVwID0gMTtcbiAgZG9uZSA9IGZhbHNlO1xuXG4gIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcbiAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICBzaGlwcGluZ01ldGhvZDogc3RyaW5nO1xuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNhcnQkOiBPYnNlcnZhYmxlPFVJQ2FydD47XG4gIHRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuXG4gIG5hdnM6IENoZWNrb3V0TmF2QmFySXRlbVtdID0gdGhpcy5pbml0aWFsaXplQ2hlY2tvdXROYXZCYXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydERhdGFTZXJ2aWNlOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVmcmVzaENhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNhcnREYXRhU2VydmljZS5nZXREZXRhaWxzKSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmxvYWREZXRhaWxzKCk7XG4gICAgfVxuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMucHJvY2Vzc1N0ZXBzKCk7XG4gIH1cblxuICBwcm9jZXNzU3RlcHMoKTogdm9pZCB7XG4gICAgLy8gc3RlcDE6IHNldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAuZ2V0RGVsaXZlcnlBZGRyZXNzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzID0+XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlbGl2ZXJ5QWRkcmVzcykubGVuZ3RoICE9PSAwICYmIHRoaXMuc3RlcCA9PT0gMVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRlbGl2ZXJ5QWRkcmVzcyA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MgPSBkZWxpdmVyeUFkZHJlc3M7XG4gICAgICAgICAgdGhpcy5uZXh0U3RlcCgyKTtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXAyOiBzZWxlY3QgZGVsaXZlcnkgbW9kZVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpXG4gICAgICAgIC5waXBlKGZpbHRlcihzZWxlY3RlZCA9PiBzZWxlY3RlZCAhPT0gJycgJiYgdGhpcy5zdGVwID09PSAyKSlcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZE1vZGUgPT4ge1xuICAgICAgICAgIHRoaXMubmV4dFN0ZXAoMyk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FydCgpO1xuICAgICAgICAgIHRoaXMuc2hpcHBpbmdNZXRob2QgPSBzZWxlY3RlZE1vZGU7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXAzOiBzZXQgcGF5bWVudCBpbmZvcm1hdGlvblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldFBheW1lbnREZXRhaWxzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgcGF5bWVudEluZm8gPT5cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnN0ZXAgPT09IDNcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShwYXltZW50SW5mbyA9PiB7XG4gICAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCg0KTtcbiAgICAgICAgICAgIHRoaXMucGF5bWVudERldGFpbHMgPSBwYXltZW50SW5mbztcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50SW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnSW52YWxpZEZpZWxkOiAnICsgcGF5bWVudEluZm9ba2V5XSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0U3RlcCgzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHN0ZXA0OiBwbGFjZSBvcmRlclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihvcmRlciA9PiBPYmplY3Qua2V5cyhvcmRlcikubGVuZ3RoICE9PSAwICYmIHRoaXMuc3RlcCA9PT0gNClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAvLyBjaGVja291dCBzdGVwcyBhcmUgZG9uZVxuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnb3JkZXJDb25maXJtYXRpb24nIH0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRTdGVwKGJhY2tTdGVwOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5leHRTdGVwKGJhY2tTdGVwKTtcbiAgfVxuXG4gIG5leHRTdGVwKHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXAgLSAxO1xuXG4gICAgdGhpcy5uYXZzLmZvckVhY2goZnVuY3Rpb24obmF2KSB7XG4gICAgICBpZiAobmF2LmlkID09PSBwcmV2aW91c1N0ZXApIHtcbiAgICAgICAgbmF2LnN0YXR1cy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdi5pZCA9PT0gc3RlcCkge1xuICAgICAgICBuYXYuc3RhdHVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5hdi5zdGF0dXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdGF0dXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG5hdi5wcm9ncmVzc0JhciA9IG5hdi5zdGF0dXMuYWN0aXZlIHx8IG5hdi5zdGF0dXMuY29tcGxldGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuICB9XG5cbiAgYWRkQWRkcmVzcyh7XG4gICAgbmV3QWRkcmVzcyxcbiAgICBhZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3QWRkcmVzczogYm9vbGVhbjtcbiAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5ld0FkZHJlc3MpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBhZGRyZXNzIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuZGVsaXZlcnlBZGRyZXNzICYmIGFkZHJlc3MuaWQgPT09IHRoaXMuZGVsaXZlcnlBZGRyZXNzLmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0RGVsaXZlcnlNb2RlKHsgZGVsaXZlcnlNb2RlSWQgfTogeyBkZWxpdmVyeU1vZGVJZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgc2hpcHBpbmcgbWV0aG9kIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuc2hpcHBpbmdNZXRob2QgJiYgdGhpcy5zaGlwcGluZ01ldGhvZCA9PT0gZGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgIHRoaXMubmV4dFN0ZXAoMyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkUGF5bWVudEluZm8oe1xuICAgIG5ld1BheW1lbnQsXG4gICAgcGF5bWVudCxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIG5ld1BheW1lbnQ6IGJvb2xlYW47XG4gICAgcGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBwYXltZW50LmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3NcbiAgICAgID8gYmlsbGluZ0FkZHJlc3NcbiAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICBpZiAobmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBheW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIGNhcnQncyBvbmVcbiAgICBpZiAodGhpcy5wYXltZW50RGV0YWlscyAmJiB0aGlzLnBheW1lbnREZXRhaWxzLmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICB9XG5cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVUQW5kQygpOiB2b2lkIHtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9ICF0aGlzLnRBbmRDVG9nZ2xlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVDaGVja291dE5hdkJhcigpOiBDaGVja291dE5hdkJhckl0ZW1bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhYmVsOiAnMS4gU2hpcHBpbmcgQWRkcmVzcycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbGFiZWw6ICcyLiBTaGlwcGluZyBNZXRob2QnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBsYWJlbDogJzMuIFBheW1lbnQnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBsYWJlbDogJzQuIFJldmlldycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY2xlYXJDaGVja291dE5hdkJhcigpOiB2b2lkIHtcbiAgICB0aGlzLm5hdnMgPSBbXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJDaGVja291dE5hdkJhcigpO1xuICB9XG59XG4iXX0=