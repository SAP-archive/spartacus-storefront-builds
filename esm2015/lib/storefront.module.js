/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    MultiStepCheckoutModule,
                    I18nModule.forRoot(),
                ],
                exports: [UiModule],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmVmcm9udC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFJekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXdCOUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUErQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDOzs7WUE1QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGFBQWE7b0JBQ2IsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsU0FBUztvQkFDVCxpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxRQUFRO29CQUNSLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLFdBQVc7b0JBQ1gsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsdUJBQXVCO29CQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ25CLFlBQVksRUFBRSxFQUFFO2FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBSb3V0aW5nTW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxuICBDeEFwaU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgU3RvcmVmcm9udE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vc3RvcmVmcm9udC1jb25maWcnO1xuXG5pbXBvcnQgeyBDbXNMaWJNb2R1bGUgfSBmcm9tICcuL2Ntcy1saWIvaW5kZXgnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi9jbXMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjTW9kdWxlIH0gZnJvbSAnLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgVWlNb2R1bGUsIFVpRnJhbWV3b3JrTW9kdWxlIH0gZnJvbSAnLi91aS9pbmRleCc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzIH0gZnJvbSAnLi9wcm92aWRlLWNvbmZpZy1mcm9tLW1ldGEtdGFncyc7XG5pbXBvcnQgeyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB9IGZyb20gJy4vY2hlY2tvdXQvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJNb2R1bGUgfSBmcm9tICcuL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXIubW9kdWxlJztcbmltcG9ydCB7IFN1ZmZpeFJvdXRlc01vZHVsZSB9IGZyb20gJy4vc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgUm91dGluZ01vZHVsZSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBPY2NNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJNb2R1bGUsXG4gICAgQ21zTGliTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBVaU1vZHVsZSxcbiAgICBTdWZmaXhSb3V0ZXNNb2R1bGUsXG4gICAgQ21zUm91dGVNb2R1bGUsXG4gICAgVWlGcmFtZXdvcmtNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDeEFwaU1vZHVsZSxcbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbVWlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU3RvcmVmcm9udE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKSwgLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=