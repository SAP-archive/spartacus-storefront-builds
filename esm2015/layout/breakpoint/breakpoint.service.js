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
 * - `xs`: 0 - 576px
 * - `sm`: 576px - 768px
 * - `md`: 768px - 992px
 * - `lg`: 992px - 1200px
 * - `xl`: > 1200px
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
     * This method tries to match the closest breakpoint for the give
     * window size. We'll fallback to the `largest` size in case the window
     * is greater than the largest configurable breakpoint.
     */
    getBreakpoint(windowWidth) {
        var _a, _b;
        return ((_a = this.breakpoints.find((br) => windowWidth <= this.getSize(br))) !== null && _a !== void 0 ? _a : (_b = this.breakpoints) === null || _b === void 0 ? void 0 : _b[this.breakpoints.length - 1]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUlMLFlBQVksR0FDYixNQUFNLHlCQUF5QixDQUFDOzs7O0FBRWpDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixZQUNZLE1BQWlCLEVBQ2pCLFlBQTBCLEVBQ0wsUUFBYTtRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVY5QyxnQkFBVyxHQUEyQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3JFLG9CQUFvQixFQUFFLENBQ3ZCO1lBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMs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RWpELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksT0FBTyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7WUFDeEMsT0FBTyxnQkFBMEIsQ0FBQztTQUNuQzthQUFNLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFO1lBQy9CLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVTLFVBQVUsQ0FBQyxVQUFzQjs7UUFDekMsYUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBZ0IsMENBQUUsR0FBRyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxhQUFhLENBQUMsV0FBbUI7O1FBQ3pDLE9BQU8sT0FDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMseUNBQzlELElBQUksQ0FBQyxXQUFXLDBDQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDL0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsTUFBTTs7UUFDbEIsT0FBTyxPQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLFdBQVcsS0FBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztZQXBLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTNCUSxTQUFTO1lBT2hCLFlBQVk7NENBa0NULE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQnJlYWtQb2ludCxcbiAgQlJFQUtQT0lOVCxcbiAgTGF5b3V0QnJlYWtQb2ludHMsXG4gIExheW91dENvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuXG4vKipcbiAqIFRoZSBgQnJlYWtwb2ludFNlcnZpY2VgIHJlc29sdmVzIHRoZSB2YXJpb3VzIHNjcmVlbiBzaXplcyB0aGF0IGFyZSB1c2VkIGluXG4gKiB0aGUgc3RvcmVmcm9udC4gVGhlIHNjcmVlbiBzaXplcyBhcmUgZ2xvYmFsbHkgY29uZmlndXJhYmxlIGJhc2VkIG9uIHlvdXJcbiAqIGxheW91dCByZXF1aXJlbWVudHMuIFlvdSBjYW4gYWRqdXN0IHRoZSBzY3JlZW4gc2l6ZXMgYnkgc2V0dGluZyB0aGUgbWluaW11bVxuICogYW5kL29yIG1heGltdW0gc2l6ZSBmb3IgYSBicmVha3BvaW50LCBhcyB3ZWxsIGFzIGV4dGVuZGluZyB0aGUgY29uZmlndXJhdGlvblxuICogd2l0aCBuZXcgc2NyZWVucy5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgYEJyZWFrcG9pbnRTZXJ2aWNlYCBpcyBiYXNlZCBvbiB0aGUgYnJlYWtwb2ludHMgZnJvbSB0aGVcbiAqIEJvb3RzdHJhcCB1aSBsaWJyYXJ5OlxuICogLSBgeHNgOiAwIC0gNTc2cHhcbiAqIC0gYHNtYDogNTc2cHggLSA3NjhweFxuICogLSBgbWRgOiA3NjhweCAtIDk5MnB4XG4gKiAtIGBsZ2A6IDk5MnB4IC0gMTIwMHB4XG4gKiAtIGB4bGA6ID4gMTIwMHB4XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIHByaXZhdGUgX2JyZWFrcG9pbnRzOiBCUkVBS1BPSU5UW107XG5cbiAgYnJlYWtwb2ludCQ6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4gPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKVxuICAgID8gdGhpcy53aW5SZWYucmVzaXplJC5waXBlKFxuICAgICAgICBtYXAoKGV2ZW50KSA9PiB0aGlzLmdldEJyZWFrcG9pbnQoKDxXaW5kb3c+ZXZlbnQudGFyZ2V0KS5pbm5lcldpZHRoKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICA6IG9mKHRoaXMuZmFsbGJhY2tCcmVha3BvaW50KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55XG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnJlYWtwb2ludHMgZm9yIHRoZSBzdG9yZWZyb250IGxheW91dC5cbiAgICpcbiAgICogVGhlIGJyZWFrcG9pbnRzIGFyZSBkcml2ZW4gYnkgdGhlIGBMYXlvdXRDb25maWcuYnJlYWtwb2ludHNgIGFuZCBzb3J0ZWQgYmFzZWQgb25cbiAgICogdGhlIGdpdmVuIHNjcmVlbiBzaXplLlxuICAgKi9cbiAgZ2V0IGJyZWFrcG9pbnRzKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgaWYgKCF0aGlzLl9icmVha3BvaW50cykge1xuICAgICAgdGhpcy5fYnJlYWtwb2ludHMgPSB0aGlzLnJlc29sdmVCcmVha3BvaW50c0Zyb21Db25maWcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFrcG9pbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIF9tYXhpbXVtXyBzaXplIGZvciB0aGUgYnJlYWtwb2ludCwgZ2l2ZW4gYnkgdGhlIGBMYXlvdXRDb25maWcuYnJlYWtwb2ludHNgXG4gICAqIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldE1heFNpemUoYnJlYWtwb2ludCkgPz9cbiAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gZGlyZWN0IG1heCB2YWx1ZSBvciBleHBsaWNpdCBtYXggdmFsdWVcbiAgICAgIC8vIHdlIG11c3QgZGVyaXZlIHRoZSBtYXggdmFsdWUgZnJvbSB0aGUgcHJldmlvdXMgbWluXG4gICAgICB0aGlzLmdldE1pblNpemUoXG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHM/Llt0aGlzLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCkgKyAxXVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgc21hbGxlciB0aGFuIHRoZSBtYXhpbXVtIHNpemUgb2YgdGhlXG4gICAqIGdpdmVuIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIElmIHRoZSBnaXZlbiBicmVha3BvaW50IGlzIGBCUkVBS1BPSU5ULm1kYCwgdGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYCB3aGVuIHRoZVxuICAgKiB3aW5kb3cgaW5uZXJXaWR0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5tZGAuXG4gICAqL1xuICBpc0Rvd24oYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBtYXAoKGJyKSA9PlxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDEpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbmltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQuc21gLlxuICAgKi9cbiAgaXNVcChicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnIpID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UodGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpKVxuICAgICAgICAgIC5pbmNsdWRlcyhicilcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBicmVha3BvaW50IGZpdHMgaW4gdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUuXG4gICAqL1xuICBpc0VxdWFsKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKG1hcCgoYnIpID0+IGJyID09PSBicmVha3BvaW50KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmFsbGJhY2sgYnJlYWtwb2ludCBpbiBjYXNlIG5vIGJyZWFrcG9pbnQgY2FuIGJlIHJlc29sdmVkLiBUaGlzIGlzXG4gICAqIHR5cGljYWxseSB0aGUgY2FzZSB3aGVuIHdlJ3JlIG9uIFNTUiB3aXRob3V0IGFuIGFjdHVhbCB3aW5kb3cuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IHNjcmVlbiBzaXplIChtb2JpbGUgZmlyc3QpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmYWxsYmFja0JyZWFrcG9pbnQoKTogQlJFQUtQT0lOVCB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHM/LlswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgYnJlYWtwb2ludHMgYW5kIHNvcnRzIHRoZW0gYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmVkIHNpemUuXG4gICAqXG4gICAqIFRoZSBzb3J0IG9yZGVyIGlzIGJ5IHNtYWxsIHRvIGxhcmdlIHNjcmVlbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUJyZWFrcG9pbnRzRnJvbUNvbmZpZygpOiBCUkVBS1BPSU5UW10ge1xuICAgIGNvbnN0IHNvcnRCeVNjcmVlblNpemUgPSAobmV4dDogQlJFQUtQT0lOVCwgcHJldjogQlJFQUtQT0lOVCk6IG51bWJlciA9PiB7XG4gICAgICBjb25zdCBtYXhOZXh0ID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuZ2V0TWluU2l6ZShuZXh0KSArIDEgfHwgMCxcbiAgICAgICAgdGhpcy5nZXRNYXhTaXplKG5leHQpIHx8IDBcbiAgICAgICk7XG4gICAgICBjb25zdCBtYXhQcmV2ID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuZ2V0TWluU2l6ZShwcmV2KSArIDEgfHwgMCxcbiAgICAgICAgdGhpcy5nZXRNYXhTaXplKHByZXYpIHx8IDBcbiAgICAgICk7XG4gICAgICByZXR1cm4gbWF4TmV4dCA8IG1heFByZXYgPyAtMSA6IDA7XG4gICAgfTtcbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKHRoaXMuY29uZmlnKSBhcyBCUkVBS1BPSU5UW10pLnNvcnQoc29ydEJ5U2NyZWVuU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BvaW50LCBnaXZlbiBieSB0aGVcbiAgICogYExheW91dENvbmZpZy5icmVha3BvaW50c2AgY29uZmlndXJhdGlvbi4gV2Ugd2lsbCB0cnkgdG8gcmVzb2x2ZSB0aGVcbiAgICogbWF4IHNpemUgZm9ybSB0aGUgY3VycmVudCBicmVha3BvaW50LCBidXQgaWYgdGhpcyBpcyBub3QgYXZhaWxhYmxlLCB3ZVxuICAgKiByZXNvbHZlIGl0IGZvcm0gdGhlIG5leHQgYnJlYWtwb2ludFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE1heFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgY29uc3QgYnJlYWtwb2ludENvbmZpZyA9IHRoaXMuY29uZmlnW2JyZWFrcG9pbnRdO1xuXG4gICAgaWYgKCFicmVha3BvaW50Q29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB3ZSB0cmVhdCBudW1iZXJzIGFzIHRoZSBtYXggbnVtYmVyIGJ5IGRlZmF1bHRcbiAgICBpZiAodHlwZW9mIGJyZWFrcG9pbnRDb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludENvbmZpZyBhcyBudW1iZXI7XG4gICAgfSBlbHNlIGlmIChicmVha3BvaW50Q29uZmlnLm1heCkge1xuICAgICAgcmV0dXJuIGJyZWFrcG9pbnRDb25maWcubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWluU2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnW2JyZWFrcG9pbnRdIGFzIEJyZWFrUG9pbnQpPy5taW47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGBCUkVBS1BPSU5UYCBmb3IgdGhlIGdpdmVuIHdpbmRvdyBzaXplLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB0cmllcyB0byBtYXRjaCB0aGUgY2xvc2VzdCBicmVha3BvaW50IGZvciB0aGUgZ2l2ZVxuICAgKiB3aW5kb3cgc2l6ZS4gV2UnbGwgZmFsbGJhY2sgdG8gdGhlIGBsYXJnZXN0YCBzaXplIGluIGNhc2UgdGhlIHdpbmRvd1xuICAgKiBpcyBncmVhdGVyIHRoYW4gdGhlIGxhcmdlc3QgY29uZmlndXJhYmxlIGJyZWFrcG9pbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnJlYWtwb2ludHMuZmluZCgoYnIpID0+IHdpbmRvd1dpZHRoIDw9IHRoaXMuZ2V0U2l6ZShicikpID8/XG4gICAgICB0aGlzLmJyZWFrcG9pbnRzPy5bdGhpcy5icmVha3BvaW50cy5sZW5ndGggLSAxXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnKCk6IExheW91dEJyZWFrUG9pbnRzIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRDb25maWc/LmJyZWFrcG9pbnRzIHx8IHt9O1xuICB9XG59XG4iXX0=