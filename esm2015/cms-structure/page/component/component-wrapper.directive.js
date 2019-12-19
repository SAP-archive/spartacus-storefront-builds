/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformServer } from '@angular/common';
import { Directive, Inject, Injector, Input, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
import { ComponentMapperService } from './component-mapper.service';
import { CxApiService } from './cx-api.service';
export class ComponentWrapperDirective {
    /**
     * @param {?} vcr
     * @param {?} componentMapper
     * @param {?} injector
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} config
     * @param {?} platformId
     */
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
    /**
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    shouldRenderComponent() {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @private
     * @return {?}
     */
    launchComponent() {
        /** @type {?} */
        const factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    launchWebComponent() {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!ComponentWrapperDirective} */ function* () {
            /** @type {?} */
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                /** @type {?} */
                const cmsComponentData = this.getCmsDataForComponent();
                this.webElement.cxApi = Object.assign({}, this.injector.get(CxApiService), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                    cmsComponentData });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                if (this.cmsService.isLaunchInSmartEdit()) {
                    this.addSmartEditContract(this.webElement);
                }
            }
        });
    }
    /**
     * @private
     * @template T
     * @return {?}
     */
    getCmsDataForComponent() {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getInjectorForComponent() {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    addSmartEditContract(element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    }
}
ComponentWrapperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxComponentWrapper]',
            },] }
];
/** @nocollapse */
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
ComponentWrapperDirective.propDecorators = {
    cxComponentWrapper: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBRUwsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtoRCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7Ozs7OztJQU1wQyxZQUNVLEdBQXFCLEVBQ3JCLGVBQXVDLEVBQ3ZDLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixNQUFpQixFQUNJLFVBQWtCO1FBUHZDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlD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cnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50LFxuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IENvbXBvbmVudE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDeEFwaVNlcnZpY2UgfSBmcm9tICcuL2N4LWFwaS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICBjbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3ZWJFbGVtZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRNYXBwZXI6IENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyQ29tcG9uZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29tcG9uZW50TWFwcGVyLmlzV2ViQ29tcG9uZW50KHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlKSkge1xuICAgICAgdGhpcy5sYXVuY2hXZWJDb21wb25lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXVuY2hDb21wb25lbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJlbmRlckNvbXBvbmVudCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc1NTUiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBjb25zdCBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IgPSAoXG4gICAgICB0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fVxuICAgICkuZGlzYWJsZVNTUjtcbiAgICByZXR1cm4gIShpc1NTUiAmJiBpc0NvbXBvbmVudERpc2FibGVkSW5TU1IpO1xuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50TWFwcGVyLmdldENvbXBvbmVudEZhY3RvcnlCeUNvZGUoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZVxuICAgICk7XG5cbiAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgdGhpcy5jbXBSZWYgPSB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGZhY3RvcnksXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5nZXRJbmplY3RvckZvckNvbXBvbmVudCgpXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMuY21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbGF1bmNoV2ViQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gYXdhaXQgdGhpcy5jb21wb25lbnRNYXBwZXIuaW5pdFdlYkNvbXBvbmVudChcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlLFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG5cbiAgICBpZiAoZWxlbWVudE5hbWUpIHtcbiAgICAgIHRoaXMud2ViRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgICAgIGNvbnN0IGNtc0NvbXBvbmVudERhdGEgPSB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKTtcblxuICAgICAgdGhpcy53ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChDeEFwaVNlcnZpY2UpLFxuICAgICAgICBDbXNDb21wb25lbnREYXRhOiBjbXNDb21wb25lbnREYXRhLCAvLyBUT0RPOiByZW1vdmUgLyBkZXByZWNhdGVkIHNpbmNlIDEuMC54XG4gICAgICAgIGNtc0NvbXBvbmVudERhdGEsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHRoaXMud2ViRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLndlYkVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=