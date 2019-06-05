/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CartService, CheckoutDeliveryService, CheckoutPaymentService, TranslationService, UserAddressService, } from '@spartacus/core';
export class ReviewSubmitComponent {
    /**
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} userAddressService
     * @param {?} cartService
     * @param {?} translation
     */
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap((/**
         * @param {?} selected
         * @return {?}
         */
        (selected) => {
            if (selected === null) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        })));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((/**
         * @param {?} address
         * @return {?}
         */
        (address) => this.userAddressService.getCountry(address.country.isocode))), tap((/**
         * @param {?} country
         * @return {?}
         */
        (country) => {
            if (country === null) {
                this.userAddressService.loadDeliveryCountries();
            }
        })), map((/**
         * @param {?} country
         * @return {?}
         */
        (country) => country && country.name)));
    }
    /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    getShippingAddressCard(deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            /** @type {?} */
            let region = '';
            if (deliveryAddress.region && deliveryAddress.region.isocode) {
                region = deliveryAddress.region.isocode + ', ';
            }
            return {
                title: textTitle,
                textBold: deliveryAddress.firstName + ' ' + deliveryAddress.lastName,
                text: [
                    deliveryAddress.line1,
                    deliveryAddress.line2,
                    deliveryAddress.town + ', ' + region + countryName,
                    deliveryAddress.postalCode,
                    deliveryAddress.phone,
                ],
            };
        })));
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getDeliveryModeCard(deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        })));
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    getPaymentMethodCard(paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        })));
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            ) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          *ngIf=\"(deliveryMode$ | async) as deliveryMode\"\n          [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: CartService },
    { type: TranslationService }
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
    ReviewSubmitComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    ReviewSubmitComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBR0wsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFLdEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBUXpCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBUWhDLFlBQ1ksdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsV0FBd0IsRUFDMUIsV0FBK0I7UUFKN0IsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixD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QVMsQ0FBQyxxQkFBcUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxXQUFXO2dCQUNqQyxJQUFJLEVBQUUsY0FBYyxDQUFDLFVBQVU7YUFDaEMsQ0FBQztTQUNILENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUMvQixPQUFPO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsY0FBYyxDQUFDLGlCQUFpQjtnQkFDMUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7YUFDL0MsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFoSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGlpRUFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZkMsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQU10QixrQkFBa0I7WUFSbEIsV0FBVztZQU9YLGtCQUFrQjs7OztJQVdsQix5Q0FBbUM7O0lBQ25DLHNDQUF3Qjs7SUFDeEIsOENBQXdDOztJQUN4Qyw2Q0FBaUM7O0lBQ2pDLGlEQUFzQzs7SUFDdEMsZ0RBQTRDOzs7OztJQUcxQyx3REFBMEQ7Ozs7O0lBQzFELHVEQUF3RDs7Ozs7SUFDeEQsbURBQWdEOzs7OztJQUNoRCw0Q0FBa0M7Ozs7O0lBQ2xDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnQsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ291bnRyeSxcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlckVudHJ5LFxuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjb3VudHJ5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgcGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5wYXltZW50RGV0YWlscyQgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChzZWxlY3RlZDogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuY291bnRyeU5hbWUkID0gdGhpcy5kZWxpdmVyeUFkZHJlc3MkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGFkZHJlc3M6IEFkZHJlc3MpID0+XG4gICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldENvdW50cnkoYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUpXG4gICAgICApLFxuICAgICAgdGFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiBjb3VudHJ5ICYmIGNvdW50cnkubmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChcbiAgICBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MsXG4gICAgY291bnRyeU5hbWU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHJ5TmFtZSkge1xuICAgICAgICAgIGNvdW50cnlOYW1lID0gZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdpb24gPSAnJztcbiAgICAgICAgaWYgKGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiYgZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICAgICAgcmVnaW9uID0gZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkKGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0U2hpcHBpbmcuc2hpcHBpbmdNZXRob2QnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5TW9kZS5uYW1lLFxuICAgICAgICAgIHRleHQ6IFtkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb25dLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudE1ldGhvZENhcmQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0RXhwaXJlc10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICB0ZXh0OiBbcGF5bWVudERldGFpbHMuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=