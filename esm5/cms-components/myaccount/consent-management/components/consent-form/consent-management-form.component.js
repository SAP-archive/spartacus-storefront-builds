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
        // TODO(issue:4989) Anonymous consents - remove
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
        // TODO(issue:4989) Anonymous consents - remove this.isAnonymousConsentsEnabled check
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    };
    ConsentManagementFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management-form',
                    template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementForm\">` -->\n<ng-container\n  *ngIf=\"isAnonymousConsentsEnabled; else legacyConsentManagementForm\"\n>\n  <div\n    class=\"form-check cx-accordion\"\n    role=\"tablist\"\n    aria-live=\"polite\"\n    data-behavior=\"accordion\"\n  >\n    <div class=\"cx-accordion-item\">\n      <div\n        [id]=\"'tab' + consentTemplate?.id\"\n        tabindex=\"0\"\n        class=\"cx-accordion-tab\"\n        [attr.aria-controls]=\"'panel' + consentTemplate?.id\"\n        role=\"tab\"\n        [attr.aria-selected]=\"accordionExpanded\"\n        [attr.aria-expanded]=\"accordionExpanded\"\n        (click)=\"toggleAccordion()\"\n        (keydown)=\"toggleAccordion($event)\"\n      >\n        <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n        <span class=\"cx-accordion-title\" tabindex=\"-1\"\n          >{{ consentTemplate?.name }}\n        </span>\n      </div>\n\n      <div\n        [id]=\"'panel' + consentTemplate?.id\"\n        class=\"cx-accordion-tabpanel\"\n        role=\"tabpanel\"\n        [attr.aria-hidden]=\"!accordionExpanded\"\n        [attr.aria-labelledby]=\"'tab' + consentTemplate?.id\"\n        [style.height]=\"accordionHeight\"\n      >\n        <div class=\"cx-accordion-content\" #accordionContent>\n          <p>{{ consentTemplate?.description }}</p>\n        </div>\n      </div>\n\n      <div class=\"cx-toggle-button\">\n        <input\n          type=\"checkbox\"\n          [id]=\"consentTemplate?.id\"\n          [checked]=\"consentGiven\"\n          [disabled]=\"isRequired(consentTemplate?.id)\"\n          (change)=\"onConsentChange()\"\n        />\n\n        <label [for]=\"consentTemplate?.id\">\n          <div class=\"cx-toggle-switch\"></div>\n          <div class=\"cx-toggle-text\">\n            {{ consentGivenTranslation$ | async | cxTranslate }}\n          </div>\n        </label>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove the whole `<ng-template #legacyConsentManagementForm>...</ng-template>` block -->\n<ng-template #legacyConsentManagementForm>\n  <div class=\"form-check\">\n    <label>\n      <input\n        type=\"checkbox\"\n        class=\"form-check-input\"\n        (change)=\"onConsentChange()\"\n        [checked]=\"consentGiven\"\n      />\n      <span class=\"form-check-label\">\n        {{ consentTemplate?.description }}\n      </span>\n    </label>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementFormComponent.ctorParameters = function () { return []; };
    ConsentManagementFormComponent.propDecorators = {
        accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
        consentTemplate: [{ type: Input }],
        requiredConsents: [{ type: Input }],
        isAnonymousConsentsEnabled: [{ type: Input }],
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
    ConsentManagementFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtZm9ybS9jb25zZW50LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUUvRTtJQWdDRTtRQTNCQSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUM1QywyQkFBMkIsQ0FDNUIsQ0FBQztRQUNGLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVNyQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7O1FBSWhDLCtCQUEwQixHQUFHLEtBQUssQ0FBQztRQUduQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUc3QixDQUFDO0lBRVUsQ0FBQzs7OztJQUVoQixpREFBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7WUFDL0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQzthQUNqRTtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsd0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdEQUFlOzs7O0lBQWYsVUFBZ0IsUUFBd0I7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJO1FBQ2pCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ2hFLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLENBQUMsQ0FBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFlBQVksT0FBSTtnQkFDekQsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtREFBVTs7OztJQUFWLFVBQVcsVUFBa0I7UUFDM0IscUZBQXFGO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7O2dCQS9FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsMGdGQUF1RDtpQkFDeEQ7Ozs7O21DQVVFLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7a0NBRy9DLEtBQUs7bUNBR0wsS0FBSzs2Q0FJTCxLQUFLO2lDQUdMLE1BQU07O0lBc0RULHFDQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0E1RVksOEJBQThCOzs7SUFDekMsbURBQXNCOztJQUN0QixrRUFFRTs7SUFDRiwyREFBMEI7O0lBQzFCLHlEQUF3Qjs7SUFDeEIsc0RBQXFCOztJQUVyQiwwREFDNkM7O0lBRTdDLHlEQUNpQzs7SUFFakMsMERBQ2dDOztJQUdoQyxvRUFDbUM7O0lBRW5DLHdEQUlLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uc2VudC1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25zZW50TWFuYWdlbWVudEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNvbnNlbnRHaXZlblRyYW5zbGF0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm9mZidcbiAgKTtcbiAgYWNjb3JkaW9uRXhwYW5kZWQgPSBmYWxzZTtcbiAgYWNjb3JkaW9uSGVpZ2h0ID0gJzBweCc7XG4gIGNvbnNlbnRHaXZlbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2FjY29yZGlvbkNvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgYWNjb3JkaW9uQ29udGVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgY29uc2VudFRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG5cbiAgQElucHV0KClcbiAgcmVxdWlyZWRDb25zZW50czogc3RyaW5nW10gPSBbXTtcblxuICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZVxuICBASW5wdXQoKVxuICBpc0Fub255bW91c0NvbnNlbnRzRW5hYmxlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjb25zZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnNlbnRUZW1wbGF0ZSAmJiB0aGlzLmNvbnNlbnRUZW1wbGF0ZS5jdXJyZW50Q29uc2VudCkge1xuICAgICAgaWYgKHRoaXMuY29uc2VudFRlbXBsYXRlLmN1cnJlbnRDb25zZW50LmNvbnNlbnRXaXRoZHJhd25EYXRlKSB7XG4gICAgICAgIHRoaXMuY29uc2VudEdpdmVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uc2VudEdpdmVuVHJhbnNsYXRpb24kLm5leHQoJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vZmYnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25zZW50VGVtcGxhdGUuY3VycmVudENvbnNlbnQuY29uc2VudEdpdmVuRGF0ZSkge1xuICAgICAgICB0aGlzLmNvbnNlbnRHaXZlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uc2VudEdpdmVuVHJhbnNsYXRpb24kLm5leHQoJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnNlbnRHaXZlbiA9ICF0aGlzLmNvbnNlbnRHaXZlbjtcbiAgICBpZiAodGhpcy5jb25zZW50R2l2ZW4pIHtcbiAgICAgIHRoaXMuY29uc2VudEdpdmVuVHJhbnNsYXRpb24kLm5leHQoJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnNlbnRHaXZlblRyYW5zbGF0aW9uJC5uZXh0KCdjb25zZW50TWFuYWdlbWVudEZvcm0ub2ZmJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25zZW50Q2hhbmdlZC5lbWl0KHtcbiAgICAgIGdpdmVuOiB0aGlzLmNvbnNlbnRHaXZlbixcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnNlbnRUZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUFjY29yZGlvbihrZXlFdmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZXhwYW5kID0gdHJ1ZTtcbiAgICBpZiAoa2V5RXZlbnQgJiYga2V5RXZlbnQua2V5ICE9PSAnICcgJiYga2V5RXZlbnQua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICBleHBhbmQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXhwYW5kKSB7XG4gICAgICB0aGlzLmFjY29yZGlvbkV4cGFuZGVkID0gIXRoaXMuYWNjb3JkaW9uRXhwYW5kZWQ7XG4gICAgICB0aGlzLmFjY29yZGlvbkhlaWdodCA9IHRoaXMuYWNjb3JkaW9uRXhwYW5kZWRcbiAgICAgICAgPyBgJHt0aGlzLmFjY29yZGlvbkNvbnRlbnQubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHR9cHhgXG4gICAgICAgIDogJzBweCc7XG4gICAgfVxuICB9XG5cbiAgaXNSZXF1aXJlZCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPKGlzc3VlOjQ5ODkpIEFub255bW91cyBjb25zZW50cyAtIHJlbW92ZSB0aGlzLmlzQW5vbnltb3VzQ29uc2VudHNFbmFibGVkIGNoZWNrXG4gICAgcmV0dXJuIHRoaXMuaXNBbm9ueW1vdXNDb25zZW50c0VuYWJsZWRcbiAgICAgID8gdGhpcy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKHRlbXBsYXRlSWQpXG4gICAgICA6IGZhbHNlO1xuICB9XG59XG4iXX0=