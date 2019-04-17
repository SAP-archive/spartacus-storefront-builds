/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, startWith, map, distinctUntilChanged, } from 'rxjs/operators';
import { LayoutConfig, BREAKPOINT } from '../config/layout-config';
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
        return this.config.breakpoints[breakpoint];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsR0FBRyxFQUNILG9CQUFvQixHQUNyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHbkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7Ozs7SUFFdkUsSUFBSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQVEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDbkUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsV0FBbUI7O2NBQ25DLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVTLFVBQVUsQ0FBQyxXQUFvQjtRQUN2QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUN0QztRQUVELE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVTLE9BQU8sQ0FBQyxVQUFzQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7OztZQS9DRixVQUFVOzs7O1lBVkYsU0FBUztZQVFULFlBQVk7Ozs7Ozs7SUFJUCxtQ0FBeUI7Ozs7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgc3RhcnRXaXRoLFxuICBtYXAsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcsIEJSRUFLUE9JTlQgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4ge1xuICAgIGlmICghdGhpcy53aW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihCUkVBS1BPSU5ULnhzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21FdmVudCh0aGlzLndpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgIHN0YXJ0V2l0aCh7IHRhcmdldDogdGhpcy53aW5kb3cgfSksXG4gICAgICBtYXAoZXZlbnQgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgQlJFQUtQT0lOVC54cyxcbiAgICAgIEJSRUFLUE9JTlQuc20sXG4gICAgICBCUkVBS1BPSU5ULm1kLFxuICAgICAgQlJFQUtQT0lOVC5sZyxcbiAgICAgIEJSRUFLUE9JTlQueGwsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gdGhpcy5nZXRDbG9zZXN0KHdpbmRvd1dpZHRoKTtcbiAgICByZXR1cm4gQlJFQUtQT0lOVFticmVha3BvaW50IHx8IEJSRUFLUE9JTlQubGddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBpZiAoIXdpbmRvd1dpZHRoKSB7XG4gICAgICB3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgdGhpcy5nZXRTaXplKEJSRUFLUE9JTlQueHMpXG4gICAgICA/IEJSRUFLUE9JTlQueHNcbiAgICAgIDogdGhpcy5icmVha3BvaW50cy5yZXZlcnNlKCkuZmluZChiciA9PiB3aW5kb3dXaWR0aCA+PSB0aGlzLmdldFNpemUoYnIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgfVxuXG4gIGdldCB3aW5kb3coKSB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19