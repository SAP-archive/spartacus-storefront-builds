import { FormControl, FormGroup } from '@angular/forms';
import { Order, OrderEntry, Price } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details/order-details.service';
import { AmendOrderType } from './amend-order.model';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderAmendService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderAmendService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhbWVuZC1vcmRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4vYW1lbmQtb3JkZXIubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgT3JkZXJBbWVuZFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhbWVuZFR5cGU6IEFtZW5kT3JkZXJUeXBlO1xuICAgIHByb3RlY3RlZCBmb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3Iob3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBlbnRyaWVzIGZvciB0aGUgZ2l2ZW4gb3JkZXIuXG4gICAgICovXG4gICAgYWJzdHJhY3QgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBlbnRyaWVzIHdpdGggYW4gYW1lbmRlZCBxdWFudGl0eS5cbiAgICAgKi9cbiAgICBnZXRBbWVuZGVkRW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgLyoqXG4gICAgICogU3VibWl0cyB0aGUgYW1lbmRlZCBvcmRlci5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBzYXZlKCk6IHZvaWQ7XG4gICAgZ2V0T3JkZXIoKTogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgZm9ybSB3aXRoIGZvcm0gZGF0YSBhdCBydW50aW1lXG4gICAgICovXG4gICAgZ2V0Rm9ybSgpOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD47XG4gICAgcHJpdmF0ZSBidWlsZEZvcm07XG4gICAgcHJvdGVjdGVkIGdldEZvcm1Db250cm9sKGZvcm06IEZvcm1Hcm91cCwgZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbDtcbiAgICAvKipcbiAgICAgKiBBcyBkaXNjdXNzZWQsIHRoaXMgY2FsY3VsYXRpb24gaXMgbW92ZWQgdG8gU1BBIHNpZGUuXG4gICAgICogVGhlIGNhbGN1bGF0aW9uIGFuZCB2YWxpZGF0aW9uIHNob3VsZCBiZSBpbiBiYWNrZW5kIGZhY2FkZSBsYXllci5cbiAgICAgKi9cbiAgICBnZXRBbWVuZGVkUHJpY2UoZW50cnk6IE9yZGVyRW50cnkpOiBQcmljZTtcbiAgICBnZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5OiBPcmRlckVudHJ5KTogbnVtYmVyO1xuICAgIGlzQ2FuY2VsbGF0aW9uKCk6IGJvb2xlYW47XG59XG4iXX0=