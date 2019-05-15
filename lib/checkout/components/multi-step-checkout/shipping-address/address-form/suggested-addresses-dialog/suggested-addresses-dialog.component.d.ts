import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '@spartacus/core';
import { ICON_TYPES } from '../../../../../../../cms-components/misc/icon/index';
export declare class SuggestedAddressDialogComponent implements OnInit {
    activeModal: NgbActiveModal;
    iconTypes: typeof ICON_TYPES;
    constructor(activeModal: NgbActiveModal);
    suggestedAddresses: Address[];
    enteredAddress: Address;
    selectedAddress: Address;
    ngOnInit(): void;
}
