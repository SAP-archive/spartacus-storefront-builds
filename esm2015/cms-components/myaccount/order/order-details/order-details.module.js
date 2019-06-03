/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
];
const ɵ0 = { pageLabel: 'order', cxRoute: 'orderDetails' };
export class OrderDetailsModule {
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
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BRXhELGdCQUFnQixHQUFHO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtDQUM3QjtXQWFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBeUI3RCxNQUFNLE9BQU8sa0JBQWtCOzs7WUFwQzlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOzRCQUN0QyxTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQWlEO3lCQUN0RDtxQkFDRixDQUFDO29CQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixvQ0FBb0MsRUFBRTtnQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjs2QkFDdEM7NEJBQ0QsaUNBQWlDLEVBQUU7Z0NBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7NkJBQ25DOzRCQUNELGtDQUFrQyxFQUFFO2dDQUNsQyxRQUFRLEVBQUUseUJBQXlCOzZCQUNwQzs0QkFDRCxvQ0FBb0MsRUFBRTtnQ0FDcEMsUUFBUSxFQUFFLDJCQUEyQjs2QkFDdEM7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaGVhZGxpbmUvb3JkZXItZGV0YWlsLWhlYWRsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtaXRlbXMvb3JkZXItZGV0YWlsLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFNoaXBwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtc2hpcHBpbmcvb3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItZGV0YWlsLXRvdGFscy9vcmRlci1kZXRhaWwtdG90YWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5jb25zdCBtb2R1bGVDb21wb25lbnRzID0gW1xuICBPcmRlckRldGFpbEhlYWRsaW5lQ29tcG9uZW50LFxuICBPcmRlckRldGFpbEl0ZW1zQ29tcG9uZW50LFxuICBPcmRlckRldGFpbFRvdGFsc0NvbXBvbmVudCxcbiAgT3JkZXJEZXRhaWxTaGlwcGluZ0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicsIGN4Um91dGU6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSGVhZGxpbmVDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtaGVhZGxpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzSXRlbXNDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LW9yZGVyLWRldGFpbHMtaXRlbXMnLFxuICAgICAgICB9LFxuICAgICAgICBBY2NvdW50T3JkZXJEZXRhaWxzVG90YWxzQ29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1vcmRlci1kZXRhaWxzLXRvdGFscycsXG4gICAgICAgIH0sXG4gICAgICAgIEFjY291bnRPcmRlckRldGFpbHNTaGlwcGluZ0NvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtb3JkZXItZGV0YWlscy1zaGlwcGluZycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtPcmRlckRldGFpbHNTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5tb2R1bGVDb21wb25lbnRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4ubW9kdWxlQ29tcG9uZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc01vZHVsZSB7fVxuIl19