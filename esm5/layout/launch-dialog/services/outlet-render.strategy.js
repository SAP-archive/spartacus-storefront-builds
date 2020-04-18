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
    OutletRenderStrategy.prototype.hasMatch = function (config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL291dGxldC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGNBQWMsRUFDZCxhQUFhLEdBQ2QsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRTtJQUEwQyx3Q0FBb0I7SUFDNUQsOEJBQ1ksYUFBbUQsRUFDbkQsd0JBQWtELEVBQ2xELHFCQUE0QztRQUh4RCxZQUtFLGlCQUFPLFNBQ1I7UUFMVyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0M7UUFDbkQsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCOztJQUd4RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQU0sR0FBTixVQUNFLE1BQTBCLEVBQzFCLE1BQXFCLEVBQ3JCLEdBQXNCO1FBRXRCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNwRSxNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsUUFBUSxFQUNSLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQzFELENBQUM7WUFDRixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRCxJQUFNLE9BQU8sR0FBRyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELHVDQUFRLEdBQVIsVUFBUyxNQUEwQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxNQUFxQixFQUFFLE1BQTBCO1FBQ3RELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDcEUsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ2hELFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQXBCLENBQW9CLENBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDdkIsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUN6RCxRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7O2dCQXBEMEIsYUFBYTtnQkFDRix3QkFBd0I7Z0JBQzNCLHFCQUFxQjs7O0lBSjdDLG9CQUFvQjtRQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsb0JBQW9CLENBdURoQzsrQkF0RUQ7Q0FzRUMsQUF2REQsQ0FBMEMsb0JBQW9CLEdBdUQ3RDtTQXZEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3V0bGV0UG9zaXRpb24sXG4gIE91dGxldFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IE91dGxldFJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZW5kZXJlci5zZXJ2aWNlJztcbmltcG9ydCB7IExhdW5jaE91dGxldERpYWxvZywgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj4sXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBvdXRsZXRSZW5kZXJlclNlcnZpY2U6IE91dGxldFJlbmRlcmVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGVsZW1lbnQgaW4gdGhlIGNvbmZpZ3VyZWQgb3V0bGV0XG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gdmNyXG4gICAqL1xuICByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hPdXRsZXREaWFsb2csXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyKGNhbGxlciwgY29uZmlnKSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICAgKTtcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQoXG4gICAgICAgIGNvbmZpZy5vdXRsZXQsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBjb25maWcucG9zaXRpb24gPyBjb25maWcucG9zaXRpb24gOiBPdXRsZXRQb3NpdGlvbi5CRUZPUkVcbiAgICAgICk7XG4gICAgICB0aGlzLm91dGxldFJlbmRlcmVyU2VydmljZS5yZW5kZXIoY29uZmlnLm91dGxldCk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB2Y3I/LmVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycy5wdXNoKHsgY2FsbGVyLCBlbGVtZW50IH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhc01hdGNoKGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oY29uZmlnLm91dGxldCk7XG4gIH1cblxuICByZW1vdmUoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLCBjb25maWc6IExhdW5jaE91dGxldERpYWxvZyk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb25maWcuY29tcG9uZW50XG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycyA9IHRoaXMucmVuZGVyZWRDYWxsZXJzLmZpbHRlcihcbiAgICAgIChlbCkgPT4gZWwuY2FsbGVyID09PSBjYWxsZXJcbiAgICApO1xuXG4gICAgdGhpcy5vdXRsZXRTZXJ2aWNlLnJlbW92ZShcbiAgICAgIGNvbmZpZy5vdXRsZXQsXG4gICAgICBjb25maWcucG9zaXRpb24gPyBjb25maWcucG9zaXRpb24gOiBPdXRsZXRQb3NpdGlvbi5CRUZPUkUsXG4gICAgICB0ZW1wbGF0ZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==