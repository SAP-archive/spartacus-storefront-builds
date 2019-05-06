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
const ɵ0 = { pageLabel: 'homepage', cxPath: 'home' }, ɵ1 = { pageLabel: 'address-book', cxPath: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxPath: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxPath: 'orders' }, ɵ4 = { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }, ɵ5 = { pageLabel: 'login', cxPath: 'login' }, ɵ6 = { pageLabel: 'search', cxPath: 'search' }, ɵ7 = { cxPath: 'category' }, ɵ8 = { cxPath: 'brand' }, ɵ9 = { pageLabel: 'update-email', cxPath: 'updateEmail' }, ɵ10 = { pageLabel: 'payment-details', cxPath: 'paymentManagement' }, ɵ11 = { pageLabel: 'order', cxPath: 'orderDetails' }, ɵ12 = { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }, ɵ13 = { pageLabel: 'resetPassword', cxPath: 'resetPassword' }, ɵ14 = {
    pageLabel: 'update-profile',
    cxPath: 'updateProfile',
}, ɵ15 = { pageLabel: 'close-account', cxPath: 'closeAccount' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O01BRWpFLFdBQVcsR0FBRztJQUNsQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2I7V0FjYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0s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Qzs0QkFDdEMsSUFBSSxLQUF3RDt5QkFDN0Q7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBOb3RBdXRoR3VhcmQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTG9nb3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbiAgUGFnZUxheW91dE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2NhcnQtcGFnZS9jYXJ0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wYWdlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgR3VhcmRzTW9kdWxlIH0gZnJvbSAnLi9ndWFyZHMvZ3VhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlTW9kdWxlcyA9IFtcbiAgQ2FydFBhZ2VNb2R1bGUsXG4gIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSxcbiAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gIEd1YXJkc01vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgcGF0aCB0byBwYWdlIGxhYmVsIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2hvbWVwYWdlJywgY3hQYXRoOiAnaG9tZScgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHRoZSBsaW5rIGZyb20gQ01TIGluIE15QWNjb3VudCBkcm9wZG93biBtZW51IChcIm15LWFjY291bnQvYWRkcmVzcy1ib29rXCIpXG4gICAgICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBwYWdlIGxhYmVsIChcImFkZHJlc3MtYm9va1wiKS4gT3Igd2hlbiB3ZSBoYXZlIGEgbWFwcGluZyBmb3IgY29udGVudCBwYWdlcy5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnYWRkcmVzcy1ib29rJywgY3hQYXRoOiAnYWRkcmVzc0Jvb2snIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlUGFzc3dvcmQnLCBjeFBhdGg6ICd1cGRhdGVQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJzJywgY3hQYXRoOiAnb3JkZXJzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZScsIGN4UGF0aDogJ2NoZWNrb3V0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdsb2dpbicsIGN4UGF0aDogJ2xvZ2luJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hQYXRoOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hQYXRoOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFBhdGg6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAndXBkYXRlLWVtYWlsJywgY3hQYXRoOiAndXBkYXRlRW1haWwnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdwYXltZW50LWRldGFpbHMnLCBjeFBhdGg6ICdwYXltZW50TWFuYWdlbWVudCcgfSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdvcmRlcicsIGN4UGF0aDogJ29yZGVyRGV0YWlscycgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnZm9yZ290UGFzc3dvcmQnLCBjeFBhdGg6ICdmb3Jnb3RQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncmVzZXRQYXNzd29yZCcsIGN4UGF0aDogJ3Jlc2V0UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZUxhYmVsOiAndXBkYXRlLXByb2ZpbGUnLFxuICAgICAgICAgIGN4UGF0aDogJ3VwZGF0ZVByb2ZpbGUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdjbG9zZS1hY2NvdW50JywgY3hQYXRoOiAnY2xvc2VBY2NvdW50JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSB7fVxuIl19