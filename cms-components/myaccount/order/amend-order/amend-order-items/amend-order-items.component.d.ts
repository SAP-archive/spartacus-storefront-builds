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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyRW50cnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlO1xuICAgIGVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgICBpc0NvbmZpcm1hdGlvbjogYm9vbGVhbjtcbiAgICBmb3JtJDogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+O1xuICAgIGNvbnN0cnVjdG9yKG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSk7XG4gICAgZ2V0Q29udHJvbChmb3JtOiBGb3JtR3JvdXAsIGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUNvbnRyb2w7XG4gICAgc2V0QWxsKGZvcm06IEZvcm1Hcm91cCk6IHZvaWQ7XG4gICAgZ2V0SXRlbVByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2U7XG4gICAgZ2V0TWF4QW1lbmRRdWFudGl0eShlbnRyeTogT3JkZXJFbnRyeSk6IG51bWJlcjtcbiAgICBpc0NhbmNlbGxhdGlvbigpOiBib29sZWFuO1xufVxuIl19