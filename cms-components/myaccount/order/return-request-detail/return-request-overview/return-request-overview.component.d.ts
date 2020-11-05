import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestOverviewComponent implements OnInit, OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    rma: string;
    subscription: Subscription;
    returnRequest$: Observable<ReturnRequest>;
    isCancelling$: Observable<boolean>;
    ngOnInit(): void;
    cancelReturn(returnRequestCode: string): void;
    back(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestOverviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestOverviewComponent, "cx-return-request-overview", never, {}, {}, never, never>;
}

//# sourceMappingURL=return-request-overview.component.d.ts.map