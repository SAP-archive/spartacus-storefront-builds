/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkipLinkService } from '../service/skip-link.service';
var SkipLinkComponent = /** @class */ (function () {
    function SkipLinkComponent(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService.getSkipLinks();
    }
    /**
     * @param {?} skipLink
     * @param {?} event
     * @return {?}
     */
    SkipLinkComponent.prototype.scrollToTarget = /**
     * @param {?} skipLink
     * @param {?} event
     * @return {?}
     */
    function (skipLink, event) {
        this.skipLinkService.scrollToTarget(skipLink.target, skipLink.position, event);
    };
    /**
     * Hides the skip link by removing the focus.
     */
    /**
     * Hides the skip link by removing the focus.
     * @param {?} event
     * @return {?}
     */
    SkipLinkComponent.prototype.blur = /**
     * Hides the skip link by removing the focus.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        ((/** @type {?} */ (event.target))).blur();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SkipLinkComponent.prototype.tabNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isElement(((/** @type {?} */ (event.target))).nextSibling)) {
            ((/** @type {?} */ (((/** @type {?} */ (event.target))).nextSibling))).focus();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SkipLinkComponent.prototype.tabPrev = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isElement(((/** @type {?} */ (event.target))).previousSibling)) {
            ((/** @type {?} */ (((/** @type {?} */ (event.target))).previousSibling))).focus();
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    SkipLinkComponent.prototype.isElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return !!element && element instanceof HTMLElement;
    };
    SkipLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-skip-link',
                    template: "<button\n  *ngFor=\"let skipLink of skipLinks$ | async\"\n  (click)=\"scrollToTarget(skipLink, $event)\"\n  (keydown.esc)=\"blur($event)\"\n  (keydown.arrowright)=\"tabNext($event)\"\n  (keydown.arrowleft)=\"tabPrev($event)\"\n>\n  {{ 'skipLink.skipTo' | cxTranslate }}\n  {{ skipLink.i18nKey | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SkipLinkComponent.ctorParameters = function () { return [
        { type: SkipLinkService }
    ]; };
    return SkipLinkComponent;
}());
export { SkipLinkComponent };
if (false) {
    /** @type {?} */
    SkipLinkComponent.prototype.skipLinks$;
    /**
     * @type {?}
     * @private
     */
    SkipLinkComponent.prototype.skipLinkService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0Q7SUFRRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQixDQUFDOzs7Ozs7SUFFeEQsMENBQWM7Ozs7O0lBQWQsVUFBZSxRQUFrQixFQUFFLEtBQWlCO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUNqQyxRQUFRLENBQUMsTUFBTSxFQUNmLFFBQVEsQ0FBQyxRQUFRLEVBQ2pCLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxnQ0FBSTs7Ozs7SUFBSixVQUFLLEtBQWlCO1FBQ3BCLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDM0QsQ0FBQyxtQkFBYSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFdBQVcsRUFBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEU7SUFDSCxDQUFDOzs7OztJQUNELG1DQUFPOzs7O0lBQVAsVUFBUSxLQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMvRCxDQUFDLG1CQUFhLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsZUFBZSxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwRTtJQUNILENBQUM7Ozs7OztJQUVPLHFDQUFTOzs7OztJQUFqQixVQUFrQixPQUFhO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLFlBQVksV0FBVyxDQUFDO0lBQ3JELENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDhVQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGVBQWU7O0lBeUN4Qix3QkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLGlCQUFpQjs7O0lBQzVCLHVDQUF5RTs7Ozs7SUFFN0QsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2tpcExpbmsgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2tpcC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NraXAtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0NvbXBvbmVudCB7XG4gIHNraXBMaW5rcyQ6IE9ic2VydmFibGU8U2tpcExpbmtbXT4gPSB0aGlzLnNraXBMaW5rU2VydmljZS5nZXRTa2lwTGlua3MoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNraXBMaW5rU2VydmljZTogU2tpcExpbmtTZXJ2aWNlKSB7fVxuXG4gIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluaywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5zY3JvbGxUb1RhcmdldChcbiAgICAgIHNraXBMaW5rLnRhcmdldCxcbiAgICAgIHNraXBMaW5rLnBvc2l0aW9uLFxuICAgICAgZXZlbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBza2lwIGxpbmsgYnkgcmVtb3ZpbmcgdGhlIGZvY3VzLlxuICAgKi9cbiAgYmx1cihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gIH1cblxuICB0YWJOZXh0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5uZXh0U2libGluZykpIHtcbiAgICAgICg8SFRNTEVsZW1lbnQ+KDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLm5leHRTaWJsaW5nKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuICB0YWJQcmV2KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAoPEhUTUxFbGVtZW50Pig8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5wcmV2aW91c1NpYmxpbmcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VsZW1lbnQoZWxlbWVudDogTm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG59XG4iXX0=