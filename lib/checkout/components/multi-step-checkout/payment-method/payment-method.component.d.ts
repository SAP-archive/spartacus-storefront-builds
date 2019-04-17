import { OnInit, EventEmitter } from '@angular/core';
import { PaymentDetails, Address } from '@spartacus/core';
import { CartDataService } from '@spartacus/core';
import { UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../ui/components/card/card.component';
export declare class PaymentMethodComponent implements OnInit {
    protected cartData: CartDataService;
    protected userService: UserService;
    newPaymentFormManuallyOpened: boolean;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    cards: Card[];
    isLoading$: Observable<boolean>;
    selectedPayment: PaymentDetails;
    backStep: EventEmitter<any>;
    addPaymentInfo: EventEmitter<any>;
    constructor(cartData: CartDataService, userService: UserService);
    ngOnInit(): void;
    getCardContent(payment: PaymentDetails): Card;
    paymentMethodSelected(paymentDetails: PaymentDetails, index: number): void;
    next(): void;
    addNewPaymentMethod({ paymentDetails, billingAddress, }: {
        paymentDetails: PaymentDetails;
        billingAddress: Address;
    }): void;
    showNewPaymentForm(): void;
    hideNewPaymentForm(): void;
    back(): void;
}
