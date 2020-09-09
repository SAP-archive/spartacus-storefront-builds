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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CouponClaimComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CouponClaimComponent, "cx-coupon-claim", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNsYWltLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb3Vwb24tY2xhaW0uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBDdXN0b21lckNvdXBvblNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ291cG9uQ2xhaW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNvdXBvblNlcnZpY2U6IEN1c3RvbWVyQ291cG9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoY291cG9uU2VydmljZTogQ3VzdG9tZXJDb3Vwb25TZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19