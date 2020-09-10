import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var CSAgentLoginFormComponent = /** @class */ (function () {
    function CSAgentLoginFormComponent(fb) {
        this.fb = fb;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    CSAgentLoginFormComponent.prototype.ngOnInit = function () {
        this.csAgentLoginForm = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    };
    CSAgentLoginFormComponent.prototype.onSubmit = function () {
        if (this.csAgentLoginForm.valid) {
            this.submitEvent.emit({
                userId: this.csAgentLoginForm.get('userId').value,
                password: this.csAgentLoginForm.get('password').value,
            });
        }
        else {
            this.csAgentLoginForm.markAllAsTouched();
        }
    };
    CSAgentLoginFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], CSAgentLoginFormComponent.prototype, "csAgentTokenLoading", void 0);
    __decorate([
        Output()
    ], CSAgentLoginFormComponent.prototype, "submitEvent", void 0);
    CSAgentLoginFormComponent = __decorate([
        Component({
            selector: 'cx-csagent-login-form',
            template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"csAgentLoginForm\"\n  *ngIf=\"!csAgentTokenLoading\"\n>\n  <label>\n    <input\n      type=\"text\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <cx-form-errors [control]=\"csAgentLoginForm.get('userId')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <cx-form-errors\n      [control]=\"csAgentLoginForm.get('password')\"\n    ></cx-form-errors>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}}cx-csagent-login-form form label{margin:0 0 15px;min-width:auto}@media (min-width:575px){cx-csagent-login-form form label{-webkit-margin-end:15px;margin-inline-end:15px;margin-top:0;margin-bottom:0;-webkit-margin-start:0;margin-inline-start:0;min-width:15rem}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}"]
        })
    ], CSAgentLoginFormComponent);
    return CSAgentLoginFormComponent;
}());
export { CSAgentLoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRcEU7SUFTRSxtQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFMbkMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7SUFFakMsQ0FBQztJQUV2Qyw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7YUFDdEQsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBbEJ1QixXQUFXOztJQUxuQztRQURDLEtBQUssRUFBRTswRUFDb0I7SUFHNUI7UUFEQyxNQUFNLEVBQUU7a0VBQzhEO0lBUDVELHlCQUF5QjtRQU5yQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHk1QkFBa0Q7WUFFbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyx5QkFBeUIsQ0E0QnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jc2FnZW50LWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENTQWdlbnRMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjc0FnZW50TG9naW5Gb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KClcbiAgY3NBZ2VudFRva2VuTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1c2VySWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NBZ2VudExvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgdXNlcklkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3NBZ2VudExvZ2luRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXRFdmVudC5lbWl0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNzQWdlbnRMb2dpbkZvcm0uZ2V0KCd1c2VySWQnKS52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY3NBZ2VudExvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jc0FnZW50TG9naW5Gb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==