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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageLayoutService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PageLayoutService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sYXlvdXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwYWdlLWxheW91dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zU2VydmljZSwgUGFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5ULCBMYXlvdXRDb25maWcsIExheW91dFNsb3RDb25maWcsIFNsb3RDb25maWcgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnZUxheW91dFNlcnZpY2Uge1xuICAgIHByaXZhdGUgY21zO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBoYW5kbGVycztcbiAgICBjb25zdHJ1Y3RvcihjbXM6IENtc1NlcnZpY2UsIGNvbmZpZzogTGF5b3V0Q29uZmlnLCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UsIGhhbmRsZXJzOiBQYWdlTGF5b3V0SGFuZGxlcltdKTtcbiAgICBwcml2YXRlIHdhcm5Mb2dNZXNzYWdlcztcbiAgICBwcml2YXRlIGxvZ1Nsb3RzO1xuICAgIGdldFNsb3RzKHNlY3Rpb24/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUtdGhlLWZvbGRcbiAgICAgKiBmb3IgdGhlIGdpdmVuIHBhZ2VUZW1wbGF0ZSAvIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBUaGUgcGFnZSBmb2xkIGlzIGNvbmZpZ3VyYWJsZSBpbiB0aGUgYExheW91dENvbmZpZ2AgZm9yIGVhY2ggcGFnZSBsYXlvdXQuXG4gICAgICovXG4gICAgZ2V0UGFnZUZvbGRTbG90KHBhZ2VUZW1wbGF0ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHByaXZhdGUgcmVzb2x2ZVNsb3RzO1xuICAgIGdldCBwYWdlJCgpOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIGdldCB0ZW1wbGF0ZU5hbWUkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBsb2FkIHNsb3RzIGZyb20gdGhlIGxheW91dCBjb25maWd1cmF0aW9uLiBUaGUgYnJlYWtwb2ludCBpcyB1c2VkXG4gICAgICogdG8gbG9hZCBhIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBnaXZlbiBicmVha3BvaW50LiBJZiB0aGVyZSdzXG4gICAgICogbm8gY29uZmlndXJhdGlvbiBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBicmVha3BvaW50IHRoZSBkZWZhdWx0IHNsb3RcbiAgICAgKiBjb25maWd1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTbG90Q29uZmlnKHRlbXBsYXRlVWlkOiBzdHJpbmcsIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLCBzZWN0aW9uPzogc3RyaW5nLCBicmVha3BvaW50PzogQlJFQUtQT0lOVCk6IFNsb3RDb25maWc7XG4gICAgcHJvdGVjdGVkIGdldFNsb3RDb25maWdGb3JTZWN0aW9uKHRlbXBsYXRlVWlkOiBzdHJpbmcsIGNvbmZpZ0F0dHJpYnV0ZTogc3RyaW5nLCBzZWN0aW9uPzogc3RyaW5nLCBicmVha3BvaW50PzogQlJFQUtQT0lOVCk6IFNsb3RDb25maWc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2Ygc2xvdHMgZm9yIGEgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0b2luXG4gICAgICogSWYgdGhlcmUncyBubyBzcGVjaWZpYyBjb25maWd1cmF0aW9uIGZvciB0aGUgYnJlYWtwb2ludCxcbiAgICAgKiB0aGUgY2xvc2VzdCBhdmFpbGFibGUgY29uZmlndXJhdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSZXNwb25zaXZlU2xvdENvbmZpZyhsYXlvdXRTbG90Q29uZmlnOiBMYXlvdXRTbG90Q29uZmlnLCBjb25maWdBdHRyaWJ1dGU6IHN0cmluZywgYnJlYWtwb2ludD86IEJSRUFLUE9JTlQpOiBTbG90Q29uZmlnO1xuICAgIC8qKlxuICAgICAqIEluIG9yZGVyIHRvIGhlbHAgZGV2ZWxvcGVycywgd2UgcHJpbnQgc29tZSBkZXRhaWxlZCBsb2cgaW5mb3JtYXRpb24gaW5cbiAgICAgKiBjYXNlIHRoZXJlJ3Mgbm8gbGF5b3V0IGNvbmZpZ3VyYXRpb24gYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gcGFnZSB0ZW1wbGF0ZVxuICAgICAqIG9yIHNlY3Rpb24uIEFkZGl0aW9uYWxseSwgdGhlIHNsb3QgcG9zaXRpb25zIGFyZSBwcmludGVkIGluIHRoZSBjb25zb2xlXG4gICAgICogaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgY29waWVkIC8gcGFzdGUgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2dNaXNzaW5nTGF5b3V0Q29uZmlnO1xufVxuIl19