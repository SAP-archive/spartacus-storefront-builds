import { EventEmitter } from '@angular/core';
import { ModalRef, ModalService } from '../../../../shared/components/modal/index';
import { CustomerCoupon } from '@spartacus/core';
import { MyCouponsComponentService } from '../my-coupons.component.service';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CouponCardComponent {
    protected modalService: ModalService;
    protected myCouponsComponentService: MyCouponsComponentService;
    coupon: CustomerCoupon;
    couponSubscriptionLoading$: Observable<boolean>;
    modalRef: ModalRef;
    notificationChanged: EventEmitter<{
        couponId: string;
        notification: boolean;
    }>;
    constructor(modalService: ModalService, myCouponsComponentService: MyCouponsComponentService);
    onSubscriptionChange(): void;
    readMore(): void;
    findProducts(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CouponCardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CouponCardComponent, "cx-coupon-card", never, { "coupon": "coupon"; "couponSubscriptionLoading$": "couponSubscriptionLoading$"; }, { "notificationChanged": "notificationChanged"; }, never, never>;
}

//# sourceMappingURL=coupon-card.component.d.ts.map