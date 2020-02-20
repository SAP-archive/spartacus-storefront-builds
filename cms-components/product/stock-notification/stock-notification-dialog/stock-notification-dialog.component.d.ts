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

//# sourceMappingURL=stock-notification-dialog.component.d.ts.map