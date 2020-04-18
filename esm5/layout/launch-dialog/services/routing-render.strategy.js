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
    RoutingRenderStrategy.prototype.hasMatch = function (config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9zZXJ2aWNlcy9yb3V0aW5nLXJlbmRlci5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUdoRTtJQUEyQyx5Q0FBb0I7SUFDN0QsK0JBQXNCLGNBQThCO1FBQXBELFlBQ0UsaUJBQU8sU0FDUjtRQUZxQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBRXBELENBQUM7SUFDRDs7T0FFRztJQUNILHNDQUFNLEdBQU4sVUFBTyxNQUFtQixFQUFFLE9BQXNCO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsTUFBbUI7UUFDMUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQVpxQyxjQUFjOzs7SUFEekMscUJBQXFCO1FBRGpDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixxQkFBcUIsQ0FjakM7Z0NBcEJEO0NBb0JDLEFBZEQsQ0FBMkMsb0JBQW9CLEdBYzlEO1NBZFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTGF1bmNoUm91dGUsIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgcm91dGUgY29uZmlndXJlZCBmb3IgdGhlIGNhbGxlclxuICAgKi9cbiAgcmVuZGVyKGNvbmZpZzogTGF1bmNoUm91dGUsIF9jYWxsZXI6IExBVU5DSF9DQUxMRVIpIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKGNvbmZpZyk7XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaFJvdXRlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oY29uZmlnLmN4Um91dGUpO1xuICB9XG59XG4iXX0=