/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { ConsentManagementModule } from '../../../cms-components/myaccount/consent-management/consent-management.module';
import { AnonymousConsentsDialogComponent } from './dialog/anonymous-consents-dialog.component';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, I18nModule, IconModule, ConsentManagementModule],
                    declarations: [AnonymousConsentsDialogComponent],
                    entryComponents: [AnonymousConsentsDialogComponent],
                    exports: [AnonymousConsentsDialogComponent],
                },] }
    ];
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9hbm9ueW1vdXMtY29uc2VudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhHO0lBQUE7SUFNc0MsQ0FBQzs7Z0JBTnRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQztvQkFDeEUsWUFBWSxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQ2hELGVBQWUsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUNuRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDNUM7O0lBQ3FDLDhCQUFDO0NBQUEsQUFOdkMsSUFNdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvY29uc2VudC1tYW5hZ2VtZW50L2NvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEkxOG5Nb2R1bGUsIEljb25Nb2R1bGUsIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5vbnltb3VzQ29uc2VudHNEaWFsb2dDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbm9ueW1vdXNDb25zZW50c0RpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzTW9kdWxlIHt9XG4iXX0=