/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
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
var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
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
    return ProductListModule;
}());
export { ProductListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsYUFBYSxFQUNiLGdCQUFnQixHQUNqQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDaEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFBQTtJQWdEZ0MsQ0FBQzs7Z0JBaERoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBWSxtQkFBbUIsRUFBQSxDQUFDO3dCQUN4RCxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUU7b0NBQ3ZCLFNBQVMsRUFBRSxvQkFBb0I7aUNBQ2hDO2dDQUNELDBCQUEwQixFQUFFO29DQUMxQixTQUFTLEVBQUUsb0JBQW9CO2lDQUNoQztnQ0FDRCwwQkFBMEIsRUFBRTtvQ0FDMUIsU0FBUyxFQUFFLCtCQUErQjtpQ0FDM0M7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsZUFBZSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsK0JBQStCLENBQUM7aUJBQ3pFOztJQUMrQix3QkFBQztDQUFBLEFBaERqQyxJQWdEaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnbmd4LWluZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbiAgU3Bpbm5lck1vZHVsZSxcbiAgU3RhclJhdGluZ01vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4uLy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0U2Nyb2xsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHQtc2Nyb2xsLWNvbmZpZyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL3Byb2R1Y3Qtc2Nyb2xsL3Byb2R1Y3Qtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZ3JpZC1pdGVtL3Byb2R1Y3QtZ3JpZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC1pdGVtL3Byb2R1Y3QtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9kdWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxWaWV3Q29uZmlnPmRlZmF1bHRTY3JvbGxDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQcm9kdWN0TGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFNlYXJjaFJlc3VsdHNMaXN0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgUHJvZHVjdFJlZmluZW1lbnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBBZGRUb0NhcnRNb2R1bGUsXG4gICAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3RhclJhdGluZ01vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSW5maW5pdGVTY3JvbGxNb2R1bGUsXG4gICAgVmlld0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdEdyaWRJdGVtQ29tcG9uZW50LFxuICAgIFByb2R1Y3RWaWV3Q29tcG9uZW50LFxuICAgIFByb2R1Y3RTY3JvbGxDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBQcm9kdWN0R3JpZEl0ZW1Db21wb25lbnQsXG4gICAgUHJvZHVjdFZpZXdDb21wb25lbnQsXG4gICAgUHJvZHVjdFNjcm9sbENvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdE1vZHVsZSB7fVxuIl19