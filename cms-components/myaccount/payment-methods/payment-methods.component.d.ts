import { OnInit } from '@angular/core';
import { PaymentDetails, TranslationService, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon';
import { Card } from '../../../shared/components/card/card.component';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentMethodsComponent implements OnInit {
    private userPaymentService;
    private translation;
    paymentMethods$: Observable<PaymentDetails[]>;
    editCard: string;
    iconTypes: typeof ICON_TYPE;
    loading$: Observable<boolean>;
    constructor(userPaymentService: UserPaymentService, translation: TranslationService);
    ngOnInit(): void;
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, cardType, }: PaymentDetails): Observable<Card>;
    deletePaymentMethod(paymentMethod: PaymentDetails): void;
    setEdit(paymentMethod: PaymentDetails): void;
    cancelCard(): void;
    setDefaultPaymentMethod(paymentMethod: PaymentDetails): void;
    getCardIcon(code: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentMethodsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentMethodsComponent, "cx-payment-methods", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LW1ldGhvZHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlclBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbic7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXltZW50TWV0aG9kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSB1c2VyUGF5bWVudFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjtcbiAgICBwYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gICAgZWRpdENhcmQ6IHN0cmluZztcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IodXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZ2V0Q2FyZENvbnRlbnQoeyBkZWZhdWx0UGF5bWVudCwgYWNjb3VudEhvbGRlck5hbWUsIGV4cGlyeU1vbnRoLCBleHBpcnlZZWFyLCBjYXJkTnVtYmVyLCBjYXJkVHlwZSwgfTogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+O1xuICAgIGRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIHNldEVkaXQocGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIGNhbmNlbENhcmQoKTogdm9pZDtcbiAgICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG4gICAgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19