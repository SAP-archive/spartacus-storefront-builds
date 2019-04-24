/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponentModule } from '../../cms-components/checkout/cart/cart.module';
import { SiteContextSelectorModule } from '../../cms-components/misc/site-context-selector/site-context-selector.module';
import { HamburgerMenuModule, SkipLinkModule } from '../../layout/index';
import { CloseAccountModule } from '../my-account/close-account/close-account.module';
import { OrderDetailsModule } from '../my-account/order/order-details/order-details.module';
import { OrderHistoryModule } from '../my-account/order/order-history/order-history.module';
import { PaymentMethodsModule } from '../my-account/payment-methods/payment-methods.module';
import { UpdateEmailModule } from '../my-account/update-email/update-email.module';
import { UpdatePasswordModule } from '../my-account/update-password/update-password.module';
import { UpdateProfileModule } from '../my-account/update-profile/update-profile.module';
import { ProductListModule } from '../product/components/product-list/product-list.module';
import { ProductTabsModule } from '../product/components/product-tabs/product-tabs.module';
import { AddressBookModule } from './address-book/address-book.module';
import { BannerModule } from './banner/banner.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CategoryNavigationModule } from './category-navigation/category-navigation.module';
import { FooterNavigationModule } from './footer-navigation/footer-navigation.module';
import { LinkModule } from './link/link.module';
import { NavigationModule } from './navigation/navigation.module';
import { CmsParagraphModule } from './paragraph/paragraph.module';
import { ProductCarouselModule } from './product-carousel/product-carousel.module';
import { SearchBoxModule } from './search-box/search-box.module';
export class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SkipLinkModule,
                    HamburgerMenuModule,
                    CmsParagraphModule,
                    LinkModule,
                    BannerModule,
                    CategoryNavigationModule,
                    NavigationModule,
                    FooterNavigationModule,
                    BreadcrumbModule,
                    ProductCarouselModule,
                    SearchBoxModule,
                    SiteContextSelectorModule,
                    AddressBookModule,
                    OrderHistoryModule,
                    ProductListModule,
                    ProductTabsModule,
                    OrderDetailsModule,
                    PaymentMethodsModule,
                    UpdateEmailModule,
                    UpdatePasswordModule,
                    UpdateProfileModule,
                    CartComponentModule,
                    CloseAccountModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9jbXMtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDekgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBOEJqRSxNQUFNLE9BQU8sWUFBWTs7O1lBNUJ4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixrQkFBa0I7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL3NpdGUtY29udGV4dC1zZWxlY3Rvci9zaXRlLWNvbnRleHQtc2VsZWN0b3IubW9kdWxlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVNb2R1bGUsIFNraXBMaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IENsb3NlQWNjb3VudE1vZHVsZSB9IGZyb20gJy4uL215LWFjY291bnQvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNNb2R1bGUgfSBmcm9tICcuLi9teS1hY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TW9kdWxlIH0gZnJvbSAnLi4vbXktYWNjb3VudC9vcmRlci9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RzTW9kdWxlIH0gZnJvbSAnLi4vbXktYWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGRhdGVFbWFpbE1vZHVsZSB9IGZyb20gJy4uL215LWFjY291bnQvdXBkYXRlLWVtYWlsL3VwZGF0ZS1lbWFpbC5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRNb2R1bGUgfSBmcm9tICcuLi9teS1hY2NvdW50L3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQubW9kdWxlJztcbmltcG9ydCB7IFVwZGF0ZVByb2ZpbGVNb2R1bGUgfSBmcm9tICcuLi9teS1hY2NvdW50L3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdE1vZHVsZSB9IGZyb20gJy4uL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0VGFic01vZHVsZSB9IGZyb20gJy4uL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LXRhYnMvcHJvZHVjdC10YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va01vZHVsZSB9IGZyb20gJy4vYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5tb2R1bGUnO1xuaW1wb3J0IHsgQmFubmVyTW9kdWxlIH0gZnJvbSAnLi9iYW5uZXIvYmFubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTW9kdWxlIH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kdWxlJztcbmltcG9ydCB7IENhdGVnb3J5TmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4vY2F0ZWdvcnktbmF2aWdhdGlvbi9jYXRlZ29yeS1uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTGlua01vZHVsZSB9IGZyb20gJy4vbGluay9saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IENtc1BhcmFncmFwaE1vZHVsZSB9IGZyb20gJy4vcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4vc2VhcmNoLWJveC9zZWFyY2gtYm94Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2tpcExpbmtNb2R1bGUsXG4gICAgSGFtYnVyZ2VyTWVudU1vZHVsZSxcbiAgICBDbXNQYXJhZ3JhcGhNb2R1bGUsXG4gICAgTGlua01vZHVsZSxcbiAgICBCYW5uZXJNb2R1bGUsXG4gICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgRm9vdGVyTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIFByb2R1Y3RDYXJvdXNlbE1vZHVsZSxcbiAgICBTZWFyY2hCb3hNb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRTZWxlY3Rvck1vZHVsZSxcbiAgICBBZGRyZXNzQm9va01vZHVsZSxcbiAgICBPcmRlckhpc3RvcnlNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RNb2R1bGUsXG4gICAgUHJvZHVjdFRhYnNNb2R1bGUsXG4gICAgT3JkZXJEZXRhaWxzTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RzTW9kdWxlLFxuICAgIFVwZGF0ZUVtYWlsTW9kdWxlLFxuICAgIFVwZGF0ZVBhc3N3b3JkTW9kdWxlLFxuICAgIFVwZGF0ZVByb2ZpbGVNb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBDbG9zZUFjY291bnRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc0xpYk1vZHVsZSB7fVxuIl19