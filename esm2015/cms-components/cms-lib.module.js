import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, MyCouponsModule, MyInterestsModule, NotificationPreferenceModule, OrderCancellationModule, OrderDetailsModule, OrderHistoryModule, OrderReturnModule, PaymentMethodsModule, ReplenishmentOrderDetailsModule, ResetPasswordModule, ReturnRequestDetailModule, ReturnRequestListModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, ReplenishmentOrderHistoryModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule, ReplenishmentOrderConfirmationModule, } from './order-confirmation/index';
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
                    ReplenishmentOrderHistoryModule,
                    ReplenishmentOrderConfirmationModule,
                    ReplenishmentOrderDetailsModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsK0JBQStCLEVBQy9CLG1CQUFtQixFQUNuQix5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLCtCQUErQixHQUNoQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsb0NBQW9DLEdBQ3JDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiw0QkFBNEIsRUFDNUIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQTBEOUQsTUFBTSxPQUFPLFlBQVk7OztZQXhEeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxzQ0FBc0M7b0JBQ3RDLFNBQVM7b0JBQ1QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsNEJBQTRCO29CQUM1QixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixjQUFjO29CQUNkLDRCQUE0QjtvQkFDNUIsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLCtCQUErQjtvQkFDL0Isb0NBQW9DO29CQUNwQywrQkFBK0I7aUJBQ2hDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudU1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lck1vZHVsZSB9IGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBBc21Nb2R1bGUgfSBmcm9tICcuL2FzbS9hc20ubW9kdWxlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCYW5uZXJDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY29udGVudC9iYW5uZXItY2Fyb3VzZWwvYmFubmVyLWNhcm91c2VsLm1vZHVsZSc7XG5pbXBvcnQge1xuICBCYW5uZXJNb2R1bGUsXG4gIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgTGlua01vZHVsZSxcbiAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxufSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xuaW1wb3J0IHsgUXVhbHRyaWNzTW9kdWxlLCBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgTXlDb3Vwb25zTW9kdWxlLFxuICBNeUludGVyZXN0c01vZHVsZSxcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZU1vZHVsZSxcbiAgT3JkZXJDYW5jZWxsYXRpb25Nb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBPcmRlclJldHVybk1vZHVsZSxcbiAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNNb2R1bGUsXG4gIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUsXG4gIFJldHVyblJlcXVlc3RMaXN0TW9kdWxlLFxuICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlNb2R1bGUsXG59IGZyb20gJy4vbXlhY2NvdW50L2luZGV4JztcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgU2VhcmNoQm94TW9kdWxlLFxufSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbn0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uTW9kdWxlLFxuICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlc01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNb2R1bGUgfSBmcm9tICcuL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vdXNlci91c2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBXaXNoTGlzdE1vZHVsZSB9IGZyb20gJy4vd2lzaC1saXN0L3dpc2gtbGlzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUsXG4gICAgQXNtTW9kdWxlLFxuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBRdWFsdHJpY3NNb2R1bGUsXG4gICAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIE9yZGVyQ2FuY2VsbGF0aW9uTW9kdWxlLFxuICAgIE9yZGVyUmV0dXJuTW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3RMaXN0TW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIFByb2R1Y3RJbWFnZXNNb2R1bGUsXG4gICAgUHJvZHVjdFN1bW1hcnlNb2R1bGUsXG4gICAgUHJvZHVjdFZhcmlhbnRzTW9kdWxlLFxuICAgIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICAgIEJhbm5lckNhcm91c2VsTW9kdWxlLFxuICAgIFVzZXJDb21wb25lbnRNb2R1bGUsXG4gICAgTXlDb3Vwb25zTW9kdWxlLFxuICAgIFdpc2hMaXN0TW9kdWxlLFxuICAgIE5vdGlmaWNhdGlvblByZWZlcmVuY2VNb2R1bGUsXG4gICAgTXlJbnRlcmVzdHNNb2R1bGUsXG4gICAgU3RvY2tOb3RpZmljYXRpb25Nb2R1bGUsXG4gICAgUmVwbGVuaXNobWVudE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBSZXBsZW5pc2htZW50T3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTGliTW9kdWxlIHt9XG4iXX0=