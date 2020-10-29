import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { LayoutConfig, } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
/**
 * The `BreakpointService` resolves the various screen sizes that are used in
 * the storefront. The screen sizes are globally configurable based on your
 * layout requirements. You can adjust the screen sizes by setting the minimum
 * and/or maximum size for a breakpoint, as well as extending the configuration
 * with new screens.
 *
 * By default, the `BreakpointService` is based on the breakpoints from the
 * Bootstrap ui library:
 * - `xs`: < 576px
 * - `sm`: 576px - 767px
 * - `md`: 768px - 991px
 * - `lg`: 992px - 1199px
 * - `xl`: >= 1200px
 */
export class BreakpointService {
    constructor(winRef, layoutConfig, platform) {
        this.winRef = winRef;
        this.layoutConfig = layoutConfig;
        this.platform = platform;
        this.breakpoint$ = isPlatformBrowser(this.platform)
            ? this.winRef.resize$.pipe(map((event) => this.getBreakpoint(event.target.innerWidth)), distinctUntilChanged())
            : of(this.fallbackBreakpoint);
    }
    /**
     * Returns the breakpoints for the storefront layout.
     *
     * The breakpoints are driven by the `LayoutConfig.breakpoints` and sorted based on
     * the given screen size.
     */
    get breakpoints() {
        if (!this._breakpoints) {
            this._breakpoints = this.resolveBreakpointsFromConfig();
        }
        return this._breakpoints;
    }
    /**
     * Returns the _maximum_ size for the breakpoint, given by the `LayoutConfig.breakpoints`
     * configuration.
     */
    getSize(breakpoint) {
        var _a, _b;
        return ((_a = this.getMaxSize(breakpoint)) !== null && _a !== void 0 ? _a : 
        // if there's no direct max value or explicit max value
        // we must derive the max value from the previous min
        this.getMinSize((_b = this.breakpoints) === null || _b === void 0 ? void 0 : _b[this.breakpoints.indexOf(breakpoint) + 1]));
    }
    /**
     * Indicates whether the current screen size is smaller than the maximum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is smaller than the configured size of `BREAKPOINT.md`.
     */
    isDown(breakpoint) {
        return this.breakpoint$.pipe(map((br) => this.breakpoints
            .slice(0, this.breakpoints.indexOf(breakpoint) + 1)
            .includes(br)));
    }
    /**
     * Indicates whether the current screen size is larger than the minimum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is larger than the configured size of `BREAKPOINT.sm`.
     */
    isUp(breakpoint) {
        return this.breakpoint$.pipe(map((br) => this.breakpoints
            .slice(this.breakpoints.indexOf(breakpoint))
            .includes(br)));
    }
    /**
     * Indicates whether the given breakpoint fits in the current screen size.
     */
    isEqual(breakpoint) {
        return this.breakpoint$.pipe(map((br) => br === breakpoint));
    }
    /**
     * Returns the fallback breakpoint in case no breakpoint can be resolved. This is
     * typically the case when we're on SSR without an actual window.
     *
     * Returns the smallest screen size (mobile first).
     */
    get fallbackBreakpoint() {
        var _a;
        return (_a = this.breakpoints) === null || _a === void 0 ? void 0 : _a[0];
    }
    /**
     * Resolves the breakpoints and sorts them according to the configured size.
     *
     * The sort order is by small to large screens.
     */
    resolveBreakpointsFromConfig() {
        const sortByScreenSize = (next, prev) => {
            const maxNext = Math.max(this.getMinSize(next) + 1 || 0, this.getMaxSize(next) || 0);
            const maxPrev = Math.max(this.getMinSize(prev) + 1 || 0, this.getMaxSize(prev) || 0);
            return maxNext < maxPrev ? -1 : 0;
        };
        return Object.keys(this.config).sort(sortByScreenSize);
    }
    /**
     * Returns the _maximum_ size for the breakpoint, given by the
     * `LayoutConfig.breakpoints` configuration. We will try to resolve the
     * max size form the current breakpoint, but if this is not available, we
     * resolve it form the next breakpoint
     */
    getMaxSize(breakpoint) {
        const breakpointConfig = this.config[breakpoint];
        if (!breakpointConfig) {
            return null;
        }
        // we treat numbers as the max number by default
        if (typeof breakpointConfig === 'number') {
            return breakpointConfig;
        }
        else if (breakpointConfig.max) {
            return breakpointConfig.max;
        }
        else {
            return null;
        }
    }
    getMinSize(breakpoint) {
        var _a;
        return (_a = this.config[breakpoint]) === null || _a === void 0 ? void 0 : _a.min;
    }
    /**
     * Returns a `BREAKPOINT` for the given window size.
     *
     * This method tries to match the closest breakpoint for the given
     * window size. We'll fallback to the `largest` size in case the window
     * is greater than the largest configurable breakpoint.
     *
     * The windowWidth should be smaller than the maximum size of any of the
     * screen sizes defined in the `LayoutConfig.breakpoints`.
     */
    getBreakpoint(windowWidth) {
        var _a, _b;
        return ((_a = this.breakpoints.find((br) => windowWidth < this.getSize(br))) !== null && _a !== void 0 ? _a : (_b = this.breakpoints) === null || _b === void 0 ? void 0 : _b[this.breakpoints.length - 1]);
    }
    /**
     * Helper method to return the breakpoint configuration.
     */
    get config() {
        var _a;
        return ((_a = this.layoutConfig) === null || _a === void 0 ? void 0 : _a.breakpoints) || {};
    }
}
BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: BreakpointService, providedIn: "root" });
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUlMLFlBQVksR0FDYixNQUFNLHlCQUF5QixDQUFDOzs7O0FBRWpDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixZQUNZLE1BQWlCLEVBQ2pCLFlBQTBCLEVBQ0wsUUFBYTtRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVY5QyxnQkFBVyxHQUEyQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3JFLG9CQUFvQixFQUFFLENBQ3ZCO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMs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RWpELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7WUFDeEMsT0FBTyxnQkFBMEIsQ0FBQztTQUNuQzthQUFNLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQy9CLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVTLFVBQVUsQ0FBQyxVQUFzQjs7UUFDekMsYUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBZ0IsMENBQUUsR0FBRyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDTyxhQUFhLENBQUMsV0FBbUI7O1FBQ3pDLE9BQU8sT0FDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMseUNBQzdELElBQUksQ0FBQyxXQUFXLDBDQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDL0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsTUFBTTs7UUFDbEIsT0FBTyxPQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLFdBQVcsS0FBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztZQXZLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTNCUSxTQUFTO1lBT2hCLFlBQVk7NENBa0NULE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQnJlYWtQb2ludCxcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0QnJlYWtQb2ludHMsXG4gIExheW91dENvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuXG4vKipcbiAqIFRoZSBgQnJlYWtwb2ludFNlcnZpY2VgIHJlc29sdmVzIHRoZSB2YXJpb3VzIHNjcmVlbiBzaXplcyB0aGF0IGFyZSB1c2VkIGluXG4gKiB0aGUgc3RvcmVmcm9udC4gVGhlIHNjcmVlbiBzaXplcyBhcmUgZ2xvYmFsbHkgY29uZmlndXJhYmxlIGJhc2VkIG9uIHlvdXJcbiAqIGxheW91dCByZXF1aXJlbWVudHMuIFlvdSBjYW4gYWRqdXN0IHRoZSBzY3JlZW4gc2l6ZXMgYnkgc2V0dGluZyB0aGUgbWluaW11bVxuICogYW5kL29yIG1heGltdW0gc2l6ZSBmb3IgYSBicmVha3BvaW50LCBhcyB3ZWxsIGFzIGV4dGVuZGluZyB0aGUgY29uZmlndXJhdGlvblxuICogd2l0aCBuZXcgc2NyZWVucy5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgYEJyZWFrcG9pbnRTZXJ2aWNlYCBpcyBiYXNlZCBvbiB0aGUgYnJlYWtwb2ludHMgZnJvbSB0aGVcbiAqIEJvb3RzdHJhcCB1aSBsaWJyYXJ5OlxuICogLSBgeHNgOiA8IDU3NnB4XG4gKiAtIGBzbWA6IDU3NnB4IC0gNzY3cHhcbiAqIC0gYG1kYDogNzY4cHggLSA5OTFweFxuICogLSBgbGdgOiA5OTJweCAtIDExOTlweFxuICogLSBgeGxgOiA+PSAxMjAwcHhcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfYnJlYWtwb2ludHM6IEJSRUFLUE9JTlRbXTtcblxuICBicmVha3BvaW50JDogT2JzZXJ2YWJsZTxCUkVBS1BPSU5UPiA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pXG4gICAgPyB0aGlzLndpblJlZi5yZXNpemUkLnBpcGUoXG4gICAgICAgIG1hcCgoZXZlbnQpID0+IHRoaXMuZ2V0QnJlYWtwb2ludCgoPFdpbmRvdz5ldmVudC50YXJnZXQpLmlubmVyV2lkdGgpKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgIDogb2YodGhpcy5mYWxsYmFja0JyZWFrcG9pbnQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnlcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBicmVha3BvaW50cyBmb3IgdGhlIHN0b3JlZnJvbnQgbGF5b3V0LlxuICAgKlxuICAgKiBUaGUgYnJlYWtwb2ludHMgYXJlIGRyaXZlbiBieSB0aGUgYExheW91dENvbmZpZy5icmVha3BvaW50c2AgYW5kIHNvcnRlZCBiYXNlZCBvblxuICAgKiB0aGUgZ2l2ZW4gc2NyZWVuIHNpemUuXG4gICAqL1xuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICBpZiAoIXRoaXMuX2JyZWFrcG9pbnRzKSB7XG4gICAgICB0aGlzLl9icmVha3BvaW50cyA9IHRoaXMucmVzb2x2ZUJyZWFrcG9pbnRzRnJvbUNvbmZpZygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYnJlYWtwb2ludHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BvaW50LCBnaXZlbiBieSB0aGUgYExheW91dENvbmZpZy5icmVha3BvaW50c2BcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGdldFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0TWF4U2l6ZShicmVha3BvaW50KSA/P1xuICAgICAgLy8gaWYgdGhlcmUncyBubyBkaXJlY3QgbWF4IHZhbHVlIG9yIGV4cGxpY2l0IG1heCB2YWx1ZVxuICAgICAgLy8gd2UgbXVzdCBkZXJpdmUgdGhlIG1heCB2YWx1ZSBmcm9tIHRoZSBwcmV2aW91cyBtaW5cbiAgICAgIHRoaXMuZ2V0TWluU2l6ZShcbiAgICAgICAgdGhpcy5icmVha3BvaW50cz8uW3RoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDFdXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1heGltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIHNtYWxsZXIgdGhhbiB0aGUgY29uZmlndXJlZCBzaXplIG9mIGBCUkVBS1BPSU5ULm1kYC5cbiAgICovXG4gIGlzRG93bihicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnIpID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpICsgMSlcbiAgICAgICAgICAuaW5jbHVkZXMoYnIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBsYXJnZXIgdGhhbiB0aGUgbWluaW11bSBzaXplIG9mIHRoZVxuICAgKiBnaXZlbiBicmVha3BvaW50LlxuICAgKlxuICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICogd2luZG93IGlubmVyV2lkdGggaXMgbGFyZ2VyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5zbWAuXG4gICAqL1xuICBpc1VwKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKFxuICAgICAgbWFwKChicikgPT5cbiAgICAgICAgdGhpcy5icmVha3BvaW50c1xuICAgICAgICAgIC5zbGljZSh0aGlzLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCkpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGJyZWFrcG9pbnQgZml0cyBpbiB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZS5cbiAgICovXG4gIGlzRXF1YWwoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQkLnBpcGUobWFwKChicikgPT4gYnIgPT09IGJyZWFrcG9pbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmYWxsYmFjayBicmVha3BvaW50IGluIGNhc2Ugbm8gYnJlYWtwb2ludCBjYW4gYmUgcmVzb2x2ZWQuIFRoaXMgaXNcbiAgICogdHlwaWNhbGx5IHRoZSBjYXNlIHdoZW4gd2UncmUgb24gU1NSIHdpdGhvdXQgYW4gYWN0dWFsIHdpbmRvdy5cbiAgICpcbiAgICogUmV0dXJucyB0aGUgc21hbGxlc3Qgc2NyZWVuIHNpemUgKG1vYmlsZSBmaXJzdCkuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGZhbGxiYWNrQnJlYWtwb2ludCgpOiBCUkVBS1BPSU5UIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50cz8uWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBicmVha3BvaW50cyBhbmQgc29ydHMgdGhlbSBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgc2l6ZS5cbiAgICpcbiAgICogVGhlIHNvcnQgb3JkZXIgaXMgYnkgc21hbGwgdG8gbGFyZ2Ugc2NyZWVucy5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlQnJlYWtwb2ludHNGcm9tQ29uZmlnKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgY29uc3Qgc29ydEJ5U2NyZWVuU2l6ZSA9IChuZXh0OiBCUkVBS1BPSU5ULCBwcmV2OiBCUkVBS1BPSU5UKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IG1heE5leHQgPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5nZXRNaW5TaXplKG5leHQpICsgMSB8fCAwLFxuICAgICAgICB0aGlzLmdldE1heFNpemUobmV4dCkgfHwgMFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG1heFByZXYgPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5nZXRNaW5TaXplKHByZXYpICsgMSB8fCAwLFxuICAgICAgICB0aGlzLmdldE1heFNpemUocHJldikgfHwgMFxuICAgICAgKTtcbiAgICAgIHJldHVybiBtYXhOZXh0IDwgbWF4UHJldiA/IC0xIDogMDtcbiAgICB9O1xuICAgIHJldHVybiAoT2JqZWN0LmtleXModGhpcy5jb25maWcpIGFzIEJSRUFLUE9JTlRbXSkuc29ydChzb3J0QnlTY3JlZW5TaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBfbWF4aW11bV8gc2l6ZSBmb3IgdGhlIGJyZWFrcG9pbnQsIGdpdmVuIGJ5IHRoZVxuICAgKiBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYCBjb25maWd1cmF0aW9uLiBXZSB3aWxsIHRyeSB0byByZXNvbHZlIHRoZVxuICAgKiBtYXggc2l6ZSBmb3JtIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQsIGJ1dCBpZiB0aGlzIGlzIG5vdCBhdmFpbGFibGUsIHdlXG4gICAqIHJlc29sdmUgaXQgZm9ybSB0aGUgbmV4dCBicmVha3BvaW50XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TWF4U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICBjb25zdCBicmVha3BvaW50Q29uZmlnID0gdGhpcy5jb25maWdbYnJlYWtwb2ludF07XG5cbiAgICBpZiAoIWJyZWFrcG9pbnRDb25maWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHdlIHRyZWF0IG51bWJlcnMgYXMgdGhlIG1heCBudW1iZXIgYnkgZGVmYXVsdFxuICAgIGlmICh0eXBlb2YgYnJlYWtwb2ludENvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBicmVha3BvaW50Q29uZmlnIGFzIG51bWJlcjtcbiAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnRDb25maWcubWF4KSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludENvbmZpZy5tYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRNaW5TaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5jb25maWdbYnJlYWtwb2ludF0gYXMgQnJlYWtQb2ludCk/Lm1pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYEJSRUFLUE9JTlRgIGZvciB0aGUgZ2l2ZW4gd2luZG93IHNpemUuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHRyaWVzIHRvIG1hdGNoIHRoZSBjbG9zZXN0IGJyZWFrcG9pbnQgZm9yIHRoZSBnaXZlblxuICAgKiB3aW5kb3cgc2l6ZS4gV2UnbGwgZmFsbGJhY2sgdG8gdGhlIGBsYXJnZXN0YCBzaXplIGluIGNhc2UgdGhlIHdpbmRvd1xuICAgKiBpcyBncmVhdGVyIHRoYW4gdGhlIGxhcmdlc3QgY29uZmlndXJhYmxlIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIFRoZSB3aW5kb3dXaWR0aCBzaG91bGQgYmUgc21hbGxlciB0aGFuIHRoZSBtYXhpbXVtIHNpemUgb2YgYW55IG9mIHRoZVxuICAgKiBzY3JlZW4gc2l6ZXMgZGVmaW5lZCBpbiB0aGUgYExheW91dENvbmZpZy5icmVha3BvaW50c2AuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnJlYWtwb2ludHMuZmluZCgoYnIpID0+IHdpbmRvd1dpZHRoIDwgdGhpcy5nZXRTaXplKGJyKSkgPz9cbiAgICAgIHRoaXMuYnJlYWtwb2ludHM/Llt0aGlzLmJyZWFrcG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgYnJlYWtwb2ludCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWcoKTogTGF5b3V0QnJlYWtQb2ludHMge1xuICAgIHJldHVybiB0aGlzLmxheW91dENvbmZpZz8uYnJlYWtwb2ludHMgfHwge307XG4gIH1cbn1cbiJdfQ==