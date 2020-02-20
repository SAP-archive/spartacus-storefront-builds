import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class AppliedCouponsComponent {
    private cartVoucherService;
    vouchers: Voucher[];
    cartIsLoading: boolean;
    isReadOnly: boolean;
    iconTypes: typeof ICON_TYPE;
    constructor(cartVoucherService: CartVoucherService);
    get sortedVouchers(): Voucher[];
    removeVoucher(voucherId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AppliedCouponsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AppliedCouponsComponent, "cx-applied-coupons", never, {
    "cartIsLoading": "cartIsLoading";
    "isReadOnly": "isReadOnly";
    "vouchers": "vouchers";
}, {}, never>;
}

//# sourceMappingURL=applied-coupons.component.d.ts.map