/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, FeaturesConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ConsignmentTrackingComponent } from '../../../../cms-components/myaccount/order/order-details/order-detail-items/consignment-tracking/consignment-tracking.component';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/index';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { OrderDetailActionsComponent } from './order-detail-actions/order-detail-actions.component';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
import { TrackingEventsComponent } from './order-detail-items/consignment-tracking/tracking-events/tracking-events.component';
import { OrderConsignedEntriesComponent } from './order-detail-items/order-consigned-entries/order-consigned-entries.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailsService } from './order-details.service';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
/** @type {?} */
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
                                path: null,
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
                    declarations: tslib_1.__spread(moduleComponents),
                    exports: tslib_1.__spread(moduleComponents),
                    entryComponents: tslib_1.__spread(moduleComponents),
                },] }
    ];
    return OrderDetailsModule;
}());
export { OrderDetailsModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlJQUFpSSxDQUFDO0FBQy9LLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzlILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztJQUV2RixnQkFBZ0IsR0FBRztJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0NBQy9CO1NBZ0JhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BTTdDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQXBCekM7SUFBQTtJQW9EaUMsQ0FBQzs7Z0JBcERqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEI7Z0NBQ0UsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUMzQixTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBQStDOzZCQUNwRDs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsSUFBSTtnQ0FDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO2dDQUN0QyxTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBQTZCOzZCQUNsQzt5QkFDRixDQUFDO3dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQTRCOzRCQUNsRCxhQUFhLEVBQUU7Z0NBQ2IsbUNBQW1DLEVBQUU7b0NBQ25DLFNBQVMsRUFBRSwyQkFBMkI7aUNBQ3ZDO2dDQUNELG9DQUFvQyxFQUFFO29DQUNwQyxTQUFTLEVBQUUsNEJBQTRCO2lDQUN4QztnQ0FDRCxpQ0FBaUMsRUFBRTtvQ0FDakMsU0FBUyxFQUFFLHlCQUF5QjtpQ0FDckM7Z0NBQ0Qsa0NBQWtDLEVBQUU7b0NBQ2xDLFNBQVMsRUFBRSwwQkFBMEI7aUNBQ3RDO2dDQUNELG9DQUFvQyxFQUFFO29DQUNwQyxTQUFTLEVBQUUsNEJBQTRCO2lDQUN4Qzs2QkFDRjs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1IsbUJBQW1CLEVBQUUsS0FBSzs2QkFDM0I7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLGFBQWE7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFlBQVksbUJBQU0sZ0JBQWdCLENBQUM7b0JBQ25DLE9BQU8sbUJBQU0sZ0JBQWdCLENBQUM7b0JBQzlCLGVBQWUsbUJBQU0sZ0JBQWdCLENBQUM7aUJBQ3ZDOztJQUNnQyx5QkFBQztDQUFBLEFBcERsQyxJQW9Ea0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgRmVhdHVyZXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL2NvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWFjdGlvbnMvb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1oZWFkbGluZS9vcmRlci1kZXRhaWwtaGVhZGxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYWNraW5nRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvdHJhY2tpbmctZXZlbnRzL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb25zaWduZWRFbnRyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMvb3JkZXItY29uc2lnbmVkLWVudHJpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcblxuY29uc3QgbW9kdWxlQ29tcG9uZW50cyA9IFtcbiAgT3JkZXJEZXRhaWxBY3Rpb25zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCxcbiAgVHJhY2tpbmdFdmVudHNDb21wb25lbnQsXG4gIENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQsXG4gIE9yZGVyQ29uc2lnbmVkRW50cmllc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJHdWVzdCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0FjdGlvbnNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZzogJzEuMicsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyRGV0YWlsc1NlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=