import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule = __decorate([
        NgModule({
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
            providers: __spread(provideConfigFromMetaTags()),
        })
    ], StorefrontFoundationModule);
    return StorefrontFoundationModule;
}());
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsVUFBVSxFQUNWLGFBQWEsRUFDYixhQUFhLEVBQ2IseUJBQXlCLEVBQ3pCLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBeUJ2RTtJQUFBO0lBQXlDLENBQUM7SUFBN0IsMEJBQTBCO1FBdkJ0QyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUN0Qix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtnQkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUMxQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxZQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsU0FBUyxXQUFNLHlCQUF5QixFQUFFLENBQUM7U0FDNUMsQ0FBQztPQUNXLDBCQUEwQixDQUFHO0lBQUQsaUNBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gIEF1dGhNb2R1bGUsXG4gIENhcnRNb2R1bGUsXG4gIENoZWNrb3V0TW9kdWxlLFxuICBDbXNNb2R1bGUsXG4gIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9jZXNzTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzLFxuICBTdGF0ZU1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgVmlld0NvbmZpZ01vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbm9ueW1vdXNDb25zZW50c01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdJbml0aWFsaXplck1vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9jZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja291dE1vZHVsZS5mb3JSb290KCksXG4gICAgVXNlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgVmlld0NvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUuZm9yUm9vdCgnMS4wJyksXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUge31cbiJdfQ==