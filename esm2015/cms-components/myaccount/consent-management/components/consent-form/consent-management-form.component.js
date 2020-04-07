import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
let ConsentManagementFormComponent = class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.consentChanged = new EventEmitter();
    }
    ngOnInit() {
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
    }
    onConsentChange() {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    }
    isRequired(templateId) {
        return this.requiredConsents.includes(templateId);
    }
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
export { ConsentManagementFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBa0J6QztRQWpCQSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU1yQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFNaEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFHN0IsQ0FBQztJQUVVLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssd0JBQXdCLENBQUMsS0FBSyxDQUM3RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFDL0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQzNCO3FCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7b0JBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGLENBQUE7QUE1Q0M7SUFEQyxLQUFLLEVBQUU7dUVBQ3lCO0FBR2pDO0lBREMsS0FBSyxFQUFFO3dFQUN3QjtBQUdoQztJQURDLEtBQUssRUFBRTsrREFDa0I7QUFHMUI7SUFEQyxNQUFNLEVBQUU7c0VBSUo7QUFoQk0sOEJBQThCO0lBSjFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsZ2VBQXVEO0tBQ3hELENBQUM7R0FDVyw4QkFBOEIsQ0FnRDFDO1NBaERZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnNlbnRHaXZlbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KClcbiAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcblxuICBAT3V0cHV0KClcbiAgY29uc2VudENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25zZW50KSB7XG4gICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IEJvb2xlYW4oXG4gICAgICAgIHRoaXMuY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlICYmIHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkge1xuICAgICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkge1xuICAgICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnNlbnRHaXZlbiA9ICF0aGlzLmNvbnNlbnRHaXZlbjtcblxuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogdGhpcy5jb25zZW50R2l2ZW4sXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb25zZW50VGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXModGVtcGxhdGVJZCk7XG4gIH1cbn1cbiJdfQ==