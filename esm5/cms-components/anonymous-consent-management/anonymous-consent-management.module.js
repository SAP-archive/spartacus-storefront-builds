import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeferLoadingStrategy, FeaturesConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
var AnonymousConsentManagementBannerModule = /** @class */ (function () {
    function AnonymousConsentManagementBannerModule() {
    }
    AnonymousConsentManagementBannerModule = __decorate([
        NgModule({
            imports: [CommonModule, I18nModule, FeaturesConfigModule],
            providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUE4QjVHO0lBQUE7SUFBcUQsQ0FBQztJQUF6QyxzQ0FBc0M7UUE1QmxELFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsb0JBQW9CLENBQUM7WUFDekQsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2IseUNBQXlDLEVBQUU7NEJBQ3pDLFNBQVMsRUFBRSx5Q0FBeUM7NEJBQ3BELFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO3lCQUMzQzt3QkFDRCxtQ0FBbUMsRUFBRTs0QkFDbkMsU0FBUyxFQUFFLG1DQUFtQzt5QkFDL0M7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHlDQUF5QztnQkFDekMsbUNBQW1DO2FBQ3BDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlDQUF5QztnQkFDekMsbUNBQW1DO2FBQ3BDO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLHlDQUF5QztnQkFDekMsbUNBQW1DO2FBQ3BDO1NBQ0YsQ0FBQztPQUNXLHNDQUFzQyxDQUFHO0lBQUQsNkNBQUM7Q0FBQSxBQUF0RCxJQUFzRDtTQUF6QyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1vcGVuLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJMThuTW9kdWxlLCBGZWF0dXJlc0NvbmZpZ01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgICAgZGVmZXJMb2FkaW5nOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5ULFxuICAgICAgICB9LFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCxcbiAgICBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUge31cbiJdfQ==