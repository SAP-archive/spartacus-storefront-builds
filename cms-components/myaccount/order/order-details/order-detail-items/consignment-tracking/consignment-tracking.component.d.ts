import { OnDestroy, OnInit } from '@angular/core';
import { Consignment, ConsignmentTracking, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalRef, ModalService } from '../../../../../../shared/components/modal/index';
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
}
