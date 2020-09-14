import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { BREAKPOINT, LayoutConfig } from '../config/layout-config';
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
}
