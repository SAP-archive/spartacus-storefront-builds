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
export class StorefrontModule {
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
                        anchorScrolling: 'enabled',
                        relativeLinkResolution: 'corrected',
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9yZWNpcGVzL3N0b3JlZnJvbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUErQjVFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FDZixNQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7OztZQXJDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUN2QixlQUFlLEVBQUUsU0FBUzt3QkFDMUIsc0JBQXNCLEVBQUUsV0FBVztxQkFDcEMsQ0FBQztvQkFFRixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBRXpCLHlHQUF5RztvQkFDekcsZ0VBQWdFO29CQUNoRSxTQUFTO29CQUVULDBCQUEwQjtvQkFDMUIsVUFBVTtvQkFDVixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7b0JBRTNCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFFL0Isb0JBQW9CO29CQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsb0JBQW9CLENBQUMsT0FBTyxFQUFFO2lCQUMvQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgRXh0ZXJuYWxSb3V0ZXNNb2R1bGUsXG4gIE9jY01vZHVsZSxcbiAgUGVyc29uYWxpemF0aW9uTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgU21hcnRFZGl0TW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQXNtTW9kdWxlIH0gZnJvbSAnLi4vY21zLWNvbXBvbmVudHMvYXNtL2FzbS5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIH0gZnJvbSAnLi4vY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUgfSBmcm9tICcuLi9jbXMtcGFnZXMvcHJvZHVjdC1saXN0aW5nLXBhZ2UvcHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlJztcbmltcG9ydCB7IE1haW5Nb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbWFpbi9tYWluLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmVmcm9udC1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuL3N0b3JlZnJvbnQtZm91bmRhdGlvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10sIHtcbiAgICAgIGFuY2hvclNjcm9sbGluZzogJ2VuYWJsZWQnLFxuICAgICAgcmVsYXRpdmVMaW5rUmVzb2x1dGlvbjogJ2NvcnJlY3RlZCcsXG4gICAgfSksXG5cbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KHt9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvclJvb3QoW10pLFxuXG4gICAgLy8gQVNNIG1vZHVsZSBtdXN0IGJlIGltcG9ydGVkIGJlZm9yZSB0aGUgYEF1dGhNb2R1bGUgKHdoaWNoIGlzIGltcG9ydGVkIGluIGBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZWApXG4gICAgLy8gc2luY2Ugd2UgbWlnaHQgaGF2ZSBjb25mbGljdGluZyBpbnRlcmNlcHRvciBsb2dpYy4gU2VlICM1NDYxLlxuICAgIEFzbU1vZHVsZSxcblxuICAgIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlLFxuICAgIE1haW5Nb2R1bGUsXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgaW1wb3J0ZWQgYWZ0ZXIgUm91dGVyTW9kdWxlLmZvclJvb3QsIGJlY2F1c2UgaXQgb3ZlcndyaXRlcyBVcmxTZXJpYWxpemVyXG5cbiAgICBTbWFydEVkaXRNb2R1bGUuZm9yUm9vdCgpLCAvLyBzaG91bGQgYmUgY3VzdG9tXG4gICAgUGVyc29uYWxpemF0aW9uTW9kdWxlLmZvclJvb3QoKSwgLy8gc2hvdWxkIGJlIGN1c3RvbVxuXG4gICAgLy8gb3B0LWluIGV4cGxpY2l0bHlcbiAgICBPY2NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSxcbiAgICBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUsXG4gICAgRXh0ZXJuYWxSb3V0ZXNNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbTWFpbk1vZHVsZSwgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoXG4gICAgY29uZmlnPzogU3RvcmVmcm9udENvbmZpZ1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFN0b3JlZnJvbnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0b3JlZnJvbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==