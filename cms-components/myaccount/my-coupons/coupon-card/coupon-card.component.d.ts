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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvdXBvbi1jYXJkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ291cG9uQ2FyZENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlO1xuICAgIGNvdXBvbjogQ3VzdG9tZXJDb3Vwb247XG4gICAgY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIG5vdGlmaWNhdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGNvdXBvbklkOiBzdHJpbmc7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgbXlDb3Vwb25zQ29tcG9uZW50U2VydmljZTogTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSk7XG4gICAgb25TdWJzY3JpcHRpb25DaGFuZ2UoKTogdm9pZDtcbiAgICByZWFkTW9yZSgpOiB2b2lkO1xuICAgIGZpbmRQcm9kdWN0cygpOiB2b2lkO1xufVxuIl19