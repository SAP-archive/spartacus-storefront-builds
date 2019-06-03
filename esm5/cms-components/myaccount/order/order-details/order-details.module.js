/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { CardModule } from '../../../../shared/components/card/card.module';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
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
var ɵ0 = { pageLabel: 'order', cxRoute: 'orderDetails' };
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
                        RouterModule.forChild([
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ0,
                            },
                        ]),
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUV4RCxnQkFBZ0IsR0FBRztJQUN2Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7Q0FDN0I7U0FhYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQVg3RDtJQUFBO0lBb0NpQyxDQUFDOztnQkFwQ2pDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQjtnQ0FDRSxJQUFJLEVBQUUsSUFBSTtnQ0FDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO2dDQUN0QyxTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBQWlEOzZCQUN0RDt5QkFDRixDQUFDO3dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7Z0NBQ0QsaUNBQWlDLEVBQUU7b0NBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7aUNBQ25DO2dDQUNELGtDQUFrQyxFQUFFO29DQUNsQyxRQUFRLEVBQUUseUJBQXlCO2lDQUNwQztnQ0FDRCxvQ0FBb0MsRUFBRTtvQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjtpQ0FDdEM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxZQUFZLG1CQUFNLGdCQUFnQixDQUFDO29CQUNuQyxPQUFPLG1CQUFNLGdCQUFnQixDQUFDO29CQUM5QixlQUFlLG1CQUFNLGdCQUFnQixDQUFDO2lCQUN2Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQXBDbEMsSUFvQ2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWhlYWRsaW5lL29yZGVyLWRldGFpbC1oZWFkbGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLWl0ZW1zL29yZGVyLWRldGFpbC1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXNoaXBwaW5nL29yZGVyLWRldGFpbC1zaGlwcGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLWRldGFpbC10b3RhbHMvb3JkZXItZGV0YWlsLXRvdGFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuY29uc3QgbW9kdWxlQ29tcG9uZW50cyA9IFtcbiAgT3JkZXJEZXRhaWxIZWFkbGluZUNvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxJdGVtc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxUb3RhbHNDb21wb25lbnQsXG4gIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0hlYWRsaW5lQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWhlYWRsaW5lJyxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc0l0ZW1zQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLWl0ZW1zJyxcbiAgICAgICAgfSxcbiAgICAgICAgQWNjb3VudE9yZGVyRGV0YWlsc1RvdGFsc0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy10b3RhbHMnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzU2hpcHBpbmdDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtc2hpcHBpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT3JkZXJEZXRhaWxzU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxuICBleHBvcnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLm1vZHVsZUNvbXBvbmVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNNb2R1bGUge31cbiJdfQ==