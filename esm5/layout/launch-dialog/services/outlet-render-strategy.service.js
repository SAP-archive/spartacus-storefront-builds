import { __decorate, __extends } from "tslib";
import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef, } from '@angular/core';
import { OutletPosition, OutletService, } from '../../../cms-structure/outlet/index';
import { OutletRendererService } from '../../../cms-structure/outlet/outlet-renderer.service';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-structure/outlet/outlet.service";
import * as i2 from "../../../cms-structure/outlet/outlet-renderer.service";
var OutletRenderStrategy = /** @class */ (function (_super) {
    __extends(OutletRenderStrategy, _super);
    function OutletRenderStrategy(outletService, componentFactoryResolver, outletRendererService) {
        var _this = _super.call(this) || this;
        _this.outletService = outletService;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.outletRendererService = outletRendererService;
        return _this;
    }
    /**
     * Renders the element in the configured outlet
     *
     * @param config
     * @param caller
     * @param vcr
     */
    OutletRenderStrategy.prototype.render = function (config, caller, vcr) {
        if (this.shouldRender(caller, config)) {
            var template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            this.outletService.add(config.outlet, template, config.position ? config.position : OutletPosition.BEFORE);
            this.outletRendererService.render(config.outlet);
            var element = vcr === null || vcr === void 0 ? void 0 : vcr.element;
            this.renderedCallers.push({ caller: caller, element: element });
        }
    };
    OutletRenderStrategy.prototype.match = function (config) {
        return Boolean(config.outlet);
    };
    OutletRenderStrategy.prototype.remove = function (caller, config) {
        var template = this.componentFactoryResolver.resolveComponentFactory(config.component);
        this.renderedCallers = this.renderedCallers.filter(function (el) { return el.caller === caller; });
        this.outletService.remove(config.outlet, config.position ? config.position : OutletPosition.BEFORE, template);
    };
    OutletRenderStrategy.ctorParameters = function () { return [
        { type: OutletService },
        { type: ComponentFactoryResolver },
        { type: OutletRendererService }
    ]; };
    OutletRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRenderStrategy_Factory() { return new OutletRenderStrategy(i0.ɵɵinject(i1.OutletService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.OutletRendererService)); }, token: OutletRenderStrategy, providedIn: "root" });
    OutletRenderStrategy = __decorate([
        Injectable({ providedIn: 'root' })
    ], OutletRenderStrategy);
    return OutletRenderStrategy;
}(LaunchRenderStrategy));
export { OutletRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvb3V0bGV0LXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxHQUNkLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEU7SUFBMEMsd0NBQW9CO0lBQzVELDhCQUNZLGFBQW1ELEVBQ25ELHdCQUFrRCxFQUNsRCxxQkFBNEM7UUFIeEQsWUFLRSxpQkFBTyxTQUNSO1FBTFcsbUJBQWEsR0FBYixhQUFhLENBQXNDO1FBQ25ELDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1Qjs7SUFHeEQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFDQUFNLEdBQU4sVUFDRSxNQUEwQixFQUMxQixNQUFxQixFQUNyQixHQUFzQjtRQUV0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDcEUsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixNQUFNLENBQUMsTUFBTSxFQUNiLFFBQVEsRUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUMxRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakQsSUFBTSxPQUFPLEdBQUcsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sTUFBMEI7UUFDOUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxxQ0FBTSxHQUFOLFVBQU8sTUFBcUIsRUFBRSxNQUEwQjtRQUN0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUNoRCxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFwQixDQUFvQixDQUM3QixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFDekQsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDOztnQkFwRDBCLGFBQWE7Z0JBQ0Ysd0JBQXdCO2dCQUMzQixxQkFBcUI7OztJQUo3QyxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQXVEaEM7K0JBdEVEO0NBc0VDLEFBdkRELENBQTBDLG9CQUFvQixHQXVEN0Q7U0F2RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE91dGxldFBvc2l0aW9uLFxuICBPdXRsZXRTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYXVuY2hPdXRsZXREaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxDb21wb25lbnRGYWN0b3J5PGFueT4+LFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgb3V0bGV0UmVuZGVyZXJTZXJ2aWNlOiBPdXRsZXRSZW5kZXJlclNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBlbGVtZW50IGluIHRoZSBjb25maWd1cmVkIG91dGxldFxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIHZjclxuICAgKi9cbiAgcmVuZGVyKFxuICAgIGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nLFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUixcbiAgICB2Y3I/OiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIGlmICh0aGlzLnNob3VsZFJlbmRlcihjYWxsZXIsIGNvbmZpZykpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIGNvbmZpZy5jb21wb25lbnRcbiAgICAgICk7XG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UuYWRkKFxuICAgICAgICBjb25maWcub3V0bGV0LFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgY29uZmlnLnBvc2l0aW9uID8gY29uZmlnLnBvc2l0aW9uIDogT3V0bGV0UG9zaXRpb24uQkVGT1JFXG4gICAgICApO1xuICAgICAgdGhpcy5vdXRsZXRSZW5kZXJlclNlcnZpY2UucmVuZGVyKGNvbmZpZy5vdXRsZXQpO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdmNyPy5lbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlZENhbGxlcnMucHVzaCh7IGNhbGxlciwgZWxlbWVudCB9KTtcbiAgICB9XG4gIH1cblxuICBtYXRjaChjb25maWc6IExhdW5jaE91dGxldERpYWxvZykge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5vdXRsZXQpO1xuICB9XG5cbiAgcmVtb3ZlKGNhbGxlcjogTEFVTkNIX0NBTExFUiwgY29uZmlnOiBMYXVuY2hPdXRsZXREaWFsb2cpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlZENhbGxlcnMgPSB0aGlzLnJlbmRlcmVkQ2FsbGVycy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmNhbGxlciA9PT0gY2FsbGVyXG4gICAgKTtcblxuICAgIHRoaXMub3V0bGV0U2VydmljZS5yZW1vdmUoXG4gICAgICBjb25maWcub3V0bGV0LFxuICAgICAgY29uZmlnLnBvc2l0aW9uID8gY29uZmlnLnBvc2l0aW9uIDogT3V0bGV0UG9zaXRpb24uQkVGT1JFLFxuICAgICAgdGVtcGxhdGVcbiAgICApO1xuICB9XG59XG4iXX0=