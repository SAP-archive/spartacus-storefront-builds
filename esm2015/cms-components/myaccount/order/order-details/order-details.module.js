import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ConsignmentTrackingComponent } from '../../../../cms-components/myaccount/order/order-details/order-detail-items/consignment-tracking/consignment-tracking.component';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
import { OrderDetailActionsComponent } from './order-detail-actions/order-detail-actions.component';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
import { TrackingEventsComponent } from './order-detail-items/consignment-tracking/tracking-events/tracking-events.component';
import { OrderConsignedEntriesComponent } from './order-detail-items/order-consigned-entries/order-consigned-entries.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from './order-details.service';
const moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
    OrderConsignedEntriesComponent,
];
const ɵ0 = { pageLabel: 'order', cxRoute: 'orderGuest' }, ɵ1 = { cxRoute: 'orderDetails' };
let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = __decorate([
    NgModule({
        imports: [
            CartSharedModule,
            CardModule,
            CommonModule,
            I18nModule,
            FeaturesConfigModule,
            PromotionsModule,
            UrlModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0,
                },
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ1,
                },
            ]),
            SpinnerModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AccountOrderDetailsActionsComponent: {
                        component: OrderDetailActionsComponent,
                    },
                    AccountOrderDetailsHeadlineComponent: {
                        component: OrderDetailHeadlineComponent,
                    },
                    AccountOrderDetailsItemsComponent: {
                        component: OrderDetailItemsComponent,
                    },
                    AccountOrderDetailsTotalsComponent: {
                        component: OrderDetailTotalsComponent,
                    },
                    AccountOrderDetailsShippingComponent: {
                        component: OrderDetailShippingComponent,
                    },
                },
                features: {
                    consignmentTracking: '1.2',
                },
            }),
            OrderDetailsService,
        ],
        declarations: [...moduleComponents],
        exports: [...moduleComponents],
        entryComponents: [...moduleComponents],
    })
], OrderDetailsModule);
export { OrderDetailsModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBR1Qsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUlBQWlJLENBQUM7QUFDL0ssT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDaEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0NBQy9CLENBQUM7V0FnQlksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FNN0MsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBa0N6QyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHLENBQUE7QUFBckIsa0JBQWtCO0lBdEQ5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLFlBQVk7WUFDWixVQUFVO1lBQ1Ysb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixTQUFTO1lBQ1QsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEI7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztvQkFDdEMsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUErQztpQkFDcEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztvQkFDdEMsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUE2QjtpQkFDbEM7YUFDRixDQUFDO1lBQ0YsYUFBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQTZCO2dCQUMvQyxhQUFhLEVBQUU7b0JBQ2IsbUNBQW1DLEVBQUU7d0JBQ25DLFNBQVMsRUFBRSwyQkFBMkI7cUJBQ3ZDO29CQUNELG9DQUFvQyxFQUFFO3dCQUNwQyxTQUFTLEVBQUUsNEJBQTRCO3FCQUN4QztvQkFDRCxpQ0FBaUMsRUFBRTt3QkFDakMsU0FBUyxFQUFFLHlCQUF5QjtxQkFDckM7b0JBQ0Qsa0NBQWtDLEVBQUU7d0JBQ2xDLFNBQVMsRUFBRSwwQkFBMEI7cUJBQ3RDO29CQUNELG9DQUFvQyxFQUFFO3dCQUNwQyxTQUFTLEVBQUUsNEJBQTRCO3FCQUN4QztpQkFDRjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7YUFDRixDQUFDO1lBQ0YsbUJBQW1CO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNuQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLGVBQWUsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7S0FDdkMsQ0FBQztHQUNXLGtCQUFrQixDQUFHO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL2NvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1hY3Rpb25zL29yZGVyLWRldGFpbC1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaGVhZGxpbmUvb3JkZXItZGV0YWlsLWhlYWRsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL3RyYWNraW5nLWV2ZW50cy90cmFja2luZy1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uc2lnbmVkRW50cmllc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcvb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXRvdGFscy9vcmRlci1kZXRhaWwtdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1xuICBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCxcbiAgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCxcbiAgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVyJywgY3hSb3V0ZTogJ29yZGVyR3Vlc3QnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWcgfCBGZWF0dXJlc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNBY3Rpb25zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNIZWFkbGluZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0l0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1NoaXBwaW5nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgIGNvbnNpZ25tZW50VHJhY2tpbmc6ICcxLjInLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=