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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBRUwsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRDtJQVNFLG1DQUNVLEdBQXFCLEVBQ3JCLGVBQXVDLEVBQ3ZDLFFBQWtCLEVBQ2xCLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixNQUFpQixFQUNJLFVBQWtCO1FBUHZDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzlDLENBQUM7Ozs7SUFFSiw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU8seURBQXFCOzs7O0lBQTdCOztZQUNRLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUN6Qyx3QkFBd0IsR0FBRyxDQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUNsRSxDQUFDLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksd0JBQXdCLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVPLG1EQUFlOzs7O0lBQXZCOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUM1RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUNqQztRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FDcEMsT0FBTyxFQUNQLFNBQVMsRUFDVCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FDL0IsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0Q7U0FDRjtJQUNILENBQUM7Ozs7O0lBRWEsc0RBQWtCOzs7O0lBQWhDOzs7Ozs0QkFDc0IscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FDZCxFQUFBOzt3QkFISyxXQUFXLEdBQUcsU0FHbkI7d0JBRUQsSUFBSSxXQUFXLEVBQUU7NEJBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFFM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLHdCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFDbEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQ2hELENBQUM7NEJBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQzVDLElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7eUJBQ0g7Ozs7O0tBQ0Y7Ozs7OztJQUVPLDBEQUFzQjs7Ozs7SUFBOUI7UUFHRSxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7U0FDckUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8sMkRBQXVCOzs7O0lBQS9COztZQUNRLGVBQWUsR0FDbkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hFLFNBQVMsSUFBSSxFQUFFO1FBQ3BCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTO2dCQUNQO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7aUJBQ3hDO2VBQ0UsZUFBZSxDQUNuQjtZQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx3REFBb0I7Ozs7O0lBQTVCLFVBQTZCLE9BQWdCO1FBQzNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFDbEMsT0FBTyxFQUNQLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUM1QyxJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkExSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQWZDLGdCQUFnQjtnQkFVVCxzQkFBc0I7Z0JBaEI3QixRQUFRO2dCQVdSLFVBQVU7Z0JBRVYsdUJBQXVCO2dCQVJ2QixTQUFTO2dCQUtULFNBQVM7Z0JBMEJrQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7O3FDQWJwQixLQUFLOztJQXVIUixnQ0FBQztDQUFBLEFBM0hELElBMkhDO1NBeEhZLHlCQUF5Qjs7O0lBQ3BDLHVEQUFzRDs7SUFFdEQsMkNBQTBCOztJQUMxQiwrQ0FBZ0I7Ozs7O0lBR2Qsd0NBQTZCOzs7OztJQUM3QixvREFBK0M7Ozs7O0lBQy9DLDZDQUEwQjs7Ozs7SUFDMUIsK0NBQThCOzs7OztJQUM5Qiw0REFBd0Q7Ozs7O0lBQ3hELDZDQUEyQjs7Ozs7SUFDM0IsMkNBQXlCOzs7OztJQUN6QiwrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50LFxuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IENvbXBvbmVudE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDeEFwaVNlcnZpY2UgfSBmcm9tICcuL2N4LWFwaS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICBjbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3ZWJFbGVtZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRNYXBwZXI6IENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNvbmZpZzogQ21zQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyQ29tcG9uZW50KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnRNYXBwZXIuaXNXZWJDb21wb25lbnQodGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUpKSB7XG4gICAgICB0aGlzLmxhdW5jaFdlYkNvbXBvbmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhdW5jaENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmVuZGVyQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU1NSID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgIGNvbnN0IGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUiA9IChcbiAgICAgIHRoaXMuY29uZmlnLmNtc0NvbXBvbmVudHNbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdIHx8IHt9XG4gICAgKS5kaXNhYmxlU1NSO1xuICAgIHJldHVybiAhKGlzU1NSICYmIGlzQ29tcG9uZW50RGlzYWJsZWRJblNTUik7XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRNYXBwZXIuZ2V0Q29tcG9uZW50RmFjdG9yeUJ5Q29kZShcbiAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXG4gICAgKTtcblxuICAgIGlmIChmYWN0b3J5KSB7XG4gICAgICB0aGlzLmNtcFJlZiA9IHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgZmFjdG9yeSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmdldEluamVjdG9yRm9yQ29tcG9uZW50KClcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3QodGhpcy5jbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsYXVuY2hXZWJDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBhd2FpdCB0aGlzLmNvbXBvbmVudE1hcHBlci5pbml0V2ViQ29tcG9uZW50KFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcblxuICAgIGlmIChlbGVtZW50TmFtZSkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICAgICAgdGhpcy53ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChDeEFwaVNlcnZpY2UpLFxuICAgICAgICBDbXNDb21wb25lbnREYXRhOiB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICB0aGlzLndlYkVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19