/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
export class CSAgentLoginFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submitEvent.emit({
            userId: this.form.controls.userId.value,
            password: this.form.controls.password.value,
        });
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
}
CSAgentLoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-csagent-login-form',
                template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <div class=\"fd-container\">\n    <div class=\"fd-col--3\">\n      <label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('userId')\"\n          formControlName=\"userId\"\n          placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n          <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n    <div class=\"fd-col--3\">\n      <label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n          formControlName=\"password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n    <div class=\"fd-col--3\">\n      <button type=\"submit\" class=\"fd-button--emphasized\">\n        {{ 'asm.loginForm.submit' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n\n<div class=\"sap-spinner\" *ngIf=\"csAgentTokenLoading\">\n  <div class=\"fd-loading-dots\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CSAgentLoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
CSAgentLoginFormComponent.propDecorators = {
    csAgentTokenLoading: [{ type: Input }],
    submitEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CSAgentLoginFormComponent.prototype.submitClicked;
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.csAgentTokenLoading;
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.submitEvent;
    /**
     * @type {?}
     * @private
     */
    CSAgentLoginFormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQU1uRSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBVXBDLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUjNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRzlCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUc1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QyxDQUFDO0lBRWpDLENBQUM7Ozs7SUFFdkMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGlnREFBa0Q7YUFDbkQ7Ozs7WUFOUSxXQUFXOzs7a0NBV2pCLEtBQUs7MEJBR0wsTUFBTTs7OztJQU5QLHlDQUFnQjs7Ozs7SUFDaEIsa0RBQThCOztJQUU5Qix3REFDNEI7O0lBRTVCLGdEQUN1RTs7Ozs7SUFFM0QsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3NhZ2VudC1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgc3VibWl0Q2xpY2tlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNzQWdlbnRUb2tlbkxvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdXNlcklkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHVzZXJJZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Q2xpY2tlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdWJtaXRFdmVudC5lbWl0KHtcbiAgICAgIHVzZXJJZDogdGhpcy5mb3JtLmNvbnRyb2xzLnVzZXJJZC52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmZvcm0uY29udHJvbHMucGFzc3dvcmQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEZvcm1VdGlscy5pc05vdFZhbGlkRmllbGQoXG4gICAgICB0aGlzLmZvcm0sXG4gICAgICBmb3JtQ29udHJvbE5hbWUsXG4gICAgICB0aGlzLnN1Ym1pdENsaWNrZWRcbiAgICApO1xuICB9XG59XG4iXX0=