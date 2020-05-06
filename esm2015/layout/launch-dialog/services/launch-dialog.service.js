import { __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, } from '@angular/core';
import { resolveApplicable } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutConfig } from '../../config/layout-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "./launch-render.strategy";
import * as i2 from "../../config/layout-config";
let LaunchDialogService = class LaunchDialogService {
    constructor(renderStrategies, layoutConfig) {
        this.renderStrategies = renderStrategies;
        this.layoutConfig = layoutConfig;
        this._dialogClose = new BehaviorSubject(undefined);
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
        if (config) {
            const renderer = this.getStrategy(config);
            // Render if the strategy exists
            if (renderer) {
                this._dialogClose.next(undefined);
                return renderer.render(config, caller, vcr);
            }
        }
        else if (isDevMode()) {
            console.warn('No configuration provided for caller ' + caller);
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
    get dialogClose() {
        return this._dialogClose.asObservable();
    }
    closeDialog(reason) {
        this._dialogClose.next(reason);
    }
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    findConfiguration(caller) {
        var _a;
        if ((_a = this.layoutConfig) === null || _a === void 0 ? void 0 : _a.launch) {
            return this.layoutConfig.launch[caller];
        }
        return undefined;
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
    { type: LayoutConfig }
];
LaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(i0.ɵɵinject(i1.LaunchRenderStrategy), i0.ɵɵinject(i2.LayoutConfig)); }, token: LaunchDialogService, providedIn: "root" });
LaunchDialogService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(LaunchRenderStrategy))
], LaunchDialogService);
export { LaunchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFHOUIsWUFFWSxnQkFBd0MsRUFDeEMsWUFBMEI7UUFEMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw5QixpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBTzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FDSixNQUE4QixFQUM5QixHQUFzQjtRQUV0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLGdDQUFnQztZQUNoQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDN0M7U0FDRjthQUFNLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQThCO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLGdDQUFnQztRQUNoQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxpQkFBaUIsQ0FBQyxNQUE4Qjs7UUFDeEQsVUFBSSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLE1BQXFCO1FBQ3pDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YsQ0FBQTs7d0NBMUVJLE1BQU0sU0FBQyxvQkFBb0I7WUFFSixZQUFZOzs7QUFOM0IsbUJBQW1CO0lBRC9CLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUs5QixXQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0dBSnBCLG1CQUFtQixDQThFL0I7U0E5RVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXNvbHZlQXBwbGljYWJsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IExhdW5jaE9wdGlvbnMsIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvbGF1bmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGF1bmNoRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgX2RpYWxvZ0Nsb3NlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMYXVuY2hSZW5kZXJTdHJhdGVneSlcbiAgICBwcm90ZWN0ZWQgcmVuZGVyU3RyYXRlZ2llczogTGF1bmNoUmVuZGVyU3RyYXRlZ3lbXSxcbiAgICBwcm90ZWN0ZWQgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWdcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJTdHJhdGVnaWVzID0gdGhpcy5yZW5kZXJTdHJhdGVnaWVzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgc3RyYXRlZ3kgZnJvbSB0aGUgbGF1bmNoIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqIEBwYXJhbSB2Y3IgVmlldyBDb250YWluZXIgUmVmIG9mIHRoZSBjb250YWluZXIgZm9yIGlubGluZSByZW5kZXJpbmdcbiAgICovXG4gIGxhdW5jaChcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgdmNyPzogVmlld0NvbnRhaW5lclJlZlxuICApOiB2b2lkIHwgT2JzZXJ2YWJsZTxDb21wb25lbnRSZWY8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0U3RyYXRlZ3koY29uZmlnKTtcblxuICAgICAgLy8gUmVuZGVyIGlmIHRoZSBzdHJhdGVneSBleGlzdHNcbiAgICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgICB0aGlzLl9kaWFsb2dDbG9zZS5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoY29uZmlnLCBjYWxsZXIsIHZjcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKCdObyBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGZvciBjYWxsZXIgJyArIGNhbGxlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWwgbWV0aG9kIHRvIHJlbW92ZSBlbGVtZW50IGZyb20gcmVuZGVyZWQgZWxlbWVudHMgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICovXG4gIGNsZWFyKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyKTtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0U3RyYXRlZ3koY29uZmlnKTtcblxuICAgIC8vIFJlbmRlciBpZiB0aGUgc3RyYXRlZ3kgZXhpc3RzXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmUoY2FsbGVyLCBjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaWFsb2dDbG9zZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dDbG9zZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNsb3NlRGlhbG9nKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlhbG9nQ2xvc2UubmV4dChyZWFzb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBjYWxsZXJcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqL1xuICBwcm90ZWN0ZWQgZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nKTogTGF1bmNoT3B0aW9ucyB7XG4gICAgaWYgKHRoaXMubGF5b3V0Q29uZmlnPy5sYXVuY2gpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheW91dENvbmZpZy5sYXVuY2hbY2FsbGVyXTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW5kZXIgc3RyYXRlZ3kgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIGZvciBsYXVuY2hcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTdHJhdGVneShjb25maWc6IExhdW5jaE9wdGlvbnMpOiBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gICAgcmV0dXJuIHJlc29sdmVBcHBsaWNhYmxlKHRoaXMucmVuZGVyU3RyYXRlZ2llcywgW2NvbmZpZ10pO1xuICB9XG59XG4iXX0=