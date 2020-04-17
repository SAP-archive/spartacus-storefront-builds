import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../misc/icon/icon.module';
import { ActiveFacetsModule } from './active-facets/active-facets.module';
import { FacetListModule } from './facet-list/facet-list.module';
import { ProductFacetNavigationComponent } from './product-facet-navigation.component';
let ProductFacetNavigationModule = class ProductFacetNavigationModule {
};
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
export { ProductFacetNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFtQnZGLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0NBQUcsQ0FBQTtBQUEvQiw0QkFBNEI7SUFsQnhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFVBQVU7WUFDVixVQUFVO1lBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLDBCQUEwQixFQUFFO3dCQUMxQixTQUFTLEVBQUUsK0JBQStCO3FCQUMzQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLCtCQUErQixDQUFDO1FBQy9DLE9BQU8sRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQzNDLENBQUM7R0FDVyw0QkFBNEIsQ0FBRztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQWN0aXZlRmFjZXRzTW9kdWxlIH0gZnJvbSAnLi9hY3RpdmUtZmFjZXRzL2FjdGl2ZS1mYWNldHMubW9kdWxlJztcbmltcG9ydCB7IEZhY2V0TGlzdE1vZHVsZSB9IGZyb20gJy4vZmFjZXQtbGlzdC9mYWNldC1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRmFjZXRMaXN0TW9kdWxlLFxuICAgIEFjdGl2ZUZhY2V0c01vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RSZWZpbmVtZW50Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdEZhY2V0TmF2aWdhdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEZhY2V0TmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19