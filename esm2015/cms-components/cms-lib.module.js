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
import { ProductImagesModule } from './product/product-images/product-images.module';
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
                    ProductImagesModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXFDMUUsTUFBTSxPQUFPLFlBQVk7OztZQW5DeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudU1vZHVsZSwgU2tpcExpbmtNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQge1xuICBCYW5uZXJNb2R1bGUsXG4gIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgTGlua01vZHVsZSxcbiAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxufSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdExpc3RNb2R1bGUsXG4gIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICBQcm9kdWN0VGFic01vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2xpYi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2tpcExpbmtNb2R1bGUsXG4gICAgSGFtYnVyZ2VyTWVudU1vZHVsZSxcbiAgICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gICAgTGlua01vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIFNlYXJjaEJveE1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIFByb2R1Y3RJbWFnZXNNb2R1bGUsXG4gICAgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUsXG4gICAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTGliTW9kdWxlIHt9XG4iXX0=