import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationTotalsComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationTotalsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationTotalsComponent, "cx-order-confirmation-totals", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRvdGFscy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsib3JkZXItY29uZmlybWF0aW9uLXRvdGFscy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgT3JkZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlO1xuICAgIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgY29uc3RydWN0b3IoY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==