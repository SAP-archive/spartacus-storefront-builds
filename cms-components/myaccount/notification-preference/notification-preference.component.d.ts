import { OnInit } from '@angular/core';
import { NotificationPreference, UserNotificationPreferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NotificationPreferenceComponent implements OnInit {
    private notificationPreferenceService;
    preferences$: Observable<NotificationPreference[]>;
    isLoading$: Observable<boolean>;
    protected preferences: NotificationPreference[];
    constructor(notificationPreferenceService: UserNotificationPreferenceService);
    ngOnInit(): void;
    updatePreference(preference: NotificationPreference): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotificationPreferenceComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NotificationPreferenceComponent, "cx-notification-preference", never, {}, {}, never>;
}

//# sourceMappingURL=notification-preference.component.d.ts.map