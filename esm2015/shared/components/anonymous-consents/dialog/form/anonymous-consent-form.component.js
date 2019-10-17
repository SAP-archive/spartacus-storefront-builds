/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { ANONYMOUS_CONSENT_STATUS, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
export class AnonymousConsentFormComponent {
    constructor() {
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
    ngOnInit() {
        if (this.consent) {
            this.consentGiven$.next(this.consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        this.consentGivenTranslation$ = this.consentGiven$.pipe(map((/**
         * @param {?} given
         * @return {?}
         */
        given => given ? 'anonymousConsents.dialog.on' : 'anonymousConsents.dialog.off')));
    }
    /**
     * @return {?}
     */
    onConsentChange() {
        this.consentGiven$.next(!this.consentGiven$.value);
        this.consentChanged.emit({
            given: this.consentGiven$.value,
            template: this.template,
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
        return this.requiredConsents.includes(templateId);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.consentGiven$.unsubscribe();
    }
}
AnonymousConsentFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-form',
                template: "<div\n  class=\"form-check cx-accordion\"\n  role=\"tablist\"\n  aria-live=\"polite\"\n  data-behavior=\"accordion\"\n>\n  <div class=\"cx-accordion-item\">\n    <div\n      [id]=\"'tab' + template?.id\"\n      tabindex=\"0\"\n      class=\"cx-accordion-tab\"\n      [attr.aria-controls]=\"'panel' + template?.id\"\n      role=\"tab\"\n      [attr.aria-selected]=\"accordionExpanded\"\n      [attr.aria-expanded]=\"accordionExpanded\"\n      (click)=\"toggleAccordion()\"\n      (keydown)=\"toggleAccordion($event)\"\n    >\n      <cx-icon [type]=\"iconTypes.CARET_DOWN\"></cx-icon>\n      <span class=\"cx-accordion-title\" tabindex=\"-1\"\n        >{{ template?.name }}\n      </span>\n    </div>\n\n    <div\n      [id]=\"'panel' + template?.id\"\n      class=\"cx-accordion-tabpanel\"\n      role=\"tabpanel\"\n      [attr.aria-hidden]=\"!accordionExpanded\"\n      [attr.aria-labelledby]=\"'tab' + template?.id\"\n      [style.height]=\"accordionHeight\"\n    >\n      <div class=\"cx-accordion-content\" #accordionContent>\n        <p>{{ template?.description }}</p>\n      </div>\n    </div>\n\n    <div class=\"cx-toggle-button\">\n      <input\n        [id]=\"template?.id\"\n        type=\"checkbox\"\n        [checked]=\"consentGiven$ | async\"\n        (change)=\"onConsentChange()\"\n        [disabled]=\"isRequired(template?.id)\"\n      />\n\n      <label [for]=\"template?.id\">\n        <div class=\"cx-toggle-switch\"></div>\n        <div class=\"cx-toggle-text\">\n          {{ consentGivenTranslation$ | async | cxTranslate }}\n        </div>\n      </label>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentFormComponent.ctorParameters = () => [];
AnonymousConsentFormComponent.propDecorators = {
    accordionContent: [{ type: ViewChild, args: ['accordionContent', { static: false },] }],
    template: [{ type: Input }],
    consent: [{ type: Input }],
    requiredConsents: [{ type: Input }],
    consentChanged: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMvZGlhbG9nL2Zvcm0vYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBTS9FLE1BQU0sT0FBTyw2QkFBNkI7SUF5QnhDO1FBeEJBLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVwRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFZeEIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBR2hDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBRzdCLENBQUM7SUFFVSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLHdCQUF3QixDQUFDLEtBQUssQ0FDN0QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyRCxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDVixLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyw4QkFBOEIsRUFDdkUsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSztZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsUUFBd0I7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJO1FBQ2pCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ2hFLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJO2dCQUN6RCxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxVQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsc2xEQUFzRDthQUN2RDs7Ozs7K0JBUUUsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt1QkFHL0MsS0FBSztzQkFHTCxLQUFLOytCQUdMLEtBQUs7NkJBR0wsTUFBTTs7OztJQWxCUCxrREFBc0I7O0lBQ3RCLHNEQUFvRDs7SUFDcEQsaUVBQTZDOztJQUM3QywwREFBMEI7O0lBQzFCLHdEQUF3Qjs7SUFFeEIseURBQzZDOztJQUU3QyxpREFDMEI7O0lBRTFCLGdEQUMwQjs7SUFFMUIseURBQ2dDOztJQUVoQyx1REFJSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbiAgQ29uc2VudFRlbXBsYXRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFub255bW91cy1jb25zZW50LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5vbnltb3VzLWNvbnNlbnQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGNvbnNlbnRHaXZlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc2VudEdpdmVuVHJhbnNsYXRpb24kOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGFjY29yZGlvbkV4cGFuZGVkID0gZmFsc2U7XG4gIGFjY29yZGlvbkhlaWdodCA9ICcwcHgnO1xuXG4gIEBWaWV3Q2hpbGQoJ2FjY29yZGlvbkNvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgYWNjb3JkaW9uQ29udGVudDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcblxuICBASW5wdXQoKVxuICBjb25zZW50OiBBbm9ueW1vdXNDb25zZW50O1xuXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgQE91dHB1dCgpXG4gIGNvbnNlbnRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgdGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZTtcbiAgfT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uc2VudCkge1xuICAgICAgdGhpcy5jb25zZW50R2l2ZW4kLm5leHQoXG4gICAgICAgIHRoaXMuY29uc2VudC5jb25zZW50U3RhdGUgPT09IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jb25zZW50R2l2ZW5UcmFuc2xhdGlvbiQgPSB0aGlzLmNvbnNlbnRHaXZlbiQucGlwZShcbiAgICAgIG1hcChnaXZlbiA9PlxuICAgICAgICBnaXZlbiA/ICdhbm9ueW1vdXNDb25zZW50cy5kaWFsb2cub24nIDogJ2Fub255bW91c0NvbnNlbnRzLmRpYWxvZy5vZmYnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnNlbnRHaXZlbiQubmV4dCghdGhpcy5jb25zZW50R2l2ZW4kLnZhbHVlKTtcblxuICAgIHRoaXMuY29uc2VudENoYW5nZWQuZW1pdCh7XG4gICAgICBnaXZlbjogdGhpcy5jb25zZW50R2l2ZW4kLnZhbHVlLFxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVBY2NvcmRpb24oa2V5RXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IGV4cGFuZCA9IHRydWU7XG4gICAgaWYgKGtleUV2ZW50ICYmIGtleUV2ZW50LmtleSAhPT0gJyAnICYmIGtleUV2ZW50LmtleSAhPT0gJ0VudGVyJykge1xuICAgICAgZXhwYW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGV4cGFuZCkge1xuICAgICAgdGhpcy5hY2NvcmRpb25FeHBhbmRlZCA9ICF0aGlzLmFjY29yZGlvbkV4cGFuZGVkO1xuICAgICAgdGhpcy5hY2NvcmRpb25IZWlnaHQgPSB0aGlzLmFjY29yZGlvbkV4cGFuZGVkXG4gICAgICAgID8gYCR7dGhpcy5hY2NvcmRpb25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0fXB4YFxuICAgICAgICA6ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGlzUmVxdWlyZWQodGVtcGxhdGVJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZUlkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29uc2VudEdpdmVuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=