/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBSXpCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUF5QjlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBK0I7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxhQUFhO29CQUNiLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFNBQVM7b0JBQ1QsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixXQUFXO29CQUNYLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFDL0IsdUJBQXVCO29CQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ25CLFlBQVksRUFBRSxFQUFFO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBSb3V0aW5nTW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZWZyb250TW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zdG9yZWZyb250LWNvbmZpZyc7XG5cbmltcG9ydCB7IENtc0xpYk1vZHVsZSB9IGZyb20gJy4vY21zLWxpYi9pbmRleCc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBPY2NNb2R1bGUgfSBmcm9tICcuL29jYy9pbmRleCc7XG5pbXBvcnQgeyBVaU1vZHVsZSwgVWlGcmFtZXdvcmtNb2R1bGUgfSBmcm9tICcuL3VpL2luZGV4JztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MgfSBmcm9tICcuL3Byb3ZpZGUtY29uZmlnLWZyb20tbWV0YS10YWdzJztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnLi9jaGVja291dC9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1vZHVsZSB9IGZyb20gJy4vc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3VmZml4Um91dGVzTW9kdWxlIH0gZnJvbSAnLi9zdWZmaXgtcm91dGVzL3N1ZmZpeC1yb3V0ZXMubW9kdWxlJztcbmltcG9ydCB7IENtc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE9jY01vZHVsZSxcbiAgICBTdG9yZUZpbmRlck1vZHVsZSxcbiAgICBDbXNMaWJNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIFVpTW9kdWxlLFxuICAgIFN1ZmZpeFJvdXRlc01vZHVsZSxcbiAgICBDbXNSb3V0ZU1vZHVsZSxcbiAgICBVaUZyYW1ld29ya01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEN4QXBpTW9kdWxlLFxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogW1VpTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFN0b3JlZnJvbnRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyksIC4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gICAgfTtcbiAgfVxufVxuIl19