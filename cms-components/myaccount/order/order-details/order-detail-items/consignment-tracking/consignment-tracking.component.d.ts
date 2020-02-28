import { OnDestroy, OnInit } from '@angular/core';
import { Consignment, ConsignmentTracking, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalRef, ModalService } from '../../../../../../shared/components/modal/index';
import * as ɵngcc0 from '@angular/core';
export declare class ConsignmentTrackingComponent implements OnInit, OnDestroy {
    private userOrderService;
    private modalService;
    consignmentStatus: string[];
    modalRef: ModalRef;
    consignment: Consignment;
    orderCode: string;
    consignmentTracking$: Observable<ConsignmentTracking>;
    constructor(userOrderService: UserOrderService, modalService: ModalService);
    ngOnInit(): void;
    openTrackingDialog(consignment: Consignment): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsignmentTrackingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsignmentTrackingComponent, "cx-consignment-tracking", never, {
    "consignment": "consignment";
    "orderCode": "orderCode";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudCwgQ29uc2lnbm1lbnRUcmFja2luZywgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFJlZiwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U7XG4gICAgY29uc2lnbm1lbnRTdGF0dXM6IHN0cmluZ1tdO1xuICAgIG1vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBjb25zaWdubWVudDogQ29uc2lnbm1lbnQ7XG4gICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgY29uc2lnbm1lbnRUcmFja2luZyQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG4gICAgY29uc3RydWN0b3IodXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb3BlblRyYWNraW5nRGlhbG9nKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==