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

//# sourceMappingURL=consignment-tracking.component.d.ts.map