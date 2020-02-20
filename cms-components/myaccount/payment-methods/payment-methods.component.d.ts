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

//# sourceMappingURL=payment-methods.component.d.ts.map