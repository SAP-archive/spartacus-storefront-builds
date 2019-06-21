/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { OutletRefModule } from '../cms-structure/outlet/index';
import { LayoutConfig } from './config/layout-config';
import { MainModule } from './main/main.module';
/** @type {?} */
const layoutModules = [OutletRefModule];
export class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [MainModule, ...layoutModules],
                providers: [{ provide: LayoutConfig, useExisting: Config }],
                exports: [MainModule, ...layoutModules],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7TUFFMUMsYUFBYSxHQUFHLENBQUMsZUFBZSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxZQUFZOzs7WUFMeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLGFBQWEsQ0FBQztnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsYUFBYSxDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuL21haW4vbWFpbi5tb2R1bGUnO1xuXG5jb25zdCBsYXlvdXRNb2R1bGVzID0gW091dGxldFJlZk1vZHVsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYWluTW9kdWxlLCAuLi5sYXlvdXRNb2R1bGVzXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBMYXlvdXRDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCAuLi5sYXlvdXRNb2R1bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG4iXX0=