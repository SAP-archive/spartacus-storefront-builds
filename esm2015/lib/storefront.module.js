/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { OccModule, AuthModule, ConfigModule, CxApiModule, I18nModule, PersonalizationModule, provideConfig, RoutingModule, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/index';
import { CmsModule } from '../cms-structure/cms.module';
import { CmsRouteModule } from '../cms-structure/routing/cms-route/cms-route.module';
import { SuffixRoutesModule } from '../cms-structure/routing/suffix-routes/suffix-routes.module';
import { provideConfigFromMetaTags } from './provide-config-from-meta-tags';
import { UiModule } from './ui/index';
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
                providers: [...provideConfigFromMetaTags()],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxFQUNWLHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGVBQWUsRUFDZixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBdUJ0QyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQStCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLHlCQUF5QixFQUFFLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7OztZQTNCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxhQUFhO29CQUNiLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxRQUFRO29CQUNSLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixXQUFXO29CQUNYLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFDL0IsVUFBVSxDQUFDLE9BQU8sRUFBRTtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNuQixTQUFTLEVBQUUsQ0FBQyxHQUFHLHlCQUF5QixFQUFFLENBQUM7Z0JBQzNDLFlBQVksRUFBRSxFQUFFO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgT2NjTW9kdWxlLFxuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3VmZml4Um91dGVzTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXJvdXRlcy5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyB9IGZyb20gJy4vcHJvdmlkZS1jb25maWctZnJvbS1tZXRhLXRhZ3MnO1xuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgVWlNb2R1bGUgfSBmcm9tICcuL3VpL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE9jY01vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc0xpYk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgVWlNb2R1bGUsXG4gICAgU3VmZml4Um91dGVzTW9kdWxlLFxuICAgIENtc1JvdXRlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ3hBcGlNb2R1bGUsXG4gICAgU21hcnRFZGl0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbVWlNb2R1bGVdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU3RvcmVmcm9udE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKSwgLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=