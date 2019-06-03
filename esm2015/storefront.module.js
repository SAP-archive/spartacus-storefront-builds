/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, CxApiModule, I18nModule, OccModule, PersonalizationModule, provideConfig, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from './cms-components/index';
import { CartPageModule } from './cms-pages/cart-page/cart-page.module';
import { OrderConfirmationPageModule } from './cms-pages/order-confirmation-page/order-confirmation-page.module';
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
                    OrderConfirmationPageModule,
                ],
                providers: [...provideConfigFromMetaTags()],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzdG9yZWZyb250Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUEwQnRELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBK0I7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBOUJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUztvQkFDVCxXQUFXO29CQUNYLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxjQUFjO29CQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVk7b0JBQ1osUUFBUTtvQkFDUix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsY0FBYztvQkFDZCwyQkFBMkI7aUJBQzVCO2dCQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztnQkFDM0MsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDeEFwaU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgT2NjTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENhcnRQYWdlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25QYWdlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcGFnZXMvb3JkZXItY29uZmlybWF0aW9uLXBhZ2Uvb3JkZXItY29uZmlybWF0aW9uLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4vY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUgfSBmcm9tICcuL2Ntcy1wYWdlcy9wcm9kdWN0LWxpc3RpbmctcGFnZS9wcm9kdWN0LWxpc3RpbmctcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi9jbXMtc3RydWN0dXJlL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyB9IGZyb20gJy4vY29uZmlnL3Byb3ZpZGUtY29uZmlnLWZyb20tbWV0YS10YWdzJztcbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuL2xheW91dC9sYXlvdXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE9jY01vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNMaWJNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIENtc1JvdXRlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZSxcbiAgICBDeEFwaU1vZHVsZSxcbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBlcnNvbmFsaXphdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgTGF5b3V0TW9kdWxlLFxuICAgIC8vIHBhZ2VzXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgICBDYXJ0UGFnZU1vZHVsZSwgLy8gYXMgbG9uZ3MgYXMgd2UgZG8gbm90IGhhdmUgIzI2NjEgaW4gcGxhY2Ugd2UgbmVlZCBhIHNwZWNpZmljIGNhcnQgcGFnZSBtb2R1bGVcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUsIC8vIHRlbXAgYWRkIGhlcmUgdGlsbCBpdCBnZXRzIHJlbW92ZWQgYnkgIzI2OTFcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFN0b3JlZnJvbnRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyksIC4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gICAgfTtcbiAgfVxufVxuIl19