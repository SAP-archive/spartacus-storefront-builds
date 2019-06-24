import { OnInit } from '@angular/core';
import { PaymentDetails, TranslationService, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../shared/components/card/card.component';
export declare class PaymentMethodsComponent implements OnInit {
    private userPaymentService;
    private translation;
    paymentMethods$: Observable<PaymentDetails[]>;
    editCard: string;
    loading$: Observable<boolean>;
    constructor(userPaymentService: UserPaymentService, translation: TranslationService);
    ngOnInit(): void;
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }: PaymentDetails): Observable<Card>;
    deletePaymentMethod(paymentMethod: PaymentDetails): void;
    setEdit(paymentMethod: PaymentDetails): void;
    cancelCard(): void;
    setDefaultPaymentMethod(paymentMethod: PaymentDetails): void;
}
