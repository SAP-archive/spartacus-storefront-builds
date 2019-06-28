/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { UserComponentModule } from './user/user.module';
var CmsLibModule = /** @class */ (function () {
    function CmsLibModule() {
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
                        OrderConfirmationModule,
                        // TODO:#2811 - uncomment to enable
                        // StoreFinderModule,
                        ProductImagesModule,
                        ProductSummaryModule,
                        ProductIntroModule,
                        CheckoutComponentModule,
                        ForgotPasswordModule,
                        ResetPasswordModule,
                        BannerCarouselModule,
                        UserComponentModule,
                    ],
                },] }
    ];
    return CmsLibModule;
}());
export { CmsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RDtJQUFBO0lBd0MyQixDQUFDOztnQkF4QzNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLFVBQVU7d0JBQ1YsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLG1DQUFtQzt3QkFDbkMscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7aUJBQ0Y7O0lBQzBCLG1CQUFDO0NBQUEsQUF4QzVCLElBd0M0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudU1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL21pc2MvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICBPcmRlckRldGFpbHNNb2R1bGUsXG4gIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4vb3JkZXItY29uZmlybWF0aW9uL2luZGV4JztcbmltcG9ydCB7XG4gIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgUHJvZHVjdEludHJvTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlc01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdFN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vdXNlci91c2VyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIYW1idXJnZXJNZW51TW9kdWxlLFxuICAgIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgICBMaW5rTW9kdWxlLFxuICAgIEJhbm5lck1vZHVsZSxcbiAgICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgU2VhcmNoQm94TW9kdWxlLFxuICAgIFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUsXG4gICAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gICAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0TW9kdWxlLFxuICAgIFByb2R1Y3RUYWJzTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgICBPcmRlckRldGFpbHNNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZHNNb2R1bGUsXG4gICAgVXBkYXRlRW1haWxNb2R1bGUsXG4gICAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gICAgVXBkYXRlUHJvZmlsZU1vZHVsZSxcbiAgICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgICBDbG9zZUFjY291bnRNb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgLy8gVE9ETzojMjgxMSAtIHVuY29tbWVudCB0byBlbmFibGVcbiAgICAvLyBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBQcm9kdWN0SW1hZ2VzTW9kdWxlLFxuICAgIFByb2R1Y3RTdW1tYXJ5TW9kdWxlLFxuICAgIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICAgIEJhbm5lckNhcm91c2VsTW9kdWxlLFxuICAgIFVzZXJDb21wb25lbnRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0xpYk1vZHVsZSB7fVxuIl19