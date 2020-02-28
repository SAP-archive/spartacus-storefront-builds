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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestTotalsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestTotalsComponent, "cx-return-request-totals", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJyZXR1cm4tcmVxdWVzdC10b3RhbHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IocmV0dXJuUmVxdWVzdFNlcnZpY2U6IFJldHVyblJlcXVlc3RTZXJ2aWNlKTtcbiAgICByZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19