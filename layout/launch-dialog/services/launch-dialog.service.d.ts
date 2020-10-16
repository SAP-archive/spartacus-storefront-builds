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
    private _dataSubject;
    get data$(): Observable<any>;
    constructor(renderStrategies: LaunchRenderStrategy[], layoutConfig: LayoutConfig);
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    launch(caller: LAUNCH_CALLER | string, vcr?: ViewContainerRef, data?: any): void | Observable<ComponentRef<any>>;
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

//# sourceMappingURL=launch-dialog.service.d.ts.map