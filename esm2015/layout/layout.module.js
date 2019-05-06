/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { OutletRefModule } from '../cms-structure/outlet/index';
import { StyleRefModule } from '../cms-structure/outlet/style-ref/style-ref.module';
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
                providers: [{ provide: LayoutConfig, useExisting: Config }],
                exports: [MainModule, ...layoutModules],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUUxQyxhQUFhLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO0FBV3ZELE1BQU0sT0FBTyxZQUFZOzs7WUFUeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLEdBQUcsYUFBYTtvQkFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDN0M7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsYUFBYSxDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFN0eWxlUmVmTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvc3R5bGUtcmVmL3N0eWxlLXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdExheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuL21haW4vbWFpbi5tb2R1bGUnO1xuXG5jb25zdCBsYXlvdXRNb2R1bGVzID0gW091dGxldFJlZk1vZHVsZSwgU3R5bGVSZWZNb2R1bGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWFpbk1vZHVsZSxcbiAgICAuLi5sYXlvdXRNb2R1bGVzLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRMYXlvdXRDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IExheW91dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgZXhwb3J0czogW01haW5Nb2R1bGUsIC4uLmxheW91dE1vZHVsZXNdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cbiJdfQ==