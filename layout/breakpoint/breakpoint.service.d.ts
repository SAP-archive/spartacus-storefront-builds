import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
import * as ɵngcc0 from '@angular/core';
export declare class BreakpointService {
    private winRef;
    private config;
    constructor(winRef: WindowRef, config: LayoutConfig);
    getSize(breakpoint: BREAKPOINT): number;
    get breakpoint$(): Observable<BREAKPOINT>;
    get breakpoints(): BREAKPOINT[];
    protected getBreakpoint(windowWidth: number): BREAKPOINT;
    protected getClosest(windowWidth?: number): BREAKPOINT;
    get window(): Window;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BreakpointService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJyZWFrcG9pbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKHdpblJlZjogV2luZG93UmVmLCBjb25maWc6IExheW91dENvbmZpZyk7XG4gICAgZ2V0U2l6ZShicmVha3BvaW50OiBCUkVBS1BPSU5UKTogbnVtYmVyO1xuICAgIGdldCBicmVha3BvaW50JCgpOiBPYnNlcnZhYmxlPEJSRUFLUE9JTlQ+O1xuICAgIGdldCBicmVha3BvaW50cygpOiBCUkVBS1BPSU5UW107XG4gICAgcHJvdGVjdGVkIGdldEJyZWFrcG9pbnQod2luZG93V2lkdGg6IG51bWJlcik6IEJSRUFLUE9JTlQ7XG4gICAgcHJvdGVjdGVkIGdldENsb3Nlc3Qod2luZG93V2lkdGg/OiBudW1iZXIpOiBCUkVBS1BPSU5UO1xuICAgIGdldCB3aW5kb3coKTogV2luZG93O1xufVxuIl19