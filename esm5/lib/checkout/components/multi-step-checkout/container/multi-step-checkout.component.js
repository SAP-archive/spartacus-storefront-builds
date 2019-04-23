/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { CheckoutService, RoutingService, GlobalMessageService, GlobalMessageType, CartService, CartDataService, } from '@spartacus/core';
import { filter } from 'rxjs/operators';
var MultiStepCheckoutComponent = /** @class */ (function () {
    function MultiStepCheckoutComponent(checkoutService, cartService, cartDataService, routingService, globalMessageService, cd) {
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
    MultiStepCheckoutComponent.prototype.refreshCart = /**
     * @private
     * @return {?}
     */
    function () {
        this.cartService.loadDetails();
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.cartDataService.getDetails) {
            this.cartService.loadDetails();
        }
        this.cart$ = this.cartService.getActive();
        this.processSteps();
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.processSteps = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // step1: set delivery address
        this.subscriptions.push(this.checkoutService
            .getDeliveryAddress()
            .pipe(filter(function (deliveryAddress) {
            return Object.keys(deliveryAddress).length !== 0 && _this.step === 1;
        }))
            .subscribe(function (deliveryAddress) {
            _this.deliveryAddress = deliveryAddress;
            _this.nextStep(2);
            _this.refreshCart();
            _this.cd.detectChanges();
        }));
        // step2: select delivery mode
        this.subscriptions.push(this.checkoutService
            .getSelectedDeliveryModeCode()
            .pipe(filter(function (selected) { return selected !== '' && _this.step === 2; }))
            .subscribe(function (selectedMode) {
            _this.nextStep(3);
            _this.refreshCart();
            _this.shippingMethod = selectedMode;
            _this.cd.detectChanges();
        }));
        // step3: set payment information
        this.subscriptions.push(this.checkoutService
            .getPaymentDetails()
            .pipe(filter(function (paymentInfo) {
            return Object.keys(paymentInfo).length !== 0 && _this.step === 3;
        }))
            .subscribe(function (paymentInfo) {
            if (!paymentInfo['hasError']) {
                _this.nextStep(4);
                _this.paymentDetails = paymentInfo;
                _this.cd.detectChanges();
            }
            else {
                Object.keys(paymentInfo).forEach(function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.globalMessageService.add({
                            type: GlobalMessageType.MSG_TYPE_ERROR,
                            text: 'InvalidField: ' + paymentInfo[key],
                        });
                    }
                });
                _this.checkoutService.clearCheckoutStep(3);
            }
        }));
        // step4: place order
        this.subscriptions.push(this.checkoutService
            .getOrderDetails()
            .pipe(filter(function (order) { return Object.keys(order).length !== 0 && _this.step === 4; }))
            .subscribe(function () {
            // checkout steps are done
            _this.done = true;
            _this.routingService.go({ route: ['orderConfirmation'] });
        }));
    };
    /**
     * @param {?} backStep
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.setStep = /**
     * @param {?} backStep
     * @return {?}
     */
    function (backStep) {
        this.nextStep(backStep);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.nextStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var previousStep = step - 1;
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
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.addAddress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newAddress = _a.newAddress, address = _a.address;
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
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.setDeliveryMode = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var deliveryModeId = _a.deliveryModeId;
        // if the selected shipping method is the same as the cart's one
        if (this.shippingMethod && this.shippingMethod === deliveryModeId) {
            this.nextStep(3);
            return;
        }
        this.checkoutService.setDeliveryMode(deliveryModeId);
        return;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.addPaymentInfo = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newPayment = _a.newPayment, payment = _a.payment, billingAddress = _a.billingAddress;
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
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.placeOrder = /**
     * @return {?}
     */
    function () {
        this.checkoutService.placeOrder();
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.toggleTAndC = /**
     * @return {?}
     */
    function () {
        this.tAndCToggler = !this.tAndCToggler;
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.initializeCheckoutNavBar = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.clearCheckoutNavBar = /**
     * @return {?}
     */
    function () {
        this.navs = [];
    };
    /**
     * @return {?}
     */
    MultiStepCheckoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        if (!this.done) {
            this.checkoutService.clearCheckoutData();
        }
        this.clearCheckoutNavBar();
    };
    MultiStepCheckoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-multi-step-checkout',
                    template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-8\">\n      <!-- VISIBLE ONLY ON LG AND XL SCREENS -->\n      <!-- Navigation -->\n      <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n        <ul class=\"cx-list\">\n          <li\n            *ngFor=\"let nav of navs\"\n            class=\"cx-item\"\n            [ngClass]=\"{\n              ' is-disabled': nav.status.disabled,\n              ' is-active': nav.status.active\n            }\"\n          >\n            <a\n              class=\"cx-link \"\n              [ngClass]=\"{\n                ' is-disabled': nav.status.disabled,\n                ' is-active': nav.status.active\n              }\"\n              (click)=\"nav.status.disabled === false ? setStep(nav.id) : false\"\n              >{{ nav.label }}</a\n            >\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"cx-media\">\n        <div class=\"cx-list-media\">\n          {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n          {{ cart.subTotal?.formattedValue }}\n        </div>\n\n        <div *ngFor=\"let nav of navs\">\n          <!-- Navigation -->\n          <div\n            class=\"cx-list-media\"\n            [ngClass]=\"{ ' is-active': nav.status.active }\"\n          >\n            <div>{{ nav.label }}</div>\n            <button\n              *ngIf=\"nav.status.completed && !nav.status.active\"\n              class=\"btn btn-link\"\n              (click)=\"setStep(nav.id)\"\n            >\n              {{ 'common.edit' | cxTranslate }}\n            </button>\n          </div>\n\n          <!-- Content -->\n          <div *ngIf=\"nav.status.active && step === 1\">\n            <cx-shipping-address\n              [selectedAddress]=\"deliveryAddress\"\n              (addAddress)=\"addAddress($event)\"\n            ></cx-shipping-address>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 2\">\n            <cx-delivery-mode\n              [selectedShippingMethod]=\"shippingMethod\"\n              (selectMode)=\"setDeliveryMode($event)\"\n              (backStep)=\"setStep(1)\"\n            ></cx-delivery-mode>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 3\">\n            <cx-payment-method\n              [selectedPayment]=\"paymentDetails\"\n              (addPaymentInfo)=\"addPaymentInfo($event)\"\n              (backStep)=\"setStep(2)\"\n            ></cx-payment-method>\n          </div>\n          <div *ngIf=\"nav.status.active && step === 4\">\n            <cx-review-submit\n              [deliveryAddress]=\"deliveryAddress\"\n              [shippingMethod]=\"shippingMethod\"\n              [paymentDetails]=\"paymentDetails\"\n            >\n            </cx-review-submit>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- ORDER SUMMARY SECTION -->\n    <div class=\"col-md-7 offset-md-5 col-lg-4 offset-lg-0\">\n      <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n\n      <!-- CHECKBOX AND PLACE ORDER BUTTON -->\n      <div class=\"cx-place-order\" *ngIf=\"step === 4\">\n        <div class=\"cx-place-order-form form-check\">\n          <label>\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              (change)=\"toggleTAndC()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n              <a\n                [routerLink]=\"\n                  { route: ['termsAndConditions'] } | cxTranslateUrl\n                \"\n                class=\"cx-tc-link\"\n                target=\"_blank\"\n              >\n                {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n              </a>\n            </span>\n          </label>\n        </div>\n        <button\n          [disabled]=\"!tAndCToggler\"\n          (click)=\"placeOrder()\"\n          class=\"btn btn-primary btn-block\"\n        >\n          {{ 'checkoutReview.placeOrder' | cxTranslate }}\n        </button>\n        <button class=\"btn btn-action btn-block\" (click)=\"setStep(3)\">\n          {{ 'common.back' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-nav{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0)}.cx-nav .cx-list{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,row);list-style:var(--cx-list-style,none);padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.cx-nav .cx-item{color:var(--cx-color,var(--cx-g-color-text));padding:var(--cx-padding,0 0 1.375rem 0)}.cx-nav .cx-item.progressbar{border-bottom:5px solid;border-color:var(--cx-border-color,var(--cx-g-color-primary))}.cx-nav .cx-item.progressbar ::before{color:var(--cx-color,var(--cx-g-color-text))}.cx-nav .cx-item ::before{padding:var(--cx-padding,0 .5rem);content:var(--cx-content, \">\")}.cx-nav .cx-item:first-child ::before{padding:var(--cx-padding,0);content:var(--cx-content, \"\")}.cx-link,.cx-link:hover{cursor:var(--cx-cursor,pointer)}.cx-link.is-disabled,.cx-link:hover.is-disabled{color:var(--cx-color,var(--cx-g-color-light));cursor:var(--cx-cursor,not-allowed)}.cx-link.is-active,.cx-link:hover.is-active{color:var(--cx-color,var(--cx-g-color-primary))}.cx-link.is-active ::before,.cx-link:hover.is-active ::before{color:var(--cx-color,var(--cx-g-color-text))}@media (max-width:991.98px){:host{padding:var(--cx-padding,1.5rem 0)}.cx-media>:last-child{border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}}.cx-media .cx-list-media{display:var(--cx-display,none);font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);text-transform:var(--cx-text-transform,capitalize);justify-content:var(--cx-justify-content,space-between);align-items:var(--cx-align-items,center);line-height:var(--cx-line-height,4.75rem);min-width:var(--cx-min-width,100%);border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,0)}.cx-media .cx-list-media button{text-transform:var(--cx-text-transform,capitalize);font-weight:var(--cx-font-weight,var(--cx-g-font-weight-semi))}@media (max-width:991.98px){.cx-media .cx-list-media{display:var(--cx-display,flex);padding:var(--cx-padding,0 3.5rem)}}@media (max-width:767.98px){.cx-media .cx-list-media{padding:var(--cx-padding,0 1.375rem)}}.cx-place-order{padding:var(--cx-padding,0 1rem)}.cx-place-order .cx-form{display:var(--cx-display,flex)}.cx-place-order .cx-form .form-check-input{min-height:var(--cx-min-height,1.375rem);min-width:var(--cx-min-width,1.375rem)}.cx-place-order button{margin:var(--cx-margin,1.25rem 0 0)}@media (max-width:991.98px){.col-md-12{max-width:var(--cx-max-width,100%);padding:var(--cx-padding,0 0 2rem)}.cx-list-media.is-active{background-color:var(--cx-background-color,var(--cx-g-color-background))}}"]
                }] }
    ];
    /** @nocollapse */
    MultiStepCheckoutComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CartService },
        { type: CartDataService },
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: ChangeDetectorRef }
    ]; };
    return MultiStepCheckoutComponent;
}());
export { MultiStepCheckoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGVBQWUsR0FJaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEM7SUFvQkUsb0NBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTHJCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFuQmpDLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS2Isa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR25DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLFNBQUksR0FBeUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFTMUQsQ0FBQzs7Ozs7SUFFSSxnREFBVzs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMs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QUM7Q0FBQSxBQXZRRCxJQXVRQztTQWpRWSwwQkFBMEI7OztJQUNyQywwQ0FBUzs7SUFDVCwwQ0FBYTs7SUFFYixxREFBeUI7O0lBQ3pCLG9EQUErQjs7SUFDL0Isb0RBQXVCOztJQUN2QixtREFBbUM7O0lBRW5DLDJDQUF3Qjs7SUFDeEIsa0RBQXFCOztJQUVyQiwwQ0FBNkQ7Ozs7O0lBRzNELHFEQUEwQzs7Ozs7SUFDMUMsaURBQWtDOzs7OztJQUNsQyxxREFBMEM7Ozs7O0lBQzFDLG9EQUF3Qzs7Ozs7SUFDeEMsMERBQW9EOzs7OztJQUNwRCx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDaGVja291dFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIENhcnRTZXJ2aWNlLFxuICBDYXJ0RGF0YVNlcnZpY2UsXG4gIFBheW1lbnREZXRhaWxzLFxuICBBZGRyZXNzLFxuICBDYXJ0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXROYXZCYXJJdGVtIH0gZnJvbSAnLi9jaGVja291dC1uYXZpZ2F0aW9uLWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW11bHRpLXN0ZXAtY2hlY2tvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpLXN0ZXAtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGVwID0gMTtcbiAgZG9uZSA9IGZhbHNlO1xuXG4gIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcbiAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICBzaGlwcGluZ01ldGhvZDogc3RyaW5nO1xuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICB0QW5kQ1RvZ2dsZXIgPSBmYWxzZTtcblxuICBuYXZzOiBDaGVja291dE5hdkJhckl0ZW1bXSA9IHRoaXMuaW5pdGlhbGl6ZUNoZWNrb3V0TmF2QmFyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhU2VydmljZTogQ2FydERhdGFTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwcml2YXRlIHJlZnJlc2hDYXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UubG9hZERldGFpbHMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jYXJ0RGF0YVNlcnZpY2UuZ2V0RGV0YWlscykge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5sb2FkRGV0YWlscygpO1xuICAgIH1cbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLnByb2Nlc3NTdGVwcygpO1xuICB9XG5cbiAgcHJvY2Vzc1N0ZXBzKCk6IHZvaWQge1xuICAgIC8vIHN0ZXAxOiBzZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2VcbiAgICAgICAgLmdldERlbGl2ZXJ5QWRkcmVzcygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyA9PlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkZWxpdmVyeUFkZHJlc3MpLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnN0ZXAgPT09IDFcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShkZWxpdmVyeUFkZHJlc3MgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzID0gZGVsaXZlcnlBZGRyZXNzO1xuICAgICAgICAgIHRoaXMubmV4dFN0ZXAoMik7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQ2FydCgpO1xuICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBzdGVwMjogc2VsZWN0IGRlbGl2ZXJ5IG1vZGVcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKVxuICAgICAgICAucGlwZShmaWx0ZXIoc2VsZWN0ZWQgPT4gc2VsZWN0ZWQgIT09ICcnICYmIHRoaXMuc3RlcCA9PT0gMikpXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWRNb2RlID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRTdGVwKDMpO1xuICAgICAgICAgIHRoaXMucmVmcmVzaENhcnQoKTtcbiAgICAgICAgICB0aGlzLnNoaXBwaW5nTWV0aG9kID0gc2VsZWN0ZWRNb2RlO1xuICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBzdGVwMzogc2V0IHBheW1lbnQgaW5mb3JtYXRpb25cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIHBheW1lbnRJbmZvID0+XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheW1lbnRJbmZvKS5sZW5ndGggIT09IDAgJiYgdGhpcy5zdGVwID09PSAzXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUocGF5bWVudEluZm8gPT4ge1xuICAgICAgICAgIGlmICghcGF5bWVudEluZm9bJ2hhc0Vycm9yJ10pIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoNCk7XG4gICAgICAgICAgICB0aGlzLnBheW1lbnREZXRhaWxzID0gcGF5bWVudEluZm87XG4gICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCdJbnZhbGlkRmllbGQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ludmFsaWRGaWVsZDogJyArIHBheW1lbnRJbmZvW2tleV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBzdGVwNDogcGxhY2Ugb3JkZXJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIob3JkZXIgPT4gT2JqZWN0LmtleXMob3JkZXIpLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnN0ZXAgPT09IDQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2tvdXQgc3RlcHMgYXJlIGRvbmVcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogWydvcmRlckNvbmZpcm1hdGlvbiddIH0pO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRTdGVwKGJhY2tTdGVwOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5leHRTdGVwKGJhY2tTdGVwKTtcbiAgfVxuXG4gIG5leHRTdGVwKHN0ZXA6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXAgLSAxO1xuXG4gICAgdGhpcy5uYXZzLmZvckVhY2goZnVuY3Rpb24obmF2KSB7XG4gICAgICBpZiAobmF2LmlkID09PSBwcmV2aW91c1N0ZXApIHtcbiAgICAgICAgbmF2LnN0YXR1cy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdi5pZCA9PT0gc3RlcCkge1xuICAgICAgICBuYXYuc3RhdHVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5hdi5zdGF0dXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5zdGF0dXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG5hdi5wcm9ncmVzc0JhciA9IG5hdi5zdGF0dXMuYWN0aXZlIHx8IG5hdi5zdGF0dXMuY29tcGxldGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuICB9XG5cbiAgYWRkQWRkcmVzcyh7XG4gICAgbmV3QWRkcmVzcyxcbiAgICBhZGRyZXNzLFxuICB9OiB7XG4gICAgbmV3QWRkcmVzczogYm9vbGVhbjtcbiAgICBhZGRyZXNzOiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKG5ld0FkZHJlc3MpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBhZGRyZXNzIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuZGVsaXZlcnlBZGRyZXNzICYmIGFkZHJlc3MuaWQgPT09IHRoaXMuZGVsaXZlcnlBZGRyZXNzLmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5zZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0RGVsaXZlcnlNb2RlKHsgZGVsaXZlcnlNb2RlSWQgfTogeyBkZWxpdmVyeU1vZGVJZDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgc2hpcHBpbmcgbWV0aG9kIGlzIHRoZSBzYW1lIGFzIHRoZSBjYXJ0J3Mgb25lXG4gICAgaWYgKHRoaXMuc2hpcHBpbmdNZXRob2QgJiYgdGhpcy5zaGlwcGluZ01ldGhvZCA9PT0gZGVsaXZlcnlNb2RlSWQpIHtcbiAgICAgIHRoaXMubmV4dFN0ZXAoMyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldERlbGl2ZXJ5TW9kZShkZWxpdmVyeU1vZGVJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkUGF5bWVudEluZm8oe1xuICAgIG5ld1BheW1lbnQsXG4gICAgcGF5bWVudCxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIG5ld1BheW1lbnQ6IGJvb2xlYW47XG4gICAgcGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBwYXltZW50LmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3NcbiAgICAgID8gYmlsbGluZ0FkZHJlc3NcbiAgICAgIDogdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG5cbiAgICBpZiAobmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBheW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIGNhcnQncyBvbmVcbiAgICBpZiAodGhpcy5wYXltZW50RGV0YWlscyAmJiB0aGlzLnBheW1lbnREZXRhaWxzLmlkID09PSBwYXltZW50LmlkKSB7XG4gICAgICB0aGlzLm5leHRTdGVwKDQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHBheW1lbnQpO1xuICB9XG5cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5wbGFjZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVUQW5kQygpOiB2b2lkIHtcbiAgICB0aGlzLnRBbmRDVG9nZ2xlciA9ICF0aGlzLnRBbmRDVG9nZ2xlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVDaGVja291dE5hdkJhcigpOiBDaGVja291dE5hdkJhckl0ZW1bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhYmVsOiAnMS4gU2hpcHBpbmcgQWRkcmVzcycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbGFiZWw6ICcyLiBTaGlwcGluZyBNZXRob2QnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBsYWJlbDogJzMuIFBheW1lbnQnLFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBsYWJlbDogJzQuIFJldmlldycsXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY2xlYXJDaGVja291dE5hdkJhcigpOiB2b2lkIHtcbiAgICB0aGlzLm5hdnMgPSBbXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJDaGVja291dE5hdkJhcigpO1xuICB9XG59XG4iXX0=