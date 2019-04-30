/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap, switchMap, map } from 'rxjs/operators';
import { CheckoutService, CartService, UserService, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNMLGVBQWUsRUFFZixXQUFXLEVBQ1gsV0FBVyxHQU1aLE1BQU0saUJBQWlCLENBQUM7QUFHekI7SUFhRSwrQkFDWSxlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixXQUF3QjtRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQzs7OztJQUVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLENBQUMsSUFBSSxDQUN0RSxHQUFHLENB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ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG4gIFVJT3JkZXJFbnRyeSxcbiAgVUlDYXJ0LFxuICBEZWxpdmVyeU1vZGUsXG4gIENvdW50cnksXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxVSU9yZGVyRW50cnlbXT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPFVJQ2FydD47XG4gIGRlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcbiAgY291bnRyeU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGRlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8QWRkcmVzcz47XG4gIHBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuICAgIHRoaXMucGF5bWVudERldGFpbHMkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCkucGlwZShcbiAgICAgIHRhcCgoc2VsZWN0ZWQ6IERlbGl2ZXJ5TW9kZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNvdW50cnlOYW1lJCA9IHRoaXMuZGVsaXZlcnlBZGRyZXNzJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChhZGRyZXNzOiBBZGRyZXNzKSA9PlxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldENvdW50cnkoYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUpXG4gICAgICApLFxuICAgICAgdGFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKGNvdW50cnk6IENvdW50cnkpID0+IGNvdW50cnkgJiYgY291bnRyeS5uYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXRTaGlwcGluZ0FkZHJlc3NDYXJkKGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcywgY291bnRyeU5hbWU6IHN0cmluZyk6IENhcmQge1xuICAgIGlmICghY291bnRyeU5hbWUpIHtcbiAgICAgIGNvdW50cnlOYW1lID0gZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICB9XG5cbiAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgaWYgKGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiYgZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICByZWdpb24gPSBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1NoaXAgVG8nLFxuICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5QWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWUsXG4gICAgICB0ZXh0OiBbXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMSxcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUyLFxuICAgICAgICBkZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5waG9uZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBDYXJkIHtcbiAgICBpZiAoZGVsaXZlcnlNb2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ1NoaXBwaW5nIE1ldGhvZCcsXG4gICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgdGV4dDogW2RlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbl0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGdldFBheW1lbnRNZXRob2RDYXJkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ1BheW1lbnQnLFxuICAgICAgdGV4dEJvbGQ6IHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLFxuICAgICAgICAnRXhwaXJlczogJyArXG4gICAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGggK1xuICAgICAgICAgICcvJyArXG4gICAgICAgICAgcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19