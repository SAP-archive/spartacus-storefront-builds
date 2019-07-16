/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @param {?} title
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.titleSelected = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.form['controls'].titleCode.setValue(title.code);
    };
    UpdateProfileFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-profile-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.title' | cxTranslate\r\n        }}</span>\r\n        <ng-select\r\n          class=\"title-select\"\r\n          formControlName=\"titleCode\"\r\n          [searchable]=\"false\"\r\n          [clearable]=\"false\"\r\n          [items]=\"titles\"\r\n          bindLabel=\"name\"\r\n          bindValue=\"code\"\r\n          (change)=\"titleSelected($event)\"\r\n        >\r\n        </ng-select>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.firstName.label' | cxTranslate\r\n        }}</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"firstName\"\r\n          placeholder=\"{{\r\n            'updateProfileForm.firstName.placeholder' | cxTranslate\r\n          }}\"\r\n          formControlName=\"firstName\"\r\n          [class.is-invalid]=\"isNotValid('firstName')\"\r\n        />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\r\n          <span>{{\r\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\r\n          }}</span>\r\n        </div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.lastName.label' | cxTranslate\r\n        }}</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"lastName\"\r\n          placeholder=\"{{\r\n            'updateProfileForm.lastName.placeholder' | cxTranslate\r\n          }}\"\r\n          formControlName=\"lastName\"\r\n          [class.is-invalid]=\"isNotValid('lastName')\"\r\n        />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\r\n          <span>{{\r\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\r\n          }}</span>\r\n        </div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <button\r\n        class=\"btn btn-block btn-secondary\"\r\n        type=\"button\"\r\n        (click)=\"onCancel()\"\r\n      >\r\n        {{ 'common.cancel' | cxTranslate }}\r\n      </button>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\r\n        {{ 'common.save' | cxTranslate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvdXBkYXRlLXByb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdEU7SUF5QkUsb0NBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBYm5DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUdyRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVyQyxTQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbkIsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUssa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFFUSxDQUFDOzs7O0lBRXZDLDZDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRUQsK0NBQVU7Ozs7SUFBVixVQUFXLGVBQXVCO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFlLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFdBQVcsdUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUU7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxrREFBYTs7OztJQUFiLFVBQWMsS0FBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsMHZGQUFtRDtpQkFDcEQ7Ozs7Z0JBUFEsV0FBVzs7O3VCQVNqQixLQUFLO3lCQUdMLEtBQUs7MkJBR0wsTUFBTTs0QkFHTixNQUFNOztJQTZDVCxpQ0FBQztDQUFBLEFBM0RELElBMkRDO1NBdkRZLDBCQUEwQjs7O0lBQ3JDLDBDQUNXOztJQUVYLDRDQUNnQjs7SUFFaEIsOENBQ3FEOztJQUVyRCwrQ0FDcUM7O0lBRXJDLDBDQUlHOzs7OztJQUVILG1EQUE4Qjs7Ozs7SUFFbEIsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvZm9ybS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdXNlcjogVXNlcjtcblxuICBASW5wdXQoKVxuICB0aXRsZXM6IFRpdGxlW107XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHVzZXJVcGRhdGVzOiBVc2VyIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGNhbmNlbGxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBmb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgdGl0bGVDb2RlOiBbJyddLFxuICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUodGhpcy51c2VyKTtcbiAgICB9XG4gIH1cblxuICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEZvcm1VdGlscy5pc05vdFZhbGlkRmllbGQoXG4gICAgICB0aGlzLmZvcm0sXG4gICAgICBmb3JtQ29udHJvbE5hbWUsXG4gICAgICB0aGlzLnN1Ym1pdENsaWNrZWRcbiAgICApO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXRDbGlja2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN1Ym1pdGVkLmVtaXQoe1xuICAgICAgdXNlclVwZGF0ZXM6IHsgLi4udGhpcy5mb3JtLnZhbHVlIH0sXG4gICAgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZC5lbWl0KCk7XG4gIH1cblxuICB0aXRsZVNlbGVjdGVkKHRpdGxlOiBUaXRsZSk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVsnY29udHJvbHMnXS50aXRsZUNvZGUuc2V0VmFsdWUodGl0bGUuY29kZSk7XG4gIH1cbn1cbiJdfQ==