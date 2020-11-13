import { OnInit } from '@angular/core';
import { NotificationPreference, UserNotificationPreferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class NotificationPreferenceComponent implements OnInit {
    private notificationPreferenceService;
    preferences$: Observable<NotificationPreference[]>;
    isLoading$: Observable<boolean>;
    protected preferences: NotificationPreference[];
    constructor(notificationPreferenceService: UserNotificationPreferenceService);
    ngOnInit(): void;
    updatePreference(preference: NotificationPreference): void;
}
