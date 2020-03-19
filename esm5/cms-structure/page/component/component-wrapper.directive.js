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
                            this.webElement.cxApi = __assign(__assign({}, this.injector.get(CxApiService)), { cmsComponentData: cmsComponentData });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLaEQ7SUFNRSxtQ0FDVSxHQUFxQixFQUNyQixlQUF1QyxFQUN2QyxRQUFrQixFQUNsQixVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsTUFBaUIsRUFDSSxVQUFrQjtRQVB2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFB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cG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnQsXG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWFwcGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEN4QXBpU2VydmljZSB9IGZyb20gJy4vY3gtYXBpLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDb21wb25lbnRXcmFwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN4Q29tcG9uZW50V3JhcHBlcjogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xuXG4gIGNtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdlYkVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudE1hcHBlcjogQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXJDb21wb25lbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb21wb25lbnRNYXBwZXIuaXNXZWJDb21wb25lbnQodGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUpKSB7XG4gICAgICB0aGlzLmxhdW5jaFdlYkNvbXBvbmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhdW5jaENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmVuZGVyQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIGNvbnN0IGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUiA9IChcbiAgICAgIHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdIHx8IHt9XG4gICAgKS5kaXNhYmxlU1NSO1xuICAgIHJldHVybiAhKGlzU1NSICYmIGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUik7XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRNYXBwZXIuZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZShcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXG4gICAgKTtcblxuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICB0aGlzLmNtcFJlZiA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmdldEluamVjdG9yRm9yQ29tcG9uZW50KClcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3QodGhpcy5jbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsYXVuY2hXZWJDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBhd2FpdCB0aGlzLmNvbXBvbmVudE1hcHBlci5pbml0V2ViQ29tcG9uZW50KFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcblxuICAgIGlmIChlbGVtZW50TmFtZSkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICAgICAgY29uc3QgY21zQ29tcG9uZW50RGF0YSA9IHRoaXMuZ2V0Q21zRGF0YUZvckNvbXBvbmVudCgpO1xuXG4gICAgICB0aGlzLndlYkVsZW1lbnQuY3hBcGkgPSB7XG4gICAgICAgIC4uLnRoaXMuaW5qZWN0b3IuZ2V0KEN4QXBpU2VydmljZSksXG4gICAgICAgIGNtc0NvbXBvbmVudERhdGEsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMud2ViRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=