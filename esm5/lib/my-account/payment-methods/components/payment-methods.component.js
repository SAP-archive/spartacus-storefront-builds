/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserService } from '@spartacus/core';
var PaymentMethodsComponent = /** @class */ (function () {
    function PaymentMethodsComponent(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paymentMethods$ = this.userService.getPaymentMethods();
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
        /** @type {?} */
        var actions = [];
        if (!defaultPayment) {
            actions.push({ name: 'Set as default', event: 'default' });
        }
        actions.push({ name: 'Delete', event: 'edit' });
        /** @type {?} */
        var card = {
            header: defaultPayment ? 'DEFAULT' : null,
            textBold: accountHolderName,
            text: [cardNumber, "Expires: " + expiryMonth + "/" + expiryYear],
            actions: actions,
            deleteMsg: 'Are you sure you want to delete this payment method?',
        };
        return card;
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
                    template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.label.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.label.newPaymentMethodsAreAddedDuringCheckout'\n          | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod)\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-payment{padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-header{padding:var(--cx-padding,2.5rem 0 0 0)}.cx-existing{display:var(--cx-display,flex);padding:var(--cx-padding,0 0 2.5rem 0);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-existing{padding:var(--cx-padding,0 0 3.125rem 0)}}@media (max-width:767.98px){.cx-existing{padding:var(--cx-padding,0 0 4.375rem 0)}}.cx-payment-card{padding-top:var(--cx-padding,1.875rem)}.cx-payment-inner{height:var(--cx-height,100%)}"]
                }] }
    ];
    /** @nocollapse */
    PaymentMethodsComponent.ctorParameters = function () { return [
        { type: UserService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3BheW1lbnQtbWV0aG9kcy9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU05QztJQWFFLGlDQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFaEQsMENBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN6RCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdEQUFjOzs7O0lBQWQsVUFBZSxFQU1FO1lBTGYsa0NBQWMsRUFDZCx3Q0FBaUIsRUFDakIsNEJBQVcsRUFDWCwwQkFBVSxFQUNWLDBCQUFVOztZQUVKLE9BQU8sR0FBc0MsRUFBRTtRQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs7WUFDMUMsSUFBSSxHQUFTO1lBQ2pCLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN6QyxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxjQUFZLFdBQVcsU0FBSSxVQUFZLENBQUM7WUFDM0QsT0FBTyxTQUFBO1lBQ1AsU0FBUyxFQUFFLHNEQUFzRDtTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxxREFBbUI7Ozs7SUFBbkIsVUFBb0IsYUFBNkI7UUFDL0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLGFBQTZCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsNENBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx5REFBdUI7Ozs7SUFBdkIsVUFBd0IsYUFBNkI7UUFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsc3pDQUErQzs7aUJBRWhEOzs7O2dCQVZRLFdBQVc7O0lBZ0ZwQiw4QkFBQztDQUFBLEFBMUVELElBMEVDO1NBckVZLHVCQUF1Qjs7O0lBQ2xDLGtEQUE4Qzs7SUFDOUMsMkNBQWlCOztJQUNqQiwyQ0FBOEI7O0lBQzlCLHlDQUFlOztJQUVmLGlEQUE2Qjs7Ozs7SUFFakIsOENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBlZGl0Q2FyZDogc3RyaW5nO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgdXNlclNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlU3ViID0gdGhpcy51c2VyU2VydmljZS5nZXQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IGRhdGEudWlkO1xuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHModGhpcy51c2VySWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoe1xuICAgIGRlZmF1bHRQYXltZW50LFxuICAgIGFjY291bnRIb2xkZXJOYW1lLFxuICAgIGV4cGlyeU1vbnRoLFxuICAgIGV4cGlyeVllYXIsXG4gICAgY2FyZE51bWJlcixcbiAgfTogUGF5bWVudERldGFpbHMpOiBDYXJkIHtcbiAgICBjb25zdCBhY3Rpb25zOiB7IG5hbWU6IHN0cmluZzsgZXZlbnQ6IHN0cmluZyB9W10gPSBbXTtcbiAgICBpZiAoIWRlZmF1bHRQYXltZW50KSB7XG4gICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiAnU2V0IGFzIGRlZmF1bHQnLCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgIH1cbiAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiAnRGVsZXRlJywgZXZlbnQ6ICdlZGl0JyB9KTtcbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgaGVhZGVyOiBkZWZhdWx0UGF5bWVudCA/ICdERUZBVUxUJyA6IG51bGwsXG4gICAgICB0ZXh0Qm9sZDogYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbY2FyZE51bWJlciwgYEV4cGlyZXM6ICR7ZXhwaXJ5TW9udGh9LyR7ZXhwaXJ5WWVhcn1gXSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBkZWxldGVNc2c6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGF5bWVudCBtZXRob2Q/JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZVBheW1lbnRNZXRob2QodGhpcy51c2VySWQsIHBheW1lbnRNZXRob2QuaWQpO1xuICAgIH1cbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldEVkaXQocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gcGF5bWVudE1ldGhvZC5pZDtcbiAgfVxuXG4gIGNhbmNlbENhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5zZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHRoaXMudXNlcklkLCBwYXltZW50TWV0aG9kLmlkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy51c2VyU2VydmljZVN1Yikge1xuICAgICAgdGhpcy51c2VyU2VydmljZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19