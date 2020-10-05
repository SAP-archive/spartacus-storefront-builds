import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
import { TableConfig } from './config/table.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-structure/outlet/outlet.service";
import * as i2 from "./config/table.config";
/**
 * The table renderer service adds a component for each table cells (th and td)
 * based on a fine grained configuration. Each table type can configure both global
 * components for headers and cells as well as individual components for field
 * specific cells.
 *
 * The components are added to the outlet slots for the corresponding cells. The table
 * structure and data is added to the outlet context.
 */
export class TableRendererService {
    constructor(outletService, componentFactoryResolver, config) {
        this.outletService = outletService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        // keep a list of outletRefs to avoid recreation
        this.outletRefs = new Map();
    }
    /**
     * Adds the configured table component for the header and data.
     */
    add(structure) {
        var _a;
        (_a = structure === null || structure === void 0 ? void 0 : structure.cells) === null || _a === void 0 ? void 0 : _a.forEach((field) => {
            const thRenderer = this.getHeaderRenderer(structure, field);
            if (thRenderer) {
                const ref = this.getHeaderOutletRef(structure.type, field);
                this.render(ref, thRenderer);
            }
            const tdRenderer = this.getDataRenderer(structure, field);
            if (tdRenderer) {
                const ref = this.getDataOutletRef(structure.type, field);
                this.render(ref, tdRenderer);
            }
        });
    }
    render(outletRef, renderer) {
        if (this.outletRefs.has(outletRef)) {
            return;
        }
        this.outletRefs.set(outletRef, true);
        const template = this.componentFactoryResolver.resolveComponentFactory(renderer);
        this.outletService.add(outletRef, template);
    }
    /**
     * Returns the header render component for the given field.
     */
    getHeaderRenderer(structure, field) {
        var _a, _b, _c, _d, _e;
        return (((_c = (_b = (_a = structure.options) === null || _a === void 0 ? void 0 : _a.cells) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c.headerComponent) || ((_d = structure.options) === null || _d === void 0 ? void 0 : _d.headerComponent) || ((_e = this.config.tableOptions) === null || _e === void 0 ? void 0 : _e.headerComponent));
    }
    /**
     * Returns the data render component for the given field.
     */
    getDataRenderer(structure, field) {
        var _a, _b, _c, _d, _e;
        return (((_c = (_b = (_a = structure.options) === null || _a === void 0 ? void 0 : _a.cells) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c.dataComponent) || ((_d = structure.options) === null || _d === void 0 ? void 0 : _d.dataComponent) || ((_e = this.config.tableOptions) === null || _e === void 0 ? void 0 : _e.dataComponent));
    }
    /**
     * Returns the header (th) outlet reference for the given field.
     *
     * The outlet reference is generated as:
     * `table.[tableType].header.[field]`
     */
    getHeaderOutletRef(type, field) {
        return `table.${type}.header.${field}`;
    }
    /**
     * Returns the header (th) outlet context for the given field.
     */
    getHeaderOutletContext(type, options, field) {
        return { _type: type, _options: options, _field: field };
    }
    /**
     * Returns the data (td) outlet reference for the given field.
     *
     * The field is generated as:
     * `table.[tableType].data.[tableField]`
     */
    getDataOutletRef(type, field) {
        return `table.${type}.data.${field}`;
    }
    /**
     * Returns the data (td) outlet context for the given field.
     */
    getDataOutletContext(type, options, field, data) {
        return Object.assign(Object.assign({}, data), { _type: type, _options: options, _field: field });
    }
}
TableRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TableRendererService_Factory() { return new TableRendererService(i0.ɵɵinject(i1.OutletService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.TableConfig)); }, token: TableRendererService, providedIn: "root" });
TableRendererService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
TableRendererService.ctorParameters = () => [
    { type: OutletService },
    { type: ComponentFactoryResolver },
    { type: TableConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVuZGVyZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJlbmRlcmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBUXBEOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUNZLGFBQTRCLEVBQzVCLHdCQUFrRCxFQUNsRCxNQUFtQjtRQUZuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWE7UUFOL0IsZ0RBQWdEO1FBQ3RDLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBTTlCLENBQUM7SUFFSjs7T0FFRztJQUNILEdBQUcsQ0FBQyxTQUF5Qjs7UUFDM0IsTUFBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsS0FBSywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM5QjtZQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUksVUFBVSxFQUFFO2dCQUNkLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsRUFBRTtJQUNMLENBQUM7SUFFUyxNQUFNLENBQUMsU0FBaUIsRUFBRSxRQUFtQjtRQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFPLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNPLGlCQUFpQixDQUN6QixTQUF5QixFQUN6QixLQUFhOztRQUViLE9BQU8sQ0FDTCxtQkFBQSxTQUFTLENBQUMsT0FBTywwQ0FBRSxLQUFLLDBDQUFHLEtBQUssMkNBQUcsZUFBZSxZQUNsRCxTQUFTLENBQUMsT0FBTywwQ0FBRSxlQUFlLENBQUEsV0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLGVBQWUsQ0FBQSxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZSxDQUN2QixTQUF5QixFQUN6QixLQUFhOztRQUViLE9BQU8sQ0FDTCxtQkFBQSxTQUFTLENBQUMsT0FBTywwQ0FBRSxLQUFLLDBDQUFHLEtBQUssMkNBQUcsYUFBYSxZQUNoRCxTQUFTLENBQUMsT0FBTywwQ0FBRSxhQUFhLENBQUEsV0FDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLGFBQWEsQ0FBQSxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsa0JBQWtCLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDNUMsT0FBTyxTQUFTLElBQUksV0FBVyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQkFBc0IsQ0FDcEIsSUFBWSxFQUNaLE9BQXFCLEVBQ3JCLEtBQWE7UUFFYixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUMxQyxPQUFPLFNBQVMsSUFBSSxTQUFTLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQixDQUNsQixJQUFZLEVBQ1osT0FBcUIsRUFDckIsS0FBYSxFQUNiLElBQVM7UUFFVCx1Q0FBWSxJQUFJLEtBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLElBQUc7SUFDcEUsQ0FBQzs7OztZQS9HRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCUSxhQUFhO1lBRGIsd0JBQXdCO1lBRXhCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQge1xuICBUYWJsZURhdGFPdXRsZXRDb250ZXh0LFxuICBUYWJsZUhlYWRlck91dGxldENvbnRleHQsXG4gIFRhYmxlT3B0aW9ucyxcbiAgVGFibGVTdHJ1Y3R1cmUsXG59IGZyb20gJy4vdGFibGUubW9kZWwnO1xuXG4vKipcbiAqIFRoZSB0YWJsZSByZW5kZXJlciBzZXJ2aWNlIGFkZHMgYSBjb21wb25lbnQgZm9yIGVhY2ggdGFibGUgY2VsbHMgKHRoIGFuZCB0ZClcbiAqIGJhc2VkIG9uIGEgZmluZSBncmFpbmVkIGNvbmZpZ3VyYXRpb24uIEVhY2ggdGFibGUgdHlwZSBjYW4gY29uZmlndXJlIGJvdGggZ2xvYmFsXG4gKiBjb21wb25lbnRzIGZvciBoZWFkZXJzIGFuZCBjZWxscyBhcyB3ZWxsIGFzIGluZGl2aWR1YWwgY29tcG9uZW50cyBmb3IgZmllbGRcbiAqIHNwZWNpZmljIGNlbGxzLlxuICpcbiAqIFRoZSBjb21wb25lbnRzIGFyZSBhZGRlZCB0byB0aGUgb3V0bGV0IHNsb3RzIGZvciB0aGUgY29ycmVzcG9uZGluZyBjZWxscy4gVGhlIHRhYmxlXG4gKiBzdHJ1Y3R1cmUgYW5kIGRhdGEgaXMgYWRkZWQgdG8gdGhlIG91dGxldCBjb250ZXh0LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSZW5kZXJlclNlcnZpY2Uge1xuICAvLyBrZWVwIGEgbGlzdCBvZiBvdXRsZXRSZWZzIHRvIGF2b2lkIHJlY3JlYXRpb25cbiAgcHJvdGVjdGVkIG91dGxldFJlZnMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFRhYmxlQ29uZmlnXG4gICkge31cblxuICAvKipcbiAgICogQWRkcyB0aGUgY29uZmlndXJlZCB0YWJsZSBjb21wb25lbnQgZm9yIHRoZSBoZWFkZXIgYW5kIGRhdGEuXG4gICAqL1xuICBhZGQoc3RydWN0dXJlOiBUYWJsZVN0cnVjdHVyZSk6IHZvaWQge1xuICAgIHN0cnVjdHVyZT8uY2VsbHM/LmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCB0aFJlbmRlcmVyID0gdGhpcy5nZXRIZWFkZXJSZW5kZXJlcihzdHJ1Y3R1cmUsIGZpZWxkKTtcbiAgICAgIGlmICh0aFJlbmRlcmVyKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0SGVhZGVyT3V0bGV0UmVmKHN0cnVjdHVyZS50eXBlLCBmaWVsZCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHJlZiwgdGhSZW5kZXJlcik7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZFJlbmRlcmVyID0gdGhpcy5nZXREYXRhUmVuZGVyZXIoc3RydWN0dXJlLCBmaWVsZCk7XG4gICAgICBpZiAodGRSZW5kZXJlcikge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmdldERhdGFPdXRsZXRSZWYoc3RydWN0dXJlLnR5cGUsIGZpZWxkKTtcbiAgICAgICAgdGhpcy5yZW5kZXIocmVmLCB0ZFJlbmRlcmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIob3V0bGV0UmVmOiBzdHJpbmcsIHJlbmRlcmVyOiBUeXBlPGFueT4pIHtcbiAgICBpZiAodGhpcy5vdXRsZXRSZWZzLmhhcyhvdXRsZXRSZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3V0bGV0UmVmcy5zZXQob3V0bGV0UmVmLCB0cnVlKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgcmVuZGVyZXJcbiAgICApO1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQob3V0bGV0UmVmLCA8YW55PnRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWFkZXIgcmVuZGVyIGNvbXBvbmVudCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEhlYWRlclJlbmRlcmVyKFxuICAgIHN0cnVjdHVyZTogVGFibGVTdHJ1Y3R1cmUsXG4gICAgZmllbGQ6IHN0cmluZ1xuICApOiBUeXBlPGFueT4ge1xuICAgIHJldHVybiAoXG4gICAgICBzdHJ1Y3R1cmUub3B0aW9ucz8uY2VsbHM/LltmaWVsZF0/LmhlYWRlckNvbXBvbmVudCB8fFxuICAgICAgc3RydWN0dXJlLm9wdGlvbnM/LmhlYWRlckNvbXBvbmVudCB8fFxuICAgICAgdGhpcy5jb25maWcudGFibGVPcHRpb25zPy5oZWFkZXJDb21wb25lbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRhdGEgcmVuZGVyIGNvbXBvbmVudCBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldERhdGFSZW5kZXJlcihcbiAgICBzdHJ1Y3R1cmU6IFRhYmxlU3RydWN0dXJlLFxuICAgIGZpZWxkOiBzdHJpbmdcbiAgKTogVHlwZTxhbnk+IHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RydWN0dXJlLm9wdGlvbnM/LmNlbGxzPy5bZmllbGRdPy5kYXRhQ29tcG9uZW50IHx8XG4gICAgICBzdHJ1Y3R1cmUub3B0aW9ucz8uZGF0YUNvbXBvbmVudCB8fFxuICAgICAgdGhpcy5jb25maWcudGFibGVPcHRpb25zPy5kYXRhQ29tcG9uZW50XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWFkZXIgKHRoKSBvdXRsZXQgcmVmZXJlbmNlIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqXG4gICAqIFRoZSBvdXRsZXQgcmVmZXJlbmNlIGlzIGdlbmVyYXRlZCBhczpcbiAgICogYHRhYmxlLlt0YWJsZVR5cGVdLmhlYWRlci5bZmllbGRdYFxuICAgKi9cbiAgZ2V0SGVhZGVyT3V0bGV0UmVmKHR5cGU6IHN0cmluZywgZmllbGQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGB0YWJsZS4ke3R5cGV9LmhlYWRlci4ke2ZpZWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVhZGVyICh0aCkgb3V0bGV0IGNvbnRleHQgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICovXG4gIGdldEhlYWRlck91dGxldENvbnRleHQoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRhYmxlT3B0aW9ucyxcbiAgICBmaWVsZDogc3RyaW5nXG4gICk6IFRhYmxlSGVhZGVyT3V0bGV0Q29udGV4dCB7XG4gICAgcmV0dXJuIHsgX3R5cGU6IHR5cGUsIF9vcHRpb25zOiBvcHRpb25zLCBfZmllbGQ6IGZpZWxkIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGF0YSAodGQpIG91dGxldCByZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICpcbiAgICogVGhlIGZpZWxkIGlzIGdlbmVyYXRlZCBhczpcbiAgICogYHRhYmxlLlt0YWJsZVR5cGVdLmRhdGEuW3RhYmxlRmllbGRdYFxuICAgKi9cbiAgZ2V0RGF0YU91dGxldFJlZih0eXBlOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdGFibGUuJHt0eXBlfS5kYXRhLiR7ZmllbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkYXRhICh0ZCkgb3V0bGV0IGNvbnRleHQgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICovXG4gIGdldERhdGFPdXRsZXRDb250ZXh0KFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUYWJsZU9wdGlvbnMsXG4gICAgZmllbGQ6IHN0cmluZyxcbiAgICBkYXRhOiBhbnlcbiAgKTogVGFibGVEYXRhT3V0bGV0Q29udGV4dCB7XG4gICAgcmV0dXJuIHsgLi4uZGF0YSwgX3R5cGU6IHR5cGUsIF9vcHRpb25zOiBvcHRpb25zLCBfZmllbGQ6IGZpZWxkIH07XG4gIH1cbn1cbiJdfQ==