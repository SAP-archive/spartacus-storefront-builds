/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, CheckoutService, UserService, } from '@spartacus/core';
import { map, switchMap, tap } from 'rxjs/operators';
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
        this.deliveryAddress$ = this.checkoutService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutService.getPaymentDetails();
        this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(tap((selected) => {
            if (selected === null) {
                this.checkoutService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((address) => this.userService.getCountry(address.country.isocode)), tap((country) => {
            if (country === null) {
                this.userService.loadDeliveryCountries();
            }
        }), map((country) => country && country.name));
    }
    /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    getShippingAddressCard(deliveryAddress, countryName) {
        if (!countryName) {
            countryName = deliveryAddress.country.isocode;
        }
        /** @type {?} */
        let region = '';
        if (deliveryAddress.region && deliveryAddress.region.isocode) {
            region = deliveryAddress.region.isocode + ', ';
        }
        return {
            title: 'Ship To',
            textBold: deliveryAddress.firstName + ' ' + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ', ' + region + countryName,
                deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        };
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getDeliveryModeCard(deliveryMode) {
        if (deliveryMode) {
            return {
                title: 'Shipping Method',
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    getPaymentMethodCard(paymentDetails) {
        return {
            title: 'Payment',
            textBold: paymentDetails.accountHolderName,
            text: [
                paymentDetails.cardNumber,
                'Expires: ' +
                    paymentDetails.expiryMonth +
                    '/' +
                    paymentDetails.expiryYear,
            ],
        };
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            )\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          [content]=\"getDeliveryModeCard(deliveryMode$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: UserService },
    { type: CartService }
];
if (false) {
    /** @type {?} */
    ReviewSubmitComponent.prototype.entries$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.cart$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryMode$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.countryName$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryAddress$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.paymentDetails$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUVMLFdBQVcsRUFDWCxlQUFlLEVBTWYsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBUWhDLFlBQ1ksZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsV0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWhFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLElBQUksQ0FDdEUsR0FBRyxDQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFO1lBQzdCLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ3JELEVBQ0QsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ3ZCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzFDO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLGVBQXdCLEVBQUUsV0FBbUI7UUFDbEUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDL0M7O1lBRUcsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUQsTUFBTSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNoRDtRQUVELE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDLFFBQVE7WUFDcEUsSUFBSSxFQUFFO2dCQUNKLGVBQWUsQ0FBQyxLQUFLO2dCQUNyQixlQUFlLENBQUMsS0FBSztnQkFDckIsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVc7Z0JBQ2xELGVBQWUsQ0FBQyxVQUFVO2dCQUMxQixlQUFlLENBQUMsS0FBSzthQUN0QjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLFlBQTBCO1FBQzVDLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsUUFBUSxFQUFFLFlBQVksQ0FBQyxJQUFJO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO2FBQ2pDLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsY0FBOEI7UUFDakQsT0FBTztZQUNMLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxjQUFjLENBQUMsaUJBQWlCO1lBQzFDLElBQUksRUFBRTtnQkFDSixjQUFjLENBQUMsVUFBVTtnQkFDekIsV0FBVztvQkFDVCxjQUFjLENBQUMsV0FBVztvQkFDMUIsR0FBRztvQkFDSCxjQUFjLENBQUMsVUFBVTthQUM1QjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUEzRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHE5REFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJDLGVBQWU7WUFNZixXQUFXO1lBUFgsV0FBVzs7OztJQW1CWCx5Q0FBcUM7O0lBQ3JDLHNDQUEwQjs7SUFDMUIsOENBQXdDOztJQUN4Qyw2Q0FBaUM7O0lBQ2pDLGlEQUFzQzs7SUFDdEMsZ0RBQTRDOzs7OztJQUcxQyxnREFBMEM7Ozs7O0lBQzFDLDRDQUFrQzs7Ozs7SUFDbEMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBEZWxpdmVyeU1vZGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBVSUNhcnQsXG4gIFVJT3JkZXJFbnRyeSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXZpZXctc3VibWl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3U3VibWl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8VUlPcmRlckVudHJ5W10+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxVSUNhcnQ+O1xuICBkZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gIGNvdW50cnlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBkZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBwYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJpZXMoKTtcbiAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLnBheW1lbnREZXRhaWxzJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCk7XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZSQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpLnBpcGUoXG4gICAgICB0YXAoKHNlbGVjdGVkOiBEZWxpdmVyeU1vZGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5jb3VudHJ5TmFtZSQgPSB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoYWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRDb3VudHJ5KGFkZHJlc3MuY291bnRyeS5pc29jb2RlKVxuICAgICAgKSxcbiAgICAgIHRhcCgoY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiBjb3VudHJ5ICYmIGNvdW50cnkubmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MsIGNvdW50cnlOYW1lOiBzdHJpbmcpOiBDYXJkIHtcbiAgICBpZiAoIWNvdW50cnlOYW1lKSB7XG4gICAgICBjb3VudHJ5TmFtZSA9IGRlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGU7XG4gICAgfVxuXG4gICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgIGlmIChkZWxpdmVyeUFkZHJlc3MucmVnaW9uICYmIGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgcmVnaW9uID0gZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdTaGlwIFRvJyxcbiAgICAgIHRleHRCb2xkOiBkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgZGVsaXZlcnlBZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgY291bnRyeU5hbWUsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkKGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogQ2FyZCB7XG4gICAgaWYgKGRlbGl2ZXJ5TW9kZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdTaGlwcGluZyBNZXRob2QnLFxuICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgIHRleHQ6IFtkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb25dLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kQ2FyZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdQYXltZW50JyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgcGF5bWVudERldGFpbHMuY2FyZE51bWJlcixcbiAgICAgICAgJ0V4cGlyZXM6ICcgK1xuICAgICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoICtcbiAgICAgICAgICAnLycgK1xuICAgICAgICAgIHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==