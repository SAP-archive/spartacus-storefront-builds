import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AsmConfig, AuthService, RoutingService } from '@spartacus/core';
import { AsmComponentService } from '../services/asm-component.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmSessionTimerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmSessionTimerComponent, "cx-asm-session-timer", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzbUNvbmZpZywgQXV0aFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbUNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc20tY29tcG9uZW50LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtU2Vzc2lvblRpbWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgYXNtQ29tcG9uZW50U2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbDtcbiAgICBwcml2YXRlIG1heFN0YXJ0RGVsYXlJblNlY29uZHM7XG4gICAgdGltZUxlZnQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEFzbUNvbmZpZywgYXNtQ29tcG9uZW50U2VydmljZTogQXNtQ29tcG9uZW50U2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIHJlc2V0T25OYXZpZ2F0ZTtcbiAgICBwcml2YXRlIHJlc2V0T25DdXN0b21lclNlc3Npb25DaGFuZ2U7XG4gICAgcmVzZXRUaW1lcigpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0VGltZXJTdGFydERlbGF5SW5TZWNvbmRzO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=