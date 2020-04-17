import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../misc/icon/icon.module';
import { ActiveFacetsModule } from './active-facets/active-facets.module';
import { FacetListModule } from './facet-list/facet-list.module';
import { ProductFacetNavigationComponent } from './product-facet-navigation.component';
var ProductFacetNavigationModule = /** @class */ (function () {
    function ProductFacetNavigationModule() {
    }
    ProductFacetNavigationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FacetListModule,
                ActiveFacetsModule,
                IconModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        ProductRefinementComponent: {
                            component: ProductFacetNavigationComponent,
                        },
                    },
                }),
            ],
            declarations: [ProductFacetNavigationComponent],
            exports: [ProductFacetNavigationComponent],
        })
    ], ProductFacetNavigationModule);
    return ProductFacetNavigationModule;
}());
export { ProductFacetNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFtQnZGO0lBQUE7SUFBMkMsQ0FBQztJQUEvQiw0QkFBNEI7UUFsQnhDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLDBCQUEwQixFQUFFOzRCQUMxQixTQUFTLEVBQUUsK0JBQStCO3lCQUMzQztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMzQyxDQUFDO09BQ1csNEJBQTRCLENBQUc7SUFBRCxtQ0FBQztDQUFBLEFBQTVDLElBQTRDO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBBY3RpdmVGYWNldHNNb2R1bGUgfSBmcm9tICcuL2FjdGl2ZS1mYWNldHMvYWN0aXZlLWZhY2V0cy5tb2R1bGUnO1xuaW1wb3J0IHsgRmFjZXRMaXN0TW9kdWxlIH0gZnJvbSAnLi9mYWNldC1saXN0L2ZhY2V0LWxpc3QubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGYWNldExpc3RNb2R1bGUsXG4gICAgQWN0aXZlRmFjZXRzTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUHJvZHVjdFJlZmluZW1lbnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=