import { ComponentRef, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import { CmsComponentMapping, Priority } from '@spartacus/core';
import { Observable } from 'rxjs';
import { DefaultComponentHandler } from './default-component.handler';
import { ComponentHandler } from './component-handler';
/**
 * Lazy component handler used for launching lazy loaded cms components implemented
 * as native Angular components.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LazyComponentHandler implements ComponentHandler {
    protected defaultHandler: DefaultComponentHandler;
    constructor(defaultHandler: DefaultComponentHandler);
    /**
     * We want to mach dynamic import signature () => import('')
     */
    hasMatch(componentMapping: CmsComponentMapping): boolean;
    private isNotClass;
    getPriority(): Priority;
    launcher(componentMapping: CmsComponentMapping, viewContainerRef: ViewContainerRef, elementInjector?: Injector): Observable<{
        elementRef: ElementRef;
        componentRef?: ComponentRef<any>;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LazyComponentHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1jb21wb25lbnQuaGFuZGxlci5kLnRzIiwic291cmNlcyI6WyJsYXp5LWNvbXBvbmVudC5oYW5kbGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudE1hcHBpbmcsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnRIYW5kbGVyIH0gZnJvbSAnLi9kZWZhdWx0LWNvbXBvbmVudC5oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXIgfSBmcm9tICcuL2NvbXBvbmVudC1oYW5kbGVyJztcbi8qKlxuICogTGF6eSBjb21wb25lbnQgaGFuZGxlciB1c2VkIGZvciBsYXVuY2hpbmcgbGF6eSBsb2FkZWQgY21zIGNvbXBvbmVudHMgaW1wbGVtZW50ZWRcbiAqIGFzIG5hdGl2ZSBBbmd1bGFyIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExhenlDb21wb25lbnRIYW5kbGVyIGltcGxlbWVudHMgQ29tcG9uZW50SGFuZGxlciB7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRIYW5kbGVyOiBEZWZhdWx0Q29tcG9uZW50SGFuZGxlcjtcbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0SGFuZGxlcjogRGVmYXVsdENvbXBvbmVudEhhbmRsZXIpO1xuICAgIC8qKlxuICAgICAqIFdlIHdhbnQgdG8gbWFjaCBkeW5hbWljIGltcG9ydCBzaWduYXR1cmUgKCkgPT4gaW1wb3J0KCcnKVxuICAgICAqL1xuICAgIGhhc01hdGNoKGNvbXBvbmVudE1hcHBpbmc6IENtc0NvbXBvbmVudE1hcHBpbmcpOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNOb3RDbGFzcztcbiAgICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eTtcbiAgICBsYXVuY2hlcihjb21wb25lbnRNYXBwaW5nOiBDbXNDb21wb25lbnRNYXBwaW5nLCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBlbGVtZW50SW5qZWN0b3I/OiBJbmplY3Rvcik6IE9ic2VydmFibGU8e1xuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgICAgICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgICB9Pjtcbn1cbiJdfQ==