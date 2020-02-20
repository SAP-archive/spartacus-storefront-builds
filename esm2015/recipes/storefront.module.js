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
    })
], StorefrontModule);
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxxQkFBcUIsRUFDckIsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXlDNUUsSUFBYSxnQkFBZ0Isd0JBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQ2YsTUFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVRZLGdCQUFnQjtJQXZDNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7Z0JBQ3BDLGVBQWUsRUFBRSxTQUFTO2FBQzNCLENBQUM7WUFFRixXQUFXLENBQUMsT0FBTyxDQUNqQixFQUFFLEVBQ0Y7Z0JBQ0UsYUFBYSxFQUFFO29CQUNiLHVCQUF1QixFQUFFLElBQUk7b0JBQzdCLDBCQUEwQixFQUFFLElBQUk7b0JBQ2hDLHdCQUF3QixFQUFFLElBQUk7b0JBQzlCLDJCQUEyQixFQUFFLElBQUk7aUJBQ2xDO2FBQ0YsQ0FDRjtZQUNELGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBRXpCLHlHQUF5RztZQUN6RyxnRUFBZ0U7WUFDaEUsU0FBUztZQUVULDBCQUEwQjtZQUMxQixVQUFVO1lBQ1YsaUJBQWlCLENBQUMsT0FBTyxFQUFFO1lBRTNCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO1lBRS9CLG9CQUFvQjtZQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25CLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1NBQy9CO1FBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDO0tBQ2xELENBQUM7R0FDVyxnQkFBZ0IsQ0FTNUI7U0FUWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgRXh0ZXJuYWxSb3V0ZXNNb2R1bGUsXG4gIE9jY01vZHVsZSxcbiAgUGVyc29uYWxpemF0aW9uTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvYXNtL2FzbS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9jbXMtcGFnZXMvcHJvZHVjdC1saXN0aW5nLXBhZ2UvcHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbWFpbi9tYWluLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQtZm91bmRhdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10sIHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICdlbmFibGVkJyxcbiAgICAgIGFuY2hvclNjcm9sbGluZzogJ2VuYWJsZWQnLFxuICAgIH0pLFxuXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdChcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBydW50aW1lQ2hlY2tzOiB7XG4gICAgICAgICAgc3RyaWN0U3RhdGVJbW11dGFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgc3RyaWN0U3RhdGVTZXJpYWxpemFiaWxpdHk6IHRydWUsXG4gICAgICAgICAgc3RyaWN0QWN0aW9uSW1tdXRhYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdEFjdGlvblNlcmlhbGl6YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG5cbiAgICAvLyBBU00gbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIHRoZSBgQXV0aE1vZHVsZSAod2hpY2ggaXMgaW1wb3J0ZWQgaW4gYFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlYClcbiAgICAvLyBzaW5jZSB3ZSBtaWdodCBoYXZlIGNvbmZsaWN0aW5nIGludGVyY2VwdG9yIGxvZ2ljLiBTZWUgIzU0NjEuXG4gICAgQXNtTW9kdWxlLFxuXG4gICAgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUsXG4gICAgTWFpbk1vZHVsZSxcbiAgICBTaXRlQ29udGV4dE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBpbXBvcnRlZCBhZnRlciBSb3V0ZXJNb2R1bGUuZm9yUm9vdCwgYmVjYXVzZSBpdCBvdmVyd3JpdGVzIFVybFNlcmlhbGl6ZXJcblxuICAgIFNtYXJ0RWRpdE1vZHVsZS5mb3JSb290KCksIC8vIHNob3VsZCBiZSBjdXN0b21cbiAgICBQZXJzb25hbGl6YXRpb25Nb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG5cbiAgICAvLyBvcHQtaW4gZXhwbGljaXRseVxuICAgIE9jY01vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlLFxuICAgIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSxcbiAgICBFeHRlcm5hbFJvdXRlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRNb2R1bGUge1xuICBzdGF0aWMgd2l0aENvbmZpZyhcbiAgICBjb25maWc/OiBTdG9yZWZyb250Q29uZmlnXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RvcmVmcm9udE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RvcmVmcm9udE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19