/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, RoutingService, UserService } from '@spartacus/core';
import { CustomFormValidators } from '../../../../shared/utils/validators/custom-form-validators';
var GuestRegisterFormComponent = /** @class */ (function () {
    function GuestRegisterFormComponent(userService, routingService, authService, fb) {
        this.userService = userService;
        this.routingService = routingService;
        this.authService = authService;
        this.fb = fb;
        this.guestRegisterForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
        }, { validator: CustomFormValidators.matchPassword });
    }
    /**
     * @return {?}
     */
    GuestRegisterFormComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                if (token.access_token) {
                    _this.routingService.go({ cxRoute: 'home' });
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    GuestRegisterFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GuestRegisterFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-guest-register-form',
                    template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    GuestRegisterFormComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: RoutingService },
        { type: AuthService },
        { type: FormBuilder }
    ]; };
    GuestRegisterFormComponent.propDecorators = {
        guid: [{ type: Input }],
        email: [{ type: Input }]
    };
    return GuestRegisterFormComponent;
}());
export { GuestRegisterFormComponent };
if (false) {
    /** @type {?} */
    GuestRegisterFormComponent.prototype.guid;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.email;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.subscription;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.guestRegisterForm;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vY29tcG9uZW50cy9ndWVzdC1yZWdpc3Rlci1mb3JtL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWxHO0lBcUJFLG9DQUNZLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLEVBQWU7UUFIZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWYzQixzQkFBaUIsR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDMUM7WUFDRSxRQUFRLEVBQUU7Z0JBQ1IsRUFBRTtnQkFDRixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDOUQ7WUFDRCxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN4QyxFQUNELEVBQUUsU0FBUyxFQUFFLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUNsRCxDQUFDO0lBT0MsQ0FBQzs7OztJQUVKLDJDQUFNOzs7SUFBTjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQzVCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3RDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsS0FBSztnQkFDakUsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO29CQUN0QixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDJqRkFBbUQ7aUJBQ3BEOzs7O2dCQVBxQyxXQUFXO2dCQUEzQixjQUFjO2dCQUEzQixXQUFXO2dCQURYLFdBQVc7Ozt1QkFVakIsS0FBSzt3QkFDTCxLQUFLOztJQXlDUixpQ0FBQztDQUFBLEFBL0NELElBK0NDO1NBM0NZLDBCQUEwQjs7O0lBQ3JDLDBDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUV2QixrREFBMkI7O0lBRTNCLHVEQVNFOzs7OztJQUdBLGlEQUFrQzs7Ozs7SUFDbEMsb0RBQXdDOzs7OztJQUN4QyxpREFBa0M7Ozs7O0lBQ2xDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1ndWVzdC1yZWdpc3Rlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2d1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHdWVzdFJlZ2lzdGVyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGd1aWQ6IHN0cmluZztcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBndWVzdFJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICBwYXNzd29yZGNvbmY6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSxcbiAgICB7IHZhbGlkYXRvcjogQ3VzdG9tRm9ybVZhbGlkYXRvcnMubWF0Y2hQYXNzd29yZCB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXJHdWVzdChcbiAgICAgIHRoaXMuZ3VpZCxcbiAgICAgIHRoaXMuZ3Vlc3RSZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmRcbiAgICApO1xuICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyVG9rZW4oKS5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4uYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19