import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, Address, Cart, CheckoutCostCenterService, CheckoutDeliveryService, CheckoutPaymentService, CostCenter, Country, DeliveryMode, OrderEntry, PaymentDetails, PaymentTypeService, PromotionLocation, PromotionResult, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import { checkoutPaymentSteps, checkoutShippingSteps, } from '../../model/checkout-step.model';
import { CheckoutStepType } from '../../model/index';
import { CheckoutStepService } from '../../services/index';
var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutDeliveryService, checkoutPaymentService, userAddressService, activeCartService, translation, checkoutStepService, promotionService, paymentTypeService, checkoutCostCenterService, userCostCenterService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.activeCartService = activeCartService;
        this.translation = translation;
        this.checkoutStepService = checkoutStepService;
        this.promotionService = promotionService;
        this.paymentTypeService = paymentTypeService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.userCostCenterService = userCostCenterService;
        this.iconTypes = ICON_TYPE;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    Object.defineProperty(ReviewSubmitComponent.prototype, "cart$", {
        get: function () {
            return this.activeCartService.getActive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "entries$", {
        get: function () {
            return this.activeCartService.getEntries();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "steps$", {
        get: function () {
            return this.checkoutStepService.steps$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "deliveryAddress$", {
        get: function () {
            return this.checkoutDeliveryService.getDeliveryAddress();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "deliveryMode$", {
        get: function () {
            var _this = this;
            return this.checkoutDeliveryService.getSelectedDeliveryMode().pipe(tap(function (selected) {
                if (selected === null) {
                    _this.checkoutDeliveryService.loadSupportedDeliveryModes();
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "paymentDetails$", {
        get: function () {
            return this.checkoutPaymentService.getPaymentDetails();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "orderPromotions$", {
        get: function () {
            return this.promotionService.getOrderPromotions(this.promotionLocation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "countryName$", {
        get: function () {
            var _this = this;
            return this.deliveryAddress$.pipe(switchMap(function (address) { var _a; return _this.userAddressService.getCountry((_a = address === null || address === void 0 ? void 0 : address.country) === null || _a === void 0 ? void 0 : _a.isocode); }), tap(function (country) {
                if (country === null) {
                    _this.userAddressService.loadDeliveryCountries();
                }
            }), map(function (country) { return country && country.name; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "poNumber$", {
        get: function () {
            return this.paymentTypeService.getPoNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "paymentType$", {
        get: function () {
            return this.paymentTypeService.getSelectedPaymentType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "isAccountPayment$", {
        get: function () {
            return this.paymentTypeService.isAccountPayment();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewSubmitComponent.prototype, "costCenter$", {
        get: function () {
            var _this = this;
            return this.userCostCenterService.getActiveCostCenters().pipe(filter(function (costCenters) { return Boolean(costCenters); }), switchMap(function (costCenters) {
                return _this.checkoutCostCenterService.getCostCenter().pipe(map(function (code) {
                    return costCenters.find(function (cc) { return cc.code === code; });
                }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    ReviewSubmitComponent.prototype.getShippingAddressCard = function (deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            var _c;
            if (!countryName) {
                countryName = (_c = deliveryAddress === null || deliveryAddress === void 0 ? void 0 : deliveryAddress.country) === null || _c === void 0 ? void 0 : _c.isocode;
            }
            var region = '';
            if (deliveryAddress &&
                deliveryAddress.region &&
                deliveryAddress.region.isocode) {
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
    ReviewSubmitComponent.prototype.getCostCenterCard = function (costCenter) {
        return combineLatest([
            this.translation.translate('checkoutPO.costCenter'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: costCenter === null || costCenter === void 0 ? void 0 : costCenter.name,
                text: ['(' + (costCenter === null || costCenter === void 0 ? void 0 : costCenter.unit.name) + ')'],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getDeliveryModeCard = function (deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            var _c, _d;
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [
                    deliveryMode.description,
                    ((_c = deliveryMode.deliveryCost) === null || _c === void 0 ? void 0 : _c.formattedValue) ? (_d = deliveryMode.deliveryCost) === null || _d === void 0 ? void 0 : _d.formattedValue : '',
                ],
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
            this.translation.translate('paymentForm.billingAddress'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 3), textTitle = _b[0], textExpires = _b[1], billingAddress = _b[2];
            var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            var region = ((_d = (_c = paymentDetails.billingAddress) === null || _c === void 0 ? void 0 : _c.region) === null || _d === void 0 ? void 0 : _d.isocode) ? ((_f = (_e = paymentDetails.billingAddress) === null || _e === void 0 ? void 0 : _e.region) === null || _f === void 0 ? void 0 : _f.isocode) + ', '
                : '';
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
                paragraphs: [
                    {
                        title: billingAddress + ':',
                        text: [
                            ((_g = paymentDetails.billingAddress) === null || _g === void 0 ? void 0 : _g.firstName) +
                                ' ' + ((_h = paymentDetails.billingAddress) === null || _h === void 0 ? void 0 : _h.lastName),
                            (_j = paymentDetails.billingAddress) === null || _j === void 0 ? void 0 : _j.line1,
                            ((_k = paymentDetails.billingAddress) === null || _k === void 0 ? void 0 : _k.town) +
                                ', ' +
                                region + ((_m = (_l = paymentDetails.billingAddress) === null || _l === void 0 ? void 0 : _l.country) === null || _m === void 0 ? void 0 : _m.isocode),
                            (_o = paymentDetails.billingAddress) === null || _o === void 0 ? void 0 : _o.postalCode,
                        ],
                    },
                ],
            };
        }));
    };
    ReviewSubmitComponent.prototype.getPoNumberCard = function (poNumber) {
        return combineLatest([
            this.translation.translate('checkoutReview.poNumber'),
            this.translation.translate('checkoutPO.noPoNumber'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], noneTextTitle = _b[1];
            return {
                title: textTitle,
                textBold: poNumber ? poNumber : noneTextTitle,
            };
        }));
    };
    ReviewSubmitComponent.prototype.getPaymentTypeCard = function (paymentType) {
        return combineLatest([
            this.translation.translate('checkoutProgress.methodOfPayment'),
            this.translation.translate('paymentTypes.paymentType', {
                context: paymentType,
            }),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], paymentTypeTranslation = _b[1];
            return {
                title: textTitle,
                textBold: paymentTypeTranslation,
            };
        }));
    };
    ReviewSubmitComponent.prototype.getCheckoutStepUrl = function (stepType) {
        var step = this.checkoutStepService.getCheckoutStep(stepType);
        return step && step.routeName;
    };
    ReviewSubmitComponent.prototype.shippingSteps = function (steps) {
        return steps.filter(function (step) { return checkoutShippingSteps.includes(step.type[0]); });
    };
    ReviewSubmitComponent.prototype.paymentSteps = function (steps) {
        return steps.filter(function (step) { return checkoutPaymentSteps.includes(step.type[0]); });
    };
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: UserAddressService },
        { type: ActiveCartService },
        { type: TranslationService },
        { type: CheckoutStepService },
        { type: PromotionService },
        { type: PaymentTypeService },
        { type: CheckoutCostCenterService },
        { type: UserCostCenterService }
    ]; };
    ReviewSubmitComponent = __decorate([
        Component({
            selector: 'cx-review-submit',
            template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n\n  <div class=\"cx-review-summary row\">\n    <ng-container *ngIf=\"(steps$ | async).slice(0, -1) as steps\">\n      <div class=\"col-md-12 col-lg-6 col-xl-6 cx-review-payment-col\">\n        <ng-container *ngFor=\"let step of paymentSteps(steps)\">\n          <ng-container [ngSwitch]=\"step.type[0]\">\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_TYPE\">\n              <ng-container *ngTemplateOutlet=\"poNumber\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_TYPE\">\n              <ng-container *ngTemplateOutlet=\"paymentType\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_DETAILS\">\n              <ng-container *ngTemplateOutlet=\"paymentMethod\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.SHIPPING_ADDRESS\">\n              <ng-container *ngTemplateOutlet=\"costCenter\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"col-md-12 col-lg-6 col-xl-6 cx-review-shipping-col\">\n        <ng-container *ngFor=\"let step of shippingSteps(steps)\">\n          <ng-container [ngSwitch]=\"step.type[0]\">\n            <ng-container *ngSwitchCase=\"checkoutStepType.SHIPPING_ADDRESS\">\n              <ng-container *ngTemplateOutlet=\"shippingAddress\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.DELIVERY_MODE\">\n              <ng-container *ngTemplateOutlet=\"deliveryMode\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n\n  <!-- PO NUMBER SECTION -->\n  <ng-template #poNumber>\n    <div class=\"cx-review-summary-card\">\n      <cx-card [content]=\"getPoNumberCard(poNumber$ | async) | async\"></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_TYPE)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- PAYMENT TYPE SECTION -->\n  <ng-template #paymentType>\n    <div class=\"cx-review-summary-card\">\n      <cx-card\n        [content]=\"getPaymentTypeCard(paymentType$ | async) | async\"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_TYPE)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- COST CENTER SECTION -->\n  <ng-template #costCenter>\n    <ng-container *ngIf=\"isAccountPayment$ | async\">\n      <div class=\"cx-review-summary-card\">\n        <cx-card\n          [content]=\"getCostCenterCard(costCenter$ | async) | async\"\n        ></cx-card>\n        <div class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n          ></a>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n\n  <!-- SHIPPING ADDRESS SECTION -->\n  <ng-template #shippingAddress>\n    <div class=\"cx-review-summary-card cx-review-card-address\">\n      <cx-card\n        *ngIf=\"deliveryAddress$ | async as deliveryAddress\"\n        [content]=\"\n          getShippingAddressCard(deliveryAddress, countryName$ | async) | async\n        \"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- DELIVERY MODE SECTION -->\n  <ng-template #deliveryMode>\n    <div class=\"cx-review-summary-card cx-review-card-shipping\">\n      <cx-card\n        *ngIf=\"deliveryMode$ | async as deliveryMode\"\n        [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n              | cxUrl\n          \"\n        >\n          <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n        </a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- PAYMENT METHOD SECTION -->\n  <ng-template #paymentMethod>\n    <div class=\"cx-review-summary-card cx-review-card-payment\">\n      <div>\n        <cx-card\n          *ngIf=\"paymentDetails$ | async as paymentDetails\"\n          [content]=\"getPaymentMethodCard(paymentDetails) | async\"\n        ></cx-card>\n      </div>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n              | cxUrl\n          \"\n        >\n          <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n        </a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReviewSubmitComponent);
    return ReviewSubmitComponent;
}());
export { ReviewSubmitComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsSUFBSSxFQUNKLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNaLFVBQVUsRUFDVixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsR0FFdEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU8zRDtJQUtFLCtCQUNZLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLGlCQUFv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a0I7Z0JBQ25CLGlCQUFpQjtnQkFDdkIsa0JBQWtCO2dCQUNWLG1CQUFtQjtnQkFDdEIsZ0JBQWdCO2dCQUNkLGtCQUFrQjtnQkFDWCx5QkFBeUI7Z0JBQzdCLHFCQUFxQjs7SUFmN0MscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsZytNQUE2QztZQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBZ1BqQztJQUFELDRCQUFDO0NBQUEsQUFoUEQsSUFnUEM7U0FoUFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENhcnQsXG4gIENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDb3N0Q2VudGVyLFxuICBDb3VudHJ5LFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyRW50cnksXG4gIFBheW1lbnREZXRhaWxzLFxuICBQYXltZW50VHlwZVNlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29zdENlbnRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQge1xuICBjaGVja291dFBheW1lbnRTdGVwcyxcbiAgY2hlY2tvdXRTaGlwcGluZ1N0ZXBzLFxuICBDaGVja291dFN0ZXAsXG59IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNoZWNrb3V0U3RlcFR5cGUgPSBDaGVja291dFN0ZXBUeXBlO1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZTogUGF5bWVudFR5cGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlOiBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQ29zdENlbnRlclNlcnZpY2U6IFVzZXJDb3N0Q2VudGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGNhcnQkKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG5cbiAgZ2V0IGVudHJpZXMkKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICB9XG5cbiAgZ2V0IHN0ZXBzJCgpOiBPYnNlcnZhYmxlPENoZWNrb3V0U3RlcFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5zdGVwcyQ7XG4gIH1cblxuICBnZXQgZGVsaXZlcnlBZGRyZXNzJCgpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgfVxuXG4gIGdldCBkZWxpdmVyeU1vZGUkKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKS5waXBlKFxuICAgICAgdGFwKChzZWxlY3RlZDogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBheW1lbnREZXRhaWxzJCgpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuICB9XG5cbiAgZ2V0IG9yZGVyUHJvbW90aW9ucyQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKHRoaXMucHJvbW90aW9uTG9jYXRpb24pO1xuICB9XG5cbiAgZ2V0IGNvdW50cnlOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoYWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0Q291bnRyeShhZGRyZXNzPy5jb3VudHJ5Py5pc29jb2RlKVxuICAgICAgKSxcbiAgICAgIHRhcCgoY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoY291bnRyeTogQ291bnRyeSkgPT4gY291bnRyeSAmJiBjb3VudHJ5Lm5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBwb051bWJlciQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0UG9OdW1iZXIoKTtcbiAgfVxuXG4gIGdldCBwYXltZW50VHlwZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSgpO1xuICB9XG5cbiAgZ2V0IGlzQWNjb3VudFBheW1lbnQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5pc0FjY291bnRQYXltZW50KCk7XG4gIH1cblxuICBnZXQgY29zdENlbnRlciQoKTogT2JzZXJ2YWJsZTxDb3N0Q2VudGVyPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckNvc3RDZW50ZXJTZXJ2aWNlLmdldEFjdGl2ZUNvc3RDZW50ZXJzKCkucGlwZShcbiAgICAgIGZpbHRlcigoY29zdENlbnRlcnMpID0+IEJvb2xlYW4oY29zdENlbnRlcnMpKSxcbiAgICAgIHN3aXRjaE1hcCgoY29zdENlbnRlcnMpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyKCkucGlwZShcbiAgICAgICAgICBtYXAoKGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb3N0Q2VudGVycy5maW5kKChjYykgPT4gY2MuY29kZSA9PT0gY29kZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc0NhcmQoXG4gICAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzLFxuICAgIGNvdW50cnlOYW1lOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIGlmICghY291bnRyeU5hbWUpIHtcbiAgICAgICAgICBjb3VudHJ5TmFtZSA9IGRlbGl2ZXJ5QWRkcmVzcz8uY291bnRyeT8uaXNvY29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdpb24gPSAnJztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyAmJlxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiZcbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVnaW9uID0gZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDb3N0Q2VudGVyQ2FyZChjb3N0Q2VudGVyOiBDb3N0Q2VudGVyKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UE8uY29zdENlbnRlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogY29zdENlbnRlcj8ubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbJygnICsgY29zdENlbnRlcj8udW5pdC5uYW1lICsgJyknXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgICAgPyBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kQ2FyZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0ucGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLmJpbGxpbmdBZGRyZXNzJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXMsIGJpbGxpbmdBZGRyZXNzXSkgPT4ge1xuICAgICAgICBjb25zdCByZWdpb24gPSBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ucmVnaW9uPy5pc29jb2RlXG4gICAgICAgICAgPyBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ucmVnaW9uPy5pc29jb2RlICsgJywgJ1xuICAgICAgICAgIDogJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgdGV4dDogW3BheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICBwYXJhZ3JhcGhzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBiaWxsaW5nQWRkcmVzcyArICc6JyxcbiAgICAgICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5maXJzdE5hbWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ubGluZTEsXG4gICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LnRvd24gK1xuICAgICAgICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICAgICAgICByZWdpb24gK1xuICAgICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LmNvdW50cnk/Lmlzb2NvZGUsXG4gICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LnBvc3RhbENvZGUsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQb051bWJlckNhcmQocG9OdW1iZXI6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFJldmlldy5wb051bWJlcicpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UE8ubm9Qb051bWJlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIG5vbmVUZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcG9OdW1iZXIgPyBwb051bWJlciA6IG5vbmVUZXh0VGl0bGUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50VHlwZUNhcmQocGF5bWVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFByb2dyZXNzLm1ldGhvZE9mUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRUeXBlcy5wYXltZW50VHlwZScsIHtcbiAgICAgICAgY29udGV4dDogcGF5bWVudFR5cGUsXG4gICAgICB9KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCBwYXltZW50VHlwZVRyYW5zbGF0aW9uXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnRUeXBlVHJhbnNsYXRpb24sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDaGVja291dFN0ZXBVcmwoc3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKHN0ZXBUeXBlKTtcbiAgICByZXR1cm4gc3RlcCAmJiBzdGVwLnJvdXRlTmFtZTtcbiAgfVxuXG4gIHNoaXBwaW5nU3RlcHMoc3RlcHM6IENoZWNrb3V0U3RlcFtdKTogQ2hlY2tvdXRTdGVwW10ge1xuICAgIHJldHVybiBzdGVwcy5maWx0ZXIoKHN0ZXApID0+IGNoZWNrb3V0U2hpcHBpbmdTdGVwcy5pbmNsdWRlcyhzdGVwLnR5cGVbMF0pKTtcbiAgfVxuXG4gIHBheW1lbnRTdGVwcyhzdGVwczogQ2hlY2tvdXRTdGVwW10pOiBDaGVja291dFN0ZXBbXSB7XG4gICAgcmV0dXJuIHN0ZXBzLmZpbHRlcigoc3RlcCkgPT4gY2hlY2tvdXRQYXltZW50U3RlcHMuaW5jbHVkZXMoc3RlcC50eXBlWzBdKSk7XG4gIH1cbn1cbiJdfQ==