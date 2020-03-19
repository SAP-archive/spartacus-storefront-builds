import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
const DEFAULT_BREAKPOINTS = {
    [BREAKPOINT.xs]: 576,
    [BREAKPOINT.sm]: 768,
    [BREAKPOINT.md]: 992,
    [BREAKPOINT.lg]: 1200,
};
let BreakpointService = class BreakpointService {
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return this.winRef.resize$.pipe(map(event => this.getBreakpoint(event.target.innerWidth)), distinctUntilChanged());
    }
    /**
     * Returns the _maximum_ size for the breakpint, given by the `LayoutConfig.breakpoints`
     * configuration. If no configuration is available for the given breakpoint, the
     * method will return the default values:
     * - xs: 567
     * - sm: 768
     * - md: 992
     * - lg: 1200
     */
    getSize(breakpoint) {
        var _a;
        return ((_a = this.config.breakpoints) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(breakpoint)) ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    }
    /**
     * Returns all available breakpoints for the system.
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
     * Indicates whether the current screen size is smaller than the maximum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is smaller than the configured size of `BREAKPOINT.md`.
     */
    isDown(breakpoint) {
        return this.breakpoint$.pipe(map(br => this.breakpoints
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
        return this.breakpoint$.pipe(map(br => this.breakpoints
            .slice(this.breakpoints.indexOf(breakpoint))
            .includes(br)));
    }
    /**
     * Indicates whether the current screen size fits to the given breakpoint
     */
    isEqual(breakpoint) {
        return this.breakpoint$.pipe(map(br => br === breakpoint));
    }
    getBreakpoint(windowWidth) {
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth > this.getSize(BREAKPOINT.lg)
            ? BREAKPOINT.xl
            : this.breakpoints.find(br => windowWidth <= this.getSize(br));
    }
    get window() {
        return this.winRef.nativeWindow;
    }
};
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
BreakpointService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BreakpointService);
export { BreakpointService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRW5FLE1BQU0sbUJBQW1CLEdBQUc7SUFDMUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDcEIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtDQUN0QixDQUFDO0FBS0YsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFdkUsSUFBSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFB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b20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5jb25zdCBERUZBVUxUX0JSRUFLUE9JTlRTID0ge1xuICBbQlJFQUtQT0lOVC54c106IDU3NixcbiAgW0JSRUFLUE9JTlQuc21dOiA3NjgsXG4gIFtCUkVBS1BPSU5ULm1kXTogOTkyLFxuICBbQlJFQUtQT0lOVC5sZ106IDEyMDAsXG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmLCBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIGdldCBicmVha3BvaW50JCgpOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+IHtcbiAgICBpZiAoIXRoaXMud2luZG93KSB7XG4gICAgICByZXR1cm4gb2YoQlJFQUtQT0lOVC54cyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndpblJlZi5yZXNpemUkLnBpcGUoXG4gICAgICBtYXAoZXZlbnQgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BpbnQsIGdpdmVuIGJ5IHRoZSBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYFxuICAgKiBjb25maWd1cmF0aW9uLiBJZiBubyBjb25maWd1cmF0aW9uIGlzIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQsIHRoZVxuICAgKiBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWVzOlxuICAgKiAtIHhzOiA1NjdcbiAgICogLSBzbTogNzY4XG4gICAqIC0gbWQ6IDk5MlxuICAgKiAtIGxnOiAxMjAwXG4gICAqL1xuICBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5icmVha3BvaW50cz8uaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludClcbiAgICAgID8gdGhpcy5jb25maWcuYnJlYWtwb2ludHNbYnJlYWtwb2ludF1cbiAgICAgIDogREVGQVVMVF9CUkVBS1BPSU5UU1ticmVha3BvaW50XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBhdmFpbGFibGUgYnJlYWtwb2ludHMgZm9yIHRoZSBzeXN0ZW0uXG4gICAqL1xuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgQlJFQUtQT0lOVC54cyxcbiAgICAgIEJSRUFLUE9JTlQuc20sXG4gICAgICBCUkVBS1BPSU5ULm1kLFxuICAgICAgQlJFQUtQT0lOVC5sZyxcbiAgICAgIEJSRUFLUE9JTlQueGwsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1heGltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIHNtYWxsZXIgdGhhbiB0aGUgY29uZmlndXJlZCBzaXplIG9mIGBCUkVBS1BPSU5ULm1kYC5cbiAgICovXG4gIGlzRG93bihicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcChiciA9PlxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDEpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbmltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQuc21gLlxuICAgKi9cbiAgaXNVcChicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcChiciA9PlxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzXG4gICAgICAgICAgLnNsaWNlKHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSlcbiAgICAgICAgICAuaW5jbHVkZXMoYnIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBmaXRzIHRvIHRoZSBnaXZlbiBicmVha3BvaW50XG4gICAqL1xuICBpc0VxdWFsKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKG1hcChiciA9PiBiciA9PT0gYnJlYWtwb2ludCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB0aGlzLmdldENsb3Nlc3Qod2luZG93V2lkdGgpO1xuICAgIHJldHVybiBCUkVBS1BPSU5UW2JyZWFrcG9pbnQgfHwgQlJFQUtQT0lOVC5sZ107XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aD86IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGlmICghd2luZG93V2lkdGgpIHtcbiAgICAgIHdpbmRvd1dpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93V2lkdGggPiB0aGlzLmdldFNpemUoQlJFQUtQT0lOVC5sZylcbiAgICAgID8gQlJFQUtQT0lOVC54bFxuICAgICAgOiB0aGlzLmJyZWFrcG9pbnRzLmZpbmQoYnIgPT4gd2luZG93V2lkdGggPD0gdGhpcy5nZXRTaXplKGJyKSk7XG4gIH1cblxuICBnZXQgd2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19