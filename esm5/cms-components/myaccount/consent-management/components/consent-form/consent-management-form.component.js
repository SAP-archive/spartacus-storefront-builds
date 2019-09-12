/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentChanged = new EventEmitter();
        this.consentGiven = false;
    }
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.consentTemplate && this.consentTemplate.currentConsent) {
            if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                this.consentGiven = false;
            }
            else if (this.consentTemplate.currentConsent.consentGivenDate) {
                this.consentGiven = true;
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
        this.consentChanged.emit({
            given: !this.consentGiven,
            template: this.consentTemplate,
        });
    };
    ConsentManagementFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management-form',
                    template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      [checked]=\"consentGiven\"\n      (change)=\"onConsentChange()\"\n    />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementFormComponent.ctorParameters = function () { return []; };
    ConsentManagementFormComponent.propDecorators = {
        consentTemplate: [{ type: Input }],
        consentChanged: [{ type: Output }]
    };
    return ConsentManagementFormComponent;
}());
export { ConsentManagementFormComponent };
if (false) {
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentTemplate;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentChanged;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGiven;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0U7SUFnQkU7UUFQQSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUc3QixDQUFDO1FBRUwsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFFTixDQUFDOzs7O0lBRWhCLGlEQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUMvRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFO2dCQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHdEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDRUQUF1RDtpQkFDeEQ7Ozs7O2tDQUVFLEtBQUs7aUNBR0wsTUFBTTs7SUEwQlQscUNBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTlCWSw4QkFBOEI7OztJQUN6Qyx5REFDaUM7O0lBRWpDLHdEQUlLOztJQUVMLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zZW50R2l2ZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlICYmIHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpIHtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkge1xuICAgICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogIXRoaXMuY29uc2VudEdpdmVuLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc2VudFRlbXBsYXRlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=