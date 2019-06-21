/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var PaymentMethodsComponent = /** @class */ (function () {
    function PaymentMethodsComponent(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        function (paymentDetails) {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((/**
                 * @param {?} paymentDetail
                 * @return {?}
                 */
                function (paymentDetail) { return paymentDetail.defaultPayment; }))) {
                _this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        })));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PaymentMethodsComponent.prototype.getCardContent = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var defaultPayment = _a.defaultPayment, accountHolderName = _a.accountHolderName, expiryMonth = _a.expiryMonth, expiryYear = _a.expiryYear, cardNumber = _a.cardNumber;
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 5), textSetAsDefault = _b[0], textDelete = _b[1], textDeleteConfirmation = _b[2], textExpires = _b[3], textDefaultPaymentMethod = _b[4];
            /** @type {?} */
            var actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            /** @type {?} */
            var card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions: actions,
                deleteMsg: textDeleteConfirmation,
            };
            return card;
        })));
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.deletePaymentMethod = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.setEdit = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.editCard = paymentMethod.id;
    };
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.cancelCard = /**
     * @return {?}
     */
    function () {
        this.editCard = null;
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.setDefaultPaymentMethod = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    };
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.userServiceSub) {
            this.userServiceSub.unsubscribe();
        }
    };
    PaymentMethodsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-methods',
                    template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    PaymentMethodsComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: TranslationService }
    ]; };
    return PaymentMethodsComponent;
}());
export { PaymentMethodsComponent };
if (false) {
    /** @type {?} */
    PaymentMethodsComponent.prototype.paymentMethods$;
    /** @type {?} */
    PaymentMethodsComponent.prototype.editCard;
    /** @type {?} */
    PaymentMethodsComponent.prototype.loading$;
    /** @type {?} */
    PaymentMethodsComponent.prototype.userServiceSub;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.userPaymentService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQztJQVdFLGlDQUNVLGtCQUFzQyxFQUN0QyxXQUErQjtRQUQvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosMENBQVE7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ3JFLEdBQUc7Ozs7UUFBQyxVQUFBLGNBQWM7WUFDaEIscURBQXFEO1lBQ3JELElBQ0UsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN6QixDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxDQUFDLGNBQWMsRUFBNUIsQ0FBNEIsRUFBQyxFQUNuRTtnQkFDQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJ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SUFDOUMsMkNBQWlCOztJQUNqQiwyQ0FBOEI7O0lBRTlCLGlEQUE2Qjs7Ozs7SUFHM0IscURBQThDOzs7OztJQUM5Qyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgZWRpdENhcmQ6IHN0cmluZztcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgdXNlclNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudERldGFpbHMgPT4ge1xuICAgICAgICAvLyBTZXQgZmlyc3QgcGF5bWVudCBtZXRob2QgdG8gREVGQVVMVCBpZiBub25lIGlzIHNldFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGF5bWVudERldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICFwYXltZW50RGV0YWlscy5maW5kKHBheW1lbnREZXRhaWwgPT4gcGF5bWVudERldGFpbC5kZWZhdWx0UGF5bWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHtcbiAgICBkZWZhdWx0UGF5bWVudCxcbiAgICBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICBleHBpcnlNb250aCxcbiAgICBleHBpcnlZZWFyLFxuICAgIGNhcmROdW1iZXIsXG4gIH06IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNldEFzRGVmYXVsdCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5kZWxldGUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWxldGVDb25maXJtYXRpb24nKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IGV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgdGV4dFNldEFzRGVmYXVsdCxcbiAgICAgICAgICB0ZXh0RGVsZXRlLFxuICAgICAgICAgIHRleHREZWxldGVDb25maXJtYXRpb24sXG4gICAgICAgICAgdGV4dEV4cGlyZXMsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogeyBuYW1lOiBzdHJpbmc7IGV2ZW50OiBzdHJpbmcgfVtdID0gW107XG4gICAgICAgICAgaWYgKCFkZWZhdWx0UGF5bWVudCkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dFNldEFzRGVmYXVsdCwgZXZlbnQ6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dERlbGV0ZSwgZXZlbnQ6ICdlZGl0JyB9KTtcbiAgICAgICAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgICAgICAgaGVhZGVyOiBkZWZhdWx0UGF5bWVudCA/IHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCA6IG51bGwsXG4gICAgICAgICAgICB0ZXh0Qm9sZDogYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBbY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgICAgIGRlbGV0ZU1zZzogdGV4dERlbGV0ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZC5pZCk7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXRFZGl0KHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IHBheW1lbnRNZXRob2QuaWQ7XG4gIH1cblxuICBjYW5jZWxDYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5zZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHBheW1lbnRNZXRob2QuaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlclNlcnZpY2VTdWIpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==