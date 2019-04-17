/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const pageModules = [
    CartPageModule,
    OrderConfirmationPageModule,
    ProductPageModule,
    GuardsModule,
];
const ɵ0 = { pageLabel: 'homepage', cxPath: 'home' }, ɵ1 = { pageLabel: 'address-book', cxPath: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxPath: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxPath: 'orders' }, ɵ4 = { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }, ɵ5 = { pageLabel: 'login', cxPath: 'login' }, ɵ6 = { pageLabel: 'search', cxPath: 'search' }, ɵ7 = { cxPath: 'category' }, ɵ8 = { cxPath: 'brand' }, ɵ9 = { cxRedirectTo: 'category' }, ɵ10 = { cxRedirectTo: 'category' }, ɵ11 = { cxRedirectTo: 'category' }, ɵ12 = { cxRedirectTo: 'category' }, ɵ13 = { pageLabel: 'payment-details', cxPath: 'paymentManagement' }, ɵ14 = { pageLabel: 'order', cxPath: 'orderDetails' }, ɵ15 = { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }, ɵ16 = { pageLabel: 'resetPassword', cxPath: 'resetPassword' }, ɵ17 = {
    pageLabel: 'update-profile',
    cxPath: 'updateProfile',
};
export class PagesModule {
}
PagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ...pageModules,
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztNQUVqRSxXQUFXLEdBQUc7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsWUFBWTtDQUNiO1dBY2EsRUFBRSxTQUFT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Q0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDOzRCQUN6QyxJQUFJLEtBQXlEO3lCQUM5RDt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOzRCQUN0QyxJQUFJLEtBR0g7eUJBQ0Y7d0JBQ0Qsd0VBQXdFO3dCQUN4RTs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7eUJBQy9CO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZCwgTm90QXV0aEd1YXJkIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExvZ291dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2NhcnQtcGFnZS9jYXJ0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wYWdlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgR3VhcmRzTW9kdWxlIH0gZnJvbSAnLi9ndWFyZHMvZ3VhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlTW9kdWxlcyA9IFtcbiAgQ2FydFBhZ2VNb2R1bGUsXG4gIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSxcbiAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gIEd1YXJkc01vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgcGF0aCB0byBwYWdlIGxhYmVsIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2hvbWVwYWdlJywgY3hQYXRoOiAnaG9tZScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHRoZSBsaW5rIGZyb20gQ01TIGluIE15QWNjb3VudCBkcm9wZG93biBtZW51IChcIm15LWFjY291bnQvYWRkcmVzcy1ib29rXCIpXG4gICAgICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBwYWdlIGxhYmVsIChcImFkZHJlc3MtYm9va1wiKS4gT3Igd2hlbiB3ZSBoYXZlIGEgbWFwcGluZyBmb3IgY29udGVudCBwYWdlcy5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnYWRkcmVzcy1ib29rJywgY3hQYXRoOiAnYWRkcmVzc0Jvb2snIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlUGFzc3dvcmQnLCBjeFBhdGg6ICd1cGRhdGVQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJzJywgY3hQYXRoOiAnb3JkZXJzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZScsIGN4UGF0aDogJ2NoZWNrb3V0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdsb2dpbicsIGN4UGF0aDogJ2xvZ2luJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hQYXRoOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hQYXRoOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFBhdGg6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICAvLyByZWRpcmVjdCBPTEQgbGlua3NcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW4tQ2F0YWxvZ3VlLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW4tQ2F0YWxvZ3VlLzpjYXRlZ29yeTEvOnRpdGxlL2MvOmNhdGVnb3J5Q29kZScsXG4gICAgICAgIHJlZGlyZWN0VG86IG51bGwsXG4gICAgICAgIGRhdGE6IHsgY3hSZWRpcmVjdFRvOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnT3Blbi1DYXRhbG9ndWUvOmNhdGVnb3J5MS86Y2F0ZWdvcnkyLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ09wZW5DYXRhbG9ndWUvOmNhdGVnb3J5MS86Y2F0ZWdvcnkyLzp0aXRsZS9jLzpjYXRlZ29yeUNvZGUnLFxuICAgICAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgICAgICBkYXRhOiB7IGN4UmVkaXJlY3RUbzogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncGF5bWVudC1kZXRhaWxzJywgY3hQYXRoOiAncGF5bWVudE1hbmFnZW1lbnQnIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFBhdGg6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2ZvcmdvdFBhc3N3b3JkJywgY3hQYXRoOiAnZm9yZ290UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3Jlc2V0UGFzc3dvcmQnLCBjeFBhdGg6ICdyZXNldFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ3VwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBjeFBhdGg6ICd1cGRhdGVQcm9maWxlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyBQTEVBU0UgQUREIEFMTCBST1VURVMgQUJPVkUgVEhJUyBMSU5FID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyoqJyxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBIYXJkY29kZWRDaGVja291dENvbXBvbmVudCxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VzTW9kdWxlIHt9XG4iXX0=