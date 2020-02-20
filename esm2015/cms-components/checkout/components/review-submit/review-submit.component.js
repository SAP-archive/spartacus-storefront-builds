import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Address, Cart, CartService, CheckoutDeliveryService, CheckoutPaymentService, Country, DeliveryMode, OrderEntry, PaymentDetails, TranslationService, UserAddressService, PromotionResult, PromotionLocation, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CheckoutStepType } from '../../model/index';
import { CheckoutConfigService } from '../../services/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
let ReviewSubmitComponent = class ReviewSubmitComponent {
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService, promotionService) {
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
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap((selected) => {
            if (selected === null) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((address) => this.userAddressService.getCountry(address.country.isocode)), tap((country) => {
            if (country === null) {
                this.userAddressService.loadDeliveryCountries();
            }
        }), map((country) => country && country.name));
    }
    getShippingAddressCard(deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(([textTitle]) => {
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
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
        }));
    }
    getDeliveryModeCard(deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
    }
    getPaymentMethodCard(paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map(([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        }));
    }
    getCheckoutStepUrl(stepType) {
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            const step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    }
};
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: CartService },
    { type: TranslationService },
    { type: CheckoutConfigService },
    { type: PromotionService }
];
ReviewSubmitComponent = __decorate([
    Component({
        selector: 'cx-review-submit',
        template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReviewSubmitComponent);
export { ReviewSubmitComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLE9BQU8sRUFDUCxJQUFJLEVBQ0osV0FBVyxFQUNYLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsT0FBTyxFQUNQLFlBQVksRUFDWixVQUFVLEVBQ1YsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFPM0YsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFrRGhDLFlBQ1ksdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsV0FBd0IsRUFDeEIsV0FBK0IsRUFDL0IscUJBQTZDLEVBQzdDLGdCQUFtQztRQU5uQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFv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O1lBQzlCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEUsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQWpIc0MsdUJBQXVCO1lBQ3hCLHNCQUFzQjtZQUMxQixrQkFBa0I7WUFDekIsV0FBVztZQUNYLGtCQUFrQjtZQUNQLHFCQUFxQjtZQUMxQixnQkFBZ0I7O0FBekRwQyxxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QiwweEhBQTZDO1FBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxxQkFBcUIsQ0FvS2pDO1NBcEtZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDb3VudHJ5LFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyRW50cnksXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJBZGRyZXNzU2VydmljZSxcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXZpZXctc3VibWl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3U3VibWl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2hlY2tvdXRTdGVwVHlwZSA9IENoZWNrb3V0U3RlcFR5cGU7XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBkZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT47XG4gIGNvdW50cnlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBkZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuICBwYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSwgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjEuMFxuICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojNDEyMSBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6IzQxMjEpIERlcHJlY2F0ZWQgc2luY2UgMS4xLjBcbiAgICovXG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U/OiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyaWVzKCk7XG4gICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MkID0gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLnBheW1lbnREZXRhaWxzJCA9IHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcblxuICAgIHRoaXMuZGVsaXZlcnlNb2RlJCA9IHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChzZWxlY3RlZDogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuY291bnRyeU5hbWUkID0gdGhpcy5kZWxpdmVyeUFkZHJlc3MkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGFkZHJlc3M6IEFkZHJlc3MpID0+XG4gICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmdldENvdW50cnkoYWRkcmVzcy5jb3VudHJ5Lmlzb2NvZGUpXG4gICAgICApLFxuICAgICAgdGFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiBjb3VudHJ5ICYmIGNvdW50cnkubmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChcbiAgICBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MsXG4gICAgY291bnRyeU5hbWU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHJ5TmFtZSkge1xuICAgICAgICAgIGNvdW50cnlOYW1lID0gZGVsaXZlcnlBZGRyZXNzLmNvdW50cnkuaXNvY29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdpb24gPSAnJztcbiAgICAgICAgaWYgKGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiYgZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlKSB7XG4gICAgICAgICAgcmVnaW9uID0gZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXREZWxpdmVyeU1vZGVDYXJkKGRlbGl2ZXJ5TW9kZTogRGVsaXZlcnlNb2RlKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0U2hpcHBpbmcuc2hpcHBpbmdNZXRob2QnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IGRlbGl2ZXJ5TW9kZS5uYW1lLFxuICAgICAgICAgIHRleHQ6IFtkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb25dLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0UGF5bWVudE1ldGhvZENhcmQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnBheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogcGF5bWVudERldGFpbHMuZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IHBheW1lbnREZXRhaWxzLmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0RXhwaXJlc10pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICB0ZXh0OiBbcGF5bWVudERldGFpbHMuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2hlY2tvdXRTdGVwVXJsKHN0ZXBUeXBlOiBDaGVja291dFN0ZXBUeXBlKTogc3RyaW5nIHtcbiAgICAvLyBUT0RPKGlzc3VlOiM0MTIxKSBEZXByZWNhdGVkIHNpbmNlIDEuMS4wXG4gICAgaWYgKHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKHN0ZXBUeXBlKTtcblxuICAgICAgcmV0dXJuIHN0ZXAgJiYgc3RlcC5yb3V0ZU5hbWU7XG4gICAgfVxuICB9XG59XG4iXX0=