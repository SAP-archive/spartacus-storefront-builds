/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { CustomFormValidators } from '../../../shared/utils/validators/custom-form-validators';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    };
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.requestForgotPasswordEmail = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ cxRoute: 'login' });
    };
    ForgotPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-forgot-password',
                    template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n",
                    styles: [".reset-password h1{margin:var(--cx-margin,0)}.reset-password button{margin:var(--cx-margin,30px 0 0)}.reset-password a{margin:var(--cx-margin,20px 0 0)}"]
                }] }
    ];
    /** @nocollapse */
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UserService },
        { type: RoutingService }
    ]; };
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
if (false) {
    /** @type {?} */
    ForgotPasswordComponent.prototype.form;
    /** @type {?} */
    ForgotPasswordComponent.prototype.submited;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0Y7SUFRRSxpQ0FDVSxFQUFlLEVBQ2YsV0FBd0IsRUFDeEIsY0FBOEI7UUFGOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUp4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBS2QsQ0FBQzs7OztJQUVKLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQzthQUMzRDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0REFBMEI7OztJQUExQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsKzFDQUErQzs7aUJBRWhEOzs7O2dCQVBRLFdBQVc7Z0JBQ0ssV0FBVztnQkFBM0IsY0FBYzs7SUFrQ3ZCLDhCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksdUJBQXVCOzs7SUFDbEMsdUNBQWdCOztJQUNoQiwyQ0FBaUI7Ozs7O0lBRWYscUNBQXVCOzs7OztJQUN2Qiw4Q0FBZ0M7Ozs7O0lBQ2hDLGlEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3Jnb3QtcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBzdWJtaXRlZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VyRW1haWw6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwoKSB7XG4gICAgdGhpcy5zdWJtaXRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VydmljZS5yZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh0aGlzLmZvcm0udmFsdWUudXNlckVtYWlsKTtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgfVxufVxuIl19