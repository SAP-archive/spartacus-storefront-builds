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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0cmFja2luZy1ldmVudHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZywgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsO1xuICAgIHByaXZhdGUgdXNlck9yZGVyU2VydmljZTtcbiAgICB0cmFja2luZyQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG4gICAgc2hpcERhdGU6IERhdGU7XG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLCB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19