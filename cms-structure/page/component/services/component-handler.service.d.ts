import { ComponentRef, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { ComponentHandler } from '../handlers/component-handler';
import { CmsComponentMapping } from '@spartacus/core';
import { Observable } from 'rxjs';
/**
 * Responsible for obtaining component handler for specified component mapping
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentHandlerService, [{ optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWhhbmRsZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjb21wb25lbnQtaGFuZGxlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tcG9uZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TWFwcGluZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBvYnRhaW5pbmcgY29tcG9uZW50IGhhbmRsZXIgZm9yIHNwZWNpZmllZCBjb21wb25lbnQgbWFwcGluZ1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb21wb25lbnRIYW5kbGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGhhbmRsZXJzOiBDb21wb25lbnRIYW5kbGVyW107XG4gICAgY29uc3RydWN0b3IoaGFuZGxlcnM6IENvbXBvbmVudEhhbmRsZXJbXSk7XG4gICAgcHJvdGVjdGVkIGludmFsaWRNYXBwaW5nczogU2V0PENtc0NvbXBvbmVudE1hcHBpbmc+O1xuICAgIC8qKlxuICAgICAqIEdldCBiZXN0IG1hdGNoaW5nIGNvbXBvbmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXNvbHZlKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBDb21wb25lbnRIYW5kbGVyO1xuICAgIC8qKlxuICAgICAqIEdldCBsYXVuY2hlciBmb3Igc3BlY2lmaWVkIGNvbXBvbmVudCBtYXBwaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50TWFwcGluZ1xuICAgICAqIEBwYXJhbSB2aWV3Q29udGFpbmVyUmVmXG4gICAgICogQHBhcmFtIGVsZW1lbnRJbmplY3RvclxuICAgICAqL1xuICAgIGdldExhdW5jaGVyKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yKTogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjxhbnk+O1xuICAgIH0+O1xufVxuIl19