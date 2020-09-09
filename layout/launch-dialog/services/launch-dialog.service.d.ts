import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutConfig } from '../../config/layout-config';
import { LaunchOptions, LAUNCH_CALLER } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class LaunchDialogService {
    protected renderStrategies: LaunchRenderStrategy[];
    protected layoutConfig: LayoutConfig;
    private _dialogClose;
    constructor(renderStrategies: LaunchRenderStrategy[], layoutConfig: LayoutConfig);
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    launch(caller: LAUNCH_CALLER | string, vcr?: ViewContainerRef): void | Observable<ComponentRef<any>>;
    /**
     * Util method to remove element from rendered elements list
     *
     * @param caller LAUNCH_CALLER
     */
    clear(caller: LAUNCH_CALLER | string): void;
    get dialogClose(): Observable<string>;
    closeDialog(reason: string): void;
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    protected findConfiguration(caller: LAUNCH_CALLER | string): LaunchOptions;
    /**
     * Returns the render strategy based on the configuration
     *
     * @param config Configuration for launch
     */
    protected getStrategy(config: LaunchOptions): LaunchRenderStrategy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LaunchDialogService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImxhdW5jaC1kaWFsb2cuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hPcHRpb25zLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnL2xhdW5jaC1jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGF1bmNoRGlhbG9nU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W107XG4gICAgcHJvdGVjdGVkIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnO1xuICAgIHByaXZhdGUgX2RpYWxvZ0Nsb3NlO1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W10sIGxheW91dENvbmZpZzogTGF5b3V0Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5IGZyb20gdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICAgKiBAcGFyYW0gdmNyIFZpZXcgQ29udGFpbmVyIFJlZiBvZiB0aGUgY29udGFpbmVyIGZvciBpbmxpbmUgcmVuZGVyaW5nXG4gICAgICovXG4gICAgbGF1bmNoKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgdmNyPzogVmlld0NvbnRhaW5lclJlZik6IHZvaWQgfCBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PjtcbiAgICAvKipcbiAgICAgKiBVdGlsIG1ldGhvZCB0byByZW1vdmUgZWxlbWVudCBmcm9tIHJlbmRlcmVkIGVsZW1lbnRzIGxpc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgICAqL1xuICAgIGNsZWFyKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0IGRpYWxvZ0Nsb3NlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjbG9zZURpYWxvZyhyZWFzb246IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGNhbGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxlciBMQVVOQ0hfQ0FMTEVSXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpbmRDb25maWd1cmF0aW9uKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyk6IExhdW5jaE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVuZGVyIHN0cmF0ZWd5IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIGxhdW5jaFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTdHJhdGVneShjb25maWc6IExhdW5jaE9wdGlvbnMpOiBMYXVuY2hSZW5kZXJTdHJhdGVneTtcbn1cbiJdfQ==