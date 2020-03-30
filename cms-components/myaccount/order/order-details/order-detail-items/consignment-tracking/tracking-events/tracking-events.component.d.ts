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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TrackingEventsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TrackingEventsComponent, "cx-tracking-events", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0cmFja2luZy1ldmVudHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nLCBVc2VyT3JkZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYWNraW5nRXZlbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWw7XG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlO1xuICAgIHRyYWNraW5nJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbiAgICBzaGlwRGF0ZTogRGF0ZTtcbiAgICBjb25zaWdubWVudENvZGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=