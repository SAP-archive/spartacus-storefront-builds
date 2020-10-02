import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
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
        return this.breakpoint$.pipe(tap((br) => console.log('isDown', br, this.breakpoints)), map((br) => this.breakpoints
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFJTCxZQUFZLEdBQ2IsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUVqQzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFVNUIsWUFDWSxNQUFpQixFQUNqQixZQUEwQixFQUNMLFFBQWE7UUFGbEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFWOUMsZ0JBQVcsR0FBMkIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsS0FBSyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNyRSxvQkFBb0IsRUFBRSxDQUN2QjtZQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtC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eyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEJyZWFrUG9pbnQsXG4gIEJSRUFLUE9JTlQsXG4gIExheW91dEJyZWFrUG9pbnRzLFxuICBMYXlvdXRDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuLyoqXG4gKiBUaGUgYEJyZWFrcG9pbnRTZXJ2aWNlYCByZXNvbHZlcyB0aGUgdmFyaW91cyBzY3JlZW4gc2l6ZXMgdGhhdCBhcmUgdXNlZCBpblxuICogdGhlIHN0b3JlZnJvbnQuIFRoZSBzY3JlZW4gc2l6ZXMgYXJlIGdsb2JhbGx5IGNvbmZpZ3VyYWJsZSBiYXNlZCBvbiB5b3VyXG4gKiBsYXlvdXQgcmVxdWlyZW1lbnRzLiBZb3UgY2FuIGFkanVzdCB0aGUgc2NyZWVuIHNpemVzIGJ5IHNldHRpbmcgdGhlIG1pbmltdW1cbiAqIGFuZC9vciBtYXhpbXVtIHNpemUgZm9yIGEgYnJlYWtwb2ludCwgYXMgd2VsbCBhcyBleHRlbmRpbmcgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIHdpdGggbmV3IHNjcmVlbnMuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIGBCcmVha3BvaW50U2VydmljZWAgaXMgYmFzZWQgb24gdGhlIGJyZWFrcG9pbnRzIGZyb20gdGhlXG4gKiBCb290c3RyYXAgdWkgbGlicmFyeTpcbiAqIC0gYHhzYDogMCAtIDU3NnB4XG4gKiAtIGBzbWA6IDU3NnB4IC0gNzY4cHhcbiAqIC0gYG1kYDogNzY4cHggLSA5OTJweFxuICogLSBgbGdgOiA5OTJweCAtIDEyMDBweFxuICogLSBgeGxgOiA+IDEyMDBweFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICBwcml2YXRlIF9icmVha3BvaW50czogQlJFQUtQT0lOVFtdO1xuXG4gIGJyZWFrcG9pbnQkOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+ID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSlcbiAgICA/IHRoaXMud2luUmVmLnJlc2l6ZSQucGlwZShcbiAgICAgICAgbWFwKChldmVudCkgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApXG4gICAgOiBvZih0aGlzLmZhbGxiYWNrQnJlYWtwb2ludCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBsYXlvdXRDb25maWc6IExheW91dENvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJyZWFrcG9pbnRzIGZvciB0aGUgc3RvcmVmcm9udCBsYXlvdXQuXG4gICAqXG4gICAqIFRoZSBicmVha3BvaW50cyBhcmUgZHJpdmVuIGJ5IHRoZSBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYCBhbmQgc29ydGVkIGJhc2VkIG9uXG4gICAqIHRoZSBnaXZlbiBzY3JlZW4gc2l6ZS5cbiAgICovXG4gIGdldCBicmVha3BvaW50cygpOiBCUkVBS1BPSU5UW10ge1xuICAgIGlmICghdGhpcy5fYnJlYWtwb2ludHMpIHtcbiAgICAgIHRoaXMuX2JyZWFrcG9pbnRzID0gdGhpcy5yZXNvbHZlQnJlYWtwb2ludHNGcm9tQ29uZmlnKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9icmVha3BvaW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBfbWF4aW11bV8gc2l6ZSBmb3IgdGhlIGJyZWFrcG9pbnQsIGdpdmVuIGJ5IHRoZSBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYFxuICAgKiBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRNYXhTaXplKGJyZWFrcG9pbnQpID8/XG4gICAgICAvLyBpZiB0aGVyZSdzIG5vIGRpcmVjdCBtYXggdmFsdWUgb3IgZXhwbGljaXQgbWF4IHZhbHVlXG4gICAgICAvLyB3ZSBtdXN0IGRlcml2ZSB0aGUgbWF4IHZhbHVlIGZyb20gdGhlIHByZXZpb3VzIG1pblxuICAgICAgdGhpcy5nZXRNaW5TaXplKFxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzPy5bdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpICsgMV1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGUgbWF4aW11bSBzaXplIG9mIHRoZVxuICAgKiBnaXZlbiBicmVha3BvaW50LlxuICAgKlxuICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICogd2luZG93IGlubmVyV2lkdGggaXMgc21hbGxlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQubWRgLlxuICAgKi9cbiAgaXNEb3duKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKFxuICAgICAgdGFwKChicikgPT4gY29uc29sZS5sb2coJ2lzRG93bicsIGJyLCB0aGlzLmJyZWFrcG9pbnRzKSksXG4gICAgICBtYXAoKGJyKSA9PlxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDEpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbmltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQuc21gLlxuICAgKi9cbiAgaXNVcChicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnIpID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UodGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpKVxuICAgICAgICAgIC5pbmNsdWRlcyhicilcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBicmVha3BvaW50IGZpdHMgaW4gdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUuXG4gICAqL1xuICBpc0VxdWFsKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKG1hcCgoYnIpID0+IGJyID09PSBicmVha3BvaW50KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmFsbGJhY2sgYnJlYWtwb2ludCBpbiBjYXNlIG5vIGJyZWFrcG9pbnQgY2FuIGJlIHJlc29sdmVkLiBUaGlzIGlzXG4gICAqIHR5cGljYWxseSB0aGUgY2FzZSB3aGVuIHdlJ3JlIG9uIFNTUiB3aXRob3V0IGFuIGFjdHVhbCB3aW5kb3cuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIHNtYWxsZXN0IHNjcmVlbiBzaXplIChtb2JpbGUgZmlyc3QpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmYWxsYmFja0JyZWFrcG9pbnQoKTogQlJFQUtQT0lOVCB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHM/LlswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgYnJlYWtwb2ludHMgYW5kIHNvcnRzIHRoZW0gYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmVkIHNpemUuXG4gICAqXG4gICAqIFRoZSBzb3J0IG9yZGVyIGlzIGJ5IHNtYWxsIHRvIGxhcmdlIHNjcmVlbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZUJyZWFrcG9pbnRzRnJvbUNvbmZpZygpOiBCUkVBS1BPSU5UW10ge1xuICAgIGNvbnN0IHNvcnRCeVNjcmVlblNpemUgPSAobmV4dDogQlJFQUtQT0lOVCwgcHJldjogQlJFQUtQT0lOVCk6IG51bWJlciA9PiB7XG4gICAgICBjb25zdCBtYXhOZXh0ID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuZ2V0TWluU2l6ZShuZXh0KSArIDEgfHwgMCxcbiAgICAgICAgdGhpcy5nZXRNYXhTaXplKG5leHQpIHx8IDBcbiAgICAgICk7XG4gICAgICBjb25zdCBtYXhQcmV2ID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuZ2V0TWluU2l6ZShwcmV2KSArIDEgfHwgMCxcbiAgICAgICAgdGhpcy5nZXRNYXhTaXplKHByZXYpIHx8IDBcbiAgICAgICk7XG4gICAgICByZXR1cm4gbWF4TmV4dCA8IG1heFByZXYgPyAtMSA6IDA7XG4gICAgfTtcbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKHRoaXMuY29uZmlnKSBhcyBCUkVBS1BPSU5UW10pLnNvcnQoc29ydEJ5U2NyZWVuU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BvaW50LCBnaXZlbiBieSB0aGVcbiAgICogYExheW91dENvbmZpZy5icmVha3BvaW50c2AgY29uZmlndXJhdGlvbi4gV2Ugd2lsbCB0cnkgdG8gcmVzb2x2ZSB0aGVcbiAgICogbWF4IHNpemUgZm9ybSB0aGUgY3VycmVudCBicmVha3BvaW50LCBidXQgaWYgdGhpcyBpcyBub3QgYXZhaWxhYmxlLCB3ZVxuICAgKiByZXNvbHZlIGl0IGZvcm0gdGhlIG5leHQgYnJlYWtwb2ludFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldE1heFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgY29uc3QgYnJlYWtwb2ludENvbmZpZyA9IHRoaXMuY29uZmlnW2JyZWFrcG9pbnRdO1xuXG4gICAgaWYgKCFicmVha3BvaW50Q29uZmlnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB3ZSB0cmVhdCBudW1iZXJzIGFzIHRoZSBtYXggbnVtYmVyIGJ5IGRlZmF1bHRcbiAgICBpZiAodHlwZW9mIGJyZWFrcG9pbnRDb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYnJlYWtwb2ludENvbmZpZyBhcyBudW1iZXI7XG4gICAgfSBlbHNlIGlmIChicmVha3BvaW50Q29uZmlnLm1heCkge1xuICAgICAgcmV0dXJuIGJyZWFrcG9pbnRDb25maWcubWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWluU2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnW2JyZWFrcG9pbnRdIGFzIEJyZWFrUG9pbnQpPy5taW47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGBCUkVBS1BPSU5UYCBmb3IgdGhlIGdpdmVuIHdpbmRvdyBzaXplLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB0cmllcyB0byBtYXRjaCB0aGUgY2xvc2VzdCBicmVha3BvaW50IGZvciB0aGUgZ2l2ZVxuICAgKiB3aW5kb3cgc2l6ZS4gV2UnbGwgZmFsbGJhY2sgdG8gdGhlIGBsYXJnZXN0YCBzaXplIGluIGNhc2UgdGhlIHdpbmRvd1xuICAgKiBpcyBncmVhdGVyIHRoYW4gdGhlIGxhcmdlc3QgY29uZmlndXJhYmxlIGJyZWFrcG9pbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYnJlYWtwb2ludHMuZmluZCgoYnIpID0+IHdpbmRvd1dpZHRoIDw9IHRoaXMuZ2V0U2l6ZShicikpID8/XG4gICAgICB0aGlzLmJyZWFrcG9pbnRzPy5bdGhpcy5icmVha3BvaW50cy5sZW5ndGggLSAxXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgY29uZmlnKCk6IExheW91dEJyZWFrUG9pbnRzIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRDb25maWc/LmJyZWFrcG9pbnRzIHx8IHt9O1xuICB9XG59XG4iXX0=