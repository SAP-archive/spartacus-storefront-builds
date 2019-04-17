import { OnInit, OnDestroy } from '@angular/core';
import { PaymentDetails } from '@spartacus/core';
import { UserService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../ui/components/card/card.component';
export declare class PaymentMethodsComponent implements OnInit, OnDestroy {
    private userService;
    paymentMethods$: Observable<PaymentDetails[]>;
    editCard: string;
    loading$: Observable<boolean>;
    userId: string;
    userServiceSub: Subscription;
    constructor(userService: UserService);
    ngOnInit(): void;
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }: PaymentDetails): Card;
    deletePaymentMethod(paymentMethod: PaymentDetails): void;
    setEdit(paymentMethod: PaymentDetails): void;
    cancelCard(): void;
    setDefaultPaymentMethod(paymentMethod: PaymentDetails): void;
    ngOnDestroy(): void;
}
