import { __decorate, __extends } from "tslib";
import { ComponentFactoryResolver, Injectable, isDevMode, ViewContainerRef, } from '@angular/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
var InlineRenderStrategy = /** @class */ (function (_super) {
    __extends(InlineRenderStrategy, _super);
    function InlineRenderStrategy(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    InlineRenderStrategy.prototype.render = function (config, caller, vcr) {
        // Only render if a ViewContainerRef is provided
        if (vcr && this.shouldRender(caller, config)) {
            var template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            vcr.createComponent(template);
            this.renderedCallers.push({ caller: caller, element: vcr.element });
        }
        else if (isDevMode()) {
            if (!vcr) {
                console.warn("No view container ref provided for " + caller);
            }
            else {
                console.warn("Element for " + caller + " already rendered. To allow multi rendering add property multi: true.");
            }
        }
    };
    InlineRenderStrategy.prototype.match = function (config) {
        return Boolean(config.inline);
    };
    InlineRenderStrategy.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    InlineRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function InlineRenderStrategy_Factory() { return new InlineRenderStrategy(i0.ɵɵinject(i0.ComponentFactoryResolver)); }, token: InlineRenderStrategy, providedIn: "root" });
    InlineRenderStrategy = __decorate([
        Injectable({ providedIn: 'root' })
    ], InlineRenderStrategy);
    return InlineRenderStrategy;
}(LaunchRenderStrategy));
export { InlineRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvaW5saW5lLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUdoRTtJQUEwQyx3Q0FBb0I7SUFDNUQsOEJBQXNCLHdCQUFrRDtRQUF4RSxZQUNFLGlCQUFPLFNBQ1I7UUFGcUIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjs7SUFFeEUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFDQUFNLEdBQU4sVUFDRSxNQUEwQixFQUMxQixNQUFxQixFQUNyQixHQUFxQjtRQUVyQixnREFBZ0Q7UUFDaEQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUNwRSxNQUFNLENBQUMsU0FBUyxDQUNqQixDQUFDO1lBQ0YsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM3RDthQUFNLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUFzQyxNQUFRLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLGlCQUFlLE1BQU0sMEVBQXVFLENBQzdGLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELG9DQUFLLEdBQUwsVUFBTSxNQUEwQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBcEMrQyx3QkFBd0I7OztJQUQ3RCxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQXNDaEM7K0JBaEREO0NBZ0RDLEFBdENELENBQTBDLG9CQUFvQixHQXNDN0Q7U0F0Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF1bmNoSW5saW5lRGlhbG9nLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBJbmxpbmVSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbiB0aGUgdmlldyBjb250YWluZXIgcmVmXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gdmNyXG4gICAqL1xuICByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2csXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICAvLyBPbmx5IHJlbmRlciBpZiBhIFZpZXdDb250YWluZXJSZWYgaXMgcHJvdmlkZWRcbiAgICBpZiAodmNyICYmIHRoaXMuc2hvdWxkUmVuZGVyKGNhbGxlciwgY29uZmlnKSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICAgKTtcbiAgICAgIHZjci5jcmVhdGVDb21wb25lbnQodGVtcGxhdGUpO1xuICAgICAgdGhpcy5yZW5kZXJlZENhbGxlcnMucHVzaCh7IGNhbGxlciwgZWxlbWVudDogdmNyLmVsZW1lbnQgfSk7XG4gICAgfSBlbHNlIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgaWYgKCF2Y3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBObyB2aWV3IGNvbnRhaW5lciByZWYgcHJvdmlkZWQgZm9yICR7Y2FsbGVyfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFbGVtZW50IGZvciAke2NhbGxlcn0gYWxyZWFkeSByZW5kZXJlZC4gVG8gYWxsb3cgbXVsdGkgcmVuZGVyaW5nIGFkZCBwcm9wZXJ0eSBtdWx0aTogdHJ1ZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWF0Y2goY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2cpIHtcbiAgICByZXR1cm4gQm9vbGVhbihjb25maWcuaW5saW5lKTtcbiAgfVxufVxuIl19