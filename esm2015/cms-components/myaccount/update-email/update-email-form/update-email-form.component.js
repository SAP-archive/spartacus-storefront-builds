import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../../../../shared/utils/validators/custom-form-validators';
let UpdateEmailFormComponent = class UpdateEmailFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.saveEmail = new EventEmitter();
        this.cancelEmail = new EventEmitter();
        this.updateEmailForm = this.fb.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            confirmEmail: ['', [Validators.required]],
            password: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.emailsMustMatch('email', 'confirmEmail'),
        });
    }
    onSubmit() {
        if (this.updateEmailForm.valid) {
            const newUid = this.updateEmailForm.get('confirmEmail').value;
            const password = this.updateEmailForm.get('password').value;
            this.saveEmail.emit({ newUid, password });
        }
        else {
            this.updateEmailForm.markAllAsTouched();
        }
    }
    onCancel() {
        this.cancelEmail.emit();
    }
};
UpdateEmailFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Output()
], UpdateEmailFormComponent.prototype, "saveEmail", void 0);
__decorate([
    Output()
], UpdateEmailFormComponent.prototype, "cancelEmail", void 0);
UpdateEmailFormComponent = __decorate([
    Component({
        selector: 'cx-update-email-form',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"updateEmailForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('email')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('confirmEmail')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          autocomplete=\"new-password\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('password')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
    })
], UpdateEmailFormComponent);
export { UpdateEmailFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU1sRyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQXFCbkMsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFuQm5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFHeEIsQ0FBQztRQUdMLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV2QyxvQkFBZSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN4QztZQUNFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxFQUNEO1lBQ0UsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1NBQzFFLENBQ0YsQ0FBQztJQUVvQyxDQUFDO0lBRXZDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQWhCeUIsV0FBVzs7QUFuQm5DO0lBREMsTUFBTSxFQUFFOzJEQUlKO0FBR0w7SUFEQyxNQUFNLEVBQUU7NkRBQzhCO0FBUjVCLHdCQUF3QjtJQUpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLHM2RUFBaUQ7S0FDbEQsQ0FBQztHQUNXLHdCQUF3QixDQXFDcEM7U0FyQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1lbWFpbC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpXG4gIHNhdmVFbWFpbCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG5ld1VpZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbEVtYWlsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHVwZGF0ZUVtYWlsRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIGNvbmZpcm1FbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcnM6IEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsc011c3RNYXRjaCgnZW1haWwnLCAnY29uZmlybUVtYWlsJyksXG4gICAgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVwZGF0ZUVtYWlsRm9ybS52YWxpZCkge1xuICAgICAgY29uc3QgbmV3VWlkID0gdGhpcy51cGRhdGVFbWFpbEZvcm0uZ2V0KCdjb25maXJtRW1haWwnKS52YWx1ZTtcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy51cGRhdGVFbWFpbEZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlO1xuXG4gICAgICB0aGlzLnNhdmVFbWFpbC5lbWl0KHsgbmV3VWlkLCBwYXNzd29yZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVFbWFpbEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsRW1haWwuZW1pdCgpO1xuICB9XG59XG4iXX0=