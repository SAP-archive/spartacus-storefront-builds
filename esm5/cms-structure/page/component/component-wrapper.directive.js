/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformServer } from '@angular/common';
import { Directive, Inject, Injector, Input, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, } from '@spartacus/core';
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
            var elementName, cmsComponentData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                    case 1:
                        elementName = _a.sent();
                        if (elementName) {
                            this.webElement = this.renderer.createElement(elementName);
                            cmsComponentData = this.getCmsDataForComponent();
                            this.webElement.cxApi = tslib_1.__assign({}, this.injector.get(CxApiService), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
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
            this.webElement.remove();
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
    ComponentWrapperDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBRUwsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQVNFLG1DQUNVLEdBQXFCLEVBQ3JCLGVBQXVDLEVBQ3ZDLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixNQUFpQixFQUNJLFVBQWtCO1FBUHZDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlDLENBQUM7Ozs7SUFFSiw0Q0FBUTs7O0lBQVI7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OztJQUMxQiwrQ0FBOEI7Ozs7O0lBQzlCLDREQUF3RDs7Ozs7SUFDeEQsNkNBQTJCOzs7OztJQUMzQiwyQ0FBeUI7Ozs7O0lBQ3pCLCtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnQsXG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWFwcGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEN4QXBpU2VydmljZSB9IGZyb20gJy4vY3gtYXBpLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDb21wb25lbnRXcmFwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN4Q29tcG9uZW50V3JhcHBlcjogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xuXG4gIGNtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdlYkVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudE1hcHBlcjogQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXJDb21wb25lbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudE1hcHBlci5pc1dlYkNvbXBvbmVudCh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSkpIHtcbiAgICAgIHRoaXMubGF1bmNoV2ViQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF1bmNoQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKFxuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge31cbiAgICApLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudE1hcHBlci5nZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuY21wUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBmYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdCh0aGlzLmNtcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxhdW5jaFdlYkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGF3YWl0IHRoaXMuY29tcG9uZW50TWFwcGVyLmluaXRXZWJDb21wb25lbnQoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuXG4gICAgaWYgKGVsZW1lbnROYW1lKSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gICAgICBjb25zdCBjbXNDb21wb25lbnREYXRhID0gdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCk7XG5cbiAgICAgIHRoaXMud2ViRWxlbWVudC5jeEFwaSA9IHtcbiAgICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoQ3hBcGlTZXJ2aWNlKSxcbiAgICAgICAgQ21zQ29tcG9uZW50RGF0YTogY21zQ29tcG9uZW50RGF0YSwgLy8gVE9ETzogcmVtb3ZlIC8gZGVwcmVjYXRlZCBzaW5jZSAxLjAueFxuICAgICAgICBjbXNDb21wb25lbnREYXRhLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICAgIHRoaXMud2ViRWxlbWVudFxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdCh0aGlzLndlYkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q21zRGF0YUZvckNvbXBvbmVudDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PigpOiBDbXNDb21wb25lbnREYXRhPFxuICAgIFRcbiAgPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkLFxuICAgICAgZGF0YSQ6IHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhKHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnVpZCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKTogSW5qZWN0b3Ige1xuICAgIGNvbnN0IGNvbmZpZ1Byb3ZpZGVycyA9XG4gICAgICAodGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge30pXG4gICAgICAgIC5wcm92aWRlcnMgfHwgW107XG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudERhdGEsXG4gICAgICAgICAgdXNlVmFsdWU6IHRoaXMuZ2V0Q21zRGF0YUZvckNvbXBvbmVudCgpLFxuICAgICAgICB9LFxuICAgICAgICAuLi5jb25maWdQcm92aWRlcnMsXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnByb3BlcnRpZXMsXG4gICAgICBlbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jbXBSZWYpIHtcbiAgICAgIHRoaXMuY21wUmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMud2ViRWxlbWVudCkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19