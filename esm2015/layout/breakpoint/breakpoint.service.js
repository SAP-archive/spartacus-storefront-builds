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
export class BreakpointService {
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
}
BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFbkUsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3BCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDcEIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUNwQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0NBQ3RCLENBQUM7QUFLRixNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW9CLE1BQWlCLEVBQVUsTUFBb0I7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDO0lBRXZFLElBQUksV0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsS0FBSyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNyRSxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsT0FBTyxDQUFDLFVBQXNCOztRQUM1QixPQUFPLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLDBDQUFFLGNBQWMsQ0FBQyxVQUFVLEdBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDckMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksV0FBVztRQUNiLE9BQU87WUFDTCxVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLEVBQUU7WUFDYixVQUFVLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsVUFBc0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDVCxJQUFJLENBQUMsV0FBVzthQUNiLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xELFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FDaEIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQUksQ0FBQyxVQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUMxQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUNULElBQUksQ0FBQyxXQUFXO2FBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FDaEIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLFVBQXNCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsYUFBYSxDQUFDLFdBQW1CO1FBQ3pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsT0FBTyxVQUFVLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRVMsVUFBVSxDQUFDLFdBQW9CO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O1lBdEdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZFEsU0FBUztZQUdHLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfQlJFQUtQT0lOVFMgPSB7XG4gIFtCUkVBS1BPSU5ULnhzXTogNTc2LFxuICBbQlJFQUtQT0lOVC5zbV06IDc2OCxcbiAgW0JSRUFLUE9JTlQubWRdOiA5OTIsXG4gIFtCUkVBS1BPSU5ULmxnXTogMTIwMCxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBMYXlvdXRDb25maWcpIHt9XG5cbiAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD4ge1xuICAgIGlmICghdGhpcy53aW5kb3cpIHtcbiAgICAgIHJldHVybiBvZihCUkVBS1BPSU5ULnhzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLnJlc2l6ZSQucGlwZShcbiAgICAgIG1hcCgoZXZlbnQpID0+IHRoaXMuZ2V0QnJlYWtwb2ludCgoPFdpbmRvdz5ldmVudC50YXJnZXQpLmlubmVyV2lkdGgpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIF9tYXhpbXVtXyBzaXplIGZvciB0aGUgYnJlYWtwaW50LCBnaXZlbiBieSB0aGUgYExheW91dENvbmZpZy5icmVha3BvaW50c2BcbiAgICogY29uZmlndXJhdGlvbi4gSWYgbm8gY29uZmlndXJhdGlvbiBpcyBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LCB0aGVcbiAgICogbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlczpcbiAgICogLSB4czogNTY3XG4gICAqIC0gc206IDc2OFxuICAgKiAtIG1kOiA5OTJcbiAgICogLSBsZzogMTIwMFxuICAgKi9cbiAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnJlYWtwb2ludHM/Lmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpXG4gICAgICA/IHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdXG4gICAgICA6IERFRkFVTFRfQlJFQUtQT0lOVFNbYnJlYWtwb2ludF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgYXZhaWxhYmxlIGJyZWFrcG9pbnRzIGZvciB0aGUgc3lzdGVtLlxuICAgKi9cbiAgZ2V0IGJyZWFrcG9pbnRzKCk6IEJSRUFLUE9JTlRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIEJSRUFLUE9JTlQueHMsXG4gICAgICBCUkVBS1BPSU5ULnNtLFxuICAgICAgQlJFQUtQT0lOVC5tZCxcbiAgICAgIEJSRUFLUE9JTlQubGcsXG4gICAgICBCUkVBS1BPSU5ULnhsLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgc21hbGxlciB0aGFuIHRoZSBtYXhpbXVtIHNpemUgb2YgdGhlXG4gICAqIGdpdmVuIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIElmIHRoZSBnaXZlbiBicmVha3BvaW50IGlzIGBCUkVBS1BPSU5ULm1kYCwgdGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYCB3aGVuIHRoZVxuICAgKiB3aW5kb3cgaW5uZXJXaWR0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5tZGAuXG4gICAqL1xuICBpc0Rvd24oYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgICBtYXAoKGJyKSA9PlxuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIHRoaXMuYnJlYWtwb2ludHMuaW5kZXhPZihicmVha3BvaW50KSArIDEpXG4gICAgICAgICAgLmluY2x1ZGVzKGJyKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIG1pbmltdW0gc2l6ZSBvZiB0aGVcbiAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICpcbiAgICogSWYgdGhlIGdpdmVuIGJyZWFrcG9pbnQgaXMgYEJSRUFLUE9JTlQubWRgLCB0aGUgbWV0aG9kIHJldHVybnMgYHRydWVgIHdoZW4gdGhlXG4gICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQuc21gLlxuICAgKi9cbiAgaXNVcChicmVha3BvaW50OiBCUkVBS1BPSU5UKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCQucGlwZShcbiAgICAgIG1hcCgoYnIpID0+XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHNcbiAgICAgICAgICAuc2xpY2UodGhpcy5icmVha3BvaW50cy5pbmRleE9mKGJyZWFrcG9pbnQpKVxuICAgICAgICAgIC5pbmNsdWRlcyhicilcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGZpdHMgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnRcbiAgICovXG4gIGlzRXF1YWwoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQkLnBpcGUobWFwKChicikgPT4gYnIgPT09IGJyZWFrcG9pbnQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoOiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gdGhpcy5nZXRDbG9zZXN0KHdpbmRvd1dpZHRoKTtcbiAgICByZXR1cm4gQlJFQUtQT0lOVFticmVha3BvaW50IHx8IEJSRUFLUE9JTlQubGddO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UIHtcbiAgICBpZiAoIXdpbmRvd1dpZHRoKSB7XG4gICAgICB3aW5kb3dXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvd1dpZHRoID4gdGhpcy5nZXRTaXplKEJSRUFLUE9JTlQubGcpXG4gICAgICA/IEJSRUFLUE9JTlQueGxcbiAgICAgIDogdGhpcy5icmVha3BvaW50cy5maW5kKChicikgPT4gd2luZG93V2lkdGggPD0gdGhpcy5nZXRTaXplKGJyKSk7XG4gIH1cblxuICBnZXQgd2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcbiAgfVxufVxuIl19