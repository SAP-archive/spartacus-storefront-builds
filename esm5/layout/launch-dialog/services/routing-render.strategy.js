import { __decorate, __extends, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
var RoutingRenderStrategy = /** @class */ (function (_super) {
    __extends(RoutingRenderStrategy, _super);
    function RoutingRenderStrategy(document, rendererFactory, routingService) {
        var _this = _super.call(this, document, rendererFactory) || this;
        _this.document = document;
        _this.rendererFactory = rendererFactory;
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
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: RendererFactory2 },
        { type: RoutingService }
    ]; };
    RoutingRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingRenderStrategy_Factory() { return new RoutingRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.RoutingService)); }, token: RoutingRenderStrategy, providedIn: "root" });
    RoutingRenderStrategy = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(DOCUMENT))
    ], RoutingRenderStrategy);
    return RoutingRenderStrategy;
}(LaunchRenderStrategy));
export { RoutingRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1yZW5kZXIuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbGF1bmNoLWRpYWxvZy9zZXJ2aWNlcy9yb3V0aW5nLXJlbmRlci5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRTtJQUEyQyx5Q0FBb0I7SUFDN0QsK0JBQzhCLFFBQWEsRUFDL0IsZUFBaUMsRUFDakMsY0FBOEI7UUFIMUMsWUFLRSxrQkFBTSxRQUFRLEVBQUUsZUFBZSxDQUFDLFNBQ2pDO1FBTDZCLGNBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IscUJBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFHMUMsQ0FBQztJQUNEOztPQUVHO0lBQ0gsc0NBQU0sR0FBTixVQUFPLE1BQW1CLEVBQUUsT0FBK0I7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxNQUFtQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0RBZkUsTUFBTSxTQUFDLFFBQVE7Z0JBQ1csZ0JBQWdCO2dCQUNqQixjQUFjOzs7SUFKL0IscUJBQXFCO1FBRGpDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUc5QixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQUZSLHFCQUFxQixDQWtCakM7Z0NBekJEO0NBeUJDLEFBbEJELENBQTJDLG9CQUFvQixHQWtCOUQ7U0FsQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMYXVuY2hSb3V0ZSwgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUm91dGluZ1JlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIHJlbmRlcmVyRmFjdG9yeSk7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgcm91dGUgY29uZmlndXJlZCBmb3IgdGhlIGNhbGxlclxuICAgKi9cbiAgcmVuZGVyKGNvbmZpZzogTGF1bmNoUm91dGUsIF9jYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKGNvbmZpZyk7XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaFJvdXRlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oY29uZmlnLmN4Um91dGUpO1xuICB9XG59XG4iXX0=