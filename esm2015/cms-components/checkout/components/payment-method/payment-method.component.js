import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, PaymentDetails, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
let PaymentMethodComponent = class PaymentMethodComponent {
    constructor(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, cartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.isGuestCheckout = false;
    }
    ngOnInit() {
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.cartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe((address) => {
            this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => paymentInfo && !!Object.keys(paymentInfo).length))
            .subscribe(paymentInfo => {
            if (this.allowRouting) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        });
    }
    getCardContent(payment) {
        if (!this.selectedPayment && payment.defaultPayment) {
            this.selectedPayment = payment;
        }
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(([textExpires, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            return this.createCard(payment, {
                textExpires,
                textUseThisPayment,
                textDefaultPaymentMethod,
                textSelected,
            });
        }));
    }
    selectPaymentMethod(paymentDetails) {
        this.selectedPayment = paymentDetails;
    }
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment = true, }) {
        const details = Object.assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    }
    ngOnDestroy() {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
        this.checkoutPaymentService.paymentProcessSuccess();
    }
    getCardIcon(code) {
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
    sendPaymentMethodFailGlobalMessage(msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    createCard(paymentDetails, cardLabels) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: this.selectedPayment && this.selectedPayment.id === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    }
    goNext() {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    }
    goPrevious() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    paymentMethodSelected(paymentDetails) {
        this.selectPaymentMethod(paymentDetails);
    }
};
PaymentMethodComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: CartService }
];
PaymentMethodComponent = __decorate([
    Component({
        selector: 'cx-payment-method',
        template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaymentMethodComponent);
export { PaymentMethodComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsT0FBTyxFQUNQLFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU8vRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQTRDakMsWUFDWSxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLFdBQXlCO1FBVHpCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixH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SSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHFCQUFxQixDQUFDLGNBQThCO1FBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0YsQ0FBQTs7WUFyTmlDLGtCQUFrQjtZQUNyQixlQUFlO1lBQ1AsdUJBQXVCO1lBQ3hCLHNCQUFzQjtZQUN4QixvQkFBb0I7WUFDMUIsY0FBYztZQUNQLHFCQUFxQjtZQUM1QixjQUFjO1lBQ2pCLGtCQUFrQjtZQUNqQixXQUFXOztBQXREMUIsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsbzlFQUE4QztRQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csc0JBQXNCLENBa1FsQztTQWxRWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBDYXJ0U2VydmljZSxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBQYXltZW50RGV0YWlscyxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtbWV0aG9kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICBleGlzdGluZ1BheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VsZWN0ZWRQYXltZW50OiBQYXltZW50RGV0YWlscztcbiAgYWxsb3dSb3V0aW5nOiBib29sZWFuO1xuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG4gIHByaXZhdGUgY2hlY2tvdXRTdGVwVXJsTmV4dDogc3RyaW5nO1xuICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS54XG4gICAqIE5PVEU6IGNoZWNrIGlzc3VlOiMxMTgxIGZvciBtb3JlIGluZm9cbiAgICpcbiAgICogVE9ETyhpc3N1ZTojMTE4MSkgRGVwcmVjYXRlZCBzaW5jZSAxLnhcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U/OiBDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGxvd1JvdXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcblxuICAgIGlmICghdGhpcy5jYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCA9IHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldE5leHRDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tvdXRTdGVwVXJsUHJldmlvdXMgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXRQcmV2aW91c0NoZWNrb3V0U3RlcFVybChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICApO1xuXG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldERlbGl2ZXJ5QWRkcmVzcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoYWRkcmVzczogQWRkcmVzcykgPT4ge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZXhpc3RpbmdQYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHNTdWIgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2VcbiAgICAgIC5nZXRQYXltZW50RGV0YWlscygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHBheW1lbnRJbmZvID0+IHBheW1lbnRJbmZvICYmICEhT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocGF5bWVudEluZm8gPT4ge1xuICAgICAgICBpZiAodGhpcy5hbGxvd1JvdXRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHRoaXMuY2hlY2tvdXRTdGVwVXJsTmV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudEluZm87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKHBheW1lbnRJbmZvW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiBwYXltZW50LmRlZmF1bHRQYXltZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBwYXltZW50LmV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBwYXltZW50LmV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS51c2VUaGlzUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2FyZChwYXltZW50LCB7XG4gICAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ID0gcGF5bWVudERldGFpbHM7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFBheW1lbnREZXRhaWxzKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICBpc05ld1BheW1lbnQgPSB0cnVlLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICBpc05ld1BheW1lbnQ/OiBib29sZWFuO1xuICB9KTogdm9pZCB7XG4gICAgY29uc3QgZGV0YWlsczogUGF5bWVudERldGFpbHMgPSB7IC4uLnBheW1lbnREZXRhaWxzIH07XG4gICAgZGV0YWlscy5iaWxsaW5nQWRkcmVzcyA9IGJpbGxpbmdBZGRyZXNzIHx8IHRoaXMuZGVsaXZlcnlBZGRyZXNzO1xuXG4gICAgaWYgKGlzTmV3UGF5bWVudCkge1xuICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKGRldGFpbHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZFBheW1lbnQgJiYgdGhpcy5zZWxlY3RlZFBheW1lbnQuaWQgPT09IGRldGFpbHMuaWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhkZXRhaWxzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFsbG93Um91dGluZyA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yikge1xuICAgICAgdGhpcy5nZXRQYXltZW50RGV0YWlsc1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5wYXltZW50UHJvY2Vzc1N1Y2Nlc3MoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BheW1lbnRNZXRob2RzLmludmFsaWRGaWVsZCcsXG4gICAgICAgIHBhcmFtczogeyBmaWVsZDogbXNnIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocGF5bWVudERldGFpbHMsIGNhcmRMYWJlbHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHBheW1lbnREZXRhaWxzLmRlZmF1bHRQYXltZW50XG4gICAgICAgID8gY2FyZExhYmVscy50ZXh0RGVmYXVsdFBheW1lbnRNZXRob2RcbiAgICAgICAgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLCBjYXJkTGFiZWxzLnRleHRFeHBpcmVzXSxcbiAgICAgIGltZzogdGhpcy5nZXRDYXJkSWNvbihwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlKSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IGNhcmRMYWJlbHMudGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOlxuICAgICAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCAmJiB0aGlzLnNlbGVjdGVkUGF5bWVudC5pZCA9PT0gcGF5bWVudERldGFpbHMuaWRcbiAgICAgICAgICA/IGNhcmRMYWJlbHMudGV4dFNlbGVjdGVkXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIGdvTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFBheW1lbnREZXRhaWxzKHtcbiAgICAgIHBheW1lbnREZXRhaWxzOiB0aGlzLnNlbGVjdGVkUGF5bWVudCxcbiAgICAgIGlzTmV3UGF5bWVudDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBnb1ByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxQcmV2aW91cyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgZ29OZXh0KCkgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojNDk5MikgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5nb05leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb1ByZXZpb3VzKCkgaW5zdGVhZC5cbiAgICogVE9ETyhpc3N1ZTojNDk5MikgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5nb1ByZXZpb3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2Ugc2VsZWN0UGF5bWVudE1ldGhvZCgpIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzQ5OTIpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAqL1xuICBwYXltZW50TWV0aG9kU2VsZWN0ZWQocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzKTtcbiAgfVxufVxuIl19