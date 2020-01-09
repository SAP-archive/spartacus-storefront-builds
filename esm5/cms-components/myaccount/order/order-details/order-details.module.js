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
var moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixvQkFBb0IsRUFDcEIsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlJQUFpSSxDQUFDO0FBQy9LLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzlILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztJQUV2RixnQkFBZ0IsR0FBRztJQUN2QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7Q0FDN0I7U0FnQmEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FNN0MsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBcEJ6QztJQUFBO0lBb0RpQyxDQUFDOztnQkFwRGpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsU0FBUzt3QkFDVCxZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQjtnQ0FDRSxJQUFJLEVBQUUsSUFBSTtnQ0FDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0NBQzNCLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFBK0M7NkJBQ3BEOzRCQUNEO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0NBQ3RDLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLElBQUksSUFBNkI7NkJBQ2xDO3lCQUNGLENBQUM7d0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBNEI7NEJBQ2xELGFBQWEsRUFBRTtnQ0FDYixtQ0FBbUMsRUFBRTtvQ0FDbkMsU0FBUyxFQUFFLDJCQUEyQjtpQ0FDdkM7Z0NBQ0Qsb0NBQW9DLEVBQUU7b0NBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7aUNBQ3hDO2dDQUNELGlDQUFpQyxFQUFFO29DQUNqQyxTQUFTLEVBQUUseUJBQXlCO2lDQUNyQztnQ0FDRCxrQ0FBa0MsRUFBRTtvQ0FDbEMsU0FBUyxFQUFFLDBCQUEwQjtpQ0FDdEM7Z0NBQ0Qsb0NBQW9DLEVBQUU7b0NBQ3BDLFNBQVMsRUFBRSw0QkFBNEI7aUNBQ3hDOzZCQUNGOzRCQUNELFFBQVEsRUFBRTtnQ0FDUixtQkFBbUIsRUFBRSxLQUFLOzZCQUMzQjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDaEMsWUFBWSxtQkFBTSxnQkFBZ0IsQ0FBQztvQkFDbkMsT0FBTyxtQkFBTSxnQkFBZ0IsQ0FBQztvQkFDOUIsZUFBZSxtQkFBTSxnQkFBZ0IsQ0FBQztpQkFDdkM7O0lBQ2dDLHlCQUFDO0NBQUEsQUFwRGxDLElBb0RrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL3RyYWNraW5nLWV2ZW50cy90cmFja2luZy1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1oZWFkbGluZS9vcmRlci1kZXRhaWwtaGVhZGxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWFjdGlvbnMvb3JkZXItZGV0YWlsLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcblxuY29uc3QgbW9kdWxlQ29tcG9uZW50cyA9IFtcbiAgT3JkZXJEZXRhaWxBY3Rpb25zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCxcbiAgVHJhY2tpbmdFdmVudHNDb21wb25lbnQsXG4gIENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVyJywgY3hSb3V0ZTogJ29yZGVyR3Vlc3QnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWcgfCBGZWF0dXJlc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNBY3Rpb25zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEFjdGlvbnNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNIZWFkbGluZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0l0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1NoaXBwaW5nQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgIGNvbnNpZ25tZW50VHJhY2tpbmc6ICcxLjInLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtPcmRlckRldGFpbHNTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc01vZHVsZSB7fVxuIl19