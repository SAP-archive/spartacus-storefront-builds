import { __decorate } from "tslib";
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
    StorefrontModule_1 = StorefrontModule;
    StorefrontModule.withConfig = function (config) {
        return {
            ngModule: StorefrontModule_1,
            providers: [provideConfig(config)],
        };
    };
    var StorefrontModule_1;
    StorefrontModule = StorefrontModule_1 = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot([], {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                }),
                StoreModule.forRoot({}),
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
        })
    ], StorefrontModule);
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBK0I1RTtJQUFBO0lBU0EsQ0FBQzt5QkFUWSxnQkFBZ0I7SUFDcEIsMkJBQVUsR0FBakIsVUFDRSxNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O0lBUlUsZ0JBQWdCO1FBN0I1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7b0JBQ3BDLGVBQWUsRUFBRSxTQUFTO2lCQUMzQixDQUFDO2dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFFekIseUdBQXlHO2dCQUN6RyxnRUFBZ0U7Z0JBQ2hFLFNBQVM7Z0JBRVQsMEJBQTBCO2dCQUMxQixVQUFVO2dCQUNWLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtnQkFFM0IsZUFBZSxDQUFDLE9BQU8sRUFBRTtnQkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO2dCQUUvQixvQkFBb0I7Z0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7YUFDL0I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLENBQUM7U0FDbEQsQ0FBQztPQUNXLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250LWZvdW5kYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcblxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG5cbiAgICAvLyBBU00gbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIHRoZSBgQXV0aE1vZHVsZSAod2hpY2ggaXMgaW1wb3J0ZWQgaW4gYFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlYClcbiAgICAvLyBzaW5jZSB3ZSBtaWdodCBoYXZlIGNvbmZsaWN0aW5nIGludGVyY2VwdG9yIGxvZ2ljLiBTZWUgIzU0NjEuXG4gICAgQXNtTW9kdWxlLFxuXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG5cbiAgICAvLyBvcHQtaW4gZXhwbGljaXRseVxuICAgIE9jY01vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgICBFeHRlcm5hbFJvdXRlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19