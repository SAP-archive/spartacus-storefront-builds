import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class CancelOrderComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<import("@angular/forms").FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CancelOrderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CancelOrderComponent, "cx-cancel-order", never, {}, {}, never>;
}

//# sourceMappingURL=cancel-order.component.d.ts.map