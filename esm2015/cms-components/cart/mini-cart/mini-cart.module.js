/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { MiniCartComponent } from './mini-cart.component';
export class MiniCartModule {
}
MiniCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    CartModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MiniCartComponent: {
                                component: MiniCartComponent,
                            },
                        },
                    }))),
                    UrlModule,
                    IconModule,
                    I18nModule,
                ],
                declarations: [MiniCartComponent],
                entryComponents: [MiniCartComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1jYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBcUIxRCxNQUFNLE9BQU8sY0FBYzs7O1lBbkIxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixVQUFVO29CQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixpQkFBaUIsRUFBRTtnQ0FDakIsU0FBUyxFQUFFLGlCQUFpQjs2QkFDN0I7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENhcnRNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1pbmlDYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9taW5pLWNhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ2FydE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTWluaUNhcnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE1pbmlDYXJ0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNaW5pQ2FydENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW01pbmlDYXJ0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWluaUNhcnRNb2R1bGUge31cbiJdfQ==