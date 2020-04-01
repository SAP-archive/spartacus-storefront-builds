import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { LaunchInlineDialog, LAUNCH_CALLER } from '../config';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class InlineRenderStrategy extends LaunchRenderStrategy {
    protected componentFactoryResolver: ComponentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config: LaunchInlineDialog, caller: LAUNCH_CALLER, vcr: ViewContainerRef): void;
    match(config: LaunchInlineDialog): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InlineRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci1zdHJhdGVneS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImlubGluZS1yZW5kZXItc3RyYXRlZ3kuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF1bmNoSW5saW5lRGlhbG9nLCBMQVVOQ0hfQ0FMTEVSIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IExhdW5jaFJlbmRlclN0cmF0ZWd5IH0gZnJvbSAnLi9sYXVuY2gtcmVuZGVyLnN0cmF0ZWd5JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIElubGluZVJlbmRlclN0cmF0ZWd5IGV4dGVuZHMgTGF1bmNoUmVuZGVyU3RyYXRlZ3kge1xuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgY29tcG9uZW50IGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gaW4gdGhlIHZpZXcgY29udGFpbmVyIHJlZlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwYXJhbSBjYWxsZXJcbiAgICAgKiBAcGFyYW0gdmNyXG4gICAgICovXG4gICAgcmVuZGVyKGNvbmZpZzogTGF1bmNoSW5saW5lRGlhbG9nLCBjYWxsZXI6IExBVU5DSF9DQUxMRVIsIHZjcjogVmlld0NvbnRhaW5lclJlZik6IHZvaWQ7XG4gICAgbWF0Y2goY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2cpOiBib29sZWFuO1xufVxuIl19