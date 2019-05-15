/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
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
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.isEmailConfirmNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    };
    /**
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        var newUid = this.form.value.confirmEmail;
        /** @type {?} */
        var password = this.form.value.password;
        this.saveEmail.emit({ newUid: newUid, password: password });
    };
    /**
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelEmail.emit();
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.matchEmail = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
    };
    UpdateEmailFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-email-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"off\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                    styles: [".form-group button:first-child{margin-bottom:1rem}"]
                }] }
    ];
    /** @nocollapse */
    UpdateEmailFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdateEmailFormComponent.propDecorators = {
        saveEmail: [{ type: Output }],
        cancelEmail: [{ type: Output }]
    };
    return UpdateEmailFormComponent;
}());
export { UpdateEmailFormComponent };
if (false) {
    /** @type {?} */
    UpdateEmailFormComponent.prototype.submited;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.saveEmail;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.cancelEmail;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBRUwsV0FBVyxFQUdYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVsRztJQTBCRSxrQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFwQm5DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUd4QixDQUFDO1FBR0wsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXZDLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDN0I7WUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZFLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsRUFDRCxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQy9CLENBQUM7SUFFb0MsQ0FBQzs7Ozs7SUFFdkMseURBQXNCOzs7O0lBQXRCLFVBQXVCLGVBQXVCO1FBQzVDLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDWixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU87b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTs7WUFDckMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFFekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sNkNBQVU7Ozs7O0lBQWxCLFVBQW1CLEVBQW1CO1FBQ3BDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsOHlGQUFpRDs7aUJBRWxEOzs7O2dCQVpDLFdBQVc7Ozs0QkFnQlYsTUFBTTs4QkFNTixNQUFNOztJQWlEVCwrQkFBQztDQUFBLEFBL0RELElBK0RDO1NBMURZLHdCQUF3Qjs7O0lBQ25DLDRDQUFpQjs7SUFFakIsNkNBSUs7O0lBRUwsK0NBQ3VDOztJQUV2Qyx3Q0FPRTs7Ozs7SUFFVSxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IEN1c3RvbUZvcm1WYWxpZGF0b3JzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL3ZhbGlkYXRvcnMvY3VzdG9tLWZvcm0tdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1lbWFpbC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50IHtcbiAgc3VibWl0ZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2F2ZUVtYWlsID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgbmV3VWlkOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsRW1haWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cChcbiAgICB7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgQ3VzdG9tRm9ybVZhbGlkYXRvcnMuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIGNvbmZpcm1FbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9LFxuICAgIHsgdmFsaWRhdG9yOiB0aGlzLm1hdGNoRW1haWwgfVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIGlzRW1haWxDb25maXJtTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmhhc0Vycm9yKCdOb3RFcXVhbCcpICYmXG4gICAgICAodGhpcy5zdWJtaXRlZCB8fFxuICAgICAgICAodGhpcy5mb3JtLmdldChmb3JtQ29udHJvbE5hbWUpLnRvdWNoZWQgJiZcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KGZvcm1Db250cm9sTmFtZSkuZGlydHkpKVxuICAgICk7XG4gIH1cblxuICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEZvcm1VdGlscy5pc05vdFZhbGlkRmllbGQodGhpcy5mb3JtLCBmb3JtQ29udHJvbE5hbWUsIHRoaXMuc3VibWl0ZWQpO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdVaWQgPSB0aGlzLmZvcm0udmFsdWUuY29uZmlybUVtYWlsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLnZhbHVlLnBhc3N3b3JkO1xuXG4gICAgdGhpcy5zYXZlRW1haWwuZW1pdCh7IG5ld1VpZCwgcGFzc3dvcmQgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbEVtYWlsLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hFbWFpbChhYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgaWYgKGFjLmdldCgnZW1haWwnKS52YWx1ZSAhPT0gYWMuZ2V0KCdjb25maXJtRW1haWwnKS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgTm90RXF1YWw6IHRydWUgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==