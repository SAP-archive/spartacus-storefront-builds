import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, PaymentDetails, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutStepService } from '../../services/checkout-step.service';
let PaymentMethodComponent = class PaymentMethodComponent {
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
};
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
PaymentMethodComponent = __decorate([
    Component({
        selector: 'cx-payment-method',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.content\"\n              (sendCard)=\"selectPaymentMethod(card.paymentMethod)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ backBtnText | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!(selectedMethod$ | async)?.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"cards?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaymentMethodComponent);
export { PaymentMethodComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQWNqQyxZQUNZLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQyx1QkFBZ0QsRUFDaEQsc0JBQThDLEVBQzlDLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixXQUErQixFQUMvQixpQkFBb0MsRUFDcEMsbUJBQXdDO1FBUnhDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDRCQUF1QixH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QUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDakUsTUFBTSxFQUNKLENBQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEVBQUUsTUFBSyxjQUFjLENBQUMsRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZO2dCQUN6QixDQUFDLENBQUMsU0FBUztTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQXpNaUMsa0JBQWtCO1lBQ3JCLGVBQWU7WUFDUCx1QkFBdUI7WUFDeEIsc0JBQXNCO1lBQ3hCLG9CQUFvQjtZQUMxQixjQUFjO1lBQ2pCLGtCQUFrQjtZQUNaLGlCQUFpQjtZQUNmLG1CQUFtQjs7QUF2QnpDLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLDQyRUFBOEM7UUFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHNCQUFzQixDQXdObEM7U0F4Tlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIEFkZHJlc3MsXG4gIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICBDaGVja291dFNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LXN0ZXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtbWV0aG9kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcmRzJDogT2JzZXJ2YWJsZTx7IGNvbnRlbnQ6IENhcmQ7IHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzIH1bXT47XG4gIHNlbGVjdGVkTWV0aG9kJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz47XG4gIGlzR3Vlc3RDaGVja291dCA9IGZhbHNlO1xuICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG5cbiAgYmFja0J0blRleHQgPSB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0QmFja0JudFRleHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG5cbiAgcHJvdGVjdGVkIHNob3VsZFJlZGlyZWN0OiBib29sZWFuO1xuICBwcm90ZWN0ZWQgZGVsaXZlcnlBZGRyZXNzOiBBZGRyZXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaG91bGRSZWRpcmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzR3Vlc3RDaGVja291dCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja291dERlbGl2ZXJ5U2VydmljZVxuICAgICAgLmdldERlbGl2ZXJ5QWRkcmVzcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoYWRkcmVzczogQWRkcmVzcykgPT4ge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5QWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZXhpc3RpbmdQYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuXG4gICAgdGhpcy5zZWxlY3RlZE1ldGhvZCQgPSB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudERldGFpbHMoKS5waXBlKFxuICAgICAgdGFwKChwYXltZW50SW5mbykgPT4ge1xuICAgICAgICBpZiAocGF5bWVudEluZm8gJiYgISFPYmplY3Qua2V5cyhwYXltZW50SW5mbykubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHBheW1lbnRJbmZvWydoYXNFcnJvciddKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXltZW50SW5mbykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnSW52YWxpZEZpZWxkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRQYXltZW50TWV0aG9kRmFpbEdsb2JhbE1lc3NhZ2UocGF5bWVudEluZm9ba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dFN0ZXAoMyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZFJlZGlyZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY2FyZHMkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgobWV0aG9kcykgPT4ge1xuICAgICAgICAgIHJldHVybiAhbWV0aG9kcz8ubGVuZ3RoXG4gICAgICAgICAgICA/IG9mKFtdKVxuICAgICAgICAgICAgOiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZHMubWFwKChtZXRob2QpID0+XG4gICAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICAgICAgb2YobWV0aG9kKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9udGg6IG1ldGhvZC5leHBpcnlNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBtZXRob2QuZXhwaXJ5WWVhcixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoKFtwYXltZW50LCB0cmFuc2xhdGlvbl0pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgcGF5bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICBleHBpcnlUcmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0aGlzLnNlbGVjdGVkTWV0aG9kJCxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Rm9ybS51c2VUaGlzUGF5bWVudCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2VsZWN0ZWQnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHBheW1lbnRNZXRob2RzLFxuICAgICAgICAgIHNlbGVjdGVkTWV0aG9kLFxuICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXNlbGVjdGVkTWV0aG9kIHx8IE9iamVjdC5rZXlzKHNlbGVjdGVkTWV0aG9kKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0UGF5bWVudE1ldGhvZCA9IHBheW1lbnRNZXRob2RzLmZpbmQoXG4gICAgICAgICAgICAgIChwYXltZW50TWV0aG9kKSA9PiBwYXltZW50TWV0aG9kLnBheW1lbnQuZGVmYXVsdFBheW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFBheW1lbnRNZXRob2QpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRNZXRob2QgPSBkZWZhdWx0UGF5bWVudE1ldGhvZC5wYXltZW50O1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMoc2VsZWN0ZWRNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcGF5bWVudE1ldGhvZHMubWFwKChwYXltZW50KSA9PiAoe1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5jcmVhdGVDYXJkKFxuICAgICAgICAgICAgICBwYXltZW50LnBheW1lbnQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0RXhwaXJlczogcGF5bWVudC5leHBpcnlUcmFuc2xhdGlvbixcbiAgICAgICAgICAgICAgICB0ZXh0VXNlVGhpc1BheW1lbnQsXG4gICAgICAgICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICAgICAgICAgIHRleHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRNZXRob2RcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kOiBwYXltZW50LnBheW1lbnQsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdFBheW1lbnRNZXRob2QocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnREZXRhaWxzKHBheW1lbnREZXRhaWxzKTtcbiAgfVxuXG4gIHNob3dOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSB0cnVlO1xuICB9XG5cbiAgaGlkZU5ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0UGF5bWVudERldGFpbHMoe1xuICAgIHBheW1lbnREZXRhaWxzLFxuICAgIGJpbGxpbmdBZGRyZXNzLFxuICB9OiB7XG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgfSk6IHZvaWQge1xuICAgIGNvbnN0IGRldGFpbHM6IFBheW1lbnREZXRhaWxzID0geyAuLi5wYXltZW50RGV0YWlscyB9O1xuICAgIGRldGFpbHMuYmlsbGluZ0FkZHJlc3MgPSBiaWxsaW5nQWRkcmVzcyB8fCB0aGlzLmRlbGl2ZXJ5QWRkcmVzcztcbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UuY3JlYXRlUGF5bWVudERldGFpbHMoZGV0YWlscyk7XG4gICAgdGhpcy5zaG91bGRSZWRpcmVjdCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2UucGF5bWVudFByb2Nlc3NTdWNjZXNzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgY2NJY29uOiBzdHJpbmc7XG4gICAgaWYgKGNvZGUgPT09ICd2aXNhJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuVklTQTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdtYXN0ZXInIHx8IGNvZGUgPT09ICdtYXN0ZXJjYXJkX2V1cm9jYXJkJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuTUFTVEVSX0NBUkQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnZGluZXJzJykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuRElORVJTX0NMVUI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnYW1leCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkFNRVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkNSRURJVF9DQVJEO1xuICAgIH1cblxuICAgIHJldHVybiBjY0ljb247XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VuZFBheW1lbnRNZXRob2RGYWlsR2xvYmFsTWVzc2FnZShmaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BheW1lbnRNZXRob2RzLmludmFsaWRGaWVsZCcsXG4gICAgICAgIHBhcmFtczogeyBmaWVsZCB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDYXJkKFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyxcbiAgICBjYXJkTGFiZWxzOiB7XG4gICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2Q6IHN0cmluZztcbiAgICAgIHRleHRFeHBpcmVzOiBzdHJpbmc7XG4gICAgICB0ZXh0VXNlVGhpc1BheW1lbnQ6IHN0cmluZztcbiAgICAgIHRleHRTZWxlY3RlZDogc3RyaW5nO1xuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IFBheW1lbnREZXRhaWxzXG4gICk6IENhcmQge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcGF5bWVudERldGFpbHMuZGVmYXVsdFBheW1lbnRcbiAgICAgICAgPyBjYXJkTGFiZWxzLnRleHREZWZhdWx0UGF5bWVudE1ldGhvZFxuICAgICAgICA6ICcnLFxuICAgICAgdGV4dEJvbGQ6IHBheW1lbnREZXRhaWxzLmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW3BheW1lbnREZXRhaWxzLmNhcmROdW1iZXIsIGNhcmRMYWJlbHMudGV4dEV4cGlyZXNdLFxuICAgICAgaW1nOiB0aGlzLmdldENhcmRJY29uKHBheW1lbnREZXRhaWxzLmNhcmRUeXBlLmNvZGUpLFxuICAgICAgYWN0aW9uczogW3sgbmFtZTogY2FyZExhYmVscy50ZXh0VXNlVGhpc1BheW1lbnQsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgICBoZWFkZXI6XG4gICAgICAgIHNlbGVjdGVkPy5pZCA9PT0gcGF5bWVudERldGFpbHMuaWRcbiAgICAgICAgICA/IGNhcmRMYWJlbHMudGV4dFNlbGVjdGVkXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLm5leHQodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5iYWNrKHRoaXMuYWN0aXZhdGVkUm91dGUpO1xuICB9XG59XG4iXX0=