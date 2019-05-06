/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserService } from '@spartacus/core';
export class PaymentMethodsComponent {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paymentMethods$ = this.userService.getPaymentMethods();
        this.editCard = null;
        this.loading$ = this.userService.getPaymentMethodsLoading();
        this.userServiceSub = this.userService.get().subscribe(data => {
            this.userId = data.uid;
            this.userService.loadPaymentMethods(this.userId);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }) {
        /** @type {?} */
        const actions = [];
        if (!defaultPayment) {
            actions.push({ name: 'Set as default', event: 'default' });
        }
        actions.push({ name: 'Delete', event: 'edit' });
        /** @type {?} */
        const card = {
            header: defaultPayment ? 'DEFAULT' : null,
            textBold: accountHolderName,
            text: [cardNumber, `Expires: ${expiryMonth}/${expiryYear}`],
            actions,
            deleteMsg: 'Are you sure you want to delete this payment method?',
        };
        return card;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    deletePaymentMethod(paymentMethod) {
        if (this.userId) {
            this.userService.deletePaymentMethod(this.userId, paymentMethod.id);
        }
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    /**
     * @return {?}
     */
    cancelCard() {
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setDefaultPaymentMethod(paymentMethod) {
        if (this.userId) {
            this.userService.setPaymentMethodAsDefault(this.userId, paymentMethod.id);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.userServiceSub) {
            this.userServiceSub.unsubscribe();
        }
    }
}
PaymentMethodsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-methods',
                template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod)\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFrQixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVE5RCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBUWxDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxFQUNiLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEdBQ0s7O2NBQ1QsT0FBTyxHQUFzQyxFQUFFO1FBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOztjQUMxQyxJQUFJLEdBQVM7WUFDakIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pDLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksV0FBVyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzNELE9BQU87WUFDUCxTQUFTLEVBQUUsc0RBQXNEO1NBQ2xFO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGFBQTZCO1FBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxhQUE2QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLGFBQTZCO1FBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwreENBQStDO2FBQ2hEOzs7O1lBUHdCLFdBQVc7Ozs7SUFTbEMsa0RBQThDOztJQUM5QywyQ0FBaUI7O0lBQ2pCLDJDQUE4Qjs7SUFDOUIseUNBQWU7O0lBRWYsaURBQTZCOzs7OztJQUVqQiw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscywgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBheW1lbnQtbWV0aG9kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBlZGl0Q2FyZDogc3RyaW5nO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgdXNlcklkOiBzdHJpbmc7XG5cbiAgdXNlclNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKTtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlU3ViID0gdGhpcy51c2VyU2VydmljZS5nZXQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IGRhdGEudWlkO1xuICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkUGF5bWVudE1ldGhvZHModGhpcy51c2VySWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoe1xuICAgIGRlZmF1bHRQYXltZW50LFxuICAgIGFjY291bnRIb2xkZXJOYW1lLFxuICAgIGV4cGlyeU1vbnRoLFxuICAgIGV4cGlyeVllYXIsXG4gICAgY2FyZE51bWJlcixcbiAgfTogUGF5bWVudERldGFpbHMpOiBDYXJkIHtcbiAgICBjb25zdCBhY3Rpb25zOiB7IG5hbWU6IHN0cmluZzsgZXZlbnQ6IHN0cmluZyB9W10gPSBbXTtcbiAgICBpZiAoIWRlZmF1bHRQYXltZW50KSB7XG4gICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiAnU2V0IGFzIGRlZmF1bHQnLCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgIH1cbiAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiAnRGVsZXRlJywgZXZlbnQ6ICdlZGl0JyB9KTtcbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgaGVhZGVyOiBkZWZhdWx0UGF5bWVudCA/ICdERUZBVUxUJyA6IG51bGwsXG4gICAgICB0ZXh0Qm9sZDogYWNjb3VudEhvbGRlck5hbWUsXG4gICAgICB0ZXh0OiBbY2FyZE51bWJlciwgYEV4cGlyZXM6ICR7ZXhwaXJ5TW9udGh9LyR7ZXhwaXJ5WWVhcn1gXSxcbiAgICAgIGFjdGlvbnMsXG4gICAgICBkZWxldGVNc2c6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGF5bWVudCBtZXRob2Q/JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZVBheW1lbnRNZXRob2QodGhpcy51c2VySWQsIHBheW1lbnRNZXRob2QuaWQpO1xuICAgIH1cbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldEVkaXQocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gcGF5bWVudE1ldGhvZC5pZDtcbiAgfVxuXG4gIGNhbmNlbENhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVzZXJJZCkge1xuICAgICAgdGhpcy51c2VyU2VydmljZS5zZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHRoaXMudXNlcklkLCBwYXltZW50TWV0aG9kLmlkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VyU2VydmljZVN1Yikge1xuICAgICAgdGhpcy51c2VyU2VydmljZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19