import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as ɵngcc0 from '@angular/core';
export declare class BreakpointService {
    private winRef;
    private config;
    constructor(winRef: WindowRef, config: LayoutConfig);
    get breakpoint$(): Observable<BREAKPOINT>;
    /**
     * Returns the _maximum_ size for the breakpint, given by the `LayoutConfig.breakpoints`
     * configuration. If no configuration is available for the given breakpoint, the
     * method will return the default values:
     * - xs: 567
     * - sm: 768
     * - md: 992
     * - lg: 1200
     */
    getSize(breakpoint: BREAKPOINT): number;
    /**
     * Returns all available breakpoints for the system.
     */
    get breakpoints(): BREAKPOINT[];
    /**
     * Indicates whether the current screen size is smaller than the maximum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is smaller than the configured size of `BREAKPOINT.md`.
     */
    isDown(breakpoint: BREAKPOINT): Observable<boolean>;
    /**
     * Indicates whether the current screen size is larger than the minimum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is larger than the configured size of `BREAKPOINT.sm`.
     */
    isUp(breakpoint: BREAKPOINT): Observable<boolean>;
    /**
     * Indicates whether the current screen size fits to the given breakpoint
     */
    isEqual(breakpoint: BREAKPOINT): Observable<boolean>;
    protected getBreakpoint(windowWidth: number): BREAKPOINT;
    protected getClosest(windowWidth?: number): BREAKPOINT;
    get window(): Window;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreakpointService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJyZWFrcG9pbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKHdpblJlZjogV2luZG93UmVmLCBjb25maWc6IExheW91dENvbmZpZyk7XG4gICAgZ2V0IGJyZWFrcG9pbnQkKCk6IE9ic2VydmFibGU8QlJFQUtQT0lOVD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgX21heGltdW1fIHNpemUgZm9yIHRoZSBicmVha3BpbnQsIGdpdmVuIGJ5IHRoZSBgTGF5b3V0Q29uZmlnLmJyZWFrcG9pbnRzYFxuICAgICAqIGNvbmZpZ3VyYXRpb24uIElmIG5vIGNvbmZpZ3VyYXRpb24gaXMgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgdGhlXG4gICAgICogbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlczpcbiAgICAgKiAtIHhzOiA1NjdcbiAgICAgKiAtIHNtOiA3NjhcbiAgICAgKiAtIG1kOiA5OTJcbiAgICAgKiAtIGxnOiAxMjAwXG4gICAgICovXG4gICAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGF2YWlsYWJsZSBicmVha3BvaW50cyBmb3IgdGhlIHN5c3RlbS5cbiAgICAgKi9cbiAgICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIHNtYWxsZXIgdGhhbiB0aGUgbWF4aW11bSBzaXplIG9mIHRoZVxuICAgICAqIGdpdmVuIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBpcyBgQlJFQUtQT0lOVC5tZGAsIHRoZSBtZXRob2QgcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGVcbiAgICAgKiB3aW5kb3cgaW5uZXJXaWR0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgc2l6ZSBvZiBgQlJFQUtQT0lOVC5tZGAuXG4gICAgICovXG4gICAgaXNEb3duKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHNjcmVlbiBzaXplIGlzIGxhcmdlciB0aGFuIHRoZSBtaW5pbXVtIHNpemUgb2YgdGhlXG4gICAgICogZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnaXZlbiBicmVha3BvaW50IGlzIGBCUkVBS1BPSU5ULm1kYCwgdGhlIG1ldGhvZCByZXR1cm5zIGB0cnVlYCB3aGVuIHRoZVxuICAgICAqIHdpbmRvdyBpbm5lcldpZHRoIGlzIGxhcmdlciB0aGFuIHRoZSBjb25maWd1cmVkIHNpemUgb2YgYEJSRUFLUE9JTlQuc21gLlxuICAgICAqL1xuICAgIGlzVXAoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2NyZWVuIHNpemUgZml0cyB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludFxuICAgICAqL1xuICAgIGlzRXF1YWwoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQ7XG4gICAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UO1xuICAgIGdldCB3aW5kb3coKTogV2luZG93O1xufVxuIl19