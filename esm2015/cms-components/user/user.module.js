import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CheckoutLoginModule } from './checkout-login/checkout-login.module';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { RegisterComponentModule } from './register/register.module';
import { LoginRegisterModule } from './login-register/login-register.module';
let UserComponentModule = class UserComponentModule {
};
UserComponentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LoginModule,
            LoginFormModule,
            LoginRegisterModule,
            LogoutModule,
            CheckoutLoginModule,
            ReactiveFormsModule,
            RouterModule,
            UrlModule,
            RegisterComponentModule,
        ],
    })
], UserComponentModule);
export { UserComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL3VzZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBZ0I3RSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFHLENBQUE7QUFBdEIsbUJBQW1CO0lBZC9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osU0FBUztZQUNULHVCQUF1QjtTQUN4QjtLQUNGLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0TG9naW5Nb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0LWxvZ2luL2NoZWNrb3V0LWxvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Nb2R1bGUgfSBmcm9tICcuL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuL2xvZ291dC9sb2dvdXQubW9kdWxlJztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5SZWdpc3Rlck1vZHVsZSB9IGZyb20gJy4vbG9naW4tcmVnaXN0ZXIvbG9naW4tcmVnaXN0ZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBMb2dpbkZvcm1Nb2R1bGUsXG4gICAgTG9naW5SZWdpc3Rlck1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgQ2hlY2tvdXRMb2dpbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUmVnaXN0ZXJDb21wb25lbnRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnRNb2R1bGUge31cbiJdfQ==