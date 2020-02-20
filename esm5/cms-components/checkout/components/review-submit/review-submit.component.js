import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Address, Cart, CartService, CheckoutDeliveryService, CheckoutPaymentService, Country, DeliveryMode, OrderEntry, PaymentDetails, TranslationService, UserAddressService, PromotionResult, PromotionLocation, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CheckoutStepType } from '../../model/index';
import { CheckoutConfigService } from '../../services/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService, promotionService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.translation = translation;
        this.checkoutConfigService = checkoutConfigService;
        this.promotionService = promotionService;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ReviewSubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap(function (selected) {
            if (selected === null) {
                _this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap(function (address) {
            return _this.userAddressService.getCountry(address.country.isocode);
        }), tap(function (country) {
            if (country === null) {
                _this.userAddressService.loadDeliveryCountries();
            }
        }), map(function (country) { return country && country.name; }));
    };
    ReviewSubmitComponent.prototype.getShippingAddressCard = function (deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
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
    ReviewSubmitComponent.prototype.getDeliveryModeCard = function (deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getPaymentMethodCard = function (paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getCheckoutStepUrl = function (stepType) {
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            var step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    };
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: UserAddressService },
        { type: CartService },
        { type: TranslationService },
        { type: CheckoutConfigService },
        { type: PromotionService }
    ]; };
    ReviewSubmitComponent = __decorate([
        Component({
            selector: 'cx-review-submit',
            template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReviewSubmitComponent);
    return ReviewSubmitComponent;
}());
export { ReviewSubmitComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLE9BQU8sRUFDUCxJQUFJLEVBQ0osV0FBVyxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsT0FBTyxFQUNQLFlBQVksRUFDWixVQUFVLEVBQ1YsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFPM0Y7SUFrREUsK0JBQ1ksdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIsV0FBK0IsRUFDL0IscUJBQTZDLEVBQzdDLGdCQUFtQztRQU5uQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtR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SUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEUsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQWhIb0MsdUJBQXVCO2dCQUN4QixzQkFBc0I7Z0JBQzFCLGtCQUFrQjtnQkFDekIsV0FBVztnQkFDWCxrQkFBa0I7Z0JBQ1AscUJBQXFCO2dCQUMxQixnQkFBZ0I7O0lBekRwQyxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QiwweEhBQTZDO1lBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxxQkFBcUIsQ0FvS2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXBLRCxJQW9LQztTQXBLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIENhcnQsXG4gIENhcnRTZXJ2aWNlLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ291bnRyeSxcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlckVudHJ5LFxuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV2aWV3LXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXZpZXctc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNoZWNrb3V0U3RlcFR5cGUgPSBDaGVja291dFN0ZXBUeXBlO1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+O1xuICBjb3VudHJ5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxBZGRyZXNzPjtcbiAgcGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS4xLjBcbiAgICogTk9URTogY2hlY2sgaXNzdWU6IzQxMjEgZm9yIG1vcmUgaW5mb1xuICAgKlxuICAgKiBUT0RPKGlzc3VlOiM0MTIxKSBEZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlPzogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlPzogUHJvbW90aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICAgIHRoaXMuZGVsaXZlcnlBZGRyZXNzJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5wYXltZW50RGV0YWlscyQgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKTtcbiAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG5cbiAgICB0aGlzLmRlbGl2ZXJ5TW9kZSQgPSB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlXG4gICAgICAuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoc2VsZWN0ZWQ6IERlbGl2ZXJ5TW9kZSkgPT4ge1xuICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLmNvdW50cnlOYW1lJCA9IHRoaXMuZGVsaXZlcnlBZGRyZXNzJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChhZGRyZXNzOiBBZGRyZXNzKSA9PlxuICAgICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRDb3VudHJ5KGFkZHJlc3MuY291bnRyeS5pc29jb2RlKVxuICAgICAgKSxcbiAgICAgIHRhcCgoY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoY291bnRyeTogQ291bnRyeSkgPT4gY291bnRyeSAmJiBjb3VudHJ5Lm5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc0NhcmQoXG4gICAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzLFxuICAgIGNvdW50cnlOYW1lOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIGlmICghY291bnRyeU5hbWUpIHtcbiAgICAgICAgICBjb3VudHJ5TmFtZSA9IGRlbGl2ZXJ5QWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVnaW9uID0gJyc7XG4gICAgICAgIGlmIChkZWxpdmVyeUFkZHJlc3MucmVnaW9uICYmIGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgICAgIHJlZ2lvbiA9IGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5QWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBkZWxpdmVyeUFkZHJlc3MubGFzdE5hbWUsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUxLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmxpbmUyLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgY291bnRyeU5hbWUsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucG9zdGFsQ29kZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5waG9uZSxcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFNoaXBwaW5nLnNoaXBwaW5nTWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRNZXRob2RDYXJkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXNdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgdGV4dDogW3BheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENoZWNrb3V0U3RlcFVybChzdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IHN0cmluZyB7XG4gICAgLy8gVE9ETyhpc3N1ZTojNDEyMSkgRGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgIGlmICh0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZSkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcChzdGVwVHlwZSk7XG5cbiAgICAgIHJldHVybiBzdGVwICYmIHN0ZXAucm91dGVOYW1lO1xuICAgIH1cbiAgfVxufVxuIl19