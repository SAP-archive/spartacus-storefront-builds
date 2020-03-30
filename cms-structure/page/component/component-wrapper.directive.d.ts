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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentWrapperDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ComponentWrapperDirective, "[cxComponentWrapper]", never, { "cxComponentWrapper": "cxComponentWrapper"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDbXNTZXJ2aWNlLCBDb250ZW50U2xvdENvbXBvbmVudERhdGEsIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1tYXBwZXIuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgdmNyO1xuICAgIHByaXZhdGUgY29tcG9uZW50TWFwcGVyO1xuICAgIHByaXZhdGUgaW5qZWN0b3I7XG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIHBsYXRmb3JtSWQ7XG4gICAgY3hDb21wb25lbnRXcmFwcGVyOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG4gICAgY21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgICB3ZWJFbGVtZW50OiBhbnk7XG4gICAgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnRNYXBwZXI6IENvbXBvbmVudE1hcHBlclNlcnZpY2UsIGluamVjdG9yOiBJbmplY3RvciwgY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjb25maWc6IENtc0NvbmZpZywgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc2hvdWxkUmVuZGVyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50O1xuICAgIHByaXZhdGUgbGF1bmNoV2ViQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ2V0Q21zRGF0YUZvckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGdldEluamVjdG9yRm9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Q7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==