import { __decorate } from "tslib";
import { ComponentRef, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef, } from '@angular/core';
import { ContentSlotComponentData, DynamicAttributeService, } from '@spartacus/core';
import { CmsComponentsService } from '../../services/cms-components.service';
import { CmsInjectorService } from './services/cms-injector.service';
import { ComponentHandlerService } from './services/component-handler.service';
/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, cmsComponentsService, injector, dynamicAttributeService, renderer, componentHandler, cmsInjector) {
        this.vcr = vcr;
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.componentHandler = componentHandler;
        this.cmsInjector = cmsInjector;
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
        this.dynamicAttributeService.addDynamicAttributes(elementRef.nativeElement, this.renderer, { componentData: this.cxComponentWrapper });
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
        { type: CmsInjectorService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FOztHQUVHO0FBSUg7SUFjRSxtQ0FDWSxHQUFxQixFQUNyQixvQkFBMEMsRUFDMUMsUUFBa0IsRUFDbEIsdUJBQWdELEVBQ2hELFFBQW1CLEVBQ25CLGdCQUF5QyxFQUN6QyxXQUErQjtRQU4vQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQ3hDLENBQUM7SUFFSiw0Q0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JELFNBQVMsQ0FBQztZQUNULElBQ0UsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FDcEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FDakMsRUFDRDtnQkFDQSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxtREFBZSxHQUF2QjtRQUFBLGlCQXVCQzs7UUF0QkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUMzRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsU0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDLFdBQVcsQ0FDVixnQkFBZ0IsRUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUNGLDBDQUNDLFNBQVMsQ0FBQyxVQUFDLEVBQTRCO2dCQUExQiwwQkFBVSxFQUFFLDhCQUFZO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sNENBQVEsR0FBaEIsVUFBaUIsVUFBc0I7UUFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxVQUFVLENBQUMsYUFBYSxFQUN4QixJQUFJLENBQUMsUUFBUSxFQUNiLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDOztnQkE1RGdCLGdCQUFnQjtnQkFDQyxvQkFBb0I7Z0JBQ2hDLFFBQVE7Z0JBQ08sdUJBQXVCO2dCQUN0QyxTQUFTO2dCQUNELHVCQUF1QjtnQkFDNUIsa0JBQWtCOztJQXBCbEM7UUFBUixLQUFLLEVBQUU7eUVBQThDO0lBRDNDLHlCQUF5QjtRQUhyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1NBQ2pDLENBQUM7T0FDVyx5QkFBeUIsQ0E0RXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTVFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLWNvbXBvbmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNJbmplY3RvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wb25lbnQtaGFuZGxlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdXNlZCB0byBmYWNpbGl0YXRlIGluc3RhbnRpYXRpb24gb2YgQ01TIGRyaXZlbiBkeW5hbWljIGNvbXBvbmVudHNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q29tcG9uZW50V3JhcHBlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRXcmFwcGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeENvbXBvbmVudFdyYXBwZXI6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAqXG4gICAqIFRoaXMgcHJvcGVydHkgaW4gdW5zYWZlLCBpLmUuXG4gICAqIC0gY21wUmVmIGNhbiBiZSBzZXQgbGF0ZXIgYmVjYXVzZSBvZiBsYXp5IGxvYWRpbmcgb3IgZGVmZXJyZWQgbG9hZGluZ1xuICAgKiAtIGNtcFJlZiBjYW4gYmUgbm90IHNldCBhdCBhbGwgaWYgZm9yIGV4YW1wbGUsIHdlYiBjb21wb25lbnRzIGFyZSB1c2VkIGFzIGNtcyBjb21wb25lbnRzXG4gICAqL1xuICBjbXBSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcblxuICBwcml2YXRlIGxhdW5jaGVyUmVzb3VyY2U/OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50SGFuZGxlcjogQ29tcG9uZW50SGFuZGxlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtc0luamVjdG9yOiBDbXNJbmplY3RvclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2VcbiAgICAgIC5kZXRlcm1pbmVNYXBwaW5ncyhbdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVdKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLnNob3VsZFJlbmRlcihcbiAgICAgICAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxhdW5jaENvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IGNvbXBvbmVudE1hcHBpbmcgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldE1hcHBpbmcoXG4gICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZVxuICAgICk7XG5cbiAgICBpZiAoIWNvbXBvbmVudE1hcHBpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxhdW5jaGVyUmVzb3VyY2UgPSB0aGlzLmNvbXBvbmVudEhhbmRsZXJcbiAgICAgIC5nZXRMYXVuY2hlcihcbiAgICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgdGhpcy52Y3IsXG4gICAgICAgIHRoaXMuY21zSW5qZWN0b3IuZ2V0SW5qZWN0b3IoXG4gICAgICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGUsXG4gICAgICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIudWlkLFxuICAgICAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgPy5zdWJzY3JpYmUoKHsgZWxlbWVudFJlZiwgY29tcG9uZW50UmVmIH0pID0+IHtcbiAgICAgICAgdGhpcy5jbXBSZWYgPSBjb21wb25lbnRSZWY7XG4gICAgICAgIHRoaXMuZGVjb3JhdGUoZWxlbWVudFJlZik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGUoZWxlbWVudFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgeyBjb21wb25lbnREYXRhOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlciB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxhdW5jaGVyUmVzb3VyY2UpIHtcbiAgICAgIHRoaXMubGF1bmNoZXJSZXNvdXJjZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19