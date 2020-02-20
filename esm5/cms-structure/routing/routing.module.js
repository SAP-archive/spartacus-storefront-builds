import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig, RoutingModule as CoreRoutingModule, } from '@spartacus/core';
import { CmsRouteModule } from './cms-route/cms-route.module';
import { defaultRoutingConfig } from './default-routing-config';
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule_1 = RoutingModule;
    RoutingModule.forRoot = function () {
        return {
            ngModule: RoutingModule_1,
            providers: [provideConfig(defaultRoutingConfig)],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxhQUFhLEVBQ2IsYUFBYSxJQUFJLGlCQUFpQixHQUNuQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUtoRTtJQUFBO0lBT0EsQ0FBQztzQkFQWSxhQUFhO0lBQ2pCLHFCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWE7WUFDdkIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDakQsQ0FBQztJQUNKLENBQUM7O0lBTlUsYUFBYTtRQUh6QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLENBQUM7U0FDdkQsQ0FBQztPQUNXLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgcHJvdmlkZUNvbmZpZyxcbiAgUm91dGluZ01vZHVsZSBhcyBDb3JlUm91dGluZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1JvdXRlTW9kdWxlIH0gZnJvbSAnLi9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0Um91dGluZ0NvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1yb3V0aW5nLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb3JlUm91dGluZ01vZHVsZS5mb3JSb290KCksIENtc1JvdXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGluZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUm91dGluZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoZGVmYXVsdFJvdXRpbmdDb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=