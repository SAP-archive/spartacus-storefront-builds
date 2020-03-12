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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2U7XG4gICAgZW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIGlzQ29uZmlybWF0aW9uOiBib29sZWFuO1xuICAgIGZvcm0kOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD47XG4gICAgY29uc3RydWN0b3Iob3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKTtcbiAgICBnZXRDb250cm9sKGZvcm06IEZvcm1Hcm91cCwgZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbDtcbiAgICBzZXRBbGwoZm9ybTogRm9ybUdyb3VwKTogdm9pZDtcbiAgICBnZXRJdGVtUHJpY2UoZW50cnk6IE9yZGVyRW50cnkpOiBQcmljZTtcbiAgICBnZXRNYXhBbWVuZFF1YW50aXR5KGVudHJ5OiBPcmRlckVudHJ5KTogbnVtYmVyO1xuICAgIGlzQ2FuY2VsbGF0aW9uKCk6IGJvb2xlYW47XG59XG4iXX0=