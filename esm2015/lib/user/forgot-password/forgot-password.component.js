/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomFormValidators } from '../../ui/validators/custom-form-validators';
import { UserService, RoutingService } from '@spartacus/core';
export class ForgotPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    /**
     * @return {?}
     */
    requestForgotPasswordEmail() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ route: 'login' });
    }
}
ForgotPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-forgot-password',
                template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ route: 'login' } | cxTranslateUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n",
                styles: [".reset-password h1{margin:var(--cx-margin,0)}.reset-password button{margin:var(--cx-margin,30px 0 0)}.reset-password a{margin:var(--cx-margin,20px 0 0)}"]
            }] }
];
/** @nocollapse */
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU05RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFHbEMsWUFDVSxFQUFlLEVBQ2YsV0FBd0IsRUFDeEIsY0FBOEI7UUFGOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUp4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBS2QsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxFQUFFO2dCQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7YUFDM0Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMEJBQTBCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsczJDQUErQzs7YUFFaEQ7Ozs7WUFQbUIsV0FBVztZQUV0QixXQUFXO1lBQUUsY0FBYzs7OztJQU9sQyx1Q0FBZ0I7O0lBQ2hCLDJDQUFpQjs7Ozs7SUFFZixxQ0FBdUI7Ozs7O0lBQ3ZCLDhDQUFnQzs7Ozs7SUFDaEMsaURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uL3VpL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZm9yZ290LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgc3VibWl0ZWQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlckVtYWlsOiBbXG4gICAgICAgICcnLFxuICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKCkge1xuICAgIHRoaXMuc3VibWl0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXNlclNlcnZpY2UucmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodGhpcy5mb3JtLnZhbHVlLnVzZXJFbWFpbCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IHJvdXRlOiAnbG9naW4nIH0pO1xuICB9XG59XG4iXX0=