/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, CxApiModule, I18nModule, PersonalizationModule, provideConfig, RoutingModule, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/index';
import { CmsModule } from '../cms-structure/cms.module';
import { CmsRouteModule } from '../cms-structure/routing/cms-route/cms-route.module';
import { SuffixRoutesModule } from '../cms-structure/routing/suffix-routes/suffix-routes.module';
import { provideConfigFromMetaTags } from './provide-config-from-meta-tags';
import { UiModule } from './ui/index';
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
                        CmsLibModule,
                        CmsModule,
                        UiModule,
                        SuffixRoutesModule,
                        CmsRouteModule,
                        ConfigModule.forRoot(),
                        CxApiModule,
                        SmartEditModule.forRoot(),
                        PersonalizationModule.forRoot(),
                        I18nModule.forRoot(),
                    ],
                    exports: [UiModule],
                    providers: tslib_1.__spread(provideConfigFromMetaTags()),
                    declarations: [],
                },] }
    ];
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGVBQWUsRUFDZixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRDO0lBQUE7SUEyQkEsQ0FBQzs7Ozs7SUFOUSwyQkFBVTs7OztJQUFqQixVQUFrQixNQUErQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLG9CQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBSyx5QkFBeUIsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOztnQkExQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWTt3QkFDWixTQUFTO3dCQUNULFFBQVE7d0JBQ1Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLFdBQVc7d0JBQ1gsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO3dCQUMvQixVQUFVLENBQUMsT0FBTyxFQUFFO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25CLFNBQVMsbUJBQU0seUJBQXlCLEVBQUUsQ0FBQztvQkFDM0MsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVFELHVCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3VmZml4Um91dGVzTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXJvdXRlcy5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyB9IGZyb20gJy4vcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgVWlNb2R1bGUgfSBmcm9tICcuL3VpL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLFxuICAgIFJvdXRpbmdNb2R1bGUsXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTGliTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBVaU1vZHVsZSxcbiAgICBTdWZmaXhSb3V0ZXNNb2R1bGUsXG4gICAgQ21zUm91dGVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDeEFwaU1vZHVsZSxcbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBlcnNvbmFsaXphdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtVaU1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTdG9yZWZyb250TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpLCAuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==