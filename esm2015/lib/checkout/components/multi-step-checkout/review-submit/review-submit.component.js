/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, } from '@angular/core';
import { CheckoutService, CartService, UserService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
export class ReviewSubmitComponent {
    /**
     * @param {?} checkoutService
     * @param {?} userService
     * @param {?} cartService
     */
    constructor(checkoutService, userService, cartService) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(tap(selected => {
            if (selected === null) {
                this.checkoutService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.userService
            .getCountry(this.deliveryAddress.country.isocode)
            .pipe(tap(country => {
            if (country === null) {
                this.userService.loadDeliveryCountries();
            }
        }));
    }
    /**
     * @param {?} countryName
     * @return {?}
     */
    getShippingAddressCard(countryName) {
        if (!countryName) {
            countryName = this.deliveryAddress.country.isocode;
        }
        /** @type {?} */
        let region = '';
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
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getShippingMethodCard(deliveryMode) {
        if (deliveryMode) {
            return {
                title: 'Shipping Method',
                textBold: this.shippingMethod,
                text: [deliveryMode.description],
            };
        }
    }
    /**
     * @return {?}
     */
    getPaymentMethodCard() {
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
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.label.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"getShippingAddressCard((countryName$ | async)?.name)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- SHIPPING METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          [content]=\"getShippingMethodCard(deliveryMode$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card [content]=\"getPaymentMethodCard()\"></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.label.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.action.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-review-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.25rem 0)}.cx-review-summary{margin:var(--cx-margin,0);background-color:var(--cx-background-color,var(--cx-g-color-background))}.row{margin:var(--cx-margin,0)}.form-check{padding:var(--cx-padding,0);margin:var(--cx-margin,0)}.col-md-4{padding:var(--cx-padding,0)}.cx-review-cart-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,2.625rem 0 .5rem 0)}.cx-review-cart-heading{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,1.375rem 0);margin:var(--cx-margin,0);border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:991.98px){.cx-review-summary .cx-review-summary-card{background-color:#fff;border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-review-cart-heading{border-width:var(--cx-border-width,1px 0 0);max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 3.5rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}@media (max-width:767.98px){.cx-review-cart-heading{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,1.375rem 0 1.375rem 1.25rem)}.cx-review-cart-item .col-md-12{padding:var(--cx-padding,0)}}.cx-review-cart-item{padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-review-cart-item{border-style:var(--cx-border-style,solid);border-width:var(--cx-border-width,1px 0 0);border-color:var(--cx-border-color,var(--cx-g-color-light))}:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}@media (max-width:991.98px){.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}@media (max-width:991.98px){.col-md-12{padding:var(--cx-padding,0 3.5rem 3.5rem 3.5rem)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 1.25rem 1.25rem 1.25rem)}}"]
            }] }
];
/** @nocollapse */
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: UserService },
    { type: CartService }
];
ReviewSubmitComponent.propDecorators = {
    deliveryAddress: [{ type: Input }],
    shippingMethod: [{ type: Input }],
    paymentDetails: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZUFBZSxFQUVmLFdBQVcsRUFDWCxXQUFXLEdBTVosTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVckMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBYWhDLFlBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsV0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQ3RFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUNoRCxJQUFJLENBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxXQUFtQjtRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDcEQ7O1lBRUcsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN0RSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyRDtRQUVELE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUTtZQUN0RSxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO2dCQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVztnQkFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxZQUEwQjtRQUM5QyxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPO2dCQUNMLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDN0IsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQzthQUNqQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUI7WUFDL0MsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVTtnQkFDOUIsV0FBVztvQkFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7b0JBQy9CLEdBQUc7b0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVO2FBQ2pDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdTJEQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBckJDLGVBQWU7WUFHZixXQUFXO1lBRFgsV0FBVzs7OzhCQXFCVixLQUFLOzZCQUVMLEtBQUs7NkJBRUwsS0FBSzs7OztJQUpOLGdEQUN5Qjs7SUFDekIsK0NBQ3VCOztJQUN2QiwrQ0FDK0I7O0lBRS9CLHlDQUFtQzs7SUFDbkMsc0NBQXdCOztJQUN4Qiw4Q0FBd0M7O0lBQ3hDLDZDQUFrQzs7Ozs7SUFHaEMsZ0RBQTBDOzs7OztJQUMxQyw0Q0FBa0M7Ozs7O0lBQ2xDLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDaGVja291dFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbiAgT3JkZXJFbnRyeSxcbiAgQ2FydCxcbiAgRGVsaXZlcnlNb2RlLFxuICBDb3VudHJ5LFxuICBQYXltZW50RGV0YWlscyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV2aWV3LXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXZpZXctc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3U3VibWl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuICBASW5wdXQoKVxuICBzaGlwcGluZ01ldGhvZDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG5cbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGRlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgY291bnRyeU5hbWUkOiBPYnNlcnZhYmxlPENvdW50cnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJpZXMoKTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCkucGlwZShcbiAgICAgIHRhcChzZWxlY3RlZCA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY291bnRyeU5hbWUkID0gdGhpcy51c2VyU2VydmljZVxuICAgICAgLmdldENvdW50cnkodGhpcy5kZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChjb3VudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChjb3VudHJ5TmFtZTogc3RyaW5nKTogQ2FyZCB7XG4gICAgaWYgKCFjb3VudHJ5TmFtZSkge1xuICAgICAgY291bnRyeU5hbWUgPSB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGU7XG4gICAgfVxuXG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmICh0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiYgdGhpcy5kZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IHRoaXMuZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwIFRvJyxcbiAgICAgIHRleHRCb2xkOlxuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzLmxpbmUyLFxuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGNvdW50cnlOYW1lLFxuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nTWV0aG9kQ2FyZChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IENhcmQge1xuICAgIGlmIChkZWxpdmVyeU1vZGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAnU2hpcHBpbmcgTWV0aG9kJyxcbiAgICAgICAgdGV4dEJvbGQ6IHRoaXMuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgIHRleHQ6IFtkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb25dLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kQ2FyZCgpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdQYXltZW50JyxcbiAgICAgIHRleHRCb2xkOiB0aGlzLnBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICB0aGlzLnBheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsXG4gICAgICAgICdFeHBpcmVzOiAnICtcbiAgICAgICAgICB0aGlzLnBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoICtcbiAgICAgICAgICAnLycgK1xuICAgICAgICAgIHRoaXMucGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19