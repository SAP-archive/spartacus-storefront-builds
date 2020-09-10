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
var UserComponentModule = /** @class */ (function () {
    function UserComponentModule() {
    }
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
    return UserComponentModule;
}());
export { UserComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy91c2VyL3VzZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBZ0I3RTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBZC9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCx1QkFBdUI7YUFDeEI7U0FDRixDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRMb2dpbk1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQtbG9naW4vY2hlY2tvdXQtbG9naW4ubW9kdWxlJztcbmltcG9ydCB7IExvZ2luRm9ybU1vZHVsZSB9IGZyb20gJy4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4vbG9naW4vbG9naW4ubW9kdWxlJztcbmltcG9ydCB7IExvZ291dE1vZHVsZSB9IGZyb20gJy4vbG9nb3V0L2xvZ291dC5tb2R1bGUnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpblJlZ2lzdGVyTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIExvZ2luRm9ybU1vZHVsZSxcbiAgICBMb2dpblJlZ2lzdGVyTW9kdWxlLFxuICAgIExvZ291dE1vZHVsZSxcbiAgICBDaGVja291dExvZ2luTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBSZWdpc3RlckNvbXBvbmVudE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudE1vZHVsZSB7fVxuIl19