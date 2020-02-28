import { ElementRef } from '@angular/core';
import { ModalService } from '../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
import { CustomerCoupon } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class CouponDialogComponent {
    protected modalService: ModalService;
    iconTypes: typeof ICON_TYPE;
    coupon: CustomerCoupon;
    dialog: ElementRef;
    constructor(modalService: ModalService);
    dismissModal(reason?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CouponDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CouponDialogComponent, "cx-coupon-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWRpYWxvZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY291cG9uLWRpYWxvZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IEN1c3RvbWVyQ291cG9uIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvdXBvbkRpYWxvZ0NvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb3Vwb246IEN1c3RvbWVyQ291cG9uO1xuICAgIGRpYWxvZzogRWxlbWVudFJlZjtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSk7XG4gICAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG59XG4iXX0=