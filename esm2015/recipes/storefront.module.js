/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExternalRoutesModule, OccModule, PersonalizationModule, provideConfig, SiteContextModule, SmartEditModule, } from '@spartacus/core';
import { ProductDetailsPageModule } from '../cms-pages/product-details-page/product-details-page.module';
import { ProductListingPageModule } from '../cms-pages/product-listing-page/product-listing-page.module';
import { MainModule } from '../layout/main/main.module';
import { StorefrontFoundationModule } from './storefront-foundation.module';
export class StorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: StorefrontModule,
            providers: [provideConfig(config)],
        };
    }
}
StorefrontModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forRoot([], {
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled',
                    }),
                    StoreModule.forRoot({}, {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictStateSerializability: true,
                            strictActionImmutability: true,
                            strictActionSerializability: true,
                        },
                    }),
                    EffectsModule.forRoot([]),
                    StorefrontFoundationModule,
                    MainModule,
                    SiteContextModule.forRoot(),
                    SmartEditModule.forRoot(),
                    PersonalizationModule.forRoot(),
                    // opt-in explicitly
                    OccModule.forRoot(),
                    ProductDetailsPageModule,
                    ProductListingPageModule,
                    ExternalRoutesModule.forRoot(),
                ],
                exports: [MainModule, StorefrontFoundationModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFxQzVFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7WUEzQ0YsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTt3QkFDdkIseUJBQXlCLEVBQUUsU0FBUzt3QkFDcEMsZUFBZSxFQUFFLFNBQVM7cUJBQzNCLENBQUM7b0JBRUYsV0FBVyxDQUFDLE9BQU8sQ0FDakIsRUFBRSxFQUNGO3dCQUNFLGFBQWEsRUFBRTs0QkFDYix1QkFBdUIsRUFBRSxJQUFJOzRCQUM3QiwwQkFBMEIsRUFBRSxJQUFJOzRCQUNoQyx3QkFBd0IsRUFBRSxJQUFJOzRCQUM5QiwyQkFBMkIsRUFBRSxJQUFJO3lCQUNsQztxQkFDRixDQUNGO29CQUNELGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUV6QiwwQkFBMEI7b0JBQzFCLFVBQVU7b0JBQ1YsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUUzQixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7b0JBRS9CLG9CQUFvQjtvQkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtvQkFDbkIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250LWZvdW5kYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcblxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3QoXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcnVudGltZUNoZWNrczoge1xuICAgICAgICAgIHN0cmljdFN0YXRlSW1tdXRhYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdFN0YXRlU2VyaWFsaXphYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdEFjdGlvbkltbXV0YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RBY3Rpb25TZXJpYWxpemFiaWxpdHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW10pLFxuXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG5cbiAgICAvLyBvcHQtaW4gZXhwbGljaXRseVxuICAgIE9jY01vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgICBFeHRlcm5hbFJvdXRlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19