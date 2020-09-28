import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, isDevMode, Output, } from '@angular/core';
import { TableRendererService } from './table-renderer.service';
import { TableLayout, } from './table.model';
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
export class TableComponent {
    constructor(rendererService) {
        this.rendererService = rendererService;
        this.launch = new EventEmitter();
    }
    set dataset(value) {
        this._dataset = value;
        this.init(value);
    }
    get dataset() {
        return this._dataset;
    }
    init(dataset) {
        this.verticalLayout = !this.layout || this.layout === TableLayout.VERTICAL;
        this.verticalStackedLayout = this.layout === TableLayout.VERTICAL_STACKED;
        this.horizontalLayout = this.layout === TableLayout.HORIZONTAL;
        this.rendererService.add(dataset);
        this.addTableDebugInfo();
    }
    launchItem(item) {
        this.launch.emit(item);
    }
    /**
     * Indicates whether the given item is the current item.
     *
     * The current item is driven by the `currentItem`, that holds a
     * property and value to compare.
     */
    isCurrentItem(item) {
        var _a, _b;
        if (!this.currentItem || !this.currentItem.value) {
            return false;
        }
        return ((_a = this.currentItem) === null || _a === void 0 ? void 0 : _a.value) === (item === null || item === void 0 ? void 0 : item[(_b = this.currentItem) === null || _b === void 0 ? void 0 : _b.property]);
    }
    /**
     * Returns the header (th) outlet reference for the given field.
     */
    getHeaderOutletRef(field) {
        return this.rendererService.getHeaderOutletRef(this.type, field);
    }
    /**
     * Returns the header (th) outlet context for the given field.
     */
    getHeaderOutletContext(field) {
        return this.rendererService.getHeaderOutletContext(this.type, this.options, field);
    }
    /**
     * Returns the data (td) outlet reference for the given field.
     */
    getDataOutletRef(field) {
        return this.rendererService.getDataOutletRef(this.type, field);
    }
    /**
     * Returns the data (td) outlet context for the given field.
     */
    getDataOutletContext(field, data) {
        return this.rendererService.getDataOutletContext(this.type, this.options, field, data);
    }
    trackData(_i, item) {
        return JSON.stringify(item);
    }
    /**
     * Generates the table type into the UI in devMode, so that developers
     * can easily get the notion of the table type.
     */
    addTableDebugInfo() {
        if (isDevMode() && this.type) {
            this.tableType = this.type;
        }
    }
    /**
     * Helper method to return the deeply nested orientation configuration.
     */
    get layout() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.dataset) === null || _a === void 0 ? void 0 : _a.structure) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.layout;
    }
    /**
     * Helper method to return the deeply nested type.
     */
    get type() {
        var _a, _b;
        return (_b = (_a = this.dataset) === null || _a === void 0 ? void 0 : _a.structure) === null || _b === void 0 ? void 0 : _b.type;
    }
    get options() {
        var _a, _b;
        return (_b = (_a = this.dataset) === null || _a === void 0 ? void 0 : _a.structure) === null || _b === void 0 ? void 0 : _b.options;
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-table',
                template: "<table *ngIf=\"dataset?.structure as structure\">\n  <ng-container *ngIf=\"verticalStackedLayout\">\n    <tbody\n      *ngFor=\"let item of dataset.data; trackBy: trackData\"\n      (click)=\"launchItem(item)\"\n      [class.is-current]=\"isCurrentItem(item)\"\n    >\n      <tr *ngFor=\"let cell of structure.cells\" [class]=\"cell\">\n        <th>\n          <ng-template\n            [cxOutlet]=\"getHeaderOutletRef(cell)\"\n            [cxOutletContext]=\"getHeaderOutletContext(cell)\"\n          >\n            {{ cell }}\n          </ng-template>\n        </th>\n        <td>\n          <ng-template\n            [cxOutlet]=\"getDataOutletRef(cell)\"\n            [cxOutletContext]=\"getDataOutletContext(cell, item)\"\n          >\n            {{ item[cell] }}\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </ng-container>\n\n  <!-- vertical tables render the item  -->\n  <ng-container *ngIf=\"verticalLayout\">\n    <thead>\n      <tr>\n        <th scope=\"col\" *ngFor=\"let cell of structure.cells\" [class]=\"cell\">\n          <ng-template\n            [cxOutlet]=\"getHeaderOutletRef(cell)\"\n            [cxOutletContext]=\"getHeaderOutletContext(cell)\"\n          >\n            {{ cell }}\n          </ng-template>\n        </th>\n      </tr>\n    </thead>\n\n    <tr\n      *ngFor=\"let item of dataset.data; trackBy: trackData\"\n      [class.is-current]=\"isCurrentItem(item)\"\n      (click)=\"launchItem(item)\"\n    >\n      <td *ngFor=\"let cell of structure.cells; let i = index\" [class]=\"cell\">\n        <ng-template\n          [cxOutlet]=\"getDataOutletRef(cell)\"\n          [cxOutletContext]=\"getDataOutletContext(cell, item)\"\n        >\n          {{ item[cell] }}\n        </ng-template>\n      </td>\n    </tr>\n  </ng-container>\n\n  <ng-container *ngIf=\"horizontalLayout\">\n    <tr *ngFor=\"let cell of structure.cells\" [class]=\"cell\">\n      <th scope=\"col\">\n        <ng-template\n          [cxOutlet]=\"getHeaderOutletRef(cell)\"\n          [cxOutletContext]=\"getHeaderOutletContext(cell)\"\n        >\n          {{ cell }}\n        </ng-template>\n      </th>\n      <td\n        *ngFor=\"let item of dataset.data; trackBy: trackData\"\n        [class.is-current]=\"isCurrentItem(item)\"\n        (click)=\"launchItem(item)\"\n      >\n        <ng-template\n          [cxOutlet]=\"getDataOutletRef(cell)\"\n          [cxOutletContext]=\"getDataOutletContext(cell, item)\"\n        >\n          {{ item[cell] }}\n        </ng-template>\n      </td>\n    </tr>\n  </ng-container>\n</table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TableComponent.ctorParameters = () => [
    { type: TableRendererService }
];
TableComponent.propDecorators = {
    tableType: [{ type: HostBinding, args: ['attr.__cx-table-type',] }],
    horizontalLayout: [{ type: HostBinding, args: ['class.horizontal',] }],
    verticalLayout: [{ type: HostBinding, args: ['class.vertical',] }],
    verticalStackedLayout: [{ type: HostBinding, args: ['class.vertical-stacked',] }],
    dataset: [{ type: Input }],
    currentItem: [{ type: Input }],
    launch: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUlMLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBTUgsTUFBTSxPQUFPLGNBQWM7SUF5QnpCLFlBQXNCLGVBQXFDO1FBQXJDLG9CQUFlLEdBQWYsZUFBZSxDQUFzQjtRQUZqRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV3QixDQUFDO0lBbEIvRCxJQUFhLE9BQU8sQ0FBQyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBY0QsSUFBSSxDQUFDLE9BQWM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzNFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBRS9ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxhQUFhLENBQUMsSUFBUzs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNoRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxPQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLEtBQUssT0FBSyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLE9BQUcsSUFBSSxDQUFDLFdBQVcsMENBQUUsUUFBUSxFQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCLENBQUMsS0FBYTtRQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBc0IsQ0FBQyxLQUFhO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FDaEQsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsT0FBTyxFQUNaLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUMzQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQzlDLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE9BQU8sRUFDWixLQUFLLEVBQ0wsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQVUsRUFBRSxJQUFTO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08saUJBQWlCO1FBQ3pCLElBQUksU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLE1BQU07O1FBQ2hCLHlCQUFPLElBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxJQUFJOztRQUNkLG1CQUFPLElBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsMENBQUUsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFZLE9BQU87O1FBQ2pCLG1CQUFPLElBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsMENBQUUsT0FBTyxDQUFDO0lBQzFDLENBQUM7OztZQTlIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1oRkFBcUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFyQ1Esb0JBQW9COzs7d0JBdUMxQixXQUFXLFNBQUMsc0JBQXNCOytCQUNsQyxXQUFXLFNBQUMsa0JBQWtCOzZCQUM5QixXQUFXLFNBQUMsZ0JBQWdCO29DQUM1QixXQUFXLFNBQUMsd0JBQXdCO3NCQUdwQyxLQUFLOzBCQWNMLEtBQUs7cUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZVJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4vdGFibGUtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVEYXRhT3V0bGV0Q29udGV4dCxcbiAgVGFibGVIZWFkZXJPdXRsZXRDb250ZXh0LFxuICBUYWJsZUxheW91dCxcbn0gZnJvbSAnLi90YWJsZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIHRhYmxlIGNvbXBvbmVudCBwcm92aWRlcyBhIGdlbmVyaWMgRE9NIHN0cnVjdHVyZSBiYXNlZCBvbiB0aGUgYGRhdGFzZXRgIGlucHV0LlxuICogVGhlIGBUYWJsZWAgZGF0YXNldCBjb250YWlucyBhIHR5cGUsIHRhYmxlIHN0cnVjdHVyZSBhbmQgdGFibGUgZGF0YS5cbiAqXG4gKiBUaGUgdGFibGUgY29tcG9uZW50IG9ubHkgc3VwcG9ydHMgaG9yaXpvbnRhbCwgdmVydGljYWwgYW5kIHN0YWNrZWQgdGFibGUgbGF5b3V0LlxuICpcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBpcyBmYWlybHkgXCJkdW1iXCIgYW5kIG9ubHkgcmVuZGVycyBzdHJpbmcgYmFzZWQgY29udGVudCBmb3IgVEggYW5kIFREIGVsZW1lbnRzLlxuICogVGhlIGFjdHVhbCBjZWxsIHJlbmRlcmluZyBpcyBkZWxlZ2F0ZWQgdG8gYSAoY29uZmlndXJhYmxlKSBjZWxsIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCBlYWNoIGNlbGxcbiAqIGlzIHJlZ2lzdGVyZWQgYXMgYW4gb3V0bGV0LCBzbyB0aGF0IGN1c3RvbWl6YXRpb25zIGNhbiBiZSBkb25lIGJ5IGJvdGggb3V0bGV0IHRlbXBsYXRlc1xuICogYW5kIGNvbXBvbmVudHMuXG4gKlxuICogVGhlIG91dGxldCByZWZlcmVuY2VzIGFyZSBjb25jYXRlbmF0ZWQgZnJvbSB0aGUgdGFibGUgYHR5cGVgIGFuZCBoZWFkZXIgYGtleWAuIFRoZSBmb2xsb3dpbmdcbiAqIHNuaXBwZXQgc2hvd3MgYW4gb3V0bGV0IGdlbmVyYXRlZCBmb3IgYSB0YWJsZSBoZWFkZXIsIGZvciB0aGUgdGFibGUgdHlwZSBcImNvc3QtY2VudGVyXCIgd2l0aFxuICogYSBoZWFkZXIga2V5IFwibmFtZVwiOlxuICpcbiAqIGBgYFxuICogPHRoPlxuICogICA8dGVtcGxhdGUgY3hPdXRsZXQ9XCJ0YWJsZS5jb3N0LWNlbnRlci5oZWFkZXIubmFtZVwiPlxuICogICA8L3RlbXBsYXRlPlxuICogPC90aD5cbiAqIGBgYFxuICpcbiAqIFNpbWlsYXJseSwgdGhlIGRhdGEgY2VsbHMgKGA8dGQ+YCkgYXJlIGdlbmVyYXRlZCB3aXRoIHRoZSBvdXRsZXQgdGVtcGxhdGUgcmVmZXJlbmNlXG4gKiBgdGFibGUuY29zdC1jZW50ZXIuZGF0YS5uYW1lYC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuX19jeC10YWJsZS10eXBlJykgdGFibGVUeXBlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpIGhvcml6b250YWxMYXlvdXQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKSB2ZXJ0aWNhbExheW91dDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbC1zdGFja2VkJykgdmVydGljYWxTdGFja2VkTGF5b3V0OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2RhdGFzZXQ6IFRhYmxlO1xuICBASW5wdXQoKSBzZXQgZGF0YXNldCh2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGFzZXQgPSB2YWx1ZTtcbiAgICB0aGlzLmluaXQodmFsdWUpO1xuICB9XG4gIGdldCBkYXRhc2V0KCk6IFRhYmxlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YXNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIG1lY2hhbmlzbSB0byBjb21wYXJlIGEgbWF0Y2hpbmcgdmFsdWUgZm9yIGVhY2ggaXRlbS5cbiAgICpcbiAgICogVGhlIGBwcm9wZXJ0eWAgcmVmZXJzIHRvIHRoZSBkYXRhc2V0LnZhbHVlIHByb3BlcnR5LCBhbmQgdGhlIHZhbHVlIHRvdCB0aGVcbiAgICogbWF0Y2hpbmcgcHJvcGVydHkgdmFsdWUuXG4gICAqL1xuICBASW5wdXQoKSBjdXJyZW50SXRlbTogeyB2YWx1ZTogYW55OyBwcm9wZXJ0eTogc3RyaW5nIH07XG5cbiAgQE91dHB1dCgpIGxhdW5jaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVuZGVyZXJTZXJ2aWNlOiBUYWJsZVJlbmRlcmVyU2VydmljZSkge31cblxuICBpbml0KGRhdGFzZXQ6IFRhYmxlKSB7XG4gICAgdGhpcy52ZXJ0aWNhbExheW91dCA9ICF0aGlzLmxheW91dCB8fCB0aGlzLmxheW91dCA9PT0gVGFibGVMYXlvdXQuVkVSVElDQUw7XG4gICAgdGhpcy52ZXJ0aWNhbFN0YWNrZWRMYXlvdXQgPSB0aGlzLmxheW91dCA9PT0gVGFibGVMYXlvdXQuVkVSVElDQUxfU1RBQ0tFRDtcbiAgICB0aGlzLmhvcml6b250YWxMYXlvdXQgPSB0aGlzLmxheW91dCA9PT0gVGFibGVMYXlvdXQuSE9SSVpPTlRBTDtcblxuICAgIHRoaXMucmVuZGVyZXJTZXJ2aWNlLmFkZChkYXRhc2V0KTtcblxuICAgIHRoaXMuYWRkVGFibGVEZWJ1Z0luZm8oKTtcbiAgfVxuXG4gIGxhdW5jaEl0ZW0oaXRlbTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2guZW1pdChpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLlxuICAgKlxuICAgKiBUaGUgY3VycmVudCBpdGVtIGlzIGRyaXZlbiBieSB0aGUgYGN1cnJlbnRJdGVtYCwgdGhhdCBob2xkcyBhXG4gICAqIHByb3BlcnR5IGFuZCB2YWx1ZSB0byBjb21wYXJlLlxuICAgKi9cbiAgaXNDdXJyZW50SXRlbShpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuY3VycmVudEl0ZW0gfHwgIXRoaXMuY3VycmVudEl0ZW0udmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW0/LnZhbHVlID09PSBpdGVtPy5bdGhpcy5jdXJyZW50SXRlbT8ucHJvcGVydHldO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlYWRlciAodGgpIG91dGxldCByZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICovXG4gIGdldEhlYWRlck91dGxldFJlZihmaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlclNlcnZpY2UuZ2V0SGVhZGVyT3V0bGV0UmVmKHRoaXMudHlwZSwgZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlYWRlciAodGgpIG91dGxldCBjb250ZXh0IGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqL1xuICBnZXRIZWFkZXJPdXRsZXRDb250ZXh0KGZpZWxkOiBzdHJpbmcpOiBUYWJsZUhlYWRlck91dGxldENvbnRleHQge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyU2VydmljZS5nZXRIZWFkZXJPdXRsZXRDb250ZXh0KFxuICAgICAgdGhpcy50eXBlLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgZmllbGRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRhdGEgKHRkKSBvdXRsZXQgcmVmZXJlbmNlIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqL1xuICBnZXREYXRhT3V0bGV0UmVmKGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyU2VydmljZS5nZXREYXRhT3V0bGV0UmVmKHRoaXMudHlwZSwgZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRhdGEgKHRkKSBvdXRsZXQgY29udGV4dCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKi9cbiAgZ2V0RGF0YU91dGxldENvbnRleHQoZmllbGQ6IHN0cmluZywgZGF0YTogYW55KTogVGFibGVEYXRhT3V0bGV0Q29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJTZXJ2aWNlLmdldERhdGFPdXRsZXRDb250ZXh0KFxuICAgICAgdGhpcy50eXBlLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgZmllbGQsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIHRyYWNrRGF0YShfaTogbnVtYmVyLCBpdGVtOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHRhYmxlIHR5cGUgaW50byB0aGUgVUkgaW4gZGV2TW9kZSwgc28gdGhhdCBkZXZlbG9wZXJzXG4gICAqIGNhbiBlYXNpbHkgZ2V0IHRoZSBub3Rpb24gb2YgdGhlIHRhYmxlIHR5cGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGFibGVEZWJ1Z0luZm8oKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIHRoaXMudHlwZSkge1xuICAgICAgdGhpcy50YWJsZVR5cGUgPSB0aGlzLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBkZWVwbHkgbmVzdGVkIG9yaWVudGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBsYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNldD8uc3RydWN0dXJlPy5vcHRpb25zPy5sYXlvdXQ7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGRlZXBseSBuZXN0ZWQgdHlwZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNldD8uc3RydWN0dXJlPy50eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc2V0Py5zdHJ1Y3R1cmU/Lm9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==