/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformServer } from '@angular/common';
import { ChangeDetectorRef, Directive, Inject, Injector, Input, PLATFORM_ID, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsConfig, CmsService, CxApiService, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentData } from '../model/cms-component-data';
import { ComponentMapperService } from './component-mapper.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFTRSxtQ0FDVSxHQUFxQixFQUNyQixlQUF1QyxFQUN2QyxRQUFrQixFQUNsQixVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsRUFBcUIsRUFDckIsTUFBaUIsRUFDSSxVQUFrQjtRQVJ2QyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM5QyxDQUFDOzs7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QzlCLDREQUF3RDs7Ozs7SUFDeEQsNkNBQTJCOzs7OztJQUMzQix1Q0FBNkI7Ozs7O0lBQzdCLDJDQUF5Qjs7Ozs7SUFDekIsK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb21wb25lbnQsXG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDeEFwaVNlcnZpY2UsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hDb21wb25lbnRXcmFwcGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFdyYXBwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN4Q29tcG9uZW50V3JhcHBlcjogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xuXG4gIGNtcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHdlYkVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudE1hcHBlcjogQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29uZmlnOiBDbXNDb25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXJDb21wb25lbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudE1hcHBlci5pc1dlYkNvbXBvbmVudCh0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZSkpIHtcbiAgICAgIHRoaXMubGF1bmNoV2ViQ29tcG9uZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGF1bmNoQ29tcG9uZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZW5kZXJDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTU1IgPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgY29uc3QgaXNDb21wb25lbnREaXNhYmxlZEluU1NSID0gKFxuICAgICAgdGhpcy5jb25maWcuY21zQ29tcG9uZW50c1t0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZV0gfHwge31cbiAgICApLmRpc2FibGVTU1I7XG4gICAgcmV0dXJuICEoaXNTU1IgJiYgaXNDb21wb25lbnREaXNhYmxlZEluU1NSKTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudE1hcHBlci5nZXRDb21wb25lbnRGYWN0b3J5QnlDb2RlKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuY21wUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBmYWN0b3J5LFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3JGb3JDb21wb25lbnQoKVxuICAgICAgKTtcblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3QodGhpcy5jbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsYXVuY2hXZWJDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBhd2FpdCB0aGlzLmNvbXBvbmVudE1hcHBlci5pbml0V2ViQ29tcG9uZW50KFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcblxuICAgIGlmIChlbGVtZW50TmFtZSkge1xuICAgICAgdGhpcy53ZWJFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICAgICAgdGhpcy53ZWJFbGVtZW50LmN4QXBpID0ge1xuICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChDeEFwaVNlcnZpY2UpLFxuICAgICAgICBDbXNDb21wb25lbnREYXRhOiB0aGlzLmdldENtc0RhdGFGb3JDb21wb25lbnQoKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICB0aGlzLndlYkVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KCk6IENtc0NvbXBvbmVudERhdGE8XG4gICAgVFxuICA+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci51aWQsXG4gICAgICBkYXRhJDogdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEodGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmplY3RvckZvckNvbXBvbmVudCgpOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jbXNDb21wb25lbnRzW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSB8fCB7fSlcbiAgICAgICAgLnByb3ZpZGVycyB8fCBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhRm9yQ29tcG9uZW50KCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIucHJvcGVydGllcyxcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNtcFJlZikge1xuICAgICAgdGhpcy5jbXBSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy53ZWJFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy53ZWJFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19