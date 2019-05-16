/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CartComponentModule, CartNotEmptyGuard, LogoutGuard, } from '../../../cms-components/index';
import { CmsPageGuard } from '../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { CartPageModule } from './cart-page/cart-page.module';
import { HardcodedCheckoutComponent } from './checkout-page.interceptor';
import { defaultRoutingConfig } from './default-routing-config';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';
import { ProductPageModule } from './product-page/product-page.module';
/** @type {?} */
const pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
];
const ɵ0 = { pageLabel: 'homepage', cxRoute: 'home' }, ɵ1 = {
    pageLabel: 'multiStepCheckoutSummaryPage',
    cxRoute: 'checkout',
}, ɵ2 = { cxRoute: 'logout' }, ɵ3 = { pageLabel: 'search', cxRoute: 'search' }, ɵ4 = { cxRoute: 'category' }, ɵ5 = { cxRoute: 'brand' }, ɵ6 = { pageLabel: 'order', cxRoute: 'orderDetails' };
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
                            canActivate: [AuthGuard, CmsPageGuard, CartNotEmptyGuard],
                            component: PageLayoutComponent,
                            data: ɵ1,
                        },
                        {
                            path: null,
                            canActivate: [LogoutGuard],
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
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ5,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ6,
                        },
                    ]),
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: HardcodedCheckoutComponent,
                        multi: true,
                    },
                ],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsV0FBVyxHQUNaLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztNQUVqRSxXQUFXLEdBQUc7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixpQkFBaUI7Q0FDbEI7V0FlYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQU0xQztJQUNKLFNBQVMsRUFBRSw4QkFBOEI7SUFDekMsT0FBTyxFQUFFLFVBQVU7Q0FDcEIsT0FNSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FNckIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FNMUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BTXZCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQU1wQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtBQVk3RCxNQUFNLE9BQU8sV0FBVzs7O1lBaEV2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7b0JBQzdDLFlBQVk7b0JBQ1osR0FBRyxXQUFXO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs7NEJBRUUsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQTRDO3lCQUNqRDt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDOzRCQUN6RCxTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBR0g7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDOzRCQUMxQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQXVCO3lCQUM1Qjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBNEM7eUJBQ2pEO3dCQUNEOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUF5Qjt5QkFDOUI7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQXNCO3lCQUMzQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOzRCQUN0QyxTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBQWlEO3lCQUN0RDtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICBDYXJ0Tm90RW1wdHlHdWFyZCxcbiAgTG9nb3V0R3VhcmQsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7XG4gIFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gIFBhZ2VMYXlvdXRNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1vZHVsZSB9IGZyb20gJy4vY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXBhZ2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgZGVmYXVsdFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS9vcmRlci1jb25maXJtYXRpb24tcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UubW9kdWxlJztcblxuY29uc3QgcGFnZU1vZHVsZXMgPSBbXG4gIENhcnRQYWdlTW9kdWxlLFxuICBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUsXG4gIFByb2R1Y3RQYWdlTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHdlIGhhdmUgYSBtYXBwaW5nIHBhdGggdG8gcGFnZSBsYWJlbCBmb3IgY29udGVudCBwYWdlc1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdob21lcGFnZScsIGN4Um91dGU6ICdob21lJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTGFiZWw6ICdtdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlJyxcbiAgICAgICAgICBjeFJvdXRlOiAnY2hlY2tvdXQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtMb2dvdXRHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnbG9nb3V0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdjYXRlZ29yeScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSB7fVxuIl19