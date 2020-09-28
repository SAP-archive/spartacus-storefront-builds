import { EventEmitter } from '@angular/core';
import { TableRendererService } from './table-renderer.service';
import { Table, TableDataOutletContext, TableHeaderOutletContext } from './table.model';
/**
 * The table component provides a generic DOM structure based on the `dataset` input.
 * The `Table` dataset contains a type, table structure and table data.
 *
 * The table component only supports horizontal, vertical and stacked table layout.
 *
 * The implementation is fairly "dumb" and only renders string based content for TH and TD elements.
 * The actual cell rendering is delegated to a (configurable) cell component. Additionally, each cell
 * is registered as an outlet, so that customizations can be done by both outlet templates
 * and components.
 *
 * The outlet references are concatenated from the table `type` and header `key`. The following
 * snippet shows an outlet generated for a table header, for the table type "cost-center" with
 * a header key "name":
 *
 * ```
 * <th>
 *   <template cxOutlet="table.cost-center.header.name">
 *   </template>
 * </th>
 * ```
 *
 * Similarly, the data cells (`<td>`) are generated with the outlet template reference
 * `table.cost-center.data.name`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class TableComponent {
    protected rendererService: TableRendererService;
    tableType: string;
    horizontalLayout: boolean;
    verticalLayout: boolean;
    verticalStackedLayout: boolean;
    private _dataset;
    set dataset(value: Table);
    get dataset(): Table;
    /**
     * Provides a mechanism to compare a matching value for each item.
     *
     * The `property` refers to the dataset.value property, and the value tot the
     * matching property value.
     */
    currentItem: {
        value: any;
        property: string;
    };
    launch: EventEmitter<any>;
    constructor(rendererService: TableRendererService);
    init(dataset: Table): void;
    launchItem(item: any): void;
    /**
     * Indicates whether the given item is the current item.
     *
     * The current item is driven by the `currentItem`, that holds a
     * property and value to compare.
     */
    isCurrentItem(item: any): boolean;
    /**
     * Returns the header (th) outlet reference for the given field.
     */
    getHeaderOutletRef(field: string): string;
    /**
     * Returns the header (th) outlet context for the given field.
     */
    getHeaderOutletContext(field: string): TableHeaderOutletContext;
    /**
     * Returns the data (td) outlet reference for the given field.
     */
    getDataOutletRef(field: string): string;
    /**
     * Returns the data (td) outlet context for the given field.
     */
    getDataOutletContext(field: string, data: any): TableDataOutletContext;
    trackData(_i: number, item: any): any;
    /**
     * Generates the table type into the UI in devMode, so that developers
     * can easily get the notion of the table type.
     */
    protected addTableDebugInfo(): void;
    /**
     * Helper method to return the deeply nested orientation configuration.
     */
    private get layout();
    /**
     * Helper method to return the deeply nested type.
     */
    private get type();
    private get options();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableComponent, "cx-table", never, { "dataset": "dataset"; "currentItem": "currentItem"; }, { "launch": "launch"; }, never, never>;
}

//# sourceMappingURL=table.component.d.ts.map