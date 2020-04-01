import { ViewContainerRef } from '@angular/core';
import { LaunchDialog, LaunchOptions, LAUNCH_CALLER } from '../config';
export declare abstract class LaunchRenderStrategy {
    protected renderedCallers: Array<{
        caller: LAUNCH_CALLER;
        element?: any;
    }>;
    /**
     * Render method to implement based on the strategy
     *
     * @param config Launch configuration
     */
    abstract render(config: LaunchOptions, caller: LAUNCH_CALLER, vcr?: ViewContainerRef): void;
    /**
     * Determines if the strategy is the right one for the provided configuration
     *
     * @param config
     */
    abstract match(config: LaunchOptions): boolean;
    /**
     * Determines if element should render
     *
     * @param caller
     * @param config
     */
    protected shouldRender(caller: LAUNCH_CALLER, config: LaunchDialog): boolean;
    /**
     * Method to call when rendered element is destroyed
     * The element will be removed from the list of rendered elements
     *
     * @param caller
     * @param _config optional parameters used in children strategies
     */
    remove(caller: LAUNCH_CALLER, _config?: LaunchOptions): void;
}
