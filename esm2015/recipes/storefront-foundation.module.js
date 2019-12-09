/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
export class StorefrontFoundationModule {
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
                providers: [...provideConfigFromMetaTags()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsVUFBVSxFQUNWLGFBQWEsRUFDYixhQUFhLEVBQ2IseUJBQXlCLEVBQ3pCLFdBQVcsRUFDWCxVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBeUJ2RSxNQUFNLE9BQU8sMEJBQTBCOzs7WUF2QnRDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO29CQUNqQyxZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0Qix1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7b0JBQ2pDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNuQyxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsU0FBUyxFQUFFLENBQUMsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzTW9kdWxlLFxuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdJbml0aWFsaXplck1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgUHJvY2Vzc01vZHVsZSxcbiAgUHJvZHVjdE1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyxcbiAgU3RhdGVNb2R1bGUsXG4gIFVzZXJNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IFZpZXdDb25maWdNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc01vZHVsZS5mb3JSb290KCksXG4gICAgR2xvYmFsTWVzc2FnZU1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvY2Vzc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2FydE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hlY2tvdXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFVzZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFZpZXdDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLmZvclJvb3QoJzEuMCcpLFxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=