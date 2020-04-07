import { __assign, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvdXBkYXRlLXByb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcHJvZmlsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pEO0lBbUJFLG9DQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVhuQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFHdEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFckMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBRW1DLENBQUM7SUFFdkMsNkNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLFdBQVcsZUFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFFO2FBQ2pELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFwQnVCLFdBQVc7O0lBakJuQztRQURDLEtBQUssRUFBRTs0REFDRztJQUdYO1FBREMsS0FBSyxFQUFFOzhEQUNRO0lBR2hCO1FBREMsTUFBTSxFQUFFO2lFQUM2QztJQUd0RDtRQURDLE1BQU0sRUFBRTtpRUFDNEI7SUFYMUIsMEJBQTBCO1FBSnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsdXhFQUFtRDtTQUNwRCxDQUFDO09BQ1csMEJBQTBCLENBd0N0QztJQUFELGlDQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wcm9maWxlLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdXNlcjogVXNlcjtcblxuICBASW5wdXQoKVxuICB0aXRsZXM6IFRpdGxlW107XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1c2VyVXBkYXRlczogVXNlciB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgdXBkYXRlUHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB0aXRsZUNvZGU6IFsnJ10sXG4gICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb2ZpbGVGb3JtLnBhdGNoVmFsdWUodGhpcy51c2VyKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cGRhdGVQcm9maWxlRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh7XG4gICAgICAgIHVzZXJVcGRhdGVzOiB7IC4uLnRoaXMudXBkYXRlUHJvZmlsZUZvcm0udmFsdWUgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb2ZpbGVGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==