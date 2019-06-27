/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { provideConfig, RoutingModule as CoreRoutingModule, } from '@spartacus/core';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { defaultRoutingConfig } from './default-routing-config';
export class RoutingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RoutingModule,
            providers: [provideConfig(defaultRoutingConfig)],
        };
    }
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreRoutingModule.forRoot(), CmsRouteModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxJQUFJLGlCQUFpQixHQUNuQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUtoRSxNQUFNLE9BQU8sYUFBYTs7OztJQUN4QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7O1lBVEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQzthQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBwcm92aWRlQ29uZmlnLFxuICBSb3V0aW5nTW9kdWxlIGFzIENvcmVSb3V0aW5nTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUm91dGVNb2R1bGUgfSBmcm9tICcuL2Ntcy1yb3V0ZS9jbXMtcm91dGUubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRSb3V0aW5nQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LXJvdXRpbmctY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvcmVSb3V0aW5nTW9kdWxlLmZvclJvb3QoKSwgQ21zUm91dGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb3V0aW5nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSb3V0aW5nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhkZWZhdWx0Um91dGluZ0NvbmZpZyldLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==