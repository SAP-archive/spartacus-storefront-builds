/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { SkipLinkService } from '../service/skip-link.service';
import { observeOn } from 'rxjs/operators';
var SkipLinkComponent = /** @class */ (function () {
    function SkipLinkComponent(skipLinkService) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFVRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWU7YUFDdEQsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsMkVBQTJFO0lBRXhELENBQUM7Ozs7OztJQUV4RCwwQ0FBYzs7Ozs7SUFBZCxVQUFlLFFBQWtCLEVBQUUsS0FBaUI7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQ2pDLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxDQUFDLFFBQVEsRUFDakIsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGdDQUFJOzs7OztJQUFKLFVBQUssS0FBaUI7UUFDcEIsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxLQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMzRCxDQUFDLG1CQUFhLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsV0FBVyxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoRTtJQUNILENBQUM7Ozs7O0lBQ0QsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQy9ELENBQUMsbUJBQWEsQ0FBQyxtQkFBYSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLEVBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8scUNBQVM7Ozs7O0lBQWpCLFVBQWtCLE9BQWE7UUFDN0IsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sWUFBWSxXQUFXLENBQUM7SUFDckQsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsOFVBQXlDO29CQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUFEsZUFBZTs7SUE0Q3hCLHdCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FwQ1ksaUJBQWlCOzs7SUFDNUIsdUNBRW1DOzs7OztJQUV2Qiw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBhc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2tpcExpbmsgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc2tpcC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NraXAtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua0NvbXBvbmVudCB7XG4gIHNraXBMaW5rcyQ6IE9ic2VydmFibGU8U2tpcExpbmtbXT4gPSB0aGlzLnNraXBMaW5rU2VydmljZVxuICAgIC5nZXRTa2lwTGlua3MoKVxuICAgIC5waXBlKG9ic2VydmVPbihhc3luY1NjaGVkdWxlcikpOyAvLyBkZWxheSB2aWV3J3MgdXBkYXRlIHRvIGF2b2lkIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3JcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNraXBMaW5rU2VydmljZTogU2tpcExpbmtTZXJ2aWNlKSB7fVxuXG4gIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluaywgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNraXBMaW5rU2VydmljZS5zY3JvbGxUb1RhcmdldChcbiAgICAgIHNraXBMaW5rLnRhcmdldCxcbiAgICAgIHNraXBMaW5rLnBvc2l0aW9uLFxuICAgICAgZXZlbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBza2lwIGxpbmsgYnkgcmVtb3ZpbmcgdGhlIGZvY3VzLlxuICAgKi9cbiAgYmx1cihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gIH1cblxuICB0YWJOZXh0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5uZXh0U2libGluZykpIHtcbiAgICAgICg8SFRNTEVsZW1lbnQ+KDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLm5leHRTaWJsaW5nKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuICB0YWJQcmV2KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50KCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAoPEhUTUxFbGVtZW50Pig8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5wcmV2aW91c1NpYmxpbmcpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VsZW1lbnQoZWxlbWVudDogTm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG59XG4iXX0=