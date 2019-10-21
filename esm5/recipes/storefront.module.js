/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            providers: [provideConfig(config)],
        };
    };
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
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUU7SUFBQTtJQTJDQSxDQUFDOzs7OztJQVJRLDJCQUFVOzs7O0lBQWpCLFVBQ0UsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOztnQkExQ0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTs0QkFDdkIseUJBQXlCLEVBQUUsU0FBUzs0QkFDcEMsZUFBZSxFQUFFLFNBQVM7eUJBQzNCLENBQUM7d0JBRUYsV0FBVyxDQUFDLE9BQU8sQ0FDakIsRUFBRSxFQUNGOzRCQUNFLGFBQWEsRUFBRTtnQ0FDYix1QkFBdUIsRUFBRSxJQUFJO2dDQUM3QiwwQkFBMEIsRUFBRSxJQUFJO2dDQUNoQyx3QkFBd0IsRUFBRSxJQUFJO2dDQUM5QiwyQkFBMkIsRUFBRSxJQUFJOzZCQUNsQzt5QkFDRixDQUNGO3dCQUNELGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUV6QiwwQkFBMEI7d0JBQzFCLFVBQVU7d0JBQ1YsaUJBQWlCLENBQUMsT0FBTyxFQUFFO3dCQUUzQixlQUFlLENBQUMsT0FBTyxFQUFFO3dCQUN6QixxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7d0JBQy9CLG9CQUFvQjt3QkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDO2lCQUNsRDs7SUFVRCx1QkFBQztDQUFBLEFBM0NELElBMkNDO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250LWZvdW5kYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcblxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3QoXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcnVudGltZUNoZWNrczoge1xuICAgICAgICAgIHN0cmljdFN0YXRlSW1tdXRhYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdFN0YXRlU2VyaWFsaXphYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdEFjdGlvbkltbXV0YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RBY3Rpb25TZXJpYWxpemFiaWxpdHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW10pLFxuXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG4gICAgLy8gb3B0LWluIGV4cGxpY2l0bHlcbiAgICBPY2NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUsXG4gICAgRXh0ZXJuYWxSb3V0ZXNNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbTWFpbk1vZHVsZSwgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFN0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==