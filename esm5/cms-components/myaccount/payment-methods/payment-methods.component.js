/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var PaymentMethodsComponent = /** @class */ (function () {
    function PaymentMethodsComponent(userService, translation) {
        this.userService = userService;
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
        this.paymentMethods$ = this.userService.getPaymentMethods().pipe(tap(function (paymentDetails) {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find(function (paymentDetail) { return paymentDetail.defaultPayment; })) {
                _this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = null;
        this.loading$ = this.userService.getPaymentMethodsLoading();
        this.userServiceSub = this.userService.get().subscribe(function (data) {
            _this.userId = data.uid;
            _this.userService.loadPaymentMethods(_this.userId);
        });
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
        ]).pipe(map(function (_a) {
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
        }));
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
        if (this.userId) {
            this.userService.deletePaymentMethod(this.userId, paymentMethod.id);
        }
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
        if (this.userId) {
            this.userService.setPaymentMethodAsDefault(this.userId, paymentMethod.id);
        }
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
        { type: UserService },
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
    PaymentMethodsComponent.prototype.userId;
    /** @type {?} */
    PaymentMethodsComponent.prototype.userServiceSub;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUE0QixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQztJQVlFLGlDQUNVLFdBQXdCLEVBQ3hCLFdBQStCO1FBRC9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosMENBQVE7OztJQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDOUQsR0FBRyxDQUFDLFVBQUEsY0FBYztZQUNoQixxREFBcUQ7WUFDckQsSUFDRSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxjQUFjLEVBQTVCLENBQTRCLENBQUMsRUFDbkU7Z0JBQ0EsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUks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Vzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7O2dCQTNHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdXlDQUErQztpQkFDaEQ7Ozs7Z0JBVkMsV0FBVztnQkFDWCxrQkFBa0I7O0lBa0hwQiw4QkFBQztDQUFBLEFBNUdELElBNEdDO1NBeEdZLHVCQUF1Qjs7O0lBQ2xDLGtEQUE4Qzs7SUFDOUMsMkNBQWlCOztJQUNqQiwyQ0FBOEI7O0lBQzlCLHlDQUFlOztJQUVmLGlEQUE2Qjs7Ozs7SUFHM0IsOENBQWdDOzs7OztJQUNoQyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQYXltZW50RGV0YWlscyxcbiAgVXNlclNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtbWV0aG9kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBlZGl0Q2FyZDogc3RyaW5nO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgdXNlclNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudERldGFpbHMgPT4ge1xuICAgICAgICAvLyBTZXQgZmlyc3QgcGF5bWVudCBtZXRob2QgdG8gREVGQVVMVCBpZiBub25lIGlzIHNldFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGF5bWVudERldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICFwYXltZW50RGV0YWlscy5maW5kKHBheW1lbnREZXRhaWwgPT4gcGF5bWVudERldGFpbC5kZWZhdWx0UGF5bWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2VTdWIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gZGF0YS51aWQ7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcyh0aGlzLnVzZXJJZCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudCh7XG4gICAgZGVmYXVsdFBheW1lbnQsXG4gICAgYWNjb3VudEhvbGRlck5hbWUsXG4gICAgZXhwaXJ5TW9udGgsXG4gICAgZXhwaXJ5WWVhcixcbiAgICBjYXJkTnVtYmVyLFxuICB9OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5zZXRBc0RlZmF1bHQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uZGVsZXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVsZXRlQ29uZmlybWF0aW9uJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IGV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBleHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVmYXVsdFBheW1lbnRNZXRob2QnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRTZXRBc0RlZmF1bHQsXG4gICAgICAgICAgdGV4dERlbGV0ZSxcbiAgICAgICAgICB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IHsgbmFtZTogc3RyaW5nOyBldmVudDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgICAgIGlmICghZGVmYXVsdFBheW1lbnQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHRTZXRBc0RlZmF1bHQsIGV2ZW50OiAnZGVmYXVsdCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHREZWxldGUsIGV2ZW50OiAnZWRpdCcgfSk7XG4gICAgICAgICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgICAgICAgIGhlYWRlcjogZGVmYXVsdFBheW1lbnQgPyB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QgOiBudWxsLFxuICAgICAgICAgICAgdGV4dEJvbGQ6IGFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgICAgdGV4dDogW2NhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICAgIGFjdGlvbnMsXG4gICAgICAgICAgICBkZWxldGVNc2c6IHRleHREZWxldGVDb25maXJtYXRpb24sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlUGF5bWVudE1ldGhvZCh0aGlzLnVzZXJJZCwgcGF5bWVudE1ldGhvZC5pZCk7XG4gICAgfVxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RWRpdChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBwYXltZW50TWV0aG9kLmlkO1xuICB9XG5cbiAgY2FuY2VsQ2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQodGhpcy51c2VySWQsIHBheW1lbnRNZXRob2QuaWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlU3ViKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=