/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, CxApiModule, I18nModule, OccModule, PersonalizationModule, provideConfig, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from './cms-components/index';
import { CartPageModule } from './cms-pages/cart-page/cart-page.module';
import { ProductDetailsPageModule } from './cms-pages/product-details-page/product-details-page.module';
import { ProductListingPageModule } from './cms-pages/product-listing-page/product-listing-page.module';
import { CmsModule } from './cms-structure/cms.module';
import { CmsRouteModule } from './cms-structure/routing/cms-route/cms-route.module';
import { RoutingModule } from './cms-structure/routing/routing.module';
import { provideConfigFromMetaTags } from './config/provide-config-from-meta-tags';
import { LayoutModule } from './layout/layout.module';
export class StorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: StorefrontModule,
            providers: [provideConfig(config), ...provideConfigFromMetaTags()],
        };
    }
}
StorefrontModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OccModule,
                    StateModule,
                    AuthModule.forRoot(),
                    CmsLibModule,
                    CmsModule,
                    CmsRouteModule,
                    ConfigModule.forRoot(),
                    RoutingModule,
                    CxApiModule,
                    SmartEditModule.forRoot(),
                    PersonalizationModule.forRoot(),
                    I18nModule.forRoot(),
                    LayoutModule,
                    // pages
                    ProductDetailsPageModule,
                    ProductListingPageModule,
                    CartPageModule,
                ],
                exports: [LayoutModule],
                providers: [...provideConfigFromMetaTags()],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzdG9yZWZyb250Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUEwQnRELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBK0I7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBOUJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUztvQkFDVCxXQUFXO29CQUNYLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxjQUFjO29CQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVk7b0JBQ1osUUFBUTtvQkFDUix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztnQkFDM0MsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDeEFwaU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgT2NjTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENhcnRQYWdlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcGFnZXMvcHJvZHVjdC1kZXRhaWxzLXBhZ2UvcHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB9IGZyb20gJy4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuL2Ntcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL2Ntcy1yb3V0ZS9jbXMtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzIH0gZnJvbSAnLi9jb25maWcvcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT2NjTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc0xpYk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgQ21zUm91dGVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEN4QXBpTW9kdWxlLFxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgLy8gcGFnZXNcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlLFxuICAgIENhcnRQYWdlTW9kdWxlLCAvLyBhcyBsb25ncyBhcyB3ZSBkbyBub3QgaGF2ZSAjMjY2MSBpbiBwbGFjZSB3ZSBuZWVkIGEgc3BlY2lmaWMgY2FydCBwYWdlIG1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFN0b3JlZnJvbnRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyksIC4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gICAgfTtcbiAgfVxufVxuIl19