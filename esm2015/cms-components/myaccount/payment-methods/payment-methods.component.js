/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { TranslationService, UserService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class PaymentMethodsComponent {
    /**
     * @param {?} userService
     * @param {?} translation
     */
    constructor(userService, translation) {
        this.userService = userService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paymentMethods$ = this.userService.getPaymentMethods().pipe(tap(paymentDetails => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find(paymentDetail => paymentDetail.defaultPayment)) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = null;
        this.loading$ = this.userService.getPaymentMethodsLoading();
        this.userService.loadPaymentMethods();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }) {
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map(([textSetAsDefault, textDelete, textDeleteConfirmation, textExpires, textDefaultPaymentMethod,]) => {
            /** @type {?} */
            const actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            /** @type {?} */
            const card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions,
                deleteMsg: textDeleteConfirmation,
            };
            return card;
        }));
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    deletePaymentMethod(paymentMethod) {
        this.userService.deletePaymentMethod(paymentMethod.id);
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
        this.userService.setPaymentMethodAsDefault(paymentMethod.id);
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
                template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"(loading$ | async); else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"(paymentMethods$ | async) as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserService },
    { type: TranslationService }
];
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
    PaymentMethodsComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBT2xDLFlBQ1UsV0FBd0IsRUFDeEIsV0FBK0I7UUFEL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUM5RCxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkIscURBQXFEO1lBQ3JELElBQ0UsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN6QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQ25FO2dCQUNBLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsRUFDYixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxHQUNLO1FBQ2YsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxDQUFDO1lBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO2dCQUNoRCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsSUFBSSxFQUFFLFVBQVU7YUFDakIsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGtDQUFrQyxDQUFDO1NBQy9ELENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUNELENBQUMsQ0FDQyxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsd0JBQXdCLEVBQ3pCLEVBQUUsRUFBRTs7a0JBQ0csT0FBTyxHQUFzQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDNUQ7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs7a0JBQzVDLElBQUksR0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3hELFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7Z0JBQy9CLE9BQU87Z0JBQ1AsU0FBUyxFQUFFLHNCQUFzQjthQUNsQztZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsYUFBNkI7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsYUFBNkI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxhQUE2QjtRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBbkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1eUNBQStDO2FBQ2hEOzs7O1lBVEMsV0FBVztZQURYLGtCQUFrQjs7OztJQVlsQixrREFBOEM7O0lBQzlDLDJDQUFpQjs7SUFDakIsMkNBQThCOztJQUU5QixpREFBNkI7Ozs7O0lBRzNCLDhDQUFnQzs7Ozs7SUFDaEMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgZWRpdENhcmQ6IHN0cmluZztcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgdXNlclNlcnZpY2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudERldGFpbHMgPT4ge1xuICAgICAgICAvLyBTZXQgZmlyc3QgcGF5bWVudCBtZXRob2QgdG8gREVGQVVMVCBpZiBub25lIGlzIHNldFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGF5bWVudERldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICFwYXltZW50RGV0YWlscy5maW5kKHBheW1lbnREZXRhaWwgPT4gcGF5bWVudERldGFpbC5kZWZhdWx0UGF5bWVudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudCh7XG4gICAgZGVmYXVsdFBheW1lbnQsXG4gICAgYWNjb3VudEhvbGRlck5hbWUsXG4gICAgZXhwaXJ5TW9udGgsXG4gICAgZXhwaXJ5WWVhcixcbiAgICBjYXJkTnVtYmVyLFxuICB9OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5zZXRBc0RlZmF1bHQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uZGVsZXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVsZXRlQ29uZmlybWF0aW9uJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IGV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBleHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVmYXVsdFBheW1lbnRNZXRob2QnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRTZXRBc0RlZmF1bHQsXG4gICAgICAgICAgdGV4dERlbGV0ZSxcbiAgICAgICAgICB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IHsgbmFtZTogc3RyaW5nOyBldmVudDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgICAgIGlmICghZGVmYXVsdFBheW1lbnQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHRTZXRBc0RlZmF1bHQsIGV2ZW50OiAnZGVmYXVsdCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHREZWxldGUsIGV2ZW50OiAnZWRpdCcgfSk7XG4gICAgICAgICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgICAgICAgIGhlYWRlcjogZGVmYXVsdFBheW1lbnQgPyB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QgOiBudWxsLFxuICAgICAgICAgICAgdGV4dEJvbGQ6IGFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgICAgICAgdGV4dDogW2NhcmROdW1iZXIsIHRleHRFeHBpcmVzXSxcbiAgICAgICAgICAgIGFjdGlvbnMsXG4gICAgICAgICAgICBkZWxldGVNc2c6IHRleHREZWxldGVDb25maXJtYXRpb24sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZC5pZCk7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXRFZGl0KHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IHBheW1lbnRNZXRob2QuaWQ7XG4gIH1cblxuICBjYW5jZWxDYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RGVmYXVsdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZC5pZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VyU2VydmljZVN1Yikge1xuICAgICAgdGhpcy51c2VyU2VydmljZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19