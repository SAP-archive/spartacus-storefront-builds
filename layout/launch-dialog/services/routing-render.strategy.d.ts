import { RendererFactory2 } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { LaunchRoute, LAUNCH_CALLER } from '../config/index';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingRenderStrategy extends LaunchRenderStrategy {
    protected document: any;
    protected rendererFactory: RendererFactory2;
    protected routingService: RoutingService;
    constructor(document: any, rendererFactory: RendererFactory2, routingService: RoutingService);
    /**
     * Navigates to the route configured for the caller
     */
    render(config: LaunchRoute, _caller: LAUNCH_CALLER | string): void;
    hasMatch(config: LaunchRoute): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuZC50cyIsInNvdXJjZXMiOlsicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaFJvdXRlLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRpbmdSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSwgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgcm91dGUgY29uZmlndXJlZCBmb3IgdGhlIGNhbGxlclxuICAgICAqL1xuICAgIHJlbmRlcihjb25maWc6IExhdW5jaFJvdXRlLCBfY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nKTogdm9pZDtcbiAgICBoYXNNYXRjaChjb25maWc6IExhdW5jaFJvdXRlKTogYm9vbGVhbjtcbn1cbiJdfQ==