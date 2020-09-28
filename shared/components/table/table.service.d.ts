import { Observable } from 'rxjs';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT } from '../../../layout/config/layout-config';
import { ResponsiveTableConfiguration, TableConfig } from './config/table.config';
import { TableStructure, TableStructureConfiguration } from './table.model';
/**
 * Responsive table service.
 *
 * The `TableService` is used to build a `TableStructure` by configuration. The configuration
 * allows for breakpoint specific configuration, so that the table can differentiate for
 * various screen sizes.
 *
 * While there are some global options, the configuration is mainly driven by the table _type_.
 *
 * If there is no table configuration for the given type found, a table header structure
 * is generated based on the actual data (if available) or randomly by generating 5 random headers.
 */
export declare class TableService {
    protected breakpointService: BreakpointService;
    protected config: TableConfig;
    constructor(breakpointService: BreakpointService, config: TableConfig);
    /**
     * Builds the table structure.
     *
     * @param tableType The table type is used  to find the specific table configuration.
     * @param defaultStructure (optional) Default table structure that contains fallback options. More specific options are merged with the default structure.
     * @param data$ (optional) The actual data can be passed in to generate the table structure based on actual data.
     */
    buildStructure(tableType: string, defaultStructure?: ResponsiveTableConfiguration, data$?: Observable<any>): Observable<TableStructure>;
    /**
     * Returns the table structure by configuration. The configuration can be
     * breakpoint-driven, which means that an alternative header structure can
     * be created per screen size.
     *
     * The breakpoint is resolved by teh `BreakpointService`.
     */
    protected buildStructureFromConfig(type: string, defaultStructure?: ResponsiveTableConfiguration): Observable<TableStructure>;
    /**
     * Finds all applicable table configuration for the given type and breakpoint.
     * The default table configuration is merged with all relevant breakpoint
     * configurations.
     *
     * This allows to have some default configurations that apply to all screens, and
     * add configuration options for some screens.
     */
    protected getTableConfig(type: string, breakpoint: BREAKPOINT, defaultStructure?: ResponsiveTableConfiguration): TableStructureConfiguration;
    /**
     * Generates the table structure by the help of the first data row.
     */
    protected buildStructureFromData(type: string, data$: Observable<any>): Observable<TableStructure>;
    /**
     * As a last resort, the table structure is randomly created. The random structure
     * contains 5 headers, so that some of the unknown data is visualized.
     */
    protected buildRandomStructure(type: string): Observable<TableStructure>;
    /**
     * Finds all the breakpoints can contribute to the table configuration, from small
     * to current.
     *
     * For example, if the current breakpoint is `MD`, this returns `[XS, SM, MD]`.
     */
    protected findRelevantBreakpoints(breakpoint: BREAKPOINT): BREAKPOINT[];
    /**
     * Indicates if the there is a configuration for the table available.
     */
    protected hasTableConfig(tableType: string): boolean;
    /**
     * Logs a message in the console to increase developer experience.
     *
     * The message is only logged in dev mode.
     */
    private logWarning;
}
