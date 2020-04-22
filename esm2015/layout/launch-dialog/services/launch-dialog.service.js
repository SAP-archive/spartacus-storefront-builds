import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { LAUNCH_CALLER, LaunchConfig, LaunchOptions, } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import { resolveApplicable } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "./launch-render.strategy";
import * as i2 from "../config/launch-config";
let LaunchDialogService = class LaunchDialogService {
    constructor(renderStrategies, launchConfig) {
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
    launch(caller, vcr) {
        const config = this.findConfiguration(caller);
        const renderer = this.getStrategy(config);
        // Render if the strategy exists
        if (renderer) {
            renderer.render(config, caller, vcr);
        }
    }
    /**
     * Util method to remove element from rendered elements list
     *
     * @param caller LAUNCH_CALLER
     */
    clear(caller) {
        const config = this.findConfiguration(caller);
        const renderer = this.getStrategy(config);
        // Render if the strategy exists
        if (renderer) {
            renderer.remove(caller, config);
        }
    }
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    findConfiguration(caller) {
        var _a;
        return (_a = this.launchConfig) === null || _a === void 0 ? void 0 : _a.launch[caller];
    }
    /**
     * Returns the render strategy based on the configuration
     *
     * @param config Configuration for launch
     */
    getStrategy(config) {
        return resolveApplicable(this.renderStrategies, [config]);
    }
};
LaunchDialogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LaunchRenderStrategy,] }] },
    { type: LaunchConfig }
];
LaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(i0.ɵɵinject(i1.LaunchRenderStrategy), i0.ɵɵinject(i2.LaunchConfig)); }, token: LaunchDialogService, providedIn: "root" });
LaunchDialogService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(LaunchRenderStrategy))
], LaunchDialogService);
export { LaunchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxHQUNkLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHcEQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFFWSxnQkFBd0MsRUFDeEMsWUFBMEI7UUFEMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU50QyxtQ0FBbUM7UUFDekIsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBTzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxNQUFxQixFQUFFLEdBQXNCO1FBQ2xELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQXFCO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxpQkFBaUIsQ0FBQyxNQUFxQjs7UUFDL0MsYUFBTyxJQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLE1BQXFCO1FBQ3pDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YsQ0FBQTs7d0NBdkRJLE1BQU0sU0FBQyxvQkFBb0I7WUFFSixZQUFZOzs7QUFQM0IsbUJBQW1CO0lBRC9CLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQU05QixXQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0dBTHBCLG1CQUFtQixDQTREL0I7U0E1RFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMQVVOQ0hfQ0FMTEVSLFxuICBMYXVuY2hDb25maWcsXG4gIExhdW5jaE9wdGlvbnMsXG59IGZyb20gJy4uL2NvbmZpZy9sYXVuY2gtY29uZmlnJztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcbmltcG9ydCB7IHJlc29sdmVBcHBsaWNhYmxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYXVuY2hEaWFsb2dTZXJ2aWNlIHtcbiAgLy8gS2VlcCBhIGxpc3Qgb2YgcmVuZGVyZWQgZWxlbWVudHNcbiAgcHJvdGVjdGVkIHJlbmRlcmVkQ2FsbGVyczogTEFVTkNIX0NBTExFUltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMYXVuY2hSZW5kZXJTdHJhdGVneSlcbiAgICBwcm90ZWN0ZWQgcmVuZGVyU3RyYXRlZ2llczogTGF1bmNoUmVuZGVyU3RyYXRlZ3lbXSxcbiAgICBwcm90ZWN0ZWQgbGF1bmNoQ29uZmlnOiBMYXVuY2hDb25maWdcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJTdHJhdGVnaWVzID0gdGhpcy5yZW5kZXJTdHJhdGVnaWVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgc3RyYXRlZ3kgZnJvbSB0aGUgbGF1bmNoIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqIEBwYXJhbSB2Y3IgVmlldyBDb250YWluZXIgUmVmIG9mIHRoZSBjb250YWluZXIgZm9yIGlubGluZSByZW5kZXJpbmdcbiAgICovXG4gIGxhdW5jaChjYWxsZXI6IExBVU5DSF9DQUxMRVIsIHZjcj86IFZpZXdDb250YWluZXJSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAvLyBSZW5kZXIgaWYgdGhlIHN0cmF0ZWd5IGV4aXN0c1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIucmVuZGVyKGNvbmZpZywgY2FsbGVyLCB2Y3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsIG1ldGhvZCB0byByZW1vdmUgZWxlbWVudCBmcm9tIHJlbmRlcmVkIGVsZW1lbnRzIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqL1xuICBjbGVhcihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAvLyBSZW5kZXIgaWYgdGhlIHN0cmF0ZWd5IGV4aXN0c1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlKGNhbGxlciwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNhbGxlclxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICovXG4gIHByb3RlY3RlZCBmaW5kQ29uZmlndXJhdGlvbihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiBMYXVuY2hPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5sYXVuY2hDb25maWc/LmxhdW5jaFtjYWxsZXJdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlciBzdHJhdGVneSBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIGxhdW5jaFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFN0cmF0ZWd5KGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICByZXR1cm4gcmVzb2x2ZUFwcGxpY2FibGUodGhpcy5yZW5kZXJTdHJhdGVnaWVzLCBbY29uZmlnXSk7XG4gIH1cbn1cbiJdfQ==