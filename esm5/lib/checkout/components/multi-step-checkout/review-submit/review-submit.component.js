/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, CheckoutService, UserService, } from '@spartacus/core';
import { map, switchMap, tap } from 'rxjs/operators';
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
        this.deliveryAddress$ = this.checkoutService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutService.getPaymentDetails();
        this.deliveryMode$ = this.checkoutService.getSelectedDeliveryMode().pipe(tap(function (selected) {
            if (selected === null) {
                _this.checkoutService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap(function (address) {
            return _this.userService.getCountry(address.country.isocode);
        }), tap(function (country) {
            if (country === null) {
                _this.userService.loadDeliveryCountries();
            }
        }), map(function (country) { return country && country.name; }));
    };
    /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getShippingAddressCard = /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    function (deliveryAddress, countryName) {
        if (!countryName) {
            countryName = deliveryAddress.country.isocode;
        }
        /** @type {?} */
        var region = '';
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
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getDeliveryModeCard = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        if (deliveryMode) {
            return {
                title: 'Shipping Method',
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }
    };
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getPaymentMethodCard = /**
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
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
    };
    ReviewSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-review-submit',
                    template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            )\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          [content]=\"getDeliveryModeCard(deliveryMode$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async)\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: UserService },
        { type: CartService }
    ]; };
    return ReviewSubmitComponent;
}());
export { ReviewSubmitComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUVMLFdBQVcsRUFDWCxlQUFlLEVBTWYsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckQ7SUFhRSwrQkFDWSxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QjtRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQzs7OztJQUVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLENBQUMsSUFBSSxDQUN0RSxHQUFHLENB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ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgQ291bnRyeSxcbiAgRGVsaXZlcnlNb2RlLFxuICBQYXltZW50RGV0YWlscyxcbiAgVUlDYXJ0LFxuICBVSU9yZGVyRW50cnksXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV2aWV3LXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXZpZXctc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPFVJT3JkZXJFbnRyeVtdPjtcbiAgY2FydCQ6IE9ic2VydmFibGU8VUlDYXJ0PjtcbiAgZGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjb3VudHJ5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgcGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyaWVzKCk7XG4gICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5wYXltZW50RGV0YWlscyQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuXG4gICAgdGhpcy5kZWxpdmVyeU1vZGUkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKS5waXBlKFxuICAgICAgdGFwKChzZWxlY3RlZDogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY291bnRyeU5hbWUkID0gdGhpcy5kZWxpdmVyeUFkZHJlc3MkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGFkZHJlc3M6IEFkZHJlc3MpID0+XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0Q291bnRyeShhZGRyZXNzLmNvdW50cnkuaXNvY29kZSlcbiAgICAgICksXG4gICAgICB0YXAoKGNvdW50cnk6IENvdW50cnkpID0+IHtcbiAgICAgICAgaWYgKGNvdW50cnkgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoY291bnRyeTogQ291bnRyeSkgPT4gY291bnRyeSAmJiBjb3VudHJ5Lm5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc0NhcmQoZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzLCBjb3VudHJ5TmFtZTogc3RyaW5nKTogQ2FyZCB7XG4gICAgaWYgKCFjb3VudHJ5TmFtZSkge1xuICAgICAgY291bnRyeU5hbWUgPSBkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgIH1cblxuICAgIGxldCByZWdpb24gPSAnJztcbiAgICBpZiAoZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbiAmJiBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgIHJlZ2lvbiA9IGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnU2hpcCBUbycsXG4gICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgIHRleHQ6IFtcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUxLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGNvdW50cnlOYW1lLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IENhcmQge1xuICAgIGlmIChkZWxpdmVyeU1vZGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAnU2hpcHBpbmcgTWV0aG9kJyxcbiAgICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5TW9kZS5uYW1lLFxuICAgICAgICB0ZXh0OiBbZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZ2V0UGF5bWVudE1ldGhvZENhcmQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnUGF5bWVudCcsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIHBheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsXG4gICAgICAgICdFeHBpcmVzOiAnICtcbiAgICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCArXG4gICAgICAgICAgJy8nICtcbiAgICAgICAgICBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=