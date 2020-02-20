import { __decorate } from "tslib";
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
let ProductListModule = class ProductListModule {
};
ProductListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig(defaultScrollConfig),
            ConfigModule.withConfig({
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
            }),
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
    })
], ProductListModule);
export { ProductListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBdURwRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFHLENBQUE7QUFBcEIsaUJBQWlCO0lBckQ3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBYSxtQkFBbUIsQ0FBQztZQUN4RCxZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsdUJBQXVCLEVBQUU7d0JBQ3ZCLFNBQVMsRUFBRSxvQkFBb0I7cUJBQ2hDO29CQUNELG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3FCQUNoQztvQkFDRCwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLG9CQUFvQjtxQkFDaEM7b0JBQ0QsMEJBQTBCLEVBQUU7d0JBQzFCLFNBQVMsRUFBRSwrQkFBK0I7cUJBQzNDO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsU0FBUztZQUNULFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDckI7UUFDRCxZQUFZLEVBQUU7WUFDWixvQkFBb0I7WUFDcEIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtZQUNwQiwrQkFBK0I7WUFDL0Isd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsc0JBQXNCO1NBQ3ZCO1FBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUM7S0FDekUsQ0FBQztHQUNXLGlCQUFpQixDQUFHO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICduZ3gtaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IFZpZXdDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQge1xuICBJdGVtQ291bnRlck1vZHVsZSxcbiAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gIE1lZGlhTW9kdWxlLFxuICBTcGlubmVyTW9kdWxlLFxuICBTdGFyUmF0aW5nTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FydC9pbmRleCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTY3JvbGxDb25maWcgfSBmcm9tICcuLi9jb25maWcvZGVmYXVsdC1zY3JvbGwtY29uZmlnJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvcHJvZHVjdC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvcHJvZHVjdC1zY3JvbGwvcHJvZHVjdC1zY3JvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1ncmlkLWl0ZW0vcHJvZHVjdC1ncmlkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1saXN0LWl0ZW0vcHJvZHVjdC1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudHNNb2R1bGUgfSBmcm9tICcuLi9wcm9kdWN0LXZhcmlhbnRzL3Byb2R1Y3QtdmFyaWFudHMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Vmlld0NvbmZpZz5kZWZhdWx0U2Nyb2xsQ29uZmlnKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TUHJvZHVjdExpc3RDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBQcm9kdWN0R3JpZENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFNlYXJjaFJlc3VsdHNMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdFJlZmluZW1lbnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSW5maW5pdGVTY3JvbGxNb2R1bGUsXG4gICAgVmlld0NvbmZpZ01vZHVsZSxcbiAgICBQcm9kdWN0VmFyaWFudHNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RHcmlkSXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0Vmlld0NvbXBvbmVudCxcbiAgICBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICAgIFByb2R1Y3RTY3JvbGxDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Byb2R1Y3RMaXN0Q29tcG9uZW50LCBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RNb2R1bGUge31cbiJdfQ==