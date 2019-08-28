/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, CartModule, CheckoutModule, CmsModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
export class StorefrontFoundationModule {
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
                    FeaturesConfigModule.forRoot('1.0'),
                    LayoutModule,
                ],
                exports: [LayoutModule],
                providers: [...provideConfigFromMetaTags()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixjQUFjLEVBQ2QsU0FBUyxFQUNULFlBQVksRUFDWixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXNCdkQsTUFBTSxPQUFPLDBCQUEwQjs7O1lBcEJ0QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQ25CLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFDcEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDbkMsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9jZXNzTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzLFxuICBTdGF0ZU1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ21zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHbG9iYWxNZXNzYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9jZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja291dE1vZHVsZS5mb3JSb290KCksXG4gICAgVXNlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZHVjdE1vZHVsZS5mb3JSb290KCksXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUuZm9yUm9vdCgnMS4wJyksXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUge31cbiJdfQ==