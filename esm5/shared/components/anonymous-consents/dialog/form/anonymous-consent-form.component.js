/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
var AnonymousConsentFormComponent = /** @class */ (function () {
    function AnonymousConsentFormComponent() {
        this.iconTypes = ICON_TYPE;
        this.consentGiven$ = new BehaviorSubject(false);
        this.accordionExpanded = false;
        this.accordionHeight = '0px';
        this.requiredConsents = [];
        this.consentChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AnonymousConsentFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.consent) {
            this.consentGiven$.next(this.consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        this.consentGivenTranslation$ = this.consentGiven$.pipe(map((/**
         * @param {?} given
         * @return {?}
         */
        function (given) {
            return given ? 'anonymousConsents.dialog.on' : 'anonymousConsents.dialog.off';
        })));
    };
    /**
     * @return {?}
     */
    AnonymousConsentFormComponent.prototype.onConsentChange = /**
     * @return {?}
     */
    function () {
        this.consentGiven$.next(!this.consentGiven$.value);
        this.consentChanged.emit({
            given: this.consentGiven$.value,
            template: this.template,
        });
    };
    /**
     * @param {?=} keyEvent
     * @return {?}
     */
    AnonymousConsentFormComponent.prototype.toggleAccordion = /**
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
    AnonymousConsentFormComponent.prototype.isRequired = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        return this.requiredConsents.includes(templateId);
    };
    /**
     * @return {?}
     */
    AnonymousConsentFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.consentGiven$.unsubscribe();
    };
    AnonymousConsentFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-anonymous-consent-form',
                    template: "<div\n  class=\"form-check cx-accordion\"\n  role=\"tablist\"\n  aria-live=\"polite\"\n  data-behavior=\"accordion\"\n>\n  <div class=\"cx-accordion-item\">\n    <div\n      [id]=\"'tab' + template?.id\"\n      tabindex=\"0\"\n      class=\"cx-accordion-tab\"\n      [attr.aria-controls]=\"'panel' + template?.id\"\n      role=\"tab\"\n      [attr.aria-selected]=\"accordionExpanded\"\n      [attr.aria-expanded]=\"accordionExpanded\"\n      (click)=\"toggleAccordion()\"\n      (keydown)=\"toggleAccordion($event)\"\n    >\n      <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n      <span class=\"cx-accordion-title\" tabindex=\"-1\"\n        >{{ template?.name }}\n      </span>\n    </div>\n\n    <div\n      [id]=\"'panel' + template?.id\"\n      class=\"cx-accordion-tabpanel\"\n      role=\"tabpanel\"\n      [attr.aria-hidden]=\"!accordionExpanded\"\n      [attr.aria-labelledby]=\"'tab' + template?.id\"\n      [style.height]=\"accordionHeight\"\n    >\n      <div class=\"cx-accordion-content\" #accordionContent>\n        <p>{{ template?.description }}</p>\n      </div>\n    </div>\n\n    <div class=\"cx-toggle-button\">\n      <input\n        [id]=\"template?.id\"\n        type=\"checkbox\"\n        [checked]=\"consentGiven$ | async\"\n        (change)=\"onConsentChange()\"\n        [disabled]=\"isRequired(template?.id)\"\n      />\n\n      <label [for]=\"template?.id\">\n        <div class=\"cx-toggle-switch\"></div>\n        <div class=\"cx-toggle-text\">\n          {{ consentGivenTranslation$ | async | cxTranslate }}\n        </div>\n      </label>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AnonymousConsentFormComponent.ctorParameters = function () { return []; };
    AnonymousConsentFormComponent.propDecorators = {
        accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
        template: [{ type: Input }],
        consent: [{ type: Input }],
        requiredConsents: [{ type: Input }],
        consentChanged: [{ type: Output }]
    };
    return AnonymousConsentFormComponent;
}());
export { AnonymousConsentFormComponent };
if (false) {
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.iconTypes;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.consentGiven$;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.consentGivenTranslation$;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.accordionExpanded;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.accordionHeight;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.accordionContent;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.template;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.consent;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.requiredConsents;
    /** @type {?} */
    AnonymousConsentFormComponent.prototype.consentChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Zvcm0vYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRS9FO0lBNkJFO1FBeEJBLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVwRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFZeEIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBR2hDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7SUFFVSxDQUFDOzs7O0lBRWhCLGdEQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEtBQUssd0JBQXdCLENBQUMsS0FBSyxDQUM3RCxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JELEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDUCxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtRQUF0RSxDQUFzRSxFQUN2RSxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdURBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdURBQWU7Ozs7SUFBZixVQUFnQixRQUF3Qjs7WUFDbEMsTUFBTSxHQUFHLElBQUk7UUFDakIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDaEUsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtnQkFDM0MsQ0FBQyxDQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxPQUFJO2dCQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELGtEQUFVOzs7O0lBQVYsVUFBVyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELG1EQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBekVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxzbERBQXNEO2lCQUN2RDs7Ozs7bUNBUUUsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsyQkFHL0MsS0FBSzswQkFHTCxLQUFLO21DQUdMLEtBQUs7aUNBR0wsTUFBTTs7SUFtRFQsb0NBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXRFWSw2QkFBNkI7OztJQUN4QyxrREFBc0I7O0lBQ3RCLHNEQUFvRDs7SUFDcEQsaUVBQTZDOztJQUM3QywwREFBMEI7O0lBQzFCLHdEQUF3Qjs7SUFFeEIseURBQzZDOztJQUU3QyxpREFDMEI7O0lBRTFCLGdEQUMwQjs7SUFFMUIseURBQ2dDOztJQUVoQyx1REFJSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNvbnNlbnRHaXZlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc2VudEdpdmVuVHJhbnNsYXRpb24kOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGFjY29yZGlvbkV4cGFuZGVkID0gZmFsc2U7XG4gIGFjY29yZGlvbkhlaWdodCA9ICcwcHgnO1xuXG4gIEBWaWV3Q2hpbGQoJ2FjY29yZGlvbkNvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgYWNjb3JkaW9uQ29udGVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uc2VudCkge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW4kLm5leHQoXG4gICAgICAgIHRoaXMuY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQgPSB0aGlzLmNvbnNlbnRHaXZlbiQucGlwZShcbiAgICAgIG1hcChnaXZlbiA9PlxuICAgICAgICBnaXZlbiA/ICdhbm9ueW1vdXNDb25zZW50cy5kaWFsb2cub24nIDogJ2Fub255bW91c0NvbnNlbnRzLmRpYWxvZy5vZmYnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnNlbnRHaXZlbiQubmV4dCghdGhpcy5jb25zZW50R2l2ZW4kLnZhbHVlKTtcblxuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogdGhpcy5jb25zZW50R2l2ZW4kLnZhbHVlLFxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVBY2NvcmRpb24oa2V5RXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGV4cGFuZCA9IHRydWU7XG4gICAgaWYgKGtleUV2ZW50ICYmIGtleUV2ZW50LmtleSAhPT0gJyAnICYmIGtleUV2ZW50LmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgZXhwYW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV4cGFuZCkge1xuICAgICAgdGhpcy5hY2NvcmRpb25FeHBhbmRlZCA9ICF0aGlzLmFjY29yZGlvbkV4cGFuZGVkO1xuICAgICAgdGhpcy5hY2NvcmRpb25IZWlnaHQgPSB0aGlzLmFjY29yZGlvbkV4cGFuZGVkXG4gICAgICAgID8gYCR7dGhpcy5hY2NvcmRpb25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0fXB4YFxuICAgICAgICA6ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZUlkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=