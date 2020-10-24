import { ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { ReplenishmentOrder, UserReplenishmentOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReplenishmentOrderCancellationLaunchDialogService } from './replenishment-order-cancellation-launch-dialog.service';
export declare class ReplenishmentOrderCancellationComponent implements OnDestroy {
    protected userReplenishmentOrderService: UserReplenishmentOrderService;
    protected replenishmentOrderCancellationLaunchDialogService: ReplenishmentOrderCancellationLaunchDialogService;
    protected vcr: ViewContainerRef;
    element: ElementRef;
    private subscription;
    replenishmentOrder$: Observable<ReplenishmentOrder>;
    constructor(userReplenishmentOrderService: UserReplenishmentOrderService, replenishmentOrderCancellationLaunchDialogService: ReplenishmentOrderCancellationLaunchDialogService, vcr: ViewContainerRef);
    openDialog(): void;
    ngOnDestroy(): void;
}
