var _a;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
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
    BreakpointService.prototype.getSize = function (breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    };
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(function (event) { return _this.getBreakpoint(event.target.innerWidth); }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakpointService.prototype, "breakpoints", {
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
    BreakpointService.prototype.getBreakpoint = function (windowWidth) {
        var breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    };
    BreakpointService.prototype.getClosest = function (windowWidth) {
        var _this = this;
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(function (br) { return windowWidth >= _this.getSize(br); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFbkUsSUFBTSxtQkFBbUI7SUFDdkIsR0FBQyxVQUFVLENBQUMsRUFBRSxJQUFHLEdBQUc7SUFDcEIsR0FBQyxVQUFVLENBQUMsRUFBRSxJQUFHLEdBQUc7SUFDcEIsR0FBQyxVQUFVLENBQUMsRUFBRSxJQUFHLEdBQUc7SUFDcEIsR0FBQyxVQUFVLENBQUMsRUFBRSxJQUFHLElBQUk7T0FDdEIsQ0FBQztBQUtGO0lBQ0UsMkJBQW9CLE1BQWlCLEVBQVUsTUFBb0I7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDO0lBRXZFLG1DQUFPLEdBQVAsVUFBUSxVQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQUksMENBQVc7YUFBZjtZQUFBLGlCQVVDO1lBVEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMxQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFDbEMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBVSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLEVBQ25FLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFXO2FBQWY7WUFDRSxPQUFPO2dCQUNMLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxFQUFFO2FBQ2QsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRVMseUNBQWEsR0FBdkIsVUFBd0IsV0FBbUI7UUFDekMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxPQUFPLFVBQVUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxzQ0FBVSxHQUFwQixVQUFxQixXQUFvQjtRQUF6QyxpQkFRQztRQVBDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFdBQVcsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNCQUFJLHFDQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBOztnQkEvQzJCLFNBQVM7Z0JBQWtCLFlBQVk7OztJQUR4RCxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQWlEN0I7NEJBdEVEO0NBc0VDLEFBakRELElBaURDO1NBakRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5jb25zdCBERUZBVUxUX0JSRUFLUE9JTlRTID0ge1xuICBbQlJFQUtQT0lOVC54c106IDU3NixcbiAgW0JSRUFLUE9JTlQuc21dOiA3NjgsXG4gIFtCUkVBS1BPSU5ULm1kXTogOTkyLFxuICBbQlJFQUtQT0lOVC5sZ106IDEyMDAsXG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmLCBwcml2YXRlIGNvbmZpZzogTGF5b3V0Q29uZmlnKSB7fVxuXG4gIGdldFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzXG4gICAgICA/IHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdXG4gICAgICA6IERFRkFVTFRfQlJFQUtQT0lOVFNbYnJlYWtwb2ludF07XG4gIH1cblxuICBnZXQgYnJlYWtwb2ludCQoKTogT2JzZXJ2YWJsZTxCUkVBS1BPSU5UPiB7XG4gICAgaWYgKCF0aGlzLndpbmRvdykge1xuICAgICAgcmV0dXJuIG9mKEJSRUFLUE9JTlQueHMpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUV2ZW50KHRoaXMud2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgc3RhcnRXaXRoKHsgdGFyZ2V0OiB0aGlzLndpbmRvdyB9KSxcbiAgICAgIG1hcChldmVudCA9PiB0aGlzLmdldEJyZWFrcG9pbnQoKDxXaW5kb3c+ZXZlbnQudGFyZ2V0KS5pbm5lcldpZHRoKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBicmVha3BvaW50cygpOiBCUkVBS1BPSU5UW10ge1xuICAgIHJldHVybiBbXG4gICAgICBCUkVBS1BPSU5ULnhzLFxuICAgICAgQlJFQUtQT0lOVC5zbSxcbiAgICAgIEJSRUFLUE9JTlQubWQsXG4gICAgICBCUkVBS1BPSU5ULmxnLFxuICAgICAgQlJFQUtQT0lOVC54bCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB0aGlzLmdldENsb3Nlc3Qod2luZG93V2lkdGgpO1xuICAgIHJldHVybiBCUkVBS1BPSU5UW2JyZWFrcG9pbnQgfHwgQlJFQUtQT0lOVC5sZ107XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aD86IG51bWJlcik6IEJSRUFLUE9JTlQge1xuICAgIGlmICghd2luZG93V2lkdGgpIHtcbiAgICAgIHdpbmRvd1dpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93V2lkdGggPCB0aGlzLmdldFNpemUoQlJFQUtQT0lOVC54cylcbiAgICAgID8gQlJFQUtQT0lOVC54c1xuICAgICAgOiB0aGlzLmJyZWFrcG9pbnRzLnJldmVyc2UoKS5maW5kKGJyID0+IHdpbmRvd1dpZHRoID49IHRoaXMuZ2V0U2l6ZShicikpO1xuICB9XG5cbiAgZ2V0IHdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c7XG4gIH1cbn1cbiJdfQ==