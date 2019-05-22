/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { OccModule, AuthModule, ConfigModule, CxApiModule, I18nModule, PersonalizationModule, provideConfig, RoutingModule, SmartEditModule, StateModule, } from '@spartacus/core';
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
                        OccModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsYUFBYSxFQUNiLGFBQWEsRUFDYixlQUFlLEVBQ2YsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFNUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QztJQUFBO0lBNEJBLENBQUM7Ozs7O0lBTlEsMkJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBK0I7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxvQkFBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUsseUJBQXlCLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBM0JGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWTt3QkFDWixTQUFTO3dCQUNULFFBQVE7d0JBQ1Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLFdBQVc7d0JBQ1gsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO3dCQUMvQixVQUFVLENBQUMsT0FBTyxFQUFFO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25CLFNBQVMsbUJBQU0seUJBQXlCLEVBQUUsQ0FBQztvQkFDM0MsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVFELHVCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPY2NNb2R1bGUsXG4gIEF1dGhNb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ3hBcGlNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgUm91dGluZ01vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdWZmaXhSb3V0ZXNNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzIH0gZnJvbSAnLi9wcm92aWRlLWNvbmZpZy1mcm9tLW1ldGEtdGFncyc7XG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT2NjTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFJvdXRpbmdNb2R1bGUsXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTGliTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBVaU1vZHVsZSxcbiAgICBTdWZmaXhSb3V0ZXNNb2R1bGUsXG4gICAgQ21zUm91dGVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDeEFwaU1vZHVsZSxcbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBlcnNvbmFsaXphdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtVaU1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTdG9yZWZyb250TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpLCAuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==