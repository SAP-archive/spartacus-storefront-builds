/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
export class ConsentManagementFormComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.consentGivenTranslation$ = new BehaviorSubject('consentManagementForm.off');
        this.accordionExpanded = false;
        this.accordionHeight = '0px';
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
        if (this.consentTemplate && this.consentTemplate.currentConsent) {
            if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                this.consentGiven = false;
                this.consentGivenTranslation$.next('consentManagementForm.off');
            }
            else if (this.consentTemplate.currentConsent.consentGivenDate) {
                this.consentGiven = true;
                this.consentGivenTranslation$.next('consentManagementForm.on');
            }
        }
    }
    /**
     * @return {?}
     */
    onConsentChange() {
        this.consentGiven = !this.consentGiven;
        if (this.consentGiven) {
            this.consentGivenTranslation$.next('consentManagementForm.on');
        }
        else {
            this.consentGivenTranslation$.next('consentManagementForm.off');
        }
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    }
    /**
     * @param {?=} keyEvent
     * @return {?}
     */
    toggleAccordion(keyEvent) {
        /** @type {?} */
        let expand = true;
        if (keyEvent && keyEvent.key !== ' ' && keyEvent.key !== 'Enter') {
            expand = false;
        }
        if (expand) {
            this.accordionExpanded = !this.accordionExpanded;
            this.accordionHeight = this.accordionExpanded
                ? `${this.accordionContent.nativeElement.clientHeight}px`
                : '0px';
        }
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
                template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementForm\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementForm\">\n  <div\n    class=\"form-check cx-accordion\"\n    role=\"tablist\"\n    aria-live=\"polite\"\n    data-behavior=\"accordion\"\n  >\n    <div class=\"cx-accordion-item\">\n      <div\n        [id]=\"'tab' + consentTemplate?.id\"\n        tabindex=\"0\"\n        class=\"cx-accordion-tab\"\n        [attr.aria-controls]=\"'panel' + consentTemplate?.id\"\n        role=\"tab\"\n        [attr.aria-selected]=\"accordionExpanded\"\n        [attr.aria-expanded]=\"accordionExpanded\"\n        (click)=\"toggleAccordion()\"\n        (keydown)=\"toggleAccordion($event)\"\n      >\n        <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n        <span class=\"cx-accordion-title\" tabindex=\"-1\"\n          >{{ consentTemplate?.name }}\n        </span>\n      </div>\n\n      <div\n        [id]=\"'panel' + consentTemplate?.id\"\n        class=\"cx-accordion-tabpanel\"\n        role=\"tabpanel\"\n        [attr.aria-hidden]=\"!accordionExpanded\"\n        [attr.aria-labelledby]=\"'tab' + consentTemplate?.id\"\n        [style.height]=\"accordionHeight\"\n      >\n        <div class=\"cx-accordion-content\" #accordionContent>\n          <p>{{ consentTemplate?.description }}</p>\n        </div>\n      </div>\n\n      <div class=\"cx-toggle-button\">\n        <input\n          type=\"checkbox\"\n          [id]=\"consentTemplate?.id\"\n          [checked]=\"consentGiven\"\n          [disabled]=\"isRequired(consentTemplate?.id)\"\n          (change)=\"onConsentChange()\"\n        />\n\n        <label [for]=\"consentTemplate?.id\">\n          <div class=\"cx-toggle-switch\"></div>\n          <div class=\"cx-toggle-text\">\n            {{ consentGivenTranslation$ | async | cxTranslate }}\n          </div>\n        </label>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove the whole `<ng-template #legacyConsentManagementForm>...</ng-template>` block -->\n<ng-template #legacyConsentManagementForm>\n  <div class=\"form-check\">\n    <label>\n      <input\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        (change)=\"onConsentChange()\"\n        [checked]=\"consentGiven\"\n      />\n      <span class=\"form-check-label\">\n        {{ consentTemplate?.description }}\n      </span>\n    </label>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
ConsentManagementFormComponent.ctorParameters = () => [];
ConsentManagementFormComponent.propDecorators = {
    accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
    consentTemplate: [{ type: Input }],
    requiredConsents: [{ type: Input }],
    isAnonymousConsentsEnabled: [{ type: Input }],
    isLevel13: [{ type: Input }],
    consentChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConsentManagementFormComponent.prototype.iconTypes;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGivenTranslation$;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.accordionExpanded;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.accordionHeight;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGiven;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.accordionContent;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentTemplate;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.requiredConsents;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isAnonymousConsentsEnabled;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isLevel13;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQU0vRSxNQUFNLE9BQU8sOEJBQThCO0lBK0J6QztRQTlCQSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUM1QywyQkFBMkIsQ0FDNUIsQ0FBQztRQUNGLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVNyQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsK0JBQTBCLEdBQUcsS0FBSyxDQUFDOztRQUluQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2xCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7SUFFVSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7WUFDL0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUNqRTtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsUUFBd0I7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJO1FBQ2pCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ2hFLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJO2dCQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQywwQkFBMEI7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLG0rRUFBdUQ7YUFDeEQ7Ozs7OytCQVVFLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7OEJBRy9DLEtBQUs7K0JBR0wsS0FBSzt5Q0FHTCxLQUFLO3dCQUlMLEtBQUs7NkJBR0wsTUFBTTs7OztJQXhCUCxtREFBc0I7O0lBQ3RCLGtFQUVFOztJQUNGLDJEQUEwQjs7SUFDMUIseURBQXdCOztJQUN4QixzREFBcUI7O0lBRXJCLDBEQUM2Qzs7SUFFN0MseURBQ2lDOztJQUVqQywwREFDZ0M7O0lBRWhDLG9FQUNtQzs7SUFHbkMsbURBQ2tCOztJQUVsQix3REFJSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbnNlbnQtbWFuYWdlbWVudC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uc2VudE1hbmFnZW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBjb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oXG4gICAgJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vZmYnXG4gICk7XG4gIGFjY29yZGlvbkV4cGFuZGVkID0gZmFsc2U7XG4gIGFjY29yZGlvbkhlaWdodCA9ICcwcHgnO1xuICBjb25zZW50R2l2ZW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdhY2NvcmRpb25Db250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGFjY29yZGlvbkNvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KClcbiAgaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgPSBmYWxzZTtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBASW5wdXQoKVxuICBpc0xldmVsMTMgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY29uc2VudENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUgJiYgdGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQpIHtcbiAgICAgIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50V2l0aGRyYXduRGF0ZSkge1xuICAgICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnNlbnRHaXZlblRyYW5zbGF0aW9uJC5uZXh0KCdjb25zZW50TWFuYWdlbWVudEZvcm0ub2ZmJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRHaXZlbkRhdGUpIHtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnNlbnRHaXZlblRyYW5zbGF0aW9uJC5uZXh0KCdjb25zZW50TWFuYWdlbWVudEZvcm0ub24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnNlbnRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb25zZW50R2l2ZW4gPSAhdGhpcy5jb25zZW50R2l2ZW47XG4gICAgaWYgKHRoaXMuY29uc2VudEdpdmVuKSB7XG4gICAgICB0aGlzLmNvbnNlbnRHaXZlblRyYW5zbGF0aW9uJC5uZXh0KCdjb25zZW50TWFuYWdlbWVudEZvcm0ub24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9mZicpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogdGhpcy5jb25zZW50R2l2ZW4sXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb25zZW50VGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVBY2NvcmRpb24oa2V5RXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGV4cGFuZCA9IHRydWU7XG4gICAgaWYgKGtleUV2ZW50ICYmIGtleUV2ZW50LmtleSAhPT0gJyAnICYmIGtleUV2ZW50LmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgZXhwYW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV4cGFuZCkge1xuICAgICAgdGhpcy5hY2NvcmRpb25FeHBhbmRlZCA9ICF0aGlzLmFjY29yZGlvbkV4cGFuZGVkO1xuICAgICAgdGhpcy5hY2NvcmRpb25IZWlnaHQgPSB0aGlzLmFjY29yZGlvbkV4cGFuZGVkXG4gICAgICAgID8gYCR7dGhpcy5hY2NvcmRpb25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0fXB4YFxuICAgICAgICA6ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWRcbiAgICAgID8gdGhpcy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlSWQpXG4gICAgICA6IGZhbHNlO1xuICB9XG59XG4iXX0=