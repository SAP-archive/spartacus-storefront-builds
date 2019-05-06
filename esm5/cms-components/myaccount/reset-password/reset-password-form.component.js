/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent(fb, routingService, userService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.subscription = new Subscription();
        this.submited = false;
        this.form = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    /**
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe(function (state) { return (_this.token = state.state.queryParams['token']); }));
        this.subscription.add(this.userService.isPasswordReset().subscribe(function (reset) {
            if (reset) {
                _this.routingService.go({ route: 'login' });
            }
        }));
    };
    /**
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.resetPassword = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        var password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.matchPassword = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
        }
    };
    ResetPasswordFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-reset-password-form',
                    template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    ResetPasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: RoutingService },
        { type: UserService }
    ]; };
    return ResetPasswordFormComponent;
}());
export { ResetPasswordFormComponent };
if (false) {
    /** @type {?} */
    ResetPasswordFormComponent.prototype.token;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.subscription;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.submited;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFFTCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRS9GO0lBb0JFLG9DQUNVLEVBQWUsRUFDZixjQUE4QixFQUM5QixXQUF3QjtRQUZ4QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBakJsQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQzdCO1lBQ0UsUUFBUSxFQUFFO2dCQUNSLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0QsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDLEVBQ0QsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUNsQyxDQUFDO0lBTUMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGNBQWMsRUFBRTthQUNoQixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUN2RSxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNoRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7SUFFRCxrREFBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjs7WUFFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRU8sa0RBQWE7Ozs7O0lBQXJCLFVBQXNCLEVBQW1CO1FBQ3ZDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsMGxFQUFtRDtpQkFDcEQ7Ozs7Z0JBWEMsV0FBVztnQkFJSixjQUFjO2dCQUFFLFdBQVc7O0lBbUVwQyxpQ0FBQztDQUFBLEFBL0RELElBK0RDO1NBM0RZLDBCQUEwQjs7O0lBQ3JDLDJDQUFjOztJQUNkLGtEQUFrQzs7SUFDbEMsOENBQWlCOztJQUVqQiwwQ0FTRTs7Ozs7SUFHQSx3Q0FBdUI7Ozs7O0lBQ3ZCLG9EQUFzQzs7Ozs7SUFDdEMsaURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXNldC1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgdG9rZW46IHN0cmluZztcbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBzdWJtaXRlZCA9IGZhbHNlO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcmVwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IHRoaXMubWF0Y2hQYXNzd29yZCB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgICAgLnN1YnNjcmliZShzdGF0ZSA9PiAodGhpcy50b2tlbiA9IHN0YXRlLnN0YXRlLnF1ZXJ5UGFyYW1zWyd0b2tlbiddKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy51c2VyU2VydmljZS5pc1Bhc3N3b3JkUmVzZXQoKS5zdWJzY3JpYmUocmVzZXQgPT4ge1xuICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgcm91dGU6ICdsb2dpbicgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMuc3VibWl0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLnZhbHVlWydwYXNzd29yZCddO1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLnRva2VuLCBwYXNzd29yZCk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoUGFzc3dvcmQoYWM6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIGlmIChhYy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgIT09IGFjLmdldCgncmVwYXNzd29yZCcpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuIl19