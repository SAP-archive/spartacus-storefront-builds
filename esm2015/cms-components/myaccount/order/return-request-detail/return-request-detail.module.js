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
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXR1cm4tcmVxdWVzdC1kZXRhaWwvcmV0dXJuLXJlcXVlc3QtZGV0YWlsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRXZHLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0NBQzdCLENBQUM7V0FVWSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRTtBQTRCakQsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBcENyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQzs0QkFDdEMsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUFxQzt5QkFDMUM7cUJBQ0YsQ0FBQztvQkFDRixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixXQUFXO29CQUNYLG9CQUFvQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IsOEJBQThCLEVBQUU7Z0NBQzlCLFNBQVMsRUFBRSw4QkFBOEI7NkJBQzFDOzRCQUNELDJCQUEyQixFQUFFO2dDQUMzQixTQUFTLEVBQUUsMkJBQTJCOzZCQUN2Qzs0QkFDRCw0QkFBNEIsRUFBRTtnQ0FDNUIsU0FBUyxFQUFFLDRCQUE0Qjs2QkFDeEM7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9yZXR1cm4tcmVxdWVzdC1pdGVtcy9yZXR1cm4tcmVxdWVzdC1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vcmV0dXJuLXJlcXVlc3QtdG90YWxzL3JldHVybi1yZXF1ZXN0LXRvdGFscy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQsXG4gIFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCxcbiAgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVyblJlcXVlc3RPdmVydmlld0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuUmVxdWVzdE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldHVyblJlcXVlc3RJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV0dXJuUmVxdWVzdFRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLmNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4uY29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLmNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlIHt9XG4iXX0=