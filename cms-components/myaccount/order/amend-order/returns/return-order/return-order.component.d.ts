import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderAmendService } from '../../amend-order.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnOrderComponent {
    protected orderAmendService: OrderAmendService;
    orderCode: string;
    form$: Observable<import("@angular/forms").FormGroup>;
    entries$: Observable<OrderEntry[]>;
    constructor(orderAmendService: OrderAmendService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnOrderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnOrderComponent, "cx-return-order", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJyZXR1cm4tb3JkZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJldHVybk9yZGVyQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlO1xuICAgIG9yZGVyQ29kZTogc3RyaW5nO1xuICAgIGZvcm0kOiBPYnNlcnZhYmxlPGltcG9ydChcIkBhbmd1bGFyL2Zvcm1zXCIpLkZvcm1Hcm91cD47XG4gICAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBjb25zdHJ1Y3RvcihvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpO1xufVxuIl19