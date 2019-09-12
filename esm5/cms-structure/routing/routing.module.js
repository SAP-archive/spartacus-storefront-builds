/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { provideConfig, RoutingModule as CoreRoutingModule, } from '@spartacus/core';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { defaultRoutingConfig } from './default-routing-config';
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    /**
     * @return {?}
     */
    RoutingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RoutingModule,
            providers: [provideConfig(defaultRoutingConfig)],
        };
    };
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CoreRoutingModule.forRoot(), CmsRouteModule],
                },] }
    ];
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxJQUFJLGlCQUFpQixHQUNuQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBVUEsQ0FBQzs7OztJQU5RLHFCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBVEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQztpQkFDdkQ7O0lBUUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHByb3ZpZGVDb25maWcsXG4gIFJvdXRpbmdNb2R1bGUgYXMgQ29yZVJvdXRpbmdNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZU1vZHVsZSB9IGZyb20gJy4vY21zLXJvdXRlL2Ntcy1yb3V0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFJvdXRpbmdDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtcm91dGluZy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29yZVJvdXRpbmdNb2R1bGUuZm9yUm9vdCgpLCBDbXNSb3V0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJvdXRpbmdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19