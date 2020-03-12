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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImNvbXBvbmVudC13cmFwcGVyLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENtc1NlcnZpY2UsIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSwgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWFwcGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSB2Y3I7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRNYXBwZXI7XG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBkeW5hbWljQXR0cmlidXRlU2VydmljZTtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcbiAgICBjbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICAgIHdlYkVsZW1lbnQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudE1hcHBlcjogQ29tcG9uZW50TWFwcGVyU2VydmljZSwgaW5qZWN0b3I6IEluamVjdG9yLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNvbmZpZzogQ21zQ29uZmlnLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBsYXVuY2hDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBsYXVuY2hXZWJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19