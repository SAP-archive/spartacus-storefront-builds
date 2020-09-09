import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
export declare class ReturnRequestTotalsComponent implements OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    returnRequest$: Observable<ReturnRequest>;
    ngOnDestroy(): void;
}
