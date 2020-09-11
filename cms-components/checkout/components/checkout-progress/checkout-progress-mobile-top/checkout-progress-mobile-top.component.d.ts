import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { CheckoutStep } from '../../../model/checkout-step.model';
import { CheckoutStepService } from '../../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutProgressMobileTopComponent implements OnInit, OnDestroy {
    protected checkoutStepService: CheckoutStepService;
    protected activeCartService: ActiveCartService;
    protected cdr: ChangeDetectorRef;
    constructor(checkoutStepService: CheckoutStepService, activeCartService: ActiveCartService, cdr: ChangeDetectorRef);
    cart$: Observable<Cart>;
    steps: CheckoutStep[];
    activeStepIndex: number;
    activeStepIndex$: Observable<number>;
    subscription: Subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutProgressMobileTopComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutProgressMobileTopComponent, "cx-checkout-progress-mobile-top", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBDYXJ0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2hlY2tvdXQtc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtc3RlcC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBjb25zdHJ1Y3RvcihjaGVja291dFN0ZXBTZXJ2aWNlOiBDaGVja291dFN0ZXBTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIHN0ZXBzOiBDaGVja291dFN0ZXBbXTtcbiAgICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgICBhY3RpdmVTdGVwSW5kZXgkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19