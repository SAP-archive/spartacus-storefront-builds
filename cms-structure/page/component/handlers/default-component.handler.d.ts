import { ComponentRef, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { ComponentHandler } from './component-handler';
import { Observable } from 'rxjs';
import { CmsComponentMapping, Priority } from '@spartacus/core';
/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DefaultComponentHandler implements ComponentHandler {
    hasMatch(componentMapping: CmsComponentMapping): boolean;
    getPriority(): Priority;
    launcher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector): Observable<{
        elementRef: ElementRef;
        componentRef?: ComponentRef<any>;
    }>;
    protected getComponentFactory(injector: Injector, component: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultComponentHandler, never>;
}

//# sourceMappingURL=default-component.handler.d.ts.map