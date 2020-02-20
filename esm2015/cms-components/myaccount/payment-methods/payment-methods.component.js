import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PaymentDetails, TranslationService, UserPaymentService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon';
let PaymentMethodsComponent = class PaymentMethodsComponent {
    constructor(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap(paymentDetails => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find(paymentDetail => paymentDetail.defaultPayment)) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    }
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, cardType, }) {
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
            const actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            const card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions,
                deleteMsg: textDeleteConfirmation,
                img: this.getCardIcon(cardType.code),
            };
            return card;
        }));
    }
    deletePaymentMethod(paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    }
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    cancelCard() {
        this.editCard = null;
    }
    setDefaultPaymentMethod(paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    }
    getCardIcon(code) {
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
};
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: TranslationService }
];
PaymentMethodsComponent = __decorate([
    Component({
        selector: 'cx-payment-methods',
        template: "<ng-container *ngIf=\"paymentMethods$ | async as paymentMethods\">\n  <div class=\"cx-payment container\">\n    <div class=\"cx-header\">\n      <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n    </div>\n\n    <div class=\"cx-body\">\n      <div class=\"cx-msg\">\n        {{\n          'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n      <ng-template #cards>\n        <div class=\"cx-existing row\">\n          <div\n            class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n            *ngFor=\"let paymentMethod of paymentMethods\"\n          >\n            <div class=\"cx-payment-inner\">\n              <cx-card\n                [border]=\"true\"\n                [fitToContainer]=\"true\"\n                [content]=\"getCardContent(paymentMethod) | async\"\n                (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n                (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n                (editCard)=\"setEdit(paymentMethod)\"\n                [editMode]=\"editCard === paymentMethod.id\"\n                (cancelCard)=\"cancelCard()\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
    })
], PaymentMethodsComponent);
export { PaymentMethodsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTzlELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBTWxDLFlBQ1Usa0JBQXNDLEVBQ3RDLFdBQStCO1FBRC9CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBTHpDLGNBQVMsR0FBRyxTQUFTLENBQUM7SUFNbkIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDckUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25CLHFEQUFxRDtZQUNyRCxJQUNFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUNuRTtnQkFDQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDckM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7WUFyRytCLGtCQUFrQjtZQUN6QixrQkFBa0I7O0FBUjlCLHVCQUF1QjtJQUpuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDgyQ0FBK0M7S0FDaEQsQ0FBQztHQUNXLHVCQUF1QixDQTRHbkM7U0E1R1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBheW1lbnREZXRhaWxzLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG4gIFVzZXJQYXltZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICBlZGl0Q2FyZDogc3RyaW5nO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzKCkucGlwZShcbiAgICAgIHRhcChwYXltZW50RGV0YWlscyA9PiB7XG4gICAgICAgIC8vIFNldCBmaXJzdCBwYXltZW50IG1ldGhvZCB0byBERUZBVUxUIGlmIG5vbmUgaXMgc2V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXltZW50RGV0YWlscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgIXBheW1lbnREZXRhaWxzLmZpbmQocGF5bWVudERldGFpbCA9PiBwYXltZW50RGV0YWlsLmRlZmF1bHRQYXltZW50KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmdldFBheW1lbnRNZXRob2RzTG9hZGluZygpO1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcygpO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoe1xuICAgIGRlZmF1bHRQYXltZW50LFxuICAgIGFjY291bnRIb2xkZXJOYW1lLFxuICAgIGV4cGlyeU1vbnRoLFxuICAgIGV4cGlyeVllYXIsXG4gICAgY2FyZE51bWJlcixcbiAgICBjYXJkVHlwZSxcbiAgfTogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuc2V0QXNEZWZhdWx0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmRlbGV0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlbGV0ZUNvbmZpcm1hdGlvbicpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmV4cGlyZXMnLCB7XG4gICAgICAgIG1vbnRoOiBleHBpcnlNb250aCxcbiAgICAgICAgeWVhcjogZXhwaXJ5WWVhcixcbiAgICAgIH0pLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BheW1lbnRDYXJkLmRlZmF1bHRQYXltZW50TWV0aG9kJyksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKFtcbiAgICAgICAgICB0ZXh0U2V0QXNEZWZhdWx0LFxuICAgICAgICAgIHRleHREZWxldGUsXG4gICAgICAgICAgdGV4dERlbGV0ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICB0ZXh0RXhwaXJlcyxcbiAgICAgICAgICB0ZXh0RGVmYXVsdFBheW1lbnRNZXRob2QsXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiB7IG5hbWU6IHN0cmluZzsgZXZlbnQ6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgICAgICBpZiAoIWRlZmF1bHRQYXltZW50KSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0U2V0QXNEZWZhdWx0LCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0RGVsZXRlLCBldmVudDogJ2VkaXQnIH0pO1xuICAgICAgICAgIGNvbnN0IGNhcmQ6IENhcmQgPSB7XG4gICAgICAgICAgICBoZWFkZXI6IGRlZmF1bHRQYXltZW50ID8gdGV4dERlZmF1bHRQYXltZW50TWV0aG9kIDogbnVsbCxcbiAgICAgICAgICAgIHRleHRCb2xkOiBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtjYXJkTnVtYmVyLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgZGVsZXRlTXNnOiB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgICAgaW1nOiB0aGlzLmdldENhcmRJY29uKGNhcmRUeXBlLmNvZGUpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBkZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kLmlkKTtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxuXG4gIHNldEVkaXQocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gcGF5bWVudE1ldGhvZC5pZDtcbiAgfVxuXG4gIGNhbmNlbENhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IG51bGw7XG4gIH1cblxuICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZC5pZCk7XG4gIH1cblxuICBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBjY0ljb246IHN0cmluZztcbiAgICBpZiAoY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5WSVNBO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ21hc3RlcicgfHwgY29kZSA9PT0gJ21hc3RlcmNhcmRfZXVyb2NhcmQnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5NQVNURVJfQ0FSRDtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdkaW5lcnMnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5ESU5FUlNfQ0xVQjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdhbWV4Jykge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQU1FWDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2NJY29uID0gdGhpcy5pY29uVHlwZXMuQ1JFRElUX0NBUkQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNjSWNvbjtcbiAgfVxufVxuIl19