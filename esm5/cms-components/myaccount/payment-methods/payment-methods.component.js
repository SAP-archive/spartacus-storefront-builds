/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    PaymentMethodsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-methods',
                    template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"paymentMethods$ | async as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUM7SUFTRSxpQ0FDVSxrQkFBc0MsRUFDdEMsV0FBK0I7UUFEL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFDdEMsQ0FBQzs7OztJQUVKLDBDQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNyRSxHQUFHOzs7O1FBQUMsVUFBQSxjQUFjO1lBQ2hCLHFEQUFxRDtZQUNyRCxJQUNFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxjQUFjLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxjQUFjLEVBQTVCLENBQTRCLEVBQUMsRUFDbkU7Z0JBQ0EsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxD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ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQYXltZW50RGV0YWlscyxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxuICBVc2VyUGF5bWVudFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBlZGl0Q2FyZDogc3RyaW5nO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudERldGFpbHMgPT4ge1xuICAgICAgICAvLyBTZXQgZmlyc3QgcGF5bWVudCBtZXRob2QgdG8gREVGQVVMVCBpZiBub25lIGlzIHNldFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGF5bWVudERldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICFwYXltZW50RGV0YWlscy5maW5kKHBheW1lbnREZXRhaWwgPT4gcGF5bWVudERldGFpbC5kZWZhdWx0UGF5bWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJQYXltZW50U2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHMoKTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHtcbiAgICBkZWZhdWx0UGF5bWVudCxcbiAgICBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICBleHBpcnlNb250aCxcbiAgICBleHBpcnlZZWFyLFxuICAgIGNhcmROdW1iZXIsXG4gIH06IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLnNldEFzRGVmYXVsdCcpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5kZWxldGUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWxldGVDb25maXJtYXRpb24nKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5leHBpcmVzJywge1xuICAgICAgICBtb250aDogZXhwaXJ5TW9udGgsXG4gICAgICAgIHllYXI6IGV4cGlyeVllYXIsXG4gICAgICB9KSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudE1ldGhvZCcpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgdGV4dFNldEFzRGVmYXVsdCxcbiAgICAgICAgICB0ZXh0RGVsZXRlLFxuICAgICAgICAgIHRleHREZWxldGVDb25maXJtYXRpb24sXG4gICAgICAgICAgdGV4dEV4cGlyZXMsXG4gICAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kLFxuICAgICAgICBdKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogeyBuYW1lOiBzdHJpbmc7IGV2ZW50OiBzdHJpbmcgfVtdID0gW107XG4gICAgICAgICAgaWYgKCFkZWZhdWx0UGF5bWVudCkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dFNldEFzRGVmYXVsdCwgZXZlbnQ6ICdkZWZhdWx0JyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogdGV4dERlbGV0ZSwgZXZlbnQ6ICdlZGl0JyB9KTtcbiAgICAgICAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgICAgICAgaGVhZGVyOiBkZWZhdWx0UGF5bWVudCA/IHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCA6IG51bGwsXG4gICAgICAgICAgICB0ZXh0Qm9sZDogYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICAgICAgICB0ZXh0OiBbY2FyZE51bWJlciwgdGV4dEV4cGlyZXNdLFxuICAgICAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgICAgIGRlbGV0ZU1zZzogdGV4dERlbGV0ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZC5pZCk7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXRFZGl0KHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IHBheW1lbnRNZXRob2QuaWQ7XG4gIH1cblxuICBjYW5jZWxDYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5zZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHBheW1lbnRNZXRob2QuaWQpO1xuICB9XG59XG4iXX0=