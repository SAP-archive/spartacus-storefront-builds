import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule, NotAuthGuard, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { FormErrorsModule } from '../../../shared/index';
import { LoginFormComponent } from './login-form.component';
var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                UrlModule,
                I18nModule,
                FormErrorsModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        ReturningCustomerLoginComponent: {
                            component: LoginFormComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
            ],
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent],
            entryComponents: [LoginFormComponent],
        })
    ], LoginFormModule);
    return LoginFormModule;
}());
export { LoginFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFVBQVUsRUFDVixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBMEI1RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQXhCM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxVQUFVO2dCQUNWLGdCQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBWTtvQkFDOUIsYUFBYSxFQUFFO3dCQUNiLCtCQUErQixFQUFFOzRCQUMvQixTQUFTLEVBQUUsa0JBQWtCOzRCQUM3QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7eUJBQ3ZCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQzdCLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ3RDLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgTm90QXV0aEd1YXJkLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLWZvcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmV0dXJuaW5nQ3VzdG9tZXJMb2dpbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTG9naW5Gb3JtQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW05vdEF1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTG9naW5Gb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTG9naW5Gb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtTW9kdWxlIHt9XG4iXX0=