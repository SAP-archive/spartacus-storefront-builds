/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, } from '@spartacus/core';
export class OrderConfirmationComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    getAddressCardContent(deliveryAddress) {
        return {
            title: 'Ship To',
            textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                `${deliveryAddress.town}, ${deliveryAddress.country.isocode}, ${deliveryAddress.postalCode}`,
                deliveryAddress.phone,
            ],
        };
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getShippingCardContent(deliveryMode) {
        return {
            title: 'Shipping Method',
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        };
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return {
            title: 'Bill To',
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        };
    }
    /**
     * @param {?} paymentInfo
     * @return {?}
     */
    getPaymentInfoCardContent(paymentInfo) {
        return {
            title: 'Payment',
            textBold: paymentInfo.accountHolderName,
            text: [
                paymentInfo.cardNumber,
                `Expires: ${paymentInfo.expiryMonth} / ${paymentInfo.expiryYear}`,
            ],
        };
    }
}
OrderConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation',
                template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page__header\">\n    <h1 class=\"cx-page__title\">\n      {{ 'checkoutOrderConfirmation.label.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.label.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.label.invoiceHasBeenSentByEmail'\n            | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getShippingCardContent(order.deliveryMode)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo)\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.label.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-order-confirmation-message{text-align:var(--cx-text-align,center);padding:var(--cx-padding,2.5rem)}.cx-order-confirmation-message h2{font-weight:400}.cx-order-confirmation-message .btn-link{font-size:.875rem;font-weight:700;text-transform:var(--cx-text-transform,uppercase)}.cx-order-review-summary{background-color:var(--cx-background-color,var(--cx-g-color-background));border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-order-review-summary .container{padding:var(--cx-padding,0)}@media (max-width:991.98px){.cx-order-review-summary{background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-order-review-summary .container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0 1.25rem)}}@media (max-width:767.98px){.cx-order-review-summary .summary-card{background-color:var(--cx-background-color,var(--cx-g-color-inverse));border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light));margin:var(--cx-margin,.625rem 0)}.cx-order-review-summary .container{padding:var(--cx-padding,1.25rem)}.cx-order-items.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0)}}.cx-order-items-header{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);padding:var(--cx-padding,1.375rem 0);margin:var(--cx-margin,0);border-width:var(--cx-border-width,0 0 1px 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-order-summary{padding-right:var(--cx-padding,0)}@media (max-width:991.98px){.cx-order-items.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding:var(--cx-padding,0)}.cx-order-items-header{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-left:var(--cx-padding,2.5rem)}.cx-order-summary.container{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-right:var(--cx-padding,1.625rem)}}@media (max-width:767.98px){.cx-order-items-header{max-width:var(--cx-max-width,100%);min-width:var(--cx-min-width,100%);padding-left:var(--cx-padding,1rem)}.cx-order-summary.container{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
OrderConfirmationComponent.ctorParameters = () => [
    { type: CheckoutService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationComponent.prototype.checkoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixHQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsZUFBZSxHQUloQixNQUFNLGlCQUFpQixDQUFDO0FBWXpCLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsZUFBd0I7UUFDNUMsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLGVBQWUsQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUNwRSxJQUFJLEVBQUU7Z0JBQ0osZUFBZSxDQUFDLEtBQUs7Z0JBQ3JCLGVBQWUsQ0FBQyxLQUFLO2dCQUNyQixHQUFHLGVBQWUsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQ3pELGVBQWUsQ0FBQyxVQUNsQixFQUFFO2dCQUNGLGVBQWUsQ0FBQyxLQUFLO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsWUFBMEI7UUFDL0MsT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQzNCLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7U0FDakMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNEJBQTRCLENBQUMsY0FBdUI7UUFDbEQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUNsRSxJQUFJLEVBQUU7Z0JBQ0osY0FBYyxDQUFDLEtBQUs7Z0JBQ3BCLGNBQWMsQ0FBQyxLQUFLO2dCQUNwQixHQUFHLGNBQWMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQ3ZELGNBQWMsQ0FBQyxVQUNqQixFQUFFO2dCQUNGLGNBQWMsQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsV0FBMkI7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxXQUFXLENBQUMsaUJBQWlCO1lBQ3ZDLElBQUksRUFBRTtnQkFDSixXQUFXLENBQUMsVUFBVTtnQkFDdEIsWUFBWSxXQUFXLENBQUMsV0FBVyxNQUFNLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxraUZBQWtEO2dCQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFmQyxlQUFlOzs7O0lBaUJmLDRDQUEwQjs7Ozs7SUFFZCxxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE9yZGVyLFxuICBDaGVja291dFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIFBheW1lbnREZXRhaWxzLFxuICBEZWxpdmVyeU1vZGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dERhdGEoKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NDYXJkQ29udGVudChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwIFRvJyxcbiAgICAgIHRleHRCb2xkOiBgJHtkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lfSAke2RlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZX1gLFxuICAgICAgdGV4dDogW1xuICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7ZGVsaXZlcnlBZGRyZXNzLnRvd259LCAke2RlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGV9LCAke1xuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgIH1gLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRTaGlwcGluZ0NhcmRDb250ZW50KGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU2hpcHBpbmcgTWV0aG9kJyxcbiAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgIHRleHQ6IFtkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb25dLFxuICAgIH07XG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc0NhcmRDb250ZW50KGJpbGxpbmdBZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQmlsbCBUbycsXG4gICAgICB0ZXh0Qm9sZDogYCR7YmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lfSAke2JpbGxpbmdBZGRyZXNzLmxhc3ROYW1lfWAsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUxLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5saW5lMixcbiAgICAgICAgYCR7YmlsbGluZ0FkZHJlc3MudG93bn0sICR7YmlsbGluZ0FkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtcbiAgICAgICAgICBiaWxsaW5nQWRkcmVzcy5wb3N0YWxDb2RlXG4gICAgICAgIH1gLFxuICAgICAgICBiaWxsaW5nQWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldFBheW1lbnRJbmZvQ2FyZENvbnRlbnQocGF5bWVudEluZm86IFBheW1lbnREZXRhaWxzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnUGF5bWVudCcsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudEluZm8uYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIHBheW1lbnRJbmZvLmNhcmROdW1iZXIsXG4gICAgICAgIGBFeHBpcmVzOiAke3BheW1lbnRJbmZvLmV4cGlyeU1vbnRofSAvICR7cGF5bWVudEluZm8uZXhwaXJ5WWVhcn1gLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=