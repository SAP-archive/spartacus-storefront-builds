/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserNotificationPreferenceService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class NotificationPreferenceComponent {
    /**
     * @param {?} notificationPreferenceService
     */
    constructor(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap((/**
         * @param {?} preferences
         * @return {?}
         */
        preferences => (this.preferences = preferences))));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([prefsLoading, updateLoading]) => prefsLoading || updateLoading)));
    }
    /**
     * @param {?} preference
     * @return {?}
     */
    updatePreference(preference) {
        /** @type {?} */
        const updatedPreferences = [];
        this.preferences.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            if (p.channel === preference.channel) {
                updatedPreferences.push(Object.assign({}, p, { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        }));
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    }
}
NotificationPreferenceComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-notification-preference',
                template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NotificationPreferenceComponent.ctorParameters = () => [
    { type: UserNotificationPreferenceService }
];
if (false) {
    /** @type {?} */
    NotificationPreferenceComponent.prototype.preferences$;
    /** @type {?} */
    NotificationPreferenceComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    NotificationPreferenceComponent.prototype.preferences;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceComponent.prototype.notificationPreferenceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBRUwsaUNBQWlDLEdBQ2xDLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFNMUMsWUFDVSw2QkFBZ0U7UUFBaEUsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFtQztRQUhoRSxnQkFBVyxHQUE2QixFQUFFLENBQUM7SUFJbEQsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsNkJBQTZCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyw2QkFBNkI7YUFDbkQsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztZQUM5QixJQUFJLENBQUMsNkJBQTZCLENBQUMscUJBQXFCLEVBQUU7WUFDMUQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGlDQUFpQyxFQUFFO1NBQ3ZFLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksSUFBSSxhQUFhLEVBQUMsQ0FDdEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBa0M7O2NBQzNDLGtCQUFrQixHQUFHLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLGtCQUFrQixDQUFDLElBQUksbUJBQ2xCLENBQUMsSUFDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUNuQixDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsNkJBQTZCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLGtnREFBdUQ7Z0JBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVEMsaUNBQWlDOzs7O0lBV2pDLHVEQUFtRDs7SUFDbkQscURBQWdDOzs7OztJQUVoQyxzREFBcUQ7Ozs7O0lBR25ELHdFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSxcbiAgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5yZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCk7XG4gICAgdGhpcy5wcmVmZXJlbmNlcyQgPSB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlXG4gICAgICAuZ2V0UHJlZmVyZW5jZXMoKVxuICAgICAgLnBpcGUodGFwKHByZWZlcmVuY2VzID0+ICh0aGlzLnByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXMpKSk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5sb2FkUHJlZmVyZW5jZXMoKTtcblxuICAgIHRoaXMuaXNMb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5nZXRQcmVmZXJlbmNlc0xvYWRpbmcoKSxcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UuZ2V0VXBkYXRlUHJlZmVyZW5jZXNSZXN1bHRMb2FkaW5nKCksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW3ByZWZzTG9hZGluZywgdXBkYXRlTG9hZGluZ10pID0+IHByZWZzTG9hZGluZyB8fCB1cGRhdGVMb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVQcmVmZXJlbmNlKHByZWZlcmVuY2U6IE5vdGlmaWNhdGlvblByZWZlcmVuY2UpIHtcbiAgICBjb25zdCB1cGRhdGVkUHJlZmVyZW5jZXMgPSBbXTtcbiAgICB0aGlzLnByZWZlcmVuY2VzLmZvckVhY2gocCA9PiB7XG4gICAgICBpZiAocC5jaGFubmVsID09PSBwcmVmZXJlbmNlLmNoYW5uZWwpIHtcbiAgICAgICAgdXBkYXRlZFByZWZlcmVuY2VzLnB1c2goe1xuICAgICAgICAgIC4uLnAsXG4gICAgICAgICAgZW5hYmxlZDogIXAuZW5hYmxlZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVkUHJlZmVyZW5jZXMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLnVwZGF0ZVByZWZlcmVuY2VzKHVwZGF0ZWRQcmVmZXJlbmNlcyk7XG4gIH1cbn1cbiJdfQ==