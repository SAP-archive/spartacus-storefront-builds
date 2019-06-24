/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class PaymentMethodsComponent {
    /**
     * @param {?} userPaymentService
     * @param {?} translation
     */
    constructor(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((/**
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
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
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
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
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
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
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
    { type: UserPaymentService },
    { type: TranslationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBRUwsa0JBQWtCLEVBQ2xCLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8xQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUtsQyxZQUNVLGtCQUFzQyxFQUN0QyxXQUErQjtRQUQvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNyRSxHQUFHOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkIscURBQXFEO1lBQ3JELElBQ0UsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN6QixDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O2dCQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBQyxFQUNuRTtnQkFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxFQUNiLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEdBQ0s7UUFDZixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsVUFBVTthQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLENBQUM7U0FDL0QsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQ0QsQ0FBQyxDQUNDLGdCQUFnQixFQUNoQixVQUFVLEVBQ1Ysc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCx3QkFBd0IsRUFDekIsRUFBRSxFQUFFOztrQkFDRyxPQUFPLEdBQXNDLEVBQUU7WUFDckQsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUM1RDtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDOztrQkFDNUMsSUFBSSxHQUFTO2dCQUNqQixNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDeEQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztnQkFDL0IsT0FBTztnQkFDUCxTQUFTLEVBQUUsc0JBQXNCO2FBQ2xDO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxhQUE2QjtRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLGFBQTZCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsYUFBNkI7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUEzRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHV5Q0FBK0M7YUFDaEQ7Ozs7WUFUQyxrQkFBa0I7WUFEbEIsa0JBQWtCOzs7O0lBWWxCLGtEQUE4Qzs7SUFDOUMsMkNBQWlCOztJQUNqQiwyQ0FBOEI7Ozs7O0lBRzVCLHFEQUE4Qzs7Ozs7SUFDOUMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGVkaXRDYXJkOiBzdHJpbmc7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCkucGlwZShcbiAgICAgIHRhcChwYXltZW50RGV0YWlscyA9PiB7XG4gICAgICAgIC8vIFNldCBmaXJzdCBwYXltZW50IG1ldGhvZCB0byBERUZBVUxUIGlmIG5vbmUgaXMgc2V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXltZW50RGV0YWlscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgIXBheW1lbnREZXRhaWxzLmZpbmQocGF5bWVudERldGFpbCA9PiBwYXltZW50RGV0YWlsLmRlZmF1bHRQYXltZW50KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoe1xuICAgIGRlZmF1bHRQYXltZW50LFxuICAgIGFjY291bnRIb2xkZXJOYW1lLFxuICAgIGV4cGlyeU1vbnRoLFxuICAgIGV4cGlyeVllYXIsXG4gICAgY2FyZE51bWJlcixcbiAgfTogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2V0QXNEZWZhdWx0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmRlbGV0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlbGV0ZUNvbmZpcm1hdGlvbicpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBleHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0U2V0QXNEZWZhdWx0LFxuICAgICAgICAgIHRleHREZWxldGUsXG4gICAgICAgICAgdGV4dERlbGV0ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiB7IG5hbWU6IHN0cmluZzsgZXZlbnQ6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRQYXltZW50KSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0U2V0QXNEZWZhdWx0LCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0RGVsZXRlLCBldmVudDogJ2VkaXQnIH0pO1xuICAgICAgICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICAgICAgICBoZWFkZXI6IGRlZmF1bHRQYXltZW50ID8gdGV4dERlZmF1bHRQYXltZW50TWV0aG9kIDogbnVsbCxcbiAgICAgICAgICAgIHRleHRCb2xkOiBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtjYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgZGVsZXRlTXNnOiB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kLmlkKTtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldEVkaXQocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gcGF5bWVudE1ldGhvZC5pZDtcbiAgfVxuXG4gIGNhbmNlbENhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZC5pZCk7XG4gIH1cbn1cbiJdfQ==