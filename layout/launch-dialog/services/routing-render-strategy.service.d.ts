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
    match(config: LaunchRoute): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXItc3RyYXRlZ3kuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJyb3V0aW5nLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXVuY2hSb3V0ZSwgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0aW5nUmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0byB0aGUgcm91dGUgY29uZmlndXJlZCBmb3IgdGhlIGNhbGxlclxuICAgICAqL1xuICAgIHJlbmRlcihjb25maWc6IExhdW5jaFJvdXRlLCBfY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSKTogdm9pZDtcbiAgICBtYXRjaChjb25maWc6IExhdW5jaFJvdXRlKTogYm9vbGVhbjtcbn1cbiJdfQ==