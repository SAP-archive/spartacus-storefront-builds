var StorefrontModule_1;
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
let StorefrontModule = StorefrontModule_1 = class StorefrontModule {
    static withConfig(config) {
        return {
            ngModule: StorefrontModule_1,
            providers: [provideConfig(config)],
        };
    }
};
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
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxxQkFBcUIsRUFDckIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQStCNUUsSUFBYSxnQkFBZ0Isd0JBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLGdCQUFnQjtJQTdCNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7Z0JBQ3BDLGVBQWUsRUFBRSxTQUFTO2FBQzNCLENBQUM7WUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUV6Qix5R0FBeUc7WUFDekcsZ0VBQWdFO1lBQ2hFLFNBQVM7WUFFVCwwQkFBMEI7WUFDMUIsVUFBVTtZQUNWLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUUzQixlQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtZQUUvQixvQkFBb0I7WUFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNuQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtTQUMvQjtRQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsQ0FBQztLQUNsRCxDQUFDO0dBQ1csZ0JBQWdCLENBUzVCO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250LWZvdW5kYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcblxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG5cbiAgICAvLyBBU00gbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIHRoZSBgQXV0aE1vZHVsZSAod2hpY2ggaXMgaW1wb3J0ZWQgaW4gYFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlYClcbiAgICAvLyBzaW5jZSB3ZSBtaWdodCBoYXZlIGNvbmZsaWN0aW5nIGludGVyY2VwdG9yIGxvZ2ljLiBTZWUgIzU0NjEuXG4gICAgQXNtTW9kdWxlLFxuXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG5cbiAgICAvLyBvcHQtaW4gZXhwbGljaXRseVxuICAgIE9jY01vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgICBFeHRlcm5hbFJvdXRlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19