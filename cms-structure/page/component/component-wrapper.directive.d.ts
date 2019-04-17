import { ChangeDetectorRef, ComponentRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, ComponentMapperService, ContentSlotComponentData } from '@spartacus/core';
export declare class ComponentWrapperDirective implements OnInit, OnDestroy {
    private vcr;
    private componentMapper;
    private injector;
    private cmsService;
    private dynamicAttributeService;
    private renderer;
    private cd;
    private config;
    private platformId;
    cxComponentWrapper: ContentSlotComponentData;
    cmpRef: ComponentRef<any>;
    webElement: any;
    constructor(vcr: ViewContainerRef, componentMapper: ComponentMapperService, injector: Injector, cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, cd: ChangeDetectorRef, config: CmsConfig, platformId: Object);
    ngOnInit(): void;
    private shouldRenderComponent;
    private launchComponent;
    private launchWebComponent;
    private getCmsDataForComponent;
    private getInjectorForComponent;
    private addSmartEditContract;
    ngOnDestroy(): void;
}
