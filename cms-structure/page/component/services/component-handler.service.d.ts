import { ComponentRef, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { CmsComponentMapping } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Responsible for obtaining component handler for specified component mapping
 */
export declare class ComponentHandlerService {
    protected handlers: ComponentHandler[];
    constructor(handlers: ComponentHandler[]);
    protected invalidMappings: Set<CmsComponentMapping>;
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
    getLauncher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector): Observable<{
        elementRef: ElementRef;
        componentRef?: ComponentRef<any>;
    }>;
}
