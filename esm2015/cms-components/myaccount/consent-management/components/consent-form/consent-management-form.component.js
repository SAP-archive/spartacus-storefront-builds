/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
export class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onConsentChange() {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    isRequired(templateId) {
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    }
}
ConsentManagementFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management-form',
                template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <span *ngIf=\"isLevel13\" class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <br *ngIf=\"isLevel13\" />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
            }] }
];
/** @nocollapse */
ConsentManagementFormComponent.ctorParameters = () => [];
ConsentManagementFormComponent.propDecorators = {
    consentTemplate: [{ type: Input }],
    requiredConsents: [{ type: Input }],
    isAnonymousConsentsEnabled: [{ type: Input }],
    consent: [{ type: Input }],
    isLevel13: [{ type: Input }],
    consentChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGiven;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentTemplate;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.requiredConsents;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isAnonymousConsentsEnabled;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consent;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isLevel13;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBTXpCLE1BQU0sT0FBTyw4QkFBOEI7SUF5QnpDO1FBeEJBLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUdoQywrQkFBMEIsR0FBRyxLQUFLLENBQUM7O1FBT25DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFHN0IsQ0FBQztJQUVVLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLDBCQUEwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLEtBQUssQ0FDN0QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7Z0JBQy9ELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7b0JBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO29CQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsOHFCQUF1RDthQUN4RDs7Ozs7OEJBSUUsS0FBSzsrQkFHTCxLQUFLO3lDQUdMLEtBQUs7c0JBR0wsS0FBSzt3QkFJTCxLQUFLOzZCQUdMLE1BQU07Ozs7SUFsQlAsc0RBQXFCOztJQUVyQix5REFDaUM7O0lBRWpDLDBEQUNnQzs7SUFFaEMsb0VBQ21DOztJQUVuQyxpREFDMEI7O0lBRzFCLG1EQUNrQjs7SUFFbEIsd0RBSUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zZW50R2l2ZW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBASW5wdXQoKVxuICBpc0xldmVsMTMgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY29uc2VudENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCAmJiB0aGlzLmNvbnNlbnQpIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gQm9vbGVhbihcbiAgICAgICAgdGhpcy5jb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUgJiYgdGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuID0gIXRoaXMuY29uc2VudEdpdmVuO1xuXG4gICAgdGhpcy5jb25zZW50Q2hhbmdlZC5lbWl0KHtcbiAgICAgIGdpdmVuOiB0aGlzLmNvbnNlbnRHaXZlbixcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnNlbnRUZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWRcbiAgICAgID8gdGhpcy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlSWQpXG4gICAgICA6IGZhbHNlO1xuICB9XG59XG4iXX0=