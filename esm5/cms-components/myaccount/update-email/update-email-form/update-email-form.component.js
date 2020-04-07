import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '../../../../shared/utils/validators/custom-form-validators';
var UpdateEmailFormComponent = /** @class */ (function () {
    function UpdateEmailFormComponent(fb) {
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
    UpdateEmailFormComponent.prototype.onSubmit = function () {
        if (this.updateEmailForm.valid) {
            var newUid = this.updateEmailForm.get('confirmEmail').value;
            var password = this.updateEmailForm.get('password').value;
            this.saveEmail.emit({ newUid: newUid, password: password });
        }
        else {
            this.updateEmailForm.markAllAsTouched();
        }
    };
    UpdateEmailFormComponent.prototype.onCancel = function () {
        this.cancelEmail.emit();
    };
    UpdateEmailFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return UpdateEmailFormComponent;
}());
export { UpdateEmailFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU1sRztJQXFCRSxrQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFuQm5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFHeEIsQ0FBQztRQUdMLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV2QyxvQkFBZSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN4QztZQUNFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxFQUNEO1lBQ0UsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1NBQzFFLENBQ0YsQ0FBQztJQUVvQyxDQUFDO0lBRXZDLDJDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkFmdUIsV0FBVzs7SUFuQm5DO1FBREMsTUFBTSxFQUFFOytEQUlKO0lBR0w7UUFEQyxNQUFNLEVBQUU7aUVBQzhCO0lBUjVCLHdCQUF3QjtRQUpwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLHM2RUFBaUQ7U0FDbEQsQ0FBQztPQUNXLHdCQUF3QixDQXFDcEM7SUFBRCwrQkFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtZW1haWwtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKVxuICBzYXZlRW1haWwgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBuZXdVaWQ6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxFbWFpbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICB1cGRhdGVFbWFpbEZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBjb25maXJtRW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3JzOiBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbHNNdXN0TWF0Y2goJ2VtYWlsJywgJ2NvbmZpcm1FbWFpbCcpLFxuICAgIH1cbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cGRhdGVFbWFpbEZvcm0udmFsaWQpIHtcbiAgICAgIGNvbnN0IG5ld1VpZCA9IHRoaXMudXBkYXRlRW1haWxGb3JtLmdldCgnY29uZmlybUVtYWlsJykudmFsdWU7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMudXBkYXRlRW1haWxGb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcblxuICAgICAgdGhpcy5zYXZlRW1haWwuZW1pdCh7IG5ld1VpZCwgcGFzc3dvcmQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlRW1haWxGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbEVtYWlsLmVtaXQoKTtcbiAgfVxufVxuIl19