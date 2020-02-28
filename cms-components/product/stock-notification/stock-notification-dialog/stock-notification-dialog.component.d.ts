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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StockNotificationDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StockNotificationDialogComponent, "cx-stock-notification-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvY2stbm90aWZpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSwgVXNlckludGVyZXN0c1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9ja05vdGlmaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBpbnRlcmVzdHNTZXJ2aWNlO1xuICAgIHN1YnNjcmliZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGVuYWJsZWRQcmVmczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdO1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBpbnRlcmVzdHNTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZSk7XG4gICAgY2xvc2UoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19