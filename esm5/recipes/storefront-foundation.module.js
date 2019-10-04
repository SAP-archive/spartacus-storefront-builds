/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, CartModule, CheckoutModule, CmsModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, AsmModule, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixVQUFVLEVBQ1YsYUFBYSxFQUNiLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXZFO0lBQUE7SUFzQnlDLENBQUM7O2dCQXRCekMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUNuQixXQUFXLENBQUMsT0FBTyxFQUFFO3dCQUNyQixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0QixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzdCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDbkMsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsbUJBQU0seUJBQXlCLEVBQUUsQ0FBQztpQkFDNUM7O0lBQ3dDLGlDQUFDO0NBQUEsQUF0QjFDLElBc0IwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ2FydE1vZHVsZSxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgUHJvY2Vzc01vZHVsZSxcbiAgUHJvZHVjdE1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyxcbiAgU3RhdGVNb2R1bGUsXG4gIFVzZXJNb2R1bGUsXG4gIEFzbU1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgVmlld0NvbmZpZ01vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFzbU1vZHVsZS5mb3JSb290KCksXG4gICAgU3RhdGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9jZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja291dE1vZHVsZS5mb3JSb290KCksXG4gICAgVXNlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgVmlld0NvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUuZm9yUm9vdCgnMS4wJyksXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUge31cbiJdfQ==