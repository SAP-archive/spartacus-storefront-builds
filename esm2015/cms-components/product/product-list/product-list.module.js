/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, StripHtmlModule, UrlTranslationModule, } from '@spartacus/core';
import { BootstrapModule } from '../../../lib/bootstrap.module';
import { FormComponentsModule, ListNavigationModule, MediaModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule } from '../../checkout/index';
import { ProductListComponent } from './container/product-list.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
export class ProductListModule {
}
ProductListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSProductListComponent: { selector: 'cx-product-list' },
                            SearchResultsListComponent: { selector: 'cx-product-list' },
                            ProductRefinementComponent: { selector: 'cx-product-facet-navigation' },
                        },
                    }))),
                    RouterModule,
                    MediaModule,
                    BootstrapModule,
                    AddToCartModule,
                    FormComponentsModule,
                    ListNavigationModule,
                    StripHtmlModule,
                    UrlTranslationModule,
                    I18nModule,
                    StarRatingModule,
                ],
                declarations: [
                    ProductListComponent,
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                ],
                exports: [
                    ProductListComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                ],
                entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixlQUFlLEVBQ2Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDaEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFxQzdFLE1BQU0sT0FBTyxpQkFBaUI7OztZQW5DN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix1QkFBdUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs0QkFDeEQsMEJBQTBCLEVBQUUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7NEJBQzNELDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFO3lCQUN4RTtxQkFDRixFQUFBLENBQUM7b0JBQ0YsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLFVBQVU7b0JBQ1YsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQzthQUN6RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBTdHJpcEh0bWxNb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2Jvb3RzdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgRm9ybUNvbXBvbmVudHNNb2R1bGUsXG4gIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZ3JpZC1pdGVtL3Byb2R1Y3QtZ3JpZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQcm9kdWN0TGlzdENvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtbGlzdCcgfSxcbiAgICAgICAgU2VhcmNoUmVzdWx0c0xpc3RDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWxpc3QnIH0sXG4gICAgICAgIFByb2R1Y3RSZWZpbmVtZW50Q29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uJyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQm9vdHN0cmFwTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBTdHJpcEh0bWxNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCwgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0TW9kdWxlIHt9XG4iXX0=