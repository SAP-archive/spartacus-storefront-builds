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
    InlineRenderStrategy.prototype.hasMatch = function (config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2lubGluZS1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR2hFO0lBQTBDLHdDQUFvQjtJQUM1RCw4QkFBc0Isd0JBQWtEO1FBQXhFLFlBQ0UsaUJBQU8sU0FDUjtRQUZxQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCOztJQUV4RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQU0sR0FBTixVQUNFLE1BQTBCLEVBQzFCLE1BQXFCLEVBQ3JCLEdBQXFCO1FBRXJCLGdEQUFnRDtRQUNoRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFDRixHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdEO2FBQU0sSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0NBQXNDLE1BQVEsQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUJBQWUsTUFBTSwwRUFBdUUsQ0FDN0YsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLE1BQTBCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFwQytDLHdCQUF3Qjs7O0lBRDdELG9CQUFvQjtRQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsb0JBQW9CLENBc0NoQzsrQkFoREQ7Q0FnREMsQUF0Q0QsQ0FBMEMsb0JBQW9CLEdBc0M3RDtTQXRDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXVuY2hJbmxpbmVEaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIElubGluZVJlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBjb25maWd1cmF0aW9uIGluIHRoZSB2aWV3IGNvbnRhaW5lciByZWZcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSB2Y3JcbiAgICovXG4gIHJlbmRlcihcbiAgICBjb25maWc6IExhdW5jaElubGluZURpYWxvZyxcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIsXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIC8vIE9ubHkgcmVuZGVyIGlmIGEgVmlld0NvbnRhaW5lclJlZiBpcyBwcm92aWRlZFxuICAgIGlmICh2Y3IgJiYgdGhpcy5zaG91bGRSZW5kZXIoY2FsbGVyLCBjb25maWcpKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb25maWcuY29tcG9uZW50XG4gICAgICApO1xuICAgICAgdmNyLmNyZWF0ZUNvbXBvbmVudCh0ZW1wbGF0ZSk7XG4gICAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycy5wdXNoKHsgY2FsbGVyLCBlbGVtZW50OiB2Y3IuZWxlbWVudCB9KTtcbiAgICB9IGVsc2UgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBpZiAoIXZjcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vIHZpZXcgY29udGFpbmVyIHJlZiBwcm92aWRlZCBmb3IgJHtjYWxsZXJ9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYEVsZW1lbnQgZm9yICR7Y2FsbGVyfSBhbHJlYWR5IHJlbmRlcmVkLiBUbyBhbGxvdyBtdWx0aSByZW5kZXJpbmcgYWRkIHByb3BlcnR5IG11bHRpOiB0cnVlLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXNNYXRjaChjb25maWc6IExhdW5jaElubGluZURpYWxvZykge1xuICAgIHJldHVybiBCb29sZWFuKGNvbmZpZy5pbmxpbmUpO1xuICB9XG59XG4iXX0=