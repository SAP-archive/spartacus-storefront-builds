import { FormControl, FormGroup } from '@angular/forms';
import { OrderEntry, Price } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../amend-order.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CancelOrReturnItemsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CancelOrReturnItemsComponent, "cx-amend-order-items", never, {
    "isConfirmation": "isConfirmation";
    "entries": "entries";
}, {}, never>;
}

//# sourceMappingURL=amend-order-items.component.d.ts.map