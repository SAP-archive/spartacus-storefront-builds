/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    ConfigModule.withConfig(defaultRoutingConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixHQUNqQixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUUxRCxXQUFXLEdBQUc7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIs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Q0Y7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLElBQUk7NEJBQ1YsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQzs0QkFDdEMsSUFBSSxLQUF5RDt5QkFDOUQ7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBOb3RBdXRoR3VhcmQsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQge1xuICBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICBQYWdlTGF5b3V0TW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1vZHVsZSB9IGZyb20gJy4vY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXBhZ2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuL2d1YXJkcy9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBHdWFyZHNNb2R1bGUgfSBmcm9tICcuL2d1YXJkcy9ndWFyZHMubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uLXBhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0Um91dGluZ0NvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1yb3V0aW5nLWNvbmZpZyc7XG5cbmNvbnN0IHBhZ2VNb2R1bGVzID0gW1xuICBDYXJ0UGFnZU1vZHVsZSxcbiAgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlLFxuICBQcm9kdWN0UGFnZU1vZHVsZSxcbiAgR3VhcmRzTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgcGF0aCB0byBwYWdlIGxhYmVsIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2hvbWVwYWdlJywgY3hSb3V0ZTogJ2hvbWUnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIHJvdXRlIGNhbiBiZSBkcm9wcGVkIG9ubHkgd2hlbiB0aGUgbGluayBmcm9tIENNUyBpbiBNeUFjY291bnQgZHJvcGRvd24gbWVudSAoXCJteS1hY2NvdW50L2FkZHJlc3MtYm9va1wiKVxuICAgICAgICAvLyBpcyB0aGUgc2FtZSBhcyB0aGUgcGFnZSBsYWJlbCAoXCJhZGRyZXNzLWJvb2tcIikuIE9yIHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgZm9yIGNvbnRlbnQgcGFnZXMuXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2FkZHJlc3MtYm9vaycsIGN4Um91dGU6ICdhZGRyZXNzQm9vaycgfSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICd1cGRhdGVQYXNzd29yZCcsIGN4Um91dGU6ICd1cGRhdGVQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJzJywgY3hSb3V0ZTogJ29yZGVycycgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZUxhYmVsOiAnbXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZScsXG4gICAgICAgICAgY3hSb3V0ZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbG9naW4nLCBjeFJvdXRlOiAnbG9naW4nIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdzZWFyY2gnLCBjeFJvdXRlOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2JyYW5kJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICd1cGRhdGUtZW1haWwnLCBjeFJvdXRlOiAndXBkYXRlRW1haWwnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdwYXltZW50LWRldGFpbHMnLCBjeFJvdXRlOiAncGF5bWVudE1hbmFnZW1lbnQnIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdmb3Jnb3RQYXNzd29yZCcsIGN4Um91dGU6ICdmb3Jnb3RQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncmVzZXRQYXNzd29yZCcsIGN4Um91dGU6ICdyZXNldFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ3VwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBjeFJvdXRlOiAndXBkYXRlUHJvZmlsZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2Nsb3NlLWFjY291bnQnLCBjeFJvdXRlOiAnY2xvc2VBY2NvdW50JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSB7fVxuIl19