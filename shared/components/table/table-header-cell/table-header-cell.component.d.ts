import { OutletContextData } from '../../../../cms-structure/outlet/outlet.model';
import { TableFieldOptions, TableHeaderOutletContext } from '../table.model';
import * as ɵngcc0 from '@angular/core';
export declare class TableHeaderCellComponent {
    protected outlet: OutletContextData<TableHeaderOutletContext>;
    constructor(outlet: OutletContextData<TableHeaderOutletContext>);
    /**
     * Returns the static label for the given field, if available.
     */
    get header(): string;
    /**
     * Returns the localized label for the given field.
     *
     * The localized label is either driven by the configured `label.i18nKey`
     * or concatenated by the table `type` and field `key`:
     *
     * `[tableType].[fieldKey]`
     *
     * The localized header can be translated with the `cxTranslate` pipe or `TranslationService`.
     */
    get localizedHeader(): string;
    protected get fieldOptions(): TableFieldOptions;
    protected get field(): string;
    protected get type(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableHeaderCellComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableHeaderCellComponent, "ng-component", never, {}, {}, never, never>;
}

//# sourceMappingURL=table-header-cell.component.d.ts.map