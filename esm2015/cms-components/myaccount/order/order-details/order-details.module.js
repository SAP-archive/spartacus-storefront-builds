/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, FeaturesConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ConsignmentTrackingComponent } from '../../../../cms-components/myaccount/order/order-details/order-detail-items/consignment-tracking/consignment-tracking.component';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { TrackingEventsComponent } from './order-detail-items/consignment-tracking/tracking-events/tracking-events.component';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
import { OrderDetailActionsComponent } from './order-detail-actions/order-detail-actions.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from './order-details.service';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
/** @type {?} */
const moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
];
const ɵ0 = { pageLabel: 'order' }, ɵ1 = { cxRoute: 'orderDetails' };
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
                    UrlModule,
                    RouterModule.forChild([
                        {
                            path: 'guest/order/:orderCode',
                            canActivate: [CmsPageGuard],
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
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                    SpinnerModule,
                ],
                providers: [OrderDetailsService],
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUVaLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUlBQWlJLENBQUM7QUFDL0ssT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7O01BRXZGLGdCQUFnQixHQUFHO0lBQ3ZCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtDQUM3QjtXQWdCYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FNdEIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBZ0N6QyxNQUFNLE9BQU8sa0JBQWtCOzs7WUFwRDlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsU0FBUztvQkFDVCxZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsd0JBQXdCOzRCQUM5QixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBd0I7eUJBQzdCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7NEJBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBNkI7eUJBQ2xDO3FCQUNGLENBQUM7b0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBNEI7d0JBQ2xELGFBQWEsRUFBRTs0QkFDYixtQ0FBbUMsRUFBRTtnQ0FDbkMsU0FBUyxFQUFFLDJCQUEyQjs2QkFDdkM7NEJBQ0Qsb0NBQW9DLEVBQUU7Z0NBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7NkJBQ3hDOzRCQUNELGlDQUFpQyxFQUFFO2dDQUNqQyxTQUFTLEVBQUUseUJBQXlCOzZCQUNyQzs0QkFDRCxrQ0FBa0MsRUFBRTtnQ0FDbEMsU0FBUyxFQUFFLDBCQUEwQjs2QkFDdEM7NEJBQ0Qsb0NBQW9DLEVBQUU7Z0NBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7NkJBQ3hDO3lCQUNGO3dCQUNELFFBQVEsRUFBRTs0QkFDUixtQkFBbUIsRUFBRSxLQUFLO3lCQUMzQjtxQkFDRixFQUFBLENBQUM7b0JBQ0YsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDaEMsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9jb25zaWdubWVudC10cmFja2luZy9jb25zaWdubWVudC10cmFja2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFRyYWNraW5nRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvdHJhY2tpbmctZXZlbnRzL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWhlYWRsaW5lL29yZGVyLWRldGFpbC1oZWFkbGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtYWN0aW9ucy9vcmRlci1kZXRhaWwtYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC10b3RhbHMvb3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1xuICBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCxcbiAgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2d1ZXN0L29yZGVyLzpvcmRlckNvZGUnLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0FjdGlvbnNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZzogJzEuMicsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyRGV0YWlsc1NlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=