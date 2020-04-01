import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let RoutingRenderStrategy = class RoutingRenderStrategy extends LaunchRenderStrategy {
    constructor(routingService) {
        super();
        this.routingService = routingService;
    }
    /**
     * Navigates to the route configured for the caller
     */
    render(config, _caller) {
        this.routingService.go(config);
    }
    match(config) {
        return Boolean(config.cxRoute);
    }
};
RoutingRenderStrategy.ctorParameters = () => [
    { type: RoutingService }
];
RoutingRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingRenderStrategy_Factory() { return new RoutingRenderStrategy(i0.ɵɵinject(i1.RoutingService)); }, token: RoutingRenderStrategy, providedIn: "root" });
RoutingRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' })
], RoutingRenderStrategy);
export { RoutingRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXItc3RyYXRlZ3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL3JvdXRpbmctcmVuZGVyLXN0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFHaEUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxvQkFBb0I7SUFDN0QsWUFBc0IsY0FBOEI7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEWSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFcEQsQ0FBQztJQUNEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE1BQW1CLEVBQUUsT0FBc0I7UUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFtQjtRQUN2QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7O1lBYnVDLGNBQWM7OztBQUR6QyxxQkFBcUI7SUFEakMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHFCQUFxQixDQWNqQztTQWRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaFJvdXRlLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nUmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHJvdXRlIGNvbmZpZ3VyZWQgZm9yIHRoZSBjYWxsZXJcbiAgICovXG4gIHJlbmRlcihjb25maWc6IExhdW5jaFJvdXRlLCBfY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSKSB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhjb25maWcpO1xuICB9XG5cbiAgbWF0Y2goY29uZmlnOiBMYXVuY2hSb3V0ZSkge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5jeFJvdXRlKTtcbiAgfVxufVxuIl19