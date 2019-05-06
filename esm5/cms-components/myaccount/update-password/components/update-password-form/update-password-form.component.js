/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { FormUtils } from '../../../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../../../shared/utils/validators/custom-form-validators';
var UpdatePasswordFormComponent = /** @class */ (function () {
    function UpdatePasswordFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.isPasswordConfirmNotValid = /**
     * @return {?}
     */
    function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelled.emit();
    };
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.matchPassword = /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    function (abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    };
    UpdatePasswordFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-password-form',
                    template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                    styles: [".form-group button:first-child{margin-bottom:1rem}"]
                }] }
    ];
    /** @nocollapse */
    UpdatePasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdatePasswordFormComponent.propDecorators = {
        submited: [{ type: Output }],
        cancelled: [{ type: Output }]
    };
    return UpdatePasswordFormComponent;
}());
export { UpdatePasswordFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFFTCxXQUFXLEVBR1gsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3JHO0lBZUUscUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBVDNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0QsQ0FBQztRQUc1RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVDLENBQUM7Ozs7SUFFdkMsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDdkI7WUFDRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsRUFDRCxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQ2xDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGdEQUFVOzs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsK0RBQXlCOzs7SUFBekI7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzlCLENBQUMsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPO29CQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2hELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFTyxtREFBYTs7Ozs7SUFBckIsVUFBc0IsZUFBZ0M7UUFDcEQsSUFDRSxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUs7WUFDeEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFDL0M7WUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkF4RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLCs2RkFBb0Q7O2lCQUVyRDs7OztnQkFYQyxXQUFXOzs7MkJBZ0JWLE1BQU07NEJBR04sTUFBTTs7SUE2RFQsa0NBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXBFWSwyQkFBMkI7Ozs7OztJQUN0QyxvREFBOEI7O0lBQzlCLDJDQUFnQjs7SUFFaEIsK0NBQzRFOztJQUU1RSxnREFDcUM7Ozs7O0lBRXpCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLXBhc3N3b3JkLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGRhdGUtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBvbGRQYXNzd29yZDogc3RyaW5nOyBuZXdQYXNzd29yZDogc3RyaW5nIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbGxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxuICAgICAge1xuICAgICAgICBvbGRQYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBuZXdQYXNzd29yZDogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICAgIF0sXG4gICAgICAgIG5ld1Bhc3N3b3JkQ29uZmlybTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgfSxcbiAgICAgIHsgdmFsaWRhdG9yOiB0aGlzLm1hdGNoUGFzc3dvcmQgfVxuICAgICk7XG4gIH1cblxuICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEZvcm1VdGlscy5pc05vdFZhbGlkRmllbGQoXG4gICAgICB0aGlzLmZvcm0sXG4gICAgICBmb3JtQ29udHJvbE5hbWUsXG4gICAgICB0aGlzLnN1Ym1pdENsaWNrZWRcbiAgICApO1xuICB9XG5cbiAgaXNQYXNzd29yZENvbmZpcm1Ob3RWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmhhc0Vycm9yKCdOb3RFcXVhbCcpICYmXG4gICAgICAodGhpcy5zdWJtaXRDbGlja2VkIHx8XG4gICAgICAgICh0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZENvbmZpcm0nKS50b3VjaGVkICYmXG4gICAgICAgICAgdGhpcy5mb3JtLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJykuZGlydHkpKVxuICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdENsaWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0ZWQuZW1pdCh7XG4gICAgICBvbGRQYXNzd29yZDogdGhpcy5mb3JtLnZhbHVlLm9sZFBhc3N3b3JkLFxuICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMuZm9ybS52YWx1ZS5uZXdQYXNzd29yZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVkLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hQYXNzd29yZChhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGlmIChcbiAgICAgIGFic3RyYWN0Q29udHJvbC5nZXQoJ25ld1Bhc3N3b3JkJykudmFsdWUgIT09XG4gICAgICBhYnN0cmFjdENvbnRyb2wuZ2V0KCduZXdQYXNzd29yZENvbmZpcm0nKS52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuIHsgTm90RXF1YWw6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==