import { OrderReturnRequestService, RoutingService, ReturnRequest, GlobalMessageService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestService {
    protected routingService: RoutingService;
    protected returnRequestService: OrderReturnRequestService;
    protected globalMessageService: GlobalMessageService;
    constructor(routingService: RoutingService, returnRequestService: OrderReturnRequestService, globalMessageService: GlobalMessageService);
    get isCancelling$(): Observable<boolean>;
    get isCancelSuccess$(): Observable<boolean>;
    getReturnRequest(): Observable<ReturnRequest>;
    clearReturnRequest(): void;
    cancelReturnRequest(returnRequestCode: string): void;
    cancelSuccess(rma: string): void;
    backToList(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestService>;
}

//# sourceMappingURL=return-request.service.d.ts.map