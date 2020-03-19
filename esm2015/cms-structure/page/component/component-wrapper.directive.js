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
                this.webElement.cxApi = Object.assign(Object.assign({}, this.injector.get(CxApiService)), { cmsComponentData });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLaEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFNcEMsWUFDVSxHQUFxQixFQUNyQixlQUF1QyxFQUN2QyxRQUFrQixFQUNsQixVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsTUFBaUIsRUFDSSxVQUFrQjtRQVB2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNu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L2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudCxcbiAgQ21zQ29uZmlnLFxuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3hBcGlTZXJ2aWNlIH0gZnJvbSAnLi9jeC1hcGkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeENvbXBvbmVudFdyYXBwZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hDb21wb25lbnRXcmFwcGVyOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG5cbiAgY21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2ViRWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50TWFwcGVyOiBDb21wb25lbnRNYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlckNvbXBvbmVudCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbXBvbmVudE1hcHBlci5pc1dlYkNvbXBvbmVudCh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSkpIHtcbiAgICAgIHRoaXMubGF1bmNoV2ViQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF1bmNoQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKFxuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge31cbiAgICApLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudE1hcHBlci5nZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuY21wUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBmYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdCh0aGlzLmNtcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxhdW5jaFdlYkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGF3YWl0IHRoaXMuY29tcG9uZW50TWFwcGVyLmluaXRXZWJDb21wb25lbnQoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuXG4gICAgaWYgKGVsZW1lbnROYW1lKSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gICAgICBjb25zdCBjbXNDb21wb25lbnREYXRhID0gdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCk7XG5cbiAgICAgIHRoaXMud2ViRWxlbWVudC5jeEFwaSA9IHtcbiAgICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoQ3hBcGlTZXJ2aWNlKSxcbiAgICAgICAgY21zQ29tcG9uZW50RGF0YSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICB0aGlzLndlYkVsZW1lbnRcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3QodGhpcy53ZWJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENtc0RhdGFGb3JDb21wb25lbnQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oKTogQ21zQ29tcG9uZW50RGF0YTxcbiAgICBUXG4gID4ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnVpZCxcbiAgICAgIGRhdGEkOiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YSh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEluamVjdG9yRm9yQ29tcG9uZW50KCk6IEluamVjdG9yIHtcbiAgICBjb25zdCBjb25maWdQcm92aWRlcnMgPVxuICAgICAgKHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdIHx8IHt9KVxuICAgICAgICAucHJvdmlkZXJzIHx8IFtdO1xuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDbXNDb21wb25lbnREYXRhLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29uZmlnUHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3QoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5wcm9wZXJ0aWVzLFxuICAgICAgZWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY21wUmVmKSB7XG4gICAgICB0aGlzLmNtcFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLndlYkVsZW1lbnQpIHtcbiAgICAgIHRoaXMud2ViRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==