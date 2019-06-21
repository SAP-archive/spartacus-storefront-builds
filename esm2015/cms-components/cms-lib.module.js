/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerModule, CmsParagraphModule, LinkModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import { ProductCarouselModule, ProductIntroModule, ProductListModule, 
// ProductReferencesModule,
ProductTabsModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { ProductVariantSelectorModule } from './product/product-variant-selector/product-variant-selector.module';
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
                    // ProductReferencesModule,
                    OrderDetailsModule,
                    PaymentMethodsModule,
                    UpdateEmailModule,
                    UpdatePasswordModule,
                    UpdateProfileModule,
                    ConsentManagementModule,
                    CloseAccountModule,
                    CartComponentModule,
                    // TabParagraphContainerModule,
                    OrderConfirmationModule,
                    // TODO:#2811 - uncomment to enable
                    // StoreFinderModule,
                    ProductImagesModule,
                    ProductSummaryModule,
                    ProductVariantSelectorModule,
                    ProductIntroModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEdBRVgsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsR0FDcEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQixpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBeUNsSCxNQUFNLE9BQU8sWUFBWTs7O1lBdkN4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLDJCQUEyQjtvQkFDM0Isa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLCtCQUErQjtvQkFDL0IsdUJBQXVCO29CQUN2QixtQ0FBbUM7b0JBQ25DLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLDRCQUE0QjtvQkFDNUIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICAvLyBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG59IGZyb20gJy4vbXlhY2NvdW50L2luZGV4JztcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgU2VhcmNoQm94TW9kdWxlLFxufSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi9pbmRleCc7XG5pbXBvcnQge1xuICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgUHJvZHVjdExpc3RNb2R1bGUsXG4gIC8vIFByb2R1Y3RSZWZlcmVuY2VzTW9kdWxlLFxuICBQcm9kdWN0VGFic01vZHVsZSxcbn0gZnJvbSAnLi9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZXNNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0L3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50LXNlbGVjdG9yL3Byb2R1Y3QtdmFyaWFudC1zZWxlY3Rvci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSGFtYnVyZ2VyTWVudU1vZHVsZSxcbiAgICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gICAgTGlua01vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIFNlYXJjaEJveE1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgLy8gUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgLy8gVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlLFxuICAgIC8vIFRPRE86IzI4MTEgLSB1bmNvbW1lbnQgdG8gZW5hYmxlXG4gICAgLy8gU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgUHJvZHVjdEltYWdlc01vZHVsZSxcbiAgICBQcm9kdWN0U3VtbWFyeU1vZHVsZSxcbiAgICBQcm9kdWN0VmFyaWFudFNlbGVjdG9yTW9kdWxlLFxuICAgIFByb2R1Y3RJbnRyb01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==