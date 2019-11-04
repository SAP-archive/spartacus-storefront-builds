/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AsmModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
export class StorefrontFoundationModule {
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
                providers: [...provideConfigFromMetaTags()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQTBCdkUsTUFBTSxPQUFPLDBCQUEwQjs7O1lBeEJ0QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtvQkFDakMsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO29CQUNqQyxhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDbkMsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgQXNtTW9kdWxlLFxuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdJbml0aWFsaXplck1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgUHJvY2Vzc01vZHVsZSxcbiAgUHJvZHVjdE1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyxcbiAgU3RhdGVNb2R1bGUsXG4gIFVzZXJNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IFZpZXdDb25maWdNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBc21Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFN0YXRlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbm9ueW1vdXNDb25zZW50c01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdJbml0aWFsaXplck1vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9jZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja291dE1vZHVsZS5mb3JSb290KCksXG4gICAgVXNlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgVmlld0NvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUuZm9yUm9vdCgnMS4wJyksXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUge31cbiJdfQ==