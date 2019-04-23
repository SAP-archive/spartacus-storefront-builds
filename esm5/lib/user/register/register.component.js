/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { AuthService, GlobalMessageService, GlobalMessageType, RoutingService, UserService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { CustomFormValidators } from '../../ui/validators/custom-form-validators';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, routing, userService, globalMessageService, fb) {
        this.auth = auth;
        this.routing = routing;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.userRegistrationForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: [false],
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: this.matchPassword });
    }
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.titles$ = this.userService.getTitles().pipe(tap(function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        }));
        this.subscription = this.auth
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
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.userRegistrationForm.value, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, titleCode = _a.titleCode;
        /** @type {?} */
        var userRegisterFormData = {
            firstName: firstName,
            lastName: lastName,
            uid: email,
            password: password,
            titleCode: titleCode,
        };
        this.userService.register(userRegisterFormData);
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.globalMessageService
            .get()
            .pipe(filter(function (data) { return Object.keys(data).length > 0; }))
            .subscribe(function (globalMessageEntities) {
            if (globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR].some(function (message) { return message === 'This field is required.'; })) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: 'Title is required.',
                });
            }
        });
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    RegisterComponent.prototype.matchPassword = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('password').value !== ac.get('passwordconf').value) {
            return { NotEqual: true };
        }
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-register',
                    template: "<section class=\"cx-page__section container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <h1 class=\"cx-section__title\">\n          {{ 'register.label.createAccount' | cxTranslate }}\n        </h1>\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.placeholder.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of (titles$ | async)\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.firstName' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.placeholder.firstName' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.lastName' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.placeholder.lastName' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.emailAddress' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  (userRegistrationForm.get('email').errors?.email ||\n                    userRegistrationForm.get('email').errors?.InvalidEmail) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.placeholder.emailAddress' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.password' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.placeholder.password' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.validation.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.label.confirmPassword' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.placeholder.confirmPassword' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.validation.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.label.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.label.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"\n                      { route: ['termsAndConditions'] } | cxTranslateUrl\n                    \"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.action.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.action.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ route: ['login'] } | cxTranslateUrl\"\n            >{{ 'register.action.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder }
    ]; };
    return RegisterComponent;
}());
export { RegisterComponent };
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.titles$;
    /** @type {?} */
    RegisterComponent.prototype.subscription;
    /** @type {?} */
    RegisterComponent.prototype.userRegistrationForm;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBRUwsV0FBVyxFQUVYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCxXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixjQUFjLEVBR2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRWxGO0lBd0JFLDJCQUNVLElBQWlCLEVBQ2pCLE9BQXVCLEVBQ3ZCLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxFQUFlO1FBSmYsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUF0QnpCLHlCQUFvQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUM3QztZQUNFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFD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QyxDQUNqRCxFQUNEO2dCQUNBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25FLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7b0JBQzVCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxjQUFjO29CQUN0QyxJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8seUNBQWE7Ozs7O0lBQXJCLFVBQXNCLEVBQW1CO1FBQ3ZDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDRpT0FBd0M7aUJBQ3pDOzs7O2dCQWhCQyxXQUFXO2dCQUlYLGNBQWM7Z0JBR2QsV0FBVztnQkFMWCxvQkFBb0I7Z0JBUHBCLFdBQVc7O0lBK0hiLHdCQUFDO0NBQUEsQUE3R0QsSUE2R0M7U0F6R1ksaUJBQWlCOzs7SUFDNUIsb0NBQTZCOztJQUM3Qix5Q0FBMkI7O0lBQzNCLGlEQWVFOzs7OztJQUdBLGlDQUF5Qjs7Ozs7SUFDekIsb0NBQStCOzs7OztJQUMvQix3Q0FBZ0M7Ozs7O0lBQ2hDLGlEQUFrRDs7Ozs7SUFDbEQsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZUVudGl0aWVzLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUaXRsZSxcbiAgVXNlclJlZ2lzdGVyRm9ybURhdGEsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vdWkvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdGl0bGVzJDogT2JzZXJ2YWJsZTxUaXRsZVtdPjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHVzZXJSZWdpc3RyYXRpb25Gb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZGNvbmY6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuZXdzbGV0dGVyOiBbZmFsc2VdLFxuICAgICAgdGVybXNhbmRjb25kaXRpb25zOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiB0aGlzLm1hdGNoUGFzc3dvcmQgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aXRsZXMkID0gdGhpcy51c2VyU2VydmljZS5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgdGFwKHRpdGxlcyA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aXRsZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZFRpdGxlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmF1dGhcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZy5nZXRSZWRpcmVjdFVybCgpLnBpcGUodGFrZSgxKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZjxzdHJpbmc+KCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAvLyBJZiBmb3JjZWQgdG8gbG9naW4gZHVlIHRvIEF1dGhHdWFyZCwgdGhlbiByZWRpcmVjdCB0byBpbnRlbmRlZCBkZXN0aW5hdGlvblxuICAgICAgICAgIHRoaXMucm91dGluZy5nb0J5VXJsKHVybCk7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nLmNsZWFyUmVkaXJlY3RVcmwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVc2VyIG1hbnVhbCBsb2dpblxuICAgICAgICAgIHRoaXMucm91dGluZy5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9ID0gdGhpcy51c2VyUmVnaXN0cmF0aW9uRm9ybS52YWx1ZTtcbiAgICBjb25zdCB1c2VyUmVnaXN0ZXJGb3JtRGF0YTogVXNlclJlZ2lzdGVyRm9ybURhdGEgPSB7XG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHVpZDogZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIHRpdGxlQ29kZSxcbiAgICB9O1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodXNlclJlZ2lzdGVyRm9ybURhdGEpO1xuICAgIC8vIFRPRE86IFdvcmthcm91bmQ6IGFsbG93IHNlcnZlciBmb3IgZGVjaWRlIGlzIHRpdGxlQ29kZSBtYW5kYXRvcnkgKGlmIHllcywgcHJvdmlkZSBwZXJzb25hbGl6ZWQgbWVzc2FnZSlcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0KClcbiAgICAgIC5waXBlKGZpbHRlcihkYXRhID0+IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApKVxuICAgICAgLnN1YnNjcmliZSgoZ2xvYmFsTWVzc2FnZUVudGl0aWVzOiBHbG9iYWxNZXNzYWdlRW50aXRpZXMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdsb2JhbE1lc3NhZ2VFbnRpdGllc1tHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUl0uc29tZShcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4gbWVzc2FnZSA9PT0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJ1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgICAgdGV4dDogJ1RpdGxlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hQYXNzd29yZChhYzogQWJzdHJhY3RDb250cm9sKTogeyBOb3RFcXVhbDogYm9vbGVhbiB9IHtcbiAgICBpZiAoYWMuZ2V0KCdwYXNzd29yZCcpLnZhbHVlICE9PSBhYy5nZXQoJ3Bhc3N3b3JkY29uZicpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuIl19