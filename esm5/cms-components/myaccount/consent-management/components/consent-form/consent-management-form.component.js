/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        this.consentChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.onConsentChange = /**
     * @return {?}
     */
    function () {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.isRequired = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    };
    ConsentManagementFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management-form',
                    template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementFormComponent.ctorParameters = function () { return []; };
    ConsentManagementFormComponent.propDecorators = {
        consentTemplate: [{ type: Input }],
        requiredConsents: [{ type: Input }],
        isAnonymousConsentsEnabled: [{ type: Input }],
        consent: [{ type: Input }],
        consentChanged: [{ type: Output }]
    };
    return ConsentManagementFormComponent;
}());
export { ConsentManagementFormComponent };
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
    ConsentManagementFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUVMLHdCQUF3QixHQUV6QixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBeUJFO1FBcEJBLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBTXJCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUdoQywrQkFBMEIsR0FBRyxLQUFLLENBQUM7UUFNbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFHN0IsQ0FBQztJQUVVLENBQUM7Ozs7SUFFaEIsaURBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsMEJBQTBCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssd0JBQXdCLENBQUMsS0FBSyxDQUM3RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFDL0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQzNCO3FCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7b0JBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsd0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1EQUFVOzs7O0lBQVYsVUFBVyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQywwQkFBMEI7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGtYQUF1RDtpQkFDeEQ7Ozs7O2tDQUlFLEtBQUs7bUNBR0wsS0FBSzs2Q0FHTCxLQUFLOzBCQUdMLEtBQUs7aUNBR0wsTUFBTTs7SUFzQ1QscUNBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXJEWSw4QkFBOEI7OztJQUN6QyxzREFBcUI7O0lBRXJCLHlEQUNpQzs7SUFFakMsMERBQ2dDOztJQUVoQyxvRUFDbUM7O0lBRW5DLGlEQUMwQjs7SUFFMUIsd0RBSUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMsXG4gIENvbnNlbnRUZW1wbGF0ZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zZW50R2l2ZW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29uc2VudDogQW5vbnltb3VzQ29uc2VudDtcblxuICBAT3V0cHV0KClcbiAgY29uc2VudENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCAmJiB0aGlzLmNvbnNlbnQpIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gQm9vbGVhbihcbiAgICAgICAgdGhpcy5jb25zZW50LmNvbnNlbnRTdGF0ZSA9PT0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUgJiYgdGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSB7XG4gICAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuID0gIXRoaXMuY29uc2VudEdpdmVuO1xuXG4gICAgdGhpcy5jb25zZW50Q2hhbmdlZC5lbWl0KHtcbiAgICAgIGdpdmVuOiB0aGlzLmNvbnNlbnRHaXZlbixcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnNlbnRUZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWRcbiAgICAgID8gdGhpcy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlSWQpXG4gICAgICA6IGZhbHNlO1xuICB9XG59XG4iXX0=