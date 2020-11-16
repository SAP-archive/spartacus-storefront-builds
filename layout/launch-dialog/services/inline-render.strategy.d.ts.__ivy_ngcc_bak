import { ComponentFactoryResolver, ComponentRef, RendererFactory2, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchInlineDialog, LAUNCH_CALLER } from '../config/index';
import { LaunchRenderStrategy } from './launch-render.strategy';
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
}
