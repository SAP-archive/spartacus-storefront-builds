import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CheckoutLoginModule } from './checkout-login/checkout-login.module';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginRegisterModule } from './login-register/login-register.module';
import { LoginRouteModule } from './login-route/login-route.module';
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
                    LoginRegisterModule,
                    LogoutModule,
                    LoginRouteModule,
                    CheckoutLoginModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UrlModule,
                    RegisterComponentModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy91c2VyL3VzZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQnJFLE1BQU0sT0FBTyxtQkFBbUI7OztZQWYvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsdUJBQXVCO2lCQUN4QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dExvZ2luTW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC1sb2dpbi9jaGVja291dC1sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Gb3JtTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IExvZ2luUmVnaXN0ZXJNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJlZ2lzdGVyL2xvZ2luLXJlZ2lzdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpblJvdXRlTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1yb3V0ZS9sb2dpbi1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuL2xvZ291dC9sb2dvdXQubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIExvZ2luRm9ybU1vZHVsZSxcbiAgICBMb2dpblJlZ2lzdGVyTW9kdWxlLFxuICAgIExvZ291dE1vZHVsZSxcbiAgICBMb2dpblJvdXRlTW9kdWxlLFxuICAgIENoZWNrb3V0TG9naW5Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50TW9kdWxlIHt9XG4iXX0=