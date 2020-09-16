import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, MyCouponsModule, MyInterestsModule, NotificationPreferenceModule, OrderCancellationModule, OrderDetailsModule, OrderHistoryModule, OrderReturnModule, PaymentMethodsModule, ResetPasswordModule, ReturnRequestDetailModule, ReturnRequestListModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductFacetNavigationModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, StockNotificationModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { ProductVariantsModule } from './product/product-variants/product-variants.module';
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
                    OrderCancellationModule,
                    OrderReturnModule,
                    ReturnRequestListModule,
                    ReturnRequestDetailModule,
                    ProductListModule,
                    ProductFacetNavigationModule,
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
                    ProductVariantsModule,
                    ProductIntroModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                    BannerCarouselModule,
                    UserComponentModule,
                    MyCouponsModule,
                    WishListModule,
                    NotificationPreferenceModule,
                    MyInterestsModule,
                    StockNotificationModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsR0FDcEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDRCQUE0QixFQUM1QixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBdUQ5RCxNQUFNLE9BQU8sWUFBWTs7O1lBckR4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHNDQUFzQztvQkFDdEMsU0FBUztvQkFDVCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZix5QkFBeUI7b0JBQ3pCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQiw0QkFBNEI7b0JBQzVCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsNEJBQTRCO29CQUM1QixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtpQkFDeEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlIH0gZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50L2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQubW9kdWxlJztcbmltcG9ydCB7IEFzbU1vZHVsZSB9IGZyb20gJy4vYXNtL2FzbS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlJztcbmltcG9ydCB7IEJhbm5lckNhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jb250ZW50L2Jhbm5lci1jYXJvdXNlbC9iYW5uZXItY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBRdWFsdHJpY3NNb2R1bGUsIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL21pc2MvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICBNeUNvdXBvbnNNb2R1bGUsXG4gIE15SW50ZXJlc3RzTW9kdWxlLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIE9yZGVyUmV0dXJuTW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgUmV0dXJuUmVxdWVzdERldGFpbE1vZHVsZSxcbiAgUmV0dXJuUmVxdWVzdExpc3RNb2R1bGUsXG4gIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbk1vZHVsZSxcbiAgUHJvZHVjdEludHJvTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxuICBTdG9ja05vdGlmaWNhdGlvbk1vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL3Byb2R1Y3QtdmFyaWFudHMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9zdG9yZS1maW5kZXIubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgV2lzaExpc3RNb2R1bGUgfSBmcm9tICcuL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlLFxuICAgIEFzbU1vZHVsZSxcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgUXVhbHRyaWNzTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgICBPcmRlclJldHVybk1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBQcm9kdWN0SW1hZ2VzTW9kdWxlLFxuICAgIFByb2R1Y3RTdW1tYXJ5TW9kdWxlLFxuICAgIFByb2R1Y3RWYXJpYW50c01vZHVsZSxcbiAgICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gICAgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUsXG4gICAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgICBCYW5uZXJDYXJvdXNlbE1vZHVsZSxcbiAgICBVc2VyQ29tcG9uZW50TW9kdWxlLFxuICAgIE15Q291cG9uc01vZHVsZSxcbiAgICBXaXNoTGlzdE1vZHVsZSxcbiAgICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICAgIE15SW50ZXJlc3RzTW9kdWxlLFxuICAgIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==