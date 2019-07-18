/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBRUwsV0FBVyxFQUdYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVsRztJQXlCRSxrQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFwQm5DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUd4QixDQUFDO1FBR0wsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXZDLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDN0I7WUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZFLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsRUFDRCxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQy9CLENBQUM7SUFFb0MsQ0FBQzs7Ozs7SUFFdkMseURBQXNCOzs7O0lBQXRCLFVBQXVCLGVBQXVCO1FBQzVDLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDWixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU87b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDZDQUFVOzs7O0lBQVYsVUFBVyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjs7WUFFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTs7WUFDckMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFFekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sNkNBQVU7Ozs7O0lBQWxCLFVBQW1CLEVBQW1CO1FBQ3BDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsdXpGQUFpRDtpQkFDbEQ7Ozs7Z0JBWEMsV0FBVzs7OzRCQWVWLE1BQU07OEJBTU4sTUFBTTs7SUFpRFQsK0JBQUM7Q0FBQSxBQTlERCxJQThEQztTQTFEWSx3QkFBd0I7OztJQUNuQyw0Q0FBaUI7O0lBRWpCLDZDQUlLOztJQUVMLCtDQUN1Qzs7SUFFdkMsd0NBT0U7Ozs7O0lBRVUsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUdyb3VwLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy92YWxpZGF0b3JzL2N1c3RvbS1mb3JtLXZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtZW1haWwtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCB7XG4gIHN1Ym1pdGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHNhdmVFbWFpbCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG5ld1VpZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbEVtYWlsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEN1c3RvbUZvcm1WYWxpZGF0b3JzLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICBjb25maXJtRW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSxcbiAgICB7IHZhbGlkYXRvcjogdGhpcy5tYXRjaEVtYWlsIH1cbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBpc0VtYWlsQ29uZmlybU5vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5oYXNFcnJvcignTm90RXF1YWwnKSAmJlxuICAgICAgKHRoaXMuc3VibWl0ZWQgfHxcbiAgICAgICAgKHRoaXMuZm9ybS5nZXQoZm9ybUNvbnRyb2xOYW1lKS50b3VjaGVkICYmXG4gICAgICAgICAgdGhpcy5mb3JtLmdldChmb3JtQ29udHJvbE5hbWUpLmRpcnR5KSlcbiAgICApO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKHRoaXMuZm9ybSwgZm9ybUNvbnRyb2xOYW1lLCB0aGlzLnN1Ym1pdGVkKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VWlkID0gdGhpcy5mb3JtLnZhbHVlLmNvbmZpcm1FbWFpbDtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZm9ybS52YWx1ZS5wYXNzd29yZDtcblxuICAgIHRoaXMuc2F2ZUVtYWlsLmVtaXQoeyBuZXdVaWQsIHBhc3N3b3JkIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxFbWFpbC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoRW1haWwoYWM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGlmIChhYy5nZXQoJ2VtYWlsJykudmFsdWUgIT09IGFjLmdldCgnY29uZmlybUVtYWlsJykudmFsdWUpIHtcbiAgICAgIHJldHVybiB7IE5vdEVxdWFsOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG4iXX0=