import { OnInit } from '@angular/core';
import { Address } from '@spartacus/core';
import { ModalService } from '../../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../../misc/icon/index';
import * as ɵngcc0 from '@angular/core';
export declare class SuggestedAddressDialogComponent implements OnInit {
    protected modalService: ModalService;
    iconTypes: typeof ICON_TYPE;
    constructor(modalService: ModalService);
    suggestedAddresses: Address[];
    enteredAddress: Address;
    selectedAddress: Address;
    ngOnInit(): void;
    closeModal(reason?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuggestedAddressDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuggestedAddressDialogComponent, "cx-suggested-addresses-dialog", never, {
    "suggestedAddresses": "suggestedAddresses";
    "enteredAddress": "enteredAddress";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQVNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSk7XG4gICAgc3VnZ2VzdGVkQWRkcmVzc2VzOiBBZGRyZXNzW107XG4gICAgZW50ZXJlZEFkZHJlc3M6IEFkZHJlc3M7XG4gICAgc2VsZWN0ZWRBZGRyZXNzOiBBZGRyZXNzO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgY2xvc2VNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkO1xufVxuIl19