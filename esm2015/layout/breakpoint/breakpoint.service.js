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
        return this.winRef.resize$.pipe(map((event) => this.getBreakpoint(event.target.innerWidth)), distinctUntilChanged());
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
     * Indicates whether the current screen size fits to the given breakpoint
     */
    isEqual(breakpoint) {
        return this.breakpoint$.pipe(map((br) => br === breakpoint));
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
            : this.breakpoints.find((br) => windowWidth <= this.getSize(br));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRW5FLE1BQU0sbUJBQW1CLEdBQUc7SUFDMUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDcEIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtDQUN0QixDQUFDO0FBS0YsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDNUIsWUFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFdkUsSUFBSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFB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ImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuY29uc3QgREVGQVVMVF9CUkVBS1BPSU5UUyA9IHtcbiAgW0JSRUFLUE9JTlQueHNdOiA1NzYsXG4gIFtCUkVBS1BPSU5ULnNtXTogNzY4LFxuICBbQlJFQUtQT0lOVC5tZF06IDk5MixcbiAgW0JSRUFLUE9JTlQubGddOiAxMjAwLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZiwgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZykge31cblxuICBnZXQgYnJlYWtwb2ludCQoKTogT2JzZXJ2YWJsZTxCUkVBS1BPSU5UPiB7XG4gICAgaWYgKCF0aGlzLndpbmRvdykge1xuICAgICAgcmV0dXJuIG9mKEJSRUFLUE9JTlQueHMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53aW5SZWYucmVzaXplJC5waXBlKFxuICAgICAgbWFwKChldmVudCkgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BpbnQsIGdpdmVuIGJ5IHRoZSBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYFxuICAgKiBjb25maWd1cmF0aW9uLiBJZiBubyBjb25maWd1cmF0aW9uIGlzIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQsIHRoZVxuICAgKiBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWVzOlxuICAgKiAtIHhzOiA1NjdcbiAgICogLSBzbTogNzY4XG4gICAqIC0gbWQ6IDk5MlxuICAgKiAtIGxnOiAxMjAwXG4gICAqL1xuICBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5icmVha3BvaW50cz8uaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludClcbiAgICAgID8gdGhpcy5jb25maWcuYnJlYWtwb2ludHNbYnJlYWtwb2ludF1cbiAgICAgIDogREVGQVVMVF9CUkVBS1BPSU5UU1ticmVha3BvaW50XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBhdmFpbGFibGUgYnJlYWtwb2ludHMgZm9yIHRoZSBzeXN0ZW0uXG4gICAqL1xuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgQlJFQUtQT0lOVC54cyxcbiAgICAgIEJSRUFLUE9JTlQuc20sXG4gICAgICBCUkVBS1BPSU5ULm1kLFxuICAgICAgQlJFQUtQT0lOVC5sZyxcbiAgICAgIEJSRUFLUE9JTlQueGwsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBzbWFsbGVyIHRoYW4gdGhlIG1heGltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIHNtYWxsZXIgdGhhbiB0aGUgY29uZmlndXJlZCBzaXplIG9mIGBCUkVBS1BPSU5ULm1kYC5cbiAgICovXG4gIGlzRG93bihicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnIpID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpICsgMSlcbiAgICAgICAgICAuaW5jbHVkZXMoYnIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBsYXJnZXIgdGhhbiB0aGUgbWluaW11bSBzaXplIG9mIHRoZVxuICAgKiBnaXZlbiBicmVha3BvaW50LlxuICAgKlxuICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICogd2luZG93IGlubmVyV2lkdGggaXMgbGFyZ2VyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5zbWAuXG4gICAqL1xuICBpc1VwKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKFxuICAgICAgbWFwKChicikgPT5cbiAgICAgICAgdGhpcy5icmVha3BvaW50c1xuICAgICAgICAgIC5zbGljZSh0aGlzLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCkpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgZml0cyB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludFxuICAgKi9cbiAgaXNFcXVhbChicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShtYXAoKGJyKSA9PiBiciA9PT0gYnJlYWtwb2ludCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB0aGlzLmdldENsb3Nlc3Qod2luZG93V2lkdGgpO1xuICAgIHJldHVybiBCUkVBS1BPSU5UW2JyZWFrcG9pbnQgfHwgQlJFQUtQT0lOVC5sZ107XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aD86IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGlmICghd2luZG93V2lkdGgpIHtcbiAgICAgIHdpbmRvd1dpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93V2lkdGggPiB0aGlzLmdldFNpemUoQlJFQUtQT0lOVC5sZylcbiAgICAgID8gQlJFQUtQT0lOVC54bFxuICAgICAgOiB0aGlzLmJyZWFrcG9pbnRzLmZpbmQoKGJyKSA9PiB3aW5kb3dXaWR0aCA8PSB0aGlzLmdldFNpemUoYnIpKTtcbiAgfVxuXG4gIGdldCB3aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93O1xuICB9XG59XG4iXX0=