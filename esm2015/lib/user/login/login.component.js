/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, UserService } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginComponentService } from './login.component.service';
export class LoginComponent {
    /**
     * @param {?} auth
     * @param {?} userService
     * @param {?} loginService
     */
    constructor(auth, userService, loginService) {
        this.auth = auth;
        this.userService = userService;
        this.loginService = loginService;
    }
    /**
     * @return {?}
     */
    get user$() {
        return this.auth.getUserToken().pipe(map(token => {
            if (token && !!token.access_token && !this.loginService.isLogin) {
                this.loginService.isLogin = true;
                this.userService.load(token.userId);
                this.auth.login();
            }
            else if (token && !token.access_token && this.loginService.isLogin) {
                this.loginService.isLogin = false;
            }
            return token;
        }), filter(token => token && !!token.access_token), switchMap(() => this.userService.get()));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login',
                template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: LoginComponentService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loginService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNbEUsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNVLElBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLFlBQW1DO1FBRm5DLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBQzFDLENBQUM7Ozs7SUFFSixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuQjtpQkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4YUFBcUM7YUFDdEM7Ozs7WUFSUSxXQUFXO1lBQVEsV0FBVztZQUc5QixxQkFBcUI7Ozs7Ozs7SUFRMUIsOEJBQXlCOzs7OztJQUN6QixxQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luQ29tcG9uZW50U2VydmljZVxuICApIHt9XG5cbiAgZ2V0IHVzZXIkKCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGguZ2V0VXNlclRva2VuKCkucGlwZShcbiAgICAgIG1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbiAmJiAhIXRva2VuLmFjY2Vzc190b2tlbiAmJiAhdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbikge1xuICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZCh0b2tlbi51c2VySWQpO1xuICAgICAgICAgIHRoaXMuYXV0aC5sb2dpbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuICYmICF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbikge1xuICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiAmJiAhIXRva2VuLmFjY2Vzc190b2tlbiksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyU2VydmljZS5nZXQoKSlcbiAgICApO1xuICB9XG59XG4iXX0=