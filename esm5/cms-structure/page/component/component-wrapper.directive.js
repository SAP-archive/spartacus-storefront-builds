import { __decorate } from "tslib";
import { ComponentRef, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef, } from '@angular/core';
import { CmsService, ContentSlotComponentData, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentsService } from '../../services/cms-components.service';
import { ComponentHandlerService } from './services/component-handler.service';
import { CmsInjectorService } from './services/cms-injector.service';
/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, cmsComponentsService, injector, dynamicAttributeService, renderer, componentHandler, cmsInjector, cmsService // TODO: remove, move smartedit detection responsibility to different layer/service
    ) {
        this.vcr = vcr;
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.componentHandler = componentHandler;
        this.cmsInjector = cmsInjector;
        this.cmsService = cmsService;
    }
    ComponentWrapperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.cmsComponentsService
            .determineMappings([this.cxComponentWrapper.flexType])
            .subscribe(function () {
            if (_this.cmsComponentsService.shouldRender(_this.cxComponentWrapper.flexType)) {
                _this.launchComponent();
            }
        });
    };
    ComponentWrapperDirective.prototype.launchComponent = function () {
        var _this = this;
        var _a;
        var componentMapping = this.cmsComponentsService.getMapping(this.cxComponentWrapper.flexType);
        if (!componentMapping) {
            return;
        }
        this.launcherResource = (_a = this.componentHandler
            .getLauncher(componentMapping, this.vcr, this.cmsInjector.getInjector(this.cxComponentWrapper.flexType, this.cxComponentWrapper.uid, this.injector))) === null || _a === void 0 ? void 0 : _a.subscribe(function (_a) {
            var elementRef = _a.elementRef, componentRef = _a.componentRef;
            _this.cmpRef = componentRef;
            _this.decorate(elementRef);
        });
    };
    ComponentWrapperDirective.prototype.decorate = function (elementRef) {
        if (this.cmsService.isLaunchInSmartEdit()) {
            this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, elementRef.nativeElement, this.renderer);
        }
    };
    ComponentWrapperDirective.prototype.ngOnDestroy = function () {
        if (this.launcherResource) {
            this.launcherResource.unsubscribe();
        }
    };
    ComponentWrapperDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: CmsComponentsService },
        { type: Injector },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ComponentHandlerService },
        { type: CmsInjectorService },
        { type: CmsService // TODO: remove, move smartedit detection responsibility to different layer/service
         }
    ]; };
    __decorate([
        Input()
    ], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
    ComponentWrapperDirective = __decorate([
        Directive({
            selector: '[cxComponentWrapper]',
        })
    ], ComponentWrapperDirective);
    return ComponentWrapperDirective;
}());
export { ComponentWrapperDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRTs7R0FFRztBQUlIO0lBY0UsbUNBQ1ksR0FBcUIsRUFDckIsb0JBQTBDLEVBQzFDLFFBQWtCLEVBQ2xCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixnQkFBeUMsRUFDekMsV0FBK0IsRUFDL0IsVUFBc0IsQ0FBQyxtRkFBbUY7O1FBUDFHLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMvQixDQUFDO0lBRUosNENBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRCxTQUFTLENBQUM7WUFDVCxJQUNFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQ3BDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQ2pDLEVBQ0Q7Z0JBQ0EsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sbURBQWUsR0FBdkI7UUFBQSxpQkF1QkM7O1FBdEJDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FDM0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FDakMsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLFNBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUMxQyxXQUFXLENBQ1YsZ0JBQWdCLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQzNCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FDRiwwQ0FDQyxTQUFTLENBQUMsVUFBQyxFQUE0QjtnQkFBMUIsMEJBQVUsRUFBRSw4QkFBWTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDRDQUFRLEdBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFDbEMsVUFBVSxDQUFDLGFBQWEsRUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7O2dCQS9EZ0IsZ0JBQWdCO2dCQUNDLG9CQUFvQjtnQkFDaEMsUUFBUTtnQkFDTyx1QkFBdUI7Z0JBQ3RDLFNBQVM7Z0JBQ0QsdUJBQXVCO2dCQUM1QixrQkFBa0I7Z0JBQ25CLFVBQVUsQ0FBQyxtRkFBbUY7OztJQXJCN0c7UUFBUixLQUFLLEVBQUU7eUVBQThDO0lBRDNDLHlCQUF5QjtRQUhyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1NBQ2pDLENBQUM7T0FDVyx5QkFBeUIsQ0ErRXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9FWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJbmplY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdXNlZCB0byBmYWNpbGl0YXRlIGluc3RhbnRpYXRpb24gb2YgQ01TIGRyaXZlbiBkeW5hbWljIGNvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgaW4gdW5zYWZlLCBpLmUuXG4gICAqIC0gY21wUmVmIGNhbiBiZSBzZXQgbGF0ZXIgYmVjYXVzZSBvZiBsYXp5IGxvYWRpbmcgb3IgZGVmZXJyZWQgbG9hZGluZ1xuICAgKiAtIGNtcFJlZiBjYW4gYmUgbm90IHNldCBhdCBhbGwgaWYgZm9yIGV4YW1wbGUsIHdlYiBjb21wb25lbnRzIGFyZSB1c2VkIGFzIGNtcyBjb21wb25lbnRzXG4gICAqL1xuICBjbXBSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcblxuICBwcml2YXRlIGxhdW5jaGVyUmVzb3VyY2U/OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50SGFuZGxlcjogQ29tcG9uZW50SGFuZGxlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc0luamVjdG9yOiBDbXNJbmplY3RvclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UgLy8gVE9ETzogcmVtb3ZlLCBtb3ZlIHNtYXJ0ZWRpdCBkZXRlY3Rpb24gcmVzcG9uc2liaWxpdHkgdG8gZGlmZmVyZW50IGxheWVyL3NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2VcbiAgICAgIC5kZXRlcm1pbmVNYXBwaW5ncyhbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLnNob3VsZFJlbmRlcihcbiAgICAgICAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxhdW5jaENvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudE1hcHBpbmcgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldE1hcHBpbmcoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZVxuICAgICk7XG5cbiAgICBpZiAoIWNvbXBvbmVudE1hcHBpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxhdW5jaGVyUmVzb3VyY2UgPSB0aGlzLmNvbXBvbmVudEhhbmRsZXJcbiAgICAgIC5nZXRMYXVuY2hlcihcbiAgICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgdGhpcy52Y3IsXG4gICAgICAgIHRoaXMuY21zSW5qZWN0b3IuZ2V0SW5qZWN0b3IoXG4gICAgICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkLFxuICAgICAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgPy5zdWJzY3JpYmUoKHsgZWxlbWVudFJlZiwgY29tcG9uZW50UmVmIH0pID0+IHtcbiAgICAgICAgdGhpcy5jbXBSZWYgPSBjb21wb25lbnRSZWY7XG4gICAgICAgIHRoaXMuZGVjb3JhdGUoZWxlbWVudFJlZik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGUoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGlmICh0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5wcm9wZXJ0aWVzLFxuICAgICAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMucmVuZGVyZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF1bmNoZXJSZXNvdXJjZSkge1xuICAgICAgdGhpcy5sYXVuY2hlclJlc291cmNlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=