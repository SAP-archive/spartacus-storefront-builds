/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEVBQ1YsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV2RTtJQUFBO0lBdUJ5QyxDQUFDOztnQkF2QnpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO3dCQUNqQyxZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0Qix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7d0JBQ2pDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTt3QkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxtQkFBTSx5QkFBeUIsRUFBRSxDQUFDO2lCQUM1Qzs7SUFDd0MsaUNBQUM7Q0FBQSxBQXZCMUMsSUF1QjBDO1NBQTdCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgQXV0aE1vZHVsZSxcbiAgQ2FydE1vZHVsZSxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2Nlc3NNb2R1bGUsXG4gIFByb2R1Y3RNb2R1bGUsXG4gIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MsXG4gIFN0YXRlTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFub255bW91c0NvbnNlbnRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEdsb2JhbE1lc3NhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2Nlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrb3V0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBVc2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9kdWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBWaWV3Q29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZS5mb3JSb290KCcxLjAnKSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtMYXlvdXRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB7fVxuIl19