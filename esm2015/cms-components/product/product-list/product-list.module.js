import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewConfigModule } from '../../../shared/config/view-config.module';
import { ItemCounterModule, ListNavigationModule, MediaModule, SpinnerModule, StarRatingModule, } from '../../../shared/index';
import { AddToCartModule } from '../../cart/index';
import { IconModule } from '../../misc/icon/index';
import { defaultScrollConfig } from '../config/default-scroll-config';
import { ProductVariantsModule } from '../product-variants/product-variants.module';
import { ProductListComponent } from './container/product-list.component';
import { ProductScrollComponent } from './container/product-scroll/product-scroll.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
let ProductListModule = class ProductListModule {
};
ProductListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
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
        providers: [
            provideDefaultConfig(defaultScrollConfig),
            provideDefaultConfig({
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
                },
            }),
        ],
        declarations: [
            ProductListComponent,
            ProductListItemComponent,
            ProductGridItemComponent,
            ProductViewComponent,
            ProductScrollComponent,
        ],
        exports: [
            ProductListComponent,
            ProductListItemComponent,
            ProductGridItemComponent,
            ProductViewComponent,
            ProductScrollComponent,
        ],
        entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
    })
], ProductListModule);
export { ProductListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBb0Q3RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBbEQ3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixTQUFTO1lBQ1QsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLG9CQUFvQjtTQUNyQjtRQUNELFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFhLG1CQUFtQixDQUFDO1lBQ3JELG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2IsdUJBQXVCLEVBQUU7d0JBQ3ZCLFNBQVMsRUFBRSxvQkFBb0I7cUJBQ2hDO29CQUNELG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3FCQUNoQztvQkFDRCwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLG9CQUFvQjtxQkFDaEM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsc0JBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtTQUN2QjtRQUNELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixFQUFFLCtCQUErQixDQUFDO0tBQ3pFLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICduZ3gtaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IFZpZXdDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQge1xuICBJdGVtQ291bnRlck1vZHVsZSxcbiAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuICBTcGlubmVyTW9kdWxlLFxuICBTdGFyUmF0aW5nTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FydC9pbmRleCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTY3JvbGxDb25maWcgfSBmcm9tICcuLi9jb25maWcvZGVmYXVsdC1zY3JvbGwtY29uZmlnJztcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50c01vZHVsZSB9IGZyb20gJy4uL3Byb2R1Y3QtdmFyaWFudHMvcHJvZHVjdC12YXJpYW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9wcm9kdWN0LXNjcm9sbC9wcm9kdWN0LXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWdyaWQtaXRlbS9wcm9kdWN0LWdyaWQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWxpc3QtaXRlbS9wcm9kdWN0LWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlLFxuICAgIFZpZXdDb25maWdNb2R1bGUsXG4gICAgUHJvZHVjdFZhcmlhbnRzTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Vmlld0NvbmZpZz5kZWZhdWx0U2Nyb2xsQ29uZmlnKSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TUHJvZHVjdExpc3RDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBQcm9kdWN0R3JpZENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFNlYXJjaFJlc3VsdHNMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gICAgUHJvZHVjdFNjcm9sbENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gICAgUHJvZHVjdFNjcm9sbENvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdE1vZHVsZSB7fVxuIl19