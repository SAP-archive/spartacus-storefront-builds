import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { MediaModule } from '../../../../shared/index';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { ReturnRequestOverviewComponent } from './return-request-overview/return-request-overview.component';
import { ReturnRequestItemsComponent } from './return-request-items/return-request-items.component';
import { ReturnRequestTotalsComponent } from './return-request-totals/return-request-totals.component';
const components = [
    ReturnRequestOverviewComponent,
    ReturnRequestItemsComponent,
    ReturnRequestTotalsComponent,
];
const ɵ0 = { cxRoute: 'returnRequestDetails' };
let ReturnRequestDetailModule = class ReturnRequestDetailModule {
};
ReturnRequestDetailModule = __decorate([
    NgModule({
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
            RouterModule,
            UrlModule,
            I18nModule,
            MediaModule,
            FeaturesConfigModule,
        ],
        providers: [
            provideDefaultConfig({
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
            }),
        ],
        declarations: [...components],
        exports: [...components],
        entryComponents: [...components],
    })
], ReturnRequestDetailModule);
export { ReturnRequestDetailModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxNQUFNLFVBQVUsR0FBRztJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtDQUM3QixDQUFDO1dBVVksRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUU7QUE0QmpELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBQUcsQ0FBQTtBQUE1Qix5QkFBeUI7SUFwQ3JDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO29CQUN0QyxTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBQXFDO2lCQUMxQzthQUNGLENBQUM7WUFDRixZQUFZO1lBQ1osU0FBUztZQUNULFVBQVU7WUFDVixXQUFXO1lBQ1gsb0JBQW9CO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYiw4QkFBOEIsRUFBRTt3QkFDOUIsU0FBUyxFQUFFLDhCQUE4QjtxQkFDMUM7b0JBQ0QsMkJBQTJCLEVBQUU7d0JBQzNCLFNBQVMsRUFBRSwyQkFBMkI7cUJBQ3ZDO29CQUNELDRCQUE0QixFQUFFO3dCQUM1QixTQUFTLEVBQUUsNEJBQTRCO3FCQUN4QztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGVBQWUsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO0tBQ2pDLENBQUM7R0FDVyx5QkFBeUIsQ0FBRztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LW92ZXJ2aWV3L3JldHVybi1yZXF1ZXN0LW92ZXJ2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL3JldHVybi1yZXF1ZXN0LWl0ZW1zL3JldHVybi1yZXF1ZXN0LWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC10b3RhbHMvcmV0dXJuLXJlcXVlc3QtdG90YWxzLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCxcbiAgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50LFxuICBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdyZXR1cm5SZXF1ZXN0RGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5SZXF1ZXN0VG90YWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uY29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5jb21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uY29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUge31cbiJdfQ==