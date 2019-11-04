/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AsmModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AsmModule.forRoot(),
                        StateModule.forRoot(),
                        AuthModule.forRoot(),
                        AnonymousConsentsModule.forRoot(),
                        ConfigModule.forRoot(),
                        ConfigInitializerModule.forRoot(),
                        RoutingModule.forRoot(),
                        I18nModule.forRoot(),
                        CmsModule.forRoot(),
                        GlobalMessageModule.forRoot(),
                        ProcessModule.forRoot(),
                        CartModule.forRoot(),
                        CheckoutModule.forRoot(),
                        UserModule.forRoot(),
                        ProductModule.forRoot(),
                        ViewConfigModule.forRoot(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixjQUFjLEVBQ2QsU0FBUyxFQUNULHVCQUF1QixFQUN2QixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixVQUFVLEVBQ1YsYUFBYSxFQUNiLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkU7SUFBQTtJQXdCeUMsQ0FBQzs7Z0JBeEJ6QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25CLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLHVCQUF1QixDQUFDLE9BQU8sRUFBRTt3QkFDakMsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO3dCQUNqQyxhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzdCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDbkMsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsbUJBQU0seUJBQXlCLEVBQUUsQ0FBQztpQkFDNUM7O0lBQ3dDLGlDQUFDO0NBQUEsQUF4QjFDLElBd0IwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gIEFzbU1vZHVsZSxcbiAgQXV0aE1vZHVsZSxcbiAgQ2FydE1vZHVsZSxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2Nlc3NNb2R1bGUsXG4gIFByb2R1Y3RNb2R1bGUsXG4gIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MsXG4gIFN0YXRlTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXNtTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTdGF0ZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc01vZHVsZS5mb3JSb290KCksXG4gICAgR2xvYmFsTWVzc2FnZU1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvY2Vzc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2FydE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hlY2tvdXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFVzZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFZpZXdDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLmZvclJvb3QoJzEuMCcpLFxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=