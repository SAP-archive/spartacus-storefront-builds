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
import { PageLayoutComponent, PageLayoutModule, } from '../../../cms-structure/page/index';
import { CmsPageGuard } from '../../cms/guards/cms-page.guard';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixHQUNqQixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQUVqRSxXQUFXLEdBQUc7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsWUFBWTtDQUNiO1NBY2EsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFN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QyxJQUFJLEtBQXlEOzZCQUM5RDt5QkFDRixDQUFDO3NCQUNIO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsMEJBQTBCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFDeUIsa0JBQUM7Q0FBQSxBQTFIM0IsSUEwSDJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBOb3RBdXRoR3VhcmQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTG9nb3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUGFnZUxheW91dENvbXBvbmVudCxcbiAgUGFnZUxheW91dE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2NhcnQtcGFnZS9jYXJ0LXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wYWdlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgR3VhcmRzTW9kdWxlIH0gZnJvbSAnLi9ndWFyZHMvZ3VhcmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlTW9kdWxlcyA9IFtcbiAgQ2FydFBhZ2VNb2R1bGUsXG4gIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSxcbiAgUHJvZHVjdFBhZ2VNb2R1bGUsXG4gIEd1YXJkc01vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4ucGFnZU1vZHVsZXMsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBMb2dvdXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBjYW4gYmUgZHJvcHBlZCBvbmx5IHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgcGF0aCB0byBwYWdlIGxhYmVsIGZvciBjb250ZW50IHBhZ2VzXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2hvbWVwYWdlJywgY3hSb3V0ZTogJ2hvbWUnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIHJvdXRlIGNhbiBiZSBkcm9wcGVkIG9ubHkgd2hlbiB0aGUgbGluayBmcm9tIENNUyBpbiBNeUFjY291bnQgZHJvcGRvd24gbWVudSAoXCJteS1hY2NvdW50L2FkZHJlc3MtYm9va1wiKVxuICAgICAgICAvLyBpcyB0aGUgc2FtZSBhcyB0aGUgcGFnZSBsYWJlbCAoXCJhZGRyZXNzLWJvb2tcIikuIE9yIHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgZm9yIGNvbnRlbnQgcGFnZXMuXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2FkZHJlc3MtYm9vaycsIGN4Um91dGU6ICdhZGRyZXNzQm9vaycgfSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICd1cGRhdGVQYXNzd29yZCcsIGN4Um91dGU6ICd1cGRhdGVQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXJzJywgY3hSb3V0ZTogJ29yZGVycycgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZUxhYmVsOiAnbXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZScsXG4gICAgICAgICAgY3hSb3V0ZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbG9naW4nLCBjeFJvdXRlOiAnbG9naW4nIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdzZWFyY2gnLCBjeFJvdXRlOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2JyYW5kJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICd1cGRhdGUtZW1haWwnLCBjeFJvdXRlOiAndXBkYXRlRW1haWwnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdwYXltZW50LWRldGFpbHMnLCBjeFJvdXRlOiAncGF5bWVudE1hbmFnZW1lbnQnIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFJvdXRlOiAnb3JkZXJEZXRhaWxzJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdmb3Jnb3RQYXNzd29yZCcsIGN4Um91dGU6ICdmb3Jnb3RQYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOb3RBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncmVzZXRQYXNzd29yZCcsIGN4Um91dGU6ICdyZXNldFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ3VwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBjeFJvdXRlOiAndXBkYXRlUHJvZmlsZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2Nsb3NlLWFjY291bnQnLCBjeFJvdXRlOiAnY2xvc2VBY2NvdW50JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogSGFyZGNvZGVkQ2hlY2tvdXRDb21wb25lbnQsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSB7fVxuIl19