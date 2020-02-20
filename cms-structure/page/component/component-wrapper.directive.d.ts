import { ComponentRef, Injector, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, DynamicAttributeService } from '@spartacus/core';
import { ComponentMapperService } from './component-mapper.service';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentWrapperDirective implements OnInit, OnDestroy {
    private vcr;
    private componentMapper;
    private injector;
    private cmsService;
    private dynamicAttributeService;
    private renderer;
    private config;
    private platformId;
    cxComponentWrapper: ContentSlotComponentData;
    cmpRef: ComponentRef<any>;
    webElement: any;
    constructor(vcr: ViewContainerRef, componentMapper: ComponentMapperService, injector: Injector, cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, config: CmsConfig, platformId: Object);
    ngOnInit(): void;
    private shouldRenderComponent;
    private launchComponent;
    private launchWebComponent;
    private getCmsDataForComponent;
    private getInjectorForComponent;
    private addSmartEditContract;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentWrapperDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ComponentWrapperDirective, "[cxComponentWrapper]", never, {
    "cxComponentWrapper": "cxComponentWrapper";
}, {}, never>;
}

//# sourceMappingURL=component-wrapper.directive.d.ts.map