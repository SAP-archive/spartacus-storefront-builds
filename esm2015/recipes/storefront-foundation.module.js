import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CartModule, CheckoutModule, CmsModule, ConfigInitializerModule, ConfigModule, ConfigValidatorModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
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
        ],
        exports: [LayoutModule],
        providers: [...provideConfigFromMetaTags()],
    })
], StorefrontFoundationModule);
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQTBCdkUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7Q0FBRyxDQUFBO0FBQTdCLDBCQUEwQjtJQXhCdEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtZQUNqQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtZQUNqQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQyxZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsU0FBUyxFQUFFLENBQUMsR0FBRyx5QkFBeUIsRUFBRSxDQUFDO0tBQzVDLENBQUM7R0FDVywwQkFBMEIsQ0FBRztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gIEF1dGhNb2R1bGUsXG4gIENhcnRNb2R1bGUsXG4gIENoZWNrb3V0TW9kdWxlLFxuICBDbXNNb2R1bGUsXG4gIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIENvbmZpZ1ZhbGlkYXRvck1vZHVsZSxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFByb2Nlc3NNb2R1bGUsXG4gIFByb2R1Y3RNb2R1bGUsXG4gIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MsXG4gIFN0YXRlTW9kdWxlLFxuICBVc2VyTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFub255bW91c0NvbnNlbnRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb25maWdWYWxpZGF0b3JNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIENtc01vZHVsZS5mb3JSb290KCksXG4gICAgR2xvYmFsTWVzc2FnZU1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvY2Vzc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2FydE1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hlY2tvdXRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFVzZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2R1Y3RNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFZpZXdDb25maWdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLmZvclJvb3QoJzIuMCcpLFxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW0xheW91dE1vZHVsZV0sXG4gIHByb3ZpZGVyczogWy4uLnByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlZnJvbnRGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=