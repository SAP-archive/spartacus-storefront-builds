/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule, SkipLinkModule } from '../layout/index';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, ForgotPasswordModule, ResetPasswordModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { StoreFinderModule } from './storefinder/index';
import { CheckoutComponentModule } from '../lib/checkout/checkout.module';
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
                    ProductReferencesModule,
                    OrderDetailsModule,
                    PaymentMethodsModule,
                    UpdateEmailModule,
                    UpdatePasswordModule,
                    UpdateProfileModule,
                    ConsentManagementModule,
                    CloseAccountModule,
                    CartComponentModule,
                    TabParagraphContainerModule,
                    StoreFinderModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQW9DMUUsTUFBTSxPQUFPLFlBQVk7OztZQWxDeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUsIFNraXBMaW5rTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL21pc2MvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQge1xuICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgUHJvZHVjdFRhYnNNb2R1bGUsXG59IGZyb20gJy4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1vZHVsZSB9IGZyb20gJy4vc3RvcmVmaW5kZXIvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9saWIvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNraXBMaW5rTW9kdWxlLFxuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBBZGRyZXNzQm9va01vZHVsZSxcbiAgICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==