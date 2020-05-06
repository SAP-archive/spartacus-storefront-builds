import { __decorate, __extends, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, isDevMode, RendererFactory2, ViewContainerRef, } from '@angular/core';
import { of } from 'rxjs';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var InlineRenderStrategy = /** @class */ (function (_super) {
    __extends(InlineRenderStrategy, _super);
    function InlineRenderStrategy(document, rendererFactory, componentFactoryResolver) {
        var _this = _super.call(this, document, rendererFactory) || this;
        _this.document = document;
        _this.rendererFactory = rendererFactory;
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
            var component = vcr.createComponent(template);
            if (config === null || config === void 0 ? void 0 : config.dialogType) {
                this.applyClasses(component, config === null || config === void 0 ? void 0 : config.dialogType);
            }
            this.renderedCallers.push({ caller: caller, element: vcr.element, component: component });
            return of(component);
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
    InlineRenderStrategy.prototype.hasMatch = function (config) {
        return Boolean(config.inline);
    };
    InlineRenderStrategy.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: RendererFactory2 },
        { type: ComponentFactoryResolver }
    ]; };
    InlineRenderStrategy.ɵprov = i0.ɵɵdefineInjectable({ factory: function InlineRenderStrategy_Factory() { return new InlineRenderStrategy(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.ComponentFactoryResolver)); }, token: InlineRenderStrategy, providedIn: "root" });
    InlineRenderStrategy = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(DOCUMENT))
    ], InlineRenderStrategy);
    return InlineRenderStrategy;
}(LaunchRenderStrategy));
export { InlineRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2lubGluZS1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUdoRTtJQUEwQyx3Q0FBb0I7SUFDNUQsOEJBQzhCLFFBQWEsRUFDL0IsZUFBaUMsRUFDakMsd0JBQWtEO1FBSDlELFlBS0Usa0JBQU0sUUFBUSxFQUFFLGVBQWUsQ0FBQyxTQUNqQztRQUw2QixjQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLHFCQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCOztJQUc5RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQU0sR0FBTixVQUNFLE1BQTBCLEVBQzFCLE1BQThCLEVBQzlCLEdBQXFCO1FBRXJCLGdEQUFnRDtRQUNoRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFFRixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7WUFFdkUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEI7YUFBTSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyx3Q0FBc0MsTUFBUSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FDVixpQkFBZSxNQUFNLDBFQUF1RSxDQUM3RixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsTUFBMEI7UUFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dEQS9DRSxNQUFNLFNBQUMsUUFBUTtnQkFDVyxnQkFBZ0I7Z0JBQ1Asd0JBQXdCOzs7SUFKbkQsb0JBQW9CO1FBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUc5QixXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQUZSLG9CQUFvQixDQWtEaEM7K0JBakVEO0NBaUVDLEFBbERELENBQTBDLG9CQUFvQixHQWtEN0Q7U0FsRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXVuY2hJbmxpbmVEaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIElubGluZVJlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHtcbiAgICBzdXBlcihkb2N1bWVudCwgcmVuZGVyZXJGYWN0b3J5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbiB0aGUgdmlldyBjb250YWluZXIgcmVmXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gdmNyXG4gICAqL1xuICByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2csXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApOiBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PiB7XG4gICAgLy8gT25seSByZW5kZXIgaWYgYSBWaWV3Q29udGFpbmVyUmVmIGlzIHByb3ZpZGVkXG4gICAgaWYgKHZjciAmJiB0aGlzLnNob3VsZFJlbmRlcihjYWxsZXIsIGNvbmZpZykpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICAgIGNvbmZpZy5jb21wb25lbnRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHZjci5jcmVhdGVDb21wb25lbnQodGVtcGxhdGUpO1xuXG4gICAgICBpZiAoY29uZmlnPy5kaWFsb2dUeXBlKSB7XG4gICAgICAgIHRoaXMuYXBwbHlDbGFzc2VzKGNvbXBvbmVudCwgY29uZmlnPy5kaWFsb2dUeXBlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJlZENhbGxlcnMucHVzaCh7IGNhbGxlciwgZWxlbWVudDogdmNyLmVsZW1lbnQsIGNvbXBvbmVudCB9KTtcblxuICAgICAgcmV0dXJuIG9mKGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgaWYgKCF2Y3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBObyB2aWV3IGNvbnRhaW5lciByZWYgcHJvdmlkZWQgZm9yICR7Y2FsbGVyfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFbGVtZW50IGZvciAke2NhbGxlcn0gYWxyZWFkeSByZW5kZXJlZC4gVG8gYWxsb3cgbXVsdGkgcmVuZGVyaW5nIGFkZCBwcm9wZXJ0eSBtdWx0aTogdHJ1ZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzTWF0Y2goY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2cpIHtcbiAgICByZXR1cm4gQm9vbGVhbihjb25maWcuaW5saW5lKTtcbiAgfVxufVxuIl19