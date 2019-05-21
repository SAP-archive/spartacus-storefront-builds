/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CartComponentModule, LogoutGuard, } from '../../../cms-components/index';
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { CartPageModule } from './cart-page/cart-page.module';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';
import { ProductPageModule } from './product-page/product-page.module';
import { defaultRoutingConfig } from './default-routing-config';
/** @type {?} */
const pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
];
const ɵ0 = { pageLabel: 'homepage', cxRoute: 'home' }, ɵ1 = { cxRoute: 'logout' }, ɵ2 = { pageLabel: 'search', cxRoute: 'search' }, ɵ3 = { cxRoute: 'category' }, ɵ4 = { cxRoute: 'brand' }, ɵ5 = { pageLabel: 'order', cxRoute: 'orderDetails' };
export class PagesModule {
}
PagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfig(defaultRoutingConfig),
                    CommonModule,
                    ...pageModules,
                    PageLayoutModule,
                    CartComponentModule,
                    RouterModule.forChild([
                        {
                            // This route can be dropped only when we have a mapping path to page label for content pages
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0,
                        },
                        {
                            path: null,
                            canActivate: [LogoutGuard],
                            component: PageLayoutComponent,
                            data: ɵ1,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ2,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ3,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ4,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ5,
                        },
                    ]),
                ],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixXQUFXLEdBQ1osTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsR0FDakIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O01BRTFELFdBQVcsR0FBRztJQUNsQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGlCQUFpQjtDQUNsQjtXQWVhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BTTFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQU1yQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQU0xQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FNdkIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BTXBCLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBSzdELE1BQU0sT0FBTyxXQUFXOzs7WUFoRHZCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDN0MsWUFBWTtvQkFDWixHQUFHLFdBQVc7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFlBQVksQ0FBQyxRQUFRLENBQUM7d0JBQ3BCOzs0QkFFRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBNEM7eUJBQ2pEO3dCQUNEOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDMUIsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUF1Qjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQTRDO3lCQUNqRDt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBeUI7eUJBQzlCO3dCQUNEOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUFzQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQzs0QkFDdEMsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUFpRDt5QkFDdEQ7cUJBQ0YsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgTG9nb3V0R3VhcmQsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7XG4gIFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gIFBhZ2VMYXlvdXRNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1vZHVsZSB9IGZyb20gJy4vY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS9vcmRlci1jb25maXJtYXRpb24tcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LXJvdXRpbmctY29uZmlnJztcblxuY29uc3QgcGFnZU1vZHVsZXMgPSBbXG4gIENhcnRQYWdlTW9kdWxlLFxuICBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUsXG4gIFByb2R1Y3RQYWdlTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHdlIGhhdmUgYSBtYXBwaW5nIHBhdGggdG8gcGFnZSBsYWJlbCBmb3IgY29udGVudCBwYWdlc1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdob21lcGFnZScsIGN4Um91dGU6ICdob21lJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtMb2dvdXRHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnbG9nb3V0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdjYXRlZ29yeScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUge31cbiJdfQ==