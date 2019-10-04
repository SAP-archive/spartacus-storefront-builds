/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, CartModule, CheckoutModule, CmsModule, ConfigModule, FeaturesConfigModule, GlobalMessageModule, I18nModule, ProcessModule, ProductModule, provideConfigFromMetaTags, StateModule, UserModule, AsmModule, } from '@spartacus/core';
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
                providers: [...provideConfigFromMetaTags()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixjQUFjLEVBQ2QsU0FBUyxFQUNULFlBQVksRUFDWixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLFVBQVUsRUFDVixhQUFhLEVBQ2IsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixXQUFXLEVBQ1gsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUF3QnZFLE1BQU0sT0FBTywwQkFBMEI7OztZQXRCdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFO29CQUNuQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDbkMsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDYXJ0TW9kdWxlLFxuICBDaGVja291dE1vZHVsZSxcbiAgQ21zTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBHbG9iYWxNZXNzYWdlTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBQcm9jZXNzTW9kdWxlLFxuICBQcm9kdWN0TW9kdWxlLFxuICBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzLFxuICBTdGF0ZU1vZHVsZSxcbiAgVXNlck1vZHVsZSxcbiAgQXNtTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3Q29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQXNtTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTdGF0ZU1vZHVsZS5mb3JSb290KCksXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDbXNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEdsb2JhbE1lc3NhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2Nlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoZWNrb3V0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBVc2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9kdWN0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBWaWV3Q29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZS5mb3JSb290KCcxLjAnKSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtMYXlvdXRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB7fVxuIl19