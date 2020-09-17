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

//# sourceMappingURL=table.service.d.ts.map