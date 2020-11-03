import { OnInit, OnDestroy } from '@angular/core';
import { RoutingService, CustomerCouponService, GlobalMessageService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class CouponClaimComponent implements OnInit, OnDestroy {
    protected couponService: CustomerCouponService;
    protected routingService: RoutingService;
    protected messageService: GlobalMessageService;
    subscription: Subscription;
    constructor(couponService: CustomerCouponService, routingService: RoutingService, messageService: GlobalMessageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
