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

//# sourceMappingURL=coupon-claim.component.d.ts.map