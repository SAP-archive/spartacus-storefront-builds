import { OnInit } from '@angular/core';
import { Address } from '@spartacus/core';
import { ICON_TYPE } from '../../../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../../../shared/components/modal/index';
export declare class SuggestedAddressDialogComponent implements OnInit {
    protected modalService: ModalService;
    iconTypes: typeof ICON_TYPE;
    constructor(modalService: ModalService);
    suggestedAddresses: Address[];
    enteredAddress: Address;
    selectedAddress: Address;
    ngOnInit(): void;
    closeModal(reason?: any): void;
}
