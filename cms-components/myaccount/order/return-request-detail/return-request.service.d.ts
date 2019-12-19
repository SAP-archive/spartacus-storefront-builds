import { OrderReturnRequestService, RoutingService, ReturnRequest, GlobalMessageService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ReturnRequestService {
    protected routingService: RoutingService;
    protected returnRequestService: OrderReturnRequestService;
    protected globalMessageService: GlobalMessageService;
    constructor(routingService: RoutingService, returnRequestService: OrderReturnRequestService, globalMessageService: GlobalMessageService);
    readonly isCancelling$: Observable<boolean>;
    readonly isCancelSuccess$: Observable<boolean>;
    getReturnRequest(): Observable<ReturnRequest>;
    clearReturnRequest(): void;
    cancelReturnRequest(returnRequestCode: string): void;
    cancelSuccess(rma: string): void;
    backToList(): void;
}
