import { ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { OutletService } from '../../../cms-structure/outlet/index';
import { OutletRendererService } from '../../../cms-structure/outlet/outlet-renderer.service';
import { LaunchOutletDialog, LAUNCH_CALLER } from '../config/index';
import { LaunchRenderStrategy } from './launch-render.strategy';
import * as ɵngcc0 from '@angular/core';
export declare class OutletRenderStrategy extends LaunchRenderStrategy {
    protected outletService: OutletService<ComponentFactory<any>>;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected outletRendererService: OutletRendererService;
    constructor(outletService: OutletService<ComponentFactory<any>>, componentFactoryResolver: ComponentFactoryResolver, outletRendererService: OutletRendererService);
    /**
     * Renders the element in the configured outlet
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config: LaunchOutletDialog, caller: LAUNCH_CALLER, vcr?: ViewContainerRef): void;
    hasMatch(config: LaunchOutletDialog): boolean;
    remove(caller: LAUNCH_CALLER, config: LaunchOutletDialog): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletRenderStrategy, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlci5zdHJhdGVneS5kLnRzIiwic291cmNlcyI6WyJvdXRsZXQtcmVuZGVyLnN0cmF0ZWd5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZW5kZXJlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYXVuY2hPdXRsZXREaWFsb2csIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgfSBmcm9tICcuL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3knO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0UmVuZGVyU3RyYXRlZ3kgZXh0ZW5kcyBMYXVuY2hSZW5kZXJTdHJhdGVneSB7XG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PjtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgcHJvdGVjdGVkIG91dGxldFJlbmRlcmVyU2VydmljZTogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PiwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG91dGxldFJlbmRlcmVyU2VydmljZTogT3V0bGV0UmVuZGVyZXJTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBlbGVtZW50IGluIHRoZSBjb25maWd1cmVkIG91dGxldFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwYXJhbSBjYWxsZXJcbiAgICAgKiBAcGFyYW0gdmNyXG4gICAgICovXG4gICAgcmVuZGVyKGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nLCBjYWxsZXI6IExBVU5DSF9DQUxMRVIsIHZjcj86IFZpZXdDb250YWluZXJSZWYpOiB2b2lkO1xuICAgIGhhc01hdGNoKGNvbmZpZzogTGF1bmNoT3V0bGV0RGlhbG9nKTogYm9vbGVhbjtcbiAgICByZW1vdmUoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSLCBjb25maWc6IExhdW5jaE91dGxldERpYWxvZyk6IHZvaWQ7XG59XG4iXX0=