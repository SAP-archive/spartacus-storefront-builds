import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { LAUNCH_CALLER, LaunchConfig, LaunchOptions, } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import { resolveHandler } from '@spartacus/core';
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
        return resolveHandler(this.renderStrategies, [config]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxHQUNkLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR2pEO0lBSUUsNkJBRVksZ0JBQXdDLEVBQ3hDLFlBQTBCO1FBRDFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOdEMsbUNBQW1DO1FBQ3pCLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQU85QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxvQ0FBTSxHQUFOLFVBQU8sTUFBcUIsRUFBRSxHQUFzQjtRQUNsRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxnQ0FBZ0M7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFLLEdBQUwsVUFBTSxNQUFxQjtRQUN6QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxnQ0FBZ0M7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ08sK0NBQWlCLEdBQTNCLFVBQTRCLE1BQXFCOztRQUMvQyxhQUFPLElBQUksQ0FBQyxZQUFZLDBDQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyx5Q0FBVyxHQUFyQixVQUFzQixNQUFxQjtRQUN6QyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OzRDQXRERSxNQUFNLFNBQUMsb0JBQW9CO2dCQUVKLFlBQVk7OztJQVAzQixtQkFBbUI7UUFEL0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBTTlCLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7T0FMcEIsbUJBQW1CLENBNEQvQjs4QkF0RUQ7Q0FzRUMsQUE1REQsSUE0REM7U0E1RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMQVVOQ0hfQ0FMTEVSLFxuICBMYXVuY2hDb25maWcsXG4gIExhdW5jaE9wdGlvbnMsXG59IGZyb20gJy4uL2NvbmZpZy9sYXVuY2gtY29uZmlnJztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcbmltcG9ydCB7IHJlc29sdmVIYW5kbGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYXVuY2hEaWFsb2dTZXJ2aWNlIHtcbiAgLy8gS2VlcCBhIGxpc3Qgb2YgcmVuZGVyZWQgZWxlbWVudHNcbiAgcHJvdGVjdGVkIHJlbmRlcmVkQ2FsbGVyczogTEFVTkNIX0NBTExFUltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMYXVuY2hSZW5kZXJTdHJhdGVneSlcbiAgICBwcm90ZWN0ZWQgcmVuZGVyU3RyYXRlZ2llczogTGF1bmNoUmVuZGVyU3RyYXRlZ3lbXSxcbiAgICBwcm90ZWN0ZWQgbGF1bmNoQ29uZmlnOiBMYXVuY2hDb25maWdcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJTdHJhdGVnaWVzID0gdGhpcy5yZW5kZXJTdHJhdGVnaWVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgc3RyYXRlZ3kgZnJvbSB0aGUgbGF1bmNoIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqIEBwYXJhbSB2Y3IgVmlldyBDb250YWluZXIgUmVmIG9mIHRoZSBjb250YWluZXIgZm9yIGlubGluZSByZW5kZXJpbmdcbiAgICovXG4gIGxhdW5jaChjYWxsZXI6IExBVU5DSF9DQUxMRVIsIHZjcj86IFZpZXdDb250YWluZXJSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAvLyBSZW5kZXIgaWYgdGhlIHN0cmF0ZWd5IGV4aXN0c1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIucmVuZGVyKGNvbmZpZywgY2FsbGVyLCB2Y3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsIG1ldGhvZCB0byByZW1vdmUgZWxlbWVudCBmcm9tIHJlbmRlcmVkIGVsZW1lbnRzIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqL1xuICBjbGVhcihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAvLyBSZW5kZXIgaWYgdGhlIHN0cmF0ZWd5IGV4aXN0c1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlKGNhbGxlciwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNhbGxlclxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICovXG4gIHByb3RlY3RlZCBmaW5kQ29uZmlndXJhdGlvbihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiBMYXVuY2hPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5sYXVuY2hDb25maWc/LmxhdW5jaFtjYWxsZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlciBzdHJhdGVneSBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIGxhdW5jaFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFN0cmF0ZWd5KGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICByZXR1cm4gcmVzb2x2ZUhhbmRsZXIodGhpcy5yZW5kZXJTdHJhdGVnaWVzLCBbY29uZmlnXSk7XG4gIH1cbn1cbiJdfQ==