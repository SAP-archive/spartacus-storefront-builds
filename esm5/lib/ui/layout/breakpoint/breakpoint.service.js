/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    BreakpointService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: LayoutConfig }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkU7SUFFRSwyQkFBb0IsTUFBaUIsRUFBVSxNQUFvQjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUFHLENBQUM7SUFFdkUsc0JBQUksMENBQVc7Ozs7UUFBZjtZQUFBLGlCQVVDO1lBVEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMxQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLG1CQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLEVBQ25FLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFXOzs7O1FBQWY7WUFDRSxPQUFPO2dCQUNMLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2FBQ2QsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7Ozs7SUFFUyx5Q0FBYTs7Ozs7SUFBdkIsVUFBd0IsV0FBbUI7O1lBQ25DLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxPQUFPLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVTLHNDQUFVOzs7OztJQUFwQixVQUFxQixXQUFvQjtRQUF6QyxpQkFRQztRQVBDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFdBQVcsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRVMsbUNBQU87Ozs7O0lBQWpCLFVBQWtCLFVBQXNCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0UsQ0FBQztJQUVELHNCQUFJLHFDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBOztnQkEvQ0YsVUFBVTs7OztnQkFWRixTQUFTO2dCQVFHLFlBQVk7O0lBa0RqQyx3QkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLGlCQUFpQjs7Ozs7O0lBQ2hCLG1DQUF5Qjs7Ozs7SUFBRSxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzdGFydFdpdGgsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZiwgcHJpdmF0ZSBjb25maWc6IExheW91dENvbmZpZykge31cblxuICBnZXQgYnJlYWtwb2ludCQoKTogT2JzZXJ2YWJsZTxCUkVBS1BPSU5UPiB7XG4gICAgaWYgKCF0aGlzLndpbmRvdykge1xuICAgICAgcmV0dXJuIG9mKEJSRUFLUE9JTlQueHMpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUV2ZW50KHRoaXMud2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgc3RhcnRXaXRoKHsgdGFyZ2V0OiB0aGlzLndpbmRvdyB9KSxcbiAgICAgIG1hcChldmVudCA9PiB0aGlzLmdldEJyZWFrcG9pbnQoKDxXaW5kb3c+ZXZlbnQudGFyZ2V0KS5pbm5lcldpZHRoKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBicmVha3BvaW50cygpOiBCUkVBS1BPSU5UW10ge1xuICAgIHJldHVybiBbXG4gICAgICBCUkVBS1BPSU5ULnhzLFxuICAgICAgQlJFQUtQT0lOVC5zbSxcbiAgICAgIEJSRUFLUE9JTlQubWQsXG4gICAgICBCUkVBS1BPSU5ULmxnLFxuICAgICAgQlJFQUtQT0lOVC54bCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB0aGlzLmdldENsb3Nlc3Qod2luZG93V2lkdGgpO1xuICAgIHJldHVybiBCUkVBS1BPSU5UW2JyZWFrcG9pbnQgfHwgQlJFQUtQT0lOVC5sZ107XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aD86IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGlmICghd2luZG93V2lkdGgpIHtcbiAgICAgIHdpbmRvd1dpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93V2lkdGggPCB0aGlzLmdldFNpemUoQlJFQUtQT0lOVC54cylcbiAgICAgID8gQlJFQUtQT0lOVC54c1xuICAgICAgOiB0aGlzLmJyZWFrcG9pbnRzLnJldmVyc2UoKS5maW5kKGJyID0+IHdpbmRvd1dpZHRoID49IHRoaXMuZ2V0U2l6ZShicikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzID8gdGhpcy5jb25maWcuYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiA1NzY7XG4gIH1cblxuICBnZXQgd2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19