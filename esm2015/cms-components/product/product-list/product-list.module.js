/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ItemCounterModule, ListNavigationModule, MediaModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule } from '../../cart/index';
import { IconModule } from '../../misc/icon/index';
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
                            CMSProductListComponent: {
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
                    ProductFacetNavigationComponent,
                    ProductListItemComponent,
                    ProductGridItemComponent,
                    ProductViewComponent,
                ],
                entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQTRDN0UsTUFBTSxPQUFPLGlCQUFpQjs7O1lBMUM3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHVCQUF1QixFQUFFO2dDQUN2QixTQUFTLEVBQUUsb0JBQW9COzZCQUNoQzs0QkFDRCwwQkFBMEIsRUFBRTtnQ0FDMUIsU0FBUyxFQUFFLG9CQUFvQjs2QkFDaEM7NEJBQ0QsMEJBQTBCLEVBQUU7Z0NBQzFCLFNBQVMsRUFBRSwrQkFBK0I7NkJBQzNDO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztvQkFDRixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsU0FBUztvQkFDVCxVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQiwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLCtCQUErQjtvQkFDL0Isd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUM7YUFDekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uLy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWdyaWQtaXRlbS9wcm9kdWN0LWdyaWQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QtaXRlbS9wcm9kdWN0LWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TUHJvZHVjdExpc3RDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBTZWFyY2hSZXN1bHRzTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFByb2R1Y3RSZWZpbmVtZW50Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCwgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0TW9kdWxlIHt9XG4iXX0=