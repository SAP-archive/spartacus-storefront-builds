import { __decorate } from "tslib";
import { ComponentFactoryResolver, Injectable, isDevMode, ViewContainerRef, } from '@angular/core';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
let InlineRenderStrategy = class InlineRenderStrategy extends LaunchRenderStrategy {
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config, caller, vcr) {
        // Only render if a ViewContainerRef is provided
        if (vcr && this.shouldRender(caller, config)) {
            const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            vcr.createComponent(template);
            this.renderedCallers.push({ caller, element: vcr.element });
        }
        else if (isDevMode()) {
            if (!vcr) {
                console.warn(`No view container ref provided for ${caller}`);
            }
            else {
                console.warn(`Element for ${caller} already rendered. To allow multi rendering add property multi: true.`);
            }
        }
    }
    match(config) {
        return Boolean(config.inline);
    }
};
InlineRenderStrategy.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
InlineRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function InlineRenderStrategy_Factory() { return new InlineRenderStrategy(i0.ɵɵinject(i0.ComponentFactoryResolver)); }, token: InlineRenderStrategy, providedIn: "root" });
InlineRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' })
], InlineRenderStrategy);
export { InlineRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvaW5saW5lLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUdoRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLG9CQUFvQjtJQUM1RCxZQUFzQix3QkFBa0Q7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEWSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXhFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQ0osTUFBMEIsRUFDMUIsTUFBcUIsRUFDckIsR0FBcUI7UUFFckIsZ0RBQWdEO1FBQ2hELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDcEUsTUFBTSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztZQUNGLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO2FBQU0sSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FDVixlQUFlLE1BQU0sdUVBQXVFLENBQzdGLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUEwQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7O1lBckNpRCx3QkFBd0I7OztBQUQ3RCxvQkFBb0I7SUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLG9CQUFvQixDQXNDaEM7U0F0Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF1bmNoSW5saW5lRGlhbG9nLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBJbmxpbmVSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbiB0aGUgdmlldyBjb250YWluZXIgcmVmXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gdmNyXG4gICAqL1xuICByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2csXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICAvLyBPbmx5IHJlbmRlciBpZiBhIFZpZXdDb250YWluZXJSZWYgaXMgcHJvdmlkZWRcbiAgICBpZiAodmNyICYmIHRoaXMuc2hvdWxkUmVuZGVyKGNhbGxlciwgY29uZmlnKSkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudFxuICAgICAgKTtcbiAgICAgIHZjci5jcmVhdGVDb21wb25lbnQodGVtcGxhdGUpO1xuICAgICAgdGhpcy5yZW5kZXJlZENhbGxlcnMucHVzaCh7IGNhbGxlciwgZWxlbWVudDogdmNyLmVsZW1lbnQgfSk7XG4gICAgfSBlbHNlIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgaWYgKCF2Y3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBObyB2aWV3IGNvbnRhaW5lciByZWYgcHJvdmlkZWQgZm9yICR7Y2FsbGVyfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFbGVtZW50IGZvciAke2NhbGxlcn0gYWxyZWFkeSByZW5kZXJlZC4gVG8gYWxsb3cgbXVsdGkgcmVuZGVyaW5nIGFkZCBwcm9wZXJ0eSBtdWx0aTogdHJ1ZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWF0Y2goY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2cpIHtcbiAgICByZXR1cm4gQm9vbGVhbihjb25maWcuaW5saW5lKTtcbiAgfVxufVxuIl19