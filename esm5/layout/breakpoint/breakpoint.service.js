/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
var BreakpointService = /** @class */ (function () {
    function BreakpointService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(function (event) { return _this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth); }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakpointService.prototype, "breakpoints", {
        get: /**
         * @return {?}
         */
        function () {
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
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    BreakpointService.prototype.getBreakpoint = /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    function (windowWidth) {
        /** @type {?} */
        var breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    };
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    BreakpointService.prototype.getClosest = /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    function (windowWidth) {
        var _this = this;
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(function (br) { return windowWidth >= _this.getSize(br); });
    };
    /**
     * @protected
     * @param {?} breakpoint
     * @return {?}
     */
    BreakpointService.prototype.getSize = /**
     * @protected
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        return this.config.breakpoints ? this.config.breakpoints[breakpoint] : 576;
    };
    Object.defineProperty(BreakpointService.prototype, "window", {
        get: /**
         * @return {?}
         */
        function () {
            return this.winRef.nativeWindow;
        },
        enumerable: true,
        configurable: true
    });
    BreakpointService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    BreakpointService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: LayoutConfig }
    ]; };
    /** @nocollapse */ BreakpointService.ngInjectableDef = i0.defineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.inject(i1.WindowRef), i0.inject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
    return BreakpointService;
}());
export { BreakpointService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUVuRTtJQUlFLDJCQUFvQixNQUFpQixFQUFVLE1BQW9CO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUcsQ0FBQztJQUV2RSxzQkFBSSwwQ0FBVzs7OztRQUFmO1lBQUEsaUJBVUM7WUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNsQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQVEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQXJELENBQXFELENBQUMsRUFDbkUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQVc7Ozs7UUFBZjtZQUNFLE9BQU87Z0JBQ0wsVUFBVSxDQUFDLEVBQUU7Z0JBQ2IsVUFBVSxDQUFDLEVBQUU7Z0JBQ2IsVUFBVSxDQUFDLEVBQUU7Z0JBQ2IsVUFBVSxDQUFDLEVBQUU7Z0JBQ2IsVUFBVSxDQUFDLEVBQUU7YUFDZCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7OztJQUVTLHlDQUFhOzs7OztJQUF2QixVQUF3QixXQUFtQjs7WUFDbkMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE9BQU8sVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBRVMsc0NBQVU7Ozs7O0lBQXBCLFVBQXFCLFdBQW9CO1FBQXpDLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDdEM7UUFFRCxPQUFPLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsV0FBVyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFFUyxtQ0FBTzs7Ozs7SUFBakIsVUFBa0IsVUFBc0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7O2dCQWpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLFNBQVM7Z0JBUUcsWUFBWTs7OzRCQVRqQztDQTZEQyxBQWxERCxJQWtEQztTQS9DWSxpQkFBaUI7Ozs7OztJQUNoQixtQ0FBeUI7Ozs7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4ge1xuICAgIGlmICghdGhpcy53aW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihCUkVBS1BPSU5ULnhzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21FdmVudCh0aGlzLndpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgIHN0YXJ0V2l0aCh7IHRhcmdldDogdGhpcy53aW5kb3cgfSksXG4gICAgICBtYXAoZXZlbnQgPT4gdGhpcy5nZXRCcmVha3BvaW50KCg8V2luZG93PmV2ZW50LnRhcmdldCkuaW5uZXJXaWR0aCkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgQlJFQUtQT0lOVC54cyxcbiAgICAgIEJSRUFLUE9JTlQuc20sXG4gICAgICBCUkVBS1BPSU5ULm1kLFxuICAgICAgQlJFQUtQT0lOVC5sZyxcbiAgICAgIEJSRUFLUE9JTlQueGwsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoOiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gdGhpcy5nZXRDbG9zZXN0KHdpbmRvd1dpZHRoKTtcbiAgICByZXR1cm4gQlJFQUtQT0lOVFticmVha3BvaW50IHx8IEJSRUFLUE9JTlQubGddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBpZiAoIXdpbmRvd1dpZHRoKSB7XG4gICAgICB3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoIDwgdGhpcy5nZXRTaXplKEJSRUFLUE9JTlQueHMpXG4gICAgICA/IEJSRUFLUE9JTlQueHNcbiAgICAgIDogdGhpcy5icmVha3BvaW50cy5yZXZlcnNlKCkuZmluZChiciA9PiB3aW5kb3dXaWR0aCA+PSB0aGlzLmdldFNpemUoYnIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTaXplKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5icmVha3BvaW50cyA/IHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogNTc2O1xuICB9XG5cbiAgZ2V0IHdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c7XG4gIH1cbn1cbiJdfQ==