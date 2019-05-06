/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule, SkipLinkModule } from '../layout/index';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
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
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBK0J4RCxNQUFNLE9BQU8sWUFBWTs7O1lBN0J4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQiwyQkFBMkI7b0JBQzNCLGlCQUFpQjtpQkFDbEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51TW9kdWxlLCBTa2lwTGlua01vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdExpc3RNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNb2R1bGUgfSBmcm9tICcuL3N0b3JlZmluZGVyL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNraXBMaW5rTW9kdWxlLFxuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBBZGRyZXNzQm9va01vZHVsZSxcbiAgICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTGliTW9kdWxlIHt9XG4iXX0=