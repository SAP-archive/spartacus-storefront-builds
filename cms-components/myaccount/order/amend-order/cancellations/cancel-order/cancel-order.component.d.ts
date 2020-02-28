import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class CancelOrderComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<import("@angular/forms").FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CancelOrderComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CancelOrderComponent, "cx-cancel-order", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYW5jZWwtb3JkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYW5jZWxPcmRlckNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZTtcbiAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICBmb3JtJDogT2JzZXJ2YWJsZTxpbXBvcnQoXCJAYW5ndWxhci9mb3Jtc1wiKS5Gb3JtR3JvdXA+O1xuICAgIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgY29uc3RydWN0b3Iob3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKTtcbn1cbiJdfQ==