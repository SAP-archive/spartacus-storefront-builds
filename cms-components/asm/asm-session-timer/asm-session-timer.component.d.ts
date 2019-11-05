import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AsmConfig, RoutingService } from '@spartacus/core';
import { AsmComponentService } from '../asm-component.service';
export declare class AsmSessionTimerComponent implements OnInit, OnDestroy {
    private config;
    private asmComponentService;
    private routingService;
    private changeDetectorRef;
    private subscriptions;
    private interval;
    private maxStartDelayInSeconds;
    timeLeft: number;
    constructor(config: AsmConfig, asmComponentService: AsmComponentService, routingService: RoutingService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    resetTimer(): void;
    private getTimerStartDelayInSeconds;
    ngOnDestroy(): void;
}
