import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var RoutingRenderStrategy = /** @class */ (function (_super) {
    __extends(RoutingRenderStrategy, _super);
    function RoutingRenderStrategy(routingService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        return _this;
    }
    /**
     * Navigates to the route configured for the caller
     */
    RoutingRenderStrategy.prototype.render = function (config, _caller) {
        this.routingService.go(config);
    };
    RoutingRenderStrategy.prototype.match = function (config) {
        return Boolean(config.cxRoute);
    };
    RoutingRenderStrategy.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    RoutingRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingRenderStrategy_Factory() { return new RoutingRenderStrategy(i0.ɵɵinject(i1.RoutingService)); }, token: RoutingRenderStrategy, providedIn: "root" });
    RoutingRenderStrategy = __decorate([
        Injectable({ providedIn: 'root' })
    ], RoutingRenderStrategy);
    return RoutingRenderStrategy;
}(LaunchRenderStrategy));
export { RoutingRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXItc3RyYXRlZ3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL3JvdXRpbmctcmVuZGVyLXN0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFHaEU7SUFBMkMseUNBQW9CO0lBQzdELCtCQUFzQixjQUE4QjtRQUFwRCxZQUNFLGlCQUFPLFNBQ1I7UUFGcUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCOztJQUVwRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxzQ0FBTSxHQUFOLFVBQU8sTUFBbUIsRUFBRSxPQUFzQjtRQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLE1BQW1CO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFacUMsY0FBYzs7O0lBRHpDLHFCQUFxQjtRQURqQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIscUJBQXFCLENBY2pDO2dDQXBCRDtDQW9CQyxBQWRELENBQTJDLG9CQUFvQixHQWM5RDtTQWRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaFJvdXRlLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nUmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHJvdXRlIGNvbmZpZ3VyZWQgZm9yIHRoZSBjYWxsZXJcbiAgICovXG4gIHJlbmRlcihjb25maWc6IExhdW5jaFJvdXRlLCBfY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSKSB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyhjb25maWcpO1xuICB9XG5cbiAgbWF0Y2goY29uZmlnOiBMYXVuY2hSb3V0ZSkge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5jeFJvdXRlKTtcbiAgfVxufVxuIl19