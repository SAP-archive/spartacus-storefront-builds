/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, FeaturesConfigModule, I18nModule, } from '@spartacus/core';
import { ConsignmentTrackingComponent } from '../../../../cms-components/myaccount/order/order-details/order-detail-items/consignment-tracking/consignment-tracking.component';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
import { TrackingEventsComponent } from './order-detail-items/consignment-tracking/tracking-events/tracking-events.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from './order-details.service';
/** @type {?} */
var moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
];
var ɵ0 = { pageLabel: 'order' }, ɵ1 = { cxRoute: 'orderDetails' };
var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
    }
    OrderDetailsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CartSharedModule,
                        CardModule,
                        CommonModule,
                        I18nModule,
                        FeaturesConfigModule,
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
                    declarations: tslib_1.__spread(moduleComponents),
                    exports: tslib_1.__spread(moduleComponents),
                    entryComponents: tslib_1.__spread(moduleComponents),
                },] }
    ];
    return OrderDetailsModule;
}());
export { OrderDetailsModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixvQkFBb0IsRUFDcEIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUlBQWlJLENBQUM7QUFDL0ssT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRXhELGdCQUFnQixHQUFHO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0NBQzdCO1NBY2EsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BTXRCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQWxCekM7SUFBQTtJQStDaUMsQ0FBQzs7Z0JBL0NqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQjtnQ0FDRSxJQUFJLEVBQUUsd0JBQXdCO2dDQUM5QixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFBd0I7NkJBQzdCOzRCQUNEO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0NBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFBNkI7NkJBQ2xDO3lCQUNGLENBQUM7d0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBNEI7NEJBQ2xELGFBQWEsRUFBRTtnQ0FDYixvQ0FBb0MsRUFBRTtvQ0FDcEMsU0FBUyxFQUFFLDRCQUE0QjtpQ0FDeEM7Z0NBQ0QsaUNBQWlDLEVBQUU7b0NBQ2pDLFNBQVMsRUFBRSx5QkFBeUI7aUNBQ3JDO2dDQUNELGtDQUFrQyxFQUFFO29DQUNsQyxTQUFTLEVBQUUsMEJBQTBCO2lDQUN0QztnQ0FDRCxvQ0FBb0MsRUFBRTtvQ0FDcEMsU0FBUyxFQUFFLDRCQUE0QjtpQ0FDeEM7NkJBQ0Y7NEJBQ0QsUUFBUSxFQUFFO2dDQUNSLG1CQUFtQixFQUFFLEtBQUs7NkJBQzNCO3lCQUNGLEVBQUEsQ0FBQzt3QkFDRixhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxZQUFZLG1CQUFNLGdCQUFnQixDQUFDO29CQUNuQyxPQUFPLG1CQUFNLGdCQUFnQixDQUFDO29CQUM5QixlQUFlLG1CQUFNLGdCQUFnQixDQUFDO2lCQUN2Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQS9DbEMsSUErQ2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaGVhZGxpbmUvb3JkZXItZGV0YWlsLWhlYWRsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL3RyYWNraW5nLWV2ZW50cy90cmFja2luZy1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbmNvbnN0IG1vZHVsZUNvbXBvbmVudHMgPSBbXG4gIE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCxcbiAgQ29uc2lnbm1lbnRUcmFja2luZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2d1ZXN0L29yZGVyLzpvcmRlckNvZGUnLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZzogJzEuMicsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyRGV0YWlsc1NlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=