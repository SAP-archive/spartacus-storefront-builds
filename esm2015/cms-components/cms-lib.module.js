/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, MyInterestsModule, NotificationPreferenceModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, StockNotificationModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { StoreFinderModule } from './storefinder/store-finder.module';
import { UserComponentModule } from './user/user.module';
import { WishListModule } from './wish-list/wish-list.module';
export class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AnonymousConsentManagementBannerModule,
                    AsmModule,
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
                    QualtricsModule,
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
                    OrderConfirmationModule,
                    StoreFinderModule,
                    ProductImagesModule,
                    ProductSummaryModule,
                    ProductIntroModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                    BannerCarouselModule,
                    UserComponentModule,
                    WishListModule,
                    NotificationPreferenceModule,
                    MyInterestsModule,
                    StockNotificationModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM1SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWdEOUQsTUFBTSxPQUFPLFlBQVk7OztZQTlDeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxzQ0FBc0M7b0JBQ3RDLFNBQVM7b0JBQ1QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCw0QkFBNEI7b0JBQzVCLGlCQUFpQjtvQkFDakIsdUJBQXVCO2lCQUN4QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIH0gZnJvbSAnLi9hc20vYXNtLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFF1YWx0cmljc01vZHVsZSwgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gIE15SW50ZXJlc3RzTW9kdWxlLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICBPcmRlckRldGFpbHNNb2R1bGUsXG4gIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdEludHJvTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxuICBTdG9ja05vdGlmaWNhdGlvbk1vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9zdG9yZS1maW5kZXIubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgV2lzaExpc3RNb2R1bGUgfSBmcm9tICcuL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlLFxuICAgIEFzbU1vZHVsZSxcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgUXVhbHRyaWNzTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIFByb2R1Y3RJbWFnZXNNb2R1bGUsXG4gICAgUHJvZHVjdFN1bW1hcnlNb2R1bGUsXG4gICAgUHJvZHVjdEludHJvTW9kdWxlLFxuICAgIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlLFxuICAgIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICAgIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gICAgQmFubmVyQ2Fyb3VzZWxNb2R1bGUsXG4gICAgVXNlckNvbXBvbmVudE1vZHVsZSxcbiAgICBXaXNoTGlzdE1vZHVsZSxcbiAgICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICAgIE15SW50ZXJlc3RzTW9kdWxlLFxuICAgIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==