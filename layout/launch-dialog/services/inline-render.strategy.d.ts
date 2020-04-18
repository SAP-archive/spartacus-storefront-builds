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
    hasMatch(config: LaunchInlineDialog): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InlineRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci5zdHJhdGVneS5kLnRzIiwic291cmNlcyI6WyJpbmxpbmUtcmVuZGVyLnN0cmF0ZWd5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXVuY2hJbmxpbmVEaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW5saW5lUmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbiB0aGUgdmlldyBjb250YWluZXIgcmVmXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHBhcmFtIGNhbGxlclxuICAgICAqIEBwYXJhbSB2Y3JcbiAgICAgKi9cbiAgICByZW5kZXIoY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2csIGNhbGxlcjogTEFVTkNIX0NBTExFUiwgdmNyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZDtcbiAgICBoYXNNYXRjaChjb25maWc6IExhdW5jaElubGluZURpYWxvZyk6IGJvb2xlYW47XG59XG4iXX0=