/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { ConsentManagementModule } from '../../../cms-components/myaccount/consent-management/consent-management.module';
import { SpinnerModule } from '../spinner/index';
import { AnonymousConsentDialogComponent } from './dialog/anonymous-consent-dialog.component';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        I18nModule,
                        IconModule,
                        SpinnerModule,
                        ConsentManagementModule,
                    ],
                    declarations: [AnonymousConsentDialogComponent],
                    entryComponents: [AnonymousConsentDialogComponent],
                    exports: [AnonymousConsentDialogComponent],
                },] }
    ];
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9hbm9ueW1vdXMtY29uc2VudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU5RjtJQUFBO0lBWXNDLENBQUM7O2dCQVp0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsdUJBQXVCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztvQkFDL0MsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUMzQzs7SUFDcUMsOEJBQUM7Q0FBQSxBQVp2QyxJQVl1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDb25zZW50TWFuYWdlbWVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vc3Bpbm5lci9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Fub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtBbm9ueW1vdXNDb25zZW50RGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Fub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c01vZHVsZSB7fVxuIl19