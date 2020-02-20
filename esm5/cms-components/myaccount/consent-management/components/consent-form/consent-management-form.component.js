import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    ConsentManagementFormComponent.prototype.ngOnInit = function () {
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
    };
    ConsentManagementFormComponent.prototype.onConsentChange = function () {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    };
    ConsentManagementFormComponent.prototype.isRequired = function (templateId) {
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
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
    return ConsentManagementFormComponent;
}());
export { ConsentManagementFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBTXpCO0lBeUJFO1FBeEJBLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUdoQywrQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFLbkMsK0NBQStDO1FBRS9DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFHN0IsQ0FBQztJQUVVLENBQUM7SUFFaEIsaURBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLDBCQUEwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLEtBQUssQ0FDN0QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7Z0JBQy9ELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7b0JBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO29CQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtREFBVSxHQUFWLFVBQVcsVUFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUM1QyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQXBERDtRQURDLEtBQUssRUFBRTsyRUFDeUI7SUFHakM7UUFEQyxLQUFLLEVBQUU7NEVBQ3dCO0lBR2hDO1FBREMsS0FBSyxFQUFFO3NGQUMyQjtJQUduQztRQURDLEtBQUssRUFBRTttRUFDa0I7SUFJMUI7UUFEQyxLQUFLLEVBQUU7cUVBQ1U7SUFHbEI7UUFEQyxNQUFNLEVBQUU7MEVBSUo7SUF2Qk0sOEJBQThCO1FBSjFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsOHFCQUF1RDtTQUN4RCxDQUFDO09BQ1csOEJBQThCLENBeUQxQztJQUFELHFDQUFDO0NBQUEsQUF6REQsSUF5REM7U0F6RFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc2VudEdpdmVuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG5cbiAgQElucHV0KClcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQ7XG5cbiAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmVcbiAgQElucHV0KClcbiAgaXNMZXZlbDEzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgJiYgdGhpcy5jb25zZW50KSB7XG4gICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IEJvb2xlYW4oXG4gICAgICAgIHRoaXMuY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlICYmIHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkge1xuICAgICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkge1xuICAgICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnNlbnRHaXZlbiA9ICF0aGlzLmNvbnNlbnRHaXZlbjtcblxuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogdGhpcy5jb25zZW50R2l2ZW4sXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb25zZW50VGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkXG4gICAgICA/IHRoaXMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZUlkKVxuICAgICAgOiBmYWxzZTtcbiAgfVxufVxuIl19