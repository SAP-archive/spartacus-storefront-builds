/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, I18nModule, provideConfigFromMetaTags, SiteContextModule, StateModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
export class StorefrontFoundationModule {
}
StorefrontFoundationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StateModule,
                    AuthModule.forRoot(),
                    ConfigModule.forRoot(),
                    RoutingModule,
                    I18nModule.forRoot(),
                    SiteContextModule.forRoot(),
                    LayoutModule,
                ],
                providers: [...provideConfigFromMetaTags()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBZ0J2RCxNQUFNLE9BQU8sMEJBQTBCOzs7WUFkdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFVBQVUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGFBQWE7b0JBQ2IsVUFBVSxDQUFDLE9BQU8sRUFBRTtvQkFFcEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUUzQixZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcseUJBQXlCLEVBQUUsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MsXG4gIFNpdGVDb250ZXh0TW9kdWxlLFxuICBTdGF0ZU1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgQXV0aE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUuZm9yUm9vdCgpLFxuXG4gICAgU2l0ZUNvbnRleHRNb2R1bGUuZm9yUm9vdCgpLFxuXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzKCldLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZWZyb250Rm91bmRhdGlvbk1vZHVsZSB7fVxuIl19