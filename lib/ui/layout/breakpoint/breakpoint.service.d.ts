import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { LayoutConfig, BREAKPOINT } from '../config/layout-config';
export declare class BreakpointService {
    private winRef;
    private config;
    constructor(winRef: WindowRef, config: LayoutConfig);
    readonly breakpoint$: Observable<BREAKPOINT>;
    readonly breakpoints: BREAKPOINT[];
    protected getBreakpoint(windowWidth: number): BREAKPOINT;
    protected getClosest(windowWidth?: number): BREAKPOINT;
    protected getSize(breakpoint: BREAKPOINT): number;
    readonly window: Window;
}
