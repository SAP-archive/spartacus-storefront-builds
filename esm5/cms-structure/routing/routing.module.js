import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig, RoutingModule as CoreRoutingModule, } from '@spartacus/core';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { defaultRoutingConfig } from './default-routing-config';
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule_1 = RoutingModule;
    RoutingModule.forRoot = function () {
        return {
            ngModule: RoutingModule_1,
            providers: [provideDefaultConfig(defaultRoutingConfig)],
        };
    };
    var RoutingModule_1;
    RoutingModule = RoutingModule_1 = __decorate([
        NgModule({
            imports: [CoreRoutingModule.forRoot(), CmsRouteModule],
        })
    ], RoutingModule);
    return RoutingModule;
}());
export { RoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsYUFBYSxJQUFJLGlCQUFpQixHQUNuQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUtoRTtJQUFBO0lBT0EsQ0FBQztzQkFQWSxhQUFhO0lBQ2pCLHFCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxhQUFhO1FBSHpCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQztTQUN2RCxDQUFDO09BQ1csYUFBYSxDQU96QjtJQUFELG9CQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgUm91dGluZ01vZHVsZSBhcyBDb3JlUm91dGluZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0Um91dGluZ0NvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1yb3V0aW5nLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb3JlUm91dGluZ01vZHVsZS5mb3JSb290KCksIENtc1JvdXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGluZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUm91dGluZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRSb3V0aW5nQ29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19