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
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PageLayoutService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwYWdlLWxheW91dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNTZXJ2aWNlLCBQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2JyZWFrcG9pbnQvYnJlYWtwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IEJSRUFLUE9JTlQsIExheW91dENvbmZpZywgTGF5b3V0U2xvdENvbmZpZywgU2xvdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4vcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdlTGF5b3V0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBjbXM7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTtcbiAgICBwcml2YXRlIGhhbmRsZXJzO1xuICAgIGNvbnN0cnVjdG9yKGNtczogQ21zU2VydmljZSwgY29uZmlnOiBMYXlvdXRDb25maWcsIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSwgaGFuZGxlcnM6IFBhZ2VMYXlvdXRIYW5kbGVyW10pO1xuICAgIHByaXZhdGUgd2FybkxvZ01lc3NhZ2VzO1xuICAgIHByaXZhdGUgbG9nU2xvdHM7XG4gICAgZ2V0U2xvdHMoc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBsYXN0IHBhZ2Ugc2xvdCBhYm92ZS10aGUtZm9sZFxuICAgICAqIGZvciB0aGUgZ2l2ZW4gcGFnZVRlbXBsYXRlIC8gYnJlYWtwb2ludC5cbiAgICAgKlxuICAgICAqIFRoZSBwYWdlIGZvbGQgaXMgY29uZmlndXJhYmxlIGluIHRoZSBgTGF5b3V0Q29uZmlnYCBmb3IgZWFjaCBwYWdlIGxheW91dC5cbiAgICAgKi9cbiAgICBnZXRQYWdlRm9sZFNsb3QocGFnZVRlbXBsYXRlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcHJpdmF0ZSByZXNvbHZlU2xvdHM7XG4gICAgZ2V0IHBhZ2UkKCk6IE9ic2VydmFibGU8UGFnZT47XG4gICAgZ2V0IHRlbXBsYXRlTmFtZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIGxvYWQgc2xvdHMgZnJvbSB0aGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24uIFRoZSBicmVha3BvaW50IGlzIHVzZWRcbiAgICAgKiB0byBsb2FkIGEgc3BlY2lmaWMgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQuIElmIHRoZXJlJ3NcbiAgICAgKiBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIGJyZWFrcG9pbnQgdGhlIGRlZmF1bHQgc2xvdFxuICAgICAqIGNvbmZpZ3VyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFNsb3RDb25maWcodGVtcGxhdGVVaWQ6IHN0cmluZywgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsIHNlY3Rpb24/OiBzdHJpbmcsIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UKTogU2xvdENvbmZpZztcbiAgICBwcm90ZWN0ZWQgZ2V0U2xvdENvbmZpZ0ZvclNlY3Rpb24odGVtcGxhdGVVaWQ6IHN0cmluZywgY29uZmlnQXR0cmlidXRlOiBzdHJpbmcsIHNlY3Rpb24/OiBzdHJpbmcsIGJyZWFrcG9pbnQ/OiBCUkVBS1BPSU5UKTogU2xvdENvbmZpZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBzbG90cyBmb3IgYSBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRvaW5cbiAgICAgKiBJZiB0aGVyZSdzIG5vIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBicmVha3BvaW50LFxuICAgICAqIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBjb25maWd1cmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlc3BvbnNpdmVTbG90Q29uZmlnKGxheW91dFNsb3RDb25maWc6IExheW91dFNsb3RDb25maWcsIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLCBicmVha3BvaW50PzogQlJFQUtQT0lOVCk6IFNsb3RDb25maWc7XG4gICAgLyoqXG4gICAgICogSW4gb3JkZXIgdG8gaGVscCBkZXZlbG9wZXJzLCB3ZSBwcmludCBzb21lIGRldGFpbGVkIGxvZyBpbmZvcm1hdGlvbiBpblxuICAgICAqIGNhc2UgdGhlcmUncyBubyBsYXlvdXQgY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBwYWdlIHRlbXBsYXRlXG4gICAgICogb3Igc2VjdGlvbi4gQWRkaXRpb25hbGx5LCB0aGUgc2xvdCBwb3NpdGlvbnMgYXJlIHByaW50ZWQgaW4gdGhlIGNvbnNvbGVcbiAgICAgKiBpbiBhIGZvcm1hdCB0aGF0IGNhbiBiZSBjb3BpZWQgLyBwYXN0ZSB0byB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvZ01pc3NpbmdMYXlvdXRDb25maWc7XG59XG4iXX0=