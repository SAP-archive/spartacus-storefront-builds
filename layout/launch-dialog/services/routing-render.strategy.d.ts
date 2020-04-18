import { RoutingService } from '@spartacus/core';
import { LaunchRoute, LAUNCH_CALLER } from '../config/index';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingRenderStrategy extends LaunchRenderStrategy {
    protected routingService: RoutingService;
    constructor(routingService: RoutingService);
    /**
     * Navigates to the route configured for the caller
     */
    render(config: LaunchRoute, _caller: LAUNCH_CALLER): void;
    hasMatch(config: LaunchRoute): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuZC50cyIsInNvdXJjZXMiOlsicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaFJvdXRlLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRpbmdSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGVzIHRvIHRoZSByb3V0ZSBjb25maWd1cmVkIGZvciB0aGUgY2FsbGVyXG4gICAgICovXG4gICAgcmVuZGVyKGNvbmZpZzogTGF1bmNoUm91dGUsIF9jYWxsZXI6IExBVU5DSF9DQUxMRVIpOiB2b2lkO1xuICAgIGhhc01hdGNoKGNvbmZpZzogTGF1bmNoUm91dGUpOiBib29sZWFuO1xufVxuIl19