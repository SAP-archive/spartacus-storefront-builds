/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, NotAuthGuard, UrlModule, UserModule, } from '@spartacus/core';
import { LoginFormComponent } from './login-form.component';
export class LoginFormModule {
}
LoginFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UserModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ReturningCustomerLoginComponent: {
                                component: LoginFormComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [LoginFormComponent],
                exports: [LoginFormComponent],
                entryComponents: [LoginFormComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUVMLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQXdCNUQsTUFBTSxPQUFPLGVBQWU7OztZQXRCM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsK0JBQStCLEVBQUU7Z0NBQy9CLFNBQVMsRUFBRSxrQkFBa0I7Z0NBQzdCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQzs2QkFDdkI7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIE5vdEF1dGhHdWFyZCxcbiAgVXJsTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVybmluZ0N1c3RvbWVyTG9naW5Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IExvZ2luRm9ybUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtOb3RBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTG9naW5Gb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTG9naW5Gb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtTW9kdWxlIHt9XG4iXX0=