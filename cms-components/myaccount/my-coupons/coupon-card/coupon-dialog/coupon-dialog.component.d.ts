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

//# sourceMappingURL=coupon-dialog.component.d.ts.map