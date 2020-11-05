import { OnDestroy, ElementRef, ViewContainerRef } from '@angular/core';
import { ReplenishmentOrder, ReplenishmentOrderList, RoutingService, TranslationService, UserReplenishmentOrderService } from '@spartacus/core';
import { ReplenishmentOrderCancellationLaunchDialogService } from '../replenishment-order-details/replenishment-order-cancellation/replenishment-order-cancellation-launch-dialog.service';
import { Observable } from 'rxjs';
export declare class ReplenishmentOrderHistoryComponent implements OnDestroy {
    protected routing: RoutingService;
    protected userReplenishmentOrderService: UserReplenishmentOrderService;
    protected replenishmentOrderCancellationLaunchDialogService: ReplenishmentOrderCancellationLaunchDialogService;
    protected translation: TranslationService;
    protected vcr: ViewContainerRef;
    element: ElementRef;
    private subscription;
    private PAGE_SIZE;
    sortType: string;
    replenishmentOrders$: Observable<ReplenishmentOrderList>;
    isLoaded$: Observable<boolean>;
    constructor(routing: RoutingService, userReplenishmentOrderService: UserReplenishmentOrderService, replenishmentOrderCancellationLaunchDialogService: ReplenishmentOrderCancellationLaunchDialogService, translation: TranslationService, vcr: ViewContainerRef);
    changeSortCode(sortCode: string): void;
    pageChange(page: number): void;
    goToOrderDetail(order: ReplenishmentOrder): void;
    getSortLabels(): Observable<{
        byDate: string;
        byReplenishmentNumber: string;
        byNextOrderDate: string;
    }>;
    openDialog(event: Event, replenishmentOrderCode: string): void;
    private fetchReplenishmentOrders;
    ngOnDestroy(): void;
}
