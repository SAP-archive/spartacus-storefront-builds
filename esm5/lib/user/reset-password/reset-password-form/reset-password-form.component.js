/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CustomFormValidators } from '../../../ui/validators/custom-form-validators';
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
                    template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n",
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1mb3JtL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUVYLFVBQVUsR0FFWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUVyRjtJQXFCRSxvQ0FDVSxFQUFlLEVBQ2YsY0FBOEIsRUFDOUIsV0FBd0I7UUFGeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWpCbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsU0FBSSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUM3QjtZQUNFLFFBQVEsRUFBRTtnQkFDUixFQUFFO2dCQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5RDtZQUNELFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QyxFQUNELEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FDbEMsQ0FBQztJQU1DLENBQUM7Ozs7SUFFSiw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsY0FBYzthQUNoQixjQUFjLEVBQUU7YUFDaEIsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FDdkUsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDaEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBRUQsa0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7O1lBRUssUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVPLGtEQUFhOzs7OztJQUFyQixVQUFzQixFQUFtQjtRQUN2QyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBsRUFBbUQ7O2lCQUVwRDs7OztnQkFkQyxXQUFXO2dCQUtKLGNBQWM7Z0JBQUUsV0FBVzs7SUFxRXBDLGlDQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EzRFksMEJBQTBCOzs7SUFDckMsMkNBQWM7O0lBQ2Qsa0RBQWtDOztJQUNsQyw4Q0FBaUI7O0lBRWpCLDBDQVNFOzs7OztJQUdBLHdDQUF1Qjs7Ozs7SUFDdkIsb0RBQXNDOzs7OztJQUN0QyxpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxuICBBYnN0cmFjdENvbnRyb2wsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi91aS92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXNldC1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNldC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0b2tlbjogc3RyaW5nO1xuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHN1Ym1pdGVkID0gZmFsc2U7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICBwYXNzd29yZDogW1xuICAgICAgICAnJyxcbiAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgIF0sXG4gICAgICByZXBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSxcbiAgICB7IHZhbGlkYXRvcjogdGhpcy5tYXRjaFBhc3N3b3JkIH1cbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgICAuc3Vic2NyaWJlKHN0YXRlID0+ICh0aGlzLnRva2VuID0gc3RhdGUuc3RhdGUucXVlcnlQYXJhbXNbJ3Rva2VuJ10pKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLmlzUGFzc3dvcmRSZXNldCgpLnN1YnNjcmliZShyZXNldCA9PiB7XG4gICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5zdWJtaXRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZvcm0udmFsdWVbJ3Bhc3N3b3JkJ107XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKHRoaXMudG9rZW4sIHBhc3N3b3JkKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hQYXNzd29yZChhYzogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgaWYgKGFjLmdldCgncGFzc3dvcmQnKS52YWx1ZSAhPT0gYWMuZ2V0KCdyZXBhc3N3b3JkJykudmFsdWUpIHtcbiAgICAgIHJldHVybiB7IE5vdEVxdWFsOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG4iXX0=