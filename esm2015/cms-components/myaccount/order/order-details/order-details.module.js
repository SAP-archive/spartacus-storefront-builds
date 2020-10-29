import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { ConsignmentTrackingComponent } from '../../../../cms-components/myaccount/order/order-details/order-detail-items/consignment-tracking/consignment-tracking.component';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule, OrderOverviewModule, SpinnerModule, } from '../../../../shared/index';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
import { OrderDetailActionsComponent } from './order-detail-actions/order-detail-actions.component';
import { TrackingEventsComponent } from './order-detail-items/consignment-tracking/tracking-events/tracking-events.component';
import { OrderConsignedEntriesComponent } from './order-detail-items/order-consigned-entries/order-consigned-entries.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from './order-details.service';
const moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
    OrderConsignedEntriesComponent,
];
const ɵ0 = { pageLabel: 'order', cxRoute: 'orderGuest' }, ɵ1 = { cxRoute: 'orderDetails' };
export class OrderDetailsModule {
}
OrderDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CardModule,
                    CommonModule,
                    I18nModule,
                    FeaturesConfigModule,
                    PromotionsModule,
                    OrderOverviewModule,
                    UrlModule,
                    SpinnerModule,
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
                ],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            AccountOrderDetailsActionsComponent: {
                                component: OrderDetailActionsComponent,
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
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFHVCxvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpSUFBaUksQ0FBQztBQUMvSyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUNMLFVBQVUsRUFDVixtQkFBbUIsRUFDbkIsYUFBYSxHQUNkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDaEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7Q0FDL0IsQ0FBQztXQWtCWSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQU03QyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7QUE4QnpDLE1BQU0sT0FBTyxrQkFBa0I7OztZQXBEOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixVQUFVO29CQUNWLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFNBQVM7b0JBQ1QsYUFBYTtvQkFDYixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOzRCQUN0QyxTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQStDO3lCQUNwRDt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOzRCQUN0QyxTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQTZCO3lCQUNsQztxQkFDRixDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBNkI7d0JBQy9DLGFBQWEsRUFBRTs0QkFDYixtQ0FBbUMsRUFBRTtnQ0FDbkMsU0FBUyxFQUFFLDJCQUEyQjs2QkFDdkM7NEJBQ0QsaUNBQWlDLEVBQUU7Z0NBQ2pDLFNBQVMsRUFBRSx5QkFBeUI7NkJBQ3JDOzRCQUNELGtDQUFrQyxFQUFFO2dDQUNsQyxTQUFTLEVBQUUsMEJBQTBCOzZCQUN0Qzs0QkFDRCxvQ0FBb0MsRUFBRTtnQ0FDcEMsU0FBUyxFQUFFLDRCQUE0Qjs2QkFDeEM7eUJBQ0Y7d0JBQ0QsUUFBUSxFQUFFOzRCQUNSLG1CQUFtQixFQUFFLEtBQUs7eUJBQzNCO3FCQUNGLENBQUM7b0JBQ0YsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENhcmRNb2R1bGUsXG4gIE9yZGVyT3ZlcnZpZXdNb2R1bGUsXG4gIFNwaW5uZXJNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1hY3Rpb25zL29yZGVyLWRldGFpbC1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL3RyYWNraW5nLWV2ZW50cy90cmFja2luZy1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29uc2lnbmVkRW50cmllc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzL29yZGVyLWNvbnNpZ25lZC1lbnRyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcvb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXRvdGFscy9vcmRlci1kZXRhaWwtdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1xuICBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCxcbiAgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCxcbiAgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIE9yZGVyT3ZlcnZpZXdNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicsIGN4Um91dGU6ICdvcmRlckd1ZXN0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0FjdGlvbnNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0l0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1NoaXBwaW5nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgIGNvbnNpZ25tZW50VHJhY2tpbmc6ICcxLjInLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=