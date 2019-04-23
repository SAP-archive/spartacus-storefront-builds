/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService, UserService } from '@spartacus/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginComponentService } from './login.component.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService, loginService) {
        this.auth = auth;
        this.userService = userService;
        this.loginService = loginService;
    }
    Object.defineProperty(LoginComponent.prototype, "user$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.auth.getUserToken().pipe(map(function (token) {
                if (token && !!token.access_token && !_this.loginService.isLogin) {
                    _this.loginService.isLogin = true;
                    _this.userService.load(token.userId);
                    _this.auth.login();
                }
                else if (token && !token.access_token && _this.loginService.isLogin) {
                    _this.loginService.isLogin = false;
                }
                return token;
            }), filter(function (token) { return token && !!token.access_token; }), switchMap(function () { return _this.userService.get(); }));
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login',
                    template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService },
        { type: LoginComponentService }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQVEsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFLRSx3QkFDVSxJQUFpQixFQUNqQixXQUF3QixFQUN4QixZQUFtQztRQUZuQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUMxQyxDQUFDO0lBRUosc0JBQUksaUNBQUs7Ozs7UUFBVDtZQUFBLGlCQWVDO1lBZEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDbEMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDUCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUMvRCxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUNwRSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUE3QixDQUE2QixDQUFDLEVBQzlDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUN4QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDhhQUFxQztpQkFDdEM7Ozs7Z0JBUlEsV0FBVztnQkFBUSxXQUFXO2dCQUc5QixxQkFBcUI7O0lBNkI5QixxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBdkJZLGNBQWM7Ozs7OztJQUV2Qiw4QkFBeUI7Ozs7O0lBQ3pCLHFDQUFnQzs7Ozs7SUFDaEMsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5Db21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICBnZXQgdXNlciQoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuICYmICF0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luKSB7XG4gICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkKHRva2VuLnVzZXJJZCk7XG4gICAgICAgICAgdGhpcy5hdXRoLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gJiYgIXRva2VuLmFjY2Vzc190b2tlbiAmJiB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luKSB7XG4gICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHRva2VuID0+IHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==