import { __assign, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var UpdateProfileFormComponent = /** @class */ (function () {
    function UpdateProfileFormComponent(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.updateProfileForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
    }
    UpdateProfileFormComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.updateProfileForm.patchValue(this.user);
        }
    };
    UpdateProfileFormComponent.prototype.onSubmit = function () {
        if (this.updateProfileForm.valid) {
            this.submitted.emit({
                userUpdates: __assign({}, this.updateProfileForm.value),
            });
        }
        else {
            this.updateProfileForm.markAllAsTouched();
        }
    };
    UpdateProfileFormComponent.prototype.onCancel = function () {
        this.cancelled.emit();
    };
    UpdateProfileFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input()
    ], UpdateProfileFormComponent.prototype, "user", void 0);
    __decorate([
        Input()
    ], UpdateProfileFormComponent.prototype, "titles", void 0);
    __decorate([
        Output()
    ], UpdateProfileFormComponent.prototype, "submitted", void 0);
    __decorate([
        Output()
    ], UpdateProfileFormComponent.prototype, "cancelled", void 0);
    UpdateProfileFormComponent = __decorate([
        Component({
            selector: 'cx-update-profile-form',
            template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"updateProfileForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n        />\n        <cx-form-errors\n          [control]=\"updateProfileForm.get('firstName')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n        />\n        <cx-form-errors\n          [control]=\"updateProfileForm.get('lastName')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
        })
    ], UpdateProfileFormComponent);
    return UpdateProfileFormComponent;
}());
export { UpdateProfileFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvdXBkYXRlLXByb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9wRTtJQW1CRSxvQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFYbkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBR3RELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXJDLHNCQUFpQixHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUVtQyxDQUFDO0lBRXZDLDZDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixXQUFXLGVBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBRTthQUNqRCxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBcEJ1QixXQUFXOztJQWpCbkM7UUFEQyxLQUFLLEVBQUU7NERBQ0c7SUFHWDtRQURDLEtBQUssRUFBRTs4REFDUTtJQUdoQjtRQURDLE1BQU0sRUFBRTtpRUFDNkM7SUFHdEQ7UUFEQyxNQUFNLEVBQUU7aUVBQzRCO0lBWDFCLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLHV4RUFBbUQ7U0FDcEQsQ0FBQztPQUNXLDBCQUEwQixDQXdDdEM7SUFBRCxpQ0FBQztDQUFBLEFBeENELElBd0NDO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdXNlcjogVXNlcjtcblxuICBASW5wdXQoKVxuICB0aXRsZXM6IFRpdGxlW107XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1c2VyVXBkYXRlczogVXNlciB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgdXBkYXRlUHJvZmlsZUZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIHRpdGxlQ29kZTogWycnXSxcbiAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvZmlsZUZvcm0ucGF0Y2hWYWx1ZSh0aGlzLnVzZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVwZGF0ZVByb2ZpbGVGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHtcbiAgICAgICAgdXNlclVwZGF0ZXM6IHsgLi4udGhpcy51cGRhdGVQcm9maWxlRm9ybS52YWx1ZSB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvZmlsZUZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVkLmVtaXQoKTtcbiAgfVxufVxuIl19