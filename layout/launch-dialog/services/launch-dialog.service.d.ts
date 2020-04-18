import { ViewContainerRef } from '@angular/core';
import { LAUNCH_CALLER, LaunchConfig, LaunchOptions } from '../config/launch-config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class LaunchDialogService {
    protected renderStrategies: LaunchRenderStrategy[];
    protected launchConfig: LaunchConfig;
    protected renderedCallers: LAUNCH_CALLER[];
    constructor(renderStrategies: LaunchRenderStrategy[], launchConfig: LaunchConfig);
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    launch(caller: LAUNCH_CALLER, vcr?: ViewContainerRef): void;
    /**
     * Util method to remove element from rendered elements list
     *
     * @param caller LAUNCH_CALLER
     */
    clear(caller: LAUNCH_CALLER): void;
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    protected findConfiguration(caller: LAUNCH_CALLER): LaunchOptions;
    /**
     * Returns the render strategy based on the configuration
     *
     * @param config Configuration for launch
     */
    protected getStrategy(config: LaunchOptions): LaunchRenderStrategy;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LaunchDialogService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImxhdW5jaC1kaWFsb2cuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMQVVOQ0hfQ0FMTEVSLCBMYXVuY2hDb25maWcsIExhdW5jaE9wdGlvbnMgfSBmcm9tICcuLi9jb25maWcvbGF1bmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYXVuY2hEaWFsb2dTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyU3RyYXRlZ2llczogTGF1bmNoUmVuZGVyU3RyYXRlZ3lbXTtcbiAgICBwcm90ZWN0ZWQgbGF1bmNoQ29uZmlnOiBMYXVuY2hDb25maWc7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVkQ2FsbGVyczogTEFVTkNIX0NBTExFUltdO1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlclN0cmF0ZWdpZXM6IExhdW5jaFJlbmRlclN0cmF0ZWd5W10sIGxhdW5jaENvbmZpZzogTGF1bmNoQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5IGZyb20gdGhlIGxhdW5jaCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICAgKiBAcGFyYW0gdmNyIFZpZXcgQ29udGFpbmVyIFJlZiBvZiB0aGUgY29udGFpbmVyIGZvciBpbmxpbmUgcmVuZGVyaW5nXG4gICAgICovXG4gICAgbGF1bmNoKGNhbGxlcjogTEFVTkNIX0NBTExFUiwgdmNyPzogVmlld0NvbnRhaW5lclJlZik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXRpbCBtZXRob2QgdG8gcmVtb3ZlIGVsZW1lbnQgZnJvbSByZW5kZXJlZCBlbGVtZW50cyBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGVyIExBVU5DSF9DQUxMRVJcbiAgICAgKi9cbiAgICBjbGVhcihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBjYWxsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsZXIgTEFVTkNIX0NBTExFUlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmaW5kQ29uZmlndXJhdGlvbihjYWxsZXI6IExBVU5DSF9DQUxMRVIpOiBMYXVuY2hPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlbmRlciBzdHJhdGVneSBiYXNlZCBvbiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIGZvciBsYXVuY2hcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U3RyYXRlZ3koY29uZmlnOiBMYXVuY2hPcHRpb25zKTogTGF1bmNoUmVuZGVyU3RyYXRlZ3k7XG59XG4iXX0=