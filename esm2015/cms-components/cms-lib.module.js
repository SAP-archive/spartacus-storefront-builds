/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule, SkipLinkModule } from '../layout/index';
import { CheckoutComponentModule } from '../lib/checkout/checkout.module';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQW9DeEQsTUFBTSxPQUFPLFlBQVk7OztZQWxDeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUsIFNraXBMaW5rTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vbGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG59IGZyb20gJy4vbXlhY2NvdW50L2luZGV4JztcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgU2VhcmNoQm94TW9kdWxlLFxufSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNb2R1bGUgfSBmcm9tICcuL3N0b3JlZmluZGVyL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNraXBMaW5rTW9kdWxlLFxuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBBZGRyZXNzQm9va01vZHVsZSxcbiAgICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==