import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, } from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/forms/form-utils';
import { CustomFormValidators } from '../../../../shared/utils/validators/custom-form-validators';
var UpdateEmailFormComponent = /** @class */ (function () {
    function UpdateEmailFormComponent(fb) {
        this.fb = fb;
        this.submited = false;
        this.saveEmail = new EventEmitter();
        this.cancelEmail = new EventEmitter();
        this.form = this.fb.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            confirmEmail: ['', [Validators.required]],
            password: ['', [Validators.required]],
        }, { validator: this.matchEmail });
    }
    UpdateEmailFormComponent.prototype.isEmailConfirmNotValid = function (formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    };
    UpdateEmailFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    };
    UpdateEmailFormComponent.prototype.onSubmit = function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        var newUid = this.form.value.confirmEmail;
        var password = this.form.value.password;
        this.saveEmail.emit({ newUid: newUid, password: password });
    };
    UpdateEmailFormComponent.prototype.onCancel = function () {
        this.cancelEmail.emit();
    };
    UpdateEmailFormComponent.prototype.matchEmail = function (ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
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
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdateEmailFormComponent);
    return UpdateEmailFormComponent;
}());
export { UpdateEmailFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU1sRztJQXFCRSxrQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFwQm5DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUd4QixDQUFDO1FBR0wsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXZDLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDN0I7WUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZFLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsRUFDRCxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQy9CLENBQUM7SUFFb0MsQ0FBQztJQUV2Qyx5REFBc0IsR0FBdEIsVUFBdUIsZUFBdUI7UUFDNUMsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM5QixDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUNaLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTztvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFFRCw2Q0FBVSxHQUFWLFVBQVcsZUFBdUI7UUFDaEMsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLDZDQUFVLEdBQWxCLFVBQW1CLEVBQW1CO1FBQ3BDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQXBDdUIsV0FBVzs7SUFqQm5DO1FBREMsTUFBTSxFQUFFOytEQUlKO0lBR0w7UUFEQyxNQUFNLEVBQUU7aUVBQzhCO0lBVjVCLHdCQUF3QjtRQUpwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLHV6RkFBaUQ7U0FDbEQsQ0FBQztPQUNXLHdCQUF3QixDQTBEcEM7SUFBRCwrQkFBQztDQUFBLEFBMURELElBMERDO1NBMURZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Hcm91cCxcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgQ3VzdG9tRm9ybVZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvdmFsaWRhdG9ycy9jdXN0b20tZm9ybS12YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLWVtYWlsLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbEZvcm1Db21wb25lbnQge1xuICBzdWJtaXRlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBzYXZlRW1haWwgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBuZXdVaWQ6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxFbWFpbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKFxuICAgIHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgY29uZmlybUVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0sXG4gICAgeyB2YWxpZGF0b3I6IHRoaXMubWF0Y2hFbWFpbCB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgaXNFbWFpbENvbmZpcm1Ob3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uaGFzRXJyb3IoJ05vdEVxdWFsJykgJiZcbiAgICAgICh0aGlzLnN1Ym1pdGVkIHx8XG4gICAgICAgICh0aGlzLmZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSkudG91Y2hlZCAmJlxuICAgICAgICAgIHRoaXMuZm9ybS5nZXQoZm9ybUNvbnRyb2xOYW1lKS5kaXJ0eSkpXG4gICAgKTtcbiAgfVxuXG4gIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gRm9ybVV0aWxzLmlzTm90VmFsaWRGaWVsZCh0aGlzLmZvcm0sIGZvcm1Db250cm9sTmFtZSwgdGhpcy5zdWJtaXRlZCk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1VpZCA9IHRoaXMuZm9ybS52YWx1ZS5jb25maXJtRW1haWw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZvcm0udmFsdWUucGFzc3dvcmQ7XG5cbiAgICB0aGlzLnNhdmVFbWFpbC5lbWl0KHsgbmV3VWlkLCBwYXNzd29yZCB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsRW1haWwuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaEVtYWlsKGFjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBpZiAoYWMuZ2V0KCdlbWFpbCcpLnZhbHVlICE9PSBhYy5nZXQoJ2NvbmZpcm1FbWFpbCcpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBOb3RFcXVhbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuIl19