import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../../../../../shared/utils/validators/custom-form-validators';
let UpdatePasswordFormComponent = class UpdatePasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    ngOnInit() {
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
    }
    onSubmit() {
        if (this.updatePasswordForm.valid) {
            this.submitted.emit({
                oldPassword: this.updatePasswordForm.value.oldPassword,
                newPassword: this.updatePasswordForm.value.newPassword,
            });
        }
        else {
            this.updatePasswordForm.markAllAsTouched();
        }
    }
    onCancel() {
        this.cancelled.emit();
    }
};
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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
export { UpdatePasswordFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1wYXNzd29yZC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC1mb3JtL3VwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBS3JHLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBU3RDLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBTG5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0QsQ0FBQztRQUc3RSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVDLENBQUM7SUFFdkMsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDckM7WUFDRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQsRUFDRDtZQUNFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FDakQsYUFBYSxFQUNiLG9CQUFvQixDQUNyQjtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO2dCQUN0RCxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ3ZELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTs7WUFuQ3lCLFdBQVc7O0FBTG5DO0lBREMsTUFBTSxFQUFFOzhEQUNvRTtBQUc3RTtJQURDLE1BQU0sRUFBRTs4REFDNEI7QUFQMUIsMkJBQTJCO0lBSnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsOC9FQUFvRDtLQUNyRCxDQUFDO0dBQ1csMkJBQTJCLENBNEN2QztTQTVDWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLXBhc3N3b3JkLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1cGRhdGVQYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9sZFBhc3N3b3JkOiBzdHJpbmc7IG5ld1Bhc3N3b3JkOiBzdHJpbmcgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlUGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRWYWxpZGF0b3JdLFxuICAgICAgICBdLFxuICAgICAgICBuZXdQYXNzd29yZENvbmZpcm06IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkYXRvcnM6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLnBhc3N3b3Jkc011c3RNYXRjaChcbiAgICAgICAgICAnbmV3UGFzc3dvcmQnLFxuICAgICAgICAgICduZXdQYXNzd29yZENvbmZpcm0nXG4gICAgICAgICksXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVwZGF0ZVBhc3N3b3JkRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh7XG4gICAgICAgIG9sZFBhc3N3b3JkOiB0aGlzLnVwZGF0ZVBhc3N3b3JkRm9ybS52YWx1ZS5vbGRQYXNzd29yZCxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMudXBkYXRlUGFzc3dvcmRGb3JtLnZhbHVlLm5ld1Bhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlUGFzc3dvcmRGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==