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
                    template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: 'login' } | cxUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBUSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUtFLHdCQUNVLElBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLFlBQW1DO1FBRm5DLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBQzFDLENBQUM7SUFFSixzQkFBSSxpQ0FBSzs7OztRQUFUO1lBQUEsaUJBZUM7WUFkQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUNQLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQy9ELEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3BFLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQTdCLENBQTZCLENBQUMsRUFDOUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQ3hDLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsbWFBQXFDO2lCQUN0Qzs7OztnQkFSUSxXQUFXO2dCQUFRLFdBQVc7Z0JBRzlCLHFCQUFxQjs7SUE2QjlCLHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F2QlksY0FBYzs7Ozs7O0lBRXZCLDhCQUF5Qjs7Ozs7SUFDekIscUNBQWdDOzs7OztJQUNoQyxzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpbkNvbXBvbmVudFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCB1c2VyJCgpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoLmdldFVzZXJUb2tlbigpLnBpcGUoXG4gICAgICBtYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4gJiYgISF0b2tlbi5hY2Nlc3NfdG9rZW4gJiYgIXRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWQodG9rZW4udXNlcklkKTtcbiAgICAgICAgICB0aGlzLmF1dGgubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiAmJiAhdG9rZW4uYWNjZXNzX3Rva2VuICYmIHRoaXMubG9naW5TZXJ2aWNlLmlzTG9naW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIodG9rZW4gPT4gdG9rZW4gJiYgISF0b2tlbi5hY2Nlc3NfdG9rZW4pLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlclNlcnZpY2UuZ2V0KCkpXG4gICAgKTtcbiAgfVxufVxuIl19