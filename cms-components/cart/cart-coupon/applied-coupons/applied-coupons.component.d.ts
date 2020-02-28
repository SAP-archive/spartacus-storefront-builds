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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWb3VjaGVyLCBDYXJ0Vm91Y2hlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXBwbGllZENvdXBvbnNDb21wb25lbnQge1xuICAgIHByaXZhdGUgY2FydFZvdWNoZXJTZXJ2aWNlO1xuICAgIHZvdWNoZXJzOiBWb3VjaGVyW107XG4gICAgY2FydElzTG9hZGluZzogYm9vbGVhbjtcbiAgICBpc1JlYWRPbmx5OiBib29sZWFuO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3RvcihjYXJ0Vm91Y2hlclNlcnZpY2U6IENhcnRWb3VjaGVyU2VydmljZSk7XG4gICAgZ2V0IHNvcnRlZFZvdWNoZXJzKCk6IFZvdWNoZXJbXTtcbiAgICByZW1vdmVWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==