import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, ConfigValidatorModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { EventsModule } from '../events/events.module';
import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../shared/components/media/media.module';
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
                ConfigValidatorModule.forRoot(),
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
                FeaturesConfigModule.forRoot('2.0'),
                LayoutModule,
                MediaModule.forRoot(),
                EventsModule,
            ],
            exports: [LayoutModule],
            providers: __spread(provideConfigFromMetaTags()),
        })
    ], StorefrontFoundationModule);
    return StorefrontFoundationModule;
}());
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBNEJ2RTtJQUFBO0lBQXlDLENBQUM7SUFBN0IsMEJBQTBCO1FBMUJ0QyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUN0Qix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtnQkFDL0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO2dCQUM3QixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNwQixjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUN4QixVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUNwQixhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLFlBQVk7Z0JBQ1osV0FBVyxDQUFDLE9BQU8sRUFBRTtnQkFDckIsWUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFNBQVMsV0FBTSx5QkFBeUIsRUFBRSxDQUFDO1NBQzVDLENBQUM7T0FDVywwQkFBMEIsQ0FBRztJQUFELGlDQUFDO0NBQUEsQUFBMUMsSUFBMEM7U0FBN0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzTW9kdWxlLFxuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdJbml0aWFsaXplck1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBDb25maWdWYWxpZGF0b3JNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9jZXNzTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzLFxuICBTdGF0ZU1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRXZlbnRzTW9kdWxlIH0gZnJvbSAnLi4vZXZlbnRzL2V2ZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgVmlld0NvbmZpZ01vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9jb25maWcvdmlldy1jb25maWcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbm9ueW1vdXNDb25zZW50c01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdJbml0aWFsaXplck1vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnVmFsaWRhdG9yTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEdsb2JhbE1lc3NhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2Nlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrb3V0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBVc2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9kdWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBWaWV3Q29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZS5mb3JSb290KCcyLjAnKSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV2ZW50c01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=