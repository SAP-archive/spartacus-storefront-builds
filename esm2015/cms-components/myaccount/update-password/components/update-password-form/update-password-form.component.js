/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { FormUtils } from '../../../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../../../shared/utils/validators/custom-form-validators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFFTCxXQUFXLEVBR1gsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBTXJHLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFVdEMsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFUM0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFJOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnRCxDQUFDO1FBRzVFLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRUMsQ0FBQzs7OztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDdkI7WUFDRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsRUFDRCxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQ2xDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3ZCLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU87b0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDaEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLGVBQWdDO1FBQ3BELElBQ0UsZUFBZSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLO1lBQ3hDLGVBQWUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQy9DO1lBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQywrNkZBQW9EOzthQUVyRDs7OztZQVhDLFdBQVc7Ozt1QkFnQlYsTUFBTTt3QkFHTixNQUFNOzs7Ozs7O0lBTlAsb0RBQThCOztJQUM5QiwyQ0FBZ0I7O0lBRWhCLCtDQUM0RTs7SUFFNUUsZ0RBQ3FDOzs7OztJQUV6Qix5Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkID0gZmFsc2U7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb2xkUGFzc3dvcmQ6IHN0cmluZzsgbmV3UGFzc3dvcmQ6IHN0cmluZyB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgICBdLFxuICAgICAgICBuZXdQYXNzd29yZENvbmZpcm06IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIH0sXG4gICAgICB7IHZhbGlkYXRvcjogdGhpcy5tYXRjaFBhc3N3b3JkIH1cbiAgICApO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxuXG4gIGlzUGFzc3dvcmRDb25maXJtTm90VmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5oYXNFcnJvcignTm90RXF1YWwnKSAmJlxuICAgICAgKHRoaXMuc3VibWl0Q2xpY2tlZCB8fFxuICAgICAgICAodGhpcy5mb3JtLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJykudG91Y2hlZCAmJlxuICAgICAgICAgIHRoaXMuZm9ybS5nZXQoJ25ld1Bhc3N3b3JkQ29uZmlybScpLmRpcnR5KSlcbiAgICApO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXRDbGlja2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN1Ym1pdGVkLmVtaXQoe1xuICAgICAgb2xkUGFzc3dvcmQ6IHRoaXMuZm9ybS52YWx1ZS5vbGRQYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0udmFsdWUubmV3UGFzc3dvcmQsXG4gICAgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoUGFzc3dvcmQoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBpZiAoXG4gICAgICBhYnN0cmFjdENvbnRyb2wuZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlICE9PVxuICAgICAgYWJzdHJhY3RDb250cm9sLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJykudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybiB7IE5vdEVxdWFsOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=