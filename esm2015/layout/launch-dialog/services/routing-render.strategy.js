import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
export class RoutingRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, routingService) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.routingService = routingService;
    }
    /**
     * Navigates to the route configured for the caller
     */
    render(config, _caller) {
        this.routingService.go(config);
    }
    hasMatch(config) {
        return Boolean(config.cxRoute);
    }
}
RoutingRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingRenderStrategy_Factory() { return new RoutingRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.RoutingService)); }, token: RoutingRenderStrategy, providedIn: "root" });
RoutingRenderStrategy.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
RoutingRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvbGF1bmNoLWRpYWxvZy9zZXJ2aWNlcy9yb3V0aW5nLXJlbmRlci5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR2hFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFDN0QsWUFDOEIsUUFBYSxFQUMvQixlQUFpQyxFQUNqQyxjQUE4QjtRQUV4QyxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBSkwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRzFDLENBQUM7SUFDRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxNQUFtQixFQUFFLE9BQStCO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBbUI7UUFDMUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7WUFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRDQUc3QixNQUFNLFNBQUMsUUFBUTtZQVJTLGdCQUFnQjtZQUNwQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXVuY2hSb3V0ZSwgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ1JlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIHJlbmRlcmVyRmFjdG9yeSk7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgcm91dGUgY29uZmlndXJlZCBmb3IgdGhlIGNhbGxlclxuICAgKi9cbiAgcmVuZGVyKGNvbmZpZzogTGF1bmNoUm91dGUsIF9jYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKGNvbmZpZyk7XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaFJvdXRlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oY29uZmlnLmN4Um91dGUpO1xuICB9XG59XG4iXX0=