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

//# sourceMappingURL=breakpoint.service.d.ts.map