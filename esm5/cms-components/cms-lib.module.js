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
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, MyInterestsModule, NotificationPreferenceModule, OrderCancellationModule, OrderDetailsModule, OrderHistoryModule, OrderReturnModule, PaymentMethodsModule, ResetPasswordModule, ReturnRequestDetailModule, ReturnRequestListModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, MyCouponsModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, StockNotificationModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { ProductVariantSelectorModule } from './product/product-variant-selector/product-variant-selector.module';
import { StoreFinderModule } from './storefinder/store-finder.module';
import { UserComponentModule } from './user/user.module';
import { WishListModule } from './wish-list/wish-list.module';
var CmsLibModule = /** @class */ (function () {
    function CmsLibModule() {
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
                        ProductVariantSelectorModule,
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
    return CmsLibModule;
}());
export { CmsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM1SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZUFBZSxHQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RDtJQUFBO0lBb0QyQixDQUFDOztnQkFwRDNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asc0NBQXNDO3dCQUN0QyxTQUFTO3dCQUNULG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsNEJBQTRCO3dCQUM1QixrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsNEJBQTRCO3dCQUM1QixpQkFBaUI7d0JBQ2pCLHVCQUF1QjtxQkFDeEI7aUJBQ0Y7O0lBQzBCLG1CQUFDO0NBQUEsQUFwRDVCLElBb0Q0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudU1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50TWFuYWdlbWVudEJhbm5lck1vZHVsZSB9IGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1tYW5hZ2VtZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBBc21Nb2R1bGUgfSBmcm9tICcuL2FzbS9hc20ubW9kdWxlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCYW5uZXJDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY29udGVudC9iYW5uZXItY2Fyb3VzZWwvYmFubmVyLWNhcm91c2VsLm1vZHVsZSc7XG5pbXBvcnQge1xuICBCYW5uZXJNb2R1bGUsXG4gIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgTGlua01vZHVsZSxcbiAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxufSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xuaW1wb3J0IHsgUXVhbHRyaWNzTW9kdWxlLCBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgTXlJbnRlcmVzdHNNb2R1bGUsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2VNb2R1bGUsXG4gIE9yZGVyQ2FuY2VsbGF0aW9uTW9kdWxlLFxuICBPcmRlckRldGFpbHNNb2R1bGUsXG4gIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgT3JkZXJSZXR1cm5Nb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICBNeUNvdXBvbnNNb2R1bGUsXG59IGZyb20gJy4vbXlhY2NvdW50L2luZGV4JztcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgU2VhcmNoQm94TW9kdWxlLFxufSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi9pbmRleCc7XG5pbXBvcnQge1xuICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgUHJvZHVjdExpc3RNb2R1bGUsXG4gIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICBQcm9kdWN0VGFic01vZHVsZSxcbiAgU3RvY2tOb3RpZmljYXRpb25Nb2R1bGUsXG59IGZyb20gJy4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QtaW1hZ2VzL3Byb2R1Y3QtaW1hZ2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LXN1bW1hcnkvcHJvZHVjdC1zdW1tYXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci9wcm9kdWN0LXZhcmlhbnQtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZpbmRlci9zdG9yZS1maW5kZXIubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgV2lzaExpc3RNb2R1bGUgfSBmcm9tICcuL3dpc2gtbGlzdC93aXNoLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRNYW5hZ2VtZW50QmFubmVyTW9kdWxlLFxuICAgIEFzbU1vZHVsZSxcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgUXVhbHRyaWNzTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgICBPcmRlclJldHVybk1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSxcbiAgICBSZXR1cm5SZXF1ZXN0RGV0YWlsTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RUYWJzTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgICBPcmRlckRldGFpbHNNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gICAgVXBkYXRlRW1haWxNb2R1bGUsXG4gICAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gICAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbiAgICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgICBDbG9zZUFjY291bnRNb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgUHJvZHVjdEltYWdlc01vZHVsZSxcbiAgICBQcm9kdWN0U3VtbWFyeU1vZHVsZSxcbiAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yTW9kdWxlLFxuICAgIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICAgIEJhbm5lckNhcm91c2VsTW9kdWxlLFxuICAgIFVzZXJDb21wb25lbnRNb2R1bGUsXG4gICAgTXlDb3Vwb25zTW9kdWxlLFxuICAgIFdpc2hMaXN0TW9kdWxlLFxuICAgIE5vdGlmaWNhdGlvblByZWZlcmVuY2VNb2R1bGUsXG4gICAgTXlJbnRlcmVzdHNNb2R1bGUsXG4gICAgU3RvY2tOb3RpZmljYXRpb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0xpYk1vZHVsZSB7fVxuIl19