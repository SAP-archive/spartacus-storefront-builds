/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, FeaturesConfigModule, I18nModule, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQStCNUcsTUFBTSxPQUFPLHNDQUFzQzs7O1lBN0JsRCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixvQkFBb0I7b0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix5Q0FBeUMsRUFBRTtnQ0FDekMsU0FBUyxFQUFFLHlDQUF5Qzs2QkFDckQ7NEJBQ0QsbUNBQW1DLEVBQUU7Z0NBQ25DLFNBQVMsRUFBRSxtQ0FBbUM7NkJBQy9DO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUNBQXlDO29CQUN6QyxtQ0FBbUM7aUJBQ3BDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5Q0FBeUM7b0JBQ3pDLG1DQUFtQztpQkFDcEM7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHlDQUF5QztvQkFDekMsbUNBQW1DO2lCQUNwQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3Blbi1kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lck1vZHVsZSB7fVxuIl19