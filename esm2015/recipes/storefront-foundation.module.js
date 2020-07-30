import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, ConfigValidatorModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { EventsModule } from '../events/events.module';
import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../shared/components/media/media.module';
import { ViewConfigModule } from '../shared/config/view-config.module';
let StorefrontFoundationModule = class StorefrontFoundationModule {
};
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
        providers: [...provideConfigFromMetaTags()],
    })
], StorefrontFoundationModule);
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBNEJ2RSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtDQUFHLENBQUE7QUFBN0IsMEJBQTBCO0lBMUJ0QyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ2pDLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtZQUMvQixhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7WUFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25DLFlBQVk7WUFDWixXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLFlBQVk7U0FDYjtRQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixTQUFTLEVBQUUsQ0FBQyxHQUFHLHlCQUF5QixFQUFFLENBQUM7S0FDNUMsQ0FBQztHQUNXLDBCQUEwQixDQUFHO1NBQTdCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgQXV0aE1vZHVsZSxcbiAgQ2FydE1vZHVsZSxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc01vZHVsZSxcbiAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ29uZmlnVmFsaWRhdG9yTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgUHJvY2Vzc01vZHVsZSxcbiAgUHJvZHVjdE1vZHVsZSxcbiAgcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncyxcbiAgU3RhdGVNb2R1bGUsXG4gIFVzZXJNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEV2ZW50c01vZHVsZSB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IFZpZXdDb25maWdNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvY29uZmlnL3ZpZXctY29uZmlnLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdGF0ZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ1ZhbGlkYXRvck1vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9jZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja291dE1vZHVsZS5mb3JSb290KCksXG4gICAgVXNlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgVmlld0NvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUuZm9yUm9vdCgnMi4wJyksXG4gICAgTGF5b3V0TW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLmZvclJvb3QoKSxcbiAgICBFdmVudHNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtMYXlvdXRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB7fVxuIl19