/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { CustomFormValidators } from '../../../../ui/validators/custom-form-validators';
import { FormUtils } from '../../../../utils/forms/form-utils';
export class UpdatePasswordFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    isPasswordConfirmNotValid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    matchPassword(abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    }
}
UpdatePasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password-form',
                template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                styles: [".form-group button:first-child{margin-bottom:1rem}"]
            }] }
];
/** @nocollapse */
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdatePasswordFormComponent.propDecorators = {
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordFormComponent.prototype.submitClicked;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.form;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.submited;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.cancelled;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvdXBkYXRlLXBhc3N3b3JkL2NvbXBvbmVudHMvdXBkYXRlLXBhc3N3b3JkLWZvcm0vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUVMLFdBQVcsRUFHWCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFNL0QsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVV0QyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVQzQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUk5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWdELENBQUM7UUFHNUUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFQyxDQUFDOzs7O0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN2QjtZQUNFLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxXQUFXLEVBQUU7Z0JBQ1gsRUFBRTtnQkFDRixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7YUFDOUQ7WUFDRCxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRCxFQUNELEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLGVBQXVCO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFlLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5QkFBeUI7UUFDdkIsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixDQUFDLElBQUksQ0FBQyxhQUFhO2dCQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTztvQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ3hDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsZUFBZ0M7UUFDcEQsSUFDRSxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUs7WUFDeEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFDL0M7WUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLCs2RkFBb0Q7O2FBRXJEOzs7O1lBWEMsV0FBVzs7O3VCQWdCVixNQUFNO3dCQUdOLE1BQU07Ozs7Ozs7SUFOUCxvREFBOEI7O0lBQzlCLDJDQUFnQjs7SUFFaEIsK0NBQzRFOztJQUU1RSxnREFDcUM7Ozs7O0lBRXpCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkID0gZmFsc2U7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb2xkUGFzc3dvcmQ6IHN0cmluZzsgbmV3UGFzc3dvcmQ6IHN0cmluZyB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgICBdLFxuICAgICAgICBuZXdQYXNzd29yZENvbmZpcm06IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIH0sXG4gICAgICB7IHZhbGlkYXRvcjogdGhpcy5tYXRjaFBhc3N3b3JkIH1cbiAgICApO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxuXG4gIGlzUGFzc3dvcmRDb25maXJtTm90VmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5oYXNFcnJvcignTm90RXF1YWwnKSAmJlxuICAgICAgKHRoaXMuc3VibWl0Q2xpY2tlZCB8fFxuICAgICAgICAodGhpcy5mb3JtLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJykudG91Y2hlZCAmJlxuICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ25ld1Bhc3N3b3JkQ29uZmlybScpLmRpcnR5KSlcbiAgICApO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXRDbGlja2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN1Ym1pdGVkLmVtaXQoe1xuICAgICAgb2xkUGFzc3dvcmQ6IHRoaXMuZm9ybS52YWx1ZS5vbGRQYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0udmFsdWUubmV3UGFzc3dvcmQsXG4gICAgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoUGFzc3dvcmQoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBpZiAoXG4gICAgICBhYnN0cmFjdENvbnRyb2wuZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlICE9PVxuICAgICAgYWJzdHJhY3RDb250cm9sLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybiB7IE5vdEVxdWFsOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=