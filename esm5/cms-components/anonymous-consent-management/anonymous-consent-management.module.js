/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, FeaturesConfigModule, I18nModule, } from '@spartacus/core';
import { AnonymousConsentManagementBannerComponent } from './banner/anonymous-consent-management-banner.component';
import { AnonymousConsentOpenDialogComponent } from './open-dialog/anonymous-consent-open-dialog.component';
var AnonymousConsentManagementBannerModule = /** @class */ (function () {
    function AnonymousConsentManagementBannerModule() {
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
    return AnonymousConsentManagementBannerModule;
}());
export { AnonymousConsentManagementBannerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBRUwsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU1RztJQUFBO0lBNkJxRCxDQUFDOztnQkE3QnJELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLHlDQUF5QyxFQUFFO29DQUN6QyxTQUFTLEVBQUUseUNBQXlDO2lDQUNyRDtnQ0FDRCxtQ0FBbUMsRUFBRTtvQ0FDbkMsU0FBUyxFQUFFLG1DQUFtQztpQ0FDL0M7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRTt3QkFDWix5Q0FBeUM7d0JBQ3pDLG1DQUFtQztxQkFDcEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlDQUF5Qzt3QkFDekMsbUNBQW1DO3FCQUNwQztvQkFDRCxlQUFlLEVBQUU7d0JBQ2YseUNBQXlDO3dCQUN6QyxtQ0FBbUM7cUJBQ3BDO2lCQUNGOztJQUNvRCw2Q0FBQztDQUFBLEFBN0J0RCxJQTZCc0Q7U0FBekMsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQtYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3Blbi1kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtb3Blbi1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBBbm9ueW1vdXNDb25zZW50T3BlbkRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJDb21wb25lbnQsXG4gICAgQW5vbnltb3VzQ29uc2VudE9wZW5EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRPcGVuRGlhbG9nQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lck1vZHVsZSB7fVxuIl19