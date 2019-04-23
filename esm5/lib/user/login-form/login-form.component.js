/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CustomFormValidators } from '../../ui/validators/custom-form-validators';
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, routing, globalMessageService, fb) {
        this.auth = auth;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
    }
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.auth
            .getUserToken()
            .pipe(switchMap(function (data) {
            if (data && data.access_token) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                return _this.routing.getRedirectUrl().pipe(take(1));
            }
            return of();
        }))
            .subscribe(function (url) {
            if (url) {
                // If forced to login due to AuthGuard, then redirect to intended destination
                _this.routing.goByUrl(url);
                _this.routing.clearRedirectUrl();
            }
            else {
                // User manual login
                _this.routing.back();
            }
        });
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        this.auth.authorize(this.form.controls.userId.value, this.form.controls.password.value);
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    LoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login-form',
                    template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.emailAddress' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'login.placeholder.emailAddress' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'login.validation.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'login.label.password' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'login.placeholder.password' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ route: ['forgotPassword'] } | cxTranslateUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'login.action.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'login.action.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section__title cx-section__title--alt\">\n    {{ 'login.label.dontHaveAccount' | cxTranslate }}\n  </h3>\n  <a\n    [routerLink]=\"{ route: ['register'] } | cxTranslateUrl\"\n    class=\"btn btn-block btn-secondary\"\n    >{{ 'login.action.register' | cxTranslate }}</a\n  >\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: FormBuilder }
    ]; };
    return LoginFormComponent;
}());
export { LoginFormComponent };
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.sub;
    /** @type {?} */
    LoginFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdXNlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRWxGO0lBUUUsNEJBQ1UsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsb0JBQTBDLEVBQzFDLEVBQWU7UUFIZixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtJQUN0QixDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQUEsaUJBMkJDO1FBMUJDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDakIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM3QixLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxFQUFFLEVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixJQUFJLEdBQUcsRUFBRTtnQkFDUCw2RUFBNkU7Z0JBQzdFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsb0JBQW9CO2dCQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNsQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixrOERBQTBDO2lCQUMzQzs7OztnQkFaQyxXQUFXO2dCQUdYLGNBQWM7Z0JBRmQsb0JBQW9CO2dCQUhiLFdBQVc7O0lBbUVwQix5QkFBQztDQUFBLEFBeERELElBd0RDO1NBcERZLGtCQUFrQjs7O0lBQzdCLGlDQUFrQjs7SUFDbEIsa0NBQWdCOzs7OztJQUdkLGtDQUF5Qjs7Ozs7SUFDekIscUNBQStCOzs7OztJQUMvQixrREFBa0Q7Ozs7O0lBQ2xELGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vdWkvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLmF1dGhcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZy5nZXRSZWRpcmVjdFVybCgpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZjxzdHJpbmc+KCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAvLyBJZiBmb3JjZWQgdG8gbG9naW4gZHVlIHRvIEF1dGhHdWFyZCwgdGhlbiByZWRpcmVjdCB0byBpbnRlbmRlZCBkZXN0aW5hdGlvblxuICAgICAgICAgIHRoaXMucm91dGluZy5nb0J5VXJsKHVybCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nLmNsZWFyUmVkaXJlY3RVcmwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVc2VyIG1hbnVhbCBsb2dpblxuICAgICAgICAgIHRoaXMucm91dGluZy5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5hdXRob3JpemUoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHMudXNlcklkLnZhbHVlLFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==