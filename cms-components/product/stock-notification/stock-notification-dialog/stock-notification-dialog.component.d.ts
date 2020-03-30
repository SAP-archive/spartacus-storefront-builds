import { OnDestroy } from '@angular/core';
import { NotificationPreference, UserInterestsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class StockNotificationDialogComponent implements OnDestroy {
    private modalService;
    private interestsService;
    subscribeSuccess$: Observable<boolean>;
    enabledPrefs: NotificationPreference[];
    constructor(modalService: ModalService, interestsService: UserInterestsService);
    close(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StockNotificationDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StockNotificationDialogComponent, "cx-stock-notification-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlLCBVc2VySW50ZXJlc3RzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b2NrTm90aWZpY2F0aW9uRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTtcbiAgICBwcml2YXRlIGludGVyZXN0c1NlcnZpY2U7XG4gICAgc3Vic2NyaWJlU3VjY2VzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZW5hYmxlZFByZWZzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW107XG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGludGVyZXN0c1NlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlKTtcbiAgICBjbG9zZSgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=