import { ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { ReplenishmentOrder, UserReplenishmentOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReplenishmentOrderCancellationLaunchDialogService } from './replenishment-order-cancellation-launch-dialog.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReplenishmentOrderCancellationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReplenishmentOrderCancellationComponent, "cx-replenishment-order-cancellation", never, {}, {}, never, never>;
}

//# sourceMappingURL=replenishment-order-cancellation.component.d.ts.map