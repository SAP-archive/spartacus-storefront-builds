var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../config/layout-config";
/** @type {?} */
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
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    BreakpointService.prototype.getSize = /**
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    };
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth); })), distinctUntilChanged());
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
            : this.breakpoints.reverse().find((/**
             * @param {?} br
             * @return {?}
             */
            function (br) { return windowWidth >= _this.getSize(br); }));
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
    /** @nocollapse */ BreakpointService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lBRTdELG1CQUFtQjtJQUN2QixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsR0FBRztJQUNwQixHQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsSUFBSTtPQUN0QjtBQUVEO0lBSUUsMkJBQW9CLE1BQWlCLEVBQVUsTUFBb0I7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDOzs7OztJQUV2RSxtQ0FBTzs7OztJQUFQLFVBQVEsVUFBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHNCQUFJLDBDQUFXOzs7O1FBQWY7WUFBQSxpQkFVQztZQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDMUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQ2xDLEdBQUc7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBUSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBckQsQ0FBcUQsRUFBQyxFQUNuRSxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTztnQkFDTCxVQUFVLENBQUMsRUFBRTtnQkFDYixVQUFVLENBQUMsRUFBRTtnQkFDYixVQUFVLENBQUMsRUFBRTtnQkFDYixVQUFVLENBQUMsRUFBRTtnQkFDYixVQUFVLENBQUMsRUFBRTthQUNkLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7O0lBRVMseUNBQWE7Ozs7O0lBQXZCLFVBQXdCLFdBQW1COztZQUNuQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDL0MsT0FBTyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFUyxzQ0FBVTs7Ozs7SUFBcEIsVUFBcUIsV0FBb0I7UUFBekMsaUJBUUM7UUFQQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUN0QztRQUVELE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxXQUFXLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxzQkFBSSxxQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbkJRLFNBQVM7Z0JBUUcsWUFBWTs7OzRCQVRqQztDQXNFQyxBQXBERCxJQW9EQztTQWpEWSxpQkFBaUI7Ozs7OztJQUNoQixtQ0FBeUI7Ozs7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfQlJFQUtQT0lOVFMgPSB7XG4gIFtCUkVBS1BPSU5ULnhzXTogNTc2LFxuICBbQlJFQUtQT0lOVC5zbV06IDc2OCxcbiAgW0JSRUFLUE9JTlQubWRdOiA5OTIsXG4gIFtCUkVBS1BPSU5ULmxnXTogMTIwMCxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnJlYWtwb2ludHNcbiAgICAgID8gdGhpcy5jb25maWcuYnJlYWtwb2ludHNbYnJlYWtwb2ludF1cbiAgICAgIDogREVGQVVMVF9CUkVBS1BPSU5UU1ticmVha3BvaW50XTtcbiAgfVxuXG4gIGdldCBicmVha3BvaW50JCgpOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+IHtcbiAgICBpZiAoIXRoaXMud2luZG93KSB7XG4gICAgICByZXR1cm4gb2YoQlJFQUtQT0lOVC54cyk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tRXZlbnQodGhpcy53aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICBzdGFydFdpdGgoeyB0YXJnZXQ6IHRoaXMud2luZG93IH0pLFxuICAgICAgbWFwKGV2ZW50ID0+IHRoaXMuZ2V0QnJlYWtwb2ludCgoPFdpbmRvdz5ldmVudC50YXJnZXQpLmlubmVyV2lkdGgpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IGJyZWFrcG9pbnRzKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIEJSRUFLUE9JTlQueHMsXG4gICAgICBCUkVBS1BPSU5ULnNtLFxuICAgICAgQlJFQUtQT0lOVC5tZCxcbiAgICAgIEJSRUFLUE9JTlQubGcsXG4gICAgICBCUkVBS1BPSU5ULnhsLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHRoaXMuZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aCk7XG4gICAgcmV0dXJuIEJSRUFLUE9JTlRbYnJlYWtwb2ludCB8fCBCUkVBS1BPSU5ULmxnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0KHdpbmRvd1dpZHRoPzogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgaWYgKCF3aW5kb3dXaWR0aCkge1xuICAgICAgd2luZG93V2lkdGggPSB0aGlzLndpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IHRoaXMuZ2V0U2l6ZShCUkVBS1BPSU5ULnhzKVxuICAgICAgPyBCUkVBS1BPSU5ULnhzXG4gICAgICA6IHRoaXMuYnJlYWtwb2ludHMucmV2ZXJzZSgpLmZpbmQoYnIgPT4gd2luZG93V2lkdGggPj0gdGhpcy5nZXRTaXplKGJyKSk7XG4gIH1cblxuICBnZXQgd2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19