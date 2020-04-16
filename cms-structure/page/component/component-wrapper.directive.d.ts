import { ComponentRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CmsService, ContentSlotComponentData, DynamicAttributeService } from '@spartacus/core';
import { CmsMappingService } from '../../services/cms-mapping.service';
import { ComponentHandlerService } from './services/component-handler.service';
import { CmsInjectorService } from './services/cms-injector.service';
/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
import * as ɵngcc0 from '@angular/core';
export declare class ComponentWrapperDirective implements OnInit, OnDestroy {
    protected vcr: ViewContainerRef;
    protected cmsMappingService: CmsMappingService;
    protected injector: Injector;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected componentHandler: ComponentHandlerService;
    protected cmsInjector: CmsInjectorService;
    protected cmsService: CmsService;
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
    constructor(vcr: ViewContainerRef, cmsMappingService: CmsMappingService, injector: Injector, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, componentHandler: ComponentHandlerService, cmsInjector: CmsInjectorService, cmsService: CmsService);
    ngOnInit(): void;
    private launchComponent;
    private decorate;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentWrapperDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ComponentWrapperDirective, "[cxComponentWrapper]", never, { "cxComponentWrapper": "cxComponentWrapper"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBDb250ZW50U2xvdENvbXBvbmVudERhdGEsIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc01hcHBpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLW1hcHBpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJbmplY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlJztcbi8qKlxuICogRGlyZWN0aXZlIHVzZWQgdG8gZmFjaWxpdGF0ZSBpbnN0YW50aWF0aW9uIG9mIENNUyBkcml2ZW4gZHluYW1pYyBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICBwcm90ZWN0ZWQgY21zTWFwcGluZ1NlcnZpY2U6IENtc01hcHBpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3I7XG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50SGFuZGxlcjogQ29tcG9uZW50SGFuZGxlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc0luamVjdG9yOiBDbXNJbmplY3RvclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgY3hDb21wb25lbnRXcmFwcGVyOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGluIHVuc2FmZSwgaS5lLlxuICAgICAqIC0gY21wUmVmIGNhbiBiZSBzZXQgbGF0ZXIgYmVjYXVzZSBvZiBsYXp5IGxvYWRpbmcgb3IgZGVmZXJyZWQgbG9hZGluZ1xuICAgICAqIC0gY21wUmVmIGNhbiBiZSBub3Qgc2V0IGF0IGFsbCBpZiBmb3IgZXhhbXBsZSwgd2ViIGNvbXBvbmVudHMgYXJlIHVzZWQgYXMgY21zIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICBjbXBSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgICBwcml2YXRlIGxhdW5jaGVyUmVzb3VyY2U/O1xuICAgIGNvbnN0cnVjdG9yKHZjcjogVmlld0NvbnRhaW5lclJlZiwgY21zTWFwcGluZ1NlcnZpY2U6IENtc01hcHBpbmdTZXJ2aWNlLCBpbmplY3RvcjogSW5qZWN0b3IsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY29tcG9uZW50SGFuZGxlcjogQ29tcG9uZW50SGFuZGxlclNlcnZpY2UsIGNtc0luamVjdG9yOiBDbXNJbmplY3RvclNlcnZpY2UsIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBsYXVuY2hDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkZWNvcmF0ZTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19