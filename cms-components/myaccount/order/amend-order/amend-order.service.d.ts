import { FormControl, FormGroup } from '@angular/forms';
import { Order, OrderEntry, Price } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
export declare abstract class OrderAmendService {
    protected orderDetailsService: OrderDetailsService;
    protected amendType: AmendOrderType;
    protected form: FormGroup;
    constructor(orderDetailsService: OrderDetailsService);
    /**
     * Returns entries for the given order.
     */
    abstract getEntries(): Observable<OrderEntry[]>;
    /**
     * Returns entries with an amended quantity.
     */
    getAmendedEntries(): Observable<OrderEntry[]>;
    /**
     * Submits the amended order.
     */
    abstract save(): void;
    getOrder(): Observable<Order>;
    /**
     * returns the form with form data at runtime
     */
    getForm(): Observable<FormGroup>;
    private buildForm;
    protected getFormControl(form: FormGroup, entry: OrderEntry): FormControl;
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    getAmendedPrice(entry: OrderEntry): Price;
    getMaxAmendQuantity(entry: OrderEntry): number;
    isCancellation(): boolean;
}
