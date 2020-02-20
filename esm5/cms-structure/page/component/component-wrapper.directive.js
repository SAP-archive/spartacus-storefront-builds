import { __assign, __awaiter, __decorate, __generator, __param, __read, __spread } from "tslib";
import { isPlatformServer } from '@angular/common';
import { ComponentRef, Directive, Inject, Injector, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsComponent, CmsConfig, CmsService, ContentSlotComponentData, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
import { ComponentMapperService } from './component-mapper.service';
import { CxApiService } from './cx-api.service';
var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.config = config;
        this.platformId = platformId;
    }
    ComponentWrapperDirective.prototype.ngOnInit = function () {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    };
    ComponentWrapperDirective.prototype.shouldRenderComponent = function () {
        var isSSR = isPlatformServer(this.platformId);
        var isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    ComponentWrapperDirective.prototype.launchComponent = function () {
        var factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    };
    ComponentWrapperDirective.prototype.launchWebComponent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elementName, cmsComponentData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                    case 1:
                        elementName = _a.sent();
                        if (elementName) {
                            this.webElement = this.renderer.createElement(elementName);
                            cmsComponentData = this.getCmsDataForComponent();
                            this.webElement.cxApi = __assign(__assign({}, this.injector.get(CxApiService)), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                                cmsComponentData: cmsComponentData });
                            this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                            if (this.cmsService.isLaunchInSmartEdit()) {
                                this.addSmartEditContract(this.webElement);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentWrapperDirective.prototype.getCmsDataForComponent = function () {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    };
    ComponentWrapperDirective.prototype.getInjectorForComponent = function () {
        var configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: __spread([
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                }
            ], configProviders),
            parent: this.injector,
        });
    };
    ComponentWrapperDirective.prototype.addSmartEditContract = function (element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    };
    ComponentWrapperDirective.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    };
    ComponentWrapperDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentMapperService },
        { type: Injector },
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
    ComponentWrapperDirective = __decorate([
        Directive({
            selector: '[cxComponentWrapper]',
        }),
        __param(7, Inject(PLATFORM_ID))
    ], ComponentWrapperDirective);
    return ComponentWrapperDirective;
}());
export { ComponentWrapperDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLaEQ7SUFNRSxtQ0FDVSxHQUFxQixFQUNyQixlQUF1QyxFQUN2QyxRQUFrQixFQUNsQixVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsTUFBaUIsRUFDSSxVQUFrQjtRQVB2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFB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SEM7U0EzSFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudCxcbiAgQ21zQ29uZmlnLFxuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3hBcGlTZXJ2aWNlIH0gZnJvbSAnLi9jeC1hcGkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeENvbXBvbmVudFdyYXBwZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hDb21wb25lbnRXcmFwcGVyOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG5cbiAgY21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2ViRWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50TWFwcGVyOiBDb21wb25lbnRNYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENtc0NvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlckNvbXBvbmVudCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbXBvbmVudE1hcHBlci5pc1dlYkNvbXBvbmVudCh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSkpIHtcbiAgICAgIHRoaXMubGF1bmNoV2ViQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF1bmNoQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKFxuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge31cbiAgICApLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudE1hcHBlci5nZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuY21wUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBmYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdCh0aGlzLmNtcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxhdW5jaFdlYkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGF3YWl0IHRoaXMuY29tcG9uZW50TWFwcGVyLmluaXRXZWJDb21wb25lbnQoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuXG4gICAgaWYgKGVsZW1lbnROYW1lKSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gICAgICBjb25zdCBjbXNDb21wb25lbnREYXRhID0gdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCk7XG5cbiAgICAgIHRoaXMud2ViRWxlbWVudC5jeEFwaSA9IHtcbiAgICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoQ3hBcGlTZXJ2aWNlKSxcbiAgICAgICAgQ21zQ29tcG9uZW50RGF0YTogY21zQ29tcG9uZW50RGF0YSwgLy8gVE9ETzogcmVtb3ZlIC8gZGVwcmVjYXRlZCBzaW5jZSAxLjAueFxuICAgICAgICBjbXNDb21wb25lbnREYXRhLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICAgIHRoaXMud2ViRWxlbWVudFxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdCh0aGlzLndlYkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q21zRGF0YUZvckNvbXBvbmVudDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PigpOiBDbXNDb21wb25lbnREYXRhPFxuICAgIFRcbiAgPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkLFxuICAgICAgZGF0YSQ6IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnVpZCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKTogSW5qZWN0b3Ige1xuICAgIGNvbnN0IGNvbmZpZ1Byb3ZpZGVycyA9XG4gICAgICAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge30pXG4gICAgICAgIC5wcm92aWRlcnMgfHwgW107XG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudERhdGEsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuZ2V0Q21zRGF0YUZvckNvbXBvbmVudCgpLFxuICAgICAgICB9LFxuICAgICAgICAuLi5jb25maWdQcm92aWRlcnMsXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnByb3BlcnRpZXMsXG4gICAgICBlbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jbXBSZWYpIHtcbiAgICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMud2ViRWxlbWVudCkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19