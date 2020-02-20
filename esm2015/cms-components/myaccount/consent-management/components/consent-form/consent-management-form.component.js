import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
let ConsentManagementFormComponent = class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    ngOnInit() {
        if (this.isAnonymousConsentsEnabled && this.consent) {
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
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
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
], ConsentManagementFormComponent.prototype, "isAnonymousConsentsEnabled", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "consent", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "isLevel13", void 0);
__decorate([
    Output()
], ConsentManagementFormComponent.prototype, "consentChanged", void 0);
ConsentManagementFormComponent = __decorate([
    Component({
        selector: 'cx-consent-management-form',
        template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <span *ngIf=\"isLevel13\" class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <br *ngIf=\"isLevel13\" />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
    })
], ConsentManagementFormComponent);
export { ConsentManagementFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBeUJ6QztRQXhCQSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU1yQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBS25DLCtDQUErQztRQUUvQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2xCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7SUFFVSxDQUFDO0lBRWhCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyx3QkFBd0IsQ0FBQyxLQUFLLENBQzdELENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO2dCQUMvRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFO29CQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQzFCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7Q0FDRixDQUFBO0FBckRDO0lBREMsS0FBSyxFQUFFO3VFQUN5QjtBQUdqQztJQURDLEtBQUssRUFBRTt3RUFDd0I7QUFHaEM7SUFEQyxLQUFLLEVBQUU7a0ZBQzJCO0FBR25DO0lBREMsS0FBSyxFQUFFOytEQUNrQjtBQUkxQjtJQURDLEtBQUssRUFBRTtpRUFDVTtBQUdsQjtJQURDLE1BQU0sRUFBRTtzRUFJSjtBQXZCTSw4QkFBOEI7SUFKMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0Qyw4cUJBQXVEO0tBQ3hELENBQUM7R0FDVyw4QkFBOEIsQ0F5RDFDO1NBekRZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnNlbnRHaXZlbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KClcbiAgaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIEBJbnB1dCgpXG4gIGlzTGV2ZWwxMyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjb25zZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkICYmIHRoaXMuY29uc2VudCkge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBCb29sZWFuKFxuICAgICAgICB0aGlzLmNvbnNlbnQuY29uc2VudFN0YXRlID09PSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZSAmJiB0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkge1xuICAgICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpIHtcbiAgICAgICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUpIHtcbiAgICAgICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb25zZW50R2l2ZW4gPSAhdGhpcy5jb25zZW50R2l2ZW47XG5cbiAgICB0aGlzLmNvbnNlbnRDaGFuZ2VkLmVtaXQoe1xuICAgICAgZ2l2ZW46IHRoaXMuY29uc2VudEdpdmVuLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc2VudFRlbXBsYXRlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNSZXF1aXJlZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZFxuICAgICAgPyB0aGlzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXModGVtcGxhdGVJZClcbiAgICAgIDogZmFsc2U7XG4gIH1cbn1cbiJdfQ==