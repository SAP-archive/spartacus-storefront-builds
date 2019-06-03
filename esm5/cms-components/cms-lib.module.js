/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, ForgotPasswordModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, ResetPasswordModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
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
                        // TODO:#2811 - uncomment to enable
                        // StoreFinderModule,
                        ProductImagesModule,
                        CheckoutComponentModule,
                        ForgotPasswordModule,
                        ResetPasswordModule,
                    ],
                },] }
    ];
    return CmsLibModule;
}());
export { CmsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsMkJBQTJCLEdBQzVCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEdBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXJGO0lBQUE7SUFtQzJCLENBQUM7O2dCQW5DM0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLG1DQUFtQzt3QkFDbkMscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQUMwQixtQkFBQztDQUFBLEFBbkM1QixJQW1DNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlJztcbmltcG9ydCB7XG4gIEJhbm5lck1vZHVsZSxcbiAgQ21zUGFyYWdyYXBoTW9kdWxlLFxuICBMaW5rTW9kdWxlLFxuICBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUsXG59IGZyb20gJy4vY29udGVudC9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlIH0gZnJvbSAnLi9taXNjL2luZGV4JztcbmltcG9ydCB7XG4gIEFkZHJlc3NCb29rTW9kdWxlLFxuICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIENvbnNlbnRNYW5hZ2VtZW50TW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVFbWFpbE1vZHVsZSxcbiAgVXBkYXRlUGFzc3dvcmRNb2R1bGUsXG4gIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG59IGZyb20gJy4vbXlhY2NvdW50L2luZGV4JztcbmltcG9ydCB7XG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSxcbiAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgU2VhcmNoQm94TW9kdWxlLFxufSBmcm9tICcuL25hdmlnYXRpb24vaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdENhcm91c2VsTW9kdWxlLFxuICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gIFByb2R1Y3RUYWJzTW9kdWxlLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlc01vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSGFtYnVyZ2VyTWVudU1vZHVsZSxcbiAgICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gICAgTGlua01vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIFNlYXJjaEJveE1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIC8vIFRPRE86IzI4MTEgLSB1bmNvbW1lbnQgdG8gZW5hYmxlXG4gICAgLy8gU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgUHJvZHVjdEltYWdlc01vZHVsZSxcbiAgICBDaGVja291dENvbXBvbmVudE1vZHVsZSxcbiAgICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgICBSZXNldFBhc3N3b3JkTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNMaWJNb2R1bGUge31cbiJdfQ==