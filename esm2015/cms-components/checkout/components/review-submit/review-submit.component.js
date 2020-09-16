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
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, activeCartService, translation, checkoutStepService, promotionService, paymentTypeService, checkoutCostCenterService, userCostCenterService) {
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
    { type: CheckoutStepService },
    { type: PromotionService },
    { type: PaymentTypeService },
    { type: CheckoutCostCenterService },
    { type: UserCostCenterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsaUJBQWlCLEVBR2pCLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBTXRCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFFakIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsR0FFdEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQ1ksdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxrQkFBc0MsRUFDdEMsaUJBQW9DLEVBQ3BDLFdBQStCLEVBQy9CLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFD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SyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7YUFDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBMEI7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBcUI7UUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFxQjtRQUNoQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFwUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGcrTUFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUEvQkMsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQVV0QixrQkFBa0I7WUFmbEIsaUJBQWlCO1lBY2pCLGtCQUFrQjtZQWVYLG1CQUFtQjtZQVJuQixnQkFBZ0I7WUFWdkIsa0JBQWtCO1lBUmxCLHlCQUF5QjtZQWF6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2FydCxcbiAgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIENvc3RDZW50ZXIsXG4gIENvdW50cnksXG4gIERlbGl2ZXJ5TW9kZSxcbiAgT3JkZXJFbnRyeSxcbiAgUGF5bWVudERldGFpbHMsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gIFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7XG4gIGNoZWNrb3V0UGF5bWVudFN0ZXBzLFxuICBjaGVja291dFNoaXBwaW5nU3RlcHMsXG4gIENoZWNrb3V0U3RlcCxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV2aWV3LXN1Ym1pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXZpZXctc3VibWl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdENvbXBvbmVudCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgY2hlY2tvdXRTdGVwVHlwZSA9IENoZWNrb3V0U3RlcFR5cGU7XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcGF5bWVudFR5cGVTZXJ2aWNlOiBQYXltZW50VHlwZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2U6IENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJDb3N0Q2VudGVyU2VydmljZTogVXNlckNvc3RDZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBnZXQgY2FydCQoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gIH1cblxuICBnZXQgZW50cmllcyQoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5nZXRFbnRyaWVzKCk7XG4gIH1cblxuICBnZXQgc3RlcHMkKCk6IE9ic2VydmFibGU8Q2hlY2tvdXRTdGVwW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnN0ZXBzJDtcbiAgfVxuXG4gIGdldCBkZWxpdmVyeUFkZHJlc3MkKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLmdldERlbGl2ZXJ5QWRkcmVzcygpO1xuICB9XG5cbiAgZ2V0IGRlbGl2ZXJ5TW9kZSQoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpLnBpcGUoXG4gICAgICB0YXAoKHNlbGVjdGVkOiBEZWxpdmVyeU1vZGUpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZS5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgcGF5bWVudERldGFpbHMkKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCk7XG4gIH1cblxuICBnZXQgb3JkZXJQcm9tb3Rpb25zJCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnModGhpcy5wcm9tb3Rpb25Mb2NhdGlvbik7XG4gIH1cblxuICBnZXQgY291bnRyeU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsaXZlcnlBZGRyZXNzJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChhZGRyZXNzOiBBZGRyZXNzKSA9PlxuICAgICAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5nZXRDb3VudHJ5KGFkZHJlc3M/LmNvdW50cnk/Lmlzb2NvZGUpXG4gICAgICApLFxuICAgICAgdGFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbWFwKChjb3VudHJ5OiBDb3VudHJ5KSA9PiBjb3VudHJ5ICYmIGNvdW50cnkubmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBvTnVtYmVyJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5nZXRQb051bWJlcigpO1xuICB9XG5cbiAgZ2V0IHBheW1lbnRUeXBlJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5nZXRTZWxlY3RlZFBheW1lbnRUeXBlKCk7XG4gIH1cblxuICBnZXQgaXNBY2NvdW50UGF5bWVudCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmlzQWNjb3VudFBheW1lbnQoKTtcbiAgfVxuXG4gIGdldCBjb3N0Q2VudGVyJCgpOiBPYnNlcnZhYmxlPENvc3RDZW50ZXI+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyQ29zdENlbnRlclNlcnZpY2UuZ2V0QWN0aXZlQ29zdENlbnRlcnMoKS5waXBlKFxuICAgICAgZmlsdGVyKChjb3N0Q2VudGVycykgPT4gQm9vbGVhbihjb3N0Q2VudGVycykpLFxuICAgICAgc3dpdGNoTWFwKChjb3N0Q2VudGVycykgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLmdldENvc3RDZW50ZXIoKS5waXBlKFxuICAgICAgICAgIG1hcCgoY29kZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvc3RDZW50ZXJzLmZpbmQoKGNjKSA9PiBjYy5jb2RlID09PSBjb2RlKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U2hpcHBpbmdBZGRyZXNzQ2FyZChcbiAgICBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3MsXG4gICAgY291bnRyeU5hbWU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2hpcFRvJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHJ5TmFtZSkge1xuICAgICAgICAgIGNvdW50cnlOYW1lID0gZGVsaXZlcnlBZGRyZXNzPy5jb3VudHJ5Py5pc29jb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlZ2lvbiA9ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZGVsaXZlcnlBZGRyZXNzICYmXG4gICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnJlZ2lvbiAmJlxuICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5yZWdpb24uaXNvY29kZVxuICAgICAgICApIHtcbiAgICAgICAgICByZWdpb24gPSBkZWxpdmVyeUFkZHJlc3MucmVnaW9uLmlzb2NvZGUgKyAnLCAnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeUFkZHJlc3MuZmlyc3ROYW1lICsgJyAnICsgZGVsaXZlcnlBZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5saW5lMixcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy50b3duICsgJywgJyArIHJlZ2lvbiArIGNvdW50cnlOYW1lLFxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgICAgICBkZWxpdmVyeUFkZHJlc3MucGhvbmUsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENvc3RDZW50ZXJDYXJkKGNvc3RDZW50ZXI6IENvc3RDZW50ZXIpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5jb3N0Q2VudGVyJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBjb3N0Q2VudGVyPy5uYW1lLFxuICAgICAgICAgIHRleHQ6IFsnKCcgKyBjb3N0Q2VudGVyPy51bml0Lm5hbWUgKyAnKSddLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGVsaXZlcnlNb2RlQ2FyZChkZWxpdmVyeU1vZGU6IERlbGl2ZXJ5TW9kZSk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjaGVja291dFNoaXBwaW5nLnNoaXBwaW5nTWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBkZWxpdmVyeU1vZGUubmFtZSxcbiAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGUuZGVsaXZlcnlDb3N0Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgICA/IGRlbGl2ZXJ5TW9kZS5kZWxpdmVyeUNvc3Q/LmZvcm1hdHRlZFZhbHVlXG4gICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRNZXRob2RDYXJkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS5wYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IHBheW1lbnREZXRhaWxzLmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50RGV0YWlscy5leHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0uYmlsbGluZ0FkZHJlc3MnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdGV4dFRpdGxlLCB0ZXh0RXhwaXJlcywgYmlsbGluZ0FkZHJlc3NdKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5yZWdpb24/Lmlzb2NvZGVcbiAgICAgICAgICA/IHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5yZWdpb24/Lmlzb2NvZGUgKyAnLCAnXG4gICAgICAgICAgOiAnJztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICB0ZXh0OiBbcGF5bWVudERldGFpbHMuY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICAgIHBhcmFncmFwaHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IGJpbGxpbmdBZGRyZXNzICsgJzonLFxuICAgICAgICAgICAgICB0ZXh0OiBbXG4gICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/LmZpcnN0TmFtZSArXG4gICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgcGF5bWVudERldGFpbHMuYmlsbGluZ0FkZHJlc3M/Lmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLmJpbGxpbmdBZGRyZXNzPy5saW5lMSxcbiAgICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8udG93biArXG4gICAgICAgICAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAgICAgICAgIHJlZ2lvbiArXG4gICAgICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8uY291bnRyeT8uaXNvY29kZSxcbiAgICAgICAgICAgICAgICBwYXltZW50RGV0YWlscy5iaWxsaW5nQWRkcmVzcz8ucG9zdGFsQ29kZSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBvTnVtYmVyQ2FyZChwb051bWJlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UmV2aWV3LnBvTnVtYmVyJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY2hlY2tvdXRQTy5ub1BvTnVtYmVyJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3RleHRUaXRsZSwgbm9uZVRleHRUaXRsZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHRCb2xkOiBwb051bWJlciA/IHBvTnVtYmVyIDogbm9uZVRleHRUaXRsZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFBheW1lbnRUeXBlQ2FyZChwYXltZW50VHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NoZWNrb3V0UHJvZ3Jlc3MubWV0aG9kT2ZQYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudFR5cGVzLnBheW1lbnRUeXBlJywge1xuICAgICAgICBjb250ZXh0OiBwYXltZW50VHlwZSxcbiAgICAgIH0pLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0VGl0bGUsIHBheW1lbnRUeXBlVHJhbnNsYXRpb25dKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgICB0ZXh0Qm9sZDogcGF5bWVudFR5cGVUcmFuc2xhdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENoZWNrb3V0U3RlcFVybChzdGVwVHlwZTogQ2hlY2tvdXRTdGVwVHlwZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5nZXRDaGVja291dFN0ZXAoc3RlcFR5cGUpO1xuICAgIHJldHVybiBzdGVwICYmIHN0ZXAucm91dGVOYW1lO1xuICB9XG5cbiAgc2hpcHBpbmdTdGVwcyhzdGVwczogQ2hlY2tvdXRTdGVwW10pOiBDaGVja291dFN0ZXBbXSB7XG4gICAgcmV0dXJuIHN0ZXBzLmZpbHRlcigoc3RlcCkgPT4gY2hlY2tvdXRTaGlwcGluZ1N0ZXBzLmluY2x1ZGVzKHN0ZXAudHlwZVswXSkpO1xuICB9XG5cbiAgcGF5bWVudFN0ZXBzKHN0ZXBzOiBDaGVja291dFN0ZXBbXSk6IENoZWNrb3V0U3RlcFtdIHtcbiAgICByZXR1cm4gc3RlcHMuZmlsdGVyKChzdGVwKSA9PiBjaGVja291dFBheW1lbnRTdGVwcy5pbmNsdWRlcyhzdGVwLnR5cGVbMF0pKTtcbiAgfVxufVxuIl19