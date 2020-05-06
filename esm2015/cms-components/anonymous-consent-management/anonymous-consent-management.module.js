import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferLoadingStrategy, FeaturesConfigModule, I18nModule, provideConfig, provideDefaultConfig, } from '@spartacus/core';
import { KeyboardFocusModule } from '../../layout/a11y/keyboard-focus/index';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { defaultAnonymousConsentLayoutConfig } from './default-anonymous-consent-layout.config';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
let AnonymousConsentManagementBannerModule = class AnonymousConsentManagementBannerModule {
};
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
export { AnonymousConsentManagementBannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25ILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBb0M1RyxJQUFhLHNDQUFzQyxHQUFuRCxNQUFhLHNDQUFzQztDQUFHLENBQUE7QUFBekMsc0NBQXNDO0lBbENsRCxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixtQkFBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxhQUFhLENBQUMsbUNBQW1DLENBQUM7WUFDbEQsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYix5Q0FBeUMsRUFBRTt3QkFDekMsU0FBUyxFQUFFLHlDQUF5Qzt3QkFDcEQsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU87cUJBQzNDO29CQUNELG1DQUFtQyxFQUFFO3dCQUNuQyxTQUFTLEVBQUUsbUNBQW1DO3FCQUMvQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLHlDQUF5QztZQUN6QyxtQ0FBbUM7U0FDcEM7UUFDRCxPQUFPLEVBQUU7WUFDUCx5Q0FBeUM7WUFDekMsbUNBQW1DO1NBQ3BDO1FBQ0QsZUFBZSxFQUFFO1lBQ2YseUNBQXlDO1lBQ3pDLG1DQUFtQztTQUNwQztLQUNGLENBQUM7R0FDVyxzQ0FBc0MsQ0FBRztTQUF6QyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNNb2R1bGUgfSBmcm9tICcuLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0QW5vbnltb3VzQ29uc2VudExheW91dENvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1hbm9ueW1vdXMtY29uc2VudC1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgS2V5Ym9hcmRGb2N1c01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0QW5vbnltb3VzQ29uc2VudExheW91dENvbmZpZyksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICAgICAgICBkZWZlckxvYWRpbmc6IERlZmVyTG9hZGluZ1N0cmF0ZWd5LklOU1RBTlQsXG4gICAgICAgIH0sXG4gICAgICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lck1vZHVsZSB7fVxuIl19