import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferLoadingStrategy, FeaturesConfigModule, I18nModule, provideConfig, provideDefaultConfig, } from '@spartacus/core';
import { KeyboardFocusModule } from '../../layout/a11y/keyboard-focus/index';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { defaultAnonymousConsentLayoutConfig } from './default-anonymous-consent-layout.config';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
export class AnonymousConsentManagementBannerModule {
}
AnonymousConsentManagementBannerModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixhQUFhLEVBQ2Isb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFvQzVHLE1BQU0sT0FBTyxzQ0FBc0M7OztZQWxDbEQsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFVBQVU7b0JBQ1Ysb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxhQUFhLENBQUMsbUNBQW1DLENBQUM7b0JBQ2xELG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IseUNBQXlDLEVBQUU7Z0NBQ3pDLFNBQVMsRUFBRSx5Q0FBeUM7Z0NBQ3BELFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxPQUFPOzZCQUMzQzs0QkFDRCxtQ0FBbUMsRUFBRTtnQ0FDbkMsU0FBUyxFQUFFLG1DQUFtQzs2QkFDL0M7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUNBQXlDO29CQUN6QyxtQ0FBbUM7aUJBQ3BDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5Q0FBeUM7b0JBQ3pDLG1DQUFtQztpQkFDcEM7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHlDQUF5QztvQkFDekMsbUNBQW1DO2lCQUNwQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBLZXlib2FyZEZvY3VzTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50LWJhbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEFub255bW91c0NvbnNlbnRMYXlvdXRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtYW5vbnltb3VzLWNvbnNlbnQtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3Blbi1kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIEtleWJvYXJkRm9jdXNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdEFub255bW91c0NvbnNlbnRMYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgICAgZGVmZXJMb2FkaW5nOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5ULFxuICAgICAgICB9LFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUge31cbiJdfQ==