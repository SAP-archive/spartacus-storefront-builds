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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AppliedCouponsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AppliedCouponsComponent, "cx-applied-coupons", never, { "cartIsLoading": "cartIsLoading"; "isReadOnly": "isReadOnly"; "vouchers": "vouchers"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVm91Y2hlciwgQ2FydFZvdWNoZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNhcnRWb3VjaGVyU2VydmljZTtcbiAgICB2b3VjaGVyczogVm91Y2hlcltdO1xuICAgIGNhcnRJc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgaXNSZWFkT25seTogYm9vbGVhbjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgY29uc3RydWN0b3IoY2FydFZvdWNoZXJTZXJ2aWNlOiBDYXJ0Vm91Y2hlclNlcnZpY2UpO1xuICAgIGdldCBzb3J0ZWRWb3VjaGVycygpOiBWb3VjaGVyW107XG4gICAgcmVtb3ZlVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=