import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '@spartacus/core';
export declare class SuggestedAddressDialogComponent implements OnInit {
    activeModal: NgbActiveModal;
    constructor(activeModal: NgbActiveModal);
    suggestedAddresses: Address[];
    enteredAddress: Address;
    selectedAddress: Address;
    ngOnInit(): void;
}
