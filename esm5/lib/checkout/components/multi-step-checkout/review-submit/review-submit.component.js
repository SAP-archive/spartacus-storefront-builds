/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, } from '@angular/core';
import { CheckoutService, CartService, UserService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutService, userService, cartService) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ReviewSubmitComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(tap(function (selected) {
            if (selected === null) {
                _this.checkoutService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.userService
            .getCountry(this.deliveryAddress.country.isocode)
            .pipe(tap(function (country) {
            if (country === null) {
                _this.userService.loadDeliveryCountries();
            }
        }));
    };
    /**
     * @param {?} countryName
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getShippingAddressCard = /**
     * @param {?} countryName
     * @return {?}
     */
    function (countryName) {
        if (!countryName) {
            countryName = this.deliveryAddress.country.isocode;
        }
        /** @type {?} */
        var region = '';
        if (this.deliveryAddress.region && this.deliveryAddress.region.isocode) {
            region = this.deliveryAddress.region.isocode + ', ';
        }
        return {
            title: 'Ship To',
            textBold: this.deliveryAddress.firstName + ' ' + this.deliveryAddress.lastName,
            text: [
                this.deliveryAddress.line1,
                this.deliveryAddress.line2,
                this.deliveryAddress.town + ', ' + region + countryName,
                this.deliveryAddress.postalCode,
                this.deliveryAddress.phone,
            ],
        };
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getShippingMethodCard = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        if (deliveryMode) {
            return {
                title: 'Shipping Method',
                textBold: this.shippingMethod,
                text: [deliveryMode.description],
            };
        }
    };
    /**
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getPaymentMethodCard = /**
     * @return {?}
     */
    function () {
        return {
            title: 'Payment',
            textBold: this.paymentDetails.accountHolderName,
            text: [
                this.paymentDetails.cardNumber,
                'Expires: ' +
                    this.paymentDetails.expiryMonth +
                    '/' +
                    this.paymentDetails.expiryYear,
            ],
        };
    };
    ReviewSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-review-submit',
                    template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"getShippingAddressCard((countryName$ | async)?.name)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- SHIPPING METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          [content]=\"getShippingMethodCard(deliveryMode$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card [content]=\"getPaymentMethodCard()\"></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-review-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.25rem 0)}.cx-review-summary{margin:var(--cx-margin,0);background-color:var(--cx-background-color,var(--cx-g-color-background))}.row{margin:var(--cx-margin,0)}.form-check{padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.col-md-4{padding:var(--cx-padding,0)}.cx-review-cart-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,2.625rem 0 .5rem 0)}.cx-review-cart-heading{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,1.375rem 0);margin:var(--cx-margin,0);border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-review-summary .cx-review-summary-card{background-color:#fff;border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-review-cart-heading{border-width:var(--cx-border-width,1px 0 0);max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 3.5rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}@media (max-width:767.98px){.cx-review-cart-heading{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 1.25rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}.cx-review-cart-item{padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-review-cart-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}@media (max-width:991.98px){.col-md-12{padding:var(--cx-padding,0 3.5rem 3.5rem 3.5rem)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 1.25rem 1.25rem 1.25rem)}}"]
                }] }
    ];
    /** @nocollapse */
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: UserService },
        { type: CartService }
    ]; };
    ReviewSubmitComponent.propDecorators = {
        deliveryAddress: [{ type: Input }],
        shippingMethod: [{ type: Input }],
        paymentDetails: [{ type: Input }]
    };
    return ReviewSubmitComponent;
}());
export { ReviewSubmitComponent };
if (false) {
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryAddress;
    /** @type {?} */
    ReviewSubmitComponent.prototype.shippingMethod;
    /** @type {?} */
    ReviewSubmitComponent.prototype.paymentDetails;
    /** @type {?} */
    ReviewSubmitComponent.prototype.entries$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.cart$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryMode$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.countryName$;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZUFBZSxFQUVmLFdBQVcsRUFDWCxXQUFXLEdBTVosTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckM7SUFtQkUsK0JBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsV0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7Ozs7SUFFSix3Q0FBUTs7O0lBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQ3RFLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQUUsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDaEQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDVCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7OztJQUVELHNEQUFzQjs7OztJQUF0QixVQUF1QixXQUFtQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDcEQ7O1lBRUcsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0RSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyRDtRQUVELE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUTtZQUN0RSxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO2dCQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVztnQkFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxREFBcUI7Ozs7SUFBckIsVUFBc0IsWUFBMEI7UUFDOUMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTztnQkFDTCxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQzdCLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7YUFDakMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELG9EQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQjtZQUMvQyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVO2dCQUM5QixXQUFXO29CQUNULElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVztvQkFDL0IsR0FBRztvQkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVU7YUFDakM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBOUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixvMURBQTZDO29CQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQXJCQyxlQUFlO2dCQUdmLFdBQVc7Z0JBRFgsV0FBVzs7O2tDQXFCVixLQUFLO2lDQUVMLEtBQUs7aUNBRUwsS0FBSzs7SUFvRlIsNEJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQXpGWSxxQkFBcUI7OztJQUNoQyxnREFDeUI7O0lBQ3pCLCtDQUN1Qjs7SUFDdkIsK0NBQytCOztJQUUvQix5Q0FBbUM7O0lBQ25DLHNDQUF3Qjs7SUFDeEIsOENBQXdDOztJQUN4Qyw2Q0FBa0M7Ozs7O0lBR2hDLGdEQUEwQzs7Ozs7SUFDMUMsNENBQWtDOzs7OztJQUNsQyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIE9yZGVyRW50cnksXG4gIENhcnQsXG4gIERlbGl2ZXJ5TW9kZSxcbiAgQ291bnRyeSxcbiAgUGF5bWVudERldGFpbHMsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcbiAgQElucHV0KClcbiAgc2hpcHBpbmdNZXRob2Q6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuXG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBkZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gIGNvdW50cnlOYW1lJDogT2JzZXJ2YWJsZTxDb3VudHJ5PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyaWVzKCk7XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZSQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpLnBpcGUoXG4gICAgICB0YXAoc2VsZWN0ZWQgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNvdW50cnlOYW1lJCA9IHRoaXMudXNlclNlcnZpY2VcbiAgICAgIC5nZXRDb3VudHJ5KHRoaXMuZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoY291bnRyeSA9PiB7XG4gICAgICAgICAgaWYgKGNvdW50cnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc0NhcmQoY291bnRyeU5hbWU6IHN0cmluZyk6IENhcmQge1xuICAgIGlmICghY291bnRyeU5hbWUpIHtcbiAgICAgIGNvdW50cnlOYW1lID0gdGhpcy5kZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIH1cblxuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAodGhpcy5kZWxpdmVyeUFkZHJlc3MucmVnaW9uICYmIHRoaXMuZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU2hpcCBUbycsXG4gICAgICB0ZXh0Qm9sZDpcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5kZWxpdmVyeUFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzLmxpbmUxLFxuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRTaGlwcGluZ01ldGhvZENhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBDYXJkIHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ1NoaXBwaW5nIE1ldGhvZCcsXG4gICAgICAgIHRleHRCb2xkOiB0aGlzLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICB0ZXh0OiBbZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZ2V0UGF5bWVudE1ldGhvZENhcmQoKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnUGF5bWVudCcsXG4gICAgICB0ZXh0Qm9sZDogdGhpcy5wYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgdGhpcy5wYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLFxuICAgICAgICAnRXhwaXJlczogJyArXG4gICAgICAgICAgdGhpcy5wYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgICAgJy8nICtcbiAgICAgICAgICB0aGlzLnBheW1lbnREZXRhaWxzLmV4cGlyeVllYXIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==