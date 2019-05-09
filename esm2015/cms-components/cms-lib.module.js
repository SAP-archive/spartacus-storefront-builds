/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule, SkipLinkModule } from '../layout/index';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, ForgotPasswordModule, ResetPasswordModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductTabsModule, } from './product/index';
import { StoreFinderModule } from './storefinder/index';
export class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SkipLinkModule,
                    HamburgerMenuModule,
                    CmsParagraphModule,
                    LinkModule,
                    BannerModule,
                    CategoryNavigationModule,
                    NavigationModule,
                    FooterNavigationModule,
                    BreadcrumbModule,
                    SearchBoxModule,
                    SiteContextSelectorModule,
                    AddressBookModule,
                    OrderHistoryModule,
                    ProductListModule,
                    ProductTabsModule,
                    ProductCarouselModule,
                    OrderDetailsModule,
                    PaymentMethodsModule,
                    UpdateEmailModule,
                    UpdatePasswordModule,
                    UpdateProfileModule,
                    CartComponentModule,
                    CloseAccountModule,
                    TabParagraphContainerModule,
                    StoreFinderModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQ3hELE1BQU0sT0FBTyxZQUFZOzs7WUEvQnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51TW9kdWxlLCBTa2lwTGlua01vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQge1xuICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0VGFic01vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTa2lwTGlua01vZHVsZSxcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RUYWJzTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgICBPcmRlckRldGFpbHNNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gICAgVXBkYXRlRW1haWxNb2R1bGUsXG4gICAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gICAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTGliTW9kdWxlIHt9XG4iXX0=