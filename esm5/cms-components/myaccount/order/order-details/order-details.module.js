import { __decorate, __read, __spread } from "tslib";
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
var moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
    OrderConsignedEntriesComponent,
];
var ɵ0 = { pageLabel: 'order', cxRoute: 'orderGuest' }, ɵ1 = { cxRoute: 'orderDetails' };
var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
    }
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
            declarations: __spread(moduleComponents),
            exports: __spread(moduleComponents),
            entryComponents: __spread(moduleComponents),
        })
    ], OrderDetailsModule);
    return OrderDetailsModule;
}());
export { OrderDetailsModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBR1Qsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUlBQWlJLENBQUM7QUFDL0ssT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDaEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0NBQy9CLENBQUM7U0FnQlksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FNN0MsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBa0N6QztJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBdEQ5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixvQkFBb0I7Z0JBQ3BCLGdCQUFnQjtnQkFDaEIsU0FBUztnQkFDVCxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBQStDO3FCQUNwRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBQTZCO3FCQUNsQztpQkFDRixDQUFDO2dCQUNGLGFBQWE7YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBNkI7b0JBQy9DLGFBQWEsRUFBRTt3QkFDYixtQ0FBbUMsRUFBRTs0QkFDbkMsU0FBUyxFQUFFLDJCQUEyQjt5QkFDdkM7d0JBQ0Qsb0NBQW9DLEVBQUU7NEJBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7eUJBQ3hDO3dCQUNELGlDQUFpQyxFQUFFOzRCQUNqQyxTQUFTLEVBQUUseUJBQXlCO3lCQUNyQzt3QkFDRCxrQ0FBa0MsRUFBRTs0QkFDbEMsU0FBUyxFQUFFLDBCQUEwQjt5QkFDdEM7d0JBQ0Qsb0NBQW9DLEVBQUU7NEJBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7eUJBQ3hDO3FCQUNGO29CQUNELFFBQVEsRUFBRTt3QkFDUixtQkFBbUIsRUFBRSxLQUFLO3FCQUMzQjtpQkFDRixDQUFDO2dCQUNGLG1CQUFtQjthQUNwQjtZQUNELFlBQVksV0FBTSxnQkFBZ0IsQ0FBQztZQUNuQyxPQUFPLFdBQU0sZ0JBQWdCLENBQUM7WUFDOUIsZUFBZSxXQUFNLGdCQUFnQixDQUFDO1NBQ3ZDLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWFjdGlvbnMvb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1oZWFkbGluZS9vcmRlci1kZXRhaWwtaGVhZGxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYWNraW5nRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvdHJhY2tpbmctZXZlbnRzL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbmNvbnN0IG1vZHVsZUNvbXBvbmVudHMgPSBbXG4gIE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG4gIFRyYWNraW5nRXZlbnRzQ29tcG9uZW50LFxuICBDb25zaWdubWVudFRyYWNraW5nQ29tcG9uZW50LFxuICBPcmRlckNvbnNpZ25lZEVudHJpZXNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJHdWVzdCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0FjdGlvbnNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZzogJzEuMicsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNNb2R1bGUge31cbiJdfQ==