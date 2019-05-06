/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformServer } from '@angular/common';
import { ChangeDetectorRef, Directive, Inject, Injector, Input, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsConfig, CmsService, ComponentMapperService, CxApiService, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
export class ComponentWrapperDirective {
    /**
     * @param {?} vcr
     * @param {?} componentMapper
     * @param {?} injector
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} cd
     * @param {?} config
     * @param {?} platformId
     */
    constructor(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, cd, config, platformId) {
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
            this.cd.detectChanges();
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                this.webElement.cxApi = Object.assign({}, this.injector.get(CxApiService), { CmsComponentData: this.getCmsDataForComponent() });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
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
            this.renderer.removeChild(this.vcr.element.nativeElement.parentElement, this.webElement);
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
    { type: ChangeDetectorRef },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixzQkFBc0IsRUFFdEIsWUFBWSxFQUNaLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSy9ELE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7Ozs7OztJQU1wQyxZQUNVLEdBQXFCLEVBQ3JCLGVBQXVDLEVBQ3ZDLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixFQUFxQixFQUNyQixNQUFpQixFQUNJLFVBQWtCO1FBUnZDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FDckIsS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7O2NBQ3pDLHdCQUF3QixHQUFHLENBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQ2xFLENBQUMsVUFBVTtRQUNaLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRU8sZUFBZTs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FDNUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FDakM7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQ3BDLE9BQU8sRUFDUCxTQUFTLEVBQ1QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQy9CLENBQUM7WUFFRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0Q7U0FDRjtJQUNILENBQUM7Ozs7O0lBRWEsa0JBQWtCOzs7a0JBQ3hCLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQ2hDLElBQUksQ0FBQyxRQUFRLENBQ2Q7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUzRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUsscUJBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUNsQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FDaEQsQ0FBQztnQkFFRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQzthQUNIO1FBQ0gsQ0FBQztLQUFBOzs7Ozs7SUFFTyxzQkFBc0I7UUFHNUIsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHVCQUF1Qjs7Y0FDdkIsZUFBZSxHQUNuQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEUsU0FBUyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFO2lCQUN4QztnQkFDRCxHQUFHLGVBQWU7YUFDbkI7WUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsT0FBZ0I7UUFDM0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUNsQyxPQUFPLEVBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUM1QyxJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUE3SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFmQyxnQkFBZ0I7WUFNaEIsc0JBQXNCO1lBWnRCLFFBQVE7WUFXUixVQUFVO1lBSVYsdUJBQXVCO1lBVnZCLFNBQVM7WUFUVCxpQkFBaUI7WUFjakIsU0FBUztZQTJCa0MsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7OztpQ0FkcEIsS0FBSzs7OztJQUFOLHVEQUFzRDs7SUFFdEQsMkNBQTBCOztJQUMxQiwrQ0FBZ0I7Ozs7O0lBR2Qsd0NBQTZCOzs7OztJQUM3QixvREFBK0M7Ozs7O0lBQy9DLDZDQUEwQjs7Ozs7SUFDMUIsK0NBQThCOzs7OztJQUM5Qiw0REFBd0Q7Ozs7O0lBQ3hELDZDQUEyQjs7Ozs7SUFDM0IsdUNBQTZCOzs7OztJQUM3QiwyQ0FBeUI7Ozs7O0lBQ3pCLCtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50LFxuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgQ3hBcGlTZXJ2aWNlLFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDb21wb25lbnRXcmFwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN4Q29tcG9uZW50V3JhcHBlcjogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xuXG4gIGNtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdlYkVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudE1hcHBlcjogQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXJDb21wb25lbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudE1hcHBlci5pc1dlYkNvbXBvbmVudCh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSkpIHtcbiAgICAgIHRoaXMubGF1bmNoV2ViQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF1bmNoQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKFxuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge31cbiAgICApLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudE1hcHBlci5nZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuY21wUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBmYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3QodGhpcy5jbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsYXVuY2hXZWJDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBhd2FpdCB0aGlzLmNvbXBvbmVudE1hcHBlci5pbml0V2ViQ29tcG9uZW50KFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcblxuICAgIGlmIChlbGVtZW50TmFtZSkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICAgICAgdGhpcy53ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChDeEFwaVNlcnZpY2UpLFxuICAgICAgICBDbXNDb21wb25lbnREYXRhOiB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICB0aGlzLndlYkVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19