/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductIntroModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { UserComponentModule } from './user/user.module';
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
                    OrderConfirmationModule,
                    // TODO:#2811 - uncomment to enable
                    // StoreFinderModule,
                    ProductImagesModule,
                    ProductSummaryModule,
                    ProductIntroModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                    UserComponentModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXlDekQsTUFBTSxPQUFPLFlBQVk7OztZQXZDeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsbUNBQW1DO29CQUNuQyxxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZSc7XG5pbXBvcnQge1xuICBCYW5uZXJNb2R1bGUsXG4gIENtc1BhcmFncmFwaE1vZHVsZSxcbiAgTGlua01vZHVsZSxcbiAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxufSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSB9IGZyb20gJy4vbWlzYy9pbmRleCc7XG5pbXBvcnQge1xuICBBZGRyZXNzQm9va01vZHVsZSxcbiAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICBDb25zZW50TWFuYWdlbWVudE1vZHVsZSxcbiAgRm9yZ290UGFzc3dvcmRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxufSBmcm9tICcuL215YWNjb3VudC9pbmRleCc7XG5pbXBvcnQge1xuICBCcmVhZGNydW1iTW9kdWxlLFxuICBDYXRlZ29yeU5hdmlnYXRpb25Nb2R1bGUsXG4gIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gIE5hdmlnYXRpb25Nb2R1bGUsXG4gIFNlYXJjaEJveE1vZHVsZSxcbn0gZnJvbSAnLi9uYXZpZ2F0aW9uL2luZGV4JztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICBQcm9kdWN0SW50cm9Nb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgUHJvZHVjdFRhYnNNb2R1bGUsXG59IGZyb20gJy4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VzTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3QtaW1hZ2VzL3Byb2R1Y3QtaW1hZ2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LXN1bW1hcnkvcHJvZHVjdC1zdW1tYXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi91c2VyL3VzZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEhhbWJ1cmdlck1lbnVNb2R1bGUsXG4gICAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICAgIExpbmtNb2R1bGUsXG4gICAgQmFubmVyTW9kdWxlLFxuICAgIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIEZvb3Rlck5hdmlnYXRpb25Nb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBBZGRyZXNzQm9va01vZHVsZSxcbiAgICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICAgIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICAgIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgICBVcGRhdGVQYXNzd29yZE1vZHVsZSxcbiAgICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICAgIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICAgIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbiAgICBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICAvLyBUT0RPOiMyODExIC0gdW5jb21tZW50IHRvIGVuYWJsZVxuICAgIC8vIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIFByb2R1Y3RJbWFnZXNNb2R1bGUsXG4gICAgUHJvZHVjdFN1bW1hcnlNb2R1bGUsXG4gICAgUHJvZHVjdEludHJvTW9kdWxlLFxuICAgIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlLFxuICAgIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICAgIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gICAgVXNlckNvbXBvbmVudE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTGliTW9kdWxlIHt9XG4iXX0=