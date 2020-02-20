import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
var CSAgentLoginFormComponent = /** @class */ (function () {
    function CSAgentLoginFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    CSAgentLoginFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    };
    CSAgentLoginFormComponent.prototype.onSubmit = function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submitEvent.emit({
            userId: this.form.controls.userId.value,
            password: this.form.controls.password.value,
        });
    };
    CSAgentLoginFormComponent.prototype.isNotValid = function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
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
            template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <label>\n    <input\n      type=\"text\"\n      [class.is-invalid]=\"isNotValid('userId')\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n      <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n    </div>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      [class.is-invalid]=\"isNotValid('password')\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n      <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n    </div>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
            styles: ["cx-csagent-login-form .invalid-feedback{display:block}cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}cx-csagent-login-form form>*{margin-bottom:12px}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}@media (min-width:575px){cx-csagent-login-form label:nth-child(2){margin:0 8px}}"]
        })
    ], CSAgentLoginFormComponent);
    return CSAgentLoginFormComponent;
}());
export { CSAgentLoginFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jc2FnZW50LWxvZ2luLWZvcm0vY3NhZ2VudC1sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBUW5FO0lBVUUsbUNBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUjNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRzlCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUc1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QyxDQUFDO0lBRWpDLENBQUM7SUFFdkMsNENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSztTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVUsR0FBVixVQUFXLGVBQXVCO1FBQ2hDLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FDOUIsSUFBSSxDQUFDLElBQUksRUFDVCxlQUFlLEVBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7O2dCQTNCdUIsV0FBVzs7SUFMbkM7UUFEQyxLQUFLLEVBQUU7MEVBQ29CO0lBRzVCO1FBREMsTUFBTSxFQUFFO2tFQUM4RDtJQVI1RCx5QkFBeUI7UUFOckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyx1bUNBQWtEO1lBRWxELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1cseUJBQXlCLENBc0NyQztJQUFELGdDQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0F0Q1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9mb3Jtcy9mb3JtLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3NhZ2VudC1sb2dpbi1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NzYWdlbnQtbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDU0FnZW50TG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjc0FnZW50VG9rZW5Mb2FkaW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHVzZXJJZDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VySWQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdENsaWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7XG4gICAgICB1c2VySWQ6IHRoaXMuZm9ybS5jb250cm9scy51c2VySWQudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5mb3JtLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxufVxuIl19