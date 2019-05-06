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
                template: "<ng-container *ngIf=\"(user$ | async) as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'login.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ route: 'login' } | cxTranslateUrl\">{{\n    'login.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBUSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1sRSxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1UsSUFBaUIsRUFDakIsV0FBd0IsRUFDeEIsWUFBbUM7UUFGbkMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBdUI7SUFDMUMsQ0FBQzs7OztJQUVKLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ25CO2lCQUFNLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDOUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDRhQUFxQzthQUN0Qzs7OztZQVJRLFdBQVc7WUFBUSxXQUFXO1lBRzlCLHFCQUFxQjs7Ozs7OztJQVExQiw4QkFBeUI7Ozs7O0lBQ3pCLHFDQUFnQzs7Ozs7SUFDaEMsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5Db21wb25lbnRTZXJ2aWNlXG4gICkge31cblxuICBnZXQgdXNlciQoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgbWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuICYmICF0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luKSB7XG4gICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkKHRva2VuLnVzZXJJZCk7XG4gICAgICAgICAgdGhpcy5hdXRoLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gJiYgIXRva2VuLmFjY2Vzc190b2tlbiAmJiB0aGlzLmxvZ2luU2VydmljZS5pc0xvZ2luKSB7XG4gICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuaXNMb2dpbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKHRva2VuID0+IHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJTZXJ2aWNlLmdldCgpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==