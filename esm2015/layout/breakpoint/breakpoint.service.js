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
const DEFAULT_BREAKPOINTS = {
    [BREAKPOINT.xs]: 576,
    [BREAKPOINT.sm]: 768,
    [BREAKPOINT.md]: 992,
    [BREAKPOINT.lg]: 1200,
};
export class BreakpointService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    getSize(breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    }
    /**
     * @return {?}
     */
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map((/**
         * @param {?} event
         * @return {?}
         */
        event => this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth))), distinctUntilChanged());
    }
    /**
     * @return {?}
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
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    getBreakpoint(windowWidth) {
        /** @type {?} */
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find((/**
             * @param {?} br
             * @return {?}
             */
            br => windowWidth >= this.getSize(br)));
    }
    /**
     * @return {?}
     */
    get window() {
        return this.winRef.nativeWindow;
    }
}
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
/** @nocollapse */ BreakpointService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7TUFFN0QsbUJBQW1CLEdBQUc7SUFDMUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDcEIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtDQUN0QjtBQUtELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQW9CLE1BQWlCLEVBQVUsTUFBb0I7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDOzs7OztJQUV2RSxPQUFPLENBQUMsVUFBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUMxQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLG1CQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQ25FLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsYUFBYSxDQUFDLFdBQW1COztjQUNuQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDL0MsT0FBTyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFUyxVQUFVLENBQUMsV0FBb0I7UUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDdEM7UUFFRCxPQUFPLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztZQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUM3RSxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkJRLFNBQVM7WUFRRyxZQUFZOzs7Ozs7OztJQWFuQixtQ0FBeUI7Ozs7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfQlJFQUtQT0lOVFMgPSB7XG4gIFtCUkVBS1BPSU5ULnhzXTogNTc2LFxuICBbQlJFQUtQT0lOVC5zbV06IDc2OCxcbiAgW0JSRUFLUE9JTlQubWRdOiA5OTIsXG4gIFtCUkVBS1BPSU5ULmxnXTogMTIwMCxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnJlYWtwb2ludHNcbiAgICAgID8gdGhpcy5jb25maWcuYnJlYWtwb2ludHNbYnJlYWtwb2ludF1cbiAgICAgIDogREVGQVVMVF9CUkVBS1BPSU5UU1ticmVha3BvaW50XTtcbiAgfVxuXG4gIGdldCBicmVha3BvaW50JCgpOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+IHtcbiAgICBpZiAoIXRoaXMud2luZG93KSB7XG4gICAgICByZXR1cm4gb2YoQlJFQUtQT0lOVC54cyk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tRXZlbnQodGhpcy53aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICBzdGFydFdpdGgoeyB0YXJnZXQ6IHRoaXMud2luZG93IH0pLFxuICAgICAgbWFwKGV2ZW50ID0+IHRoaXMuZ2V0QnJlYWtwb2ludCgoPFdpbmRvdz5ldmVudC50YXJnZXQpLmlubmVyV2lkdGgpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IGJyZWFrcG9pbnRzKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIEJSRUFLUE9JTlQueHMsXG4gICAgICBCUkVBS1BPSU5ULnNtLFxuICAgICAgQlJFQUtQT0lOVC5tZCxcbiAgICAgIEJSRUFLUE9JTlQubGcsXG4gICAgICBCUkVBS1BPSU5ULnhsLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aDogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgY29uc3QgYnJlYWtwb2ludCA9IHRoaXMuZ2V0Q2xvc2VzdCh3aW5kb3dXaWR0aCk7XG4gICAgcmV0dXJuIEJSRUFLUE9JTlRbYnJlYWtwb2ludCB8fCBCUkVBS1BPSU5ULmxnXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0KHdpbmRvd1dpZHRoPzogbnVtYmVyKTogQlJFQUtQT0lOVCB7XG4gICAgaWYgKCF3aW5kb3dXaWR0aCkge1xuICAgICAgd2luZG93V2lkdGggPSB0aGlzLndpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3dXaWR0aCA8IHRoaXMuZ2V0U2l6ZShCUkVBS1BPSU5ULnhzKVxuICAgICAgPyBCUkVBS1BPSU5ULnhzXG4gICAgICA6IHRoaXMuYnJlYWtwb2ludHMucmV2ZXJzZSgpLmZpbmQoYnIgPT4gd2luZG93V2lkdGggPj0gdGhpcy5nZXRTaXplKGJyKSk7XG4gIH1cblxuICBnZXQgd2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19