import { __decorate } from "tslib";
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
            ConfigModule.withConfig({
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
            RouterModule,
            UrlModule,
            I18nModule,
            MediaModule,
            FeaturesConfigModule,
        ],
        declarations: [...components],
        exports: [...components],
        entryComponents: [...components],
    })
], ReturnRequestDetailModule);
export { ReturnRequestDetailModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV2RyxNQUFNLFVBQVUsR0FBRztJQUNqQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtDQUM3QixDQUFDO1dBVVksRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUU7QUEwQmpELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0NBQUcsQ0FBQTtBQUE1Qix5QkFBeUI7SUFsQ3JDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO29CQUN0QyxTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBQXFDO2lCQUMxQzthQUNGLENBQUM7WUFDRixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsOEJBQThCLEVBQUU7d0JBQzlCLFNBQVMsRUFBRSw4QkFBOEI7cUJBQzFDO29CQUNELDJCQUEyQixFQUFFO3dCQUMzQixTQUFTLEVBQUUsMkJBQTJCO3FCQUN2QztvQkFDRCw0QkFBNEIsRUFBRTt3QkFDNUIsU0FBUyxFQUFFLDRCQUE0QjtxQkFDeEM7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsWUFBWTtZQUNaLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLG9CQUFvQjtTQUNyQjtRQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGVBQWUsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO0tBQ2pDLENBQUM7R0FDVyx5QkFBeUIsQ0FBRztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC1pdGVtcy9yZXR1cm4tcmVxdWVzdC1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLXJlcXVlc3QtdG90YWxzL3JldHVybi1yZXF1ZXN0LXRvdGFscy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQsXG4gIFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCxcbiAgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RUb3RhbHNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uY29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5jb21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uY29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUge31cbiJdfQ==