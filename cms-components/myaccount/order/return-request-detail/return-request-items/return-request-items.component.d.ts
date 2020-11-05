import { Observable } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
export declare class ReturnRequestItemsComponent {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    returnRequest$: Observable<ReturnRequest>;
}
