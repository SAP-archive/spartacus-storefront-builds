import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DeferLoadingStrategy, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement, config) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.config = config;
        this.isPending = true;
        this.hasComponents = false;
        this.isPageFold = false;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         *
         * @deprecated we'll stop supporting this property in 2.0 as
         * it is not used separately.
         */
        this.slot$ = this.position$.pipe(switchMap(function (position) { return _this.cmsService.getContentSlot(position); }), tap(function (slot) { return _this.addSmartEditSlotClass(slot); }));
        this.components$ = this.slot$.pipe(map(function (slot) { return (slot && slot.components ? slot.components : []); }), distinctUntilChanged(function (a, b) {
            return a.length === b.length && !a.find(function (el, index) { return el.uid !== b[index].uid; });
        }));
        this.subscription = new Subscription();
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        get: function () {
            return this.position$.value;
        },
        /**
         * The position is used to find the CMS page slot (and optional outlet)
         * that is rendered in the PageSlotComponent. Furthermore, the position
         * is added as a CSS class name to the host element.
         */
        set: function (position) {
            this.position$.next(position);
            this.renderer.addClass(this.hostElement.nativeElement, position);
        },
        enumerable: true,
        configurable: true
    });
    PageSlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.components$.subscribe(function (components) {
            _this.hasComponents = components && components.length > 0;
            _this.pendingComponentCount = components ? components.length : 0;
            _this.isPending = _this.pendingComponentCount > 0;
        }));
    };
    PageSlotComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    PageSlotComponent.prototype.isLoaded = function (loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    };
    PageSlotComponent.prototype.getComponentDeferOptions = function (componentType) {
        var deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading: deferLoading };
    };
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    PageSlotComponent.prototype.getDeferLoadingStrategy = function (componentType) {
        if (this.config) {
            return (this.config.cmsComponents[componentType] || {})
                .deferLoading;
        }
    };
    PageSlotComponent.prototype.addSmartEditSlotClass = function (slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    };
    PageSlotComponent.prototype.addSmartEditContract = function (slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    };
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsConfig }
    ]; };
    __decorate([
        Input()
    ], PageSlotComponent.prototype, "position", null);
    __decorate([
        HostBinding('class.cx-pending')
    ], PageSlotComponent.prototype, "isPending", void 0);
    __decorate([
        HostBinding('class.has-components')
    ], PageSlotComponent.prototype, "hasComponents", void 0);
    __decorate([
        HostBinding('class.page-fold'), Input()
    ], PageSlotComponent.prototype, "isPageFold", void 0);
    PageSlotComponent = __decorate([
        Component({
            selector: 'cx-page-slot,[cx-page-slot]',
            template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], PageSlotComponent);
    return PageSlotComponent;
}());
export { PageSlotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNFO0lBZ0VFLDJCQUNZLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixXQUF1QixFQUN2QixNQUFrQjtRQUw5QixpQkFNSTtRQUxRLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVk7UUF0REcsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNiLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkQsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRTVEOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFnQyxJQUFJLENBQUMs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LENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRU8saURBQXFCLEdBQTdCLFVBQThCLElBQUk7UUFDaEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTyxnREFBb0IsR0FBNUIsVUFBNkIsSUFBcUI7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7SUFDSixDQUFDOztnQkE3RHVCLFVBQVU7Z0JBQ0csdUJBQXVCO2dCQUN0QyxTQUFTO2dCQUNOLFVBQVU7Z0JBQ2QsU0FBUzs7SUE5RDlCO1FBREMsS0FBSyxFQUFFO3FEQUlQO0lBS2dDO1FBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzt3REFBa0I7SUFDYjtRQUFwQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7NERBQXVCO0lBQ2xCO1FBQXhDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRTt5REFBb0I7SUFqQmpELGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLGlnQkFBeUM7WUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLGlCQUFpQixDQStIN0I7SUFBRCx3QkFBQztDQUFBLEFBL0hELElBK0hDO1NBL0hZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgQ29udGVudFNsb3REYXRhLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1zbG90LFtjeC1wYWdlLXNsb3RdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utc2xvdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBwYWdlIHNsb3QgKGFuZCBvcHRpb25hbCBvdXRsZXQpXG4gICAqIHRoYXQgaXMgcmVuZGVyZWQgaW4gdGhlIFBhZ2VTbG90Q29tcG9uZW50LiBGdXJ0aGVybW9yZSwgdGhlIHBvc2l0aW9uXG4gICAqIGlzIGFkZGVkIGFzIGEgQ1NTIGNsYXNzIG5hbWUgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5wb3NpdGlvbiQubmV4dChwb3NpdGlvbik7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN4LXBlbmRpbmcnKSBpc1BlbmRpbmcgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudDogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IHBvc2l0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHdlJ2xsIHN0b3Agc3VwcG9ydGluZyB0aGlzIHByb3BlcnR5IGluIDIuMCBhc1xuICAgKiBpdCBpcyBub3QgdXNlZCBzZXBhcmF0ZWx5LlxuICAgKi9cbiAgcmVhZG9ubHkgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiA9IHRoaXMucG9zaXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHBvc2l0aW9uID0+IHRoaXMuY21zU2VydmljZS5nZXRDb250ZW50U2xvdChwb3NpdGlvbikpLFxuICAgIHRhcChzbG90ID0+IHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpKVxuICApO1xuXG4gIHJlYWRvbmx5IGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPFxuICAgIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdXG4gID4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKHNsb3QgPT4gKHNsb3QgJiYgc2xvdC5jb21wb25lbnRzID8gc2xvdC5jb21wb25lbnRzIDogW10pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgIWEuZmluZCgoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGJbaW5kZXhdLnVpZClcbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgY29uZmlnOiBDbXNDb25maWdcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBjb25maWc/OiBDbXNDb25maWcpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZz86IENtc0NvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jb21wb25lbnRzJC5zdWJzY3JpYmUoY29tcG9uZW50cyA9PiB7XG4gICAgICAgIHRoaXMuaGFzQ29tcG9uZW50cyA9IGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA9IGNvbXBvbmVudHMgPyBjb21wb25lbnRzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgdmlldy5cbiAgICogV2UgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZHJvcHRoZSBgaXMtcGVuZGluZ2AgY2xhc3MgZnJvbSB0aGUgcGFnZSBzbG90XG4gICAqIHdoZW4gYWxsIG5lc3RlZCBjb21wb25lbnRzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICovXG4gIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChsb2FkU3RhdGUpIHtcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50LS07XG4gICAgfVxuICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmVyTG9hZGluZyA9IHRoaXMuZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZSk7XG4gICAgcmV0dXJuIHsgZGVmZXJMb2FkaW5nIH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgY29tcG9uZW50IHJlbmRlcmluZ1xuICAgKiBzaG91bGQgYmUgZGVmZXJyZWQuXG4gICAqL1xuICBwcml2YXRlIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IERlZmVyTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIHJldHVybiAoKHRoaXMuY29uZmlnIGFzIENtc0NvbmZpZykuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXSB8fCB7fSlcbiAgICAgICAgLmRlZmVyTG9hZGluZztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KTogdm9pZCB7XG4gICAgaWYgKHNsb3QgJiYgdGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdChzbG90KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBzbG90LnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxufVxuIl19