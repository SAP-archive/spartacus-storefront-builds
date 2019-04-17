/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, } from '@angular/core';
import { CartDataService } from '@spartacus/core';
import { UserService } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import { masterCardImgSrc } from '../../../../ui/images/masterCard';
import { visaImgSrc } from '../../../../ui/images/visa';
export class PaymentMethodComponent {
    /**
     * @param {?} cartData
     * @param {?} userService
     */
    constructor(cartData, userService) {
        this.cartData = cartData;
        this.userService = userService;
        this.newPaymentFormManuallyOpened = false;
        this.cards = [];
        this.backStep = new EventEmitter();
        this.addPaymentInfo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isLoading$ = this.userService.getPaymentMethodsLoading();
        this.userService.loadPaymentMethods(this.cartData.userId);
        this.existingPaymentMethods$ = this.userService.getPaymentMethods().pipe(tap(payments => {
            if (this.cards.length === 0) {
                payments.forEach(payment => {
                    /** @type {?} */
                    const card = this.getCardContent(payment);
                    if (this.selectedPayment &&
                        this.selectedPayment.id === payment.id) {
                        card.header = 'SELECTED';
                    }
                });
            }
        }));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getCardContent(payment) {
        /** @type {?} */
        let ccImage;
        if (payment.cardType.code === 'visa') {
            ccImage = visaImgSrc;
        }
        else if (payment.cardType.code === 'master') {
            ccImage = masterCardImgSrc;
        }
        /** @type {?} */
        const card = {
            title: payment.defaultPayment ? 'Default Payment Method' : '',
            textBold: payment.accountHolderName,
            text: [
                payment.cardNumber,
                'Expires: ' + payment.expiryMonth + '/' + payment.expiryYear,
            ],
            img: ccImage,
            actions: [{ name: 'Use this payment', event: 'send' }],
        };
        this.cards.push(card);
        return card;
    }
    /**
     * @param {?} paymentDetails
     * @param {?} index
     * @return {?}
     */
    paymentMethodSelected(paymentDetails, index) {
        this.selectedPayment = paymentDetails;
        for (let i = 0; this.cards[i]; i++) {
            /** @type {?} */
            const card = this.cards[i];
            if (i === index) {
                card.header = 'SELECTED';
            }
            else {
                card.header = '';
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.addPaymentInfo.emit({
            payment: this.selectedPayment,
            newPayment: false,
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addNewPaymentMethod({ paymentDetails, billingAddress, }) {
        this.addPaymentInfo.emit({
            payment: paymentDetails,
            billingAddress,
            newPayment: true,
        });
    }
    /**
     * @return {?}
     */
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    /**
     * @return {?}
     */
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    /**
     * @return {?}
     */
    back() {
        this.backStep.emit();
    }
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container\n  *ngIf=\"(existingPaymentMethods$ | async) as existingPaymentMethods\"\n>\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'payment.label.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'payment.label.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'payment.action.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"cards[i]\"\n              (sendCard)=\"paymentMethodSelected(method, i)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.action.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.action.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (addPaymentInfo)=\"addNewPaymentMethod($event)\"\n        (backToPayment)=\"hideNewPaymentForm()\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/@media (max-width:991.98px){:host{display:var(--cx-display,block);background-color:var(--cx-background-color,var(--cx-g-color-background))}.col-md-12{padding:var(--cx-padding,0 4.375rem)}.container{width:var(--cx-width,100%)}}@media (max-width:767.98px){.col-md-12{padding:var(--cx-padding,0 2.25rem)}}.cx-checkout-btns{padding:var(--cx-padding,1rem 0);justify-content:var(--cx-justify-content,flex-end)}@media (max-width:767.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}}.cx-checkout-title{text-transform:var(--cx-text-transform,capitalize);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}.cx-checkout-text{margin-bottom:var(--cx-margin,1.25rem)}.cx-spinner{padding-top:var(--cx-padding,30px);padding-bottom:var(--cx-padding,30px)}.cx-payment.container{padding:var(--cx-padding,0)}.cx-payment-card{padding-bottom:var(--cxpadding,30px)}.cx-payment-card-inner{height:var(--cx-height,100%);background-color:var(--cx-background-color,var(--cx-g-color-inverse));cursor:pointer}.cx-checkout-title{text-transform:var(--cx-text-transform,uppercase);margin:var(--cx-margin,0 auto);padding:var(--cx-padding,2.375rem 0 1.75rem 0)}@media (max-width:991.98px){.cx-checkout-btns .btn-action{margin:var(--cx-margin,0 0 1rem)}.cx-payment-card-inner{background-color:var(--cx-background-color,var(--cx-g-color-inverse))}.cx-checkout-text{padding-left:var(--cx-padding,3.5rem)}}.cx-checkout-btns{padding-bottom:var(--cx-padding,1rem)}@media (max-width:767.98px){.cx-checkout-text{padding-left:var(--cx-padding,1.5rem)}.cx-checkout-btns .btn-action{margin-bottom:var(--cx-margin,1rem)}}.cx-checkout-body{display:var(--cx-display,flex);align-items:var(--cx-align-items,stretch)}@media (max-width:991.98px){.cx-checkout-btns{padding:var(--cx-padding,1.25rem 0)}.cx-checkout-body.row{padding:var(--cx-padding,0)}}"]
            }] }
];
/** @nocollapse */
PaymentMethodComponent.ctorParameters = () => [
    { type: CartDataService },
    { type: UserService }
];
PaymentMethodComponent.propDecorators = {
    selectedPayment: [{ type: Input }],
    backStep: [{ type: Output }],
    addPaymentInfo: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaymentMethodComponent.prototype.newPaymentFormManuallyOpened;
    /** @type {?} */
    PaymentMethodComponent.prototype.existingPaymentMethods$;
    /** @type {?} */
    PaymentMethodComponent.prototype.cards;
    /** @type {?} */
    PaymentMethodComponent.prototype.isLoading$;
    /** @type {?} */
    PaymentMethodComponent.prototype.selectedPayment;
    /** @type {?} */
    PaymentMethodComponent.prototype.backStep;
    /** @type {?} */
    PaymentMethodComponent.prototype.addPaymentInfo;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.cartData;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVN4RCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQWFqQyxZQUNZLFFBQXlCLEVBQ3pCLFdBQXdCO1FBRHhCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZHBDLGlDQUE0QixHQUFHLEtBQUssQ0FBQztRQUVyQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBTW5CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRW5DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt0QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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QUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUEvR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHF6RUFBOEM7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWZRLGVBQWU7WUFDZixXQUFXOzs7OEJBcUJqQixLQUFLO3VCQUVMLE1BQU07NkJBRU4sTUFBTTs7OztJQVRQLDhEQUFxQzs7SUFDckMseURBQXNEOztJQUN0RCx1Q0FBbUI7O0lBQ25CLDRDQUFnQzs7SUFFaEMsaURBQ2dDOztJQUNoQywwQ0FDbUM7O0lBQ25DLGdEQUN5Qzs7Ozs7SUFHdkMsMENBQW1DOzs7OztJQUNuQyw2Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBheW1lbnREZXRhaWxzLCBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWFzdGVyQ2FyZEltZ1NyYyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL2ltYWdlcy9tYXN0ZXJDYXJkJztcbmltcG9ydCB7IHZpc2FJbWdTcmMgfSBmcm9tICcuLi8uLi8uLi8uLi91aS9pbWFnZXMvdmlzYSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC1tZXRob2QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGNhcmRzOiBDYXJkW10gPSBbXTtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASW5wdXQoKVxuICBzZWxlY3RlZFBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICBAT3V0cHV0KClcbiAgYmFja1N0ZXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGFkZFBheW1lbnRJbmZvID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kc0xvYWRpbmcoKTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRQYXltZW50TWV0aG9kcyh0aGlzLmNhcnREYXRhLnVzZXJJZCk7XG5cbiAgICB0aGlzLmV4aXN0aW5nUGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpLnBpcGUoXG4gICAgICB0YXAocGF5bWVudHMgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwYXltZW50cy5mb3JFYWNoKHBheW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRlbnQocGF5bWVudCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50ICYmXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQYXltZW50LmlkID09PSBwYXltZW50LmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY2FyZC5oZWFkZXIgPSAnU0VMRUNURUQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IENhcmQge1xuICAgIGxldCBjY0ltYWdlOiBzdHJpbmc7XG4gICAgaWYgKHBheW1lbnQuY2FyZFR5cGUuY29kZSA9PT0gJ3Zpc2EnKSB7XG4gICAgICBjY0ltYWdlID0gdmlzYUltZ1NyYztcbiAgICB9IGVsc2UgaWYgKHBheW1lbnQuY2FyZFR5cGUuY29kZSA9PT0gJ21hc3RlcicpIHtcbiAgICAgIGNjSW1hZ2UgPSBtYXN0ZXJDYXJkSW1nU3JjO1xuICAgIH1cbiAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgdGl0bGU6IHBheW1lbnQuZGVmYXVsdFBheW1lbnQgPyAnRGVmYXVsdCBQYXltZW50IE1ldGhvZCcgOiAnJyxcbiAgICAgIHRleHRCb2xkOiBwYXltZW50LmFjY291bnRIb2xkZXJOYW1lLFxuICAgICAgdGV4dDogW1xuICAgICAgICBwYXltZW50LmNhcmROdW1iZXIsXG4gICAgICAgICdFeHBpcmVzOiAnICsgcGF5bWVudC5leHBpcnlNb250aCArICcvJyArIHBheW1lbnQuZXhwaXJ5WWVhcixcbiAgICAgIF0sXG4gICAgICBpbWc6IGNjSW1hZ2UsXG4gICAgICBhY3Rpb25zOiBbeyBuYW1lOiAnVXNlIHRoaXMgcGF5bWVudCcsIGV2ZW50OiAnc2VuZCcgfV0sXG4gICAgfTtcblxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIHBheW1lbnRNZXRob2RTZWxlY3RlZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGF5bWVudCA9IHBheW1lbnREZXRhaWxzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IHRoaXMuY2FyZHNbaV07IGkrKykge1xuICAgICAgY29uc3QgY2FyZCA9IHRoaXMuY2FyZHNbaV07XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnU0VMRUNURUQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZC5oZWFkZXIgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkUGF5bWVudEluZm8uZW1pdCh7XG4gICAgICBwYXltZW50OiB0aGlzLnNlbGVjdGVkUGF5bWVudCxcbiAgICAgIG5ld1BheW1lbnQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkTmV3UGF5bWVudE1ldGhvZCh7XG4gICAgcGF5bWVudERldGFpbHMsXG4gICAgYmlsbGluZ0FkZHJlc3MsXG4gIH06IHtcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3M7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLmFkZFBheW1lbnRJbmZvLmVtaXQoe1xuICAgICAgcGF5bWVudDogcGF5bWVudERldGFpbHMsXG4gICAgICBiaWxsaW5nQWRkcmVzcyxcbiAgICAgIG5ld1BheW1lbnQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzaG93TmV3UGF5bWVudEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrU3RlcC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==