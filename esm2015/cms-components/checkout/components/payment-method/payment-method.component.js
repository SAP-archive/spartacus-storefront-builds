import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutStepService } from '../../services/checkout-step.service';
export class PaymentMethodComponent {
    constructor(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, activatedRoute, translation, activeCartService, checkoutStepService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.checkoutStepService = checkoutStepService;
        this.iconTypes = ICON_TYPE;
        this.isGuestCheckout = false;
        this.newPaymentFormManuallyOpened = false;
        this.backBtnText = this.checkoutStepService.getBackBntText(this.activatedRoute);
    }
    ngOnInit() {
        this.shouldRedirect = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.activeCartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe((address) => {
            this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.selectedMethod$ = this.checkoutPaymentService.getPaymentDetails().pipe(tap((paymentInfo) => {
            if (paymentInfo && !!Object.keys(paymentInfo).length) {
                if (paymentInfo['hasError']) {
                    Object.keys(paymentInfo).forEach((key) => {
                        if (key.startsWith('InvalidField')) {
                            this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                        }
                    });
                    this.checkoutService.clearCheckoutStep(3);
                }
                else if (this.shouldRedirect) {
                    this.next();
                }
            }
        }));
        this.cards$ = combineLatest([
            this.existingPaymentMethods$.pipe(switchMap((methods) => {
                return !(methods === null || methods === void 0 ? void 0 : methods.length)
                    ? of([])
                    : combineLatest(methods.map((method) => combineLatest([
                        of(method),
                        this.translation.translate('paymentCard.expires', {
                            month: method.expiryMonth,
                            year: method.expiryYear,
                        }),
                    ]).pipe(map(([payment, translation]) => ({
                        payment,
                        expiryTranslation: translation,
                    })))));
            })),
            this.selectedMethod$,
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(([paymentMethods, selectedMethod, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            if (paymentMethods.length &&
                (!selectedMethod || Object.keys(selectedMethod).length === 0)) {
                const defaultPaymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.payment.defaultPayment);
                if (defaultPaymentMethod) {
                    selectedMethod = defaultPaymentMethod.payment;
                    this.checkoutPaymentService.setPaymentDetails(selectedMethod);
                }
            }
            return paymentMethods.map((payment) => ({
                content: this.createCard(payment.payment, {
                    textExpires: payment.expiryTranslation,
                    textUseThisPayment,
                    textDefaultPaymentMethod,
                    textSelected,
                }, selectedMethod),
                paymentMethod: payment.payment,
            }));
        }));
    }
    selectPaymentMethod(paymentDetails) {
        this.checkoutPaymentService.setPaymentDetails(paymentDetails);
    }
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    setPaymentDetails({ paymentDetails, billingAddress, }) {
        const details = Object.assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        this.checkoutPaymentService.createPaymentDetails(details);
        this.shouldRedirect = true;
    }
    ngOnDestroy() {
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
    sendPaymentMethodFailGlobalMessage(field) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    createCard(paymentDetails, cardLabels, selected) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: (selected === null || selected === void 0 ? void 0 : selected.id) === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    }
    next() {
        this.checkoutStepService.next(this.activatedRoute);
    }
    back() {
        this.checkoutStepService.back(this.activatedRoute);
    }
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.content\"\n              (sendCard)=\"selectPaymentMethod(card.paymentMethod)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ backBtnText | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!(selectedMethod$ | async)?.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"cards?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PaymentMethodComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: GlobalMessageService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: ActiveCartService },
    { type: CheckoutStepService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxNQUFNLE9BQU8sc0JBQXNCO0lBY2pDLFlBQ1ksa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsb0JBQTBDLEVBQzFDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLGlCQUFvQyxFQUNwQyxtQkFBd0M7UUFSeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixD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LEVBQUUsQ0FBQztZQUNqRSxNQUFNLEVBQ0osQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsRUFBRSxNQUFLLGNBQWMsQ0FBQyxFQUFFO2dCQUNoQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQ3pCLENBQUMsQ0FBQyxTQUFTO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBNU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw0MkVBQThDO2dCQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWkMsa0JBQWtCO1lBTGxCLGVBQWU7WUFGZix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBRXRCLG9CQUFvQjtZQVBiLGNBQWM7WUFVckIsa0JBQWtCO1lBUmxCLGlCQUFpQjtZQWVWLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBZGRyZXNzLFxuICBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8eyBjb250ZW50OiBDYXJkOyBwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyB9W10+O1xuICBzZWxlY3RlZE1ldGhvZCQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcbiAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuXG4gIGJhY2tCdG5UZXh0ID0gdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmdldEJhY2tCbnRUZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuXG4gIHByb3RlY3RlZCBzaG91bGRSZWRpcmVjdDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2hvdWxkUmVkaXJlY3QgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpKSB7XG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0d1ZXN0Q2hlY2tvdXQgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFkZHJlc3M6IEFkZHJlc3MpID0+IHtcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRNZXRob2QkID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkucGlwZShcbiAgICAgIHRhcCgocGF5bWVudEluZm8pID0+IHtcbiAgICAgICAgaWYgKHBheW1lbnRJbmZvICYmICEhT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKHBheW1lbnRJbmZvW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRSZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmNhcmRzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5leGlzdGluZ1BheW1lbnRNZXRob2RzJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKG1ldGhvZHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gIW1ldGhvZHM/Lmxlbmd0aFxuICAgICAgICAgICAgPyBvZihbXSlcbiAgICAgICAgICAgIDogY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgICBtZXRob2RzLm1hcCgobWV0aG9kKSA9PlxuICAgICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgICAgICAgIG9mKG1ldGhvZCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBtZXRob2QuZXhwaXJ5TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgeWVhcjogbWV0aG9kLmV4cGlyeVllYXIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKChbcGF5bWVudCwgdHJhbnNsYXRpb25dKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5VHJhbnNsYXRpb246IHRyYW5zbGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdGhpcy5zZWxlY3RlZE1ldGhvZCQsXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudEZvcm0udXNlVGhpc1BheW1lbnQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNlbGVjdGVkJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICBwYXltZW50TWV0aG9kcyxcbiAgICAgICAgICBzZWxlY3RlZE1ldGhvZCxcbiAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RzLmxlbmd0aCAmJlxuICAgICAgICAgICAgKCFzZWxlY3RlZE1ldGhvZCB8fCBPYmplY3Qua2V5cyhzZWxlY3RlZE1ldGhvZCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFBheW1lbnRNZXRob2QgPSBwYXltZW50TWV0aG9kcy5maW5kKFxuICAgICAgICAgICAgICAocGF5bWVudE1ldGhvZCkgPT4gcGF5bWVudE1ldGhvZC5wYXltZW50LmRlZmF1bHRQYXltZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRQYXltZW50TWV0aG9kKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkTWV0aG9kID0gZGVmYXVsdFBheW1lbnRNZXRob2QucGF5bWVudDtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHNlbGVjdGVkTWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHBheW1lbnRNZXRob2RzLm1hcCgocGF5bWVudCkgPT4gKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY3JlYXRlQ2FyZChcbiAgICAgICAgICAgICAgcGF5bWVudC5wYXltZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dEV4cGlyZXM6IHBheW1lbnQuZXhwaXJ5VHJhbnNsYXRpb24sXG4gICAgICAgICAgICAgICAgdGV4dFVzZVRoaXNQYXltZW50LFxuICAgICAgICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlbGVjdGVkTWV0aG9kXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudC5wYXltZW50LFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlscyk7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFBheW1lbnREZXRhaWxzKHtcbiAgICBwYXltZW50RGV0YWlscyxcbiAgICBiaWxsaW5nQWRkcmVzcyxcbiAgfToge1xuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICBjb25zdCBkZXRhaWxzOiBQYXltZW50RGV0YWlscyA9IHsgLi4ucGF5bWVudERldGFpbHMgfTtcbiAgICBkZXRhaWxzLmJpbGxpbmdBZGRyZXNzID0gYmlsbGluZ0FkZHJlc3MgfHwgdGhpcy5kZWxpdmVyeUFkZHJlc3M7XG4gICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmNyZWF0ZVBheW1lbnREZXRhaWxzKGRldGFpbHMpO1xuICAgIHRoaXMuc2hvdWxkUmVkaXJlY3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLnBheW1lbnRQcm9jZXNzU3VjY2VzcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcmRJY29uKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGNjSWNvbjogc3RyaW5nO1xuICAgIGlmIChjb2RlID09PSAndmlzYScpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLlZJU0E7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnbWFzdGVyJyB8fCBjb2RlID09PSAnbWFzdGVyY2FyZF9ldXJvY2FyZCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLk1BU1RFUl9DQVJEO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2RpbmVycycpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkRJTkVSU19DTFVCO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2FtZXgnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5BTUVYO1xuICAgIH0gZWxzZSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5DUkVESVRfQ0FSRDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2NJY29uO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlbmRQYXltZW50TWV0aG9kRmFpbEdsb2JhbE1lc3NhZ2UoZmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdwYXltZW50TWV0aG9kcy5pbnZhbGlkRmllbGQnLFxuICAgICAgICBwYXJhbXM6IHsgZmllbGQgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsXG4gICAgY2FyZExhYmVsczoge1xuICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kOiBzdHJpbmc7XG4gICAgICB0ZXh0RXhwaXJlczogc3RyaW5nO1xuICAgICAgdGV4dFVzZVRoaXNQYXltZW50OiBzdHJpbmc7XG4gICAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZztcbiAgICB9LFxuICAgIHNlbGVjdGVkOiBQYXltZW50RGV0YWlsc1xuICApOiBDYXJkIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHBheW1lbnREZXRhaWxzLmRlZmF1bHRQYXltZW50XG4gICAgICAgID8gY2FyZExhYmVscy50ZXh0RGVmYXVsdFBheW1lbnRNZXRob2RcbiAgICAgICAgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50RGV0YWlscy5hY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtwYXltZW50RGV0YWlscy5jYXJkTnVtYmVyLCBjYXJkTGFiZWxzLnRleHRFeHBpcmVzXSxcbiAgICAgIGltZzogdGhpcy5nZXRDYXJkSWNvbihwYXltZW50RGV0YWlscy5jYXJkVHlwZS5jb2RlKSxcbiAgICAgIGFjdGlvbnM6IFt7IG5hbWU6IGNhcmRMYWJlbHMudGV4dFVzZVRoaXNQYXltZW50LCBldmVudDogJ3NlbmQnIH1dLFxuICAgICAgaGVhZGVyOlxuICAgICAgICBzZWxlY3RlZD8uaWQgPT09IHBheW1lbnREZXRhaWxzLmlkXG4gICAgICAgICAgPyBjYXJkTGFiZWxzLnRleHRTZWxlY3RlZFxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuYmFjayh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgfVxufVxuIl19