/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { OutletRefModule } from '../../outlet/index';
import { StyleRefModule } from '../../outlet/style-ref/style-ref.module';
import { BreakpointService } from './breakpoint/breakpoint.service';
import { defaultLayoutConfig } from './config/default-layout-config';
import { LayoutConfig } from './config/layout-config';
import { MainModule } from './main/main.module';
/** @type {?} */
const layoutModules = [OutletRefModule, StyleRefModule];
export class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MainModule,
                    ...layoutModules,
                    ConfigModule.withConfig(defaultLayoutConfig),
                ],
                providers: [
                    { provide: LayoutConfig, useExisting: Config },
                    BreakpointService,
                ],
                exports: [MainModule, ...layoutModules],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFMUMsYUFBYSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztBQWN2RCxNQUFNLE9BQU8sWUFBWTs7O1lBWnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixHQUFHLGFBQWE7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7aUJBQzdDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtvQkFDOUMsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxhQUFhLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFN0eWxlUmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vb3V0bGV0L3N0eWxlLXJlZi9zdHlsZS1yZWYubW9kdWxlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBkZWZhdWx0TGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vbWFpbi9tYWluLm1vZHVsZSc7XG5cbmNvbnN0IGxheW91dE1vZHVsZXMgPSBbT3V0bGV0UmVmTW9kdWxlLCBTdHlsZVJlZk1vZHVsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYWluTW9kdWxlLFxuICAgIC4uLmxheW91dE1vZHVsZXMsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdExheW91dENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTGF5b3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgQnJlYWtwb2ludFNlcnZpY2UsXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCAuLi5sYXlvdXRNb2R1bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG4iXX0=