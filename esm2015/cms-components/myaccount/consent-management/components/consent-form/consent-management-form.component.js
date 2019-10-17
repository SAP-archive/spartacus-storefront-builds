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
        // TODO(issue:4989) Anonymous consents - remove
        this.isAnonymousConsentsEnabled = false;
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
        // TODO(issue:4989) Anonymous consents - remove this.isAnonymousConsentsEnabled check
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    }
}
ConsentManagementFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management-form',
                template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementForm\">` -->\n<ng-container\n  *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementForm\"\n>\n  <div\n    class=\"form-check cx-accordion\"\n    role=\"tablist\"\n    aria-live=\"polite\"\n    data-behavior=\"accordion\"\n  >\n    <div class=\"cx-accordion-item\">\n      <div\n        [id]=\"'tab' + consentTemplate?.id\"\n        tabindex=\"0\"\n        class=\"cx-accordion-tab\"\n        [attr.aria-controls]=\"'panel' + consentTemplate?.id\"\n        role=\"tab\"\n        [attr.aria-selected]=\"accordionExpanded\"\n        [attr.aria-expanded]=\"accordionExpanded\"\n        (click)=\"toggleAccordion()\"\n        (keydown)=\"toggleAccordion($event)\"\n      >\n        <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n        <span class=\"cx-accordion-title\" tabindex=\"-1\"\n          >{{ consentTemplate?.name }}\n        </span>\n      </div>\n\n      <div\n        [id]=\"'panel' + consentTemplate?.id\"\n        class=\"cx-accordion-tabpanel\"\n        role=\"tabpanel\"\n        [attr.aria-hidden]=\"!accordionExpanded\"\n        [attr.aria-labelledby]=\"'tab' + consentTemplate?.id\"\n        [style.height]=\"accordionHeight\"\n      >\n        <div class=\"cx-accordion-content\" #accordionContent>\n          <p>{{ consentTemplate?.description }}</p>\n        </div>\n      </div>\n\n      <div class=\"cx-toggle-button\">\n        <input\n          type=\"checkbox\"\n          [id]=\"consentTemplate?.id\"\n          [checked]=\"consentGiven\"\n          [disabled]=\"isRequired(consentTemplate?.id)\"\n          (change)=\"onConsentChange()\"\n        />\n\n        <label [for]=\"consentTemplate?.id\">\n          <div class=\"cx-toggle-switch\"></div>\n          <div class=\"cx-toggle-text\">\n            {{ consentGivenTranslation$ | async | cxTranslate }}\n          </div>\n        </label>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove the whole `<ng-template #legacyConsentManagementForm>...</ng-template>` block -->\n<ng-template #legacyConsentManagementForm>\n  <div class=\"form-check\">\n    <label>\n      <input\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        (change)=\"onConsentChange()\"\n        [checked]=\"consentGiven\"\n      />\n      <span class=\"form-check-label\">\n        {{ consentTemplate?.description }}\n      </span>\n    </label>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
ConsentManagementFormComponent.ctorParameters = () => [];
ConsentManagementFormComponent.propDecorators = {
    accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
    consentTemplate: [{ type: Input }],
    requiredConsents: [{ type: Input }],
    isAnonymousConsentsEnabled: [{ type: Input }],
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
    ConsentManagementFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQU0vRSxNQUFNLE9BQU8sOEJBQThCO0lBNEJ6QztRQTNCQSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUM1QywyQkFBMkIsQ0FDNUIsQ0FBQztRQUNGLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVNyQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7O1FBSWhDLCtCQUEwQixHQUFHLEtBQUssQ0FBQztRQUduQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUc3QixDQUFDO0lBRVUsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO1lBQy9ELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDakU7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQXdCOztZQUNsQyxNQUFNLEdBQUcsSUFBSTtRQUNqQixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNoRSxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2dCQUMzQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSTtnQkFDekQsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IscUZBQXFGO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsMGdGQUF1RDthQUN4RDs7Ozs7K0JBVUUsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFHL0MsS0FBSzsrQkFHTCxLQUFLO3lDQUlMLEtBQUs7NkJBR0wsTUFBTTs7OztJQXJCUCxtREFBc0I7O0lBQ3RCLGtFQUVFOztJQUNGLDJEQUEwQjs7SUFDMUIseURBQXdCOztJQUN4QixzREFBcUI7O0lBRXJCLDBEQUM2Qzs7SUFFN0MseURBQ2lDOztJQUVqQywwREFDZ0M7O0lBR2hDLG9FQUNtQzs7SUFFbkMsd0RBSUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgY29uc2VudEdpdmVuVHJhbnNsYXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFxuICAgICdjb25zZW50TWFuYWdlbWVudEZvcm0ub2ZmJ1xuICApO1xuICBhY2NvcmRpb25FeHBhbmRlZCA9IGZhbHNlO1xuICBhY2NvcmRpb25IZWlnaHQgPSAnMHB4JztcbiAgY29uc2VudEdpdmVuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnYWNjb3JkaW9uQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBhY2NvcmRpb25Db250ZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlXG4gIEBJbnB1dCgpXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlICYmIHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpIHtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9mZicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSB7XG4gICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuID0gIXRoaXMuY29uc2VudEdpdmVuO1xuICAgIGlmICh0aGlzLmNvbnNlbnRHaXZlbikge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuVHJhbnNsYXRpb24kLm5leHQoJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vZmYnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnNlbnRDaGFuZ2VkLmVtaXQoe1xuICAgICAgZ2l2ZW46IHRoaXMuY29uc2VudEdpdmVuLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc2VudFRlbXBsYXRlLFxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQWNjb3JkaW9uKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGxldCBleHBhbmQgPSB0cnVlO1xuICAgIGlmIChrZXlFdmVudCAmJiBrZXlFdmVudC5rZXkgIT09ICcgJyAmJiBrZXlFdmVudC5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgIGV4cGFuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChleHBhbmQpIHtcbiAgICAgIHRoaXMuYWNjb3JkaW9uRXhwYW5kZWQgPSAhdGhpcy5hY2NvcmRpb25FeHBhbmRlZDtcbiAgICAgIHRoaXMuYWNjb3JkaW9uSGVpZ2h0ID0gdGhpcy5hY2NvcmRpb25FeHBhbmRlZFxuICAgICAgICA/IGAke3RoaXMuYWNjb3JkaW9uQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodH1weGBcbiAgICAgICAgOiAnMHB4JztcbiAgICB9XG4gIH1cblxuICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWQgY2hlY2tcbiAgICByZXR1cm4gdGhpcy5pc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZFxuICAgICAgPyB0aGlzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXModGVtcGxhdGVJZClcbiAgICAgIDogZmFsc2U7XG4gIH1cbn1cbiJdfQ==