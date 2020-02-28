import { FormGroup } from '@angular/forms';
import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnOrderConfirmationComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    submit(form: FormGroup): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnOrderConfirmationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnOrderConfirmationComponent, "cx-return-order-confirmation", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2U7XG4gICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgZm9ybSQ6IE9ic2VydmFibGU8Rm9ybUdyb3VwPjtcbiAgICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGNvbnN0cnVjdG9yKG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSk7XG4gICAgc3VibWl0KGZvcm06IEZvcm1Hcm91cCk6IHZvaWQ7XG59XG4iXX0=