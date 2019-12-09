/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExternalRoutesModule, OccModule, PersonalizationModule, provideConfig, SiteContextModule, SmartEditModule, } from '@spartacus/core';
import { AsmModule } from '../cms-components/asm/asm.module';
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
                        // ASM module must be imported before the `AuthModule (which is imported in `StorefrontFoundationModule`)
                        // since we might have conflicting interceptor logic. See #5461.
                        AsmModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFO0lBQUE7SUFnREEsQ0FBQzs7Ozs7SUFSUSwyQkFBVTs7OztJQUFqQixVQUNFLE1BQXlCO1FBRXpCLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBL0NGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7NEJBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7NEJBQ3BDLGVBQWUsRUFBRSxTQUFTO3lCQUMzQixDQUFDO3dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQ2pCLEVBQUUsRUFDRjs0QkFDRSxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUUsSUFBSTtnQ0FDN0IsMEJBQTBCLEVBQUUsSUFBSTtnQ0FDaEMsd0JBQXdCLEVBQUUsSUFBSTtnQ0FDOUIsMkJBQTJCLEVBQUUsSUFBSTs2QkFDbEM7eUJBQ0YsQ0FDRjt3QkFDRCxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFFekIseUdBQXlHO3dCQUN6RyxnRUFBZ0U7d0JBQ2hFLFNBQVM7d0JBRVQsMEJBQTBCO3dCQUMxQixVQUFVO3dCQUNWLGlCQUFpQixDQUFDLE9BQU8sRUFBRTt3QkFFM0IsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO3dCQUUvQixvQkFBb0I7d0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7cUJBQy9CO29CQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsQ0FBQztpQkFDbEQ7O0lBVUQsdUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQVRZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBFeHRlcm5hbFJvdXRlc01vZHVsZSxcbiAgT2NjTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFNpdGVDb250ZXh0TW9kdWxlLFxuICBTbWFydEVkaXRNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBc21Nb2R1bGUgfSBmcm9tICcuLi9jbXMtY29tcG9uZW50cy9hc20vYXNtLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9jbXMtcGFnZXMvcHJvZHVjdC1kZXRhaWxzLXBhZ2UvcHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWxpc3RpbmctcGFnZS9wcm9kdWN0LWxpc3RpbmctcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9tYWluL21haW4ubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb25maWcgfSBmcm9tICcuLi9zdG9yZWZyb250LWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB9IGZyb20gJy4vc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSwge1xuICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbjogJ2VuYWJsZWQnLFxuICAgICAgYW5jaG9yU2Nyb2xsaW5nOiAnZW5hYmxlZCcsXG4gICAgfSksXG5cbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHJ1bnRpbWVDaGVja3M6IHtcbiAgICAgICAgICBzdHJpY3RTdGF0ZUltbXV0YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RTdGF0ZVNlcmlhbGl6YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RBY3Rpb25JbW11dGFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgc3RyaWN0QWN0aW9uU2VyaWFsaXphYmlsaXR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JSb290KFtdKSxcblxuICAgIC8vIEFTTSBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBiZWZvcmUgdGhlIGBBdXRoTW9kdWxlICh3aGljaCBpcyBpbXBvcnRlZCBpbiBgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGVgKVxuICAgIC8vIHNpbmNlIHdlIG1pZ2h0IGhhdmUgY29uZmxpY3RpbmcgaW50ZXJjZXB0b3IgbG9naWMuIFNlZSAjNTQ2MS5cbiAgICBBc21Nb2R1bGUsXG5cbiAgICBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSxcbiAgICBNYWluTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0TW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGltcG9ydGVkIGFmdGVyIFJvdXRlck1vZHVsZS5mb3JSb290LCBiZWNhdXNlIGl0IG92ZXJ3cml0ZXMgVXJsU2VyaWFsaXplclxuXG4gICAgU21hcnRFZGl0TW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGN1c3RvbVxuICAgIFBlcnNvbmFsaXphdGlvbk1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cblxuICAgIC8vIG9wdC1pbiBleHBsaWNpdGx5XG4gICAgT2NjTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VNb2R1bGUsXG4gICAgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlLFxuICAgIEV4dGVybmFsUm91dGVzTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogW01haW5Nb2R1bGUsIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=