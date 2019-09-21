/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { AuthService, UserService, RoutingService, RoutingConfigService, } from '@spartacus/core';
import { of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService, routingService, routingConfigService) {
        this.auth = auth;
        this.userService = userService;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
        this.hidden = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.user$ = this.auth.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token && !!token.access_token) {
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
        /** @type {?} */
        var checkoutPath = '/' + this.routingConfigService.getRouteConfig('checkout').paths[0] + '/';
        this.subscription = this.routingService
            .getRouterState()
            .subscribe((/**
         * @param {?} routerState
         * @return {?}
         */
        function (routerState) {
            if (routerState.state.context.id.includes(checkoutPath)) {
                _this.hidden.next(true);
            }
            else {
                _this.hidden.next(false);
            }
        }));
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login',
                    template: "<ng-container *ngIf=\"!(hidden | async)\">\n  <ng-container *ngIf=\"user$ | async as user; else login\">\n    <div class=\"cx-login-greet\">\n      {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n    </div>\n    <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n  </ng-container>\n\n  <ng-template #login>\n    <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n      'miniLogin.signInRegister' | cxTranslate\n    }}</a>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.user$;
    /** @type {?} */
    LoginComponent.prototype.hidden;
    /** @type {?} */
    LoginComponent.prototype.subscription;
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
    LoginComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsdUJBQXVCLEdBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBRVgsV0FBVyxFQUNYLGNBQWMsRUFDZCxvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBd0JFLHdCQUNVLElBQWlCLEVBQ2pCLFdBQXdCLEVBQ3hCLGNBQStCLEVBQy9CLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBckJyRCxXQUFNLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBc0IzRCxDQUFDOzs7O0lBRUosaUNBQVE7OztJQUFSO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDYixJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDakMsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQzs7WUFFSSxZQUFZLEdBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1FBRTNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDcEMsY0FBYyxFQUFFO2FBQ2hCLFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVc7WUFDcEIsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN2RCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsOGZBQXFDO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBYkMsV0FBVztnQkFFWCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2Qsb0JBQW9COztJQWtFdEIscUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQXhEWSxjQUFjOzs7SUFDekIsK0JBQXdCOztJQUN4QixnQ0FBOEQ7O0lBRTlELHNDQUEyQjs7Ozs7SUFnQnpCLDhCQUF5Qjs7Ozs7SUFDekIscUNBQWdDOzs7OztJQUNoQyx3Q0FBdUM7Ozs7O0lBQ3ZDLDhDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBVc2VyLFxuICBVc2VyU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFJvdXRpbmdDb25maWdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgaGlkZGVuOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhdXRoOiBBdXRoU2VydmljZSxcbiAgICB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLnhcbiAgICogTk9URTogY2hlY2sgaXNzdWU6IzQxNTUgZm9yIG1vcmUgaW5mb1xuICAgKlxuICAgKiBUT0RPKGlzc3VlOiM0MTU1KSBEZXByZWNhdGVkIHNpbmNlIDEueFxuICAgKi9cbiAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZT86IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U/OiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyJCA9IHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuICYmICEhdG9rZW4uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IGNoZWNrb3V0UGF0aCA9XG4gICAgICAnLycgKyB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKCdjaGVja291dCcpLnBhdGhzWzBdICsgJy8nO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnN1YnNjcmliZShyb3V0ZXJTdGF0ZSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0LmlkLmluY2x1ZGVzKGNoZWNrb3V0UGF0aCkpIHtcbiAgICAgICAgICB0aGlzLmhpZGRlbi5uZXh0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZGVuLm5leHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==