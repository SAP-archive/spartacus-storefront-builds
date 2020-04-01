import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { LaunchConfig, LaunchOptions, LAUNCH_CALLER, } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "./launch-render.strategy";
import * as i2 from "../config/launch-config";
var LaunchDialogService = /** @class */ (function () {
    function LaunchDialogService(renderStrategies, launchConfig) {
        this.renderStrategies = renderStrategies;
        this.launchConfig = launchConfig;
        // Keep a list of rendered elements
        this.renderedCallers = [];
        this.renderStrategies = this.renderStrategies || [];
    }
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    LaunchDialogService.prototype.launch = function (caller, vcr) {
        var config = this.findConfiguration(caller);
        var renderer = this.getStrategy(config);
        // Render if the strategy exists
        if (renderer) {
            renderer.render(config, caller, vcr);
        }
    };
    /**
     * Util method to remove element from rendered elements list
     *
     * @param caller LAUNCH_CALLER
     */
    LaunchDialogService.prototype.clear = function (caller) {
        var config = this.findConfiguration(caller);
        var renderer = this.getStrategy(config);
        // Render if the strategy exists
        if (renderer) {
            renderer.remove(caller, config);
        }
    };
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    LaunchDialogService.prototype.findConfiguration = function (caller) {
        var _a;
        return (_a = this.launchConfig) === null || _a === void 0 ? void 0 : _a.launch[caller];
    };
    /**
     * Returns the render strategy based on the configuration
     *
     * @param config Configuration for launch
     */
    LaunchDialogService.prototype.getStrategy = function (config) {
        return this.renderStrategies.find(function (strategy) { return strategy.match(config); });
    };
    LaunchDialogService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [LaunchRenderStrategy,] }] },
        { type: LaunchConfig }
    ]; };
    LaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(i0.ɵɵinject(i1.LaunchRenderStrategy), i0.ɵɵinject(i2.LaunchConfig)); }, token: LaunchDialogService, providedIn: "root" });
    LaunchDialogService = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(LaunchRenderStrategy))
    ], LaunchDialogService);
    return LaunchDialogService;
}());
export { LaunchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxHQUNkLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEU7SUFJRSw2QkFFWSxnQkFBd0MsRUFDeEMsWUFBMEI7UUFEMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU50QyxtQ0FBbUM7UUFDekIsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBTzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFNLEdBQU4sVUFBTyxNQUFxQixFQUFFLEdBQXNCO1FBQ2xELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQUssR0FBTCxVQUFNLE1BQXFCO1FBQ3pCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQ0FBaUIsR0FBM0IsVUFBNEIsTUFBcUI7O1FBQy9DLGFBQU8sSUFBSSxDQUFDLFlBQVksMENBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHlDQUFXLEdBQXJCLFVBQXNCLE1BQXFCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs0Q0F0REUsTUFBTSxTQUFDLG9CQUFvQjtnQkFFSixZQUFZOzs7SUFQM0IsbUJBQW1CO1FBRC9CLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQU05QixXQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO09BTHBCLG1CQUFtQixDQTREL0I7OEJBckVEO0NBcUVDLEFBNURELElBNERDO1NBNURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTGF1bmNoQ29uZmlnLFxuICBMYXVuY2hPcHRpb25zLFxuICBMQVVOQ0hfQ0FMTEVSLFxufSBmcm9tICcuLi9jb25maWcvbGF1bmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGF1bmNoRGlhbG9nU2VydmljZSB7XG4gIC8vIEtlZXAgYSBsaXN0IG9mIHJlbmRlcmVkIGVsZW1lbnRzXG4gIHByb3RlY3RlZCByZW5kZXJlZENhbGxlcnM6IExBVU5DSF9DQUxMRVJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTGF1bmNoUmVuZGVyU3RyYXRlZ3kpXG4gICAgcHJvdGVjdGVkIHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W10sXG4gICAgcHJvdGVjdGVkIGxhdW5jaENvbmZpZzogTGF1bmNoQ29uZmlnXG4gICkge1xuICAgIHRoaXMucmVuZGVyU3RyYXRlZ2llcyA9IHRoaXMucmVuZGVyU3RyYXRlZ2llcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5IGZyb20gdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKiBAcGFyYW0gdmNyIFZpZXcgQ29udGFpbmVyIFJlZiBvZiB0aGUgY29udGFpbmVyIGZvciBpbmxpbmUgcmVuZGVyaW5nXG4gICAqL1xuICBsYXVuY2goY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLCB2Y3I/OiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5maW5kQ29uZmlndXJhdGlvbihjYWxsZXIpO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRTdHJhdGVneShjb25maWcpO1xuXG4gICAgLy8gUmVuZGVyIGlmIHRoZSBzdHJhdGVneSBleGlzdHNcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihjb25maWcsIGNhbGxlciwgdmNyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbCBtZXRob2QgdG8gcmVtb3ZlIGVsZW1lbnQgZnJvbSByZW5kZXJlZCBlbGVtZW50cyBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKi9cbiAgY2xlYXIoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5maW5kQ29uZmlndXJhdGlvbihjYWxsZXIpO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRTdHJhdGVneShjb25maWcpO1xuXG4gICAgLy8gUmVuZGVyIGlmIHRoZSBzdHJhdGVneSBleGlzdHNcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZShjYWxsZXIsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBjYWxsZXJcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqL1xuICBwcm90ZWN0ZWQgZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSKTogTGF1bmNoT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMubGF1bmNoQ29uZmlnPy5sYXVuY2hbY2FsbGVyXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW5kZXIgc3RyYXRlZ3kgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIGZvciBsYXVuY2hcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTdHJhdGVneShjb25maWc6IExhdW5jaE9wdGlvbnMpOiBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU3RyYXRlZ2llcy5maW5kKChzdHJhdGVneSkgPT4gc3RyYXRlZ3kubWF0Y2goY29uZmlnKSk7XG4gIH1cbn1cbiJdfQ==