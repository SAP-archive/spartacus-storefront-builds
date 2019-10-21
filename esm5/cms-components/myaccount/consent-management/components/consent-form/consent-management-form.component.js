/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
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
    ConsentManagementFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.onConsentChange = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?=} keyEvent
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.toggleAccordion = /**
     * @param {?=} keyEvent
     * @return {?}
     */
    function (keyEvent) {
        /** @type {?} */
        var expand = true;
        if (keyEvent && keyEvent.key !== ' ' && keyEvent.key !== 'Enter') {
            expand = false;
        }
        if (expand) {
            this.accordionExpanded = !this.accordionExpanded;
            this.accordionHeight = this.accordionExpanded
                ? this.accordionContent.nativeElement.clientHeight + "px"
                : '0px';
        }
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
                    template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementForm\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementForm\">\n  <div\n    class=\"form-check cx-accordion\"\n    role=\"tablist\"\n    aria-live=\"polite\"\n    data-behavior=\"accordion\"\n  >\n    <div class=\"cx-accordion-item\">\n      <div\n        [id]=\"'tab' + consentTemplate?.id\"\n        tabindex=\"0\"\n        class=\"cx-accordion-tab\"\n        [attr.aria-controls]=\"'panel' + consentTemplate?.id\"\n        role=\"tab\"\n        [attr.aria-selected]=\"accordionExpanded\"\n        [attr.aria-expanded]=\"accordionExpanded\"\n        (click)=\"toggleAccordion()\"\n        (keydown)=\"toggleAccordion($event)\"\n      >\n        <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n        <span class=\"cx-accordion-title\" tabindex=\"-1\"\n          >{{ consentTemplate?.name }}\n        </span>\n      </div>\n\n      <div\n        [id]=\"'panel' + consentTemplate?.id\"\n        class=\"cx-accordion-tabpanel\"\n        role=\"tabpanel\"\n        [attr.aria-hidden]=\"!accordionExpanded\"\n        [attr.aria-labelledby]=\"'tab' + consentTemplate?.id\"\n        [style.height]=\"accordionHeight\"\n      >\n        <div class=\"cx-accordion-content\" #accordionContent>\n          <p>{{ consentTemplate?.description }}</p>\n        </div>\n      </div>\n\n      <div class=\"cx-toggle-button\">\n        <input\n          type=\"checkbox\"\n          [id]=\"consentTemplate?.id\"\n          [checked]=\"consentGiven\"\n          [disabled]=\"isRequired(consentTemplate?.id)\"\n          (change)=\"onConsentChange()\"\n        />\n\n        <label [for]=\"consentTemplate?.id\">\n          <div class=\"cx-toggle-switch\"></div>\n          <div class=\"cx-toggle-text\">\n            {{ consentGivenTranslation$ | async | cxTranslate }}\n          </div>\n        </label>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove the whole `<ng-template #legacyConsentManagementForm>...</ng-template>` block -->\n<ng-template #legacyConsentManagementForm>\n  <div class=\"form-check\">\n    <label>\n      <input\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        (change)=\"onConsentChange()\"\n        [checked]=\"consentGiven\"\n      />\n      <span class=\"form-check-label\">\n        {{ consentTemplate?.description }}\n      </span>\n    </label>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementFormComponent.ctorParameters = function () { return []; };
    ConsentManagementFormComponent.propDecorators = {
        accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
        consentTemplate: [{ type: Input }],
        requiredConsents: [{ type: Input }],
        isAnonymousConsentsEnabled: [{ type: Input }],
        isLevel13: [{ type: Input }],
        consentChanged: [{ type: Output }]
    };
    return ConsentManagementFormComponent;
}());
export { ConsentManagementFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUvRTtJQW1DRTtRQTlCQSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUM1QywyQkFBMkIsQ0FDNUIsQ0FBQztRQUNGLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVNyQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsK0JBQTBCLEdBQUcsS0FBSyxDQUFDOztRQUluQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2xCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7SUFFVSxDQUFDOzs7O0lBRWhCLGlEQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtZQUMvRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFO2dCQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDaEU7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx3REFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsd0RBQWU7Ozs7SUFBZixVQUFnQixRQUF3Qjs7WUFDbEMsTUFBTSxHQUFHLElBQUk7UUFDakIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDaEUsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtnQkFDM0MsQ0FBQyxDQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxPQUFJO2dCQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELG1EQUFVOzs7O0lBQVYsVUFBVyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQywwQkFBMEI7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOztnQkFqRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLG0rRUFBdUQ7aUJBQ3hEOzs7OzttQ0FVRSxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2tDQUcvQyxLQUFLO21DQUdMLEtBQUs7NkNBR0wsS0FBSzs0QkFJTCxLQUFLO2lDQUdMLE1BQU07O0lBcURULHFDQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0E5RVksOEJBQThCOzs7SUFDekMsbURBQXNCOztJQUN0QixrRUFFRTs7SUFDRiwyREFBMEI7O0lBQzFCLHlEQUF3Qjs7SUFDeEIsc0RBQXFCOztJQUVyQiwwREFDNkM7O0lBRTdDLHlEQUNpQzs7SUFFakMsMERBQ2dDOztJQUVoQyxvRUFDbUM7O0lBR25DLG1EQUNrQjs7SUFFbEIsd0RBSUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgY29uc2VudEdpdmVuVHJhbnNsYXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFxuICAgICdjb25zZW50TWFuYWdlbWVudEZvcm0ub2ZmJ1xuICApO1xuICBhY2NvcmRpb25FeHBhbmRlZCA9IGZhbHNlO1xuICBhY2NvcmRpb25IZWlnaHQgPSAnMHB4JztcbiAgY29uc2VudEdpdmVuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnYWNjb3JkaW9uQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBhY2NvcmRpb25Db250ZW50OiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBjb25zZW50VGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkID0gZmFsc2U7XG5cbiAgLy8gVE9ETyhpc3N1ZTo0OTg5KSBBbm9ueW1vdXMgY29uc2VudHMgLSByZW1vdmVcbiAgQElucHV0KClcbiAgaXNMZXZlbDEzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlICYmIHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50KSB7XG4gICAgICBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudFdpdGhkcmF3bkRhdGUpIHtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9mZicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb25zZW50R2l2ZW5EYXRlKSB7XG4gICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuID0gIXRoaXMuY29uc2VudEdpdmVuO1xuICAgIGlmICh0aGlzLmNvbnNlbnRHaXZlbikge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQubmV4dCgnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuVHJhbnNsYXRpb24kLm5leHQoJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vZmYnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnNlbnRDaGFuZ2VkLmVtaXQoe1xuICAgICAgZ2l2ZW46IHRoaXMuY29uc2VudEdpdmVuLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuY29uc2VudFRlbXBsYXRlLFxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQWNjb3JkaW9uKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGxldCBleHBhbmQgPSB0cnVlO1xuICAgIGlmIChrZXlFdmVudCAmJiBrZXlFdmVudC5rZXkgIT09ICcgJyAmJiBrZXlFdmVudC5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgIGV4cGFuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChleHBhbmQpIHtcbiAgICAgIHRoaXMuYWNjb3JkaW9uRXhwYW5kZWQgPSAhdGhpcy5hY2NvcmRpb25FeHBhbmRlZDtcbiAgICAgIHRoaXMuYWNjb3JkaW9uSGVpZ2h0ID0gdGhpcy5hY2NvcmRpb25FeHBhbmRlZFxuICAgICAgICA/IGAke3RoaXMuYWNjb3JkaW9uQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodH1weGBcbiAgICAgICAgOiAnMHB4JztcbiAgICB9XG4gIH1cblxuICBpc1JlcXVpcmVkKHRlbXBsYXRlSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkXG4gICAgICA/IHRoaXMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZUlkKVxuICAgICAgOiBmYWxzZTtcbiAgfVxufVxuIl19