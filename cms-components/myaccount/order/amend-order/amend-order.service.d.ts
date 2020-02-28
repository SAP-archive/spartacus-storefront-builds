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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderAmendService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderAmendService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhbWVuZC1vcmRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckVudHJ5LCBQcmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuL2FtZW5kLW9yZGVyLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYW1lbmRUeXBlOiBBbWVuZE9yZGVyVHlwZTtcbiAgICBwcm90ZWN0ZWQgZm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZW50cmllcyBmb3IgdGhlIGdpdmVuIG9yZGVyLlxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZW50cmllcyB3aXRoIGFuIGFtZW5kZWQgcXVhbnRpdHkuXG4gICAgICovXG4gICAgZ2V0QW1lbmRlZEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhlIGFtZW5kZWQgb3JkZXIuXG4gICAgICovXG4gICAgYWJzdHJhY3Qgc2F2ZSgpOiB2b2lkO1xuICAgIGdldE9yZGVyKCk6IE9ic2VydmFibGU8T3JkZXI+O1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIGZvcm0gd2l0aCBmb3JtIGRhdGEgYXQgcnVudGltZVxuICAgICAqL1xuICAgIGdldEZvcm0oKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+O1xuICAgIHByaXZhdGUgYnVpbGRGb3JtO1xuICAgIHByb3RlY3RlZCBnZXRGb3JtQ29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2w7XG4gICAgLyoqXG4gICAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgICAqIFRoZSBjYWxjdWxhdGlvbiBhbmQgdmFsaWRhdGlvbiBzaG91bGQgYmUgaW4gYmFja2VuZCBmYWNhZGUgbGF5ZXIuXG4gICAgICovXG4gICAgZ2V0QW1lbmRlZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2U7XG4gICAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSk6IG51bWJlcjtcbiAgICBpc0NhbmNlbGxhdGlvbigpOiBib29sZWFuO1xufVxuIl19