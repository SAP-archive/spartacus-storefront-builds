import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AsmConfig, RoutingService, UserIdService } from '@spartacus/core';
import { AsmComponentService } from '../services/asm-component.service';
import * as ɵngcc0 from '@angular/core';
export declare class AsmSessionTimerComponent implements OnInit, OnDestroy {
    private config;
    private asmComponentService;
    private routingService;
    private changeDetectorRef;
    private userIdService;
    private subscriptions;
    private interval;
    private maxStartDelayInSeconds;
    timeLeft: number;
    constructor(config: AsmConfig, asmComponentService: AsmComponentService, routingService: RoutingService, changeDetectorRef: ChangeDetectorRef, userIdService: UserIdService);
    ngOnInit(): void;
    private resetOnNavigate;
    private resetOnCustomerSessionChange;
    resetTimer(): void;
    private getTimerStartDelayInSeconds;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmSessionTimerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmSessionTimerComponent, "cx-asm-session-timer", never, {}, {}, never, never>;
}

//# sourceMappingURL=asm-session-timer.component.d.ts.map