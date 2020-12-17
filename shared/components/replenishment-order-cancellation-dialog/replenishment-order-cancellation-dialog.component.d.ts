import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, UserReplenishmentOrderService } from '@spartacus/core';
import { FocusConfig } from '../../../layout/a11y/keyboard-focus/keyboard-focus.model';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
export declare class ReplenishmentOrderCancellationDialogComponent implements OnInit, OnDestroy {
    protected userReplenishmentOrderService: UserReplenishmentOrderService;
    protected globalMessageService: GlobalMessageService;
    protected launchDialogService: LaunchDialogService;
    protected el: ElementRef;
    private subscription;
    replenishmentOrderCode: string;
    focusConfig: FocusConfig;
    handleClick(event: UIEvent): void;
    constructor(userReplenishmentOrderService: UserReplenishmentOrderService, globalMessageService: GlobalMessageService, launchDialogService: LaunchDialogService, el: ElementRef);
    ngOnInit(): void;
    onSuccess(value: boolean): void;
    close(reason: string): void;
    cancelReplenishment(): void;
    ngOnDestroy(): void;
}
