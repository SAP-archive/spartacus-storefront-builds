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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CouponCardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CouponCardComponent, "cx-coupon-card", never, {
    "coupon": "coupon";
    "couponSubscriptionLoading$": "couponSubscriptionLoading$";
}, {
    "notificationChanged": "notificationChanged";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvdXBvbi1jYXJkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBDdXN0b21lckNvdXBvbiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vbXktY291cG9ucy5jb21wb25lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb3Vwb25DYXJkQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U6IE15Q291cG9uc0NvbXBvbmVudFNlcnZpY2U7XG4gICAgY291cG9uOiBDdXN0b21lckNvdXBvbjtcbiAgICBjb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBtb2RhbFJlZjogTW9kYWxSZWY7XG4gICAgbm90aWZpY2F0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgY291cG9uSWQ6IHN0cmluZztcbiAgICAgICAgbm90aWZpY2F0aW9uOiBib29sZWFuO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBteUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlOiBNeUNvdXBvbnNDb21wb25lbnRTZXJ2aWNlKTtcbiAgICBvblN1YnNjcmlwdGlvbkNoYW5nZSgpOiB2b2lkO1xuICAgIHJlYWRNb3JlKCk6IHZvaWQ7XG4gICAgZmluZFByb2R1Y3RzKCk6IHZvaWQ7XG59XG4iXX0=