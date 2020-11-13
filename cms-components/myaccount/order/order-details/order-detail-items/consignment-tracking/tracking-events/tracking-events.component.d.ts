import { OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsignmentTracking, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class TrackingEventsComponent implements OnDestroy {
    activeModal: NgbActiveModal;
    private userOrderService;
    tracking$: Observable<ConsignmentTracking>;
    shipDate: Date;
    consignmentCode: string;
    constructor(activeModal: NgbActiveModal, userOrderService: UserOrderService);
    ngOnDestroy(): void;
}
