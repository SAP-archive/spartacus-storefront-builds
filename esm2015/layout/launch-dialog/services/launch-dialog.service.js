import { Inject, Injectable, isDevMode, } from '@angular/core';
import { resolveApplicable } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutConfig } from '../../config/layout-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as i0 from "@angular/core";
import * as i1 from "./launch-render.strategy";
import * as i2 from "../../config/layout-config";
export class LaunchDialogService {
    constructor(renderStrategies, layoutConfig) {
        this.renderStrategies = renderStrategies;
        this.layoutConfig = layoutConfig;
        this._dialogClose = new BehaviorSubject(undefined);
        this._dataSubject = new BehaviorSubject(undefined);
        this.renderStrategies = this.renderStrategies || [];
    }
    get data$() {
        return this._dataSubject.asObservable();
    }
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    launch(caller, vcr, data) {
        const config = this.findConfiguration(caller);
        if (config) {
            const renderer = this.getStrategy(config);
            // Render if the strategy exists
            if (renderer) {
                this._dialogClose.next(undefined);
                this._dataSubject.next(data);
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
}
LaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(i0.ɵɵinject(i1.LaunchRenderStrategy), i0.ɵɵinject(i2.LayoutConfig)); }, token: LaunchDialogService, providedIn: "root" });
LaunchDialogService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LaunchDialogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LaunchRenderStrategy,] }] },
    { type: LayoutConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRSxNQUFNLE9BQU8sbUJBQW1CO0lBUTlCLFlBRVksZ0JBQXdDLEVBQ3hDLFlBQTBCO1FBRDFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFWOUIsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFNLFNBQVMsQ0FBQyxDQUFDO1FBV3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFWRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQVVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUNKLE1BQThCLEVBQzlCLEdBQXNCLEVBQ3RCLElBQVU7UUFFVixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLGdDQUFnQztZQUNoQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7YUFBTSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUE4QjtRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxnQ0FBZ0M7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08saUJBQWlCLENBQUMsTUFBOEI7O1FBQ3hELFVBQUksSUFBSSxDQUFDLFlBQVksMENBQUUsTUFBTSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxNQUFxQjtRQUN6QyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztZQXRGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7d0NBVTdCLE1BQU0sU0FBQyxvQkFBb0I7WUFkdkIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVzb2x2ZUFwcGxpY2FibGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hPcHRpb25zLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2xhdW5jaC1jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhdW5jaERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9kaWFsb2dDbG9zZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuICBwcml2YXRlIF9kYXRhU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih1bmRlZmluZWQpO1xuXG4gIGdldCBkYXRhJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTGF1bmNoUmVuZGVyU3RyYXRlZ3kpXG4gICAgcHJvdGVjdGVkIHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W10sXG4gICAgcHJvdGVjdGVkIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnXG4gICkge1xuICAgIHRoaXMucmVuZGVyU3RyYXRlZ2llcyA9IHRoaXMucmVuZGVyU3RyYXRlZ2llcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5IGZyb20gdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKiBAcGFyYW0gdmNyIFZpZXcgQ29udGFpbmVyIFJlZiBvZiB0aGUgY29udGFpbmVyIGZvciBpbmxpbmUgcmVuZGVyaW5nXG4gICAqL1xuICBsYXVuY2goXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWYsXG4gICAgZGF0YT86IGFueVxuICApOiB2b2lkIHwgT2JzZXJ2YWJsZTxDb21wb25lbnRSZWY8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmluZENvbmZpZ3VyYXRpb24oY2FsbGVyKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0U3RyYXRlZ3koY29uZmlnKTtcblxuICAgICAgLy8gUmVuZGVyIGlmIHRoZSBzdHJhdGVneSBleGlzdHNcbiAgICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgICB0aGlzLl9kaWFsb2dDbG9zZS5uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuX2RhdGFTdWJqZWN0Lm5leHQoZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcihjb25maWcsIGNhbGxlciwgdmNyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZm9yIGNhbGxlciAnICsgY2FsbGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbCBtZXRob2QgdG8gcmVtb3ZlIGVsZW1lbnQgZnJvbSByZW5kZXJlZCBlbGVtZW50cyBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKi9cbiAgY2xlYXIoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5maW5kQ29uZmlndXJhdGlvbihjYWxsZXIpO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRTdHJhdGVneShjb25maWcpO1xuXG4gICAgLy8gUmVuZGVyIGlmIHRoZSBzdHJhdGVneSBleGlzdHNcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZShjYWxsZXIsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpYWxvZ0Nsb3NlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ0Nsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY2xvc2VEaWFsb2cocmVhc29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaWFsb2dDbG9zZS5uZXh0KHJlYXNvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNhbGxlclxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICovXG4gIHByb3RlY3RlZCBmaW5kQ29uZmlndXJhdGlvbihjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcpOiBMYXVuY2hPcHRpb25zIHtcbiAgICBpZiAodGhpcy5sYXlvdXRDb25maWc/LmxhdW5jaCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Q29uZmlnLmxhdW5jaFtjYWxsZXJdO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlciBzdHJhdGVneSBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIGxhdW5jaFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFN0cmF0ZWd5KGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICByZXR1cm4gcmVzb2x2ZUFwcGxpY2FibGUodGhpcy5yZW5kZXJTdHJhdGVnaWVzLCBbY29uZmlnXSk7XG4gIH1cbn1cbiJdfQ==