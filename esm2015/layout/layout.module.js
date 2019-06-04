/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { OutletRefModule } from '../cms-structure/outlet/index';
import { defaultLayoutConfig } from './config/default-layout-config';
import { LayoutConfig } from './config/layout-config';
import { MainModule } from './main/main.module';
/** @type {?} */
const layoutModules = [OutletRefModule];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O01BRTFDLGFBQWEsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQVd2QyxNQUFNLE9BQU8sWUFBWTs7O1lBVHhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixHQUFHLGFBQWE7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7aUJBQzdDO2dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLGFBQWEsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0TGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vbWFpbi9tYWluLm1vZHVsZSc7XG5cbmNvbnN0IGxheW91dE1vZHVsZXMgPSBbT3V0bGV0UmVmTW9kdWxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1haW5Nb2R1bGUsXG4gICAgLi4ubGF5b3V0TW9kdWxlcyxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0TGF5b3V0Q29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBMYXlvdXRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCAuLi5sYXlvdXRNb2R1bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG4iXX0=