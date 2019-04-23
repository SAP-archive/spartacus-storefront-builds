/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, provideConfig, RoutingModule, StateModule, SmartEditModule, CxApiModule, I18nModule, } from '@spartacus/core';
import { CmsLibModule } from './cms-lib/index';
import { CmsModule } from './cms/index';
import { OccModule } from './occ/index';
import { UiModule, UiFrameworkModule } from './ui/index';
import { provideConfigFromMetaTags } from './provide-config-from-meta-tags';
import { MultiStepCheckoutModule } from './checkout/index';
import { StoreFinderModule } from './store-finder/store-finder.module';
import { SuffixRoutesModule } from './suffix-routes/suffix-routes.module';
import { CmsRouteModule } from './cms-route/cms-route.module';
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
                        StateModule,
                        RoutingModule,
                        AuthModule.forRoot(),
                        OccModule,
                        StoreFinderModule,
                        CmsLibModule,
                        CmsModule,
                        UiModule,
                        SuffixRoutesModule,
                        CmsRouteModule,
                        UiFrameworkModule,
                        ConfigModule.forRoot(),
                        CxApiModule,
                        SmartEditModule.forRoot(),
                        MultiStepCheckoutModule,
                        I18nModule.forRoot(),
                    ],
                    exports: [UiModule],
                    declarations: [],
                },] }
    ];
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLFdBQVcsRUFDWCxlQUFlLEVBQ2YsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBSXpCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQ7SUFBQTtJQTZCQSxDQUFDOzs7OztJQU5RLDJCQUFVOzs7O0lBQWpCLFVBQWtCLE1BQStCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsb0JBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFLLHlCQUF5QixFQUFFLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O2dCQTVCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixTQUFTO3dCQUNULGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixTQUFTO3dCQUNULFFBQVE7d0JBQ1Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsV0FBVzt3QkFDWCxlQUFlLENBQUMsT0FBTyxFQUFFO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDbkIsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVFELHVCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUsXG4gIFN0YXRlTW9kdWxlLFxuICBTbWFydEVkaXRNb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdG9yZWZyb250LWNvbmZpZyc7XG5cbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4vY21zLWxpYi9pbmRleCc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBPY2NNb2R1bGUgfSBmcm9tICcuL29jYy9pbmRleCc7XG5pbXBvcnQgeyBVaU1vZHVsZSwgVWlGcmFtZXdvcmtNb2R1bGUgfSBmcm9tICcuL3VpL2luZGV4JztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MgfSBmcm9tICcuL3Byb3ZpZGUtY29uZmlnLWZyb20tbWV0YS10YWdzJztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1vZHVsZSB9IGZyb20gJy4vc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3VmZml4Um91dGVzTW9kdWxlIH0gZnJvbSAnLi9zdWZmaXgtcm91dGVzL3N1ZmZpeC1yb3V0ZXMubW9kdWxlJztcbmltcG9ydCB7IENtc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBDbXNMaWJNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIFVpTW9kdWxlLFxuICAgIFN1ZmZpeFJvdXRlc01vZHVsZSxcbiAgICBDbXNSb3V0ZU1vZHVsZSxcbiAgICBVaUZyYW1ld29ya01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEN4QXBpTW9kdWxlLFxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtVaU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTdG9yZWZyb250TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpLCAuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==