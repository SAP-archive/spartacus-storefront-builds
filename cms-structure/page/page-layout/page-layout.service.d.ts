import { CmsService, Page } from '@spartacus/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig, LayoutSlotConfig, SlotConfig } from '../../../layout/config/layout-config';
import { PageLayoutHandler } from './page-layout-handler';
import * as ɵngcc0 from '@angular/core';
export declare class PageLayoutService {
    private cms;
    private config;
    private breakpointService;
    private handlers;
    constructor(cms: CmsService, config: LayoutConfig, breakpointService: BreakpointService, handlers: PageLayoutHandler[]);
    private warnLogMessages;
    private logSlots;
    getSlots(section?: string): Observable<string[]>;
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     */
    getPageFoldSlot(pageTemplate: string): Observable<string>;
    private resolveSlots;
    get page$(): Observable<Page>;
    get templateName$(): Observable<string>;
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
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     */
    private logMissingLayoutConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageLayoutService, [null, null, null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwYWdlLWxheW91dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc1NlcnZpY2UsIFBhZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVCwgTGF5b3V0Q29uZmlnLCBMYXlvdXRTbG90Q29uZmlnLCBTbG90Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi9wYWdlLWxheW91dC1oYW5kbGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VMYXlvdXRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNtcztcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgaGFuZGxlcnM7XG4gICAgY29uc3RydWN0b3IoY21zOiBDbXNTZXJ2aWNlLCBjb25maWc6IExheW91dENvbmZpZywgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLCBoYW5kbGVyczogUGFnZUxheW91dEhhbmRsZXJbXSk7XG4gICAgcHJpdmF0ZSB3YXJuTG9nTWVzc2FnZXM7XG4gICAgcHJpdmF0ZSBsb2dTbG90cztcbiAgICBnZXRTbG90cyhzZWN0aW9uPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGxhc3QgcGFnZSBzbG90IGFib3ZlLXRoZS1mb2xkXG4gICAgICogZm9yIHRoZSBnaXZlbiBwYWdlVGVtcGxhdGUgLyBicmVha3BvaW50LlxuICAgICAqXG4gICAgICogVGhlIHBhZ2UgZm9sZCBpcyBjb25maWd1cmFibGUgaW4gdGhlIGBMYXlvdXRDb25maWdgIGZvciBlYWNoIHBhZ2UgbGF5b3V0LlxuICAgICAqL1xuICAgIGdldFBhZ2VGb2xkU2xvdChwYWdlVGVtcGxhdGU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBwcml2YXRlIHJlc29sdmVTbG90cztcbiAgICBnZXQgcGFnZSQoKTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICBnZXQgdGVtcGxhdGVOYW1lJCgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogbG9hZCBzbG90cyBmcm9tIHRoZSBsYXlvdXQgY29uZmlndXJhdGlvbi4gVGhlIGJyZWFrcG9pbnQgaXMgdXNlZFxuICAgICAqIHRvIGxvYWQgYSBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludC4gSWYgdGhlcmUnc1xuICAgICAqIG5vIGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gYnJlYWtwb2ludCB0aGUgZGVmYXVsdCBzbG90XG4gICAgICogY29uZmlndXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZyh0ZW1wbGF0ZVVpZDogc3RyaW5nLCBjb25maWdBdHRyaWJ1dGU6IHN0cmluZywgc2VjdGlvbj86IHN0cmluZywgYnJlYWtwb2ludD86IEJSRUFLUE9JTlQpOiBTbG90Q29uZmlnO1xuICAgIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnRm9yU2VjdGlvbih0ZW1wbGF0ZVVpZDogc3RyaW5nLCBjb25maWdBdHRyaWJ1dGU6IHN0cmluZywgc2VjdGlvbj86IHN0cmluZywgYnJlYWtwb2ludD86IEJSRUFLUE9JTlQpOiBTbG90Q29uZmlnO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIHNsb3RzIGZvciBhIGJyZWFrcG9pbnQgc3BlY2lmaWMgY29uZmlndXJhdG9pblxuICAgICAqIElmIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAgICogdGhlIGNsb3Nlc3QgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2l2ZVNsb3RDb25maWcobGF5b3V0U2xvdENvbmZpZzogTGF5b3V0U2xvdENvbmZpZywgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UKTogU2xvdENvbmZpZztcbiAgICAvKipcbiAgICAgKiBJbiBvcmRlciB0byBoZWxwIGRldmVsb3BlcnMsIHdlIHByaW50IHNvbWUgZGV0YWlsZWQgbG9nIGluZm9ybWF0aW9uIGluXG4gICAgICogY2FzZSB0aGVyZSdzIG5vIGxheW91dCBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIHBhZ2UgdGVtcGxhdGVcbiAgICAgKiBvciBzZWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBzbG90IHBvc2l0aW9ucyBhcmUgcHJpbnRlZCBpbiB0aGUgY29uc29sZVxuICAgICAqIGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIGNvcGllZCAvIHBhc3RlIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHByaXZhdGUgbG9nTWlzc2luZ0xheW91dENvbmZpZztcbn1cbiJdfQ==