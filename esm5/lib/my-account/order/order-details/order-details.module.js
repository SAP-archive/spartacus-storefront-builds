/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../ui/components/card/card.module';
import { OrderDetailHeadlineComponent } from './order-detail-headline/order-detail-headline.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRXhELGdCQUFnQixHQUFHO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtDQUM3QjtBQUVEO0lBQUE7SUE0QmlDLENBQUM7O2dCQTVCakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7Z0NBQ0QsaUNBQWlDLEVBQUU7b0NBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7aUNBQ25DO2dDQUNELGtDQUFrQyxFQUFFO29DQUNsQyxRQUFRLEVBQUUseUJBQXlCO2lDQUNwQztnQ0FDRCxvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxZQUFZLG1CQUFNLGdCQUFnQixDQUFDO29CQUNuQyxPQUFPLG1CQUFNLGdCQUFnQixDQUFDO29CQUM5QixlQUFlLG1CQUFNLGdCQUFnQixDQUFDO2lCQUN2Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQTVCbEMsSUE0QmtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi91aS9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWhlYWRsaW5lL29yZGVyLWRldGFpbC1oZWFkbGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC10b3RhbHMvb3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuY29uc3QgbW9kdWxlQ29tcG9uZW50cyA9IFtcbiAgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSGVhZGxpbmVDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtaGVhZGxpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtaXRlbXMnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLXRvdGFscycsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNTaGlwcGluZ0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtPcmRlckRldGFpbHNTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc01vZHVsZSB7fVxuIl19