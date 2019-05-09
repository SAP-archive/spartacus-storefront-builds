/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, NotAuthGuard, ConfigModule } from '@spartacus/core';
import { LogoutModule } from '../../../cms-components/index';
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { CmsPageGuard } from '../../cms/guards/cms-page.guard';
import { CartPageModule } from './cart-page/cart-page.module';
import { HardcodedCheckoutComponent } from './checkout-page.interceptor';
import { CartNotEmptyGuard } from './guards/cart-not-empty.guard';
import { GuardsModule } from './guards/guards.module';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';
import { ProductPageModule } from './product-page/product-page.module';
import { defaultRoutingConfig } from './default-routing-config';
/** @type {?} */
var pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    GuardsModule,
];
var ɵ0 = { pageLabel: 'homepage', cxRoute: 'home' }, ɵ1 = { pageLabel: 'address-book', cxRoute: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxRoute: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxRoute: 'orders' }, ɵ4 = {
    pageLabel: 'multiStepCheckoutSummaryPage',
    cxRoute: 'checkout',
}, ɵ5 = { pageLabel: 'login', cxRoute: 'login' }, ɵ6 = { pageLabel: 'search', cxRoute: 'search' }, ɵ7 = { cxRoute: 'category' }, ɵ8 = { cxRoute: 'brand' }, ɵ9 = { pageLabel: 'update-email', cxRoute: 'updateEmail' }, ɵ10 = { pageLabel: 'payment-details', cxRoute: 'paymentManagement' }, ɵ11 = { pageLabel: 'order', cxRoute: 'orderDetails' }, ɵ12 = { pageLabel: 'forgotPassword', cxRoute: 'forgotPassword' }, ɵ13 = { pageLabel: 'resetPassword', cxRoute: 'resetPassword' }, ɵ14 = {
    pageLabel: 'update-profile',
    cxRoute: 'updateProfile',
}, ɵ15 = { pageLabel: 'close-account', cxRoute: 'closeAccount' };
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        ConfigModule.withConfig(defaultRoutingConfig),
                        CommonModule
                    ], pageModules, [
                        PageLayoutModule,
                        LogoutModule,
                        RouterModule.forChild([
                            {
                                // This route can be dropped only when we have a mapping path to page label for content pages
                                path: null,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ0,
                            },
                            {
                                // This route can be dropped only when the link from CMS in MyAccount dropdown menu ("my-account/address-book")
                                // is the same as the page label ("address-book"). Or when we have a mapping for content pages.
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ1,
                                component: PageLayoutComponent,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ2,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ3,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard, CartNotEmptyGuard],
                                component: PageLayoutComponent,
                                data: ɵ4,
                            },
                            {
                                path: null,
                                canActivate: [NotAuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ5,
                            },
                            {
                                path: null,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ6,
                            },
                            {
                                path: null,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ7,
                            },
                            {
                                path: null,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ8,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ9,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ10,
                                component: PageLayoutComponent,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ11,
                            },
                            {
                                path: null,
                                canActivate: [NotAuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ12,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [NotAuthGuard, CmsPageGuard],
                                data: ɵ13,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ14,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ15,
                            },
                        ]),
                    ]),
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: HardcodedCheckoutComponent,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return PagesModule;
}());
export { PagesModule };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixnQkFBZ0IsR0FDakIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFFMUQsV0FBVyxHQUFHO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pC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Q0Q7Z0NBQ0UsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsU0FBUyxFQUFFLG1CQUFtQjtnQ0FDOUIsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztnQ0FDdEMsSUFBSSxLQUF5RDs2QkFDOUQ7eUJBQ0YsQ0FBQztzQkFDSDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLDBCQUEwQjs0QkFDcEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBQ3lCLGtCQUFDO0NBQUEsQUEzSDNCLElBMkgyQjtTQUFkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgTm90QXV0aEd1YXJkLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTG9nb3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbiAgUGFnZUxheW91dE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2NhcnQtcGFnZS9jYXJ0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wYWdlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgR3VhcmRzTW9kdWxlIH0gZnJvbSAnLi9ndWFyZHMvZ3VhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuXG5jb25zdCBwYWdlTW9kdWxlcyA9IFtcbiAgQ2FydFBhZ2VNb2R1bGUsXG4gIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSxcbiAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gIEd1YXJkc01vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Um91dGluZ0NvbmZpZyksXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIC4uLnBhZ2VNb2R1bGVzLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgTG9nb3V0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHdlIGhhdmUgYSBtYXBwaW5nIHBhdGggdG8gcGFnZSBsYWJlbCBmb3IgY29udGVudCBwYWdlc1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdob21lcGFnZScsIGN4Um91dGU6ICdob21lJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gdGhlIGxpbmsgZnJvbSBDTVMgaW4gTXlBY2NvdW50IGRyb3Bkb3duIG1lbnUgKFwibXktYWNjb3VudC9hZGRyZXNzLWJvb2tcIilcbiAgICAgICAgLy8gaXMgdGhlIHNhbWUgYXMgdGhlIHBhZ2UgbGFiZWwgKFwiYWRkcmVzcy1ib29rXCIpLiBPciB3aGVuIHdlIGhhdmUgYSBtYXBwaW5nIGZvciBjb250ZW50IHBhZ2VzLlxuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdhZGRyZXNzLWJvb2snLCBjeFJvdXRlOiAnYWRkcmVzc0Jvb2snIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlUGFzc3dvcmQnLCBjeFJvdXRlOiAndXBkYXRlUGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVycycsIGN4Um91dGU6ICdvcmRlcnMnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ211bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2UnLFxuICAgICAgICAgIGN4Um91dGU6ICdjaGVja291dCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2xvZ2luJywgY3hSb3V0ZTogJ2xvZ2luJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdjYXRlZ29yeScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlLWVtYWlsJywgY3hSb3V0ZTogJ3VwZGF0ZUVtYWlsJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncGF5bWVudC1kZXRhaWxzJywgY3hSb3V0ZTogJ3BheW1lbnRNYW5hZ2VtZW50JyB9LFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVyJywgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnZm9yZ290UGFzc3dvcmQnLCBjeFJvdXRlOiAnZm9yZ290UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3Jlc2V0UGFzc3dvcmQnLCBjeFJvdXRlOiAncmVzZXRQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTGFiZWw6ICd1cGRhdGUtcHJvZmlsZScsXG4gICAgICAgICAgY3hSb3V0ZTogJ3VwZGF0ZVByb2ZpbGUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdjbG9zZS1hY2NvdW50JywgY3hSb3V0ZTogJ2Nsb3NlQWNjb3VudCcgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUge31cbiJdfQ==