import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
let CSAgentLoginFormComponent = class CSAgentLoginFormComponent {
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
};
CSAgentLoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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
export { CSAgentLoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRcEUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFTcEMsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFMbkMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXdDLENBQUM7SUFFakMsQ0FBQztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7YUFDdEQsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkJ5QixXQUFXOztBQUxuQztJQURDLEtBQUssRUFBRTtzRUFDb0I7QUFHNUI7SUFEQyxNQUFNLEVBQUU7OERBQzhEO0FBUDVELHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLHk1QkFBa0Q7UUFFbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyx5QkFBeUIsQ0E0QnJDO1NBNUJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNzYWdlbnQtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jc2FnZW50LWxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ1NBZ2VudExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNzQWdlbnRMb2dpbkZvcm06IEZvcm1Hcm91cDtcblxuICBASW5wdXQoKVxuICBjc0FnZW50VG9rZW5Mb2FkaW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHVzZXJJZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc0FnZW50TG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jc0FnZW50TG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY3NBZ2VudExvZ2luRm9ybS5nZXQoJ3VzZXJJZCcpLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5jc0FnZW50TG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNzQWdlbnRMb2dpbkZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxufVxuIl19