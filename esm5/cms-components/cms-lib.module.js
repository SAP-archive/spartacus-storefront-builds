/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HamburgerMenuModule, SkipLinkModule } from '../layout/index';
import { CartComponentModule } from './checkout/cart/cart.module';
import { BannerModule, CmsParagraphModule, LinkModule, TabParagraphContainerModule, } from './content/index';
import { SiteContextSelectorModule } from './misc/index';
import { AddressBookModule, CloseAccountModule, ConsentManagementModule, OrderDetailsModule, OrderHistoryModule, PaymentMethodsModule, UpdateEmailModule, UpdatePasswordModule, UpdateProfileModule, ForgotPasswordModule, ResetPasswordModule, } from './myaccount/index';
import { BreadcrumbModule, CategoryNavigationModule, FooterNavigationModule, NavigationModule, SearchBoxModule, } from './navigation/index';
import { ProductCarouselModule, ProductListModule, ProductReferencesModule, ProductTabsModule, } from './product/index';
import { StoreFinderModule } from './storefinder/index';
var CmsLibModule = /** @class */ (function () {
    function CmsLibModule() {
    }
    CmsLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        SkipLinkModule,
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
                        StoreFinderModule,
                        ForgotPasswordModule,
                        ResetPasswordModule,
                    ],
                },] }
    ];
    return CmsLibModule;
}());
export { CmsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsVUFBVSxFQUNWLDJCQUEyQixHQUM1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixHQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RDtJQUFBO0lBaUMyQixDQUFDOztnQkFqQzNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsVUFBVTt3QkFDVixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQUMwQixtQkFBQztDQUFBLEFBakM1QixJQWlDNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUsIFNraXBMaW5rTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgQmFubmVyTW9kdWxlLFxuICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gIExpbmtNb2R1bGUsXG4gIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSxcbn0gZnJvbSAnLi9jb250ZW50L2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuL21pc2MvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQWRkcmVzc0Jvb2tNb2R1bGUsXG4gIENsb3NlQWNjb3VudE1vZHVsZSxcbiAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gIE9yZGVyRGV0YWlsc01vZHVsZSxcbiAgT3JkZXJIaXN0b3J5TW9kdWxlLFxuICBQYXltZW50TWV0aG9kc01vZHVsZSxcbiAgVXBkYXRlRW1haWxNb2R1bGUsXG4gIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICBVcGRhdGVQcm9maWxlTW9kdWxlLFxuICBGb3Jnb3RQYXNzd29yZE1vZHVsZSxcbiAgUmVzZXRQYXNzd29yZE1vZHVsZSxcbn0gZnJvbSAnLi9teWFjY291bnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlLFxuICBOYXZpZ2F0aW9uTW9kdWxlLFxuICBTZWFyY2hCb3hNb2R1bGUsXG59IGZyb20gJy4vbmF2aWdhdGlvbi9pbmRleCc7XG5pbXBvcnQge1xuICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gIFByb2R1Y3RMaXN0TW9kdWxlLFxuICBQcm9kdWN0UmVmZXJlbmNlc01vZHVsZSxcbiAgUHJvZHVjdFRhYnNNb2R1bGUsXG59IGZyb20gJy4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1vZHVsZSB9IGZyb20gJy4vc3RvcmVmaW5kZXIvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2tpcExpbmtNb2R1bGUsXG4gICAgSGFtYnVyZ2VyTWVudU1vZHVsZSxcbiAgICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gICAgTGlua01vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIFNlYXJjaEJveE1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFNlbGVjdG9yTW9kdWxlLFxuICAgIEFkZHJlc3NCb29rTW9kdWxlLFxuICAgIE9yZGVySGlzdG9yeU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdE1vZHVsZSxcbiAgICBQcm9kdWN0VGFic01vZHVsZSxcbiAgICBQcm9kdWN0Q2Fyb3VzZWxNb2R1bGUsXG4gICAgUHJvZHVjdFJlZmVyZW5jZXNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ29uc2VudE1hbmFnZW1lbnRNb2R1bGUsXG4gICAgQ2xvc2VBY2NvdW50TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgVGFiUGFyYWdyYXBoQ29udGFpbmVyTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIEZvcmdvdFBhc3N3b3JkTW9kdWxlLFxuICAgIFJlc2V0UGFzc3dvcmRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0xpYk1vZHVsZSB7fVxuIl19