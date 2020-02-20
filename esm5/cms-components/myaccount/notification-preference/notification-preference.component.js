import { __assign, __decorate, __read } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotificationPreference, UserNotificationPreferenceService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
var NotificationPreferenceComponent = /** @class */ (function () {
    function NotificationPreferenceComponent(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    NotificationPreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap(function (preferences) { return (_this.preferences = preferences); }));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), prefsLoading = _b[0], updateLoading = _b[1];
            return prefsLoading || updateLoading;
        }));
    };
    NotificationPreferenceComponent.prototype.updatePreference = function (preference) {
        var updatedPreferences = [];
        this.preferences.forEach(function (p) {
            if (p.channel === preference.channel) {
                updatedPreferences.push(__assign(__assign({}, p), { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        });
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    };
    NotificationPreferenceComponent.ctorParameters = function () { return [
        { type: UserNotificationPreferenceService }
    ]; };
    NotificationPreferenceComponent = __decorate([
        Component({
            selector: 'cx-notification-preference',
            template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NotificationPreferenceComponent);
    return NotificationPreferenceComponent;
}());
export { NotificationPreferenceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLGlDQUFpQyxHQUNsQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8xQztJQU1FLHlDQUNVLDZCQUFnRTtRQUFoRSxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQW1DO1FBSGhFLGdCQUFXLEdBQTZCLEVBQUUsQ0FBQztJQUlsRCxDQUFDO0lBRUosa0RBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsNkJBQTZCO2FBQ25ELGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsNkJBQTZCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7WUFDOUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLHFCQUFxQixFQUFFO1lBQzFELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxpQ0FBaUMsRUFBRTtTQUN2RSxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQTZCO2dCQUE3QixrQkFBNkIsRUFBNUIsb0JBQVksRUFBRSxxQkFBYTtZQUFNLE9BQUEsWUFBWSxJQUFJLGFBQWE7UUFBN0IsQ0FBNkIsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQztJQUVELDBEQUFnQixHQUFoQixVQUFpQixVQUFrQztRQUNqRCxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDeEIsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLGtCQUFrQixDQUFDLElBQUksdUJBQ2xCLENBQUMsS0FDSixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUNuQixDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsNkJBQTZCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkEvQndDLGlDQUFpQzs7SUFQL0QsK0JBQStCO1FBTDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsa2dEQUF1RDtZQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csK0JBQStCLENBdUMzQztJQUFELHNDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlLFxuICBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbm90aWZpY2F0aW9uLXByZWZlcmVuY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHByb3RlY3RlZCBwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLnJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKTtcbiAgICB0aGlzLnByZWZlcmVuY2VzJCA9IHRoaXMubm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2VcbiAgICAgIC5nZXRQcmVmZXJlbmNlcygpXG4gICAgICAucGlwZSh0YXAocHJlZmVyZW5jZXMgPT4gKHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcykpKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLmxvYWRQcmVmZXJlbmNlcygpO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlLmdldFByZWZlcmVuY2VzTG9hZGluZygpLFxuICAgICAgdGhpcy5ub3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZS5nZXRVcGRhdGVQcmVmZXJlbmNlc1Jlc3VsdExvYWRpbmcoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbcHJlZnNMb2FkaW5nLCB1cGRhdGVMb2FkaW5nXSkgPT4gcHJlZnNMb2FkaW5nIHx8IHVwZGF0ZUxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVByZWZlcmVuY2UocHJlZmVyZW5jZTogTm90aWZpY2F0aW9uUHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHVwZGF0ZWRQcmVmZXJlbmNlcyA9IFtdO1xuICAgIHRoaXMucHJlZmVyZW5jZXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGlmIChwLmNoYW5uZWwgPT09IHByZWZlcmVuY2UuY2hhbm5lbCkge1xuICAgICAgICB1cGRhdGVkUHJlZmVyZW5jZXMucHVzaCh7XG4gICAgICAgICAgLi4ucCxcbiAgICAgICAgICBlbmFibGVkOiAhcC5lbmFibGVkLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZWRQcmVmZXJlbmNlcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2UudXBkYXRlUHJlZmVyZW5jZXModXBkYXRlZFByZWZlcmVuY2VzKTtcbiAgfVxufVxuIl19