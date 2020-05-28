import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
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
}
