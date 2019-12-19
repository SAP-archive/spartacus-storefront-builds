/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, DeferLoadingStrategy, FeaturesConfigModule, I18nModule, } from '@spartacus/core';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
export class AnonymousConsentManagementBannerModule {
}
AnonymousConsentManagementBannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    FeaturesConfigModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AnonymousConsentManagementBannerComponent: {
                                component: AnonymousConsentManagementBannerComponent,
                                deferLoading: DeferLoadingStrategy.INSTANT,
                            },
                            AnonymousConsentOpenDialogComponent: {
                                component: AnonymousConsentOpenDialogComponent,
                            },
                        },
                    }))),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFnQzVHLE1BQU0sT0FBTyxzQ0FBc0M7OztZQTlCbEQsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFVBQVU7b0JBQ1Ysb0JBQW9CO29CQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IseUNBQXlDLEVBQUU7Z0NBQ3pDLFNBQVMsRUFBRSx5Q0FBeUM7Z0NBQ3BELFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxPQUFPOzZCQUMzQzs0QkFDRCxtQ0FBbUMsRUFBRTtnQ0FDbkMsU0FBUyxFQUFFLG1DQUFtQzs2QkFDL0M7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRTtvQkFDWix5Q0FBeUM7b0JBQ3pDLG1DQUFtQztpQkFDcEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlDQUF5QztvQkFDekMsbUNBQW1DO2lCQUNwQztnQkFDRCxlQUFlLEVBQUU7b0JBQ2YseUNBQXlDO29CQUN6QyxtQ0FBbUM7aUJBQ3BDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3Blbi1kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgICAgZGVmZXJMb2FkaW5nOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5ULFxuICAgICAgICB9LFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUge31cbiJdfQ==