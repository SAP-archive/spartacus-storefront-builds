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
var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
    }
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
    return ProductListModule;
}());
export { ProductListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBdURwRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBckQ3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFhLG1CQUFtQixDQUFDO2dCQUN4RCxZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2IsdUJBQXVCLEVBQUU7NEJBQ3ZCLFNBQVMsRUFBRSxvQkFBb0I7eUJBQ2hDO3dCQUNELG9CQUFvQixFQUFFOzRCQUNwQixTQUFTLEVBQUUsb0JBQW9CO3lCQUNoQzt3QkFDRCwwQkFBMEIsRUFBRTs0QkFDMUIsU0FBUyxFQUFFLG9CQUFvQjt5QkFDaEM7d0JBQ0QsMEJBQTBCLEVBQUU7NEJBQzFCLFNBQVMsRUFBRSwrQkFBK0I7eUJBQzNDO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixvQkFBb0I7Z0JBQ3BCLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixvQkFBb0I7YUFDckI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2dCQUNwQiwrQkFBK0I7Z0JBQy9CLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4QixvQkFBb0I7Z0JBQ3BCLHNCQUFzQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxvQkFBb0I7Z0JBQ3BCLCtCQUErQjtnQkFDL0Isd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2FBQ3ZCO1lBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUM7U0FDekUsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnbmd4LWluZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3Bpbm5lck1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uLy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0U2Nyb2xsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHQtc2Nyb2xsLWNvbmZpZyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZ3JpZC1pdGVtL3Byb2R1Y3QtZ3JpZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnRzTW9kdWxlIH0gZnJvbSAnLi4vcHJvZHVjdC12YXJpYW50cy9wcm9kdWN0LXZhcmlhbnRzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPFZpZXdDb25maWc+ZGVmYXVsdFNjcm9sbENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1Byb2R1Y3RMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdEdyaWRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBTZWFyY2hSZXN1bHRzTGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFByb2R1Y3RSZWZpbmVtZW50Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFN0YXJSYXRpbmdNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlLFxuICAgIFZpZXdDb25maWdNb2R1bGUsXG4gICAgUHJvZHVjdFZhcmlhbnRzTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gICAgUHJvZHVjdFNjcm9sbENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgUHJvZHVjdExpc3RJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RHcmlkSXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0Vmlld0NvbXBvbmVudCxcbiAgICBQcm9kdWN0U2Nyb2xsQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCwgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0TW9kdWxlIHt9XG4iXX0=