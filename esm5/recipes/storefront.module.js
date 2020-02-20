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
    return StorefrontModule;
}());
export { StorefrontModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FDaEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBeUM1RTtJQUFBO0lBU0EsQ0FBQzt5QkFUWSxnQkFBZ0I7SUFDcEIsMkJBQVUsR0FBakIsVUFDRSxNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7O0lBUlUsZ0JBQWdCO1FBdkM1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZCLHlCQUF5QixFQUFFLFNBQVM7b0JBQ3BDLGVBQWUsRUFBRSxTQUFTO2lCQUMzQixDQUFDO2dCQUVGLFdBQVcsQ0FBQyxPQUFPLENBQ2pCLEVBQUUsRUFDRjtvQkFDRSxhQUFhLEVBQUU7d0JBQ2IsdUJBQXVCLEVBQUUsSUFBSTt3QkFDN0IsMEJBQTBCLEVBQUUsSUFBSTt3QkFDaEMsd0JBQXdCLEVBQUUsSUFBSTt3QkFDOUIsMkJBQTJCLEVBQUUsSUFBSTtxQkFDbEM7aUJBQ0YsQ0FDRjtnQkFDRCxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFFekIseUdBQXlHO2dCQUN6RyxnRUFBZ0U7Z0JBQ2hFLFNBQVM7Z0JBRVQsMEJBQTBCO2dCQUMxQixVQUFVO2dCQUNWLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtnQkFFM0IsZUFBZSxDQUFDLE9BQU8sRUFBRTtnQkFDekIscUJBQXFCLENBQUMsT0FBTyxFQUFFO2dCQUUvQixvQkFBb0I7Z0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLHdCQUF3QjtnQkFDeEIsd0JBQXdCO2dCQUN4QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7YUFDL0I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLENBQUM7U0FDbEQsQ0FBQztPQUNXLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICBPY2NNb2R1bGUsXG4gIFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZyxcbiAgU2l0ZUNvbnRleHRNb2R1bGUsXG4gIFNtYXJ0RWRpdE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFzbU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1jb21wb25lbnRzL2FzbS9hc20ubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4uL2Ntcy1wYWdlcy9wcm9kdWN0LWRldGFpbHMtcGFnZS9wcm9kdWN0LWRldGFpbHMtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L21haW4vbWFpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi9zdG9yZWZyb250LWZvdW5kYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdLCB7XG4gICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAnZW5hYmxlZCcsXG4gICAgICBhbmNob3JTY3JvbGxpbmc6ICdlbmFibGVkJyxcbiAgICB9KSxcblxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3QoXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcnVudGltZUNoZWNrczoge1xuICAgICAgICAgIHN0cmljdFN0YXRlSW1tdXRhYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdFN0YXRlU2VyaWFsaXphYmlsaXR5OiB0cnVlLFxuICAgICAgICAgIHN0cmljdEFjdGlvbkltbXV0YWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICBzdHJpY3RBY3Rpb25TZXJpYWxpemFiaWxpdHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW10pLFxuXG4gICAgLy8gQVNNIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGJlZm9yZSB0aGUgYEF1dGhNb2R1bGUgKHdoaWNoIGlzIGltcG9ydGVkIGluIGBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZWApXG4gICAgLy8gc2luY2Ugd2UgbWlnaHQgaGF2ZSBjb25mbGljdGluZyBpbnRlcmNlcHRvciBsb2dpYy4gU2VlICM1NDYxLlxuICAgIEFzbU1vZHVsZSxcblxuICAgIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlLFxuICAgIE1haW5Nb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgaW1wb3J0ZWQgYWZ0ZXIgUm91dGVyTW9kdWxlLmZvclJvb3QsIGJlY2F1c2UgaXQgb3ZlcndyaXRlcyBVcmxTZXJpYWxpemVyXG5cbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGN1c3RvbVxuXG4gICAgLy8gb3B0LWluIGV4cGxpY2l0bHlcbiAgICBPY2NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUsXG4gICAgRXh0ZXJuYWxSb3V0ZXNNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbTWFpbk1vZHVsZSwgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFN0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==