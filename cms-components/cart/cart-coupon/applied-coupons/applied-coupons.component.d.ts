import { Voucher, CartVoucherService } from '@spartacus/core';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
export declare class AppliedCouponsComponent {
    private cartVoucherService;
    vouchers: Voucher[];
    cartIsLoading: boolean;
    isReadOnly: boolean;
    iconTypes: typeof ICON_TYPE;
    constructor(cartVoucherService: CartVoucherService);
    get sortedVouchers(): Voucher[];
    removeVoucher(voucherId: string): void;
}
