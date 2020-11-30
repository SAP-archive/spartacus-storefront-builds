import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestTotalsComponent implements OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    returnRequest$: Observable<ReturnRequest>;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestTotalsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestTotalsComponent, "cx-return-request-totals", never, {}, {}, never, never>;
}

//# sourceMappingURL=return-request-totals.component.d.ts.map