import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnOrderComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<import("@angular/forms").FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnOrderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnOrderComponent, "cx-return-order", never, {}, {}, never>;
}

//# sourceMappingURL=return-order.component.d.ts.map