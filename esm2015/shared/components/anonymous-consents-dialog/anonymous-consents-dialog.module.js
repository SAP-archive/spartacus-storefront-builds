import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { ConsentManagementModule } from '../../../cms-components/myaccount/consent-management/consent-management.module';
import { KeyboardFocusModule } from '../../../layout/a11y/keyboard-focus/index';
import { SpinnerModule } from '../spinner/spinner.module';
import { AnonymousConsentDialogComponent } from './anonymous-consent-dialog.component';
export class AnonymousConsentsDialogModule {
}
AnonymousConsentsDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    IconModule,
                    SpinnerModule,
                    ConsentManagementModule,
                    KeyboardFocusModule,
                ],
                declarations: [AnonymousConsentDialogComponent],
                entryComponents: [AnonymousConsentDialogComponent],
                exports: [AnonymousConsentDialogComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nL2Fub255bW91cy1jb25zZW50cy1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDekgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBZXZGLE1BQU0sT0FBTyw2QkFBNkI7OztZQWJ6QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixVQUFVO29CQUNWLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUMvQyxlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zZW50TWFuYWdlbWVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBLZXlib2FyZEZvY3VzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgS2V5Ym9hcmRGb2N1c01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Fub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5vbnltb3VzQ29uc2VudERpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzRGlhbG9nTW9kdWxlIHt9XG4iXX0=