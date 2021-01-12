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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SuggestedAddressDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SuggestedAddressDialogComponent, "cx-suggested-addresses-dialog", never, { "suggestedAddresses": "suggestedAddresses"; "enteredAddress": "enteredAddress"; }, {}, never, never>;
}

//# sourceMappingURL=suggested-addresses-dialog.component.d.ts.map