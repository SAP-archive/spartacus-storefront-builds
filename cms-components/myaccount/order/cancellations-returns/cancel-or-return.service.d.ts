import { CancelOrReturnRequestEntryInput, OrderEntry, LanguageService, Price, RoutingService, GlobalMessageService, UserOrderService, OrderReturnRequestService, SemanticPathService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderCancelOrReturnService {
    protected languageService: LanguageService;
    protected routing: RoutingService;
    protected globalMessageService: GlobalMessageService;
    protected userOrderService: UserOrderService;
    protected returnRequestService: OrderReturnRequestService;
    protected semanticPathService: SemanticPathService;
    private _cancelOrReturnRequestInputs;
    private lang;
    private keepRequestInputs;
    readonly isCancelling$: Observable<boolean>;
    readonly isCancelSuccess$: Observable<boolean>;
    readonly isReturning$: Observable<boolean>;
    readonly isReturnSuccess$: Observable<boolean>;
    constructor(languageService: LanguageService, routing: RoutingService, globalMessageService: GlobalMessageService, userOrderService: UserOrderService, returnRequestService: OrderReturnRequestService, semanticPathService: SemanticPathService);
    private isConfirmationPath;
    private isCancelOrReturnPath;
    private getPath;
    cancelOrReturnRequestInputs: CancelOrReturnRequestEntryInput[];
    clearCancelOrReturnRequestInputs(): void;
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    getCancelledOrReturnedPrice(entry: OrderEntry): Price;
    goToOrderCancelOrReturn(cxRoute: string, orderCode: string): void;
    backToOrder(orderCode: string): void;
    isEntryCancelledOrReturned(entry: OrderEntry): boolean;
    getEntryCancelledOrReturnedQty(entry: OrderEntry): number;
    cancelOrder(orderCode: string): void;
    cancelSuccess(orderCode: string): void;
    returnOrder(orderCode: string): void;
    returnSuccess(): void;
    clearReturnRequest(): void;
}
