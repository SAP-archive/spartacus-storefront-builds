import { ComponentRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ContentSlotComponentData, DynamicAttributeService } from '@spartacus/core';
import { CmsComponentsService } from '../../services/cms-components.service';
import { CmsInjectorService } from './services/cms-injector.service';
import { ComponentHandlerService } from './services/component-handler.service';
/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
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
}
