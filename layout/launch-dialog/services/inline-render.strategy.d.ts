import { ComponentFactoryResolver, ComponentRef, RendererFactory2, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchInlineDialog, LAUNCH_CALLER } from '../config/index';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class InlineRenderStrategy extends LaunchRenderStrategy {
    protected document: any;
    protected rendererFactory: RendererFactory2;
    protected componentFactoryResolver: ComponentFactoryResolver;
    constructor(document: any, rendererFactory: RendererFactory2, componentFactoryResolver: ComponentFactoryResolver);
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config: LaunchInlineDialog, caller: LAUNCH_CALLER | string, vcr: ViewContainerRef): Observable<ComponentRef<any>>;
    hasMatch(config: LaunchInlineDialog): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InlineRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLXJlbmRlci5zdHJhdGVneS5kLnRzIiwic291cmNlcyI6WyJpbmxpbmUtcmVuZGVyLnN0cmF0ZWd5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExhdW5jaElubGluZURpYWxvZywgTEFVTkNIX0NBTExFUiB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hSZW5kZXJTdHJhdGVneSB9IGZyb20gJy4vbGF1bmNoLXJlbmRlci5zdHJhdGVneSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbmxpbmVSZW5kZXJTdHJhdGVneSBleHRlbmRzIExhdW5jaFJlbmRlclN0cmF0ZWd5IHtcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyO1xuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudDogYW55LCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbiB0aGUgdmlldyBjb250YWluZXIgcmVmXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHBhcmFtIGNhbGxlclxuICAgICAqIEBwYXJhbSB2Y3JcbiAgICAgKi9cbiAgICByZW5kZXIoY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2csIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgdmNyOiBWaWV3Q29udGFpbmVyUmVmKTogT2JzZXJ2YWJsZTxDb21wb25lbnRSZWY8YW55Pj47XG4gICAgaGFzTWF0Y2goY29uZmlnOiBMYXVuY2hJbmxpbmVEaWFsb2cpOiBib29sZWFuO1xufVxuIl19