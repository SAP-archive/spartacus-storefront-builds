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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnOrderConfirmationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnOrderConfirmationComponent, "cx-return-order-confirmation", never, {}, {}, never, never>;
}

//# sourceMappingURL=return-order-confirmation.component.d.ts.map