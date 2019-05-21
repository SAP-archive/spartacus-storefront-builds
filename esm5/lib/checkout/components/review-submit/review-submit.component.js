/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CartService, CheckoutService, UserService, TranslationService, } from '@spartacus/core';
var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutService, userService, cartService, translation) {
        this.checkoutService = checkoutService;
        this.userService = userService;
        this.cartService = cartService;
        this.translation = translation;
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
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 1), textTitle = _b[0];
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            /** @type {?} */
            var region = '';
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
        }));
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
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
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
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        }));
    };
    ReviewSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-review-submit',
                    template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-address\">\n        <cx-card\n          [content]=\"\n            getShippingAddressCard(\n              deliveryAddress$ | async,\n              countryName$ | async\n            ) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-shipping\">\n        <cx-card\n          *ngIf=\"(deliveryMode$ | async) as deliveryMode\"\n          [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n        ></cx-card>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-card cx-review-card-payment\">\n        <cx-card\n          [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"(cart$ | async) as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"(entries$ | async) as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: UserService },
        { type: CartService },
        { type: TranslationService }
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
    /**
     * @type {?}
     * @private
     */
    ReviewSubmitComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9yZXZpZXctc3VibWl0L3Jldmlldy1zdWJtaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxXQUFXLEVBQ1gsZUFBZSxFQU1mLFdBQVcsRUFDWCxrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QjtJQWFFLCtCQUNZLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQzFCLFdBQStCO1FBSDdCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDdEMsQ0FBQzs7OztJQUVKLHdDQUFROzs7SUFBUjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFaEUs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QUMsV0FBVztnQkFDakMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxVQUFVO2FBQ2hDLENBQUM7U0FDSCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQXdCO2dCQUF4QiwwQkFBd0IsRUFBdkIsaUJBQVMsRUFBRSxtQkFBVztZQUMxQixPQUFPO2dCQUNMLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsY0FBYyxDQUFDLGlCQUFpQjtnQkFDMUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7YUFDL0MsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE3R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGlpRUFBNkM7b0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmQyxlQUFlO2dCQU1mLFdBQVc7Z0JBUFgsV0FBVztnQkFRWCxrQkFBa0I7O0lBa0hwQiw0QkFBQztDQUFBLEFBOUdELElBOEdDO1NBekdZLHFCQUFxQjs7O0lBQ2hDLHlDQUFtQzs7SUFDbkMsc0NBQXdCOztJQUN4Qiw4Q0FBd0M7O0lBQ3hDLDZDQUFpQzs7SUFDakMsaURBQXNDOztJQUN0QyxnREFBNEM7Ozs7O0lBRzFDLGdEQUEwQzs7Ozs7SUFDMUMsNENBQWtDOzs7OztJQUNsQyw0Q0FBa0M7Ozs7O0lBQ2xDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIENvdW50cnksXG4gIERlbGl2ZXJ5TW9kZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIENhcnQsXG4gIE9yZGVyRW50cnksXG4gIFVzZXJTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjb3VudHJ5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgcGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuICAgIHRoaXMucGF5bWVudERldGFpbHMkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCkucGlwZShcbiAgICAgIHRhcCgoc2VsZWN0ZWQ6IERlbGl2ZXJ5TW9kZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNvdW50cnlOYW1lJCA9IHRoaXMuZGVsaXZlcnlBZGRyZXNzJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChhZGRyZXNzOiBBZGRyZXNzKSA9PlxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldENvdW50cnkoYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUpXG4gICAgICApLFxuICAgICAgdGFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkRGVsaXZlcnlDb3VudHJpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKGNvdW50cnk6IENvdW50cnkpID0+IGNvdW50cnkgJiYgY291bnRyeS5uYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXRTaGlwcGluZ0FkZHJlc3NDYXJkKFxuICAgIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyxcbiAgICBjb3VudHJ5TmFtZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5zaGlwVG8nKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlXSkgPT4ge1xuICAgICAgICBpZiAoIWNvdW50cnlOYW1lKSB7XG4gICAgICAgICAgY291bnRyeU5hbWUgPSBkZWxpdmVyeUFkZHJlc3MuY291bnRyeS5pc29jb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgICAgICBpZiAoZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbiAmJiBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUpIHtcbiAgICAgICAgICByZWdpb24gPSBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgZGVsaXZlcnlBZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGNvdW50cnlOYW1lLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgICAgdGV4dDogW2RlbGl2ZXJ5TW9kZS5kZXNjcmlwdGlvbl0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kQ2FyZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0ucGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHRleHRFeHBpcmVzXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgIHRleHQ6IFtwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==