import { FormGroup } from '@angular/forms';
import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class CancelOrderConfirmationComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    submit(form: FormGroup): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CancelOrderConfirmationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CancelOrderConfirmationComponent, "cx-cancel-order-confirmation", never, {}, {}, never, never>;
}

//# sourceMappingURL=cancel-order-confirmation.component.d.ts.map