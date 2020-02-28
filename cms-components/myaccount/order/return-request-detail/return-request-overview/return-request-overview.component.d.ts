import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestOverviewComponent implements OnInit, OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    rma: string;
    subscription: Subscription;
    returnRequest$: Observable<ReturnRequest>;
    isCancelling$: Observable<boolean>;
    ngOnInit(): void;
    cancelReturn(returnRequestCode: string): void;
    back(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestOverviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestOverviewComponent, "cx-return-request-overview", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJldHVybi1yZXF1ZXN0LW92ZXJ2aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBV0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1yZXF1ZXN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IocmV0dXJuUmVxdWVzdFNlcnZpY2U6IFJldHVyblJlcXVlc3RTZXJ2aWNlKTtcbiAgICBybWE6IHN0cmluZztcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICByZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcbiAgICBpc0NhbmNlbGxpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgY2FuY2VsUmV0dXJuKHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19