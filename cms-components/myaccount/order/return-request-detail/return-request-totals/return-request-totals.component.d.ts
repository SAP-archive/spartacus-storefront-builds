import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestTotalsComponent implements OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    returnRequest$: Observable<ReturnRequest>;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestTotalsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestTotalsComponent, "cx-return-request-totals", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJyZXR1cm4tcmVxdWVzdC10b3RhbHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1yZXF1ZXN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBSZXR1cm5SZXF1ZXN0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihyZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2UpO1xuICAgIHJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=