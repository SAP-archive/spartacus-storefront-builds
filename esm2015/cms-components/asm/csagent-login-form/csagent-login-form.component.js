/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
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
                template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <label>\n    <input\n      type=\"text\"\n      [class.is-invalid]=\"isNotValid('userId')\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n      <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n    </div>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      [class.is-invalid]=\"isNotValid('password')\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n      <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n    </div>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}cx-csagent-login-form form>*{margin-bottom:12px}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}@media (min-width:575px){cx-csagent-login-form label:nth-child(2){margin:0 8px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFRbkUsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQVVwQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVIzQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUc5Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFHNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBd0MsQ0FBQztJQUVqQyxDQUFDOzs7O0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsZUFBdUI7UUFDaEMsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUM5QixJQUFJLENBQUMsSUFBSSxFQUNULGVBQWUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx1bUNBQWtEO2dCQUVsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFSUSxXQUFXOzs7a0NBYWpCLEtBQUs7MEJBR0wsTUFBTTs7OztJQU5QLHlDQUFnQjs7Ozs7SUFDaEIsa0RBQThCOztJQUU5Qix3REFDNEI7O0lBRTVCLGdEQUN1RTs7Ozs7SUFFM0QsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3NhZ2VudC1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjc0FnZW50VG9rZW5Mb2FkaW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHVzZXJJZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdENsaWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7XG4gICAgICB1c2VySWQ6IHRoaXMuZm9ybS5jb250cm9scy51c2VySWQudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5mb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxufVxuIl19