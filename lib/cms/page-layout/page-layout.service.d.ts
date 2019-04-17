import { Observable } from 'rxjs';
import { CmsService, Page } from '@spartacus/core';
import { BreakpointService } from '../../ui/layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig, LayoutSlotConfig, SlotConfig } from '../../ui/layout/config/layout-config';
export declare class PageLayoutService {
    private cms;
    private config;
    private breakpointService;
    constructor(cms: CmsService, config: LayoutConfig, breakpointService: BreakpointService);
    private warnLogMessages;
    getSlots(section?: string): Observable<string[]>;
    readonly page$: Observable<Page>;
    readonly templateName$: Observable<string>;
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
    protected getSlotConfig(templateUid: string, configAttribute: string, section?: string, breakpoint?: BREAKPOINT): SlotConfig;
    protected getSlotConfigForSection(templateUid: string, configAttribute: string, section?: string, breakpoint?: BREAKPOINT): SlotConfig;
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    protected getResponsiveSlotConfig(layoutSlotConfig: LayoutSlotConfig, configAttribute: string, breakpoint?: BREAKPOINT): SlotConfig;
    private noConfigFound;
}
