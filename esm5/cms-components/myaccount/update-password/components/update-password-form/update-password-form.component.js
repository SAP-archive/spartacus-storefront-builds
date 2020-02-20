import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, } from '@angular/forms';
import { FormUtils } from '../../../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../../../shared/utils/validators/custom-form-validators';
var UpdatePasswordFormComponent = /** @class */ (function () {
    function UpdatePasswordFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    UpdatePasswordFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    };
    UpdatePasswordFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    UpdatePasswordFormComponent.prototype.isPasswordConfirmNotValid = function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    };
    UpdatePasswordFormComponent.prototype.onSubmit = function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    };
    UpdatePasswordFormComponent.prototype.onCancel = function () {
        this.cancelled.emit();
    };
    UpdatePasswordFormComponent.prototype.matchPassword = function (abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    };
    UpdatePasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "submited", void 0);
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "cancelled", void 0);
    UpdatePasswordFormComponent = __decorate([
        Component({
            selector: 'cx-update-password-form',
            template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdatePasswordFormComponent);
    return UpdatePasswordFormComponent;
}());
export { UpdatePasswordFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBS3JHO0lBVUUscUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBVDNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSTlCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0QsQ0FBQztRQUc1RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVDLENBQUM7SUFFdkMsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQ3ZCO1lBQ0UsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLFdBQVcsRUFBRTtnQkFDWCxFQUFFO2dCQUNGLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5RDtZQUNELGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hELEVBQ0QsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdEQUFVLEdBQVYsVUFBVyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsK0RBQXlCLEdBQXpCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixDQUFDLElBQUksQ0FBQyxhQUFhO2dCQUNqQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTztvQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ3hDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sbURBQWEsR0FBckIsVUFBc0IsZUFBZ0M7UUFDcEQsSUFDRSxlQUFlLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUs7WUFDeEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFDL0M7WUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkF6RHVCLFdBQVc7O0lBTG5DO1FBREMsTUFBTSxFQUFFO2lFQUNtRTtJQUc1RTtRQURDLE1BQU0sRUFBRTtrRUFDNEI7SUFSMUIsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsKzZGQUFvRDtTQUNyRCxDQUFDO09BQ1csMkJBQTJCLENBb0V2QztJQUFELGtDQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtcGFzc3dvcmQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc3VibWl0Q2xpY2tlZCA9IGZhbHNlO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9sZFBhc3N3b3JkOiBzdHJpbmc7IG5ld1Bhc3N3b3JkOiBzdHJpbmcgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoXG4gICAgICB7XG4gICAgICAgIG9sZFBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgICAgXSxcbiAgICAgICAgbmV3UGFzc3dvcmRDb25maXJtOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB9LFxuICAgICAgeyB2YWxpZGF0b3I6IHRoaXMubWF0Y2hQYXNzd29yZCB9XG4gICAgKTtcbiAgfVxuXG4gIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gRm9ybVV0aWxzLmlzTm90VmFsaWRGaWVsZChcbiAgICAgIHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sTmFtZSxcbiAgICAgIHRoaXMuc3VibWl0Q2xpY2tlZFxuICAgICk7XG4gIH1cblxuICBpc1Bhc3N3b3JkQ29uZmlybU5vdFZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uaGFzRXJyb3IoJ05vdEVxdWFsJykgJiZcbiAgICAgICh0aGlzLnN1Ym1pdENsaWNrZWQgfHxcbiAgICAgICAgKHRoaXMuZm9ybS5nZXQoJ25ld1Bhc3N3b3JkQ29uZmlybScpLnRvdWNoZWQgJiZcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZENvbmZpcm0nKS5kaXJ0eSkpXG4gICAgKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Q2xpY2tlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdWJtaXRlZC5lbWl0KHtcbiAgICAgIG9sZFBhc3N3b3JkOiB0aGlzLmZvcm0udmFsdWUub2xkUGFzc3dvcmQsXG4gICAgICBuZXdQYXNzd29yZDogdGhpcy5mb3JtLnZhbHVlLm5ld1Bhc3N3b3JkLFxuICAgIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxsZWQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaFBhc3N3b3JkKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgaWYgKFxuICAgICAgYWJzdHJhY3RDb250cm9sLmdldCgnbmV3UGFzc3dvcmQnKS52YWx1ZSAhPT1cbiAgICAgIGFic3RyYWN0Q29udHJvbC5nZXQoJ25ld1Bhc3N3b3JkQ29uZmlybScpLnZhbHVlXG4gICAgKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19