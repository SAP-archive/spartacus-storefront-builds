import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../model/checkout-step.model';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressComponent implements OnInit, OnDestroy {
    protected checkoutStepService: CheckoutStepService;
    protected cdr: ChangeDetectorRef;
    constructor(checkoutStepService: CheckoutStepService, cdr: ChangeDetectorRef);
    steps: CheckoutStep[];
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    subscription: Subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getTabIndex(stepIndex: number): number;
    isActive(index: number): boolean;
    isDisabled(index: number): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressComponent, "cx-checkout-progress", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXAgfSBmcm9tICcuLi8uLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBzdGVwczogQ2hlY2tvdXRTdGVwW107XG4gICAgYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gICAgYWN0aXZlU3RlcEluZGV4JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBnZXRUYWJJbmRleChzdGVwSW5kZXg6IG51bWJlcik6IG51bWJlcjtcbiAgICBpc0FjdGl2ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbjtcbiAgICBpc0Rpc2FibGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuO1xufVxuIl19