/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
import { OrderDetailItemsComponent } from './order-detail-items/order-detail-items.component';
import { OrderDetailTotalsComponent } from './order-detail-totals/order-detail-totals.component';
import { OrderDetailShippingComponent } from './order-detail-shipping/order-detail-shipping.component';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../ui/components/card/card.module';
import { OrderDetailsService } from './order-details.service';
/** @type {?} */
const moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
];
export class OrderDetailsModule {
}
OrderDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CardModule,
                    CommonModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountOrderDetailsHeadlineComponent: {
                                selector: 'cx-order-details-headline',
                            },
                            AccountOrderDetailsItemsComponent: {
                                selector: 'cx-order-details-items',
                            },
                            AccountOrderDetailsTotalsComponent: {
                                selector: 'cx-order-details-totals',
                            },
                            AccountOrderDetailsShippingComponent: {
                                selector: 'cx-order-details-shipping',
                            },
                        },
                    }))),
                ],
                providers: [OrderDetailsService],
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFeEQsZ0JBQWdCLEdBQUc7SUFDdkIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQzdCO0FBOEJELE1BQU0sT0FBTyxrQkFBa0I7OztZQTVCOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixVQUFVO29CQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixvQ0FBb0MsRUFBRTtnQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjs2QkFDdEM7NEJBQ0QsaUNBQWlDLEVBQUU7Z0NBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7NkJBQ25DOzRCQUNELGtDQUFrQyxFQUFFO2dDQUNsQyxRQUFRLEVBQUUseUJBQXlCOzZCQUNwQzs0QkFDRCxvQ0FBb0MsRUFBRTtnQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjs2QkFDdEM7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1oZWFkbGluZS9vcmRlci1kZXRhaWwtaGVhZGxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1pdGVtcy9vcmRlci1kZXRhaWwtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtdG90YWxzL29yZGVyLWRldGFpbC10b3RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC1zaGlwcGluZy9vcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vdWkvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbmNvbnN0IG1vZHVsZUNvbXBvbmVudHMgPSBbXG4gIE9yZGVyRGV0YWlsSGVhZGxpbmVDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsSXRlbXNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsVG90YWxzQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWhlYWRsaW5lJyxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0l0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1RvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy10b3RhbHMnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtc2hpcHBpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT3JkZXJEZXRhaWxzU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNNb2R1bGUge31cbiJdfQ==