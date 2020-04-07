import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.consentChanged = new EventEmitter();
    }
    ConsentManagementFormComponent.prototype.ngOnInit = function () {
        if (this.consent) {
            this.consentGiven = Boolean(this.consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        else {
            if (this.consentTemplate && this.consentTemplate.currentConsent) {
                if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                    this.consentGiven = false;
                }
                else if (this.consentTemplate.currentConsent.consentGivenDate) {
                    this.consentGiven = true;
                }
            }
        }
    };
    ConsentManagementFormComponent.prototype.onConsentChange = function () {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    };
    ConsentManagementFormComponent.prototype.isRequired = function (templateId) {
        return this.requiredConsents.includes(templateId);
    };
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "consentTemplate", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "requiredConsents", void 0);
    __decorate([
        Input()
    ], ConsentManagementFormComponent.prototype, "consent", void 0);
    __decorate([
        Output()
    ], ConsentManagementFormComponent.prototype, "consentChanged", void 0);
    ConsentManagementFormComponent = __decorate([
        Component({
            selector: 'cx-consent-management-form',
            template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <span class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <br />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
        })
    ], ConsentManagementFormComponent);
    return ConsentManagementFormComponent;
}());
export { ConsentManagementFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBa0JFO1FBakJBLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQU1oQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUc3QixDQUFDO0lBRVUsQ0FBQztJQUVoQixpREFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyx3QkFBd0IsQ0FBQyxLQUFLLENBQzdELENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO2dCQUMvRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFO29CQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCx3REFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbURBQVUsR0FBVixVQUFXLFVBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBM0NEO1FBREMsS0FBSyxFQUFFOzJFQUN5QjtJQUdqQztRQURDLEtBQUssRUFBRTs0RUFDd0I7SUFHaEM7UUFEQyxLQUFLLEVBQUU7bUVBQ2tCO0lBRzFCO1FBREMsTUFBTSxFQUFFOzBFQUlKO0lBaEJNLDhCQUE4QjtRQUoxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLGdlQUF1RDtTQUN4RCxDQUFDO09BQ1csOEJBQThCLENBZ0QxQztJQUFELHFDQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc2VudEdpdmVuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG5cbiAgQElucHV0KClcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuXG4gIEBPdXRwdXQoKVxuICBjb25zZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnNlbnQpIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gQm9vbGVhbihcbiAgICAgICAgdGhpcy5jb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUgJiYgdGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuID0gIXRoaXMuY29uc2VudEdpdmVuO1xuXG4gICAgdGhpcy5jb25zZW50Q2hhbmdlZC5lbWl0KHtcbiAgICAgIGdpdmVuOiB0aGlzLmNvbnNlbnRHaXZlbixcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnNlbnRUZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZUlkKTtcbiAgfVxufVxuIl19