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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZTtcbiAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICBmb3JtJDogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+O1xuICAgIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgY29uc3RydWN0b3Iob3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKTtcbiAgICBzdWJtaXQoZm9ybTogRm9ybUdyb3VwKTogdm9pZDtcbn1cbiJdfQ==