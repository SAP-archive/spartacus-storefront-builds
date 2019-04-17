/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, Injector, Input, Renderer2, ViewContainerRef, Inject, PLATFORM_ID, } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, ComponentMapperService, CxApiService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
import { isPlatformServer } from '@angular/common';
var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, cd, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    ComponentWrapperDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.shouldRenderComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        var isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.launchComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            this.cd.detectChanges();
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.launchWebComponent = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var elementName;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                    case 1:
                        elementName = _a.sent();
                        if (elementName) {
                            this.webElement = this.renderer.createElement(elementName);
                            this.webElement.cxApi = tslib_1.__assign({}, this.injector.get(CxApiService), { CmsComponentData: this.getCmsDataForComponent() });
                            this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @template T
     * @return {?}
     */
    ComponentWrapperDirective.prototype.getCmsDataForComponent = /**
     * @private
     * @template T
     * @return {?}
     */
    function () {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.getInjectorForComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: tslib_1.__spread([
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                }
            ], configProviders),
            parent: this.injector,
        });
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ComponentWrapperDirective.prototype.addSmartEditContract = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    };
    /**
     * @return {?}
     */
    ComponentWrapperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.renderer.removeChild(this.vcr.element.nativeElement.parentElement, this.webElement);
        }
    };
    ComponentWrapperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxComponentWrapper]',
                },] }
    ];
    /** @nocollapse */
    ComponentWrapperDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentMapperService },
        { type: Injector },
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ComponentWrapperDirective.propDecorators = {
        cxComponentWrapper: [{ type: Input }]
    };
    return ComponentWrapperDirective;
}());
export { ComponentWrapperDirective };
if (false) {
    /** @type {?} */
    ComponentWrapperDirective.prototype.cxComponentWrapper;
    /** @type {?} */
    ComponentWrapperDirective.prototype.cmpRef;
    /** @type {?} */
    ComponentWrapperDirective.prototype.webElement;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.componentMapper;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.dynamicAttributeService;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLFlBQVksR0FFYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5EO0lBU0UsbUNBQ1UsR0FBcUIsRUFDckIsZUFBdUMsRUFDdkMsUUFBa0IsRUFDbEIsVUFBc0IsRUFDdEIsdUJBQWdELEVBQ2hELFFBQW1CLEVBQ25CLEVBQXFCLEVBQ3JCLE1BQWlCLEVBQ0ksVUFBa0I7UUFSdkMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNJLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDOUMsQ0FBQzs7OztJQUVKLDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FB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O0lBQzNCLHVDQUE2Qjs7Ozs7SUFDN0IsMkNBQXlCOzs7OztJQUN6QiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnQsXG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gIENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gIEN4QXBpU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICBjbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3ZWJFbGVtZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRNYXBwZXI6IENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyQ29tcG9uZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRNYXBwZXIuaXNXZWJDb21wb25lbnQodGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUpKSB7XG4gICAgICB0aGlzLmxhdW5jaFdlYkNvbXBvbmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhdW5jaENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmVuZGVyQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIGNvbnN0IGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUiA9IChcbiAgICAgIHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdIHx8IHt9XG4gICAgKS5kaXNhYmxlU1NSO1xuICAgIHJldHVybiAhKGlzU1NSICYmIGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUik7XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRNYXBwZXIuZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZShcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXG4gICAgKTtcblxuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICB0aGlzLmNtcFJlZiA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmdldEluamVjdG9yRm9yQ29tcG9uZW50KClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMuY21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbGF1bmNoV2ViQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gYXdhaXQgdGhpcy5jb21wb25lbnRNYXBwZXIuaW5pdFdlYkNvbXBvbmVudChcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlLFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG5cbiAgICBpZiAoZWxlbWVudE5hbWUpIHtcbiAgICAgIHRoaXMud2ViRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgICAgIHRoaXMud2ViRWxlbWVudC5jeEFwaSA9IHtcbiAgICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoQ3hBcGlTZXJ2aWNlKSxcbiAgICAgICAgQ21zQ29tcG9uZW50RGF0YTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q21zRGF0YUZvckNvbXBvbmVudDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PigpOiBDbXNDb21wb25lbnREYXRhPFxuICAgIFRcbiAgPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkLFxuICAgICAgZGF0YSQ6IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnVpZCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKTogSW5qZWN0b3Ige1xuICAgIGNvbnN0IGNvbmZpZ1Byb3ZpZGVycyA9XG4gICAgICAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge30pXG4gICAgICAgIC5wcm92aWRlcnMgfHwgW107XG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudERhdGEsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuZ2V0Q21zRGF0YUZvckNvbXBvbmVudCgpLFxuICAgICAgICB9LFxuICAgICAgICAuLi5jb25maWdQcm92aWRlcnMsXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnByb3BlcnRpZXMsXG4gICAgICBlbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jbXBSZWYpIHtcbiAgICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMud2ViRWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcbiAgICAgICAgdGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICAgIHRoaXMud2ViRWxlbWVudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==