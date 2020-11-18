import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, CheckoutCostCenterService, CheckoutDeliveryService, CheckoutPaymentService, PaymentTypeService, PromotionLocation, TranslationService, UserAddressService, UserCostCenterService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import { checkoutPaymentSteps, checkoutShippingSteps, } from '../../model/checkout-step.model';
import { CheckoutStepType } from '../../model/index';
import { CheckoutStepService } from '../../services/index';
export class ReviewSubmitComponent {
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, activeCartService, translation, promotionService, checkoutStepService, paymentTypeService, checkoutCostCenterService, userCostCenterService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.activeCartService = activeCartService;
        this.translation = translation;
        this.promotionService = promotionService;
        this.checkoutStepService = checkoutStepService;
        this.paymentTypeService = paymentTypeService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.userCostCenterService = userCostCenterService;
        this.iconTypes = ICON_TYPE;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    get cart$() {
        return this.activeCartService.getActive();
    }
    get entries$() {
        return this.activeCartService.getEntries();
    }
    get steps$() {
        return this.checkoutStepService.steps$;
    }
    get deliveryAddress$() {
        return this.checkoutDeliveryService.getDeliveryAddress();
    }
    get deliveryMode$() {
        return this.checkoutDeliveryService.getSelectedDeliveryMode().pipe(tap((selected) => {
            if (selected === null) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        }));
    }
    get paymentDetails$() {
        return this.checkoutPaymentService.getPaymentDetails();
    }
    get orderPromotions$() {
        return this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    get countryName$() {
        return this.deliveryAddress$.pipe(switchMap((address) => { var _a; return this.userAddressService.getCountry((_a = address === null || address === void 0 ? void 0 : address.country) === null || _a === void 0 ? void 0 : _a.isocode); }), tap((country) => {
            if (country === null) {
                this.userAddressService.loadDeliveryCountries();
            }
        }), map((country) => country && country.name));
    }
    get poNumber$() {
        return this.paymentTypeService.getPoNumber();
    }
    get paymentType$() {
        return this.paymentTypeService.getSelectedPaymentType();
    }
    get isAccountPayment$() {
        return this.paymentTypeService.isAccountPayment();
    }
    get costCenter$() {
        return this.userCostCenterService.getActiveCostCenters().pipe(filter((costCenters) => Boolean(costCenters)), switchMap((costCenters) => {
            return this.checkoutCostCenterService.getCostCenter().pipe(map((code) => {
                return costCenters.find((cc) => cc.code === code);
            }));
        }));
    }
    getShippingAddressCard(deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(([textTitle]) => {
            var _a;
            if (!countryName) {
                countryName = (_a = deliveryAddress === null || deliveryAddress === void 0 ? void 0 : deliveryAddress.country) === null || _a === void 0 ? void 0 : _a.isocode;
            }
            let region = '';
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
    }
    getCostCenterCard(costCenter) {
        return combineLatest([
            this.translation.translate('checkoutPO.costCenter'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: costCenter === null || costCenter === void 0 ? void 0 : costCenter.name,
                text: ['(' + (costCenter === null || costCenter === void 0 ? void 0 : costCenter.unit.name) + ')'],
            };
        }));
    }
    getDeliveryModeCard(deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(([textTitle]) => {
            var _a, _b;
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [
                    deliveryMode.description,
                    ((_a = deliveryMode.deliveryCost) === null || _a === void 0 ? void 0 : _a.formattedValue) ? (_b = deliveryMode.deliveryCost) === null || _b === void 0 ? void 0 : _b.formattedValue : '',
                ],
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
            this.translation.translate('paymentForm.billingAddress'),
        ]).pipe(map(([textTitle, textExpires, billingAddress]) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const region = ((_b = (_a = paymentDetails.billingAddress) === null || _a === void 0 ? void 0 : _a.region) === null || _b === void 0 ? void 0 : _b.isocode) ? ((_d = (_c = paymentDetails.billingAddress) === null || _c === void 0 ? void 0 : _c.region) === null || _d === void 0 ? void 0 : _d.isocode) + ', '
                : '';
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
                paragraphs: [
                    {
                        title: billingAddress + ':',
                        text: [
                            ((_e = paymentDetails.billingAddress) === null || _e === void 0 ? void 0 : _e.firstName) +
                                ' ' + ((_f = paymentDetails.billingAddress) === null || _f === void 0 ? void 0 : _f.lastName),
                            (_g = paymentDetails.billingAddress) === null || _g === void 0 ? void 0 : _g.line1,
                            ((_h = paymentDetails.billingAddress) === null || _h === void 0 ? void 0 : _h.town) +
                                ', ' +
                                region + ((_k = (_j = paymentDetails.billingAddress) === null || _j === void 0 ? void 0 : _j.country) === null || _k === void 0 ? void 0 : _k.isocode),
                            (_l = paymentDetails.billingAddress) === null || _l === void 0 ? void 0 : _l.postalCode,
                        ],
                    },
                ],
            };
        }));
    }
    getPoNumberCard(poNumber) {
        return combineLatest([
            this.translation.translate('checkoutReview.poNumber'),
            this.translation.translate('checkoutPO.noPoNumber'),
        ]).pipe(map(([textTitle, noneTextTitle]) => {
            return {
                title: textTitle,
                textBold: poNumber ? poNumber : noneTextTitle,
            };
        }));
    }
    getPaymentTypeCard(paymentType) {
        return combineLatest([
            this.translation.translate('checkoutProgress.methodOfPayment'),
            this.translation.translate('paymentTypes.paymentType', {
                context: paymentType,
            }),
        ]).pipe(map(([textTitle, paymentTypeTranslation]) => {
            return {
                title: textTitle,
                textBold: paymentTypeTranslation,
            };
        }));
    }
    getCheckoutStepUrl(stepType) {
        const step = this.checkoutStepService.getCheckoutStep(stepType);
        return step && step.routeName;
    }
    shippingSteps(steps) {
        return steps.filter((step) => checkoutShippingSteps.includes(step.type[0]));
    }
    paymentSteps(steps) {
        return steps.filter((step) => checkoutPaymentSteps.includes(step.type[0]));
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n\n  <div class=\"cx-review-summary row\">\n    <ng-container *ngIf=\"(steps$ | async).slice(0, -1) as steps\">\n      <div class=\"col-md-12 col-lg-6 col-xl-6 cx-review-payment-col\">\n        <ng-container *ngFor=\"let step of paymentSteps(steps)\">\n          <ng-container [ngSwitch]=\"step.type[0]\">\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_TYPE\">\n              <ng-container *ngTemplateOutlet=\"poNumber\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_TYPE\">\n              <ng-container *ngTemplateOutlet=\"paymentType\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.PAYMENT_DETAILS\">\n              <ng-container *ngTemplateOutlet=\"paymentMethod\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.SHIPPING_ADDRESS\">\n              <ng-container *ngTemplateOutlet=\"costCenter\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"col-md-12 col-lg-6 col-xl-6 cx-review-shipping-col\">\n        <ng-container *ngFor=\"let step of shippingSteps(steps)\">\n          <ng-container [ngSwitch]=\"step.type[0]\">\n            <ng-container *ngSwitchCase=\"checkoutStepType.SHIPPING_ADDRESS\">\n              <ng-container *ngTemplateOutlet=\"shippingAddress\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"checkoutStepType.DELIVERY_MODE\">\n              <ng-container *ngTemplateOutlet=\"deliveryMode\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n\n  <!-- PO NUMBER SECTION -->\n  <ng-template #poNumber>\n    <div class=\"cx-review-summary-card\">\n      <cx-card [content]=\"getPoNumberCard(poNumber$ | async) | async\"></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_TYPE)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- PAYMENT TYPE SECTION -->\n  <ng-template #paymentType>\n    <div class=\"cx-review-summary-card\">\n      <cx-card\n        [content]=\"getPaymentTypeCard(paymentType$ | async) | async\"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_TYPE)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- COST CENTER SECTION -->\n  <ng-template #costCenter>\n    <ng-container *ngIf=\"isAccountPayment$ | async\">\n      <div class=\"cx-review-summary-card\">\n        <cx-card\n          [content]=\"getCostCenterCard(costCenter$ | async) | async\"\n        ></cx-card>\n        <div class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n          ></a>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n\n  <!-- SHIPPING ADDRESS SECTION -->\n  <ng-template #shippingAddress>\n    <div class=\"cx-review-summary-card cx-review-card-address\">\n      <cx-card\n        *ngIf=\"deliveryAddress$ | async as deliveryAddress\"\n        [content]=\"\n          getShippingAddressCard(deliveryAddress, countryName$ | async) | async\n        \"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            {\n              cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n            } | cxUrl\n          \"\n          ><cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon\n        ></a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- DELIVERY MODE SECTION -->\n  <ng-template #deliveryMode>\n    <div class=\"cx-review-summary-card cx-review-card-shipping\">\n      <cx-card\n        *ngIf=\"deliveryMode$ | async as deliveryMode\"\n        [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n      ></cx-card>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n              | cxUrl\n          \"\n        >\n          <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n        </a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- PAYMENT METHOD SECTION -->\n  <ng-template #paymentMethod>\n    <div class=\"cx-review-summary-card cx-review-card-payment\">\n      <div>\n        <cx-card\n          *ngIf=\"paymentDetails$ | async as paymentDetails\"\n          [content]=\"getPaymentMethodCard(paymentDetails) | async\"\n        ></cx-card>\n      </div>\n      <div class=\"cx-review-summary-edit-step\">\n        <a\n          [routerLink]=\"\n            { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n              | cxUrl\n          \"\n        >\n          <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n        </a>\n      </div>\n    </div>\n  </ng-template>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: ActiveCartService },
    { type: TranslationService },
    { type: PromotionService },
    { type: CheckoutStepService },
    { type: PaymentTypeService },
    { type: CheckoutCostCenterService },
    { type: UserCostCenterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsaUJBQWlCLEVBR2pCLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBTXRCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFFakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsR0FFdEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQ1ksdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsaUJBQW9DLEVBQ3BDLFdBQStCLEVBQy9CLGdCQUFrQyxFQUNsQyxtQkFBd0MsRUFD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SyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7YUFDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBMEI7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBcUI7UUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFxQjtRQUNoQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFwUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGcrTUFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUEvQkMsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQVV0QixrQkFBa0I7WUFmbEIsaUJBQWlCO1lBY2pCLGtCQUFrQjtZQU9YLGdCQUFnQjtZQVFoQixtQkFBbUI7WUFsQjFCLGtCQUFrQjtZQVJsQix5QkFBeUI7WUFhekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENhcnQsXG4gIENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDb3N0Q2VudGVyLFxuICBDb3VudHJ5LFxuICBEZWxpdmVyeU1vZGUsXG4gIE9yZGVyRW50cnksXG4gIFBheW1lbnREZXRhaWxzLFxuICBQYXltZW50VHlwZVNlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlckFkZHJlc3NTZXJ2aWNlLFxuICBVc2VyQ29zdENlbnRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQge1xuICBjaGVja291dFBheW1lbnRTdGVwcyxcbiAgY2hlY2tvdXRTaGlwcGluZ1N0ZXBzLFxuICBDaGVja291dFN0ZXAsXG59IGZyb20gJy4uLy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldmlldy1zdWJtaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNoZWNrb3V0U3RlcFR5cGUgPSBDaGVja291dFN0ZXBUeXBlO1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBheW1lbnRUeXBlU2VydmljZTogUGF5bWVudFR5cGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlOiBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyQ29zdENlbnRlclNlcnZpY2U6IFVzZXJDb3N0Q2VudGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGNhcnQkKCk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG5cbiAgZ2V0IGVudHJpZXMkKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0RW50cmllcygpO1xuICB9XG5cbiAgZ2V0IHN0ZXBzJCgpOiBPYnNlcnZhYmxlPENoZWNrb3V0U3RlcFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5zdGVwcyQ7XG4gIH1cblxuICBnZXQgZGVsaXZlcnlBZGRyZXNzJCgpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgfVxuXG4gIGdldCBkZWxpdmVyeU1vZGUkKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKS5waXBlKFxuICAgICAgdGFwKChzZWxlY3RlZDogRGVsaXZlcnlNb2RlKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2UubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBheW1lbnREZXRhaWxzJCgpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5nZXRQYXltZW50RGV0YWlscygpO1xuICB9XG5cbiAgZ2V0IG9yZGVyUHJvbW90aW9ucyQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKHRoaXMucHJvbW90aW9uTG9jYXRpb24pO1xuICB9XG5cbiAgZ2V0IGNvdW50cnlOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoYWRkcmVzczogQWRkcmVzcykgPT5cbiAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UuZ2V0Q291bnRyeShhZGRyZXNzPy5jb3VudHJ5Py5pc29jb2RlKVxuICAgICAgKSxcbiAgICAgIHRhcCgoY291bnRyeTogQ291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWREZWxpdmVyeUNvdW50cmllcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoY291bnRyeTogQ291bnRyeSkgPT4gY291bnRyeSAmJiBjb3VudHJ5Lm5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBwb051bWJlciQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0UG9OdW1iZXIoKTtcbiAgfVxuXG4gIGdldCBwYXltZW50VHlwZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuZ2V0U2VsZWN0ZWRQYXltZW50VHlwZSgpO1xuICB9XG5cbiAgZ2V0IGlzQWNjb3VudFBheW1lbnQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5pc0FjY291bnRQYXltZW50KCk7XG4gIH1cblxuICBnZXQgY29zdENlbnRlciQoKTogT2JzZXJ2YWJsZTxDb3N0Q2VudGVyPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckNvc3RDZW50ZXJTZXJ2aWNlLmdldEFjdGl2ZUNvc3RDZW50ZXJzKCkucGlwZShcbiAgICAgIGZpbHRlcigoY29zdENlbnRlcnMpID0+IEJvb2xlYW4oY29zdENlbnRlcnMpKSxcbiAgICAgIHN3aXRjaE1hcCgoY29zdENlbnRlcnMpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyKCkucGlwZShcbiAgICAgICAgICBtYXAoKGNvZGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb3N0Q2VudGVycy5maW5kKChjYykgPT4gY2MuY29kZSA9PT0gY29kZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc0NhcmQoXG4gICAgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzLFxuICAgIGNvdW50cnlOYW1lOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2FkZHJlc3NDYXJkLnNoaXBUbycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIGlmICghY291bnRyeU5hbWUpIHtcbiAgICAgICAgICBjb3VudHJ5TmFtZSA9IGRlbGl2ZXJ5QWRkcmVzcz8uY291bnRyeT8uaXNvY29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdpb24gPSAnJztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyAmJlxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24gJiZcbiAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVnaW9uID0gZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbi5pc29jb2RlICsgJywgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlBZGRyZXNzLmZpcnN0TmFtZSArICcgJyArIGRlbGl2ZXJ5QWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTEsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MubGluZTIsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MudG93biArICcsICcgKyByZWdpb24gKyBjb3VudHJ5TmFtZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5wb3N0YWxDb2RlLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBob25lLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDb3N0Q2VudGVyQ2FyZChjb3N0Q2VudGVyOiBDb3N0Q2VudGVyKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UE8uY29zdENlbnRlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogY29zdENlbnRlcj8ubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbJygnICsgY29zdENlbnRlcj8udW5pdC5uYW1lICsgJyknXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldERlbGl2ZXJ5TW9kZUNhcmQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRTaGlwcGluZy5zaGlwcGluZ01ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogZGVsaXZlcnlNb2RlLm5hbWUsXG4gICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgZGVsaXZlcnlNb2RlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGVsaXZlcnlNb2RlLmRlbGl2ZXJ5Q29zdD8uZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgICAgPyBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50TWV0aG9kQ2FyZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0ucGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50RGV0YWlscy5leHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogcGF5bWVudERldGFpbHMuZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLmJpbGxpbmdBZGRyZXNzJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgdGV4dEV4cGlyZXMsIGJpbGxpbmdBZGRyZXNzXSkgPT4ge1xuICAgICAgICBjb25zdCByZWdpb24gPSBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ucmVnaW9uPy5pc29jb2RlXG4gICAgICAgICAgPyBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ucmVnaW9uPy5pc29jb2RlICsgJywgJ1xuICAgICAgICAgIDogJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgdGV4dDogW3BheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICBwYXJhZ3JhcGhzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBiaWxsaW5nQWRkcmVzcyArICc6JyxcbiAgICAgICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5maXJzdE5hbWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ubGluZTEsXG4gICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LnRvd24gK1xuICAgICAgICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICAgICAgICByZWdpb24gK1xuICAgICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LmNvdW50cnk/Lmlzb2NvZGUsXG4gICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LnBvc3RhbENvZGUsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQb051bWJlckNhcmQocG9OdW1iZXI6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFJldmlldy5wb051bWJlcicpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UE8ubm9Qb051bWJlcicpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIG5vbmVUZXh0VGl0bGVdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcG9OdW1iZXIgPyBwb051bWJlciA6IG5vbmVUZXh0VGl0bGUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRQYXltZW50VHlwZUNhcmQocGF5bWVudFR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFByb2dyZXNzLm1ldGhvZE9mUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRUeXBlcy5wYXltZW50VHlwZScsIHtcbiAgICAgICAgY29udGV4dDogcGF5bWVudFR5cGUsXG4gICAgICB9KSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCBwYXltZW50VHlwZVRyYW5zbGF0aW9uXSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgICAgdGV4dEJvbGQ6IHBheW1lbnRUeXBlVHJhbnNsYXRpb24sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDaGVja291dFN0ZXBVcmwoc3RlcFR5cGU6IENoZWNrb3V0U3RlcFR5cGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwKHN0ZXBUeXBlKTtcbiAgICByZXR1cm4gc3RlcCAmJiBzdGVwLnJvdXRlTmFtZTtcbiAgfVxuXG4gIHNoaXBwaW5nU3RlcHMoc3RlcHM6IENoZWNrb3V0U3RlcFtdKTogQ2hlY2tvdXRTdGVwW10ge1xuICAgIHJldHVybiBzdGVwcy5maWx0ZXIoKHN0ZXApID0+IGNoZWNrb3V0U2hpcHBpbmdTdGVwcy5pbmNsdWRlcyhzdGVwLnR5cGVbMF0pKTtcbiAgfVxuXG4gIHBheW1lbnRTdGVwcyhzdGVwczogQ2hlY2tvdXRTdGVwW10pOiBDaGVja291dFN0ZXBbXSB7XG4gICAgcmV0dXJuIHN0ZXBzLmZpbHRlcigoc3RlcCkgPT4gY2hlY2tvdXRQYXltZW50U3RlcHMuaW5jbHVkZXMoc3RlcC50eXBlWzBdKSk7XG4gIH1cbn1cbiJdfQ==