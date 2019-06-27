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
                    // opt-in explicitely
                    OccModule.forRoot(),
                    ProductDetailsPageModule,
                    ProductListingPageModule,
                ],
                exports: [MainModule, StorefrontFoundationModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQW9DNUUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FDZixNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7OztZQTFDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUN2Qix5QkFBeUIsRUFBRSxTQUFTO3dCQUNwQyxlQUFlLEVBQUUsU0FBUztxQkFDM0IsQ0FBQztvQkFFRixXQUFXLENBQUMsT0FBTyxDQUNqQixFQUFFLEVBQ0Y7d0JBQ0UsYUFBYSxFQUFFOzRCQUNiLHVCQUF1QixFQUFFLElBQUk7NEJBQzdCLDBCQUEwQixFQUFFLElBQUk7NEJBQ2hDLHdCQUF3QixFQUFFLElBQUk7NEJBQzlCLDJCQUEyQixFQUFFLElBQUk7eUJBQ2xDO3FCQUNGLENBQ0Y7b0JBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBRXpCLDBCQUEwQjtvQkFDMUIsVUFBVTtvQkFDVixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7b0JBRTNCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFFL0IscUJBQXFCO29CQUNyQixTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIE9jY01vZHVsZSxcbiAgUGVyc29uYWxpemF0aW9uTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9jbXMtcGFnZXMvcHJvZHVjdC1saXN0aW5nLXBhZ2UvcHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbWFpbi9tYWluLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQtZm91bmRhdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10sIHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICdlbmFibGVkJyxcbiAgICAgIGFuY2hvclNjcm9sbGluZzogJ2VuYWJsZWQnLFxuICAgIH0pLFxuXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdChcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBydW50aW1lQ2hlY2tzOiB7XG4gICAgICAgICAgc3RyaWN0U3RhdGVJbW11dGFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgc3RyaWN0U3RhdGVTZXJpYWxpemFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgc3RyaWN0QWN0aW9uSW1tdXRhYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdEFjdGlvblNlcmlhbGl6YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG5cbiAgICBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSxcbiAgICBNYWluTW9kdWxlLFxuICAgIFNpdGVDb250ZXh0TW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGltcG9ydGVkIGFmdGVyIFJvdXRlck1vZHVsZS5mb3JSb290LCBiZWNhdXNlIGl0IG92ZXJ3cml0ZXMgVXJsU2VyaWFsaXplclxuXG4gICAgU21hcnRFZGl0TW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGN1c3RvbVxuICAgIFBlcnNvbmFsaXphdGlvbk1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cblxuICAgIC8vIG9wdC1pbiBleHBsaWNpdGVseVxuICAgIE9jY01vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01haW5Nb2R1bGUsIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udE1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKFxuICAgIGNvbmZpZz86IFN0b3JlZnJvbnRDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdG9yZWZyb250TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=