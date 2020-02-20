import { __awaiter, __decorate, __param } from "tslib";
import { isPlatformServer } from '@angular/common';
import { ComponentRef, Directive, Inject, Injector, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsComponent, CmsConfig, CmsService, ContentSlotComponentData, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
import { ComponentMapperService } from './component-mapper.service';
import { CxApiService } from './cx-api.service';
let ComponentWrapperDirective = class ComponentWrapperDirective {
    constructor(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.config = config;
        this.platformId = platformId;
    }
    ngOnInit() {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    }
    shouldRenderComponent() {
        const isSSR = isPlatformServer(this.platformId);
        const isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    launchComponent() {
        const factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    }
    launchWebComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                const cmsComponentData = this.getCmsDataForComponent();
                this.webElement.cxApi = Object.assign(Object.assign({}, this.injector.get(CxApiService)), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                    cmsComponentData });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                if (this.cmsService.isLaunchInSmartEdit()) {
                    this.addSmartEditContract(this.webElement);
                }
            }
        });
    }
    getCmsDataForComponent() {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    }
    getInjectorForComponent() {
        const configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                },
                ...configProviders,
            ],
            parent: this.injector,
        });
    }
    addSmartEditContract(element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    }
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    }
};
ComponentWrapperDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentMapperService },
    { type: Injector },
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
ComponentWrapperDirective = __decorate([
    Directive({
        selector: '[cxComponentWrapper]',
    }),
    __param(7, Inject(PLATFORM_ID))
], ComponentWrapperDirective);
export { ComponentWrapperDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLaEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFNcEMsWUFDVSxHQUFxQixFQUNyQixlQUF1QyxFQUN2QyxRQUFrQixFQUNsQixVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsTUFBaUIsRUFDSSxVQUFrQjtRQVB2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNu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cnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50LFxuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IENvbXBvbmVudE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDeEFwaVNlcnZpY2UgfSBmcm9tICcuL2N4LWFwaS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICBjbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3ZWJFbGVtZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRNYXBwZXI6IENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyQ29tcG9uZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29tcG9uZW50TWFwcGVyLmlzV2ViQ29tcG9uZW50KHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlKSkge1xuICAgICAgdGhpcy5sYXVuY2hXZWJDb21wb25lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXVuY2hDb21wb25lbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJlbmRlckNvbXBvbmVudCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBjb25zdCBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IgPSAoXG4gICAgICB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fVxuICAgICkuZGlzYWJsZVNTUjtcbiAgICByZXR1cm4gIShpc1NTUiAmJiBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IpO1xuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50TWFwcGVyLmdldENvbXBvbmVudEZhY3RvcnlCeUNvZGUoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZVxuICAgICk7XG5cbiAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgdGhpcy5jbXBSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGZhY3RvcnksXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5nZXRJbmplY3RvckZvckNvbXBvbmVudCgpXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMuY21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbGF1bmNoV2ViQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gYXdhaXQgdGhpcy5jb21wb25lbnRNYXBwZXIuaW5pdFdlYkNvbXBvbmVudChcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlLFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG5cbiAgICBpZiAoZWxlbWVudE5hbWUpIHtcbiAgICAgIHRoaXMud2ViRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgICAgIGNvbnN0IGNtc0NvbXBvbmVudERhdGEgPSB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKTtcblxuICAgICAgdGhpcy53ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChDeEFwaVNlcnZpY2UpLFxuICAgICAgICBDbXNDb21wb25lbnREYXRhOiBjbXNDb21wb25lbnREYXRhLCAvLyBUT0RPOiByZW1vdmUgLyBkZXByZWNhdGVkIHNpbmNlIDEuMC54XG4gICAgICAgIGNtc0NvbXBvbmVudERhdGEsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMud2ViRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=