import { OnDestroy } from '@angular/core';
import { NotificationPreference, UserInterestsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../../shared/components/modal/modal.service';
export declare class StockNotificationDialogComponent implements OnDestroy {
    private modalService;
    private interestsService;
    subscribeSuccess$: Observable<boolean>;
    enabledPrefs: NotificationPreference[];
    constructor(modalService: ModalService, interestsService: UserInterestsService);
    close(): void;
    ngOnDestroy(): void;
}
