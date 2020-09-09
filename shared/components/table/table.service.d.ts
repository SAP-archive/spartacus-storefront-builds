import { BREAKPOINT } from '../../../layout/config/layout-config';
import { Observable } from 'rxjs';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { TableConfig } from './config/table.config';
import { TableStructure, TableStructureConfiguration } from './table.model';
/**
 * Responsive table service.
 *
 * The `TableService` is used to generate a `TableStructure` based on configuration. The table
 * structure configuration allows for breakpoint specific configuration, so that the table
 * experience can be differentiated various screen sizes.
 *
 * The table structure configuration is driven by a table type. The various supported
 * table types are exposed in feature libraries.
 *
 * If there is no table configuration for the given type found, a table header structure
 * is generated based on the actual data or randomly (in case no data is passed in) by
 * generating 5 headers. In case of a generated header, we warn the developer in devMode that
 * there is no configuration available.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TableService {
    protected breakpointService: BreakpointService;
    protected config: TableConfig;
    constructor(breakpointService: BreakpointService, config: TableConfig);
    /**
     * Builds the table structure. The table structure can be created by the help of
     * the `tableType`. The `tableType` can be used in the configuration `TableConfig`,
     * so that the table headers can be defined.
     */
    buildStructure(tableType: string, data$?: Observable<any>): Observable<TableStructure>;
    /**
     * Returns the table structure by configuration. The configuration can be
     * breakpoint-driven, which means that an alternative header structure can
     * be created per screen size.
     *
     * The breakpoint is resolved by teh `BreakpointService`.
     */
    protected buildStructureFromConfig(type: string): Observable<TableStructure>;
    /**
     * This method generates a table structure by the help of the first data row.
     */
    protected buildStructureFromData(type: string, data$: Observable<any>): Observable<TableStructure>;
    /**
     * As a last resort, the table structure is randomly created. We add 5 unknown headers
     * and use the `hideHeader` to avoid the unknown headers to be rendered.
     */
    protected buildRandomStructure(type: string): Observable<TableStructure>;
    /**
     * Finds the best applicable table configuration for the given type
     * and breakpoint. If there is no configuration available for the breakpoint,
     * the best match will be returned, using mobile first approach.
     *
     * If there is no match for any breakpoint, the fallback is a configuration
     * without the notion of a breakpoint. Otherwise we fallback to the first
     * available config.
     */
    protected getTableConfig(type: string, breakpoint: BREAKPOINT): TableStructureConfiguration;
    protected hasTableConfig(tableType: string): boolean;
    /**
     * Prints a convenient message in the console to increase developer experience.
     */
    private warn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ0YWJsZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJSRUFLUE9JTlQgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgVGFibGVTdHJ1Y3R1cmUsIFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vdGFibGUubW9kZWwnO1xuLyoqXG4gKiBSZXNwb25zaXZlIHRhYmxlIHNlcnZpY2UuXG4gKlxuICogVGhlIGBUYWJsZVNlcnZpY2VgIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBgVGFibGVTdHJ1Y3R1cmVgIGJhc2VkIG9uIGNvbmZpZ3VyYXRpb24uIFRoZSB0YWJsZVxuICogc3RydWN0dXJlIGNvbmZpZ3VyYXRpb24gYWxsb3dzIGZvciBicmVha3BvaW50IHNwZWNpZmljIGNvbmZpZ3VyYXRpb24sIHNvIHRoYXQgdGhlIHRhYmxlXG4gKiBleHBlcmllbmNlIGNhbiBiZSBkaWZmZXJlbnRpYXRlZCB2YXJpb3VzIHNjcmVlbiBzaXplcy5cbiAqXG4gKiBUaGUgdGFibGUgc3RydWN0dXJlIGNvbmZpZ3VyYXRpb24gaXMgZHJpdmVuIGJ5IGEgdGFibGUgdHlwZS4gVGhlIHZhcmlvdXMgc3VwcG9ydGVkXG4gKiB0YWJsZSB0eXBlcyBhcmUgZXhwb3NlZCBpbiBmZWF0dXJlIGxpYnJhcmllcy5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyB0YWJsZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gdHlwZSBmb3VuZCwgYSB0YWJsZSBoZWFkZXIgc3RydWN0dXJlXG4gKiBpcyBnZW5lcmF0ZWQgYmFzZWQgb24gdGhlIGFjdHVhbCBkYXRhIG9yIHJhbmRvbWx5IChpbiBjYXNlIG5vIGRhdGEgaXMgcGFzc2VkIGluKSBieVxuICogZ2VuZXJhdGluZyA1IGhlYWRlcnMuIEluIGNhc2Ugb2YgYSBnZW5lcmF0ZWQgaGVhZGVyLCB3ZSB3YXJuIHRoZSBkZXZlbG9wZXIgaW4gZGV2TW9kZSB0aGF0XG4gKiB0aGVyZSBpcyBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb25maWc6IFRhYmxlQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSwgY29uZmlnOiBUYWJsZUNvbmZpZyk7XG4gICAgLyoqXG4gICAgICogQnVpbGRzIHRoZSB0YWJsZSBzdHJ1Y3R1cmUuIFRoZSB0YWJsZSBzdHJ1Y3R1cmUgY2FuIGJlIGNyZWF0ZWQgYnkgdGhlIGhlbHAgb2ZcbiAgICAgKiB0aGUgYHRhYmxlVHlwZWAuIFRoZSBgdGFibGVUeXBlYCBjYW4gYmUgdXNlZCBpbiB0aGUgY29uZmlndXJhdGlvbiBgVGFibGVDb25maWdgLFxuICAgICAqIHNvIHRoYXQgdGhlIHRhYmxlIGhlYWRlcnMgY2FuIGJlIGRlZmluZWQuXG4gICAgICovXG4gICAgYnVpbGRTdHJ1Y3R1cmUodGFibGVUeXBlOiBzdHJpbmcsIGRhdGEkPzogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUYWJsZVN0cnVjdHVyZT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFibGUgc3RydWN0dXJlIGJ5IGNvbmZpZ3VyYXRpb24uIFRoZSBjb25maWd1cmF0aW9uIGNhbiBiZVxuICAgICAqIGJyZWFrcG9pbnQtZHJpdmVuLCB3aGljaCBtZWFucyB0aGF0IGFuIGFsdGVybmF0aXZlIGhlYWRlciBzdHJ1Y3R1cmUgY2FuXG4gICAgICogYmUgY3JlYXRlZCBwZXIgc2NyZWVuIHNpemUuXG4gICAgICpcbiAgICAgKiBUaGUgYnJlYWtwb2ludCBpcyByZXNvbHZlZCBieSB0ZWggYEJyZWFrcG9pbnRTZXJ2aWNlYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRTdHJ1Y3R1cmVGcm9tQ29uZmlnKHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8VGFibGVTdHJ1Y3R1cmU+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGdlbmVyYXRlcyBhIHRhYmxlIHN0cnVjdHVyZSBieSB0aGUgaGVscCBvZiB0aGUgZmlyc3QgZGF0YSByb3cuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkU3RydWN0dXJlRnJvbURhdGEodHlwZTogc3RyaW5nLCBkYXRhJDogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUYWJsZVN0cnVjdHVyZT47XG4gICAgLyoqXG4gICAgICogQXMgYSBsYXN0IHJlc29ydCwgdGhlIHRhYmxlIHN0cnVjdHVyZSBpcyByYW5kb21seSBjcmVhdGVkLiBXZSBhZGQgNSB1bmtub3duIGhlYWRlcnNcbiAgICAgKiBhbmQgdXNlIHRoZSBgaGlkZUhlYWRlcmAgdG8gYXZvaWQgdGhlIHVua25vd24gaGVhZGVycyB0byBiZSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRSYW5kb21TdHJ1Y3R1cmUodHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUYWJsZVN0cnVjdHVyZT47XG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGJlc3QgYXBwbGljYWJsZSB0YWJsZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gdHlwZVxuICAgICAqIGFuZCBicmVha3BvaW50LiBJZiB0aGVyZSBpcyBubyBjb25maWd1cmF0aW9uIGF2YWlsYWJsZSBmb3IgdGhlIGJyZWFrcG9pbnQsXG4gICAgICogdGhlIGJlc3QgbWF0Y2ggd2lsbCBiZSByZXR1cm5lZCwgdXNpbmcgbW9iaWxlIGZpcnN0IGFwcHJvYWNoLlxuICAgICAqXG4gICAgICogSWYgdGhlcmUgaXMgbm8gbWF0Y2ggZm9yIGFueSBicmVha3BvaW50LCB0aGUgZmFsbGJhY2sgaXMgYSBjb25maWd1cmF0aW9uXG4gICAgICogd2l0aG91dCB0aGUgbm90aW9uIG9mIGEgYnJlYWtwb2ludC4gT3RoZXJ3aXNlIHdlIGZhbGxiYWNrIHRvIHRoZSBmaXJzdFxuICAgICAqIGF2YWlsYWJsZSBjb25maWcuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFRhYmxlQ29uZmlnKHR5cGU6IHN0cmluZywgYnJlYWtwb2ludDogQlJFQUtQT0lOVCk6IFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbjtcbiAgICBwcm90ZWN0ZWQgaGFzVGFibGVDb25maWcodGFibGVUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFByaW50cyBhIGNvbnZlbmllbnQgbWVzc2FnZSBpbiB0aGUgY29uc29sZSB0byBpbmNyZWFzZSBkZXZlbG9wZXIgZXhwZXJpZW5jZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHdhcm47XG59XG4iXX0=