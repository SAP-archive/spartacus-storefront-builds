import { __assign, __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, GlobalMessageType, PaymentDetails, RoutingService, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.iconTypes = ICON_TYPE;
        this.isGuestCheckout = false;
        this.newPaymentFormManuallyOpened = false;
    }
    PaymentMethodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shouldRedirect = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.activeCartService.isGuestCart()) {
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
            .subscribe(function (address) {
            _this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.selectedMethod$ = this.checkoutPaymentService.getPaymentDetails().pipe(tap(function (paymentInfo) {
            if (paymentInfo && !!Object.keys(paymentInfo).length) {
                if (paymentInfo['hasError']) {
                    Object.keys(paymentInfo).forEach(function (key) {
                        if (key.startsWith('InvalidField')) {
                            _this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                        }
                    });
                    _this.checkoutService.clearCheckoutStep(3);
                }
                else if (_this.shouldRedirect) {
                    _this.routingService.go(_this.checkoutStepUrlNext);
                }
            }
        }));
        this.cards$ = combineLatest([
            this.existingPaymentMethods$.pipe(switchMap(function (methods) {
                return !(methods === null || methods === void 0 ? void 0 : methods.length)
                    ? of([])
                    : combineLatest(methods.map(function (method) {
                        return combineLatest([
                            of(method),
                            _this.translation.translate('paymentCard.expires', {
                                month: method.expiryMonth,
                                year: method.expiryYear,
                            }),
                        ]).pipe(map(function (_a) {
                            var _b = __read(_a, 2), payment = _b[0], translation = _b[1];
                            return ({
                                payment: payment,
                                expiryTranslation: translation,
                            });
                        }));
                    }));
            })),
            this.selectedMethod$,
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 5), paymentMethods = _b[0], selectedMethod = _b[1], textUseThisPayment = _b[2], textDefaultPaymentMethod = _b[3], textSelected = _b[4];
            if (paymentMethods.length &&
                (!selectedMethod || Object.keys(selectedMethod).length === 0)) {
                var defaultPaymentMethod = paymentMethods.find(function (paymentMethod) { return paymentMethod.payment.defaultPayment; });
                if (defaultPaymentMethod) {
                    selectedMethod = defaultPaymentMethod.payment;
                    _this.checkoutPaymentService.setPaymentDetails(selectedMethod);
                }
            }
            return paymentMethods.map(function (payment) { return ({
                content: _this.createCard(payment.payment, {
                    textExpires: payment.expiryTranslation,
                    textUseThisPayment: textUseThisPayment,
                    textDefaultPaymentMethod: textDefaultPaymentMethod,
                    textSelected: textSelected,
                }, selectedMethod),
                paymentMethod: payment.payment,
            }); });
        }));
    };
    PaymentMethodComponent.prototype.selectPaymentMethod = function (paymentDetails) {
        this.checkoutPaymentService.setPaymentDetails(paymentDetails);
    };
    PaymentMethodComponent.prototype.showNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = true;
    };
    PaymentMethodComponent.prototype.hideNewPaymentForm = function () {
        this.newPaymentFormManuallyOpened = false;
    };
    PaymentMethodComponent.prototype.setPaymentDetails = function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress;
        var details = __assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        this.checkoutPaymentService.createPaymentDetails(details);
        this.shouldRedirect = true;
    };
    PaymentMethodComponent.prototype.ngOnDestroy = function () {
        this.checkoutPaymentService.paymentProcessSuccess();
    };
    PaymentMethodComponent.prototype.getCardIcon = function (code) {
        var ccIcon;
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
    };
    PaymentMethodComponent.prototype.sendPaymentMethodFailGlobalMessage = function (field) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: field },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    PaymentMethodComponent.prototype.createCard = function (paymentDetails, cardLabels, selected) {
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
    };
    PaymentMethodComponent.prototype.goNext = function () {
        this.routingService.go(this.checkoutStepUrlNext);
    };
    PaymentMethodComponent.prototype.goPrevious = function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    PaymentMethodComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService },
        { type: ActiveCartService }
    ]; };
    PaymentMethodComponent = __decorate([
        Component({
            selector: 'cx-payment-method',
            template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.content\"\n              (sendCard)=\"selectPaymentMethod(card.paymentMethod)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"goPrevious()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!(selectedMethod$ | async)?.id\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"goPrevious()\"\n        [paymentMethodsCount]=\"cards?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PaymentMethodComponent);
    return PaymentMethodComponent;
}());
export { PaymentMethodComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCx1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPL0U7SUFjRSxnQ0FDWSxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsdUJBQWdELEVBQ2hELHNCQUE4QyxFQUM5QyxvQkFBMEMsRUFDMUMsY0FBOEIsRUFDOUIscUJBQTRDLEVBQzVDLGNBQThCLEVBQzlCLFdBQStCLEVBQy9CLGlCQUFvQztRQVRwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJB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QWpPRCxJQWlPQztTQWpPWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQWRkcmVzcyxcbiAgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsXG4gIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBQYXltZW50RGV0YWlscyxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYXJkcyQ6IE9ic2VydmFibGU8eyBjb250ZW50OiBDYXJkOyBwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyB9W10+O1xuICBzZWxlY3RlZE1ldGhvZCQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICBpc0d1ZXN0Q2hlY2tvdXQgPSBmYWxzZTtcbiAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBzaG91bGRSZWRpcmVjdDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcztcbiAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFVybE5leHQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNob3VsZFJlZGlyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG5cbiAgICBpZiAoIXRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKSkge1xuICAgICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNHdWVzdENoZWNrb3V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQgPSB0aGlzLmNoZWNrb3V0Q29uZmlnU2VydmljZS5nZXROZXh0Q2hlY2tvdXRTdGVwVXJsKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgICk7XG5cbiAgICB0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzID0gdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0UHJldmlvdXNDaGVja291dFN0ZXBVcmwoXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlXG4gICAgKTtcblxuICAgIHRoaXMuY2hlY2tvdXREZWxpdmVyeVNlcnZpY2VcbiAgICAgIC5nZXREZWxpdmVyeUFkZHJlc3MoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFkZHJlc3M6IEFkZHJlc3MpID0+IHtcbiAgICAgICAgdGhpcy5kZWxpdmVyeUFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRNZXRob2QkID0gdGhpcy5jaGVja291dFBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnREZXRhaWxzKCkucGlwZShcbiAgICAgIHRhcCgocGF5bWVudEluZm8pID0+IHtcbiAgICAgICAgaWYgKHBheW1lbnRJbmZvICYmICEhT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChwYXltZW50SW5mb1snaGFzRXJyb3InXSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bWVudEluZm8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ludmFsaWRGaWVsZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKHBheW1lbnRJbmZvW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXRTdGVwKDMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRSZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybE5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5jYXJkcyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZXhpc3RpbmdQYXltZW50TWV0aG9kcyQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChtZXRob2RzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFtZXRob2RzPy5sZW5ndGhcbiAgICAgICAgICAgID8gb2YoW10pXG4gICAgICAgICAgICA6IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kcy5tYXAoKG1ldGhvZCkgPT5cbiAgICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgICAgICBvZihtZXRob2QpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICBtb250aDogbWV0aG9kLmV4cGlyeU1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgIHllYXI6IG1ldGhvZC5leHBpcnlZZWFyLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcCgoW3BheW1lbnQsIHRyYW5zbGF0aW9uXSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXltZW50LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeVRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMuc2VsZWN0ZWRNZXRob2QkLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRGb3JtLnVzZVRoaXNQYXltZW50JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVmYXVsdFBheW1lbnRNZXRob2QnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5zZWxlY3RlZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgcGF5bWVudE1ldGhvZHMsXG4gICAgICAgICAgc2VsZWN0ZWRNZXRob2QsXG4gICAgICAgICAgdGV4dFVzZVRoaXNQYXltZW50LFxuICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgICB0ZXh0U2VsZWN0ZWQsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kcy5sZW5ndGggJiZcbiAgICAgICAgICAgICghc2VsZWN0ZWRNZXRob2QgfHwgT2JqZWN0LmtleXMoc2VsZWN0ZWRNZXRob2QpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYXltZW50TWV0aG9kID0gcGF5bWVudE1ldGhvZHMuZmluZChcbiAgICAgICAgICAgICAgKHBheW1lbnRNZXRob2QpID0+IHBheW1lbnRNZXRob2QucGF5bWVudC5kZWZhdWx0UGF5bWVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0UGF5bWVudE1ldGhvZCkge1xuICAgICAgICAgICAgICBzZWxlY3RlZE1ldGhvZCA9IGRlZmF1bHRQYXltZW50TWV0aG9kLnBheW1lbnQ7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5zZXRQYXltZW50RGV0YWlscyhzZWxlY3RlZE1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwYXltZW50TWV0aG9kcy5tYXAoKHBheW1lbnQpID0+ICh7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNyZWF0ZUNhcmQoXG4gICAgICAgICAgICAgIHBheW1lbnQucGF5bWVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHRFeHBpcmVzOiBwYXltZW50LmV4cGlyeVRyYW5zbGF0aW9uLFxuICAgICAgICAgICAgICAgIHRleHRVc2VUaGlzUGF5bWVudCxcbiAgICAgICAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgICAgICAgICAgdGV4dFNlbGVjdGVkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWxlY3RlZE1ldGhvZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnQucGF5bWVudCxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHMpO1xuICB9XG5cbiAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMubmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZCA9IHRydWU7XG4gIH1cblxuICBoaWRlTmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRQYXltZW50RGV0YWlscyh7XG4gICAgcGF5bWVudERldGFpbHMsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICB9KTogdm9pZCB7XG4gICAgY29uc3QgZGV0YWlsczogUGF5bWVudERldGFpbHMgPSB7IC4uLnBheW1lbnREZXRhaWxzIH07XG4gICAgZGV0YWlscy5iaWxsaW5nQWRkcmVzcyA9IGJpbGxpbmdBZGRyZXNzIHx8IHRoaXMuZGVsaXZlcnlBZGRyZXNzO1xuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5jcmVhdGVQYXltZW50RGV0YWlscyhkZXRhaWxzKTtcbiAgICB0aGlzLnNob3VsZFJlZGlyZWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50U2VydmljZS5wYXltZW50UHJvY2Vzc1N1Y2Nlc3MoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKGZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAncGF5bWVudE1ldGhvZHMuaW52YWxpZEZpZWxkJyxcbiAgICAgICAgcGFyYW1zOiB7IGZpZWxkIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQoXG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzLFxuICAgIGNhcmRMYWJlbHM6IHtcbiAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZDogc3RyaW5nO1xuICAgICAgdGV4dEV4cGlyZXM6IHN0cmluZztcbiAgICAgIHRleHRVc2VUaGlzUGF5bWVudDogc3RyaW5nO1xuICAgICAgdGV4dFNlbGVjdGVkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBzZWxlY3RlZDogUGF5bWVudERldGFpbHNcbiAgKTogQ2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBwYXltZW50RGV0YWlscy5kZWZhdWx0UGF5bWVudFxuICAgICAgICA/IGNhcmRMYWJlbHMudGV4dERlZmF1bHRQYXltZW50TWV0aG9kXG4gICAgICAgIDogJycsXG4gICAgICB0ZXh0Qm9sZDogcGF5bWVudERldGFpbHMuYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbcGF5bWVudERldGFpbHMuY2FyZE51bWJlciwgY2FyZExhYmVscy50ZXh0RXhwaXJlc10sXG4gICAgICBpbWc6IHRoaXMuZ2V0Q2FyZEljb24ocGF5bWVudERldGFpbHMuY2FyZFR5cGUuY29kZSksXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiBjYXJkTGFiZWxzLnRleHRVc2VUaGlzUGF5bWVudCwgZXZlbnQ6ICdzZW5kJyB9XSxcbiAgICAgIGhlYWRlcjpcbiAgICAgICAgc2VsZWN0ZWQ/LmlkID09PSBwYXltZW50RGV0YWlscy5pZFxuICAgICAgICAgID8gY2FyZExhYmVscy50ZXh0U2VsZWN0ZWRcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgZ29OZXh0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28odGhpcy5jaGVja291dFN0ZXBVcmxOZXh0KTtcbiAgfVxuXG4gIGdvUHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh0aGlzLmNoZWNrb3V0U3RlcFVybFByZXZpb3VzKTtcbiAgfVxufVxuIl19