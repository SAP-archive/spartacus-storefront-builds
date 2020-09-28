import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { defaultTableConfig } from './config/default-table.config';
import { TableDataCellModule } from './table-data-cell/table-data-cell.module';
import { TableHeaderCellModule } from './table-header-cell/table-header-cell.module';
import { TableComponent } from './table.component';
/**
 * The TableModule provides a table component that is driven by (responsible) configuration.
 */
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OutletModule,
                    TableHeaderCellModule,
                    TableDataCellModule,
                ],
                declarations: [TableComponent],
                exports: [TableComponent],
                providers: [provideConfig(defaultTableConfig)],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EOztHQUVHO0FBWUgsTUFBTSxPQUFPLFdBQVc7OztZQVh2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFRhYmxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC10YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgVGFibGVEYXRhQ2VsbE1vZHVsZSB9IGZyb20gJy4vdGFibGUtZGF0YS1jZWxsL3RhYmxlLWRhdGEtY2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVIZWFkZXJDZWxsTW9kdWxlIH0gZnJvbSAnLi90YWJsZS1oZWFkZXItY2VsbC90YWJsZS1oZWFkZXItY2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIFRhYmxlTW9kdWxlIHByb3ZpZGVzIGEgdGFibGUgY29tcG9uZW50IHRoYXQgaXMgZHJpdmVuIGJ5IChyZXNwb25zaWJsZSkgY29uZmlndXJhdGlvbi5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgVGFibGVIZWFkZXJDZWxsTW9kdWxlLFxuICAgIFRhYmxlRGF0YUNlbGxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhkZWZhdWx0VGFibGVDb25maWcpXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUge31cbiJdfQ==