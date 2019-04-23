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
var ɵ0 = { pageLabel: 'homepage', cxPath: 'home' }, ɵ1 = { pageLabel: 'address-book', cxPath: 'addressBook' }, ɵ2 = { pageLabel: 'updatePassword', cxPath: 'updatePassword' }, ɵ3 = { pageLabel: 'orders', cxPath: 'orders' }, ɵ4 = { pageLabel: 'multiStepCheckoutSummaryPage', cxPath: 'checkout' }, ɵ5 = { pageLabel: 'login', cxPath: 'login' }, ɵ6 = { pageLabel: 'search', cxPath: 'search' }, ɵ7 = { cxPath: 'category' }, ɵ8 = { cxPath: 'brand' }, ɵ9 = { pageLabel: 'update-email', cxPath: 'updateEmail' }, ɵ10 = { pageLabel: 'payment-details', cxPath: 'paymentManagement' }, ɵ11 = { pageLabel: 'order', cxPath: 'orderDetails' }, ɵ12 = { pageLabel: 'forgotPassword', cxPath: 'forgotPassword' }, ɵ13 = { pageLabel: 'resetPassword', cxPath: 'resetPassword' }, ɵ14 = {
    pageLabel: 'update-profile',
    cxPath: 'updateProfile',
}, ɵ15 = { pageLabel: 'close-account', cxPath: 'closeAccount' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL3BhZ2VzL3BhZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFFakUsV0FBVyxHQUFHO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDYjtTQWNhLEVBQUUsU0FB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RSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7Z0NBQ3RDLElBQUksS0FBd0Q7NkJBQzdEO3lCQUNGLENBQUM7c0JBQ0g7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSwwQkFBMEI7NEJBQ3BDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOztJQUN5QixrQkFBQztDQUFBLEFBdkgzQixJQXVIMkI7U0FBZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQsIE5vdEF1dGhHdWFyZCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMb2dvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi9jbXMvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IENhcnRQYWdlTW9kdWxlIH0gZnJvbSAnLi9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBIYXJkY29kZWRDaGVja291dENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtcGFnZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IEd1YXJkc01vZHVsZSB9IGZyb20gJy4vZ3VhcmRzL2d1YXJkcy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24tcGFnZS9vcmRlci1jb25maXJtYXRpb24tcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UubW9kdWxlJztcblxuY29uc3QgcGFnZU1vZHVsZXMgPSBbXG4gIENhcnRQYWdlTW9kdWxlLFxuICBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUsXG4gIFByb2R1Y3RQYWdlTW9kdWxlLFxuICBHdWFyZHNNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIC4uLnBhZ2VNb2R1bGVzLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgTG9nb3V0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcm91dGUgY2FuIGJlIGRyb3BwZWQgb25seSB3aGVuIHdlIGhhdmUgYSBtYXBwaW5nIHBhdGggdG8gcGFnZSBsYWJlbCBmb3IgY29udGVudCBwYWdlc1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdob21lcGFnZScsIGN4UGF0aDogJ2hvbWUnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIHJvdXRlIGNhbiBiZSBkcm9wcGVkIG9ubHkgd2hlbiB0aGUgbGluayBmcm9tIENNUyBpbiBNeUFjY291bnQgZHJvcGRvd24gbWVudSAoXCJteS1hY2NvdW50L2FkZHJlc3MtYm9va1wiKVxuICAgICAgICAvLyBpcyB0aGUgc2FtZSBhcyB0aGUgcGFnZSBsYWJlbCAoXCJhZGRyZXNzLWJvb2tcIikuIE9yIHdoZW4gd2UgaGF2ZSBhIG1hcHBpbmcgZm9yIGNvbnRlbnQgcGFnZXMuXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2FkZHJlc3MtYm9vaycsIGN4UGF0aDogJ2FkZHJlc3NCb29rJyB9LFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3VwZGF0ZVBhc3N3b3JkJywgY3hQYXRoOiAndXBkYXRlUGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ29yZGVycycsIGN4UGF0aDogJ29yZGVycycgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ211bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2UnLCBjeFBhdGg6ICdjaGVja291dCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnbG9naW4nLCBjeFBhdGg6ICdsb2dpbicgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3NlYXJjaCcsIGN4UGF0aDogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4UGF0aDogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hQYXRoOiAnYnJhbmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3VwZGF0ZS1lbWFpbCcsIGN4UGF0aDogJ3VwZGF0ZUVtYWlsJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAncGF5bWVudC1kZXRhaWxzJywgY3hQYXRoOiAncGF5bWVudE1hbmFnZW1lbnQnIH0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnb3JkZXInLCBjeFBhdGg6ICdvcmRlckRldGFpbHMnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW05vdEF1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2ZvcmdvdFBhc3N3b3JkJywgY3hQYXRoOiAnZm9yZ290UGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTm90QXV0aEd1YXJkLCBDbXNQYWdlR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3Jlc2V0UGFzc3dvcmQnLCBjeFBhdGg6ICdyZXNldFBhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VMYWJlbDogJ3VwZGF0ZS1wcm9maWxlJyxcbiAgICAgICAgICBjeFBhdGg6ICd1cGRhdGVQcm9maWxlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnY2xvc2UtYWNjb3VudCcsIGN4UGF0aDogJ2Nsb3NlQWNjb3VudCcgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEhhcmRjb2RlZENoZWNrb3V0Q29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUge31cbiJdfQ==