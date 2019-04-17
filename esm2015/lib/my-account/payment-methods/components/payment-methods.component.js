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
                template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.label.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.label.newPaymentMethodsAreAddedDuringCheckout'\n          | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod)\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:767.98px){.cx-payment{padding-left:var(--cx-padding,1.25rem);padding-right:var(--cx-padding,1.25rem)}}.cx-header{padding:var(--cx-padding,2.5rem 0 0 0)}.cx-existing{display:var(--cx-display,flex);padding:var(--cx-padding,0 0 2.5rem 0);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-existing{padding:var(--cx-padding,0 0 3.125rem 0)}}@media (max-width:767.98px){.cx-existing{padding:var(--cx-padding,0 0 4.375rem 0)}}.cx-payment-card{padding-top:var(--cx-padding,1.875rem)}.cx-payment-inner{height:var(--cx-height,100%)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3BheW1lbnQtbWV0aG9kcy9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVc5QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBUWxDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxFQUNiLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEdBQ0s7O2NBQ1QsT0FBTyxHQUFzQyxFQUFFO1FBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOztjQUMxQyxJQUFJLEdBQVM7WUFDakIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3pDLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksV0FBVyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzNELE9BQU87WUFDUCxTQUFTLEVBQUUsc0RBQXNEO1NBQ2xFO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGFBQTZCO1FBQy9DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxhQUE2QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLGFBQTZCO1FBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixzekNBQStDOzthQUVoRDs7OztZQVZRLFdBQVc7Ozs7SUFZbEIsa0RBQThDOztJQUM5QywyQ0FBaUI7O0lBQ2pCLDJDQUE4Qjs7SUFDOUIseUNBQWU7O0lBRWYsaURBQTZCOzs7OztJQUVqQiw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGVkaXRDYXJkOiBzdHJpbmc7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICB1c2VySWQ6IHN0cmluZztcblxuICB1c2VyU2VydmljZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpO1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2VTdWIgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gZGF0YS51aWQ7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcyh0aGlzLnVzZXJJZCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudCh7XG4gICAgZGVmYXVsdFBheW1lbnQsXG4gICAgYWNjb3VudEhvbGRlck5hbWUsXG4gICAgZXhwaXJ5TW9udGgsXG4gICAgZXhwaXJ5WWVhcixcbiAgICBjYXJkTnVtYmVyLFxuICB9OiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIGNvbnN0IGFjdGlvbnM6IHsgbmFtZTogc3RyaW5nOyBldmVudDogc3RyaW5nIH1bXSA9IFtdO1xuICAgIGlmICghZGVmYXVsdFBheW1lbnQpIHtcbiAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6ICdTZXQgYXMgZGVmYXVsdCcsIGV2ZW50OiAnZGVmYXVsdCcgfSk7XG4gICAgfVxuICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6ICdEZWxldGUnLCBldmVudDogJ2VkaXQnIH0pO1xuICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICBoZWFkZXI6IGRlZmF1bHRQYXltZW50ID8gJ0RFRkFVTFQnIDogbnVsbCxcbiAgICAgIHRleHRCb2xkOiBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgIHRleHQ6IFtjYXJkTnVtYmVyLCBgRXhwaXJlczogJHtleHBpcnlNb250aH0vJHtleHBpcnlZZWFyfWBdLFxuICAgICAgYWN0aW9ucyxcbiAgICAgIGRlbGV0ZU1zZzogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYXltZW50IG1ldGhvZD8nLFxuICAgIH07XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlUGF5bWVudE1ldGhvZCh0aGlzLnVzZXJJZCwgcGF5bWVudE1ldGhvZC5pZCk7XG4gICAgfVxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RWRpdChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBwYXltZW50TWV0aG9kLmlkO1xuICB9XG5cbiAgY2FuY2VsQ2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQodGhpcy51c2VySWQsIHBheW1lbnRNZXRob2QuaWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlU3ViKSB7XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=