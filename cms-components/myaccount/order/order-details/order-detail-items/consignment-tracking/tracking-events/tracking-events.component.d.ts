import { OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsignmentTracking, UserOrderService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class TrackingEventsComponent implements OnDestroy {
    activeModal: NgbActiveModal;
    private userOrderService;
    tracking$: Observable<ConsignmentTracking>;
    shipDate: Date;
    consignmentCode: string;
    constructor(activeModal: NgbActiveModal, userOrderService: UserOrderService);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TrackingEventsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TrackingEventsComponent, "cx-tracking-events", never, {}, {}, never>;
}

//# sourceMappingURL=tracking-events.component.d.ts.map