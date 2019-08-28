/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, CartModule, CheckoutModule, CmsModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StateModule.forRoot(),
                        AuthModule.forRoot(),
                        ConfigModule.forRoot(),
                        RoutingModule.forRoot(),
                        I18nModule.forRoot(),
                        CmsModule.forRoot(),
                        GlobalMessageModule.forRoot(),
                        ProcessModule.forRoot(),
                        CartModule.forRoot(),
                        CheckoutModule.forRoot(),
                        UserModule.forRoot(),
                        ProductModule.forRoot(),
                        FeaturesConfigModule.forRoot('1.0'),
                        LayoutModule,
                    ],
                    exports: [LayoutModule],
                    providers: tslib_1.__spread(provideConfigFromMetaTags()),
                },] }
    ];
    return StorefrontFoundationModule;
}());
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixVQUFVLEVBQ1YsYUFBYSxFQUNiLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQ7SUFBQTtJQW9CeUMsQ0FBQzs7Z0JBcEJ6QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTt3QkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDbkMsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsbUJBQU0seUJBQXlCLEVBQUUsQ0FBQztpQkFDNUM7O0lBQ3dDLGlDQUFDO0NBQUEsQUFwQjFDLElBb0IwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ2FydE1vZHVsZSxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgUHJvY2Vzc01vZHVsZSxcbiAgUHJvZHVjdE1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyxcbiAgU3RhdGVNb2R1bGUsXG4gIFVzZXJNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc01vZHVsZS5mb3JSb290KCksXG4gICAgR2xvYmFsTWVzc2FnZU1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvY2Vzc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2FydE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hlY2tvdXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFVzZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLmZvclJvb3QoJzEuMCcpLFxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=