/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OccModule, PersonalizationModule, provideConfig, SiteContextModule, SmartEditModule, } from '@spartacus/core';
import { ProductDetailsPageModule } from '../cms-pages/product-details-page/product-details-page.module';
import { ProductListingPageModule } from '../cms-pages/product-listing-page/product-listing-page.module';
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
                            },
                        }),
                        EffectsModule.forRoot([]),
                        StorefrontFoundationModule,
                        SiteContextModule.forRoot(),
                        SmartEditModule.forRoot(),
                        PersonalizationModule.forRoot(),
                        // opt-in explicitely
                        OccModule,
                        ProductDetailsPageModule,
                        ProductListingPageModule,
                    ],
                },] }
    ];
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFO0lBQUE7SUEwQ0EsQ0FBQzs7Ozs7SUFSUSwyQkFBVTs7OztJQUFqQixVQUNFLE1BQXlCO1FBRXpCLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBekNGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7NEJBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7NEJBQ3BDLGVBQWUsRUFBRSxTQUFTO3lCQUMzQixDQUFDO3dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQ2pCLEVBQUUsRUFDRjs0QkFDRSxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUUsSUFBSTtnQ0FDN0IsMEJBQTBCLEVBQUUsSUFBSTtnQ0FDaEMsd0JBQXdCLEVBQUUsSUFBSTs2QkFHL0I7eUJBQ0YsQ0FDRjt3QkFDRCxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFFekIsMEJBQTBCO3dCQUMxQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7d0JBRTNCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTt3QkFFL0IscUJBQXFCO3dCQUNyQixTQUFTO3dCQUNULHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFVRCx1QkFBQztDQUFBLEFBMUNELElBMENDO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIE9jY01vZHVsZSxcbiAgUGVyc29uYWxpemF0aW9uTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9jbXMtcGFnZXMvcHJvZHVjdC1saXN0aW5nLXBhZ2UvcHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSwge1xuICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbjogJ2VuYWJsZWQnLFxuICAgICAgYW5jaG9yU2Nyb2xsaW5nOiAnZW5hYmxlZCcsXG4gICAgfSksXG5cbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWVDaGVja3M6IHtcbiAgICAgICAgICBzdHJpY3RTdGF0ZUltbXV0YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RTdGF0ZVNlcmlhbGl6YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RBY3Rpb25JbW11dGFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgLy8gVE9ETzojMzAxMCAtIGVuYWJsZVxuICAgICAgICAgIC8vIHN0cmljdEFjdGlvblNlcmlhbGl6YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG5cbiAgICBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG5cbiAgICAvLyBvcHQtaW4gZXhwbGljaXRlbHlcbiAgICBPY2NNb2R1bGUsXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=