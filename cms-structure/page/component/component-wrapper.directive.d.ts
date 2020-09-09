import { ComponentRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ContentSlotComponentData, DynamicAttributeService } from '@spartacus/core';
import { CmsComponentsService } from '../../services/cms-components.service';
import { CmsInjectorService } from './services/cms-injector.service';
import { ComponentHandlerService } from './services/component-handler.service';
/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
import * as ɵngcc0 from '@angular/core';
export declare class ComponentWrapperDirective implements OnInit, OnDestroy {
    protected vcr: ViewContainerRef;
    protected cmsComponentsService: CmsComponentsService;
    protected injector: Injector;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected componentHandler: ComponentHandlerService;
    protected cmsInjector: CmsInjectorService;
    cxComponentWrapper: ContentSlotComponentData;
    /**
     * @deprecated since 2.0
     *
     * This property in unsafe, i.e.
     * - cmpRef can be set later because of lazy loading or deferred loading
     * - cmpRef can be not set at all if for example, web components are used as cms components
     */
    cmpRef?: ComponentRef<any>;
    private launcherResource?;
    constructor(vcr: ViewContainerRef, cmsComponentsService: CmsComponentsService, injector: Injector, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, componentHandler: ComponentHandlerService, cmsInjector: CmsInjectorService);
    ngOnInit(): void;
    private launchComponent;
    private decorate;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentWrapperDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ComponentWrapperDirective, "[cxComponentWrapper]", never, { "cxComponentWrapper": "cxComponentWrapper"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSwgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0luamVjdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY21zLWluamVjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50SGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbXBvbmVudC1oYW5kbGVyLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdXNlZCB0byBmYWNpbGl0YXRlIGluc3RhbnRpYXRpb24gb2YgQ01TIGRyaXZlbiBkeW5hbWljIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcjtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBjb21wb25lbnRIYW5kbGVyOiBDb21wb25lbnRIYW5kbGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY21zSW5qZWN0b3I6IENtc0luamVjdG9yU2VydmljZTtcbiAgICBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICAgKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaW4gdW5zYWZlLCBpLmUuXG4gICAgICogLSBjbXBSZWYgY2FuIGJlIHNldCBsYXRlciBiZWNhdXNlIG9mIGxhenkgbG9hZGluZyBvciBkZWZlcnJlZCBsb2FkaW5nXG4gICAgICogLSBjbXBSZWYgY2FuIGJlIG5vdCBzZXQgYXQgYWxsIGlmIGZvciBleGFtcGxlLCB3ZWIgY29tcG9uZW50cyBhcmUgdXNlZCBhcyBjbXMgY29tcG9uZW50c1xuICAgICAqL1xuICAgIGNtcFJlZj86IENvbXBvbmVudFJlZjxhbnk+O1xuICAgIHByaXZhdGUgbGF1bmNoZXJSZXNvdXJjZT87XG4gICAgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsIGluamVjdG9yOiBJbmplY3RvciwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjb21wb25lbnRIYW5kbGVyOiBDb21wb25lbnRIYW5kbGVyU2VydmljZSwgY21zSW5qZWN0b3I6IENtc0luamVjdG9yU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGxhdW5jaENvbXBvbmVudDtcbiAgICBwcml2YXRlIGRlY29yYXRlO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=