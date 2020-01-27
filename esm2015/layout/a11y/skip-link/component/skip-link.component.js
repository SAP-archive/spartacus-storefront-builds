/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { SkipLinkService } from '../service/skip-link.service';
import { observeOn } from 'rxjs/operators';
export class SkipLinkComponent {
    // delay view's update to avoid ExpressionChangedAfterItHasBeenCheckedError
    /**
     * @param {?} skipLinkService
     */
    constructor(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService
            .getSkipLinks()
            .pipe(observeOn(asyncScheduler)); // delay view's update to avoid ExpressionChangedAfterItHasBeenCheckedError
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFLNUIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWU7YUFDdEQsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsMkVBQTJFO0lBRXhELENBQUM7Ozs7OztJQUV4RCxjQUFjLENBQUMsUUFBa0IsRUFBRSxLQUFpQjtRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDakMsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsUUFBUSxFQUNqQixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELElBQUksQ0FBQyxLQUFpQjtRQUNwQixDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzNELENBQUMsbUJBQWEsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDL0QsQ0FBQyxtQkFBYSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGVBQWUsRUFBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsT0FBYTtRQUM3QixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxZQUFZLFdBQVcsQ0FBQztJQUNyRCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4VUFBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsZUFBZTs7OztJQVN0Qix1Q0FFbUM7Ozs7O0lBRXZCLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGFzeW5jU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTa2lwTGluayB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2tpcC1saW5rLnNlcnZpY2UnO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1za2lwLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2tpcC1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rQ29tcG9uZW50IHtcbiAgc2tpcExpbmtzJDogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiA9IHRoaXMuc2tpcExpbmtTZXJ2aWNlXG4gICAgLmdldFNraXBMaW5rcygpXG4gICAgLnBpcGUob2JzZXJ2ZU9uKGFzeW5jU2NoZWR1bGVyKSk7IC8vIGRlbGF5IHZpZXcncyB1cGRhdGUgdG8gYXZvaWQgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2tpcExpbmtTZXJ2aWNlOiBTa2lwTGlua1NlcnZpY2UpIHt9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc2tpcExpbmtTZXJ2aWNlLnNjcm9sbFRvVGFyZ2V0KFxuICAgICAgc2tpcExpbmsudGFyZ2V0LFxuICAgICAgc2tpcExpbmsucG9zaXRpb24sXG4gICAgICBldmVudFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHNraXAgbGluayBieSByZW1vdmluZyB0aGUgZm9jdXMuXG4gICAqL1xuICBibHVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgfVxuXG4gIHRhYk5leHQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnQoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLm5leHRTaWJsaW5nKSkge1xuICAgICAgKDxIVE1MRWxlbWVudD4oPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkubmV4dFNpYmxpbmcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIHRhYlByZXYoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnQoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICg8SFRNTEVsZW1lbnQ+KDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLnByZXZpb3VzU2libGluZykuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRWxlbWVudChlbGVtZW50OiBOb2RlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==