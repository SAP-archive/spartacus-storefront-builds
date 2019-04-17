/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
];
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
                    declarations: tslib_1.__spread(moduleComponents),
                    exports: tslib_1.__spread(moduleComponents),
                    entryComponents: tslib_1.__spread(moduleComponents),
                },] }
    ];
    return OrderDetailsModule;
}());
export { OrderDetailsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRXhELGdCQUFnQixHQUFHO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtDQUM3QjtBQUVEO0lBQUE7SUE0QmlDLENBQUM7O2dCQTVCakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7Z0NBQ0QsaUNBQWlDLEVBQUU7b0NBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7aUNBQ25DO2dDQUNELGtDQUFrQyxFQUFFO29DQUNsQyxRQUFRLEVBQUUseUJBQXlCO2lDQUNwQztnQ0FDRCxvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxZQUFZLG1CQUFNLGdCQUFnQixDQUFDO29CQUNuQyxPQUFPLG1CQUFNLGdCQUFnQixDQUFDO29CQUM5QixlQUFlLG1CQUFNLGdCQUFnQixDQUFDO2lCQUN2Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQTVCbEMsSUE0QmtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaGVhZGxpbmUvb3JkZXItZGV0YWlsLWhlYWRsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXRvdGFscy9vcmRlci1kZXRhaWwtdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcvb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1xuICBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNIZWFkbGluZUNvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1oZWFkbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNJdGVtc0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1pdGVtcycsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNUb3RhbHNDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtdG90YWxzJyxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1NoaXBwaW5nQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLXNoaXBwaW5nJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW09yZGVyRGV0YWlsc1NlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZXhwb3J0czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzTW9kdWxlIHt9XG4iXX0=