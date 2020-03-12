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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKTtcbiAgICBzdWdnZXN0ZWRBZGRyZXNzZXM6IEFkZHJlc3NbXTtcbiAgICBlbnRlcmVkQWRkcmVzczogQWRkcmVzcztcbiAgICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjbG9zZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG59XG4iXX0=