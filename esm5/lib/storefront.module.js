/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, provideConfig, RoutingModule, StateModule, SmartEditModule, PersonalizationModule, CxApiModule, I18nModule, } from '@spartacus/core';
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
                        PersonalizationModule.forRoot(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLFdBQVcsRUFDWCxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUl6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTlEO0lBQUE7SUE4QkEsQ0FBQzs7Ozs7SUFOUSwyQkFBVTs7OztJQUFqQixVQUFrQixNQUErQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLG9CQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBSyx5QkFBeUIsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztnQkE3QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsU0FBUzt3QkFDVCxpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxRQUFRO3dCQUNSLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLFdBQVc7d0JBQ1gsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO3dCQUMvQix1QkFBdUI7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDbkIsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVFELHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUsXG4gIFN0YXRlTW9kdWxlLFxuICBTbWFydEVkaXRNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgQ3hBcGlNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0b3JlZnJvbnQtY29uZmlnJztcblxuaW1wb3J0IHsgQ21zTGliTW9kdWxlIH0gZnJvbSAnLi9jbXMtbGliL2luZGV4JztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4vY21zL2luZGV4JztcbmltcG9ydCB7IE9jY01vZHVsZSB9IGZyb20gJy4vb2NjL2luZGV4JztcbmltcG9ydCB7IFVpTW9kdWxlLCBVaUZyYW1ld29ya01vZHVsZSB9IGZyb20gJy4vdWkvaW5kZXgnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyB9IGZyb20gJy4vcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgTXVsdGlTdGVwQ2hlY2tvdXRNb2R1bGUgfSBmcm9tICcuL2NoZWNrb3V0L2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdWZmaXhSb3V0ZXNNb2R1bGUgfSBmcm9tICcuL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXJvdXRlcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuL2Ntcy1yb3V0ZS9jbXMtcm91dGUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLFxuICAgIFJvdXRpbmdNb2R1bGUsXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgT2NjTW9kdWxlLFxuICAgIFN0b3JlRmluZGVyTW9kdWxlLFxuICAgIENtc0xpYk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgVWlNb2R1bGUsXG4gICAgU3VmZml4Um91dGVzTW9kdWxlLFxuICAgIENtc1JvdXRlTW9kdWxlLFxuICAgIFVpRnJhbWV3b3JrTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ3hBcGlNb2R1bGUsXG4gICAgU21hcnRFZGl0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbVWlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU3RvcmVmcm9udE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKSwgLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=