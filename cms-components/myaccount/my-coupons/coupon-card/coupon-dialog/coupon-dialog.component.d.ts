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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWRpYWxvZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY291cG9uLWRpYWxvZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ291cG9uRGlhbG9nQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvdXBvbjogQ3VzdG9tZXJDb3Vwb247XG4gICAgZGlhbG9nOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKTtcbiAgICBkaXNtaXNzTW9kYWwocmVhc29uPzogYW55KTogdm9pZDtcbn1cbiJdfQ==