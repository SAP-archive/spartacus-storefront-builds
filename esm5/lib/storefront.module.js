/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, CxApiModule, I18nModule, PersonalizationModule, provideConfig, RoutingModule, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/index';
import { MultiStepCheckoutModule } from './checkout/index';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { CmsModule } from './cms/index';
import { provideConfigFromMetaTags } from './provide-config-from-meta-tags';
import { SuffixRoutesModule } from './suffix-routes/suffix-routes.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGVBQWUsRUFDZixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QztJQUFBO0lBMkJBLENBQUM7Ozs7O0lBTlEsMkJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBK0I7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxvQkFBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUsseUJBQXlCLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBMUJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxRQUFRO3dCQUNSLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0QixXQUFXO3dCQUNYLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTt3QkFDL0IsdUJBQXVCO3dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25CLFlBQVksRUFBRSxFQUFFO2lCQUNqQjs7SUFRRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhNb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ3hBcGlNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgUm91dGluZ01vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi9jbXMvaW5kZXgnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyB9IGZyb20gJy4vcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgU3VmZml4Um91dGVzTW9kdWxlIH0gZnJvbSAnLi9zdWZmaXgtcm91dGVzL3N1ZmZpeC1yb3V0ZXMubW9kdWxlJztcbmltcG9ydCB7IFVpTW9kdWxlIH0gZnJvbSAnLi91aS9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc0xpYk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgVWlNb2R1bGUsXG4gICAgU3VmZml4Um91dGVzTW9kdWxlLFxuICAgIENtc1JvdXRlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ3hBcGlNb2R1bGUsXG4gICAgU21hcnRFZGl0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbVWlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU3RvcmVmcm9udE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKSwgLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=