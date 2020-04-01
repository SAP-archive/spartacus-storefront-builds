import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { LaunchConfig, LaunchOptions, LAUNCH_CALLER, } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
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
        return this.renderStrategies.find((strategy) => strategy.match(config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUNMLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxHQUNkLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFFWSxnQkFBd0MsRUFDeEMsWUFBMEI7UUFEMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU50QyxtQ0FBbUM7UUFDekIsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBTzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxNQUFxQixFQUFFLEdBQXNCO1FBQ2xELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQXFCO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxpQkFBaUIsQ0FBQyxNQUFxQjs7UUFDL0MsYUFBTyxJQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLE1BQXFCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FDRixDQUFBOzt3Q0F2REksTUFBTSxTQUFDLG9CQUFvQjtZQUVKLFlBQVk7OztBQVAzQixtQkFBbUI7SUFEL0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBTTlCLFdBQUEsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7R0FMcEIsbUJBQW1CLENBNEQvQjtTQTVEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExhdW5jaENvbmZpZyxcbiAgTGF1bmNoT3B0aW9ucyxcbiAgTEFVTkNIX0NBTExFUixcbn0gZnJvbSAnLi4vY29uZmlnL2xhdW5jaC1jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhdW5jaERpYWxvZ1NlcnZpY2Uge1xuICAvLyBLZWVwIGEgbGlzdCBvZiByZW5kZXJlZCBlbGVtZW50c1xuICBwcm90ZWN0ZWQgcmVuZGVyZWRDYWxsZXJzOiBMQVVOQ0hfQ0FMTEVSW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExhdW5jaFJlbmRlclN0cmF0ZWd5KVxuICAgIHByb3RlY3RlZCByZW5kZXJTdHJhdGVnaWVzOiBMYXVuY2hSZW5kZXJTdHJhdGVneVtdLFxuICAgIHByb3RlY3RlZCBsYXVuY2hDb25maWc6IExhdW5jaENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnJlbmRlclN0cmF0ZWdpZXMgPSB0aGlzLnJlbmRlclN0cmF0ZWdpZXMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBzdHJhdGVneSBmcm9tIHRoZSBsYXVuY2ggY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICogQHBhcmFtIHZjciBWaWV3IENvbnRhaW5lciBSZWYgb2YgdGhlIGNvbnRhaW5lciBmb3IgaW5saW5lIHJlbmRlcmluZ1xuICAgKi9cbiAgbGF1bmNoKGNhbGxlcjogTEFVTkNIX0NBTExFUiwgdmNyPzogVmlld0NvbnRhaW5lclJlZik6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyKTtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0U3RyYXRlZ3koY29uZmlnKTtcblxuICAgIC8vIFJlbmRlciBpZiB0aGUgc3RyYXRlZ3kgZXhpc3RzXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5yZW5kZXIoY29uZmlnLCBjYWxsZXIsIHZjcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWwgbWV0aG9kIHRvIHJlbW92ZSBlbGVtZW50IGZyb20gcmVuZGVyZWQgZWxlbWVudHMgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICovXG4gIGNsZWFyKGNhbGxlcjogTEFVTkNIX0NBTExFUik6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyKTtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0U3RyYXRlZ3koY29uZmlnKTtcblxuICAgIC8vIFJlbmRlciBpZiB0aGUgc3RyYXRlZ3kgZXhpc3RzXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmUoY2FsbGVyLCBjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgY2FsbGVyXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmRDb25maWd1cmF0aW9uKGNhbGxlcjogTEFVTkNIX0NBTExFUik6IExhdW5jaE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmxhdW5jaENvbmZpZz8ubGF1bmNoW2NhbGxlcl07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyIHN0cmF0ZWd5IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgbGF1bmNoXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U3RyYXRlZ3koY29uZmlnOiBMYXVuY2hPcHRpb25zKTogTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLnJlbmRlclN0cmF0ZWdpZXMuZmluZCgoc3RyYXRlZ3kpID0+IHN0cmF0ZWd5Lm1hdGNoKGNvbmZpZykpO1xuICB9XG59XG4iXX0=