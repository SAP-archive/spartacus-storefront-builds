/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, NotAuthGuard } from '@spartacus/core';
import { LogoutModule } from '../../../cms-components/index';
import { CmsPageGuard } from '../../cms/guards/cms-page.guard';
import { PageLayoutComponent } from '../../cms/page-layout/page-layout.component';
import { PageLayoutModule } from '../../cms/page-layout/page-layout.module';
import { CartPageModule } from './cart-page/cart-page.module';
import { HardcodedCheckoutComponent } from './checkout-page.interceptor';
import { CartNotEmptyGuard } from './guards/cart-not-empty.guard';
import { GuardsModule } from './guards/guards.module';
import { OrderConfirmationPageModule } from './order-confirmation-page/order-confirmation-page.module';
import { ProductPageModule } from './product-page/product-page.module';
/** @type {?} */
var pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    GuardsModule,
];
var ɵ0 = { pageLabel: 'homepage', cxPath: 'home' }, ɵ1 = { pageLabel: 'address-book', cxPath: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxPath: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxPath: 'orders' }, ɵ4 = { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }, ɵ5 = { pageLabel: 'login', cxPath: 'login' }, ɵ6 = { pageLabel: 'search', cxPath: 'search' }, ɵ7 = { cxPath: 'category' }, ɵ8 = { cxPath: 'brand' }, ɵ9 = { cxRedirectTo: 'category' }, ɵ10 = { cxRedirectTo: 'category' }, ɵ11 = { cxRedirectTo: 'category' }, ɵ12 = { cxRedirectTo: 'category' }, ɵ13 = { pageLabel: 'payment-details', cxPath: 'paymentManagement' }, ɵ14 = { pageLabel: 'order', cxPath: 'orderDetails' }, ɵ15 = { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }, ɵ16 = { pageLabel: 'resetPassword', cxPath: 'resetPassword' }, ɵ17 = {
    pageLabel: 'update-profile',
    cxPath: 'updateProfile',
};
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
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
                            // redirect OLD links
                            {
                                path: 'Open-Catalogue/:title/c/:categoryCode',
                                redirectTo: null,
                                data: ɵ9,
                            },
                            {
                                path: 'Open-Catalogue/:category1/:title/c/:categoryCode',
                                redirectTo: null,
                                data: ɵ10,
                            },
                            {
                                path: 'Open-Catalogue/:category1/:category2/:title/c/:categoryCode',
                                redirectTo: null,
                                data: ɵ11,
                            },
                            {
                                path: 'OpenCatalogue/:category1/:category2/:title/c/:categoryCode',
                                redirectTo: null,
                                data: ɵ12,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ13,
                                component: PageLayoutComponent,
                            },
                            {
                                path: null,
                                canActivate: [AuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ14,
                            },
                            {
                                path: null,
                                canActivate: [NotAuthGuard, CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ15,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [NotAuthGuard, CmsPageGuard],
                                data: ɵ16,
                            },
                            {
                                path: null,
                                component: PageLayoutComponent,
                                canActivate: [AuthGuard, CmsPageGuard],
                                data: ɵ17,
                            },
                            // PLEASE ADD ALL ROUTES ABOVE THIS LINE ===============================
                            {
                                path: '**',
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFFakUsV0FBVyxHQUFHO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDYjtTQWNhLEVBQUUsU0FB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QVksRUFBRSxZQUFZLENBQUM7Z0NBQ3pDLElBQUksS0FBeUQ7NkJBQzlEOzRCQUNEO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLFNBQVMsRUFBRSxtQkFBbUI7Z0NBQzlCLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0NBQ3RDLElBQUksS0FHSDs2QkFDRjs0QkFDRCx3RUFBd0U7NEJBQ3hFO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDM0IsU0FBUyxFQUFFLG1CQUFtQjs2QkFDL0I7eUJBQ0YsQ0FBQztzQkFDSDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLDBCQUEwQjs0QkFDcEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBQ3lCLGtCQUFDO0NBQUEsQUF0STNCLElBc0kyQjtTQUFkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgTm90QXV0aEd1YXJkIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExvZ291dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2NhcnQtcGFnZS9jYXJ0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wYWdlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgR3VhcmRzTW9kdWxlIH0gZnJvbSAnLi9ndWFyZHMvZ3VhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlTW9kdWxlcyA9IFtcbiAgQ2FydFBhZ2VNb2R1bGUsXG4gIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSxcbiAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gIEd1YXJkc01vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgcGF0aCB0byBwYWdlIGxhYmVsIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2hvbWVwYWdlJywgY3hQYXRoOiAnaG9tZScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHRoZSBsaW5rIGZyb20gQ01TIGluIE15QWNjb3VudCBkcm9wZG93biBtZW51IChcIm15LWFjY291bnQvYWRkcmVzcy1ib29rXCIpXG4gICAgICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBwYWdlIGxhYmVsIChcImFkZHJlc3MtYm9va1wiKS4gT3Igd2hlbiB3ZSBoYXZlIGEgbWFwcGluZyBmb3IgY29udGVudCBwYWdlcy5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnYWRkcmVzcy1ib29rJywgY3hQYXRoOiAnYWRkcmVzc0Jvb2snIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlUGFzc3dvcmQnLCBjeFBhdGg6ICd1cGRhdGVQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJzJywgY3hQYXRoOiAnb3JkZXJzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZScsIGN4UGF0aDogJ2NoZWNrb3V0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdsb2dpbicsIGN4UGF0aDogJ2xvZ2luJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hQYXRoOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hQYXRoOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFBhdGg6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICAvLyByZWRpcmVjdCBPTEQgbGlua3NcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW4tQ2F0YWxvZ3VlLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW4tQ2F0YWxvZ3VlLzpjYXRlZ29yeTEvOnRpdGxlL2MvOmNhdGVnb3J5Q29kZScsXG4gICAgICAgIHJlZGlyZWN0VG86IG51bGwsXG4gICAgICAgIGRhdGE6IHsgY3hSZWRpcmVjdFRvOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnT3Blbi1DYXRhbG9ndWUvOmNhdGVnb3J5MS86Y2F0ZWdvcnkyLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW5DYXRhbG9ndWUvOmNhdGVnb3J5MS86Y2F0ZWdvcnkyLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncGF5bWVudC1kZXRhaWxzJywgY3hQYXRoOiAncGF5bWVudE1hbmFnZW1lbnQnIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFBhdGg6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2ZvcmdvdFBhc3N3b3JkJywgY3hQYXRoOiAnZm9yZ290UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3Jlc2V0UGFzc3dvcmQnLCBjeFBhdGg6ICdyZXNldFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ3VwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBjeFBhdGg6ICd1cGRhdGVQcm9maWxlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBQTEVBU0UgQUREIEFMTCBST1VURVMgQUJPVkUgVEhJUyBMSU5FID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyoqJyxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBIYXJkY29kZWRDaGVja291dENvbXBvbmVudCxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VzTW9kdWxlIHt9XG4iXX0=