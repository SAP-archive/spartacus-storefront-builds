/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../../shared/utils/forms/form-utils';
export class UpdateProfileFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            userUpdates: Object.assign({}, this.form.value),
        });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.form['controls'].titleCode.setValue(title.code);
    }
}
UpdateProfileFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.title' | cxTranslate\r\n        }}</span>\r\n        <ng-select\r\n          class=\"title-select\"\r\n          formControlName=\"titleCode\"\r\n          [searchable]=\"false\"\r\n          [clearable]=\"false\"\r\n          [items]=\"titles\"\r\n          bindLabel=\"name\"\r\n          bindValue=\"code\"\r\n          (change)=\"titleSelected($event)\"\r\n        >\r\n        </ng-select>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.firstName.label' | cxTranslate\r\n        }}</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"firstName\"\r\n          placeholder=\"{{\r\n            'updateProfileForm.firstName.placeholder' | cxTranslate\r\n          }}\"\r\n          formControlName=\"firstName\"\r\n          [class.is-invalid]=\"isNotValid('firstName')\"\r\n        />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\r\n          <span>{{\r\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\r\n          }}</span>\r\n        </div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-12\">\r\n      <label>\r\n        <span class=\"label-content\">{{\r\n          'updateProfileForm.lastName.label' | cxTranslate\r\n        }}</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          name=\"lastName\"\r\n          placeholder=\"{{\r\n            'updateProfileForm.lastName.placeholder' | cxTranslate\r\n          }}\"\r\n          formControlName=\"lastName\"\r\n          [class.is-invalid]=\"isNotValid('lastName')\"\r\n        />\r\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\r\n          <span>{{\r\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\r\n          }}</span>\r\n        </div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <button\r\n        class=\"btn btn-block btn-secondary\"\r\n        type=\"button\"\r\n        (click)=\"onCancel()\"\r\n      >\r\n        {{ 'common.cancel' | cxTranslate }}\r\n      </button>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\r\n        {{ 'common.save' | cxTranslate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"
            }] }
];
/** @nocollapse */
UpdateProfileFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdateProfileFormComponent.propDecorators = {
    user: [{ type: Input }],
    titles: [{ type: Input }],
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvdXBkYXRlLXByb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU10RSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBcUJyQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWJuQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFHckQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFckMsU0FBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVLLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRVEsQ0FBQzs7OztJQUV2QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsZUFBdUI7UUFDaEMsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUM5QixJQUFJLENBQUMsSUFBSSxFQUNULGVBQWUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFdBQVcsb0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUU7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDB2RkFBbUQ7YUFDcEQ7Ozs7WUFQUSxXQUFXOzs7bUJBU2pCLEtBQUs7cUJBR0wsS0FBSzt1QkFHTCxNQUFNO3dCQUdOLE1BQU07Ozs7SUFUUCwwQ0FDVzs7SUFFWCw0Q0FDZ0I7O0lBRWhCLDhDQUNxRDs7SUFFckQsK0NBQ3FDOztJQUVyQywwQ0FJRzs7Ozs7SUFFSCxtREFBOEI7Ozs7O0lBRWxCLHdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL2Zvcm0tdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC11cGRhdGUtcHJvZmlsZS1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwZGF0ZS1wcm9maWxlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9maWxlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHVzZXI6IFVzZXI7XG5cbiAgQElucHV0KClcbiAgdGl0bGVzOiBUaXRsZVtdO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1c2VyVXBkYXRlczogVXNlciB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIHByaXZhdGUgc3VibWl0Q2xpY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHRoaXMudXNlcik7XG4gICAgfVxuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Q2xpY2tlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdWJtaXRlZC5lbWl0KHtcbiAgICAgIHVzZXJVcGRhdGVzOiB7IC4uLnRoaXMuZm9ybS52YWx1ZSB9LFxuICAgIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxsZWQuZW1pdCgpO1xuICB9XG5cbiAgdGl0bGVTZWxlY3RlZCh0aXRsZTogVGl0bGUpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1bJ2NvbnRyb2xzJ10udGl0bGVDb2RlLnNldFZhbHVlKHRpdGxlLmNvZGUpO1xuICB9XG59XG4iXX0=