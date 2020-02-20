import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, DeferLoadingStrategy, FeaturesConfigModule, I18nModule, } from '@spartacus/core';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
let AnonymousConsentManagementBannerModule = class AnonymousConsentManagementBannerModule {
};
AnonymousConsentManagementBannerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FeaturesConfigModule,
            ConfigModule.withConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFnQzVHLElBQWEsc0NBQXNDLEdBQW5ELE1BQWEsc0NBQXNDO0NBQUcsQ0FBQTtBQUF6QyxzQ0FBc0M7SUE5QmxELFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYix5Q0FBeUMsRUFBRTt3QkFDekMsU0FBUyxFQUFFLHlDQUF5Qzt3QkFDcEQsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU87cUJBQzNDO29CQUNELG1DQUFtQyxFQUFFO3dCQUNuQyxTQUFTLEVBQUUsbUNBQW1DO3FCQUMvQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLHlDQUF5QztZQUN6QyxtQ0FBbUM7U0FDcEM7UUFDRCxPQUFPLEVBQUU7WUFDUCx5Q0FBeUM7WUFDekMsbUNBQW1DO1NBQ3BDO1FBQ0QsZUFBZSxFQUFFO1lBQ2YseUNBQXlDO1lBQ3pDLG1DQUFtQztTQUNwQztLQUNGLENBQUM7R0FDVyxzQ0FBc0MsQ0FBRztTQUF6QyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3Blbi1kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgICAgZGVmZXJMb2FkaW5nOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5ULFxuICAgICAgICB9LFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUge31cbiJdfQ==