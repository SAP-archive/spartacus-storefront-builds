/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
export class BreakpointService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @return {?}
     */
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(event => this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth)), distinctUntilChanged());
    }
    /**
     * @return {?}
     */
    get breakpoints() {
        return [
            BREAKPOINT.xs,
            BREAKPOINT.sm,
            BREAKPOINT.md,
            BREAKPOINT.lg,
            BREAKPOINT.xl,
        ];
    }
    /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    getBreakpoint(windowWidth) {
        /** @type {?} */
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(br => windowWidth >= this.getSize(br));
    }
    /**
     * @protected
     * @param {?} breakpoint
     * @return {?}
     */
    getSize(breakpoint) {
        return this.config.breakpoints ? this.config.breakpoints[breakpoint] : 576;
    }
    /**
     * @return {?}
     */
    get window() {
        return this.winRef.nativeWindow;
    }
}
BreakpointService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHbkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7Ozs7SUFFdkUsSUFBSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQVEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDbkUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsV0FBbUI7O2NBQ25DLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVTLFVBQVUsQ0FBQyxXQUFvQjtRQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUN0QztRQUVELE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVTLE9BQU8sQ0FBQyxVQUFzQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7OztZQS9DRixVQUFVOzs7O1lBVkYsU0FBUztZQVFHLFlBQVk7Ozs7Ozs7SUFJbkIsbUNBQXlCOzs7OztJQUFFLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmLCBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIGdldCBicmVha3BvaW50JCgpOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+IHtcbiAgICBpZiAoIXRoaXMud2luZG93KSB7XG4gICAgICByZXR1cm4gb2YoQlJFQUtQT0lOVC54cyk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tRXZlbnQodGhpcy53aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICBzdGFydFdpdGgoeyB0YXJnZXQ6IHRoaXMud2luZG93IH0pLFxuICAgICAgbWFwKGV2ZW50ID0+IHRoaXMuZ2V0QnJlYWtwb2ludCgoPFdpbmRvdz5ldmVudC50YXJnZXQpLmlubmVyV2lkdGgpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IGJyZWFrcG9pbnRzKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIEJSRUFLUE9JTlQueHMsXG4gICAgICBCUkVBS1BPSU5ULnNtLFxuICAgICAgQlJFQUtQT0lOVC5tZCxcbiAgICAgIEJSRUFLUE9JTlQubGcsXG4gICAgICBCUkVBS1BPSU5ULnhsLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHRoaXMuZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aCk7XG4gICAgcmV0dXJuIEJSRUFLUE9JTlRbYnJlYWtwb2ludCB8fCBCUkVBS1BPSU5ULmxnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0KHdpbmRvd1dpZHRoPzogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgaWYgKCF3aW5kb3dXaWR0aCkge1xuICAgICAgd2luZG93V2lkdGggPSB0aGlzLndpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IHRoaXMuZ2V0U2l6ZShCUkVBS1BPSU5ULnhzKVxuICAgICAgPyBCUkVBS1BPSU5ULnhzXG4gICAgICA6IHRoaXMuYnJlYWtwb2ludHMucmV2ZXJzZSgpLmZpbmQoYnIgPT4gd2luZG93V2lkdGggPj0gdGhpcy5nZXRTaXplKGJyKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnJlYWtwb2ludHMgPyB0aGlzLmNvbmZpZy5icmVha3BvaW50c1ticmVha3BvaW50XSA6IDU3NjtcbiAgfVxuXG4gIGdldCB3aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93O1xuICB9XG59XG4iXX0=