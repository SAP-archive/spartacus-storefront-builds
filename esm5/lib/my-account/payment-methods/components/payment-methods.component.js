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
                    template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.label.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.label.newPaymentMethodsAreAddedDuringCheckout'\n          | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod)\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3BheW1lbnQtbWV0aG9kcy9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJOUQ7SUFZRSxpQ0FBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7O0lBRWhELDBDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDekQsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsRUFNRTtZQUxmLGtDQUFjLEVBQ2Qsd0NBQWlCLEVBQ2pCLDRCQUFXLEVBQ1gsMEJBQVUsRUFDViwwQkFBVTs7WUFFSixPQUFPLEdBQXNDLEVBQUU7UUFDckQsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7O1lBQzFDLElBQUksR0FBUztZQUNqQixNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDekMsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBWSxXQUFXLFNBQUksVUFBWSxDQUFDO1lBQzNELE9BQU8sU0FBQTtZQUNQLFNBQVMsRUFBRSxzREFBc0Q7U0FDbEU7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQscURBQW1COzs7O0lBQW5CLFVBQW9CLGFBQTZCO1FBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHlDQUFPOzs7O0lBQVAsVUFBUSxhQUE2QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQseURBQXVCOzs7O0lBQXZCLFVBQXdCLGFBQTZCO1FBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHN6Q0FBK0M7aUJBQ2hEOzs7O2dCQVB3QixXQUFXOztJQTZFcEMsOEJBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXJFWSx1QkFBdUI7OztJQUNsQyxrREFBOEM7O0lBQzlDLDJDQUFpQjs7SUFDakIsMkNBQThCOztJQUM5Qix5Q0FBZTs7SUFFZixpREFBNkI7Ozs7O0lBRWpCLDhDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgZWRpdENhcmQ6IHN0cmluZztcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHVzZXJJZDogc3RyaW5nO1xuXG4gIHVzZXJTZXJ2aWNlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXltZW50TWV0aG9kcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCk7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyU2VydmljZVN1YiA9IHRoaXMudXNlclNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy51c2VySWQgPSBkYXRhLnVpZDtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKHRoaXMudXNlcklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRDb250ZW50KHtcbiAgICBkZWZhdWx0UGF5bWVudCxcbiAgICBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICBleHBpcnlNb250aCxcbiAgICBleHBpcnlZZWFyLFxuICAgIGNhcmROdW1iZXIsXG4gIH06IFBheW1lbnREZXRhaWxzKTogQ2FyZCB7XG4gICAgY29uc3QgYWN0aW9uczogeyBuYW1lOiBzdHJpbmc7IGV2ZW50OiBzdHJpbmcgfVtdID0gW107XG4gICAgaWYgKCFkZWZhdWx0UGF5bWVudCkge1xuICAgICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogJ1NldCBhcyBkZWZhdWx0JywgZXZlbnQ6ICdkZWZhdWx0JyB9KTtcbiAgICB9XG4gICAgYWN0aW9ucy5wdXNoKHsgbmFtZTogJ0RlbGV0ZScsIGV2ZW50OiAnZWRpdCcgfSk7XG4gICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgIGhlYWRlcjogZGVmYXVsdFBheW1lbnQgPyAnREVGQVVMVCcgOiBudWxsLFxuICAgICAgdGV4dEJvbGQ6IGFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW2NhcmROdW1iZXIsIGBFeHBpcmVzOiAke2V4cGlyeU1vbnRofS8ke2V4cGlyeVllYXJ9YF0sXG4gICAgICBhY3Rpb25zLFxuICAgICAgZGVsZXRlTXNnOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBheW1lbnQgbWV0aG9kPycsXG4gICAgfTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG5cbiAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5kZWxldGVQYXltZW50TWV0aG9kKHRoaXMudXNlcklkLCBwYXltZW50TWV0aG9kLmlkKTtcbiAgICB9XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXRFZGl0KHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IHBheW1lbnRNZXRob2QuaWQ7XG4gIH1cblxuICBjYW5jZWxDYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2V0UGF5bWVudE1ldGhvZEFzRGVmYXVsdCh0aGlzLnVzZXJJZCwgcGF5bWVudE1ldGhvZC5pZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlclNlcnZpY2VTdWIpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==