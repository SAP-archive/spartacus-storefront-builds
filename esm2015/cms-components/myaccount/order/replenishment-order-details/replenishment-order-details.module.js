import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, I18nModule, provideConfig, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule, ListNavigationModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, } from '../../../../shared/index';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
import { OrderDetailItemsComponent } from '../order-details/order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from '../order-details/order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from '../order-details/order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from '../order-details/order-details.service';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { defaultReplenishmentOrderCancellationLayoutConfig } from './default-replenishment-order-cancellation-layout.config';
import { ReplenishmentOrderCancellationComponent } from './replenishment-order-cancellation/replenishment-order-cancellation.component';
import { ReplenishmentOrderDetailsService } from './replenishment-order-details.service';
const moduleComponents = [ReplenishmentOrderCancellationComponent];
const ɵ0 = { cxRoute: 'replenishmentDetails' };
export class ReplenishmentOrderDetailsModule {
}
ReplenishmentOrderDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CardModule,
                    CommonModule,
                    I18nModule,
                    PromotionsModule,
                    UrlModule,
                    ReplenishmentOrderCancellationDialogModule,
                    SpinnerModule,
                    ListNavigationModule,
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0,
                        },
                    ]),
                ],
                providers: [
                    provideConfig(defaultReplenishmentOrderCancellationLayoutConfig),
                    provideDefaultConfig({
                        cmsComponents: {
                            ReplenishmentDetailItemsComponent: {
                                component: OrderDetailItemsComponent,
                                providers: [
                                    {
                                        provide: OrderDetailsService,
                                        useExisting: ReplenishmentOrderDetailsService,
                                    },
                                ],
                            },
                            ReplenishmentDetailTotalsComponent: {
                                component: OrderDetailTotalsComponent,
                                providers: [
                                    {
                                        provide: OrderDetailsService,
                                        useExisting: ReplenishmentOrderDetailsService,
                                    },
                                ],
                            },
                            ReplenishmentDetailShippingComponent: {
                                component: OrderDetailShippingComponent,
                                providers: [
                                    {
                                        provide: OrderDetailsService,
                                        useExisting: ReplenishmentOrderDetailsService,
                                    },
                                ],
                            },
                            ReplenishmentDetailActionsComponent: {
                                component: ReplenishmentOrderCancellationComponent,
                            },
                            ReplenishmentDetailOrderHistoryComponent: {
                                component: OrderHistoryComponent,
                            },
                        },
                    }),
                ],
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9yZXBsZW5pc2htZW50LW9yZGVyLWRldGFpbHMvcmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUNMLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsMENBQTBDLEVBQzFDLGFBQWEsR0FDZCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3RILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzdILE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3hJLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1dBa0JyRCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRTtBQWdEakQsTUFBTSxPQUFPLCtCQUErQjs7O1lBaEUzQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsVUFBVTtvQkFDVixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULDBDQUEwQztvQkFDMUMsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLFlBQVksQ0FBQyxRQUFRLENBQUM7d0JBQ3BCOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7NEJBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBcUM7eUJBQzFDO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGFBQWEsQ0FBQyxpREFBaUQsQ0FBQztvQkFDaEUsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixpQ0FBaUMsRUFBRTtnQ0FDakMsU0FBUyxFQUFFLHlCQUF5QjtnQ0FDcEMsU0FBUyxFQUFFO29DQUNUO3dDQUNFLE9BQU8sRUFBRSxtQkFBbUI7d0NBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7cUNBQzlDO2lDQUNGOzZCQUNGOzRCQUNELGtDQUFrQyxFQUFFO2dDQUNsQyxTQUFTLEVBQUUsMEJBQTBCO2dDQUNyQyxTQUFTLEVBQUU7b0NBQ1Q7d0NBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3Q0FDNUIsV0FBVyxFQUFFLGdDQUFnQztxQ0FDOUM7aUNBQ0Y7NkJBQ0Y7NEJBQ0Qsb0NBQW9DLEVBQUU7Z0NBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7Z0NBQ3ZDLFNBQVMsRUFBRTtvQ0FDVDt3Q0FDRSxPQUFPLEVBQUUsbUJBQW1CO3dDQUM1QixXQUFXLEVBQUUsZ0NBQWdDO3FDQUM5QztpQ0FDRjs2QkFDRjs0QkFDRCxtQ0FBbUMsRUFBRTtnQ0FDbkMsU0FBUyxFQUFFLHVDQUF1Qzs2QkFDbkQ7NEJBQ0Qsd0NBQXdDLEVBQUU7Z0NBQ3hDLFNBQVMsRUFBRSxxQkFBcUI7NkJBQ2pDO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ2FyZE1vZHVsZSxcbiAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkRpYWxvZ01vZHVsZSxcbiAgU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuLi9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXlvdXRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtcmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vcmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1JlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUmVwbGVuaXNobWVudE9yZGVyQ2FuY2VsbGF0aW9uRGlhbG9nTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAncmVwbGVuaXNobWVudERldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXlvdXRDb25maWcpLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBSZXBsZW5pc2htZW50RGV0YWlsSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgUmVwbGVuaXNobWVudERldGFpbFRvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgUmVwbGVuaXNobWVudERldGFpbFNoaXBwaW5nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm92aWRlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICB1c2VFeGlzdGluZzogUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFJlcGxlbmlzaG1lbnREZXRhaWxBY3Rpb25zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFJlcGxlbmlzaG1lbnREZXRhaWxPcmRlckhpc3RvcnlDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVySGlzdG9yeUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=