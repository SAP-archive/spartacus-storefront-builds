/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { CheckoutComponentModule } from '../lib/checkout/checkout.module';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { StoreFinderModule } from './storefinder/index';
export class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBb0N4RCxNQUFNLE9BQU8sWUFBWTs7O1lBbEN4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudU1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2xpYi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQge1xuICBCYW5uZXJNb2R1bGUsXG4gIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgTGlua01vZHVsZSxcbiAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxufSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdExpc3RNb2R1bGUsXG4gIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICBQcm9kdWN0VGFic01vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RUYWJzTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgICBPcmRlckRldGFpbHNNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gICAgVXBkYXRlRW1haWxNb2R1bGUsXG4gICAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gICAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbiAgICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgICBDbG9zZUFjY291bnRNb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgUHJvZHVjdEltYWdlc01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==