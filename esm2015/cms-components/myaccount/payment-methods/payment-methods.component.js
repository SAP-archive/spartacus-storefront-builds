/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.paymentMethods$ = this.userService.getPaymentMethods().pipe(tap((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        paymentDetails => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((/**
                 * @param {?} paymentDetail
                 * @return {?}
                 */
                paymentDetail => paymentDetail.defaultPayment))) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        })));
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
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textSetAsDefault, textDelete, textDeleteConfirmation, textExpires, textDefaultPaymentMethod,]) => {
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
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBT2xDLFlBQ1UsV0FBd0IsRUFDeEIsV0FBK0I7UUFEL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3RDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUM5RCxHQUFHOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkIscURBQXFEO1lBQ3JELElBQ0UsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN6QixDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O2dCQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBQyxFQUNuRTtnQkFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEVBQ2IsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsR0FDSztRQUNmLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDaEQsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxVQUFVO2FBQ2pCLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQztTQUMvRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFDRCxDQUFDLENBQ0MsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixzQkFBc0IsRUFDdEIsV0FBVyxFQUNYLHdCQUF3QixFQUN6QixFQUFFLEVBQUU7O2tCQUNHLE9BQU8sR0FBc0MsRUFBRTtZQUNyRCxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7O2tCQUM1QyxJQUFJLEdBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN4RCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2dCQUMvQixPQUFPO2dCQUNQLFNBQVMsRUFBRSxzQkFBc0I7YUFDbEM7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLGFBQTZCO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLGFBQTZCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsYUFBNkI7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsdXlDQUErQzthQUNoRDs7OztZQVRDLFdBQVc7WUFEWCxrQkFBa0I7Ozs7SUFZbEIsa0RBQThDOztJQUM5QywyQ0FBaUI7O0lBQ2pCLDJDQUE4Qjs7SUFFOUIsaURBQTZCOzs7OztJQUczQiw4Q0FBZ0M7Ozs7O0lBQ2hDLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGVkaXRDYXJkOiBzdHJpbmc7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHVzZXJTZXJ2aWNlU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKS5waXBlKFxuICAgICAgdGFwKHBheW1lbnREZXRhaWxzID0+IHtcbiAgICAgICAgLy8gU2V0IGZpcnN0IHBheW1lbnQgbWV0aG9kIHRvIERFRkFVTFQgaWYgbm9uZSBpcyBzZXRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAhcGF5bWVudERldGFpbHMuZmluZChwYXltZW50RGV0YWlsID0+IHBheW1lbnREZXRhaWwuZGVmYXVsdFBheW1lbnQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFBheW1lbnRNZXRob2QocGF5bWVudERldGFpbHNbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoe1xuICAgIGRlZmF1bHRQYXltZW50LFxuICAgIGFjY291bnRIb2xkZXJOYW1lLFxuICAgIGV4cGlyeU1vbnRoLFxuICAgIGV4cGlyeVllYXIsXG4gICAgY2FyZE51bWJlcixcbiAgfTogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2V0QXNEZWZhdWx0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmRlbGV0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlbGV0ZUNvbmZpcm1hdGlvbicpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBleHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0U2V0QXNEZWZhdWx0LFxuICAgICAgICAgIHRleHREZWxldGUsXG4gICAgICAgICAgdGV4dERlbGV0ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiB7IG5hbWU6IHN0cmluZzsgZXZlbnQ6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRQYXltZW50KSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0U2V0QXNEZWZhdWx0LCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0RGVsZXRlLCBldmVudDogJ2VkaXQnIH0pO1xuICAgICAgICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICAgICAgICBoZWFkZXI6IGRlZmF1bHRQYXltZW50ID8gdGV4dERlZmF1bHRQYXltZW50TWV0aG9kIDogbnVsbCxcbiAgICAgICAgICAgIHRleHRCb2xkOiBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtjYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgZGVsZXRlTXNnOiB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5kZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2QuaWQpO1xuICAgIHRoaXMuZWRpdENhcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RWRpdChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSBwYXltZW50TWV0aG9kLmlkO1xuICB9XG5cbiAgY2FuY2VsQ2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5zZXRQYXltZW50TWV0aG9kQXNEZWZhdWx0KHBheW1lbnRNZXRob2QuaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXNlclNlcnZpY2VTdWIpIHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==