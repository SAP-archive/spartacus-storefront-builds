var _a;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
var DEFAULT_BREAKPOINTS = (_a = {},
    _a[BREAKPOINT.xs] = 576,
    _a[BREAKPOINT.sm] = 768,
    _a[BREAKPOINT.md] = 992,
    _a[BREAKPOINT.lg] = 1200,
    _a);
var BreakpointService = /** @class */ (function () {
    function BreakpointService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return this.winRef.resize$.pipe(map(function (event) { return _this.getBreakpoint(event.target.innerWidth); }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the _maximum_ size for the breakpint, given by the `LayoutConfig.breakpoints`
     * configuration. If no configuration is available for the given breakpoint, the
     * method will return the default values:
     * - xs: 567
     * - sm: 768
     * - md: 992
     * - lg: 1200
     */
    BreakpointService.prototype.getSize = function (breakpoint) {
        var _a;
        return ((_a = this.config.breakpoints) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(breakpoint)) ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    };
    Object.defineProperty(BreakpointService.prototype, "breakpoints", {
        /**
         * Returns all available breakpoints for the system.
         */
        get: function () {
            return [
                BREAKPOINT.xs,
                BREAKPOINT.sm,
                BREAKPOINT.md,
                BREAKPOINT.lg,
                BREAKPOINT.xl,
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicates whether the current screen size is smaller than the maximum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is smaller than the configured size of `BREAKPOINT.md`.
     */
    BreakpointService.prototype.isDown = function (breakpoint) {
        var _this = this;
        return this.breakpoint$.pipe(map(function (br) {
            return _this.breakpoints
                .slice(0, _this.breakpoints.indexOf(breakpoint) + 1)
                .includes(br);
        }));
    };
    /**
     * Indicates whether the current screen size is larger than the minimum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is larger than the configured size of `BREAKPOINT.sm`.
     */
    BreakpointService.prototype.isUp = function (breakpoint) {
        var _this = this;
        return this.breakpoint$.pipe(map(function (br) {
            return _this.breakpoints
                .slice(_this.breakpoints.indexOf(breakpoint))
                .includes(br);
        }));
    };
    /**
     * Indicates whether the current screen size fits to the given breakpoint
     */
    BreakpointService.prototype.isEqual = function (breakpoint) {
        return this.breakpoint$.pipe(map(function (br) { return br === breakpoint; }));
    };
    BreakpointService.prototype.getBreakpoint = function (windowWidth) {
        var breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    };
    BreakpointService.prototype.getClosest = function (windowWidth) {
        var _this = this;
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth > this.getSize(BREAKPOINT.lg)
            ? BREAKPOINT.xl
            : this.breakpoints.find(function (br) { return windowWidth <= _this.getSize(br); });
    };
    Object.defineProperty(BreakpointService.prototype, "window", {
        get: function () {
            return this.winRef.nativeWindow;
        },
        enumerable: true,
        configurable: true
    });
    BreakpointService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: LayoutConfig }
    ]; };
    BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
    BreakpointService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], BreakpointService);
    return BreakpointService;
}());
export { BreakpointService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUVuRSxJQUFNLG1CQUFtQjtJQUN2QixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsSUFBSTtPQUN0QixDQUFDO0FBS0Y7SUFDRSwyQkFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFdkUsc0JBQUksMENBQVc7YUFBZjtZQUFBLGlCQVFDO1lBUEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFVLEtBQUssQ0FB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aUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0FvRzdCOzRCQXBIRDtDQW9IQyxBQXBHRCxJQW9HQztTQXBHWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfQlJFQUtQT0lOVFMgPSB7XG4gIFtCUkVBS1BPSU5ULnhzXTogNTc2LFxuICBbQlJFQUtQT0lOVC5zbV06IDc2OCxcbiAgW0JSRUFLUE9JTlQubWRdOiA5OTIsXG4gIFtCUkVBS1BPSU5ULmxnXTogMTIwMCxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4ge1xuICAgIGlmICghdGhpcy53aW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihCUkVBS1BPSU5ULnhzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLnJlc2l6ZSQucGlwZShcbiAgICAgIG1hcChldmVudCA9PiB0aGlzLmdldEJyZWFrcG9pbnQoKDxXaW5kb3c+ZXZlbnQudGFyZ2V0KS5pbm5lcldpZHRoKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBfbWF4aW11bV8gc2l6ZSBmb3IgdGhlIGJyZWFrcGludCwgZ2l2ZW4gYnkgdGhlIGBMYXlvdXRDb25maWcuYnJlYWtwb2ludHNgXG4gICAqIGNvbmZpZ3VyYXRpb24uIElmIG5vIGNvbmZpZ3VyYXRpb24gaXMgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgdGhlXG4gICAqIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZXM6XG4gICAqIC0geHM6IDU2N1xuICAgKiAtIHNtOiA3NjhcbiAgICogLSBtZDogOTkyXG4gICAqIC0gbGc6IDEyMDBcbiAgICovXG4gIGdldFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzPy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KVxuICAgICAgPyB0aGlzLmNvbmZpZy5icmVha3BvaW50c1ticmVha3BvaW50XVxuICAgICAgOiBERUZBVUxUX0JSRUFLUE9JTlRTW2JyZWFrcG9pbnRdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGF2YWlsYWJsZSBicmVha3BvaW50cyBmb3IgdGhlIHN5c3RlbS5cbiAgICovXG4gIGdldCBicmVha3BvaW50cygpOiBCUkVBS1BPSU5UW10ge1xuICAgIHJldHVybiBbXG4gICAgICBCUkVBS1BPSU5ULnhzLFxuICAgICAgQlJFQUtQT0lOVC5zbSxcbiAgICAgIEJSRUFLUE9JTlQubWQsXG4gICAgICBCUkVBS1BPSU5ULmxnLFxuICAgICAgQlJFQUtQT0lOVC54bCxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGUgbWF4aW11bSBzaXplIG9mIHRoZVxuICAgKiBnaXZlbiBicmVha3BvaW50LlxuICAgKlxuICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICogd2luZG93IGlubmVyV2lkdGggaXMgc21hbGxlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQubWRgLlxuICAgKi9cbiAgaXNEb3duKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKFxuICAgICAgbWFwKGJyID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpICsgMSlcbiAgICAgICAgICAuaW5jbHVkZXMoYnIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY3VycmVudCBzY3JlZW4gc2l6ZSBpcyBsYXJnZXIgdGhhbiB0aGUgbWluaW11bSBzaXplIG9mIHRoZVxuICAgKiBnaXZlbiBicmVha3BvaW50LlxuICAgKlxuICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICogd2luZG93IGlubmVyV2lkdGggaXMgbGFyZ2VyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5zbWAuXG4gICAqL1xuICBpc1VwKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50JC5waXBlKFxuICAgICAgbWFwKGJyID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UodGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpKVxuICAgICAgICAgIC5pbmNsdWRlcyhicilcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGZpdHMgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnRcbiAgICovXG4gIGlzRXF1YWwoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQkLnBpcGUobWFwKGJyID0+IGJyID09PSBicmVha3BvaW50KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHRoaXMuZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aCk7XG4gICAgcmV0dXJuIEJSRUFLUE9JTlRbYnJlYWtwb2ludCB8fCBCUkVBS1BPSU5ULmxnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0KHdpbmRvd1dpZHRoPzogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgaWYgKCF3aW5kb3dXaWR0aCkge1xuICAgICAgd2luZG93V2lkdGggPSB0aGlzLndpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA+IHRoaXMuZ2V0U2l6ZShCUkVBS1BPSU5ULmxnKVxuICAgICAgPyBCUkVBS1BPSU5ULnhsXG4gICAgICA6IHRoaXMuYnJlYWtwb2ludHMuZmluZChiciA9PiB3aW5kb3dXaWR0aCA8PSB0aGlzLmdldFNpemUoYnIpKTtcbiAgfVxuXG4gIGdldCB3aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93O1xuICB9XG59XG4iXX0=