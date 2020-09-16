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
}
LaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(i0.ɵɵinject(i1.LaunchRenderStrategy), i0.ɵɵinject(i2.LayoutConfig)); }, token: LaunchDialogService, providedIn: "root" });
LaunchDialogService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LaunchDialogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LaunchRenderStrategy,] }] },
    { type: LayoutConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRSxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBRVksZ0JBQXdDLEVBQ3hDLFlBQTBCO1FBRDFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMOUIsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQztRQU81RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQ0osTUFBOEIsRUFDOUIsR0FBc0I7UUFFdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUxQyxnQ0FBZ0M7WUFDaEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7YUFBTSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUE4QjtRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxnQ0FBZ0M7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08saUJBQWlCLENBQUMsTUFBOEI7O1FBQ3hELFVBQUksSUFBSSxDQUFDLFlBQVksMENBQUUsTUFBTSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxNQUFxQjtRQUN6QyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztZQTlFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7d0NBSzdCLE1BQU0sU0FBQyxvQkFBb0I7WUFUdkIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVzb2x2ZUFwcGxpY2FibGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hPcHRpb25zLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2xhdW5jaC1jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhdW5jaERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9kaWFsb2dDbG9zZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTGF1bmNoUmVuZGVyU3RyYXRlZ3kpXG4gICAgcHJvdGVjdGVkIHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W10sXG4gICAgcHJvdGVjdGVkIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnXG4gICkge1xuICAgIHRoaXMucmVuZGVyU3RyYXRlZ2llcyA9IHRoaXMucmVuZGVyU3RyYXRlZ2llcyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5IGZyb20gdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKiBAcGFyYW0gdmNyIFZpZXcgQ29udGFpbmVyIFJlZiBvZiB0aGUgY29udGFpbmVyIGZvciBpbmxpbmUgcmVuZGVyaW5nXG4gICAqL1xuICBsYXVuY2goXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKTogdm9pZCB8IE9ic2VydmFibGU8Q29tcG9uZW50UmVmPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAgIC8vIFJlbmRlciBpZiB0aGUgc3RyYXRlZ3kgZXhpc3RzXG4gICAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5fZGlhbG9nQ2xvc2UubmV4dCh1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKGNvbmZpZywgY2FsbGVyLCB2Y3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignTm8gY29uZmlndXJhdGlvbiBwcm92aWRlZCBmb3IgY2FsbGVyICcgKyBjYWxsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsIG1ldGhvZCB0byByZW1vdmUgZWxlbWVudCBmcm9tIHJlbmRlcmVkIGVsZW1lbnRzIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAqL1xuICBjbGVhcihjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmZpbmRDb25maWd1cmF0aW9uKGNhbGxlcik7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmdldFN0cmF0ZWd5KGNvbmZpZyk7XG5cbiAgICAvLyBSZW5kZXIgaWYgdGhlIHN0cmF0ZWd5IGV4aXN0c1xuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlKGNhbGxlciwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlhbG9nQ2xvc2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjbG9zZURpYWxvZyhyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlLm5leHQocmVhc29uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgY2FsbGVyXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmRDb25maWd1cmF0aW9uKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyk6IExhdW5jaE9wdGlvbnMge1xuICAgIGlmICh0aGlzLmxheW91dENvbmZpZz8ubGF1bmNoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXlvdXRDb25maWcubGF1bmNoW2NhbGxlcl07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyIHN0cmF0ZWd5IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgbGF1bmNoXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U3RyYXRlZ3koY29uZmlnOiBMYXVuY2hPcHRpb25zKTogTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICAgIHJldHVybiByZXNvbHZlQXBwbGljYWJsZSh0aGlzLnJlbmRlclN0cmF0ZWdpZXMsIFtjb25maWddKTtcbiAgfVxufVxuIl19