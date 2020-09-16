import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../misc/icon/icon.module';
import { ActiveFacetsModule } from './active-facets/active-facets.module';
import { FacetListModule } from './facet-list/facet-list.module';
import { ProductFacetNavigationComponent } from './product-facet-navigation.component';
export class ProductFacetNavigationModule {
}
ProductFacetNavigationModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQW1CdkYsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBbEJ4QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFZO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsMEJBQTBCLEVBQUU7Z0NBQzFCLFNBQVMsRUFBRSwrQkFBK0I7NkJBQzNDO3lCQUNGO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFjdGl2ZUZhY2V0c01vZHVsZSB9IGZyb20gJy4vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWNldExpc3RNb2R1bGUgfSBmcm9tICcuL2ZhY2V0LWxpc3QvZmFjZXQtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZhY2V0TGlzdE1vZHVsZSxcbiAgICBBY3RpdmVGYWNldHNNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBQcm9kdWN0UmVmaW5lbWVudENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==