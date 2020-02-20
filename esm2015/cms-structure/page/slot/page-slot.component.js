import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DeferLoadingStrategy, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
let PageSlotComponent = class PageSlotComponent {
    constructor(cmsService, dynamicAttributeService, renderer, hostElement, config) {
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
        this.slot$ = this.position$.pipe(switchMap(position => this.cmsService.getContentSlot(position)), tap(slot => this.addSmartEditSlotClass(slot)));
        this.components$ = this.slot$.pipe(map(slot => (slot && slot.components ? slot.components : [])), distinctUntilChanged((a, b) => a.length === b.length && !a.find((el, index) => el.uid !== b[index].uid)));
        this.subscription = new Subscription();
    }
    /**
     * The position is used to find the CMS page slot (and optional outlet)
     * that is rendered in the PageSlotComponent. Furthermore, the position
     * is added as a CSS class name to the host element.
     */
    set position(position) {
        this.position$.next(position);
        this.renderer.addClass(this.hostElement.nativeElement, position);
    }
    get position() {
        return this.position$.value;
    }
    ngOnInit() {
        this.subscription.add(this.components$.subscribe(components => {
            this.hasComponents = components && components.length > 0;
            this.pendingComponentCount = components ? components.length : 0;
            this.isPending = this.pendingComponentCount > 0;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    }
    getComponentDeferOptions(componentType) {
        const deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    getDeferLoadingStrategy(componentType) {
        if (this.config) {
            return (this.config.cmsComponents[componentType] || {})
                .deferLoading;
        }
    }
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
};
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsConfig }
];
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
export { PageSlotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLHdCQUF3QixFQUN4QixlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBZ0U1QixZQUNZLFVBQXNCLEVBQ3RCLHVCQUFnRCxFQUNoRCxRQUFtQixFQUNuQixXQUF1QixFQUN2QixNQUFrQjtRQUpsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBdERHLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5ELGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUU1RDs7Ozs7V0FLRztRQUNNLFVB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VSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVPLG9CQUFvQixDQUFDLElBQXFCO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBOUR5QixVQUFVO1lBQ0csdUJBQXVCO1lBQ3RDLFNBQVM7WUFDTixVQUFVO1lBQ2QsU0FBUzs7QUE5RDlCO0lBREMsS0FBSyxFQUFFO2lEQUlQO0FBS2dDO0lBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztvREFBa0I7QUFDYjtJQUFwQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7d0RBQXVCO0FBQ2xCO0lBQXhDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRTtxREFBb0I7QUFqQmpELGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLGlnQkFBeUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQStIN0I7U0EvSFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QsW2N4LXBhZ2Utc2xvdF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIGlzIHVzZWQgdG8gZmluZCB0aGUgQ01TIHBhZ2Ugc2xvdCAoYW5kIG9wdGlvbmFsIG91dGxldClcbiAgICogdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgUGFnZVNsb3RDb21wb25lbnQuIEZ1cnRoZXJtb3JlLCB0aGUgcG9zaXRpb25cbiAgICogaXMgYWRkZWQgYXMgYSBDU1MgY2xhc3MgbmFtZSB0byB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHBvc2l0aW9uKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgcG9zaXRpb24pO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uJC52YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY3gtcGVuZGluZycpIGlzUGVuZGluZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWNvbXBvbmVudHMnKSBoYXNDb21wb25lbnRzID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFnZS1mb2xkJykgQElucHV0KCkgaXNQYWdlRm9sZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50OiBudW1iZXI7XG5cbiAgcmVhZG9ubHkgcG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIG9ic2VydmFibGUgd2l0aCBgQ29udGVudFNsb3REYXRhYCBmb3IgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgd2UnbGwgc3RvcCBzdXBwb3J0aW5nIHRoaXMgcHJvcGVydHkgaW4gMi4wIGFzXG4gICAqIGl0IGlzIG5vdCB1c2VkIHNlcGFyYXRlbHkuXG4gICAqL1xuICByZWFkb25seSBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAocG9zaXRpb24gPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbnRlbnRTbG90KHBvc2l0aW9uKSksXG4gICAgdGFwKHNsb3QgPT4gdGhpcy5hZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCkpXG4gICk7XG5cbiAgcmVhZG9ubHkgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8XG4gICAgQ29udGVudFNsb3RDb21wb25lbnREYXRhW11cbiAgPiA9IHRoaXMuc2xvdCQucGlwZShcbiAgICBtYXAoc2xvdCA9PiAoc2xvdCAmJiBzbG90LmNvbXBvbmVudHMgPyBzbG90LmNvbXBvbmVudHMgOiBbXSkpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiAhYS5maW5kKChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gYltpbmRleF0udWlkKVxuICAgIClcbiAgKTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBjb25maWc6IENtc0NvbmZpZ1xuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbmZpZz86IENtc0NvbmZpZykgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnPzogQ21zQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNvbXBvbmVudHMkLnN1YnNjcmliZShjb21wb25lbnRzID0+IHtcbiAgICAgICAgdGhpcy5oYXNDb21wb25lbnRzID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID0gY29tcG9uZW50cyA/IGNvbXBvbmVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LlxuICAgKiBXZSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkcm9wdGhlIGBpcy1wZW5kaW5nYCBjbGFzcyBmcm9tIHRoZSBwYWdlIHNsb3RcbiAgICogd2hlbiBhbGwgbmVzdGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgKi9cbiAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGxvYWRTdGF0ZSkge1xuICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQtLTtcbiAgICB9XG4gICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gIH1cblxuICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmZXJMb2FkaW5nID0gdGhpcy5nZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlKTtcbiAgICByZXR1cm4geyBkZWZlckxvYWRpbmcgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciBjb21wb25lbnQgcmVuZGVyaW5nXG4gICAqIHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuICgodGhpcy5jb25maWcgYXMgQ21zQ29uZmlnKS5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdIHx8IHt9KVxuICAgICAgICAuZGVmZXJMb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpOiB2b2lkIHtcbiAgICBpZiAoc2xvdCAmJiB0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHNsb3QucHJvcGVydGllcyxcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG59XG4iXX0=