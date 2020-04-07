import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../../../../../shared/utils/validators/custom-form-validators';
var UpdatePasswordFormComponent = /** @class */ (function () {
    function UpdatePasswordFormComponent(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    UpdatePasswordFormComponent.prototype.ngOnInit = function () {
        this.updatePasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('newPassword', 'newPasswordConfirm'),
        });
    };
    UpdatePasswordFormComponent.prototype.onSubmit = function () {
        if (this.updatePasswordForm.valid) {
            this.submitted.emit({
                oldPassword: this.updatePasswordForm.value.oldPassword,
                newPassword: this.updatePasswordForm.value.newPassword,
            });
        }
        else {
            this.updatePasswordForm.markAllAsTouched();
        }
    };
    UpdatePasswordFormComponent.prototype.onCancel = function () {
        this.cancelled.emit();
    };
    UpdatePasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "submitted", void 0);
    __decorate([
        Output()
    ], UpdatePasswordFormComponent.prototype, "cancelled", void 0);
    UpdatePasswordFormComponent = __decorate([
        Component({
            selector: 'cx-update-password-form',
            template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"updatePasswordForm\"\n  class=\"cx-update-password-component\"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('oldPassword')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('newPassword')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('newPasswordConfirm')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdatePasswordFormComponent);
    return UpdatePasswordFormComponent;
}());
export { UpdatePasswordFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBS3JHO0lBU0UscUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBTG5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0QsQ0FBQztRQUc3RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVDLENBQUM7SUFFdkMsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDckM7WUFDRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsRUFDRDtZQUNFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FDakQsYUFBYSxFQUNiLG9CQUFvQixDQUNyQjtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO2dCQUN0RCxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ3ZELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFsQ3VCLFdBQVc7O0lBTG5DO1FBREMsTUFBTSxFQUFFO2tFQUNvRTtJQUc3RTtRQURDLE1BQU0sRUFBRTtrRUFDNEI7SUFQMUIsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsOC9FQUFvRDtTQUNyRCxDQUFDO09BQ1csMkJBQTJCLENBNEN2QztJQUFELGtDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXBkYXRlUGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBvbGRQYXNzd29yZDogc3RyaW5nOyBuZXdQYXNzd29yZDogc3RyaW5nIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbGxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoXG4gICAgICB7XG4gICAgICAgIG9sZFBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdG9yXSxcbiAgICAgICAgXSxcbiAgICAgICAgbmV3UGFzc3dvcmRDb25maXJtOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0b3JzOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZHNNdXN0TWF0Y2goXG4gICAgICAgICAgJ25ld1Bhc3N3b3JkJyxcbiAgICAgICAgICAnbmV3UGFzc3dvcmRDb25maXJtJ1xuICAgICAgICApLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cGRhdGVQYXNzd29yZEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQoe1xuICAgICAgICBvbGRQYXNzd29yZDogdGhpcy51cGRhdGVQYXNzd29yZEZvcm0udmFsdWUub2xkUGFzc3dvcmQsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLnVwZGF0ZVBhc3N3b3JkRm9ybS52YWx1ZS5uZXdQYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhc3N3b3JkRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxsZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=