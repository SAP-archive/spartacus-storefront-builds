import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { OrderEntry, CancelOrReturnRequestEntryInput, Price } from '@spartacus/core';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
export declare class CancelOrReturnItemsComponent implements OnInit {
    private formBuilder;
    private cancelOrReturnService;
    entries: OrderEntry[];
    confirmRequest: boolean;
    cancelOrder: boolean;
    orderCode: string;
    confirm: EventEmitter<CancelOrReturnRequestEntryInput[]>;
    form: FormGroup;
    inputsControl: FormArray;
    disableConfirmBtn: boolean;
    constructor(formBuilder: FormBuilder, cancelOrReturnService: OrderCancelOrReturnService);
    ngOnInit(): void;
    setAll(): void;
    confirmEntryInputs(): void;
    updateQty(): void;
    getItemPrice(entry: OrderEntry): Price;
    back(): void;
    protected disableEnableConfirm(): void;
}
