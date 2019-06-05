/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { OccModule, PersonalizationModule, provideConfig, SmartEditModule, } from '@spartacus/core';
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
                        StorefrontFoundationModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFO0lBQUE7SUFvQkEsQ0FBQzs7Ozs7SUFOUSwyQkFBVTs7OztJQUFqQixVQUFrQixNQUF5QjtRQUN6QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O2dCQW5CRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLDBCQUEwQjt3QkFFMUIsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO3dCQUUvQixxQkFBcUI7d0JBQ3JCLFNBQVM7d0JBQ1Qsd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO2lCQUNGOztJQVFELHVCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT2NjTW9kdWxlLFxuICBQZXJzb25hbGl6YXRpb25Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWcsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQtZm91bmRhdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG5cbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGN1c3RvbVxuXG4gICAgLy8gb3B0LWluIGV4cGxpY2l0ZWx5XG4gICAgT2NjTW9kdWxlLFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc/OiBTdG9yZWZyb250Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdG9yZWZyb250TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=