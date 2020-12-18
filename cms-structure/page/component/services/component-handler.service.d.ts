import { ComponentRef, ElementRef, Injector, NgModuleRef, ViewContainerRef } from '@angular/core';
import { CmsComponentMapping } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ComponentHandler } from '../handlers/component-handler';
/**
 * Responsible for obtaining component handler for specified component mapping
 */
export declare class ComponentHandlerService {
    protected handlers: ComponentHandler[];
    constructor(handlers: ComponentHandler[]);
    protected invalidMappings: Set<CmsComponentMapping<any>>;
    /**
     * Get best matching component handler
     *
     * @param componentMapping
     */
    protected resolve(componentMapping: CmsComponentMapping): ComponentHandler;
    /**
     * Get launcher for specified component mapping
     *
     * @param componentMapping
     * @param viewContainerRef
     * @param elementInjector
     */
    getLauncher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector, module?: NgModuleRef<any>): Observable<{
        elementRef: ElementRef;
        componentRef?: ComponentRef<any>;
    }>;
}
