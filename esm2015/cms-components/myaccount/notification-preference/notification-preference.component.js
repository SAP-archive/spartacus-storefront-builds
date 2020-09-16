import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserNotificationPreferenceService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export class NotificationPreferenceComponent {
    constructor(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    ngOnInit() {
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap((preferences) => (this.preferences = preferences)));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map(([prefsLoading, updateLoading]) => prefsLoading || updateLoading));
    }
    updatePreference(preference) {
        const updatedPreferences = [];
        this.preferences.forEach((p) => {
            if (p.channel === preference.channel) {
                updatedPreferences.push(Object.assign(Object.assign({}, p), { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        });
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    }
}
NotificationPreferenceComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-notification-preference',
                template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NotificationPreferenceComponent.ctorParameters = () => [
    { type: UserNotificationPreferenceService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFFTCxpQ0FBaUMsR0FDbEMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPMUMsTUFBTSxPQUFPLCtCQUErQjtJQU0xQyxZQUNVLDZCQUFnRTtRQUFoRSxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQW1DO1FBSGhFLGdCQUFXLEdBQTZCLEVBQUUsQ0FBQztJQUlsRCxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLDZCQUE2QjthQUNuRCxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7WUFDOUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLHFCQUFxQixFQUFFO1lBQzFELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxpQ0FBaUMsRUFBRTtTQUN2RSxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLElBQUksYUFBYSxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBa0M7UUFDakQsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEMsa0JBQWtCLENBQUMsSUFBSSxpQ0FDbEIsQ0FBQyxLQUNKLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQ25CLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNFLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsa2dEQUF1RDtnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVRDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSxcbiAgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2U6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5yZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCk7XG4gICAgdGhpcy5wcmVmZXJlbmNlcyQgPSB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlXG4gICAgICAuZ2V0UHJlZmVyZW5jZXMoKVxuICAgICAgLnBpcGUodGFwKChwcmVmZXJlbmNlcykgPT4gKHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcykpKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLmxvYWRQcmVmZXJlbmNlcygpO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLmdldFByZWZlcmVuY2VzTG9hZGluZygpLFxuICAgICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5nZXRVcGRhdGVQcmVmZXJlbmNlc1Jlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcHJlZnNMb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSkgPT4gcHJlZnNMb2FkaW5nIHx8IHVwZGF0ZUxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVByZWZlcmVuY2UocHJlZmVyZW5jZTogTm90aWZpY2F0aW9uUHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IFtdO1xuICAgIHRoaXMucHJlZmVyZW5jZXMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgaWYgKHAuY2hhbm5lbCA9PT0gcHJlZmVyZW5jZS5jaGFubmVsKSB7XG4gICAgICAgIHVwZGF0ZWRQcmVmZXJlbmNlcy5wdXNoKHtcbiAgICAgICAgICAuLi5wLFxuICAgICAgICAgIGVuYWJsZWQ6ICFwLmVuYWJsZWQsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZFByZWZlcmVuY2VzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS51cGRhdGVQcmVmZXJlbmNlcyh1cGRhdGVkUHJlZmVyZW5jZXMpO1xuICB9XG59XG4iXX0=