import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class CSAgentLoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    ngOnInit() {
        this.csAgentLoginForm = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    onSubmit() {
        if (this.csAgentLoginForm.valid) {
            this.submitEvent.emit({
                userId: this.csAgentLoginForm.get('userId').value,
                password: this.csAgentLoginForm.get('password').value,
            });
        }
        else {
            this.csAgentLoginForm.markAllAsTouched();
        }
    }
}
CSAgentLoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-csagent-login-form',
                template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"csAgentLoginForm\"\n  *ngIf=\"!csAgentTokenLoading\"\n>\n  <label>\n    <input\n      type=\"text\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <cx-form-errors [control]=\"csAgentLoginForm.get('userId')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <cx-form-errors\n      [control]=\"csAgentLoginForm.get('password')\"\n    ></cx-form-errors>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}}cx-csagent-login-form form label{margin:0 0 15px;min-width:auto}@media (min-width:575px){cx-csagent-login-form form label{-webkit-margin-end:15px;-webkit-margin-start:0;margin-bottom:0;margin-inline-end:15px;margin-inline-start:0;margin-top:0;min-width:15rem}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{background-color:#0a6ed1;border-color:#0a6ed1;color:#fff}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}"]
            },] }
];
CSAgentLoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
CSAgentLoginFormComponent.propDecorators = {
    csAgentTokenLoading: [{ type: Input }],
    submitEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXBFLE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFMbkMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7SUFFakMsQ0FBQztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7YUFDdEQsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx5NUJBQWtEO2dCQUVsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQVBRLFdBQVc7OztrQ0FXakIsS0FBSzswQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3NhZ2VudC1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3NBZ2VudExvZ2luRm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIGNzQWdlbnRUb2tlbkxvYWRpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdXNlcklkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNzQWdlbnRMb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHVzZXJJZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNzQWdlbnRMb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jc0FnZW50TG9naW5Gb3JtLmdldCgndXNlcklkJykudmFsdWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLmNzQWdlbnRMb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3NBZ2VudExvZ2luRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG59XG4iXX0=