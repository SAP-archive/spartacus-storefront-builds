import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AsmConfig, AuthService, RoutingService } from '@spartacus/core';
import { AsmComponentService } from '../services/asm-component.service';
export declare class AsmSessionTimerComponent implements OnInit, OnDestroy {
    private config;
    private asmComponentService;
    private authService;
    private routingService;
    private changeDetectorRef;
    private subscriptions;
    private interval;
    private maxStartDelayInSeconds;
    timeLeft: number;
    constructor(config: AsmConfig, asmComponentService: AsmComponentService, authService: AuthService, routingService: RoutingService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    private resetOnNavigate;
    private resetOnCustomerSessionChange;
    resetTimer(): void;
    private getTimerStartDelayInSeconds;
    ngOnDestroy(): void;
}
