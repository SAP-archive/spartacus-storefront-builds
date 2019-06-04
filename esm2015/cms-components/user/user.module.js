/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UrlModule, UserModule } from '@spartacus/core';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { RegisterComponentModule } from './register/register.module';
export class UserComponentModule {
}
UserComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginModule,
                    LoginFormModule,
                    LogoutModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UserModule,
                    UrlModule,
                    RegisterComponentModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL3VzZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWVyRSxNQUFNLE9BQU8sbUJBQW1COzs7WUFiL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixVQUFVO29CQUNWLFNBQVM7b0JBQ1QsdUJBQXVCO2lCQUN4QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1vZHVsZSwgVXNlck1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Nb2R1bGUgfSBmcm9tICcuL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuL2xvZ291dC9sb2dvdXQubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIExvZ2luRm9ybU1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXNlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUmVnaXN0ZXJDb21wb25lbnRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnRNb2R1bGUge31cbiJdfQ==