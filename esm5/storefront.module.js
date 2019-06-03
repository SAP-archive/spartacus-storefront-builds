/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StorefrontModule = /** @class */ (function () {
    function StorefrontModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    StorefrontModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: StorefrontModule,
            providers: tslib_1.__spread([provideConfig(config)], provideConfigFromMetaTags()),
        };
    };
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
                    providers: tslib_1.__spread(provideConfigFromMetaTags()),
                    declarations: [],
                },] }
    ];
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzdG9yZWZyb250Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsZUFBZSxFQUNmLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXREO0lBQUE7SUErQkEsQ0FBQzs7Ozs7SUFOUSwyQkFBVTs7OztJQUFqQixVQUFrQixNQUErQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLG9CQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBSyx5QkFBeUIsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztnQkE5QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWTt3QkFDWixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsYUFBYTt3QkFDYixXQUFXO3dCQUNYLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTt3QkFDL0IsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWTt3QkFDWixRQUFRO3dCQUNSLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLDJCQUEyQjtxQkFDNUI7b0JBQ0QsU0FBUyxtQkFBTSx5QkFBeUIsRUFBRSxDQUFDO29CQUMzQyxZQUFZLEVBQUUsRUFBRTtpQkFDakI7O0lBUUQsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQVBZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU21hcnRFZGl0TW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4vY21zLWNvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNb2R1bGUgfSBmcm9tICcuL2Ntcy1wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvblBhZ2VNb2R1bGUgfSBmcm9tICcuL2Ntcy1wYWdlcy9vcmRlci1jb25maXJtYXRpb24tcGFnZS9vcmRlci1jb25maXJtYXRpb24tcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcGFnZXMvcHJvZHVjdC1kZXRhaWxzLXBhZ2UvcHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB9IGZyb20gJy4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuL2Ntcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL2Ntcy1yb3V0ZS9jbXMtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzIH0gZnJvbSAnLi9jb25maWcvcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT2NjTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc0xpYk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgQ21zUm91dGVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEN4QXBpTW9kdWxlLFxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgLy8gcGFnZXNcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlLFxuICAgIENhcnRQYWdlTW9kdWxlLCAvLyBhcyBsb25ncyBhcyB3ZSBkbyBub3QgaGF2ZSAjMjY2MSBpbiBwbGFjZSB3ZSBuZWVkIGEgc3BlY2lmaWMgY2FydCBwYWdlIG1vZHVsZVxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZU1vZHVsZSwgLy8gdGVtcCBhZGQgaGVyZSB0aWxsIGl0IGdldHMgcmVtb3ZlZCBieSAjMjY5MVxuICBdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU3RvcmVmcm9udE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKSwgLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=