/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
export class SkipLinkComponent {
    /**
     * @param {?} skipLinkService
     */
    constructor(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService.getSkipLinks();
    }
    /**
     * @param {?} skipLink
     * @param {?} event
     * @return {?}
     */
    scrollToTarget(skipLink, event) {
        this.skipLinkService.scrollToTarget(skipLink.target, skipLink.position, event);
    }
    /**
     * Hides the skip link by removing the focus.
     * @param {?} event
     * @return {?}
     */
    blur(event) {
        ((/** @type {?} */ (event.target))).blur();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tabNext(event) {
        if (this.isElement(((/** @type {?} */ (event.target))).nextSibling)) {
            ((/** @type {?} */ (((/** @type {?} */ (event.target))).nextSibling))).focus();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tabPrev(event) {
        if (this.isElement(((/** @type {?} */ (event.target))).previousSibling)) {
            ((/** @type {?} */ (((/** @type {?} */ (event.target))).previousSibling))).focus();
        }
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    isElement(element) {
        return !!element && element instanceof HTMLElement;
    }
}
SkipLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-skip-link',
                template: "<button\n  *ngFor=\"let skipLink of skipLinks$ | async\"\n  (click)=\"scrollToTarget(skipLink, $event)\"\n  (keydown.esc)=\"blur($event)\"\n  (keydown.arrowright)=\"tabNext($event)\"\n  (keydown.arrowleft)=\"tabPrev($event)\"\n>\n  {{ 'skipLink.skipTo' | cxTranslate }}\n  {{ skipLink.i18nKey | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SkipLinkComponent.ctorParameters = () => [
    { type: SkipLinkService }
];
if (false) {
    /** @type {?} */
    SkipLinkComponent.prototype.skipLinks$;
    /**
     * @type {?}
     * @private
     */
    SkipLinkComponent.prototype.skipLinkService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPL0QsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUc1QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGcEQsZUFBVSxHQUEyQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWxCLENBQUM7Ozs7OztJQUV4RCxjQUFjLENBQUMsUUFBa0IsRUFBRSxLQUFpQjtRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDakMsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsUUFBUSxFQUNqQixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELElBQUksQ0FBQyxLQUFpQjtRQUNwQixDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzNELENBQUMsbUJBQWEsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDL0QsQ0FBQyxtQkFBYSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGVBQWUsRUFBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsT0FBYTtRQUM3QixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxZQUFZLFdBQVcsQ0FBQztJQUNyRCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4VUFBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsZUFBZTs7OztJQVF0Qix1Q0FBeUU7Ozs7O0lBRTdELDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNraXBMaW5rIH0gZnJvbSAnLi4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9za2lwLWxpbmsuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNraXAtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9za2lwLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtDb21wb25lbnQge1xuICBza2lwTGlua3MkOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+ID0gdGhpcy5za2lwTGlua1NlcnZpY2UuZ2V0U2tpcExpbmtzKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZSkge31cblxuICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmssIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5za2lwTGlua1NlcnZpY2Uuc2Nyb2xsVG9UYXJnZXQoXG4gICAgICBza2lwTGluay50YXJnZXQsXG4gICAgICBza2lwTGluay5wb3NpdGlvbixcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgc2tpcCBsaW5rIGJ5IHJlbW92aW5nIHRoZSBmb2N1cy5cbiAgICovXG4gIGJsdXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICB9XG5cbiAgdGFiTmV4dChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudCgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkubmV4dFNpYmxpbmcpKSB7XG4gICAgICAoPEhUTUxFbGVtZW50Pig8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5uZXh0U2libGluZykuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgdGFiUHJldihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudCgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgKDxIVE1MRWxlbWVudD4oPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkucHJldmlvdXNTaWJsaW5nKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50KGVsZW1lbnQ6IE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxufVxuIl19