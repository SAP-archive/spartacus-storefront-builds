/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewConfigModule } from '../../../shared/config/view-config.module';
import { ItemCounterModule, ListNavigationModule, MediaModule, SpinnerModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule } from '../../cart/index';
import { IconModule } from '../../misc/icon/index';
import { defaultScrollConfig } from '../config/default-scroll-config';
import { ProductListComponent } from './container/product-list.component';
import { ProductScrollComponent } from './container/product-scroll/product-scroll.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductVariantsModule } from '../product-variants/product-variants.module';
export class ProductListModule {
}
ProductListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ (defaultScrollConfig))),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSProductListComponent: {
                                component: ProductListComponent,
                            },
                            ProductGridComponent: {
                                component: ProductListComponent,
                            },
                            SearchResultsListComponent: {
                                component: ProductListComponent,
                            },
                            ProductRefinementComponent: {
                                component: ProductFacetNavigationComponent,
                            },
                        },
                    }))),
                    RouterModule,
                    MediaModule,
                    AddToCartModule,
                    ItemCounterModule,
                    ListNavigationModule,
                    UrlModule,
                    I18nModule,
                    StarRatingModule,
                    IconModule,
                    SpinnerModule,
                    InfiniteScrollModule,
                    ViewConfigModule,
                    ProductVariantsModule,
                    FeaturesConfigModule,
                ],
                declarations: [
                    ProductListComponent,
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                    ProductScrollComponent,
                ],
                exports: [
                    ProductListComponent,
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                    ProductScrollComponent,
                ],
                entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBdURwRixNQUFNLE9BQU8saUJBQWlCOzs7WUFyRDdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFZLG1CQUFtQixFQUFBLENBQUM7b0JBQ3hELFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix1QkFBdUIsRUFBRTtnQ0FDdkIsU0FBUyxFQUFFLG9CQUFvQjs2QkFDaEM7NEJBQ0Qsb0JBQW9CLEVBQUU7Z0NBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7NkJBQ2hDOzRCQUNELDBCQUEwQixFQUFFO2dDQUMxQixTQUFTLEVBQUUsb0JBQW9COzZCQUNoQzs0QkFDRCwwQkFBMEIsRUFBRTtnQ0FDMUIsU0FBUyxFQUFFLCtCQUErQjs2QkFDM0M7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO29CQUNGLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixTQUFTO29CQUNULFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsK0JBQStCO29CQUMvQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQixzQkFBc0I7aUJBQ3ZCO2dCQUNELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixFQUFFLCtCQUErQixDQUFDO2FBQ3pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB9IGZyb20gJ25neC1pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcnO1xuaW1wb3J0IHsgVmlld0NvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcubW9kdWxlJztcbmltcG9ydCB7XG4gIEl0ZW1Db3VudGVyTW9kdWxlLFxuICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgTWVkaWFNb2R1bGUsXG4gIFNwaW5uZXJNb2R1bGUsXG4gIFN0YXJSYXRpbmdNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jYXJ0L2luZGV4JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdFNjcm9sbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9kZWZhdWx0LXNjcm9sbC1jb25maWcnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LXNjcm9sbC9wcm9kdWN0LXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWdyaWQtaXRlbS9wcm9kdWN0LWdyaWQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QtaXRlbS9wcm9kdWN0LWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c01vZHVsZSB9IGZyb20gJy4uL3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxWaWV3Q29uZmlnPmRlZmF1bHRTY3JvbGxDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQcm9kdWN0TGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFByb2R1Y3RHcmlkQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgU2VhcmNoUmVzdWx0c0xpc3RDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBQcm9kdWN0UmVmaW5lbWVudENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBTdGFyUmF0aW5nTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZSxcbiAgICBWaWV3Q29uZmlnTW9kdWxlLFxuICAgIFByb2R1Y3RWYXJpYW50c01vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICAgIFByb2R1Y3RTY3JvbGxDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gICAgUHJvZHVjdFNjcm9sbENvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdE1vZHVsZSB7fVxuIl19