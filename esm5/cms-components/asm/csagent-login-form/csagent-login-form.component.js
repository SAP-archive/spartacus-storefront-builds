/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
var CSAgentLoginFormComponent = /** @class */ (function () {
    function CSAgentLoginFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CSAgentLoginFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    };
    /**
     * @return {?}
     */
    CSAgentLoginFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submitEvent.emit({
            userId: this.form.controls.userId.value,
            password: this.form.controls.password.value,
        });
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    CSAgentLoginFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    CSAgentLoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-csagent-login-form',
                    template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <div class=\"fd-container\">\n    <div class=\"fd-col--3\">\n      <label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('userId')\"\n          formControlName=\"userId\"\n          placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n          <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n    <div class=\"fd-col--3\">\n      <label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n          formControlName=\"password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n    <div class=\"fd-col--3\">\n      <button type=\"submit\" class=\"fd-button--emphasized\">\n        {{ 'asm.loginForm.submit' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n\n<div class=\"sap-spinner\" *ngIf=\"csAgentTokenLoading\">\n  <div class=\"fd-loading-dots\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CSAgentLoginFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    CSAgentLoginFormComponent.propDecorators = {
        csAgentTokenLoading: [{ type: Input }],
        submitEvent: [{ type: Output }]
    };
    return CSAgentLoginFormComponent;
}());
export { CSAgentLoginFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRTtJQWNFLG1DQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVIzQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUc5Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFHNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBd0MsQ0FBQztJQUVqQyxDQUFDOzs7O0lBRXZDLDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQVU7Ozs7SUFBVixVQUFXLGVBQXVCO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFlLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsaWdEQUFrRDtpQkFDbkQ7Ozs7Z0JBTlEsV0FBVzs7O3NDQVdqQixLQUFLOzhCQUdMLE1BQU07O0lBK0JULGdDQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F0Q1kseUJBQXlCOzs7SUFDcEMseUNBQWdCOzs7OztJQUNoQixrREFBOEI7O0lBRTlCLHdEQUM0Qjs7SUFFNUIsZ0RBQ3VFOzs7OztJQUUzRCx1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL2Zvcm0tdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jc2FnZW50LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY3NBZ2VudFRva2VuTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1c2VySWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlcklkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXRDbGlja2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoe1xuICAgICAgdXNlcklkOiB0aGlzLmZvcm0uY29udHJvbHMudXNlcklkLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZm9ybS5jb250cm9scy5wYXNzd29yZC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gRm9ybVV0aWxzLmlzTm90VmFsaWRGaWVsZChcbiAgICAgIHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sTmFtZSxcbiAgICAgIHRoaXMuc3VibWl0Q2xpY2tlZFxuICAgICk7XG4gIH1cbn1cbiJdfQ==