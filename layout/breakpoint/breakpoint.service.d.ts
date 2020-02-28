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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJyZWFrcG9pbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJyZWFrcG9pbnRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZiwgY29uZmlnOiBMYXlvdXRDb25maWcpO1xuICAgIGdldFNpemUoYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IG51bWJlcjtcbiAgICBnZXQgYnJlYWtwb2ludCQoKTogT2JzZXJ2YWJsZTxCUkVBS1BPSU5UPjtcbiAgICBnZXQgYnJlYWtwb2ludHMoKTogQlJFQUtQT0lOVFtdO1xuICAgIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoOiBudW1iZXIpOiBCUkVBS1BPSU5UO1xuICAgIHByb3RlY3RlZCBnZXRDbG9zZXN0KHdpbmRvd1dpZHRoPzogbnVtYmVyKTogQlJFQUtQT0lOVDtcbiAgICBnZXQgd2luZG93KCk6IFdpbmRvdztcbn1cbiJdfQ==