import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, MyCouponsModule, MyInterestsModule, NotificationPreferenceModule, OrderCancellationModule, OrderDetailsModule, OrderHistoryModule, OrderReturnModule, PaymentMethodsModule, ReplenishmentOrderDetailsModule, ReplenishmentOrderHistoryModule, ResetPasswordModule, ReturnRequestDetailModule, ReturnRequestListModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule, ReplenishmentOrderConfirmationModule, } from './order-confirmation/index';
import { ProductCarouselModule, ProductFacetNavigationModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, StockNotificationModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { ProductVariantsModule } from './product/product-variants/product-variants.module';
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
                    ReplenishmentOrderHistoryModule,
                    ReplenishmentOrderConfirmationModule,
                    ReplenishmentOrderDetailsModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsK0JBQStCLEVBQy9CLCtCQUErQixFQUMvQixtQkFBbUIsRUFDbkIseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsb0NBQW9DLEdBQ3JDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXlEOUQsTUFBTSxPQUFPLFlBQVk7OztZQXZEeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxzQ0FBc0M7b0JBQ3RDLFNBQVM7b0JBQ1QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsNEJBQTRCO29CQUM1QixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCw0QkFBNEI7b0JBQzVCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2QiwrQkFBK0I7b0JBQy9CLG9DQUFvQztvQkFDcEMsK0JBQStCO2lCQUNoQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIH0gZnJvbSAnLi9hc20vYXNtLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFF1YWx0cmljc01vZHVsZSwgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gIE15Q291cG9uc01vZHVsZSxcbiAgTXlJbnRlcmVzdHNNb2R1bGUsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2VNb2R1bGUsXG4gIE9yZGVyQ2FuY2VsbGF0aW9uTW9kdWxlLFxuICBPcmRlckRldGFpbHNNb2R1bGUsXG4gIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgT3JkZXJSZXR1cm5Nb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzTW9kdWxlLFxuICBSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5TW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICBSZXBsZW5pc2htZW50T3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG59IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbk1vZHVsZSxcbiAgUHJvZHVjdEludHJvTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxuICBTdG9ja05vdGlmaWNhdGlvbk1vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnRzL3Byb2R1Y3QtdmFyaWFudHMubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgV2lzaExpc3RNb2R1bGUgfSBmcm9tICcuL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlLFxuICAgIEFzbU1vZHVsZSxcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgUXVhbHRyaWNzTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgICBPcmRlclJldHVybk1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBQcm9kdWN0SW1hZ2VzTW9kdWxlLFxuICAgIFByb2R1Y3RTdW1tYXJ5TW9kdWxlLFxuICAgIFByb2R1Y3RWYXJpYW50c01vZHVsZSxcbiAgICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gICAgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUsXG4gICAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgICBCYW5uZXJDYXJvdXNlbE1vZHVsZSxcbiAgICBVc2VyQ29tcG9uZW50TW9kdWxlLFxuICAgIE15Q291cG9uc01vZHVsZSxcbiAgICBXaXNoTGlzdE1vZHVsZSxcbiAgICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICAgIE15SW50ZXJlc3RzTW9kdWxlLFxuICAgIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxuICAgIFJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUmVwbGVuaXNobWVudE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0xpYk1vZHVsZSB7fVxuIl19