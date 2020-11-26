import { FormControl, FormGroup } from '@angular/forms';
import { OrderEntry, Price } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../amend-order.service';
export declare class CancelOrReturnItemsComponent {
    protected orderAmendService: OrderAmendService;
    entries: OrderEntry[];
    isConfirmation: boolean;
    form$: Observable<FormGroup>;
    constructor(orderAmendService: OrderAmendService);
    getControl(form: FormGroup, entry: OrderEntry): FormControl;
    setAll(form: FormGroup): void;
    getItemPrice(entry: OrderEntry): Price;
    getMaxAmendQuantity(entry: OrderEntry): number;
    isCancellation(): boolean;
}
