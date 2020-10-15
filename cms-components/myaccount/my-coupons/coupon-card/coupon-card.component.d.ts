import { EventEmitter } from '@angular/core';
import { ModalRef, ModalService } from '../../../../shared/components/modal/index';
import { CustomerCoupon } from '@spartacus/core';
import { MyCouponsComponentService } from '../my-coupons.component.service';
import { Observable } from 'rxjs';
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
}
