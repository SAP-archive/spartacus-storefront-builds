import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferLoadingStrategy, FeaturesConfigModule, I18nModule, provideConfig, provideDefaultConfig, } from '@spartacus/core';
import { KeyboardFocusModule } from '../../layout/a11y/keyboard-focus/index';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { defaultAnonymousConsentLayoutConfig } from './default-anonymous-consent-layout.config';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
var AnonymousConsentManagementBannerModule = /** @class */ (function () {
    function AnonymousConsentManagementBannerModule() {
    }
    AnonymousConsentManagementBannerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                FeaturesConfigModule,
                KeyboardFocusModule,
            ],
            providers: [
                provideConfig(defaultAnonymousConsentLayoutConfig),
                provideDefaultConfig({
                    cmsComponents: {
                        AnonymousConsentManagementBannerComponent: {
                            component: AnonymousConsentManagementBannerComponent,
                            deferLoading: DeferLoadingStrategy.INSTANT,
                        },
                        AnonymousConsentOpenDialogComponent: {
                            component: AnonymousConsentOpenDialogComponent,
                        },
                    },
                }),
            ],
            declarations: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
            exports: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
            entryComponents: [
                AnonymousConsentManagementBannerComponent,
                AnonymousConsentOpenDialogComponent,
            ],
        })
    ], AnonymousConsentManagementBannerModule);
    return AnonymousConsentManagementBannerModule;
}());
export { AnonymousConsentManagementBannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBb0M1RztJQUFBO0lBQXFELENBQUM7SUFBekMsc0NBQXNDO1FBbENsRCxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDbEQsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYix5Q0FBeUMsRUFBRTs0QkFDekMsU0FBUyxFQUFFLHlDQUF5Qzs0QkFDcEQsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU87eUJBQzNDO3dCQUNELG1DQUFtQyxFQUFFOzRCQUNuQyxTQUFTLEVBQUUsbUNBQW1DO3lCQUMvQztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1oseUNBQXlDO2dCQUN6QyxtQ0FBbUM7YUFDcEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AseUNBQXlDO2dCQUN6QyxtQ0FBbUM7YUFDcEM7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YseUNBQXlDO2dCQUN6QyxtQ0FBbUM7YUFDcEM7U0FDRixDQUFDO09BQ1csc0NBQXNDLENBQUc7SUFBRCw2Q0FBQztDQUFBLEFBQXRELElBQXNEO1NBQXpDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c01vZHVsZSB9IGZyb20gJy4uLy4uL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRBbm9ueW1vdXNDb25zZW50TGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWFub255bW91cy1jb25zZW50LWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL29wZW4tZGlhbG9nL2Fub255bW91cy1jb25zZW50LW9wZW4tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBLZXlib2FyZEZvY3VzTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRBbm9ueW1vdXNDb25zZW50TGF5b3V0Q29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgICAgICAgIGRlZmVyTG9hZGluZzogRGVmZXJMb2FkaW5nU3RyYXRlZ3kuSU5TVEFOVCxcbiAgICAgICAgfSxcbiAgICAgICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlIHt9XG4iXX0=