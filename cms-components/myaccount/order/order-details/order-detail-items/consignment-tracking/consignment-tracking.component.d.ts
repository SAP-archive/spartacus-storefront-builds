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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsignmentTrackingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConsignmentTrackingComponent, "cx-consignment-tracking", never, { "consignment": "consignment"; "orderCode": "orderCode"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50LCBDb25zaWdubWVudFRyYWNraW5nLCBVc2VyT3JkZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsUmVmLCBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25zaWdubWVudFRyYWNraW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgdXNlck9yZGVyU2VydmljZTtcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBjb25zaWdubWVudFN0YXR1czogc3RyaW5nW107XG4gICAgbW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIGNvbnNpZ25tZW50OiBDb25zaWdubWVudDtcbiAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICBjb25zaWdubWVudFRyYWNraW5nJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvcGVuVHJhY2tpbmdEaWFsb2coY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19