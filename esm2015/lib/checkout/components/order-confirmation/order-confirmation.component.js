/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
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
    getDeliveryModeCardContent(deliveryMode) {
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
                template: "<div class=\"cx-page\" *ngIf=\"(order$ | async) as order\">\n  <header class=\"cx-page__header\">\n    <h1 class=\"cx-page__title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation\">\n    <div class=\"cx-order-confirmation-message\">\n      <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n      <p>\n        {{\n          'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate\n        }}\n      </p>\n      <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n    </div>\n\n    <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n\n    <div class=\"cx-order-review-summary\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getAddressCardContent(order.deliveryAddress)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"\n                  getBillingAddressCardContent(order.paymentInfo.billingAddress)\n                \"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getDeliveryModeCardContent(order.deliveryMode)\"\n              ></cx-card>\n            </div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-4 col-lg-3\">\n            <div class=\"summary-card\">\n              <cx-card\n                [content]=\"getPaymentInfoCardContent(order.paymentInfo)\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-order-items container\">\n      <h4 class=\"cx-order-items-header\">\n        {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n      </h4>\n      <cx-cart-item-list\n        [items]=\"order.entries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n\n    <div class=\"cx-order-summary container\">\n      <div class=\"row justify-content-end\">\n        <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n          <cx-order-summary [cart]=\"order\"></cx-order-summary>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsZUFBZSxHQUloQixNQUFNLGlCQUFpQixDQUFDO0FBU3pCLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsZUFBd0I7UUFDNUMsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLGVBQWUsQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUNwRSxJQUFJLEVBQUU7Z0JBQ0osZUFBZSxDQUFDLEtBQUs7Z0JBQ3JCLGVBQWUsQ0FBQyxLQUFLO2dCQUNyQixHQUFHLGVBQWUsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQ3pELGVBQWUsQ0FBQyxVQUNsQixFQUFFO2dCQUNGLGVBQWUsQ0FBQyxLQUFLO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMEJBQTBCLENBQUMsWUFBMEI7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLFlBQVksQ0FBQyxJQUFJO1lBQzNCLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7U0FDakMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNEJBQTRCLENBQUMsY0FBdUI7UUFDbEQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUNsRSxJQUFJLEVBQUU7Z0JBQ0osY0FBYyxDQUFDLEtBQUs7Z0JBQ3BCLGNBQWMsQ0FBQyxLQUFLO2dCQUNwQixHQUFHLGNBQWMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQ3ZELGNBQWMsQ0FBQyxVQUNqQixFQUFFO2dCQUNGLGNBQWMsQ0FBQyxLQUFLO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsV0FBMkI7UUFDbkQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxXQUFXLENBQUMsaUJBQWlCO1lBQ3ZDLElBQUksRUFBRTtnQkFDSixXQUFXLENBQUMsVUFBVTtnQkFDdEIsWUFBWSxXQUFXLENBQUMsV0FBVyxNQUFNLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDbEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxpZ0ZBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVpDLGVBQWU7Ozs7SUFjZiw0Q0FBMEI7Ozs7O0lBRWQscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyLFxuICBQYXltZW50RGV0YWlscyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gIH1cblxuICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU2hpcCBUbycsXG4gICAgICB0ZXh0Qm9sZDogYCR7ZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZX0gJHtkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUxLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgIGAke2RlbGl2ZXJ5QWRkcmVzcy50b3dufSwgJHtkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlfSwgJHtcbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucG9zdGFsQ29kZVxuICAgICAgICB9YCxcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZENvbnRlbnQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwcGluZyBNZXRob2QnLFxuICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5TW9kZS5uYW1lLFxuICAgICAgdGV4dDogW2RlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbl0sXG4gICAgfTtcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdCaWxsIFRvJyxcbiAgICAgIHRleHRCb2xkOiBgJHtiaWxsaW5nQWRkcmVzcy5maXJzdE5hbWV9ICR7YmlsbGluZ0FkZHJlc3MubGFzdE5hbWV9YCxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgYmlsbGluZ0FkZHJlc3MubGluZTEsXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLmxpbmUyLFxuICAgICAgICBgJHtiaWxsaW5nQWRkcmVzcy50b3dufSwgJHtiaWxsaW5nQWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGV9LCAke1xuICAgICAgICAgIGJpbGxpbmdBZGRyZXNzLnBvc3RhbENvZGVcbiAgICAgICAgfWAsXG4gICAgICAgIGJpbGxpbmdBZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0UGF5bWVudEluZm9DYXJkQ29udGVudChwYXltZW50SW5mbzogUGF5bWVudERldGFpbHMpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdQYXltZW50JyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50SW5mby5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgcGF5bWVudEluZm8uY2FyZE51bWJlcixcbiAgICAgICAgYEV4cGlyZXM6ICR7cGF5bWVudEluZm8uZXhwaXJ5TW9udGh9IC8gJHtwYXltZW50SW5mby5leHBpcnlZZWFyfWAsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==