/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { MediaModule } from '../../../../shared/index';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { ReturnRequestOverviewComponent } from './return-request-overview/return-request-overview.component';
import { ReturnRequestItemsComponent } from './return-request-items/return-request-items.component';
import { ReturnRequestTotalsComponent } from './return-request-totals/return-request-totals.component';
/** @type {?} */
const components = [
    ReturnRequestOverviewComponent,
    ReturnRequestItemsComponent,
    ReturnRequestTotalsComponent,
];
const ɵ0 = { cxRoute: 'returnRequestDetails' };
export class ReturnRequestDetailModule {
}
ReturnRequestDetailModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0,
                        },
                    ]),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ReturnRequestOverviewComponent: {
                                component: ReturnRequestOverviewComponent,
                            },
                            ReturnRequestItemsComponent: {
                                component: ReturnRequestItemsComponent,
                            },
                            ReturnRequestTotalsComponent: {
                                component: ReturnRequestTotalsComponent,
                            },
                        },
                    }))),
                    RouterModule,
                    UrlModule,
                    I18nModule,
                    MediaModule,
                    FeaturesConfigModule,
                ],
                declarations: [...components],
                exports: [...components],
                entryComponents: [...components],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7TUFFakcsVUFBVSxHQUFHO0lBQ2pCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0NBQzdCO1dBVWEsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUU7QUEwQmpELE1BQU0sT0FBTyx5QkFBeUI7OztZQWxDckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7d0JBQ3BCOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7NEJBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBcUM7eUJBQzFDO3FCQUNGLENBQUM7b0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDhCQUE4QixFQUFFO2dDQUM5QixTQUFTLEVBQUUsOEJBQThCOzZCQUMxQzs0QkFDRCwyQkFBMkIsRUFBRTtnQ0FDM0IsU0FBUyxFQUFFLDJCQUEyQjs2QkFDdkM7NEJBQ0QsNEJBQTRCLEVBQUU7Z0NBQzVCLFNBQVMsRUFBRSw0QkFBNEI7NkJBQ3hDO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixXQUFXO29CQUNYLG9CQUFvQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixlQUFlLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LW92ZXJ2aWV3L3JldHVybi1yZXF1ZXN0LW92ZXJ2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LWl0ZW1zL3JldHVybi1yZXF1ZXN0LWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC10b3RhbHMvcmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCxcbiAgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50LFxuICBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdyZXR1cm5SZXF1ZXN0RGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5jb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLmNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5jb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuUmVxdWVzdERldGFpbE1vZHVsZSB7fVxuIl19