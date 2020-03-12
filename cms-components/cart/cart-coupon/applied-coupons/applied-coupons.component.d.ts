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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZvdWNoZXIsIENhcnRWb3VjaGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBcHBsaWVkQ291cG9uc0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjYXJ0Vm91Y2hlclNlcnZpY2U7XG4gICAgdm91Y2hlcnM6IFZvdWNoZXJbXTtcbiAgICBjYXJ0SXNMb2FkaW5nOiBib29sZWFuO1xuICAgIGlzUmVhZE9ubHk6IGJvb2xlYW47XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKGNhcnRWb3VjaGVyU2VydmljZTogQ2FydFZvdWNoZXJTZXJ2aWNlKTtcbiAgICBnZXQgc29ydGVkVm91Y2hlcnMoKTogVm91Y2hlcltdO1xuICAgIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19