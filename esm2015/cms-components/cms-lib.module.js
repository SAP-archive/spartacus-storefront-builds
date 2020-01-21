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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM1SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZUFBZSxHQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXNEOUQsTUFBTSxPQUFPLFlBQVk7OztZQXBEeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxzQ0FBc0M7b0JBQ3RDLFNBQVM7b0JBQ1QsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2QixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCw0QkFBNEI7b0JBQzVCLGlCQUFpQjtvQkFDakIsdUJBQXVCO2lCQUN4QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50LW1hbmFnZW1lbnQvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIH0gZnJvbSAnLi9hc20vYXNtLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFF1YWx0cmljc01vZHVsZSwgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gIE15SW50ZXJlc3RzTW9kdWxlLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICBPcmRlckNhbmNlbGxhdGlvbk1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIE9yZGVyUmV0dXJuTW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgUmV0dXJuUmVxdWVzdERldGFpbE1vZHVsZSxcbiAgUmV0dXJuUmVxdWVzdExpc3RNb2R1bGUsXG4gIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbiAgTXlDb3Vwb25zTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlc01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNb2R1bGUgfSBmcm9tICcuL3N0b3JlZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vdXNlci91c2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBXaXNoTGlzdE1vZHVsZSB9IGZyb20gJy4vd2lzaC1saXN0L3dpc2gtbGlzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5vbnltb3VzQ29uc2VudE1hbmFnZW1lbnRCYW5uZXJNb2R1bGUsXG4gICAgQXNtTW9kdWxlLFxuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBRdWFsdHJpY3NNb2R1bGUsXG4gICAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIE9yZGVyQ2FuY2VsbGF0aW9uTW9kdWxlLFxuICAgIE9yZGVyUmV0dXJuTW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3RMaXN0TW9kdWxlLFxuICAgIFJldHVyblJlcXVlc3REZXRhaWxNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBQcm9kdWN0SW1hZ2VzTW9kdWxlLFxuICAgIFByb2R1Y3RTdW1tYXJ5TW9kdWxlLFxuICAgIFByb2R1Y3RWYXJpYW50c01vZHVsZSxcbiAgICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gICAgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUsXG4gICAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgICBCYW5uZXJDYXJvdXNlbE1vZHVsZSxcbiAgICBVc2VyQ29tcG9uZW50TW9kdWxlLFxuICAgIE15Q291cG9uc01vZHVsZSxcbiAgICBXaXNoTGlzdE1vZHVsZSxcbiAgICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlLFxuICAgIE15SW50ZXJlc3RzTW9kdWxlLFxuICAgIFN0b2NrTm90aWZpY2F0aW9uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==