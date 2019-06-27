/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, CartModule, CheckoutModule, CmsModule, ConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
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
                        LayoutModule,
                    ],
                    exports: [LayoutModule],
                    providers: tslib_1.__spread(provideConfigFromMetaTags()),
                },] }
    ];
    return StorefrontFoundationModule;
}());
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RDtJQUFBO0lBb0J5QyxDQUFDOztnQkFwQnpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO3dCQUM3QixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUV2QixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxtQkFBTSx5QkFBeUIsRUFBRSxDQUFDO2lCQUM1Qzs7SUFDd0MsaUNBQUM7Q0FBQSxBQXBCMUMsSUFvQjBDO1NBQTdCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2Nlc3NNb2R1bGUsXG4gIFByb2R1Y3RNb2R1bGUsXG4gIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MsXG4gIFN0YXRlTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEdsb2JhbE1lc3NhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2Nlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrb3V0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBVc2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9kdWN0TW9kdWxlLmZvclJvb3QoKSxcblxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=