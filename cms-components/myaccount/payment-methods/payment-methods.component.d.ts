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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LW1ldGhvZHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscywgVHJhbnNsYXRpb25TZXJ2aWNlLCBVc2VyUGF5bWVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBheW1lbnRNZXRob2RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHVzZXJQYXltZW50U2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uO1xuICAgIHBheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgICBlZGl0Q2FyZDogc3RyaW5nO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRDYXJkQ29udGVudCh7IGRlZmF1bHRQYXltZW50LCBhY2NvdW50SG9sZGVyTmFtZSwgZXhwaXJ5TW9udGgsIGV4cGlyeVllYXIsIGNhcmROdW1iZXIsIGNhcmRUeXBlLCB9OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG4gICAgc2V0RWRpdChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG4gICAgY2FuY2VsQ2FyZCgpOiB2b2lkO1xuICAgIHNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZDtcbiAgICBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmc7XG59XG4iXX0=