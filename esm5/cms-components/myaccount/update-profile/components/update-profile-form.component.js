/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/forms/form-utils';
var UpdateProfileFormComponent = /** @class */ (function () {
    function UpdateProfileFormComponent(fb) {
        this.fb = fb;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.form = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
        this.submitClicked = false;
    }
    /**
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            uid: this.user.uid,
            userUpdates: tslib_1.__assign({}, this.form.value),
        });
    };
    /**
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelled.emit();
    };
    UpdateProfileFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-profile-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n",
                    styles: [".form-group button:first-child{margin-bottom:1rem}"]
                }] }
    ];
    /** @nocollapse */
    UpdateProfileFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdateProfileFormComponent.propDecorators = {
        user: [{ type: Input }],
        titles: [{ type: Input }],
        submited: [{ type: Output }],
        cancelled: [{ type: Output }]
    };
    return UpdateProfileFormComponent;
}());
export { UpdateProfileFormComponent };
if (false) {
    /** @type {?} */
    UpdateProfileFormComponent.prototype.user;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.titles;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.submited;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.cancelled;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileFormComponent.prototype.submitClicked;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvdXBkYXRlLXByb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdEU7SUEwQkUsb0NBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBYm5DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBc0MsQ0FBQztRQUdsRSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVyQyxTQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbkIsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUssa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFFUSxDQUFDOzs7O0lBRXZDLDZDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRUQsK0NBQVU7Ozs7SUFBVixVQUFXLGVBQXVCO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFlLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDbEIsV0FBVyx1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRTtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDBpRkFBbUQ7O2lCQUVwRDs7OztnQkFSUSxXQUFXOzs7dUJBVWpCLEtBQUs7eUJBR0wsS0FBSzsyQkFHTCxNQUFNOzRCQUdOLE1BQU07O0lBMENULGlDQUFDO0NBQUEsQUF6REQsSUF5REM7U0FwRFksMEJBQTBCOzs7SUFDckMsMENBQ1c7O0lBRVgsNENBQ2dCOztJQUVoQiw4Q0FDa0U7O0lBRWxFLCtDQUNxQzs7SUFFckMsMENBSUc7Ozs7O0lBRUgsbURBQThCOzs7OztJQUVsQix3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdXBkYXRlLXByb2ZpbGUtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHVzZXI6IFVzZXI7XG5cbiAgQElucHV0KClcbiAgdGl0bGVzOiBUaXRsZVtdO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1aWQ6IHN0cmluZzsgdXNlclVwZGF0ZXM6IFVzZXIgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2FuY2VsbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh0aGlzLnVzZXIpO1xuICAgIH1cbiAgfVxuXG4gIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gRm9ybVV0aWxzLmlzTm90VmFsaWRGaWVsZChcbiAgICAgIHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sTmFtZSxcbiAgICAgIHRoaXMuc3VibWl0Q2xpY2tlZFxuICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdENsaWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0ZWQuZW1pdCh7XG4gICAgICB1aWQ6IHRoaXMudXNlci51aWQsXG4gICAgICB1c2VyVXBkYXRlczogeyAuLi50aGlzLmZvcm0udmFsdWUgfSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVkLmVtaXQoKTtcbiAgfVxufVxuIl19