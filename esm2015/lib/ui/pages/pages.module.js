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
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { CmsPageGuard } from '../../cms/guards/cms-page.guard';
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
const ɵ0 = { pageLabel: 'homepage', cxRoute: 'home' }, ɵ1 = { pageLabel: 'address-book', cxRoute: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxRoute: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxRoute: 'orders' }, ɵ4 = {
    pageLabel: 'multiStepCheckoutSummaryPage',
    cxRoute: 'checkout',
}, ɵ5 = { pageLabel: 'login', cxRoute: 'login' }, ɵ6 = { pageLabel: 'search', cxRoute: 'search' }, ɵ7 = { cxRoute: 'category' }, ɵ8 = { cxRoute: 'brand' }, ɵ9 = { pageLabel: 'update-email', cxRoute: 'updateEmail' }, ɵ10 = { pageLabel: 'payment-details', cxRoute: 'paymentManagement' }, ɵ11 = { pageLabel: 'order', cxRoute: 'orderDetails' }, ɵ12 = { pageLabel: 'forgotPassword', cxRoute: 'forgotPassword' }, ɵ13 = { pageLabel: 'resetPassword', cxRoute: 'resetPassword' }, ɵ14 = {
    pageLabel: 'update-profile',
    cxRoute: 'updateProfile',
}, ɵ15 = { pageLabel: 'close-account', cxRoute: 'closeAccount' };
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O01BRWpFLFdBQVcsR0FBRztJQUNsQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2I7V0FjYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0s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OzRCQUN0QyxJQUFJLEtBQXlEO3lCQUM5RDtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIE5vdEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQge1xuICBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICBQYWdlTGF5b3V0TW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1vZHVsZSB9IGZyb20gJy4vY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXBhZ2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuL2d1YXJkcy9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBHdWFyZHNNb2R1bGUgfSBmcm9tICcuL2d1YXJkcy9ndWFyZHMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uLXBhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZSc7XG5cbmNvbnN0IHBhZ2VNb2R1bGVzID0gW1xuICBDYXJ0UGFnZU1vZHVsZSxcbiAgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlLFxuICBQcm9kdWN0UGFnZU1vZHVsZSxcbiAgR3VhcmRzTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAuLi5wYWdlTW9kdWxlcyxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIExvZ291dE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICAvLyBUaGlzIHJvdXRlIGNhbiBiZSBkcm9wcGVkIG9ubHkgd2hlbiB3ZSBoYXZlIGEgbWFwcGluZyBwYXRoIHRvIHBhZ2UgbGFiZWwgZm9yIGNvbnRlbnQgcGFnZXNcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnaG9tZXBhZ2UnLCBjeFJvdXRlOiAnaG9tZScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHRoZSBsaW5rIGZyb20gQ01TIGluIE15QWNjb3VudCBkcm9wZG93biBtZW51IChcIm15LWFjY291bnQvYWRkcmVzcy1ib29rXCIpXG4gICAgICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBwYWdlIGxhYmVsIChcImFkZHJlc3MtYm9va1wiKS4gT3Igd2hlbiB3ZSBoYXZlIGEgbWFwcGluZyBmb3IgY29udGVudCBwYWdlcy5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnYWRkcmVzcy1ib29rJywgY3hSb3V0ZTogJ2FkZHJlc3NCb29rJyB9LFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3VwZGF0ZVBhc3N3b3JkJywgY3hSb3V0ZTogJ3VwZGF0ZVBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcnMnLCBjeFJvdXRlOiAnb3JkZXJzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTGFiZWw6ICdtdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlJyxcbiAgICAgICAgICBjeFJvdXRlOiAnY2hlY2tvdXQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdsb2dpbicsIGN4Um91dGU6ICdsb2dpbicgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3NlYXJjaCcsIGN4Um91dGU6ICdzZWFyY2gnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnYnJhbmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3VwZGF0ZS1lbWFpbCcsIGN4Um91dGU6ICd1cGRhdGVFbWFpbCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3BheW1lbnQtZGV0YWlscycsIGN4Um91dGU6ICdwYXltZW50TWFuYWdlbWVudCcgfSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicsIGN4Um91dGU6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2ZvcmdvdFBhc3N3b3JkJywgY3hSb3V0ZTogJ2ZvcmdvdFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdyZXNldFBhc3N3b3JkJywgY3hSb3V0ZTogJ3Jlc2V0UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZUxhYmVsOiAndXBkYXRlLXByb2ZpbGUnLFxuICAgICAgICAgIGN4Um91dGU6ICd1cGRhdGVQcm9maWxlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnY2xvc2UtYWNjb3VudCcsIGN4Um91dGU6ICdjbG9zZUFjY291bnQnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBIYXJkY29kZWRDaGVja291dENvbXBvbmVudCxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VzTW9kdWxlIHt9XG4iXX0=