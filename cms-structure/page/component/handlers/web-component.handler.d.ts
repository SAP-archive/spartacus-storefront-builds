import { ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentHandler } from './component-handler';
import { CmsComponentMapping, Priority } from '@spartacus/core';
/**
 * Component handler responsible for launching cms web components.
 */
import * as ɵngcc0 from '@angular/core';
export declare class WebComponentHandler implements ComponentHandler {
    protected document: any;
    protected platform: any;
    constructor(document: any, platform: any);
    private loadedWebComponents;
    hasMatch(componentMapping: CmsComponentMapping): boolean;
    getPriority(): Priority;
    launcher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector): Observable<{
        elementRef: ElementRef;
    }>;
    private initWebComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WebComponentHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbXBvbmVudC5oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbIndlYi1jb21wb25lbnQuaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdG9yLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9jb21wb25lbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRNYXBwaW5nLCBQcmlvcml0eSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG4vKipcbiAqIENvbXBvbmVudCBoYW5kbGVyIHJlc3BvbnNpYmxlIGZvciBsYXVuY2hpbmcgY21zIHdlYiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBXZWJDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gICAgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnk7XG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnk7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSwgcGxhdGZvcm06IGFueSk7XG4gICAgcHJpdmF0ZSBsb2FkZWRXZWJDb21wb25lbnRzO1xuICAgIGhhc01hdGNoKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBib29sZWFuO1xuICAgIGdldFByaW9yaXR5KCk6IFByaW9yaXR5O1xuICAgIGxhdW5jaGVyKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGVsZW1lbnRJbmplY3Rvcj86IEluamVjdG9yKTogT2JzZXJ2YWJsZTx7XG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgfT47XG4gICAgcHJpdmF0ZSBpbml0V2ViQ29tcG9uZW50O1xufVxuIl19