/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, CxApiModule, I18nModule, PersonalizationModule, provideConfig, RoutingModule, SmartEditModule, StateModule, } from '@spartacus/core';
import { CmsLibModule } from '../cms-components/index';
import { MultiStepCheckoutModule } from './checkout/index';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { CmsModule } from './cms/index';
import { provideConfigFromMetaTags } from './provide-config-from-meta-tags';
import { SuffixRoutesModule } from './suffix-routes/suffix-routes.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixhQUFhLEVBQ2IsZUFBZSxFQUNmLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBc0J0QyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQStCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLHlCQUF5QixFQUFFLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7OztZQTFCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsV0FBVztvQkFDWCxlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLHVCQUF1QjtvQkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNuQixZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEN4QXBpTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuL2Ntcy1yb3V0ZS9jbXMtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4vY21zL2luZGV4JztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MgfSBmcm9tICcuL3Byb3ZpZGUtY29uZmlnLWZyb20tbWV0YS10YWdzJztcbmltcG9ydCB7IFN0b3JlZnJvbnRNb2R1bGVDb25maWcgfSBmcm9tICcuL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN1ZmZpeFJvdXRlc01vZHVsZSB9IGZyb20gJy4vc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgUm91dGluZ01vZHVsZSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNMaWJNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIFVpTW9kdWxlLFxuICAgIFN1ZmZpeFJvdXRlc01vZHVsZSxcbiAgICBDbXNSb3V0ZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEN4QXBpTW9kdWxlLFxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogW1VpTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFN0b3JlZnJvbnRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyksIC4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG4gICAgfTtcbiAgfVxufVxuIl19