import { __decorate } from "tslib";
import { ChangeDetectorRef, ComponentRef, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, Renderer2, ViewContainerRef, } from '@angular/core';
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
            _this.injector.get(ChangeDetectorRef).markForCheck();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbXBvbmVudC9jb21wb25lbnQtd3JhcHBlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUvRTs7R0FFRztBQUlIO0lBY0UsbUNBQ1ksR0FBcUIsRUFDckIsb0JBQTBDLEVBQzFDLFFBQWtCLEVBQ2xCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixnQkFBeUMsRUFDekMsV0FBK0I7UUFOL0IsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN4QyxDQUFDO0lBRUosNENBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRCxTQUFTLENBQUM7WUFDVCxJQUNFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQ3BDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQ2pDLEVBQ0Q7Z0JBQ0EsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sbURBQWUsR0FBdkI7UUFBQSxpQkF3QkM7O1FBdkJDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FDM0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FDakMsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLFNBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUMxQyxXQUFXLENBQ1YsZ0JBQWdCLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQzNCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FDRiwwQ0FDQyxTQUFTLENBQUMsVUFBQyxFQUE0QjtnQkFBMUIsMEJBQVUsRUFBRSw4QkFBWTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sNENBQVEsR0FBaEIsVUFBaUIsVUFBc0I7UUFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxVQUFVLENBQUMsYUFBYSxFQUN4QixJQUFJLENBQUMsUUFBUSxFQUNiLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDOztnQkE3RGdCLGdCQUFnQjtnQkFDQyxvQkFBb0I7Z0JBQ2hDLFFBQVE7Z0JBQ08sdUJBQXVCO2dCQUN0QyxTQUFTO2dCQUNELHVCQUF1QjtnQkFDNUIsa0JBQWtCOztJQXBCbEM7UUFBUixLQUFLLEVBQUU7eUVBQThDO0lBRDNDLHlCQUF5QjtRQUhyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1NBQ2pDLENBQUM7T0FDVyx5QkFBeUIsQ0E2RXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQTdFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zSW5qZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbXMtaW5qZWN0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tcG9uZW50LWhhbmRsZXIuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHVzZWQgdG8gZmFjaWxpdGF0ZSBpbnN0YW50aWF0aW9uIG9mIENNUyBkcml2ZW4gZHluYW1pYyBjb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeENvbXBvbmVudFdyYXBwZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50V3JhcHBlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hDb21wb25lbnRXcmFwcGVyOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGluIHVuc2FmZSwgaS5lLlxuICAgKiAtIGNtcFJlZiBjYW4gYmUgc2V0IGxhdGVyIGJlY2F1c2Ugb2YgbGF6eSBsb2FkaW5nIG9yIGRlZmVycmVkIGxvYWRpbmdcbiAgICogLSBjbXBSZWYgY2FuIGJlIG5vdCBzZXQgYXQgYWxsIGlmIGZvciBleGFtcGxlLCB3ZWIgY29tcG9uZW50cyBhcmUgdXNlZCBhcyBjbXMgY29tcG9uZW50c1xuICAgKi9cbiAgY21wUmVmPzogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgcHJpdmF0ZSBsYXVuY2hlclJlc291cmNlPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEhhbmRsZXI6IENvbXBvbmVudEhhbmRsZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjbXNJbmplY3RvcjogQ21zSW5qZWN0b3JTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlXG4gICAgICAuZGV0ZXJtaW5lTWFwcGluZ3MoW3RoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlXSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRzU2VydmljZS5zaG91bGRSZW5kZXIoXG4gICAgICAgICAgICB0aGlzLmN4Q29tcG9uZW50V3JhcHBlci5mbGV4VHlwZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sYXVuY2hDb21wb25lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb21wb25lbnRNYXBwaW5nID0gdGhpcy5jbXNDb21wb25lbnRzU2VydmljZS5nZXRNYXBwaW5nKFxuICAgICAgdGhpcy5jeENvbXBvbmVudFdyYXBwZXIuZmxleFR5cGVcbiAgICApO1xuXG4gICAgaWYgKCFjb21wb25lbnRNYXBwaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sYXVuY2hlclJlc291cmNlID0gdGhpcy5jb21wb25lbnRIYW5kbGVyXG4gICAgICAuZ2V0TGF1bmNoZXIoXG4gICAgICAgIGNvbXBvbmVudE1hcHBpbmcsXG4gICAgICAgIHRoaXMudmNyLFxuICAgICAgICB0aGlzLmNtc0luamVjdG9yLmdldEluamVjdG9yKFxuICAgICAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLmZsZXhUeXBlLFxuICAgICAgICAgIHRoaXMuY3hDb21wb25lbnRXcmFwcGVyLnVpZCxcbiAgICAgICAgICB0aGlzLmluamVjdG9yXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgID8uc3Vic2NyaWJlKCh7IGVsZW1lbnRSZWYsIGNvbXBvbmVudFJlZiB9KSA9PiB7XG4gICAgICAgIHRoaXMuY21wUmVmID0gY29tcG9uZW50UmVmO1xuICAgICAgICB0aGlzLmRlY29yYXRlKGVsZW1lbnRSZWYpO1xuICAgICAgICB0aGlzLmluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZikubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb3JhdGUoZWxlbWVudFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgeyBjb21wb25lbnREYXRhOiB0aGlzLmN4Q29tcG9uZW50V3JhcHBlciB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxhdW5jaGVyUmVzb3VyY2UpIHtcbiAgICAgIHRoaXMubGF1bmNoZXJSZXNvdXJjZS51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19