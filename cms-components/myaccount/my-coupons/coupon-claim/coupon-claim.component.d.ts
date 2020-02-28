import { OnInit, OnDestroy } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CouponClaimComponent implements OnInit, OnDestroy {
    protected couponService: CustomerCouponService;
    protected routingService: RoutingService;
    protected messageService: GlobalMessageService;
    subscription: Subscription;
    constructor(couponService: CustomerCouponService, routingService: RoutingService, messageService: GlobalMessageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CouponClaimComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CouponClaimComponent, "cx-coupon-claim", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb3Vwb24tY2xhaW0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvdXBvbkNsYWltQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjb3Vwb25TZXJ2aWNlOiBDdXN0b21lckNvdXBvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==