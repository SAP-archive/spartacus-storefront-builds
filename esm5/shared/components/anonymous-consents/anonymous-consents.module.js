/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { AnonymousConsentsDialogComponent } from './dialog/anonymous-consents-dialog.component';
import { AnonymousConsentFormComponent } from './dialog/form/anonymous-consent-form.component';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, I18nModule, IconModule],
                    declarations: [
                        AnonymousConsentsDialogComponent,
                        AnonymousConsentFormComponent,
                    ],
                    entryComponents: [AnonymousConsentsDialogComponent],
                    exports: [AnonymousConsentsDialogComponent, AnonymousConsentFormComponent],
                },] }
    ];
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9hbm9ueW1vdXMtY29uc2VudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRS9GO0lBQUE7SUFTc0MsQ0FBQzs7Z0JBVHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztvQkFDL0MsWUFBWSxFQUFFO3dCQUNaLGdDQUFnQzt3QkFDaEMsNkJBQTZCO3FCQUM5QjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsNkJBQTZCLENBQUM7aUJBQzNFOztJQUNxQyw4QkFBQztDQUFBLEFBVHZDLElBU3VDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9mb3JtL2Fub255bW91cy1jb25zZW50LWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSTE4bk1vZHVsZSwgSWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFub255bW91c0NvbnNlbnRzRGlhbG9nQ29tcG9uZW50LFxuICAgIEFub255bW91c0NvbnNlbnRGb3JtQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudCwgQW5vbnltb3VzQ29uc2VudEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c01vZHVsZSB7fVxuIl19