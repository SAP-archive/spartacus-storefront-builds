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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXNlc3Npb24tdGltZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFzbS1zZXNzaW9uLXRpbWVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21Db25maWcsIEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNtLWNvbXBvbmVudC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbVNlc3Npb25UaW1lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGFzbUNvbXBvbmVudFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgaW50ZXJ2YWw7XG4gICAgcHJpdmF0ZSBtYXhTdGFydERlbGF5SW5TZWNvbmRzO1xuICAgIHRpbWVMZWZ0OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBBc21Db25maWcsIGFzbUNvbXBvbmVudFNlcnZpY2U6IEFzbUNvbXBvbmVudFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSByZXNldE9uTmF2aWdhdGU7XG4gICAgcHJpdmF0ZSByZXNldE9uQ3VzdG9tZXJTZXNzaW9uQ2hhbmdlO1xuICAgIHJlc2V0VGltZXIoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldFRpbWVyU3RhcnREZWxheUluU2Vjb25kcztcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19